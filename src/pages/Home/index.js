import Slide from "../../components/slideHome"
import Middle from "../../components/middle"
import Marcas from "../../components/marcas"
import SobreNos from "../../components/sobreNos"
import Designer from "../../components/designer"
import Vitrine from "../../components/vitrine/vitrine"


export default function Home(){
    return(
        <>
            <Slide/>
            <Middle/>
            <Vitrine/>
            <Marcas/>
            <SobreNos/>     
            <Designer/>   
        </>
    )
}