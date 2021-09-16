import './designer.css'

export default function Designer(){

    return(
        <div className='designerContainer'>
            <img src="/images/outros/graySetaEsquerda.png" alt="" className='setaEsquerda' />
                <div className='dConteudo'>
                    <div>
                        <img src="/images/fotos/designer1.png" alt="" />
                        <div className='dDados'>
                            <h1>FELIPE SALMIM</h1>
                            <p>Designer</p>
                        </div>
                    </div>
                    <div className='dAbout'>
                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum
                        as their default model text, and a search for ‘lorem ipsum’</p>
                    </div>
                </div>
            <img src="/images/outros/graySetaDireita.png" alt="" className='setaDireita' />
        </div>
        
    )
}