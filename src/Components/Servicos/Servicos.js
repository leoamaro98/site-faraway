import { Button } from "reactstrap";
import "./Servicos.css"

const Servicos = (props) => {
    return (  <a href="/servicos"><div className="container-servicos">
      
            <img src={props.src}></img>
            <h1>{props.titulo}</h1>
            <p>{props.descricao}</p>
        
    </div> </a>);
}

export default Servicos;