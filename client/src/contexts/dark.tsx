import { createContext, useEffect, useState } from 'react'

interface DarkProps {
    tema?: any
    children?: any
    changeTema?: () => any
}

const DarkContext = createContext<DarkProps>({})

export function DarkProvider(props: any){
    const [tema, setTema] = useState('')

    function changeTema() {
        const newTema = tema === '' ? 'dark': ''
        setTema(newTema)
        localStorage.setItem('tema', newTema)
    }

    useEffect(() => {
        const temaSalvo = localStorage.getItem('tema')
        setTema(`${temaSalvo}`)
    }, [])

    return(
        <DarkContext.Provider value={{
            tema,
            changeTema
        }}>
            {props.children}
        </DarkContext.Provider>
    )
}

export default DarkContext
