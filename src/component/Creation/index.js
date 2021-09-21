import './index.css'

export default function Creation({type,text,background}){
    return(
        <div style={{backgroundImage:`url(${background})`}} className={`creations ${type}`}>
                                
            <p>
                {text.first}
            </p>
            <p>
                {text.second}
            </p>
        </div>
    )
}