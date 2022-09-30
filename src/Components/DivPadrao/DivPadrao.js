import "./DivPadrao.css"

const DivPadrao = (props) => {
    return (<div className="div-padrao">
        <div className="container-texto">    
        <h1>{props.titulo}</h1>
        <p>{props.texto}</p>
        </div>
    </div>);
}

export default DivPadrao;