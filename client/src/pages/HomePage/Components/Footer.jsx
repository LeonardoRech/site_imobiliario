export default function Footer(){

    return(
        <div className={`
            flex flex-row justify-center items-center 
            h-16
            bg-gradient-to-b from-yellow-400 to-yellow-500
        `}>
            <h1 className="uppercase mr-1">Desenvolvido por:</h1>
            <span className="uppercase font-bold">Leonardo Rech</span>
        </div>
    )
}