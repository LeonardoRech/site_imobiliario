
interface TitleProps {
    title: string
    subtitle: string
}

export default function Title(props: TitleProps){
    return (
        <div>
            <h1 className={`
                text-3xl
                text-gray-900
                dark:text-gray-200
            `}>
                {props.title}
            </h1>
            <h2 className={`
                font-light text-sm 
                text-neutral-500
                dark:text-neutral-500
            `}>
                {props.subtitle}
            </h2>
        </div>
    )
}