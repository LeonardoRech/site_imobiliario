import MenuLateral from "./MenuLateral"
import Header from './Header'
import Content from './Content' 
import DarkHook from "../../../hooks/darkHook"

interface LayoutProps {
    title: string
    subtitle: string
    children?: any
}

export default function Layout(props: LayoutProps){
    const { tema } = DarkHook()
    return (
        <div className={`
            ${tema}
            flex h-screen w-screen 
        `}>
            <MenuLateral />
            <div className={`
                flex flex-col w-full p-7 
                bg-neutral-200
                dark:bg-neutral-800
            `}>
                <Header title={props.title} subtitle={props.subtitle}/>
                <Content>
                    {props.children}
                </Content>
            </div>

        </div>
    )
}