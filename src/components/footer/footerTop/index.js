import './footertop.css'
import Listas from '../listas'

export default function FooterTop() {

    return(
        
    <div className="footerTop">
        <div className="leftList">
            <Listas>
                <h1>INSTITUCIONAL</h1>
                <li>QUEM SOMOS</li>
                <li>NOSSAS LOJAS</li>
            </Listas>
            <Listas>
                <h1>ATENDIMENTO</h1>
                <li>FALE CONOSCO</li>
                <li>VENDAR@NINJASOM.COM.BR</li>
            </Listas>
        </div>
        <div className="rightList">
            <Listas>
                <h1>AJUDA E SUPORTE</h1>
                <li>POLÍTICA DE PRIVACIDADE</li>
                <li>POLÍTICA DE TROCAS</li>
                <li>PRAZOS DE ENTREGA</li>
                <li>TERMOS DE USO</li>
            </Listas>
        </div>
        <div className="formasDePagamento">
            <Listas>
                <h1>FORMAS DE PAGAMENTO</h1>
                <div className="cartoes">
                    <img src="/images/cartoes/visa.png" alt="" />
                    <img src="/images/cartoes/master.png" alt="" />
                    <img src="/images/cartoes/american.png" alt="" />
                    <img src="/images/cartoes/club.png" alt="" />
                    <img src="/images/cartoes/boleto.png" alt="" />
                </div>
            </Listas>
            <div className="seguranca">
                <Listas>
                    <h1>SEGURANÇA</h1>
                    <div className="cartoesSeguro">
                        <img src="/images/cartoes/rapidssl.png" alt="" />
                        <img src="/images/cartoes/vtex.png" alt="" />
                    </div>
                </Listas>
            </div>
        </div>       
        <div className="assine">
            <span>ASSINE NOSSO <strong>NEWSLETTER</strong> E RECEBA NOVIDADES 
            E PROMOÇÕES</span>
            <div>
                <input type="text" placeholder='SEU NOME' />
                <input type="text" placeholder='SEU E-MAIL'/>
            </div>
            <button>ENVIAR</button>
        </div>
    </div>
    
    )
}