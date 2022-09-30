import { Button } from "reactstrap";
import Cabecalho from "../../Components/Cabecalho/Index";
import Rodape from "../../Components/Rodape/Rodape";
import DivPadrao from '../../Components/DivPadrao/DivPadrao';


import "./TelaServicos.css"

const TelaServicos = () => {
    return (<div className="tela-servico">
        <Cabecalho/>
        <div className="container-servico-gerenciati">
            <div className="container-img">
                <img src="/Imagens/gerenciamentoti.png"></img>
            </div>
            <div className="servico-gerenciati">
                <h1>Gerenciamento de TI</h1>
                <ul>
                    <li><span>Terceirização Total da área de TI - </span>A FarAway terceiriza totalmente a área de TI, com a
                        alocação de equipe in loco, remota e gestão técnica para proporcionar tranquilidade na sustentação
                        tecnológica da sua empresa.</li>

                    <li><span>Monitoramento de Rede - </span> Resolução proativa de falhas e incidentes por meio do monitoramento
                        24-7 de sua rede, aplicações e servidores. Sua TI está sempre disponível</li>

                    <li><span>Software e Equipamentos - </span> Precisa comprar licenças Microsoft, substituir ou dar manutenção em Firewalls,
                        Switches, Access Point, Servidores, desktop e notebooks?</li>

                    <li><span>Consultoria e Gestão de TI - </span> Prestamos consultoria especializada em TI para projetos pontuais. </li>

                    <li><span>Suporte e Consultor In loco - </span> Descubra como obter melhor custo x benefício para seus colaboradores.
                        Temos uma equipe de especialistas para atender completamente sua demanda.</li>
                </ul>
                <Button>Falar com Consultor</Button>
            </div>
        </div>

        <DivPadrao />

        <div className="container-servico-consultoriaProt">
            <div className="container-img-erp">
                <img src="/Imagens/consult-wild.png"></img>
            </div>
            <div className="servico-consultoriaProt">
                <h1>Consultoria ERP Totvs Protheus</h1>
                <ul>
                    <li><span>Consultoria -</span> Realizamos um verdadeiro check-up do seu sistema e um diagnóstico preciso para seu ERP obter
                        total desempenho.</li>

                    <li><span>Suporte e Consultor In loco -</span> Descubra como obter melhor custo x benefício para seus colaboradores. Temos
                        uma equipe de especialistas em Protheus e Negócios para atender completamente sua demanda.</li>

                    <li><span>Implantação e Atualização de releases -</span> Implantações de projetos globais com aderência perfeita ao seu negócio
                        e grande qualidade de entrega. Constante atualização do seu ERP Protheus mantendo o último release lançado</li>

                    <li><span>Desenvolvimento ADVPL, API Rest, SQL e Webservices - </span>  Garantia das melhores personalizações no sistema Protheus e
                        demais soluções em nossa fabrica de software</li>

                    <li><span>Costumizações e Integrações - </span>  Otimize seu ERP Protheus com a integração de outros softwares, como CRM, e-commerce,
                        seu sistema legado e demais aplicações. Total aderência do seu ERP Protheus ao seu modelo de negócio. </li>

                    <li><span>Sistema na Nuvem TOTVS Protheus Cloud - </span> Reduza custos de infra com serviços de computação em nuvem híbrida do Microsoft Azure,
                        GCP ou AWS.</li>
                </ul>

                <Button>Falar com Consultor</Button>

            </div>
        </div>


        <DivPadrao />

        <div className="container-servico-privsec">

            <div className="servico-privsec">
                <h1 id="sec">Privacidade e cibersegurança</h1>
                <ul>
                    <li><span>Consultoria em Segurança da Informação - </span> Prestamos consultoria sobre segurança da informação.</li>

                    <li><span>Consultoria LGPD - </span> Prestamos consultoria para adequação da sua empresa a LGPD.</li>

                    <li><span>Gerenciamento de Firewall, Antivírus e Backup local e/ou em Nuvem - </span> - deixarão seus dados blindados contra hackers e softwares maliciosos.</li>

                    <li><span>Monitoramento de Rede 24-7 - </span> Com o monitoramento de, podemos atuar proativamente prevenindo problemas com a
                        Disponibilidade dos recursos de TI. </li>

                    <li><span>Analise de riscos -</span>  Realizamos analise dos riscos de segurança a nível de TI que sua empresa esta exposta. </li>

                    <li><span>Gestão de Riscos -</span>  Com a adoção de melhores práticas de infraestrutura, políticas e metodologias,
                        permitindo uma melhor gestão dos limites de risco aceitáveis.</li>

                </ul>
                <Button>Falar com Consultor</Button>
            </div>
            <div className="container-img-sec">
                <img src="/Imagens/secwild.png"></img>
            </div>
        </div>

        <DivPadrao />

        <Rodape />

    </div>);
}

export default TelaServicos;