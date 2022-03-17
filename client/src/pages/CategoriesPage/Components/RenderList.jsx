export default function RenderList(props){

    let filtro = (props.list).filter(imovel => imovel.category === `${props.categoria}`)
    if((props.beedroms) > 0){
        filtro = filtro.filter(imovel => imovel.beedroms === (props.beedroms))
    }
    if((props.mobilia)){
        filtro = filtro.filter(imovel => imovel.mobilia === (props.mobilia))
    }
    if((props.garage) > 0){
        filtro = filtro.filter(imovel => imovel.garage === (props.garage))
    }
    if((props.perfil)){
        filtro = filtro.filter(imovel => imovel.perfil === (props.perfil))
    }
    if((props.city)){
        filtro = filtro.filter(imovel => imovel.city === (props.city))
    }
    if((props.priceMin) > 0){
        filtro = filtro.filter(imovel => imovel.price > (props.priceMin))
    }
    if((props.priceMax) > 0){
        filtro = filtro.filter(imovel => imovel.price < (props.priceMax))
    }

    const pages = Math.ceil(filtro.length / (props.imoveisPerPage))
    const startIndex = (props.currentPage) * (props.imoveisPerPage)
    const endIndex = startIndex + (props.imoveisPerPage)
    const currentImoveis = filtro.slice(startIndex, endIndex)

    return(
        <>
            <div className="flex flex-row justify-center items-center">
                <label className="mr-5 mb-5 dark:text-white">Imóveis por Página</label>
                <select 
                    value={(props.imoveisPerPage)} 
                    onChange={(e) => props.setImoveisPerPage(Number(e.target.value))}
                    className={`h-10 border mb-5`}
                >
                    <option value={1}>1</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                    <option value={40}>40</option>
                </select>
            </div>
            <div className="flex flex-row justify-center">
                {Array.from(Array(pages), (item, index) => {
                    return ( 
                        <button 
                            className={`
                                mx-1 p-1 w-8 h-8
                                dark:text-white
                                border border-black dark:border-white 
                                hover:bg-gray-200  dark:hover:bg-neutral-500
                            `}
                            value={index} 
                            onClick={e => props.setCurrentPage(Number(e.target.value))}
                        >
                            {index + 1}
                        </button>
                    )
                })}
            </div>
            {currentImoveis.map((imovel) => {
                return(
                    <a href={`imoveis/${imovel.id}`}>
                        <div className={`
                            md:h-72 mt-3 flex flex-col md:flex-row bg-gray-200 shadow shadow-gray-500
                        `}>
                            <div className="md:w-1/5">
                                <img src={`http://localhost:5000/${imovel.image}`} alt="img_capa" className="h-72 w-full" />
                            </div>
                            <div className={`
                                md:w-2/5 px-5 py-5 md:py-10 flex flex-col
                            `}>
                                <h1 className="text-xl uppercase font-medium mb-3">{imovel.name}</h1>
                                <p className="md:mt-5">{imovel.city} - {imovel.district}</p>
                                <div className="flex flex-col mt-2 md:mt-10 lg:w-full">
                                    <div className="flex flex-row justify-between">
                                        <p>Dorm:</p>
                                        <p className=""> <i class="fa-solid fa-cars"></i> Vagas:</p>
                                        <p className="">Área:</p>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <p>{imovel.beedroms} Dorm.</p>
                                        <p className="">{imovel.garage} Vagas</p>
                                        <p className="">{imovel.area} m²</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-2/5 flex mb-1">
                                <h1 className="flex justify-center items-center w-full text-2xl font-medium">
                                    {new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(imovel.price)}
                                    {props.categoria === 'Anual' ? <h1>/mês</h1> : false}
                                    {props.categoria === 'Temporada' ? <h1>/mês</h1> : false}
                                </h1>
                            </div>
                        </div> 
                    </a>
                    
                )
            })}
        </>
    )
}