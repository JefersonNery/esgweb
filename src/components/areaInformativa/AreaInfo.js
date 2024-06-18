import React from 'react';
import './AreaInfo.css';

const AreaInfo = () => {
    return (
        // HEADER DO CONTEUDO
        <div className="container">
            <div className="headerArea">
                <div className="background-image">
                    <img src="https://cdn.ttgtmedia.com/rms/onlineimages/esg_a468795958.jpg" className="imgHead" width="76%" height="100%"></img>
                    <img src="https://cdn.ttgtmedia.com/rms/onlineimages/esg_a468795958.jpg" className="imgHead" width="76%" height="100%"></img>
                </div>
                <p className="overlay-text">
                    A governança ambiental, social e corporativa é uma abordagem que avalia como uma corporação incorpora no seu processo de tomada de decisão aspectos Sociais, Ambientais e de Governança.
                </p>
            </div>

            {/* INICIO DO CONTEUDO */}
            <div className="main-content">
                {/* EXPLICANDO O QUE É ESG */}
                <div>
                    <h1>Explicando o que é ESG </h1>
                    {/* p1 */}
                    <p>ESG é um conjunto de padrões e boas práticas que visa definir se uma empresa é socialmente consciente, sustentável e corretamente gerenciada. Trata-se de uma forma de medir o desempenho de sustentabilidade de uma organização.</p>
                    {/* p2 */}
                    <p>
                        A sigla, em inglês, reúne os três pilares desse movimento:
                        <ul>
                            <li>Ambiental (Environmental): Refere-se às práticas relacionadas ao meio ambiente, como redução de emissões de carbono, uso sustentável de recursos naturais e gestão de resíduos.</li>
                            <br></br>
                            <li>Social: Avalia o impacto da empresa na sociedade, incluindo questões como diversidade, igualdade de gênero, saúde e segurança dos funcionários, entre outros.</li>
                            <br></br>
                            <li>Governança: Diz respeito à estrutura de governança da empresa, transparência, ética nos negócios e responsabilidade dos gestores.</li>
                        </ul>
                    </p>
                    {/* p3 */}
                    <p>
                        Esses critérios são usados para determinar se uma empresa é uma opção viável de investimento sustentável, capaz de gerar impactos positivos financeiros, sociais e ambientais. A incorporação do ESG na estratégia de negócios reforça a ideia de que propósito e lucro estão interligados, e que as empresas devem considerar seu papel como agentes sociais. O ESG serve como um guia para avaliar a compreensão da influência da organização e o valor compartilhado que ela pode gerar em seu ecossistema de relacionamento.
                    </p>
                </div>
                {/* Quais os Princípios de ESG ? */}
                <div>
                    <h1>Quais os princípios ESG?</h1>
                    <img src="https://lh6.googleusercontent.com/VIRvOFkdMw2fzGFZLuqsSDh3-aP9Nxdx0LB-L2--uMvUKKzDSH3jqKNbppTTa1REi93ZlXXnF7vmdJS7iVl3huL0dQZyHLCphaKf5d2kw5cQ1NEtAqbsbyp0r5E1GrHAVvkX3CHL7PSceHS1dTi2vbc" width="55%" height="40%">
                    </img>
                    <p>
                        Como ficou evidente, o índice é norteado por três princípios básicos. Que tal entender cada um em detalhes? Confira:
                    </p>

                    {/* AMBIENTAL */}
                    <h2>Ambiental</h2>
                    <p>
                        <ul>
                            <li>Envolve a gestão de resíduos, uso de fontes de energia renováveis e políticas relacionadas ao desmatamento.</li>
                            <br></br>
                            <li>Também considera a preservação da biodiversidade em terras da empresa.</li>
                        </ul>
                    </p>
                    {/* SOCIAL */}
                    <h2>Social</h2>
                    <p>
                        <ul>
                            <li>Investidores analisam o bem-estar dos funcionários.</li>
                            <br></br>
                            <li>Pontos importantes incluem taxa de turnover, planos de previdência, envolvimento dos funcionários na gestão e benefícios oferecidos.</li>
                            <br></br>
                            <li>Relações com fornecedores também são avaliadas quanto a trabalho infantil, escravo e transparência.</li>
                        </ul>
                    </p>
                    {/* Governança */}
                    <h2>Governança</h2>
                    <p>
                        <ul>
                            <li>Foca na administração da empresa pelos gestores e diretores.</li>
                            <br></br>
                            <li>Avalia se a gestão atende aos interesses de funcionários, acionistas e clientes.
                            </li>
                            <br></br>
                            <li>Transparência financeira, relatórios completos e remuneração dos acionistas são considerados.</li>
                        </ul>
                    </p>
                    <p>O ESG busca alinhar propósito e lucro, promovendo práticas sustentáveis e responsáveis.</p>
                </div>

                {/* O que são Investimentos ESG ? */}
                <div>
                    <h1>O que são investimentos ESG?
                    </h1>
                    <img src="https://www.comececomopedireito.com.br/blog/wp-content/uploads/2021/10/ESG-startups-1280x530.jpg" width="60%" height="100%"></img>


                    <p>
                        O investimento Environmental, Social and Governance é uma forma de impulsionar os setores mais sustentáveis e ser um indutor de boas práticas de gestão corporativa. Isso proporciona oportunidade e reconhecimento para empresas que apresentem bons níveis de responsabilidade social, ambiental e de governança.
                    </p>

                    <p>
                        Assim, é possível promover o crescimento de organizações ativamente preocupadas em melhorar o mundo, o mercado e a vida de seus colaboradores.
                    </p>

                    <p>
                        A análise realizada por parte dos fundos de investimento e pelos seus investidores em seus portfólios não possui um framework padronizado.
                    </p>

                    <p>
                        Na verdade, cada fundo tem a liberdade de realizar essa leitura, de acordo com seus próprios parâmetros. Assim, é possível dar pesos diferentes — dependendo do tipo de fundo e do setor de negócio que está sendo avaliado.
                    </p>
                </div>

                {/* O O que é necessário para uma empresa ser ESG? */}
                <h1>O que é necessário para uma empresa ser ESG?</h1>
                <p>
                    O primeiro ponto para uma empresa ser ranqueada dentro do índice ESG é estar listada na Bolsa de Valores ou, ao menos, no caminho para tal.
                </p>
                <p>
                    A pontuação é realizada por diversas agências, tanto comerciais quanto sem fins lucrativos
                </p>
                <p>
                    Essas organizações realizam uma análise aprofundada das empresas, com base em dados básicos e especializados.
                </p>
                <p>
                    Além disso, as empresas precisam disponibilizar políticas voltadas para as diretrizes do índice e problemas enfrentados dentro dos mesmos tópicos.
                </p>
                <p>
                    Um dos sistemas de ranking mais utilizados por todo mundo é o MSCI ESG Score, que analisa o risco considerando 10 categorias ambientais, sociais e de governança.
                </p>

                {/*Quais as vantagens de ser ESG para as empresas? */}
                <div>
                    <h1>Quais as vantagens de ser ESG para as empresas?</h1>
                    <p>
                        Agora, vale mesmo aderir ao índice? Reunimos alguns dos principais benefícios, confira:
                    </p>

                    <h2>Redução de custos</h2>
                    <p>
                        Uma das principais vantagens de ter um forte desempenho do Environmental, Social and Governance é que ele pode ajudar a reduzir custos. Afinal, essas empresas são vistas como melhor administradas e mais eficientes.
                    </p>

                    <h2>Reputação da empresa</h2>
                    <p>
                        Outra vantagem é que ela pode melhorar a reputação de uma empresa.
                    </p>
                    <p>
                        O motivo é que os consumidores e outros stakeholders estão cada vez mais interessados em apoiar as empresas que estão trabalhando para causar um impacto positivo.
                    </p>

                    <h2>Fidelização de clientes </h2>
                    <p>
                        Além disso, o índice Ambiental, Social e Governança também pode levar ao aumento da fidelidade do cliente. Afinal, os clientes têm maior probabilidade de apoiar as empresas que compartilham seus valores.
                    </p>
                    <p>
                        É algo que pode levar ao aumento das vendas e da lucratividade no longo prazo.
                    </p>

                    <h2>Sustentabilidade e transparência</h2>
                    <p>
                        Organizações comprometidas com o ESG são frequentemente mais transparentes sobre suas operações.
                    </p>
                    <p>
                        Elas também são mais propensas a ter políticas que protejam o meio ambiente e promovam a responsabilidade social.
                    </p>
                    <p>
                        Como resultado, essas empresas são vistas como mais sustentáveis em geral.
                    </p>
                    <h2>Segurança para o investidor</h2>
                    <p>
                        O investimento do Environmental, Social and Governance é encarado como uma forma mais segura de investimento.
                    </p>
                    <p>
                        Afinal, como já mencionamos, empresas com pontuações fortes no índice tendem a ser melhor gerenciadas e com estruturas de governança mais resilientes.
                    </p>
                    <h2>Linhas de crédito especiais </h2>
                    <p>
                        Muitos bancos e instituições financeiras estão agora oferecendo linhas de crédito especiais para empresas com boa classificação Ambiental, Social e de Governança.
                    </p>
                    <p>
                        O motivo é elas são vistas como sendo menos arriscadas e mais propensas a pagar suas dívidas.
                    </p>
                    <img src="https://www.acentauri.com.br/wp-content/uploads/2022/12/esg-sustentabilidade-768x480.jpeg" width="60%" height="50%"></img>

                    <p>O ESG é mais do que uma tendência; é uma necessidade urgente para as empresas. Ao incorporar práticas sustentáveis, responsabilidade social e governança transparente, as organizações demonstram compromisso com o bem-estar da sociedade, do meio ambiente e de seus stakeholders.</p>

                    <p>A busca pelo equilíbrio entre propósito e lucro é fundamental. O ESG não é apenas uma métrica; é uma mudança de mentalidade que impacta a forma como os negócios são conduzidos. Investidores, consumidores e a sociedade como um todo estão atentos a empresas que adotam esses princípios.</p>
                    
                    <p>portanto, ao considerar o ESG em sua estratégia, as empresas não apenas se preparam para um futuro mais sustentável, mas também fortalecem sua posição no mercado global. Juntos, podemos construir um mundo melhor, onde o sucesso empresarial está alinhado com o bem comum. </p>

                </div>


            </div>
        </div>
    );
};

export default AreaInfo;
