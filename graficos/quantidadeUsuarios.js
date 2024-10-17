import { getCSS, tickConfig } from "./common.js";

async function quantidadeUsuariosPorAposta() {
    // Dados fictícios de usuários em apostas online
    const dados = {
        "Apostas em jogos de futebol": 2,
        "Jogo de cartas": 1 ,
        "Cassinos online": 7
    };
    
    const nomeDasApostas = Object.keys(dados);
    const quantidadeDeUsuarios = Object.values(dados);

    const data = [
        {
            x: nomeDasApostas,
            y: quantidadeDeUsuarios,
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ];

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Qual a modalidade de aposta preferida entre os usuários?',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                family: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Tipo de Aposta',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Número de Usuários',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    };

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);
    Plotly.newPlot(grafico, data, layout);
}

// Chamar a função para gerar o gráfico
quantidadeUsuariosPorAposta();
