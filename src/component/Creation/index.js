import './index.css'

export default function Creation({text,id}){
    return(
        <div id={id} className="creations">
                       
            <p>
                {text.first}
            </p>
            <p>
                {text.second}
            </p>
        </div>
    )
}