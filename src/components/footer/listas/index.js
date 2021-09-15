import './listas.css'
export default function Listas({children}){
    return(
        <div className='list'>
            <ul>
            {children}
            </ul>
        </div>
    )
}