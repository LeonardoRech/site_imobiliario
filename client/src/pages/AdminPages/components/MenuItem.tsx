import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/auth";


interface MenuItemProps {
    href?: string
    text: string
    icon: any
    className?: string
}

export default function MenuItem(props: MenuItemProps) {
    const { authenticate ,logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
    }
    
    function renderLink(){
        return (
        <a href={`${props.href}`} className={`
                flex flex-col justify-center items-center p-2
            `}>
            <span className='h-6 w-6'>{props.icon}</span>
            <span className={`
                text-sm font-light text-gray-700
                dark:text-white
            `}>{props.text}</span> 
        </a>
        )
    }

    function renderLogout(){
        return(
            <a onClick={handleLogout} className={`
                flex flex-col justify-center items-center
                text-gray-700 ${props.className} p-2
            `}>
                <span className='h-6 w-6'>{props.icon}</span>
                <span className={`
                    text-sm font-light 
                `}>{props.text}</span> 
            </a>
        )
    }

    return(
        <li className={`hover:bg-neutral-200 dark:hover:bg-neutral-800 cursor-pointer`}>
            {props.href ? (
                renderLink()
            ): (
                renderLogout()
            )}
        </li>
    )
}