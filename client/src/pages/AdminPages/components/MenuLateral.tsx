import { IconHome, IconUser, IconLocal, IconPhone, IconBuild, IconImg, IconLogout } from '../../../icons'
import MenuItem from './MenuItem'

export default function MenuLateral() {
    return (
        <aside className={`
            flex flex-col
            bg-neutral-300 text-neutral-700
            dark:bg-neutral-700 dark:text-neutral-200
        `}>
            <div className={`
                flex flex-col items-center justify-center
                h-20 w-20 shadow
            `}>
                <a href="/">
                    <img src="/corso.jpg" className="h-full w-full"/>
                </a>
            </div>
            <ul className=' flex-grow '>
                <MenuItem href="/admin" text="Início" icon={IconHome} />
                <MenuItem href="/imoveis" text="Imoveis" icon={IconBuild} />
                <MenuItem href="/images" text="Imagens" icon={IconImg} />
                {localStorage.boolean === 'true' ? (
                    <>
                        <MenuItem href="/users" text="Usuários" icon={IconUser} />
                        <MenuItem href="/contacts" text="Contatos" icon={IconPhone} />
                    </>
                ): false}
            </ul>
            <ul>
                <MenuItem 
                    text="Sair" 
                    icon={IconLogout} 
                    className={`
                    text-red-600 dark:text-red-400
                    hover:bg-red-400 
                    hover:text-white
                    dark:hover:bg-neutral-800
                    `}
                />
            </ul>
        </aside>
    )
}