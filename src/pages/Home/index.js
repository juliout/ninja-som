import Slide from "../../components/slideHome"
import Middle from "../../components/middle"
import Marcas from "../../components/marcas"
import SobreNos from "../../components/sobreNos"
import Designer from "../../components/designer"


export default function Home(){
    return(
        <>
            <Slide/>
            <Middle/>

            <Marcas/>
            <SobreNos/>     
            <Designer/>   
        </>
    )
}