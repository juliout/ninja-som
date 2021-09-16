import './produto.css'
export default function Produto({imagem, nome, descricao, preco, id}){
    
    
    return(
        <div className='produtoContainer' id={id}>
            <div className='container'>
                <div className='view'>
                    <img src="/images/logos/lupa.png" alt=""/>
                    <p>Quick View</p>
                </div>
                <div className='quick'>
                    <img src={imagem} alt="" className='viewImg' />
                </div>
                <h1>{nome}</h1>
                <span>{descricao}</span>
                <p>R$:{preco}</p>
            </div>
        </div>
    )
}