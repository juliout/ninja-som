import './slide.css'

export default function Slide() {

    let contador = 1;

    function esquerda() {
        const radio = document.getElementById('radio'+ contador)   
        if (contador <= 1) {
            contador = 5
            return radio.checked = true
        }        
        contador--
             
        return radio.checked = true
    }

    function direita() {
        const radio = document.getElementById('radio'+ contador)
        if(contador === 5){
            contador = 1
            return radio.checked = true
        }        
        contador++        
        return radio.checked = true
    }
        
    function start() {
    
        setInterval(() => {
            const radio = document.getElementById('radio'+ contador)
            radio.checked =  true
            
            if(contador >= 5){
                contador = 1
            }else{
                contador++
            }
        },5000)
    }

    window.onload = function(){
       start()
    }   

    return(
        
        <div className="slider">
            <div className="setas">                
                <img src="/images/outros/setaEsquerda.png" alt="" id='setaEsquerda' onClick={()=>{esquerda()}}/>                
                <img src="/images/outros/setaDireita.png" alt="" id='setaDireita' onClick={()=>{direita()}}/>
            </div>

            <div className="slides">
                <input type="radio" name="btnRadio" id="radio1" className='radioInput' />
                <input type="radio"  name="btnRadio" id="radio2" className='radioInput'/>
                <input type="radio"  name="btnRadio" id="radio3" className='radioInput'/>
                <input type="radio"  name="btnRadio" id="radio4" className='radioInput'/>
                <input type="radio"  name="btnRadio" id="radio5" className='radioInput'/>

                <div className="slide first">
                    <div className="textoSlide">
                        <p>NOVOS PRODUTOS</p>
                        <h1>INSTRUMENTOS</h1>
                        <span>PROFISSIONAIS</span>
                        <a href="/">CONFIRA</a>
                    </div>             
                    <img src="/images/fotos/1.png" alt="" />
                           
                </div>
                <div className="slide">
                    <div className="textoSlide">
                        <p>NOVOS PRODUTOS</p>
                        <h1>INSTRUMENTOS</h1>
                        <span>PROFISSIONAIS</span>
                        <a href="/">CONFIRA</a>
                    </div>        
                    <img src="/images/fotos/2.png" alt="" />
                </div>
                <div className="slide">
                    <div className="textoSlide">
                        <p>NOVOS PRODUTOS</p>
                        <h1>INSTRUMENTOS</h1>
                        <span>PROFISSIONAIS</span>
                        <a href="/">CONFIRA</a>
                    </div>        
                    <img src="/images/fotos/3.png" alt="" />
                </div>
                <div className="slide">
                    <div className="textoSlide">
                        <p>NOVOS PRODUTOS</p>
                        <h1>INSTRUMENTOS</h1>
                        <span>PROFISSIONAIS</span>
                        <a href="/">CONFIRA</a>
                    </div>        
                    <img src="/images/fotos/4.png" alt="" />
                </div>
                <div className="slide">
                    <div className="textoSlide">
                        <p>NOVOS PRODUTOS</p>
                        <h1>INSTRUMENTOS</h1>
                        <span>PROFISSIONAIS</span>
                        <a href="/">CONFIRA</a>
                    </div>        
                    <img src="/images/fotos/5.png" alt="" />
                </div>

                <div className="autoNavegacao">
                    <div className="btnAuto1"></div>
                    <div className="btnAuto2"></div>
                    <div className="btnAuto3"></div>
                    <div className="btnAuto4"></div>
                    <div className="btnAuto5"></div>
                </div>

            </div>

            <div className="navegacaoManual">
                <label htmlFor="radio1" className="btnManual"></label>
                <label htmlFor="radio2" className="btnManual"></label>
                <label htmlFor="radio3" className="btnManual"></label>
                <label htmlFor="radio4" className="btnManual"></label>
                <label htmlFor="radio5" className="btnManual"></label>
            </div>

        </div>
    )
}