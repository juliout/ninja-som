import './slide.css'

export default function Slide(){


    return(

        <div className="slider">
            <div className="setas">
                
                    <img src="/images/outros/setaEsquerda.png" alt="" id='setaEsquerda' />
                
                    <img src="/images/outros/setaDireita.png" alt="" id='setaDireita'/>
            </div>
            <div className="slides">
                <input type="radio"  name="btnRadio" id="radio1" className='radioInput' />
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