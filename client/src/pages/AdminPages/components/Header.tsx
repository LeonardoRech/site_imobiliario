import DarkHook from "../../../hooks/darkHook"
import ButtonTema from './ButtonTema'
import Title from "./Title"

interface HeaderProps {
    title: string
    subtitle: string
}

export default function Header(props: HeaderProps){
    const {tema, changeTema} = DarkHook()

    return (
        <div className="flex">
            <Title title={props.title} subtitle={props.subtitle}/>
            <div className="flex flex-grow justify-end">
                <ButtonTema tema={tema} changeTema={changeTema}/>
            </div>
        </div>
    )
}