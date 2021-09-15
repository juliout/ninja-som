
import './bottom.css'
export default function BottomMiddle(){
    return(
        <div className="bottomMiddle">
            <div className='confiraEsquerda'>
                <div className="textoMiddle">
                    <p>NOVIDADES</p>
                    <hr />
                    <h1>ÁUDIO</h1>
                    <span>PROFISSIONAL</span>
                    <button><a href="/">CONFIRA</a></button>

                </div>
                <img src="/images/outros/audio.png" alt="" />
            </div>
            <div className='confiraDireita'>
                <div className="textoMiddle">
                    <p>NOVIDADES</p>
                    <hr />
                    <h1>INSTRUMENTOS</h1>
                    <span>MUSICAIS</span>
                    <button><a href="/">CONFIRA</a></button>
                </div>
                <img src="/images/outros/instrumento.png" alt="" />
            </div>
        </div>
    )
}