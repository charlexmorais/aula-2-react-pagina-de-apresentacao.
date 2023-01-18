import Item from "./Item"

export default function Lista(props){
    return(
        
        <ul>
            {props.textos.map((frase)=>(
              <Item ativo={false} texto={frase}/>  
              
            )
                
            )}

        </ul>

        
    )
}