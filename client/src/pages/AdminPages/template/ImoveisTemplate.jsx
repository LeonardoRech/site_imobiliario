import axios from 'axios'
import { baseApiUrl } from '../../../services/api'
import { IconEdit, IconTrash, IconHome } from '../../../icons'
import { useEffect, useState } from 'react'
import JoditEditor from 'jodit-react'

export default function ImoveisTemplate(){
    const initialState = {
        imovel: {
            name: '',
            subtitle: '',
            price: '',
            area: '',
            beedroms: '',
            garage: '',
            desc_apto: '',
            desc_edificio: '',
            user: '',
            category: '',
            city: '',
            district: '',
            perfil: '',
            mobilia: ''
        },
        list: []
    }

    const [state, setState] = useState({...initialState})
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [subtitle, setSubtitle] = useState('')
    const [price, setPrice] = useState('')
    const [area, setArea] = useState('')
    const [beedroms, setBeedroms] = useState('')
    const [garage, setGarage] = useState('')
    const [desc_apto, setDesc_apto] = useState('')
    const [desc_edificio, setDesc_edificio] = useState('')
    const [category, setCategory] = useState('')
    const [city, setCity] = useState('')
    const [district, setDistrict] = useState('')
    const [perfil, setPerfil] = useState('')
    const [mobilia, setMobilia] = useState('')
    const [list, setList] = useState([])
    const [visible, setVisible] = useState('table')
    const [image, setImage] = useState('')

    const user = localStorage.getItem('userName')


    useEffect(() => {
        axios.get(`${baseApiUrl}/imoveis`).then(imoveisRes => {
            setList(imoveisRes.data.data)
        })
    })

    function clear(){
        setId(null)
        setName(null)
        setSubtitle(null)
        setArea(null)
        setBeedroms(null)
        setGarage(null)
        setImage(null)
        setCategory(null)
        setCity(null)
        setDesc_apto('')
        setDesc_edificio('')
        setDistrict(null)
        setPerfil(null)
        setMobilia(null)
        setVisible('table')
    }

    const save = async () => {
        if(id < 1) {
            const formData = new FormData()
            formData.append('name', name)
            formData.append('id', id)
            formData.append('image', image)
            formData.append('subtitle', subtitle)
            formData.append('price', price)
            formData.append('area', area)
            formData.append('beedroms', beedroms)
            formData.append('garage', garage)
            formData.append('desc_apto', desc_apto)
            formData.append('desc_edificio', desc_edificio)
            formData.append('user', user)
            formData.append('category', category)
            formData.append('city', city)
            formData.append('district', district)
            formData.append('perfil', perfil)
            formData.append('mobilia', mobilia)

            axios.post(`${baseApiUrl}/imoveis`, formData).then((response) => {
                alert('Imovel Inserido com Sucesso!')
            }).catch((err) => {
                console.log('err', err)
            })
        }

        if(id > 0) {
            axios.put(`${baseApiUrl}/imoveis`, {
                id: id,
                name: name,
                subtitle: subtitle,
                price: price,
                area: area,
                beedroms: beedroms,
                garage: garage,
                desc_apto: desc_apto,
                desc_edificio: desc_edificio,
                category: category,
                city: city,
                district: district,
                perfil: perfil,
                mobilia: mobilia,
                image: image
            }).then(() => {
                alert("success")
            })
        }

        clear()
        setVisible('table')
    }

    const onInputChange = (e) => {
        setImage(e.target.files[0])
    }

    function getUpdatedList(imovel, add = true) {
        const list = list.filter(u => u.id !== imovel.id)
        if(add) list.unshift(imovel)
        return list
    }


    function getImovel(imovel){
        setVisible('form')
        setId(imovel.id)
        setName( imovel.name )
        setSubtitle( imovel.subtitle )
        setPrice( imovel.price )
        setArea( imovel.area )
        setDesc_apto(imovel.desc_apto.toString())
        setBeedroms( imovel.beedroms )
        setGarage( imovel.garage )
        setImage( imovel.image )
        setCategory( imovel.category )
        setCity( imovel.city )
        setDistrict( imovel.district )
        setPerfil( imovel.perfil )
        setMobilia( imovel.mobilia )
    }

    function remove(imovel) {
        axios.delete(`${baseApiUrl}/imoveis/${imovel.id}`).then(res => {
            const list = getUpdatedList(imovel, false)
            setState({ list })
        })
    }

    function alterTableForm(){
        setVisible('form')
    }

    function renderForm(){
        return (
            <div className='flex flex-col bg-gray-700 p-5 rounded-md'>
                <div className='flex flex-col'>
                    <div className='flex flex-row justify-between mb-5'>
                        {id ? (
                            <>
                                <input 
                                    className={`
                                        p-1 rounded-md border border-yellow-500
                                        w-60
                                    `} 
                                    type="text" 
                                    name='id'
                                    value={id}
                                    readOnly
                                />
                            </>
                        ): false}
                        <input
                            className={`
                                p-1 rounded-md border border-yellow-500
                                w-60
                            `} 
                            type="text"
                            name='name'
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Nome do Imóvel"
                        />
                        <input
                            className={`
                                p-1 rounded-md border border-yellow-500
                                w-60
                            `} 
                            type="text"
                            name='subtitle'
                            value={subtitle}
                            onChange={e => setSubtitle(e.target.value)}
                            placeholder="Subtitulo do Imóvel"
                            
                        />
                        <input
                            className={`
                                p-1 rounded-md border border-yellow-500
                                w-60
                            `} 
                            type="text"
                            name='price'
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                            placeholder="Preço do Imóvel"
                        />
                    </div>
                    <div className='flex flex-row justify-between mb-5'>
                        <input
                            className={`
                                p-1 rounded-md border border-yellow-500
                                w-60
                            `} 
                            type="text"
                            name='area'
                            value={area}
                            onChange={e => setArea(e.target.value)}
                            placeholder="Área do Imóvel"
                        />
                        <input
                            className={`
                                p-1 rounded-md border border-yellow-500
                                w-60
                            `} 
                            type="text"
                            name='beedroms'
                            value={beedroms}
                            onChange={e => setBeedroms(e.target.value)}
                            placeholder="Quantidade de Dormitórios"
                        />
                        <input
                            className={`
                                p-1 rounded-md border border-yellow-500
                                w-60
                            `} 
                            type="text"
                            name='garage'
                            value={garage}
                            onChange={e => setGarage(e.target.value)}
                            placeholder="Quantidade de Vagas"
                        />
                    </div>
                    <input 
                        type="file" 
                        name="image" 
                        onChange={onInputChange} 
                        className=""
                    />
                    <label className='mt-3 text-white'>Descrição do Apartamento</label>
                    <div className='flex flex-row w-fit bg-white rounded-md'>
                        <JoditEditor 
                            value={desc_apto}
                            onBlur={e => setDesc_apto(e)}
                            onChange={e => setDesc_apto(e)}
                        /> 
                    </div>
                    <label className='mt-3 text-white'>Descrição do Edifício</label>
                    <div className='flex flex-row w-fit bg-white rounded-md mb-3'>
                        <JoditEditor 
                            value={desc_edificio}
                            onBlur={e => setDesc_edificio(e)}
                            onChange={e => setDesc_edificio(e)}
                        /> 
                    </div>
                    <div className='flex flex-row justify-between mb-5'>
                        <select 
                            className={`
                                p-1
                                w-60
                                border-solid border-2 border-gray-600 rounded-md 
                            `}
                            name="category"
                            value={category}
                            onChange={e => setCategory(e.target.value)}>
                            <option value="">Selecione uma Categoria</option>
                            <option value='Anual'>Anual</option>
                            <option value='Venda'>Venda</option>
                            <option value='Temporada'>Temporada</option>
                        </select>
                        <select 
                            className={`
                                p-1
                                w-60
                                border-solid border-2 border-gray-600 rounded-md 
                            `}
                            name="city"
                            value={city}
                            onChange={e => setCity(e.target.value)}>
                            <option value="">Selecione a Localização</option>
                            <option value='SC - Itapema'>SC - Itapema</option>
                        </select>
                        <select 
                            className={`
                                p-1
                                w-60
                                border-solid border-2 border-gray-600 rounded-md 
                            `}
                            name="district"
                            value={district}
                            onChange={e => setDistrict(e.target.value)}>
                            <option value="">Selecione o Bairro</option>
                            <option value='Meia Praia'>Meia Praia</option>
                            <option value='Centro'>Centro</option>
                            <option value='Morretes'>Morretes</option>
                        </select>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <select 
                            className={`
                                p-1
                                w-60
                                border-solid border-2 border-gray-600 rounded-md 
                            `}
                            name="perfil"
                            value={perfil}
                            onChange={e => setPerfil(e.target.value)}>
                            <option value="">Selecione o Perfil</option>
                            <option value='Pré-Lançamento'>Pré-Lançamento</option>
                            <option value='Lançamento'>Lançamento</option>
                            <option value='Em Construção'>Em Construção</option>
                            <option value='Novo'>Novo</option>
                            <option value='Usado'>Usado</option>
                        </select>
                        <select 
                            className={`
                                p-1
                                w-60
                                border-solid border-2 border-gray-600 rounded-md 
                            `}
                            name="mobilia"
                            value={mobilia}
                            onChange={e => setMobilia(e.target.value)}>
                            <option value="">Selecione a Mobilia</option>
                            <option value='Mobiliado'>Mobiliado</option>
                            <option value='Imobiliado'>Imobiliado</option>
                            <option value='Semi-Mobiliado'>Semi-Mobiliado</option>
                        </select>
                    </div>         
                </div>
                <div className='mt-5 flex flex-row justify-end'>
                    <button className={`
                            bg-green-600
                            p-2 rounded-md mr-2
                        `}
                        onClick={save}
                    >
                        Salvar
                    </button>
                    <button className={`
                            bg-gray-500
                            p-2 rounded-md
                        `}
                        onClick={clear}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        )
    }

    function renderTable(){
        return (
            <div className='flex flex-col'>
                <div className='flex justify-end mt-5'>
                    <button className={`
                        bg-green-600 text-gray-700 hover:bg-green-500 hover:text-black
                        flex flex-row justify-center items-center
                        w-36 p-1 rounded-md`
                        }
                        onClick={alterTableForm}
                    >
                        {IconHome} Novo imóvel
                    </button>
                </div>
                <table className={`
                    w-full rounded-md mt-5
                    bg-gray-700
                    text-center text-white
                `}>
                    <thead className={`
                        border-b border-black
                        text-xl
                    `}>
                        <th className='p-2 font-light'>Código</th>
                        <th className='p-2 font-light'>Nome</th>
                        <th className='p-2 font-light'>Localização</th>
                        <th className='p-2 font-light'>Categoria</th>
                        <th className='p-2 font-light'>price</th>
                        <th className='p-2 font-light'>Ações</th>
                    </thead>
                    <tbody>
                        {list.map((imovel, i) => {
                            return (
                                <tr key={imovel.id} className={`
                                    ${i % 2 === 0 ? 'bg-gray-600' : 'bg-gray-700'}
                                    hover:bg-gray-900
                                `}>
                                    <td className='p-2'>{imovel.id}</td>
                                    <td className='p-2'>{imovel.name}</td>
                                    <td className='p-2'>{imovel.city + ' - ' + imovel.district}</td>
                                    <td className='p-2'>{imovel.category}</td>
                                    <td className='p-2'>{imovel.price}</td>
                                    <td className='p-2'>
                                        <button className={`
                                            text-yellow-600 p-1 mr-1
                                            hover:bg-gray-200 hover:rounded-full
                                        `}
                                        onClick={() => getImovel(imovel)}
                                        >
                                            {IconEdit}
                                        </button>
                                        <button className={`
                                            text-red-600 p-1 ml-1
                                            hover:bg-gray-200 hover:rounded-full
                                        `}
                                        onClick={() => remove(imovel)}
                                        >
                                            {IconTrash}
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div>
             {visible === 'table' ? (
                 <>
                    {renderTable()}
                 </>
             ):(
                <>
                    {renderForm()}
                </>
             )}
        </div>
    )

}