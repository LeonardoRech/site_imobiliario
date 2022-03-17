import './css.css'
import FormContact from './Components/FormContact'
import InfoDataMarket from "./Components/InfoDataMarket";
import RenderImoveis from "./Components/RenderImoveis";
import SearchCategory from "./Components/SearchCategory";
import Logo from "./Components/Logo";
import Header from "./Components/Header";
import Footer from './Components/Footer';
import RenderPerson from './Components/RenderPerson';
import DarkHook from '../../hooks/darkHook';

export default function HomePage() {
    const { tema } = DarkHook()

    return (
        <div className={`flex flex-col ${tema}`}>
            <RenderPerson />
            <Header />
            <Logo />
            <SearchCategory />
            <div id="body" className={`
                bg-gray-100 dark:bg-neutral-800
            `}>
                <RenderImoveis />
                <FormContact /> 
                <InfoDataMarket />           
            </div>
            <Footer />
        </div>
    )
}