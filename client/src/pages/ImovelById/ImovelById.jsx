import axios from "axios"
import { baseApiUrl } from "../../services/api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "./Components/Header"
import Main from "./Components/Main"
import { Build, IconLocal, IconMoney, IconText } from "../../icons"
import DarkHook from '../../hooks/darkHook';


export default function ImovelById(){
    const { tema } = DarkHook()
    const {id} = useParams()
    const [list, setList] = useState([])

    useEffect(() => {
        axios.get(`${baseApiUrl}/imoveis/${id}`).then(imoveisRes => {
            setList(imoveisRes.data)
        })
    })

    function a () {
        console.log(list.id)
    }

    return (
        <div className={`${tema} bg-gray-100 dark:bg-neutral-700 h-screen`}>
            <Header />
            <Main id={list.id}/>
            <div className={`
                w-full bg-gray-100 dark:bg-neutral-700 md:px-10 md:px-20
                flex flex-col
            `}>
                <div className={`
                    w-full bg-gray-100 flex flex-col dark:bg-neutral-700
                `}>
                    <div className={`
                        w-full py-5 px-2 bg-white shadow flex flex-col
                    `}>
                        <h1 className={`
                            flex flex-row items-center mb-2
                            uppercase text-4xl font-extralight mx-auto
                        `}>
                            <h1 className="text-yellow-500">
                                {Build}
                            </h1>  
                            {list.name}
                        </h1>
                        <h1 className="flex flex-row items-center mt-1 mx-auto">{list.subtitle}</h1>
                        <h1 className="flex flex-row items-center mt-1 text-lg mx-auto">
                            <h1 className="text-red-500">
                                {IconLocal}
                            </h1>     
                            {list.city} - {list.district}
                        </h1>
                        <h1 className="flex flex-row items-center text-3xl font-light mt-1 mx-auto">
                            <h1 className="text-green-500">{IconMoney}</h1> {new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(list.price)}</h1>
                    </div>
                    <div className={`
                        w-full py-5 px-2 mt-5 bg-white shadow flex flex-row justify-evenly
                    `}>
                        <div className="flex flex-row items-center mr-1">
                            <p className="text-yellow-500 mr-1"><i class="fa fa-car"/></p>
                            <p className="mr-1">Vaga(s):</p>
                            <p>{list.garage}</p>
                        </div>
                        <div className="flex flex-row items-center mr-1">
                            <p className="text-yellow-500 mr-1"><i class="fa fa-ruler-combined"/></p>
                            <p className="mr-1">Área Total:</p>
                            <p>{list.area} m²</p>
                        </div>
                        <div className="flex flex-row items-center mr-1">
                            <p className="text-yellow-500 mr-1"><i class="fa fa-list"/></p>
                            <p className="mr-1">Perfil:</p>
                            <p>{list.perfil}</p>
                        </div>
                    </div>
                    <div className={`
                        w-full py-5 px-2 mt-5 bg-white shadow
                    `}>
                        <h1 className="uppercase font-light text-lg">Descrição do Apartamento</h1>
                        <hr />
                        <div className="mt-2 px-10 list-disc">
                            <div dangerouslySetInnerHTML={{ __html: list.desc_apto}} />
                        </div>
                    </div>
                    <div className={`
                        w-full py-5 px-2 mt-5 bg-white shadow
                    `}>
                        <h1 className="uppercase font-light text-lg">Descrição do Edifício</h1>
                        <hr />
                        <div className="mt-2 px-10">
                            <div className="list-disc" dangerouslySetInnerHTML={{ __html: list.desc_edificio}} />
                        </div>
                    </div>
                </div>






                <div className={`
                    flex flex-col px-20 py-5 my-5 justify-center
                    bg-gray-300 dark:bg-neutral-600 dark:text-white
            
                `}>
                    <h1 className="uppercase text-2xl text-center mb-3">Entre em Contato Conosco!</h1>
                    <form action="https://formsubmit.co/lcrr1420@gmail.com" method="POST" className={`
                        flex flex-col justify-center
                    `}>
                        <label for="nome">Nome</label>
                        <input
                            className={`
                                mb-4 h-10 p-2 rounded border border-black
                            `} 
                            id="nome"
                            type="text" 
                            name="nome" 
                            placeholder="Digite seu nome"
                            required
                        />
                        <label for="email">Email</label>
                        <input
                            className={`
                                mb-4 h-10 p-2 rounded border border-black
                            `}
                            id="email" 
                            type="email" 
                            name="email"
                            placeholder="Digite seu email" 
                            required
                        />
                        <label for="contato">Contato</label>
                        <input
                            className={`
                                mb-4 h-10 p-2 rounded border border-black
                            `} 
                            id="contato"
                            type="text" 
                            name="contato" 
                            placeholder="Digite seu telefone"
                            required
                        />
                        <label for="mensagem">Mensagem</label>
                        <textarea 
                            name="mensagem" 
                            placeholder="Conte-nos o que procuras, faremos todo o possível para lhe ajudar!" 
                            required
                            className={`
                            mb-4 h-40 p-2 rounded border border-black
                        `}>
                        </textarea>
                        <input
                            type="hidden" 
                            name="_captcha" 
                            value="false"
                        />
                        <button type="submit" className={`
                            bg-gradient-to-r from-yellow-400 to-yellow-500 hover:bg-gradient-to-l
                            p-2 w-40 rounded shadow m-auto mb-5
                        `}>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}