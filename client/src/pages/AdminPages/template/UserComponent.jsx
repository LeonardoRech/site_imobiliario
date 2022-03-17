import axios from 'axios'
import { baseApiUrl } from '../../../services/api'
import { IconEdit, IconTrash, IconUser } from '../../../icons'
import { useEffect, useState } from 'react'

export default function UserCrudAtual(){
    const initialState = {
        user: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        list: []
    }

    const [state, setState] = useState({ ...initialState })
    const [list, setList] = useState([])
    const [visible, setVisible] = useState('table')

    useEffect(() => {
        axios(`${baseApiUrl}/users`).then(resp => {
            setList(resp.data)
        })
    })

    function clear(){
        setState({ user: initialState.user})
        setVisible('table')
    }

    const save = async () => {
        const user = state.user
        const method = user.id ? 'put' : 'post'
        const url = await user.id ? `${baseApiUrl}/users/${user.id}` : `${baseApiUrl}/users`
        axios[method](url, user)
            .then(resp => {
                const list = getUpdatedList(resp.data)
                setState({ user: initialState.user, list })
            })
        setState({ user: initialState.user})
        setVisible('table')
    }

    function getUpdatedList(user, add = true) {
        const list = list.filter(u => u.id !== user.id)
        if(add) list.unshift(user)
        return list
    }

    function updateField(e) {
        const user = { ...state.user }
        user[e.target.name] = e.target.value
        setState({user})
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
                        value={state.user.name}
                        onChange={e => updateField(e)}
                        placeholder="Nome do Usuário"
                    />
                    <label className='mt-3 text-white'>Email</label>
                    <input
                        className={`
                            p-1 rounded-md border border-yellow-500
                            w-60
                        `} 
                        type="text"
                        name='email'
                        value={state.user.email}
                        onChange={e => updateField(e)}
                        placeholder="Email do Usuário"
                    />
                    <label className='mt-3 text-white'>Senha</label>
                    <input
                        className={`
                            p-1 rounded-md border border-yellow-500
                            w-60
                        `} 
                        type="text"
                        name='password'
                        value={state.user.password}
                        onChange={e => updateField(e)}
                        placeholder="Nome do Usuário"
                    />
                    <label className='mt-3 text-white'>Confirmação de Senha</label>
                    <input
                        className={`
                            p-1 rounded-md border border-yellow-500
                            w-60
                        `} 
                        type="text"
                        name='confirmPassword'
                        value={state.user.confirmPassword}
                        onChange={e => updateField(e)}
                        placeholder="Confirme a Senha"
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

    function getUser(user){
        setVisible('form')
        setState({ user })
    }

    function remove(user) {
        axios.delete(`${baseApiUrl}/users/${user.id}`).then(res => {
            const list = getUpdatedList(user, false)
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
                        onClick={alterTableForm}
                    >
                        {IconUser} Novo Usuário
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
                        <th className='p-2 font-light'>Email</th>
                        <th className='p-2 font-light'>Ações</th>
                    </thead>
                    <tbody>
                        {list.map((user, i) => {
                            return (
                                <tr key={user.id} className={`
                                    ${i % 2 === 0 ? 'bg-gray-600' : 'bg-gray-700'}
                                    hover:bg-gray-900
                                `}>
                                    <td className='p-2'>{user.id}</td>
                                    <td className='p-2'>{user.name}</td>
                                    <td className='p-2'>{user.email}</td>
                                    <td className='p-2'>
                                        <button className={`
                                            text-yellow-600 p-1 mr-1
                                            hover:bg-gray-200 hover:rounded-full
                                        `}
                                        onClick={() => getUser(user)}
                                        >
                                            {IconEdit}
                                        </button>
                                        <button className={`
                                            text-red-600 p-1 ml-1
                                            hover:bg-gray-200 hover:rounded-full
                                        `}
                                        onClick={() => remove(user)}
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

    function alterTableForm(){
        setVisible('form')
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