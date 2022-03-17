import { IconHome } from "../../../icons";

export default function Header() {

    return (
        <div className="flex flex-col ">
            <div className={`
                h-16 flex flex-row w-full
                bg-gradient-to-r from-yellow-400 to-yellow-500
            `}>
                <a href="/" className={`
                        hover:bg-yellow-500 text-white
                        flex justify-center items-center w-16
                `}>
                    <h1>
                        {IconHome}
                    </h1>                
                </a>
                <h2 className={`
                    text-3xl text-white font-light m-auto
                    flex justify-center items-center
                `}
                >
                    Corso Negócios Imobiliários
                </h2>
            </div>
        </div>
    )
}