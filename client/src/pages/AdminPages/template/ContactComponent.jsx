import axios from 'axios'
import { baseApiUrl } from '../../../services/api'
import { IconEdit, IconTrash, IconPhone } from '../../../icons'
import { useEffect, useState } from 'react'

export default function ContactComponent() {
    const initialState = {
        contact: {
            name: '',
            apto: '',
            number: ''
        },
        list: []
    }
    
    const [state, setState] = useState({ ...initialState })
    const [list, setList] = useState([])
    const [visible, setVisible] = useState('table')

    useEffect(() => {
        axios(`${baseApiUrl}/contacts`).then(resp => {
            setList(resp.data)
        })
    })

    function clear(){
        setState({ contact: initialState.contact})
        setVisible('table')
    }

    const save = async () => {
        const contact = state.contact
        const method = contact.id ? 'put' : 'post'
        const url = await contact.id ? `${baseApiUrl}/contacts/${contact.id}` : `${baseApiUrl}/contacts`
        axios[method](url, contact)
            .then(resp => {
                const list = getUpdatedList(resp.data)
                setState({ contact: initialState.contact, list })
            })
        setState({ contact: initialState.contact})
        setVisible('table')
    }

    function getUpdatedList(contact, add = true) {
        const list = list.filter(u => u.id !== contact.id)
        if(add) list.unshift(contact)
        return list
    }

    function updateField(e) {
        const contact = { ...state.contact }
        contact[e.target.name] = e.target.value
        setState({contact})
    }

    function renderForm(){
        return (
            <div className='flex flex-col bg-gray-700 p-5 rounded-md'> 
                <div className='flex flex-col'>
                    <label className=' text-white'>Nome</label>
                    <input
                        className={`
                            p-1 rounded-md border border-yellow-500
                            w-60
                        `} 
                        type="text"
                        name='name'
                        value={state.contact.name}
                        onChange={e => updateField(e)}
                        placeholder="Nome do Contato"
                    />
                    <label className=' text-white'>Localidade</label>
                    <input
                        className={`
                            p-1 rounded-md border border-yellow-500
                            w-60
                        `} 
                        type="text"
                        name='apto'
                        value={state.contact.apto}
                        onChange={e => updateField(e)}
                        placeholder="Localização"
                    />
                    <label className=' text-white'>Número do Contato</label>
                    <input
                        className={`
                            p-1 rounded-md border border-yellow-500
                            w-60
                        `} 
                        type="text"
                        name='number'
                        value={state.contact.number}
                        onChange={e => updateField(e)}
                        placeholder="Contato"
                    />
                </div>
                <div className='mt-5 flex flex-row justify-end'>
                    <button className={`
                            bg-green-600
                            p-2 rounded-md mr-2
                        `}
                        onClick={e => save(e)}
                    >
                        Salvar
                    </button>
                    <button className={`
                            bg-gray-500
                            p-2 rounded-md
                        `}
                        onClick={e => clear(e)}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        )
    }

    function getContact(contact){
        setVisible('form')
        setState({ contact })
    }

    function remove(contact) {
        axios.delete(`${baseApiUrl}/contacts/${contact.id}`).then(res => {
            const list = getUpdatedList(contact, false)
            setState({ list })
        })
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
                        onClick={alterTableToForm}
                    >
                        {IconPhone} Novo Contato
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
                        <th className='p-2 font-light'>Localidade</th>
                        <th className='p-2 font-light'>Número</th>
                    </thead>
                    <tbody>
                        {list.map((contact, i) => {
                            return (
                                <tr key={contact.id} className={`
                                    ${i % 2 === 0 ? 'bg-gray-600' : 'bg-gray-700'}
                                    hover:bg-gray-900
                                `}>
                                    <td className='p-2'>{contact.id}</td>
                                    <td className='p-2'>{contact.name}</td>
                                    <td className='p-2'>{contact.apto}</td>
                                    <td className='p-2'>{contact.number}</td>
                                    <td className='p-2'>
                                        <button className={`
                                            text-yellow-600 p-1 mr-1
                                            hover:bg-gray-200 hover:rounded-full
                                        `}
                                        onClick={() => getContact(contact)}
                                        >
                                            {IconEdit}
                                        </button>
                                        <button className={`
                                            text-red-600 p-1 ml-1
                                            hover:bg-gray-200 hover:rounded-full
                                        `}
                                        onClick={() => remove(contact)}
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

    function alterTableToForm(){
        setVisible('form')
    }

    return (
        <div>
            { visible === 'table' ? (
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