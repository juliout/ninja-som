import './produto.css'
import Modal from '../modal'
import { useState } from 'react'

export default function Produto({imagem, nome, descricao, preco, id}){
    
    const [openModal, setOpenModal] = useState (false)
    
    
    
    return(
        <>
        <div className='produtoContainer' id={id}>
            <div className='container'>
                <div className='view'>
                    <img src="/images/logos/lupa.png" alt="" 
                    onClick={()=> {setOpenModal(true)}}/>
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
        {openModal ? <Modal imagem={imagem} nome={nome} descricao={descricao} preco={preco} id={id}/> : null}
        </>
    )
}