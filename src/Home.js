import Banner from './Components/Banner/Banner';
import Cabecalho from './Components/Cabecalho/Index';
import Clientes from './Components/Clientes/Clientes';
import DivPadrao from './Components/DivPadrao/DivPadrao';
import Servicos from './Components/Servicos/Servicos';
import Contato from './Components/FormContato/Contato.js';

import './Home.css';
import Rodape from './Components/Rodape/Rodape';

function Home() {
  return (
    <div className="home">
      <Cabecalho />
      <Banner />


      <DivPadrao titulo="Serviços prestados"
        texto="Soluções personalizadas em suporte, Gerenciamento de TI e ERP Protheus e Privacidade e cibersegurança" />

      <div className='servicos'>
        <Servicos
          src="./imagens/gerenciamentoti.png"
          titulo="Gerenciamento de TI"
          descricao="Equipar a sua força de trabalho com tecnologias de ponta não é apenas importante, mas fundamental para o sucesso do seu negócio. Nossas soluções são customizáveis e permitem que a sua equipe trabalhe de maneira contínua e segura, garantindo a conformidade de seu negócio." />

        <Servicos
          src="./imagens/consult.png"
          titulo="Consultoria ERP PROTHEUS"
          descricao="Desde de 1999 A FarAway é uma Consultoria Independente e Especializada no ERP TOTVS Microsiga Protheus com a missão de oferecer as melhores soluções do mercado para otimizar seus processos e assim, obter melhores resultados, com maior custo-beneficio e mais satisfação para sua empresa." />

        <Servicos
          src="./imagens/sec.png"
          titulo="Privacidade e cibersegurança"
          descricao="Nossas soluções de TI abrem o caminho para que as empresas possam focar em seu negócio sem se preocupar com Segurança da Informação.          
          Temos uma equipe especializada em Privacidade de dados e Segurança da Informação. Serviço essencial para as empresas em adequação com a LGPD." />
      </div>

      <DivPadrao titulo="Clientes Parceiros"
        texto="Parcerias de valor" />

      <div className='container-clientes'>

        <Clientes link="https://gauss.com.br/" empresa="Gauss Indústria Auto-Peças" src="./imagens/LOGO_GAUSS.png" />
        <Clientes link="https://gauss.com.br/" empresa="CDG Logística" src="./imagens/LOGO_CDG.png" />
        <Clientes link="https://gauss.com.br/" empresa="NSG Logística" src="./imagens/LOGO_NSG.png" />
      </div>
      <div className='container-clientes'>
        <Clientes link="https://gauss.com.br/" empresa="NSG Logística" src="./imagens/LOGO_SPG.png" />
        <Clientes link="https://brpaving.com.br" empresa="BR Paving" src="./imagens/brpavin.png" />
        <Clientes link="https://lc1contadores.com.br" empresa="LC1 Contados Associados" src="./imagens/lc1.png" />
      </div>

      <DivPadrao titulo="Fale Conosco"
        texto="contato@faraway.com.br" />

      <Contato />

      <Rodape />


    </div>
  );
}

export default Home;
