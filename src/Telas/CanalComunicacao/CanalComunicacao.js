import { Button } from "reactstrap";
import Cabecalho from "../../Components/Cabecalho/Index";
import Rodape from "../../Components/Rodape/Rodape";
import "./CanalComunicacao.css"

const CanalComunicacao = () => {



    function abrePSI() {
        const elementPsi = document.querySelector("#container-psi")
        elementPsi.classList.toggle("displayNone")
    }

    return (<div >
        <Cabecalho />

        <div id="container-psi" className="displayNone" >
        <Button onClick={abrePSI}>Fechar</Button>

            <iframe id="psi" src="./Imagens/psi-faraway.pdf"></iframe>
        </div>

        <div className="canalcominicacao">
            <img src="/imagens/lgpd.png"></img>

            <p>Com o propósito de atender ao princípio da boa-fé e da transparência, a Organização apresenta seu novo Termo de Privacidade
                adequado a Lei Geral de Proteção de Dados Pessoais (LGPD). Assim, garantimos aos nossos clientes informações claras, precisas
                e facilmente acessíveis sobre como seus dados serão tratados pela Organização.Para que possamos manter e utilizar seus dados
                pessoais, leia atentamente os Termos de Privacidade através do botão abaixo:</p>

            <Button onClick={abrePSI}
                id="btn"
            >
                Politica de Privacidade
            </Button>

            <p>Caso você deseje exercer seus direitos listados no art. 18 da LGPD como, mas não se limitando, confirmar a existência
                de tratamento; acessar seus dados; corrigir dados incompletos, inexatos ou desatualizados ou futuramente revogar o consentimento,
                basta acessar o nosso canal de comunicação no botão abaixo:</p>
            <Button
                id="btn"
                href="https://docs.google.com/forms/u/1/d/1-2aHeyeYMc7BMbPLzwcizMbkgYEt-hompZNF7IzHNPM/edit?usp=sharing">
                Canal de Comunicação
            </Button>

        </div>


        <Rodape />




    </div>);
}

export default CanalComunicacao;