import {useState, useContext} from 'react'
import AuthInput from './AuthInput'
import { AuthContext } from '../../contexts/auth'

const LoginPage = () => {
    const {authenticate, login} = useContext(AuthContext)

    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log('submit', {email, password})
        login(email, password) //Integração com o contexto
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="flex h-screen items-center justify-center">
            <div className={`
                hidden md:block md:w-1/2 lg:w-2/3
            `}>
                <img 
                    src="https://source.unsplash.com/random" 
                    alt="Imagem da Tela de Autenticação" 
                    className="h-screen w-full object-cover"
                />
            </div>
            <form 
            className={`
                m-10 w-full md:w-1/2 lg:w-1/3
            `}>
                <h1 className={`
                    text-xl font-bold mb-5
                `}>Entre com a Sua Conta</h1>
                <p>{String(authenticate)}</p>
                <AuthInput 
                    label="Email"
                    type={"email"}
                    valor={email}
                    valorMudou={setEmail}
                    
                />
                <AuthInput 
                    label="Senha"
                    type={"password"}
                    valor={password}
                    valorMudou={setPassword}
                    
                />
                <button
                    className={`
                        w-full bg-yellow-500 hover:bg-yellow-400
                        text-white rounded-lg px-4 py-3 mt-6
                        cursor-pointer
                    `}
                    type="submit"
                    onClick={handleSubmit}
                >
                    Entrar
                </button>
            </form>
        </div>

    )
}

export default LoginPage