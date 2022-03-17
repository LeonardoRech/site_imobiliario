export default function InfoDataMarket() {

    return(
        <div className={`
            px-20 flex flex-col md:flex-row  items-center justify-between mb-10
        `}>
            <div className={`flex flex-row items-center sm:w-2/4 md:w-1/6 mb-5`}>
                <div className={`mr-3 md:mr-2 font-bold text-yellow-400`}>CUB</div>
                <div className={`flex flex-col dark:text-white`}>
                    <p>Fevereiro/2022</p>
                    <p>Índice (R$/m²): 2.438,51</p>
                    <p>Variação do Mês: 0,43%</p>
                </div>
            </div>
            <div className={`flex flex-row items-center sm:w-2/4 md:w-1/6 mb-5`}>
                <div className={`mr-2 font-bold text-yellow-400`}>INCC</div>
                <div className={`flex flex-col dark:text-white`}>
                    <p>Fevereiro/2022</p>
                    <p>Variação do mês: 0,64%</p>
                    <p>Acumulada 12 meses: 13,70%</p>
                </div>
            </div>
            <div className={`flex flex-row items-center sm:w-2/4 md:w-1/6 mb-5`}>
                <div className={`mr-2 font-bold text-yellow-400`}>IGPM</div>
                <div className={`flex flex-col dark:text-white`}>
                    <p>Fevereiro/2022</p>
                    <p>Variação do mês: 1,82%</p>
                    <p>Acumulada 12 meses: 16,81%</p>
                </div>
            </div>
        </div>
    )
}