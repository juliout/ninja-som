import './marcas.css'
export default function Marcas(){
    return(
        <div className='melhoresMarcas'>
            <div className='topMarcas'>
                <span>AS <strong>MELHORES</strong> MARCAS</span>
                <p>it is a long established fact that a reader will be destracted by the readable</p>
            </div>
            <div className='bottomMarcas'>
                <img src="/images/outros/akg.png" alt="" />
                <img src="/images/outros/roland.png" alt="" />
                <img src="/images/outros/boss.png" alt="" />
                <img src="/images/outros/shure.png" alt="" />
            </div>
        </div>
    )
}