export default function Main(props){

    return(
        <>
            <div className={`
                w-full h-24 px-10
                flex justify-center items-center 
                bg-gray-100 dark:bg-neutral-700
            `}>
                <a href={`/categoria/imoveis/${props.id}`}>
                    <button className={`
                        mx-14 h-10 w-44 px-2 rounded
                        uppercase text-lg font-light text-white
                        bg-yellow-500 hover:bg-yellow-300
                    `}>
                        Imóvel
                    </button>
                </a>
                <a href={`/imoveis/${props.id}/images`}>
                    <button className={`
                        mx-14 h-10 w-44 px-2 rounded
                        uppercase text-lg font-light text-white
                        bg-yellow-500 hover:bg-yellow-300                    
                    `}>
                        Fotos
                    </button>   
                </a>

            </div>
        </>
    )
}