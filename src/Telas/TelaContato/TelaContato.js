import Cabecalho from "../../Components/Cabecalho/Index";
import DivPadrao from "../../Components/DivPadrao/DivPadrao";
import Contato from "../../Components/FormContato/Contato";
import Rodape from "../../Components/Rodape/Rodape";
import "./TelaContato.css"

const TelaContato = () => {
    return (<div>
        <Cabecalho />
        <div className="container-tela-contato">
            <DivPadrao titulo="Fale Conosco" texto="contato@faraway.com.br" />
            <Contato />
        </div>
        <Rodape />

    </div>);
}

export default TelaContato;