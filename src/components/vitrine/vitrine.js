import {useEffect, useState} from 'react'
import './vitrine.css'
import Produto from './produto'
import ninjaApi from '../../services/apis'


export default function Vitrine(){

    let [produtos, setProduto] = useState([])

    useEffect(()=>{

        async function foundProduto(){
           const response = await ninjaApi.get('teste-front-end/junior/ninja-som/lista-produtos/produtos.json')
           setProduto(response.data.products)
            
            
        }
        foundProduto()
    },[])

    return(
        <div className='vitrinePai'>
            <div className='vTitulo'>
                <h1>INSTRUMENTOS DESTAQUE</h1>
                <p>it is a long established fact that a reader will be destracted by the readable</p>
            </div>
            <div className='vConteudo'>
                {produtos.slice(0,8).map((p, index)=>{
                    return(
                        <Produto key={index} id={index}imagem={p.photo} nome={p.productName} descricao={p.descriptionShort} preco={p.price}/>
                    )

                })}
               
            </div>
            <button>VEJA MAIS</button>
        </div>
       
    )
}