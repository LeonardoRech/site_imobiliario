interface AuthInputProps {
    label: string
    valor: any
    required?: boolean
    type?: 'text' | 'email' | 'password'
    valorMudou: (novoValor: any) => void
}

export default function AuthInput(props: AuthInputProps) {
    return (
        <div className="flex flex-col mt-4">
            <label>{props.label}</label>
            <input 
                type={props.type ?? 'text'}
                value={props.valor}
                onChange={e => props.valorMudou?.(e.target.value)}
                required={props.required}
                className={`
                    px-4 py-3 rounded-lg 
                    bg-gray-100 focus:bg-white
                    border-2 focus:border-yellow-500
                    focus:outline-none
                `}
            />
        </div>
    )
}