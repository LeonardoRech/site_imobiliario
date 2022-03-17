import { IconSun, IconMoon } from "../../../icons"

export default function ButtonTema(props) {
    return props.tema === 'dark' ? (
        <div onClick={props.changeTema} className={`
            hidden sm:flex items-center cursor-pointer
            bg-gradient-to-r from-yellow-300 to-yellow-700
            w-14 lg:w-24 h-8 p-1 rounded-full
        `}>
            <div className={`
                flex items-center justify-center
                bg-white text-yellow-600 
                w-6 h-6 rounded-full
            `}>
                {IconSun(6)}
            </div>
            <div className={`
                hidden lg:flex items-center ml-3
                text-white
            `}>
                <span className="text-sm">Claro</span>
            </div>
        </div>
    ) : (
        <div onClick={props.changeTema} className={`
            hidden sm:flex items-center justify-end cursor-pointer
            bg-gradient-to-r from-gray-500 to-gray-900
            w-14 lg:w-24 h-8 p-1 rounded-full
        `}>
            <div className={`
                hidden lg:flex items-center
                text-gray-300 mr-2
            `}>
                <span className="text-sm">Escuro</span>
            </div>
            <div className={`
                flex items-center justify-center
                bg-black text-gray-300
                w-6 h-6 rounded-full
            `}>
                {IconMoon(5)}
            </div>
        </div>
    )
}