import {useState, useEffect, createContext} from 'react'

import {useNavigate} from 'react-router-dom'

import {api, createSession } from '../services/api'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const navigate = useNavigate()
    const [user, setUser] =  useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user')

        if(recoveredUser) {
            setUser(JSON.parse(recoveredUser))
        }

        setLoading(false)
    }, [])

    const login = async (email, password) => {
        const response = await createSession(email, password)

        console.log("login", response.data)
        
        const loggedUser = response.data
        const token = response.data.token
        const nameUser = response.data.name
        const admin = response.data.admin

        localStorage.setItem('user', JSON.stringify(loggedUser))
        localStorage.setItem('token', token)
        localStorage.setItem('userName', nameUser)
        localStorage.setItem('boolean', admin)

        api.defaults.headers.Authorization = `Bearer ${token}`

        setUser(loggedUser)  
        navigate("/admin")  
    }

    const logout = () => {
        console.log("logout")

        localStorage.removeItem('user')
        localStorage.removeItem('token')
        api.defaults.headers.Authorization = null
        
        setUser(null)
        navigate("/login")
    }

    return (
        <AuthContext.Provider value={{authenticate: Boolean(user), user, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
            
    )
}