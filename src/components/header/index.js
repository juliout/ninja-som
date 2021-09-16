import './header.css'
import Vantagens from './vantagens'
import Categorias from './categorias'

export default function Header(){
    const telefone = '(11) 99999-9999'
    return(
        <nav className="navHeader">

        <Vantagens/>
                          
                <div className="navPesquisa">
                    <img src="/images/ninjaLogo.png" alt=""/>

                    <div className="inputPesquisar">
                        <input type="text" id='navInputPesquisa' placeholder="BUSQUE AQUI..."/>
                        <img src="/images/lupa.png" alt="" />
                    </div>
                    
                    <div className="telefone">
                        <img src="/images/svg/wpp.svg" alt="" />
                        <a href="tel:+55-11-99999-999">{telefone}</a>
                    </div>
                    
                    <div className="navVisitante">
                        <img src="/images/svg/boneco.svg" alt=""/>
                        <div>
                            <span>OLÁ, VISITANTE</span>
                            <a href='/'>MINHA CONTA</a>
                        </div>
                    </div>

                    <div className="navCarrinho">
                    <img src="/images/svg/bolsa.svg" alt="" />
                        <div>
                            <span>SEU CARRINHO</span>
                            <p>0 item(s)</p>
                        </div>
                    </div>
                </div>
                <hr/>
                <Categorias/>
        </nav>
    )
}