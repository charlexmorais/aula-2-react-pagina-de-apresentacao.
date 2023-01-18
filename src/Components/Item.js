import "./item.css"
export default function Item(props){
  return (
    <li className={props.ativo && 'ativo'}>{props.texto}</li>
  )
}

        

