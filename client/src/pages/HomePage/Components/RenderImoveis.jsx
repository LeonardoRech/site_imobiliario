import axios from "axios"
import {useEffect, useState} from 'react'
import { IconLocal } from "../../../icons"
import { baseApiUrl } from "../../../services/api"

export default function RenderImoveis() {

    const [list, setList] = useState([])
    
    useEffect(() => {
        axios.get(`${baseApiUrl}/imoveis`).then(imoveisRes => {
            setList(imoveisRes.data.data)
        })
    })

    function renderList(arg){
        const listFilter = list.filter(imovel => imovel.category === arg).slice(0, 4)
        return(
            <div className="w-full overflow-auto flex flex-row justify-between">
                {listFilter.map((imovel) => {
                    return(
                        <a href={`/categoria/imoveis/${imovel.id}`} className="w-96 rounded-md mx-5">
                            <div key={imovel.id} id="card" className={`
                                flex flex-col
                                bg-gray-200
                                shadow dark:shadow-white
                            `}>
                                <img 
                                    src={`http://localhost:5000/${imovel.image}`} 
                                    alt="..." 
                                    className="shadow-md h-72 w-full rounded-t"
                                />
                                <h1 className={`
                                    -mt-8 ml-10
                                    text-white text-3xl text-shadow
                                `}>
                                    {new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(imovel.price)}
                                </h1>
                                <div className={`
                                    px-10 pt-5 pb-5
                                `}>
                                    <h1 className="text-2xl font-light">{imovel.name}</h1>
                                    <h1 className="text-lg my-1">{imovel.subtitle}</h1>
                                    <h1 className="flex flex-row"><p className="text-red-500">{IconLocal}</p>{imovel.city} - {imovel.district}</h1>
                                    <div className="flex flex-row justify-between mt-3">
                                        <div className="flex flex-col">
                                            <p className="flex flex-row"><p className="text-yellow-500 mr-1"><i class="fa fa-car"></i></p> Vaga(s):</p>
                                            <p>{imovel.garage}</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="flex flex-row"><p className="text-yellow-500 mr-1"><i class="fa fa-ruler-combined"></i></p> Área:</p>
                                            <p>{imovel.area} m²</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    )
                })}
            </div>
        )
    }

    return (
        <>
            <div className={`
                w-full px-10 md:px-20 py-4 mt-10
            `}>
                <h1 className="text-gray-700 dark:text-white text-3xl uppercase mb-5">Temporada</h1>
                <div className={`
                    flex flex-row justify-evenly items-center mb-5
                `}>
                    {renderList("Temporada")}
                </div>                 
                <hr />
            </div>
            <div className={`
                w-full px-20 py-4 mt-10
            `}>
                <h1 className="text-gray-700 dark:text-white text-3xl uppercase mb-5">Venda</h1>
                <div className={`
                    flex flex-row justify-evenly items-center mb-5
                `}>
                    {renderList("Venda")}
                </div>                   
                <hr />
            </div>
            <div className={`
                w-full px-20 py-4 mt-10
            `}>
                <h1 className="text-gray-700 dark:text-white text-3xl uppercase mb-5">Anual</h1>
                <div className={`
                    flex flex-row justify-evenly items-center mb-5
                `}>
                    {renderList("Anual")}
                </div>
                <hr />                   
            </div>
        </>
    )
}