import "./Clientes.css"

const Clientes = (props) => {
    return (<div className="clientes">
        <a href={props.link} ><img  src={props.src}></img></a>
        <p>{props.empresa}</p>

    </div>  );
}
 
export default Clientes;