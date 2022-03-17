export default function FormContact(){

    return(
        <div className={`
            flex flex-col px-20 py-5 justify-center
            
        `}>
            <h1 className="uppercase dark:text-white text-2xl text-center mb-3">Entre em Contato Conosco!</h1>
            <form action="https://formsubmit.co/lcrr1420@gmail.com" method="POST" className={`
                flex flex-col justify-center
            `}>
                <label for="nome" className="dark:text-white">Nome</label>
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
                <label for="email" className="dark:text-white">Email</label>
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
                <label for="contato" className="dark:text-white">Contato</label>
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
                <label for="mensagem" className="dark:text-white">Mensagem</label>
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
            <hr />
        </div>
    )
}