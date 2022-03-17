export default function RenderFilter(props){
    return(
        <div className={`
            p-5 h-full 
            text-sm 
            dark:bg-neutral-700 bg-gray-100 
        `}>
            <div className={`
                h-full py-2 px-3 bg-gray-200
                shadow shadow-gray-400
            `}>
                <h1 className={`
                    text-center text-gray-700 uppercase text-3xl
                `}>
                    Filtro de Buscas
                </h1>
                <select 
                    name="beedroms" 
                    className={`
                        w-full rounded mt-6 h-14 px-5
                    `}
                    value={props.beedroms}
                    onChange={e => props.setBeedroms(e.target.value)}
                >
                    <option value={0}>Quantidade de Dormitórios</option>
                    <option value={1}>Um Dormitório</option>
                    <option value={2}>Dois Dormitórios</option>
                    <option value={3}>Três Dormitórios</option>
                    <option value={4}>Quatro Dormitórios</option>
                    <option value={5}>Cinco/+ Dormitórios</option>
                </select>
                <select 
                    name="mobilia" 
                    className={`
                        w-full rounded mt-6 h-14 px-5
                    `}
                    value={props.mobilia}
                    onChange={e => props.setMobilia(e.target.value)}    
                >
                    <option value="">Selecione a Mobilia</option>
                    <option value="Mobiliado">Mobiliado</option>
                    <option value="Imobiliado">Imobiliado</option>
                    <option value="Semi-Mobiliado">Semi-mobiliado</option>
                </select>
                <select 
                    name="garage" 
                    className={`
                        w-full rounded mt-6 h-14 px-5
                    `}
                    value={props.garage}
                    onChange={e => props.setGarage(e.target.value)}
                >
                    <option value="0">Quantidade de Vagas</option>
                    <option value="1">Uma Vaga</option>
                    <option value="2">Dois Vagas</option>
                    <option value="3">Três Vagas</option>
                    <option value="4">Quatro Vagas</option>
                    <option value="5">Cinco/+ Vagas</option>
                </select>
                <select 
                    name="garage" 
                    className={`
                        w-full rounded mt-6 h-14 px-5
                    `}
                    value={props.perfil}
                    onChange={e => props.setPerfil(e.target.value)}
                >
                    <option value="">Selecione o Perfil</option>
                    <option value="Pré-Lançamento">Pré-Lançamento</option>
                    <option value="Lançamento">Lançamento</option>
                    <option value="Em Construção">Em Contrução</option>
                    <option value="Novo">Novo</option>
                    <option value="Usado">Usado</option>
                </select>
                <select 
                    name="city" 
                    className={`
                        w-full rounded mt-6 h-14 px-5
                    `}
                    value={props.city}
                    onChange={e => props.setCity(e.target.value)}
                >
                    <option value="">Selecione a Cidade</option>
                    <option value="SC - Itapema">SC - Itapema</option>
                </select>
                <input 
                    className={`
                        mt-6 w-full h-14 rounded px-5
                    `}
                    type="text" 
                    name="priceMin"
                    placeholder="Digite o Valor Mínimo"
                    onChange={e => props.setPriceMin(e.target.value)}
                />
                <input 
                    className={`
                        mt-6 w-full h-14 rounded px-5
                    `}
                    type="text" 
                    name="priceMax"
                    placeholder="Digite o Valor Máximo"
                    onChange={e => props.setPriceMax(e.target.value)}
                />
            </div>
        </div>
    )
}