import "./TelaSobre.css"
import Cabecalho from "../../Components/Cabecalho/Index";
import Rodape from "../../Components/Rodape/Rodape";
import DivPadrao from "../../Components/DivPadrao/DivPadrao";


const Sobre = () => {
    return (<div>
        <Cabecalho />


        <div className="container-sobre">
            <div className="container-imgsobre">
                <img src="/Imagens/logo-horizontal-branca.png"></img>
            </div>

            <div className="sobre">
                <h1>Sobre Nós</h1>
                <h2>Entregamos resultado com excelência</h2>

                <h3>Missão</h3>
                <p>Desde sua criação a Faraway tem como missão, entregar resultados com excelência, utilizando tecnologia de ponta,
                    e zelando pela Segurança da Informação e por um serviço de qualidade, com rapidez e confiabilidade. Poder agregar e construir juntos com nossos clientes é nossa maior realização</p>

                <h3>Valores</h3>
                <p>Foco no Cliente, Transparência, Ética, Qualidade, Eficiência e Confiabilidade.</p>

                <h3>Objetivo</h3>
                <p>Ser referencia internacional e parâmetro de qualidade e competência nos serviços prestados em seu ramo de atuação. </p>

            </div>

        </div>

        <Rodape />
    </div>);
}

export default Sobre;