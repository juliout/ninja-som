import './modal.css'

export default function Modal({imagem, nome, descricao, preco, id, closeModal}){

    return(
        <div className='modalItem'>
            <div className="containerModal">
                <div className='mTop'>
                    <button id='buttonClose' onClick={()=>{closeModal(false)}}>X</button>
                </div>
                <div className='mBottom'>
                    <div className='showImg'>
                        <img src={imagem} alt="" />
                    </div>
                    <div className="modalDados">
                        <h1>{nome}</h1>
                        <p>R$: {preco}</p>
                        <span>{descricao}</span>
                        <a href="/" >veja mais detalhes do produto <img src="/images/outros/setaDireita2.png" alt="" /></a>
                        <button id={id}>Adicionar ao carrinho</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}