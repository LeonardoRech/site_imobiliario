import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/auth";
import { ArrowDown } from "../../../icons";
import ButtonTema from "../../AdminPages/components/ButtonTema";
import DarkHook from "../../../hooks/darkHook";

export default function Header(){
    const {tema, changeTema} = DarkHook()

    const { logout } = useContext(AuthContext)

    const [dropMenu, setDropMenu] = useState('closeDropMenu')


    const handleLogout = () => {
        logout()
    }

    const showOrCloseDropMenu = () => {
        dropMenu === 'closeDropMenu' ? (setDropMenu('showDropMenu')):(setDropMenu('closeDropMenu'))
    }

    function renderDropMenu() {
        return (
            <div className={`
                mh-20 w-44 rounded 
                flex flex-col absolute items-center 
                bg-red-300
            `}>
                <h1 className={`
                    w-full h-10 flex justify-center 
                    text-white text-md pt-2 rounded-t 
                    bg-gray-700 hover:bg-gray-600
                `}>
                    <a href="/admin">Admin</a>
                </h1>
                <h1 className={`
                    w-full h-10 flex justify-center
                    text-white text-md pt-2 rounded-b 
                    bg-gray-700 hover:bg-gray-600
                `}>
                    <button onClick={handleLogout}>Logout</button>
                </h1>
            </div>
        )
    }

    return(
        <div className={`
            fixed w-full
            h-28 py-7 flex flex-col justify-center items-center
            bg-gradient-to-r from-yellow-400 to-yellow-500
        `}>
            <div className="absolute right-5">
                <ButtonTema tema={tema} changeTema={changeTema}/>
            </div>
            <h2 className={`
                text-3xl text-white font-light
                flex text-center mb-2
            `}
            >
                <a href="/">Corso Negócios Imobiliários</a>
            </h2>
            {localStorage.user ? (
                <div>
                    <div className={`
                        flex justify-center
                        h-10 w-44 rounded px-3 border-2
                        bg-yellow-400 hover:bg-amber-400
                    `}> 
                        <h1 className={`
                            flex flex-row justify-evenly items-center
                            w-full
                            text-white text-md
                        `}>{localStorage.userName} <button onClick={showOrCloseDropMenu}>{ArrowDown}</button></h1>
                    </div>
                    {dropMenu === 'closeDropMenu' ? (
                        false
                    ):(
                        <>
                            {renderDropMenu()}                        
                        </>
                    )}
                </div>
            ): (
                <div className={`
                    flex flex-row w-full justify-center
                `}>
                    <a href="https://www.facebook.com/francisca.franci.50" target="_blank" className="text-white text-3xl hover:text-4xl mr-5"><i class="fab fa-facebook"></i></a>
                    <a href="https://wa.me/message/7BUZAT5T2IGTK1" target="_blank" className="text-white text-3xl hover:text-4xl"><i class="fab fa-whatsapp"></i></a>
                    <a href="https://www.instagram.com/corsoimoveisitapema/" target={"_blank"} className="text-white text-3xl hover:text-4xl ml-5"><i class="fab fa-instagram"></i></a>
                </div>
            )}
        </div>
    )
}