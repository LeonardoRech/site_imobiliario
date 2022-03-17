export default function SearchCategory() {

    return(
        <div className={`
            flex flex-row justify-evenly items-center
            h-12 w-full bg-gray-100 dark:bg-neutral-800
        `}>
            <a href="/categoria/anual">
                <button className={`
                    w-32 h-10 rounded shadow uppercase 
                    text-white font-semibold
                    bg-yellow-400 hover:bg-yellow-300
                `}>Anual</button>
            </a>
            <a href="/categoria/temporada">
                <button className={`
                    w-32 h-10 rounded shadow uppercase 
                    text-white font-semibold
                    bg-yellow-400 hover:bg-yellow-300
                `}>Temporada</button>
            </a>
            <a href="/categoria/venda">
                <button className={`
                    w-32 h-10 rounded shadow uppercase 
                    text-white font-semibold
                    bg-yellow-400 hover:bg-yellow-300
                `}>Venda</button>
            </a>
        </div>
    )
}