import React, {useContext} from 'react'

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom'

import { AuthContext, AuthProvider } from './contexts/auth';
import {DarkProvider} from './contexts/dark'


import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPages';
import UsersPage from './pages/AdminPages/users';
import ImagesPage from './pages/AdminPages/images';
import ContactsPage from './pages/AdminPages/contacts';
import ImoveisPage from './pages/AdminPages/imoveis';
import ByCategory from './pages/CategoriesPage/ByCategory';
import ImovelById from './pages/ImovelById/ImovelById';
import ImovelImages from './pages/ImovelById/ImovelImages';

export default function AppRoutes() {
    const Private = ({children}) => {
        const { authenticate, loading } = useContext(AuthContext)
        
        if(loading){
            return <div className="loading">Carregado...</div>
        }

        if(!authenticate){
            return <Navigate to="/login"/>
        }

        return children
    }

    return (
        <Router>
            <AuthProvider>
                <DarkProvider>
                    <Routes>
                        <Route path="/login" element={<LoginPage />}/>
                        <Route path="/admin" element={<Private><AdminPage/></Private>}/>
                        <Route path="/users" element={<Private><UsersPage/></Private>}/>
                        <Route path="/contacts" element={<Private><ContactsPage/></Private>}/>
                        <Route path="/imoveis" element={<Private><ImoveisPage/></Private>}/>
                        <Route path="/images" element={<Private><ImagesPage/></Private>}/>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/categoria/:cat" element={<ByCategory/>}/>
                        <Route path="/categoria/imoveis/:id" element={<ImovelById />}/>
                        <Route path='/imoveis/:id/images' element={<ImovelImages />}/>
                    </Routes>
                </DarkProvider>
            </AuthProvider>
        </Router>
    )
}