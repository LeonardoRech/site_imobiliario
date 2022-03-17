import Header from "./Components/Header"
import { useEffect, useState } from "react"
import axios from "axios"
import { baseApiUrl } from "../../services/api"
import { useParams } from "react-router-dom"
import RenderList from "./Components/RenderList"
import RenderFilter from "./Components/RenderFilter"
import DarkHook from '../../hooks/darkHook';

 export default function Vendas(){
    const {cat} = useParams()
    const { tema } = DarkHook()

    const [list, setList] = useState([])
    const [imoveisPerPage, setImoveisPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(0)
    const [beedroms, setBeedroms] = useState()
    const [mobilia, setMobilia] = useState()
    const [garage, setGarage] = useState()
    const [perfil, setPerfil] = useState()
    const [city, setCity] = useState()
    const [priceMin, setPriceMin] = useState()
    const [priceMax, setPriceMax] = useState()

    const categoria = cat[0].toUpperCase() + cat.substring(1)

    useEffect(() => {
        axios.get(`${baseApiUrl}/imoveis`).then(imoveisRes => {
            setList(imoveisRes.data.data)
        })
    }) 

     return(
        <>
            <Header />
            <div className={`
               w-full h-full ${tema}
               flex flex-col
               bg-gray-100 dark:bg-neutral-700
            `}>
                <RenderFilter 
                    beedroms={beedroms}
                    setBeedroms={setBeedroms}
                    mobilia={mobilia}
                    setMobilia={setMobilia}
                    garage={garage}
                    setGarage={setGarage}
                    perfil={perfil}
                    setPerfil={setPerfil}
                    city={city}
                    setCity={setCity}
                    priceMin={priceMin}
                    setPriceMin={setPriceMin}
                    priceMax={priceMax}
                    setPriceMax={setPriceMax}
                />
                <div className={`
                    h-auto w-full px-5 py-2 dark:bg-neutral-700
                `}>
                    <RenderList 
                        categoria={categoria}
                        list={list}
                        beedroms={beedroms}
                        mobilia={mobilia}
                        garage={garage}
                        perfil={perfil}
                        priceMax={priceMax}
                        priceMin={priceMin}
                        imoveisPerPage={imoveisPerPage}
                        currentPage={currentPage}
                        setImoveisPerPage={setImoveisPerPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
             </div>
         </>
     )
 }