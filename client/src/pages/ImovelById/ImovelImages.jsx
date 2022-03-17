import axios from "axios"
import { baseApiUrl } from "../../services/api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "./Components/Header"
import Main from "./Components/Main"
import './css.css'
import DarkHook from '../../hooks/darkHook';

export default function ImovelImages(){
    const { tema } = DarkHook()
    const {id} = useParams()
    const [list, setList] = useState([])

    useEffect(() => {
        axios.get(`${baseApiUrl}/${id}/images`).then(imoveisRes => {
            setList(imoveisRes.data)
        })
    })

    return(
        <div className={`${tema} dark:bg-neutral-700`}>
            <Header />
            <Main id={id}/>
            <div class="ul" className={`
                w-full flex flex-wrap justify-around 
                mx-auto py-5 dark:bg-neutral-700
            `}>
                {list.map((images) => {
                    return(
                        <div className={`
                            my-2 mx-2 w-80 h-96
                        `}>
                            <a href={`#${images.id}`}>
                                <img src={`http://localhost:5000/${images.path}`}
                                    className={`
                                        w-full h-full shadow-md 
                                    `}
                                />
                            </a>
                        </div>
                    )
                })}
            </div>
            {list.map((img) => {
                return(
                    <div class="lbox" id={`${img.id}`}>
                        <div class="box_img">
                            <a 
                                href={`#${img.id - 1}`}  
                                id="prev"
                                className={`
                                    text-white text-center
                                    w-10 h-10 text-5xl absolute
                                `}
                            >
                                &#171;
                            </a>    
                            <a 
                                href=""  
                                id="close"
                                className={`
                                    text-white text-center
                                    w-10 h-10 text-4xl absolute
                                    mt-5
                                `}
                            >
                                X
                            </a>
                            <img src={`http://localhost:5000/${img.path}`} alt="" />
                            <a 
                                href={`#${img.id + 1}`}  
                                id="next"
                                className={`
                                    text-white text-center                        
                                    w-20 h-20 text-5xl absolute
                                `}
                            >
                                &#187;
                            </a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}