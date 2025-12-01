document.addEventListener('DOMContentLoaded', () => {
    // 1. Dados dos Navios (JSON/Array de Objetos)
    // 1. Dados dos Navios (JSON/Array de Objetos) - ATUALIZADO COM OS DADOS DO CSV
const shipsData = [
    {
        'Nome do Navio': 'RAFAEL SANTOS',
        'Classe': 'Suezmax',
        'Tipo': 'Petroleiro',
        'Porte Bruto': '156628 DWT',
        'Comprimento total(m)': '274.2 m',
        'Boca (m)': '48.0 m',
        'Calado (m)': '17.0 m',
        'Pontal (m)': '23.2 m',
        'foulingIndex': 50, // Cuidado
        'simulatedWaterTemp': 29.0, // °C
        'simulatedHullRoughness': 350, // µm
        'imageUrl': 'image1.png'
    },
    {
        'Nome do Navio': 'HENRIQUE ALVES',
        'Classe': 'Suezmax',
        'Tipo': 'Petroleiro',
        'Porte Bruto': '157700 DWT',
        'Comprimento total(m)': '274.2 m',
        'Boca (m)': '48.0 m',
        'Calado (m)': '17.0 m',
        'Pontal (m)': '23.2 m',
        'foulingIndex': 80, // Urgência
        'simulatedWaterTemp': 30.0, 
        'simulatedHullRoughness': 450, 
        'imageUrl': 'image3.png'
    },
    {
        'Nome do Navio': 'VICTOR OLIVEIRA',
        'Classe': 'Suezmax',
        'Tipo': 'Petroleiro',
        'Porte Bruto': '156492 DWT',
        'Comprimento total(m)': '274.2 m',
        'Boca (m)': '48.0 m',
        'Calado (m)': '17.0 m',
        'Pontal (m)': '23.2 m',
        'foulingIndex': 25, // Ótimo
        'simulatedWaterTemp': 28.0, 
        'simulatedHullRoughness': 200, 
        'imageUrl': 'image2.png'
    },
    {
        'Nome do Navio': 'FELIPE RIBEIRO',
        'Classe': 'Suezmax',
        'Tipo': 'Petroleiro',
        'Porte Bruto': '157700 DWT',
        'Comprimento total(m)': '274.2 m',
        'Boca (m)': '48.0 m',
        'Calado (m)': '17.0 m',
        'Pontal (m)': '23.2 m',
        'foulingIndex': 60, // Cuidado
        'simulatedWaterTemp': 29.5, 
        'simulatedHullRoughness': 380, 
        'imageUrl': 'image1.png'
    },
    {
        'Nome do Navio': 'GISELLE CARVALHO',
        'Classe': 'Suezmax',
        'Tipo': 'Petroleiro',
        'Porte Bruto': '156504 DWT',
        'Comprimento total(m)': '274.2 m',
        'Boca (m)': '48.0 m',
        'Calado (m)': '17.0 m',
        'Pontal (m)': '23.2 m',
        'foulingIndex': 30, // Ótimo
        'simulatedWaterTemp': 28.5, 
        'simulatedHullRoughness': 250, 
        'imageUrl': 'image2.png'
    },
    {
        'Nome do Navio': 'RAUL MARTINS',
        'Classe': 'Suezmax',
        'Tipo': 'Petroleiro',
        'Porte Bruto': '156523 DWT',
        'Comprimento total(m)': '274.2 m',
        'Boca (m)': '48.0 m',
        'Calado (m)': '17.0 m',
        'Pontal (m)': '23.2 m',
        'foulingIndex': 70, // Urgência
        'simulatedWaterTemp': 30.2, 
        'simulatedHullRoughness': 420, 
        'imageUrl': 'image3.png'
    },
    {
        'Nome do Navio': 'PAULO MOURA',
        'Classe': 'Suezmax',
        'Tipo': 'Petroleiro',
        'Porte Bruto': '156547 DWT',
        'Comprimento total(m)': '274.2 m',
        'Boca (m)': '48.0 m',
        'Calado (m)': '17.0 m',
        'Pontal (m)': '23.2 m',
        'foulingIndex': 40, // Cuidado
        'simulatedWaterTemp': 29.2, 
        'simulatedHullRoughness': 300, 
        'imageUrl': 'image1.png'
    },
    {
        'Nome do Navio': 'MARCOS CAVALCANTI',
        'Classe': 'Suezmax',
        'Tipo': 'Petroleiro',
        'Porte Bruto': '156733 DWT',
        'Comprimento total(m)': '274.2 m',
        'Boca (m)': '48.0 m',
        'Calado (m)': '17.0 m',
        'Pontal (m)': '23.2 m',
        'foulingIndex': 90, // Urgência
        'simulatedWaterTemp': 31.0, 
        'simulatedHullRoughness': 500, 
        'imageUrl': 'image3.png'
    },
    {
        'Nome do Navio': 'DANIEL PEREIRA',
        'Classe': 'Aframax',
        'Tipo': 'Petroleiro',
        'Porte Bruto': '114562 DWT',
        'Comprimento total(m)': '249.0 m',
        'Boca (m)': '43.8 m',
        'Calado (m)': '15.0 m',
        'Pontal (m)': '21.0 m',
        'foulingIndex': 75, // Urgência
        'simulatedWaterTemp': 27.5, 
        'simulatedHullRoughness': 400, 
        'imageUrl': 'image3.png'
    },
    {
        'Nome do Navio': 'CARLA SILVA',
        'Classe': 'Aframax',
        'Tipo': 'Petroleiro',
        'Porte Bruto': '114365 DWT',
        'Comprimento total(m)': '249.0 m',
        'Boca (m)': '43.8 m',
        'Calado (m)': '15.0 m',
        'Pontal (m)': '21.0 m',
        'foulingIndex': 15, // Ótimo
        'simulatedWaterTemp': 26.0, 
        'simulatedHullRoughness': 180, 
        'imageUrl': 'image2.png'
    },
    {
        'Nome do Navio': 'RENATO GOMES',
        'Classe': 'Aframax',
        'Tipo': 'Petroleiro',
        'Porte Bruto': '114481 DWT',
        'Comprimento total(m)': '249.0 m',
        'Boca (m)': '43.8 m',
        'Calado (m)': '15.0 m',
        'Pontal (m)': '21.0 m',
        'foulingIndex': 55, // Cuidado
        'simulatedWaterTemp': 28.5, 
        'simulatedHullRoughness': 350, 
        'imageUrl': 'image1.png'
    },
    {
        'Nome do Navio': 'GABRIELA MARTINS',
        'Classe': 'Aframax',
        'Tipo': 'Petroleiro',
        'Porte Bruto': '114441 DWT',
        'Comprimento total(m)': '249.0 m',
        'Boca (m)': '43.8 m',
        'Calado (m)': '15.0 m',
        'Pontal (m)': '21.0 m',
        'foulingIndex': 85, // Urgência
        'simulatedWaterTemp': 29.0, 
        'simulatedHullRoughness': 480, 
        'imageUrl': 'image3.png'
    },
    {
        'Nome do Navio': 'RODRIGO PINHEIRO',
        'Classe': 'Aframax',
        'Tipo': 'Petroleiro',
        'Porte Bruto': '114434 DWT',
        'Comprimento total(m)': '249.0 m',
        'Boca (m)': '43.8 m',
        'Calado (m)': '15.0 m',
        'Pontal (m)': '21.0 m',
        'foulingIndex': 20, // Ótimo
        'simulatedWaterTemp': 26.5, 
        'simulatedHullRoughness': 220, 
        'imageUrl': 'image2.png'
    },
    {
        'Nome do Navio': 'EDUARDO COSTA',
        'Classe': 'MR 2',
        'Tipo': 'Petroleiro',
        'Porte Bruto': '48501 DWT',
        'Comprimento total(m)': '182.85 m',
        'Boca (m)': '32.2 m',
        'Calado (m)': '12.8 m',
        'Pontal (m)': '18.6 m',
        'foulingIndex': 10, // Ótimo
        'simulatedWaterTemp': 25.0, 
        'simulatedHullRoughness': 150, 
        'imageUrl': 'image2.png'
    },
    {
        'Nome do Navio': 'THIAGO FERNANDES',
        'Classe': 'MR 2',
        'Tipo': 'Petroleiro',
        'Porte Bruto': '48573 DWT',
        'Comprimento total(m)': '182.85 m',
        'Boca (m)': '32.2 m',
        'Calado (m)': '12.8 m',
        'Pontal (m)': '18.6 m',
        'foulingIndex': 45, // Cuidado
        'simulatedWaterTemp': 27.0, 
        'simulatedHullRoughness': 280, 
        'imageUrl': 'image1.png'
    },
    {
        'Nome do Navio': 'ROMARIO SILVA',
        'Classe': 'MR 2',
        'Tipo': 'Petroleiro',
        'Porte Bruto': '48449 DWT',
        'Comprimento total(m)': '182.85 m',
        'Boca (m)': '32.2 m',
        'Calado (m)': '12.8 m',
        'Pontal (m)': '18.6 m',
        'foulingIndex': 90, // Urgência
        'simulatedWaterTemp': 29.0, 
        'simulatedHullRoughness': 490, 
        'imageUrl': 'image3.png'
    },
    {
        'Nome do Navio': 'LUCAS MENDONÇA',
        'Classe': 'MR 2',
        'Tipo': 'Petroleiro',
        'Porte Bruto': '48573 DWT',
        'Comprimento total(m)': '182.85 m',
        'Boca (m)': '32.2 m',
        'Calado (m)': '12.8 m',
        'Pontal (m)': '18.6 m',
        'foulingIndex': 30, // Ótimo
        'simulatedWaterTemp': 26.5, 
        'simulatedHullRoughness': 200, 
        'imageUrl': 'image2.png'
    },
    {
        'Nome do Navio': 'RICARDO BARBOSA',
        'Classe': 'Gaseiro 7k',
        'Tipo': 'Gaseiro',
        'Porte Bruto': '5079 DWT',
        'Comprimento total(m)': '117.63 m',
        'Boca (m)': '19.2 m',
        'Calado (m)': '5.8 m',
        'Pontal (m)': '9.25 m',
        'foulingIndex': 40, // Cuidado
        'simulatedWaterTemp': 24.0, 
        'simulatedHullRoughness': 120, 
        'imageUrl': 'image1.png'
    },
    {
        'Nome do Navio': 'BRUNO LIMA',
        'Classe': 'Gaseiro 7k',
        'Tipo': 'Gaseiro',
        'Porte Bruto': '5095 DWT',
        'Comprimento total(m)': '117.63 m',
        'Boca (m)': '19.2 m',
        'Calado (m)': '5.8 m',
        'Pontal (m)': '9.25 m',
        'foulingIndex': 20, // Ótimo
        'simulatedWaterTemp': 23.0, 
        'simulatedHullRoughness': 80, 
        'imageUrl': 'image2.png'
    },
    {
        'Nome do Navio': 'FÁBIO SANTOS',
        'Classe': 'Gaseiro 7k',
        'Tipo': 'Gaseiro',
        'Porte Bruto': '5092 DWT',
        'Comprimento total(m)': '117.63 m',
        'Boca (m)': '19.2 m',
        'Calado (m)': '5.8 m',
        'Pontal (m)': '9.25 m',
        'foulingIndex': 65, // Cuidado
        'simulatedWaterTemp': 25.5, 
        'simulatedHullRoughness': 300, 
        'imageUrl': 'image3.png'
    },
    {
        'Nome do Navio': 'MARIA VALENTINA',
        'Classe': 'Gaseiro 7k',
        'Tipo': 'Gaseiro',
        'Porte Bruto': '5097 DWT',
        'Comprimento total(m)': '117.63 m',
        'Boca (m)': '19.2 m',
        'Calado (m)': '5.8 m',
        'Pontal (m)': '9.25 m',
        'foulingIndex': 15, // Ótimo
        'simulatedWaterTemp': 22.5, 
        'simulatedHullRoughness': 50, 
        'imageUrl': 'image2.png'
    }
];

// ... o restante do seu código JavaScript continua aqui (terminalData, funções e inicialização)
    
    // Dados do Terminal de Emergência (Angra dos Reis)
    const terminalData = {
        'Endereço': 'Rodovia Governador Mário Covas km 471',
        'CEP': '23.905-000',
        'Cidade': 'Jacuecanga - Angra dos Reis/RJ',
        'Produtos': [
            { Tipo: 'Petróleo/Derivados', Quantidade: 105, Capacidade: '845.557 m³' },
            { Tipo: 'Álcool e Biodiesel', Quantidade: null, Capacidade: '132.489 m³' }
        ],
        'Atracacao': [
            { Pier: 'Pier 1', Calado: '25 m', LOA: '516 m', PorteBruto: '500.000 t' },
            { Pier: 'Pier 2', Calado: '25 m', LOA: '516 m', PorteBruto: '500.000 t' }
        ]
    };


    // 2. Elementos do Dashboard (CONSTANTES FALTANTES ADICIONADAS AQUI)
    const shipSelector = document.getElementById('ship-selector');
    const gaugeRing = document.getElementById('gauge-ring');
    const gaugeNeedle = document.getElementById('gauge-needle');
    const statusText = document.getElementById('status-text');
    const predictionMessage = document.getElementById('prediction-message');
    const actionArea = document.getElementById('action-area');
    const timeToCare = document.getElementById('time-to-care');
    const timeToUrgent = document.getElementById('time-to-urgent');
    const waterTempSpan = document.getElementById('water-temp');
    const hullRoughnessSpan = document.getElementById('hull-roughness');
    
    // CONSTANTES QUE VOCÊ NOTOU QUE FALTAVAM AQUI:
    const shipDataTable = document.getElementById('ship-data-table');
    const shipTitle = document.getElementById('ship-title');
    const shipImage = document.getElementById('ship-image');
    
    const foulingPercentageDisplay = document.getElementById('fouling-percentage'); 

    // Função auxiliar para gerar a tabela de atracação
    function createAtracacaoTable(data) {
        let html = '<p>Pontos de Atracação para Urgência:</p>';
        html += '<table class="atracacao-table"><thead><tr>';
        
        // Cabeçalho
        const headers = ['Pier', 'Calado (m)', 'LOA (m)', 'Porte Bruto (t)'];
        headers.forEach(h => html += `<th>${h}</th>`);
        html += '</tr></thead><tbody>';
        
        // Linhas
        data.forEach(item => {
            html += '<tr>';
            html += `<td>${item.Pier}</td>`;
            html += `<td>${item.Calado}</td>`;
            html += `<td>${item.LOA}</td>`;
            html += `<td>${item.PorteBruto}</td>`;
            html += '</tr>';
        });
        
        html += '</tbody></table>';
        return html;
    }

    // Função principal de análise
    function getShipAnalysis(ship) {
        const foulingIndex = ship.foulingIndex;
        const simulatedWaterTemp = ship.simulatedWaterTemp;
        const simulatedHullRoughness = ship.simulatedHullRoughness;
        
        let status = '';
        let needleAngle = 0; 
        let careTime = 0;
        let urgentTime = 0;
        let message = '';
        let statusClass = '';
        let actionHtml = ''; 
        let predictedGrowth = 0; // Porcentagem de crescimento simulado

        // Lógica de Estado (Termômetro)
        if (foulingIndex < 35) { // Verde: Ótimo
            status = 'ÓTIMO';
            needleAngle = 135; 
            statusClass = 'status-green';
            careTime = 2.5;
            urgentTime = 4.5;
            predictedGrowth = 5; 
            message = `🎉 Muito bem! O navio tem ${foulingIndex}% de incrustação. Mantendo as condições atuais, a previsão é que essa taxa aumente em cerca de ${predictedGrowth}% em 1 mês, e temos aproximadamente ${careTime.toFixed(1)} meses para ele entrar no estado de Cuidado (Amarelo) e ${urgentTime.toFixed(1)} meses para Urgência (Vermelho).`;
        } else if (foulingIndex < 70) { // Amarelo: Cuidado
            status = 'CUIDADO';
            needleAngle = 0; 
            statusClass = 'status-yellow';
            careTime = 0.5;
            urgentTime = 2.0;
            predictedGrowth = 15; 
            message = `⚠️ Atenção! O navio tem ${foulingIndex}% de incrustação. Recomenda-se o planejamento de inspeção. Mantendo as condições atuais, a previsão é que essa taxa aumente em cerca de ${predictedGrowth}% em 1 mês, e faltam aproximadamente ${urgentTime.toFixed(1)} meses para atingir o estado de Urgência.`;
            actionHtml = `
                <span>Que tal agendar uma avaliação?</span>
                <button class="action-btn yellow-btn">Agendar Avaliação</button>
            `;
        } else { // Vermelho: Urgência - Lógica de Escalamento + Detalhes do Porto
            status = 'URGÊNCIA';
            needleAngle = -135; 
            statusClass = 'status-red';
            careTime = 0;
            urgentTime = 0.25;
            predictedGrowth = 25; 
            message = `🚨 CRÍTICO! O navio atingiu ${foulingIndex}% de incrustação. É necessária uma intervenção imediata. Se nenhuma ação for tomada, a previsão é que a incrustação aumente em ${predictedGrowth}% em 1 mês, causando perda significativa de eficiência e aumento de consumo de combustível.`;
            
            const atracacaoTable = createAtracacaoTable(terminalData.Atracacao);
            
            actionHtml = `
                <div class="escalation-block">
                    <span>Necessário Escalamento Urgente do Caso.</span>
                    <button class="action-btn red-btn">ESCALONAMENTO</button>
                </div>
                <div class="terminal-details">
                    <h3>📍 Terminal de Apoio</h3>
                    <p><strong>Endereço:</strong> ${terminalData.Endereço}<br>
                    <strong>CEP:</strong> ${terminalData.CEP}<br>
                    <strong>Local:</strong> ${terminalData.Cidade}</p>
                    ${atracacaoTable}
                    <p class="small-info">Capacidade de Estocagem: ${terminalData.Produtos[0].Capacidade} (Petróleo/Derivados)</p>
                </div>
            `;
        }
        
        return {
            status,
            needleAngle,
            statusClass,
            careTime,
            urgentTime,
            message,
            actionHtml,
            simulatedWaterTemp,
            simulatedHullRoughness,
            imageUrl: ship.imageUrl,
            foulingIndex
        };
    }
    
    // Função para popular a tabela de dados do navio (ESSENCIAL PARA USAR shipDataTable e shipTitle)
    function populateShipTable(shipData) {
        let html = '<thead><tr>';
        let valuesHtml = '<tbody><tr>';
        
        const keysToSkip = ['foulingIndex', 'simulatedWaterTemp', 'simulatedHullRoughness', 'imageUrl'];
        
        for (const key in shipData) {
            if (!keysToSkip.includes(key)) {
                html += `<th>${key}</th>`;
                valuesHtml += `<td>${shipData[key]}</td>`;
            }
        }
        
        html += '</tr></thead>';
        valuesHtml += '</tr></tbody>';
        
        shipDataTable.innerHTML = html + valuesHtml;
        shipTitle.textContent = `⚓ Dados do Navio: ${shipData['Nome do Navio']}`;
    }

    // Função para atualizar o dashboard completo
    function renderDashboard(ship) {
        const analysis = getShipAnalysis(ship);

        // Atualiza anel e ponteiro
        gaugeRing.className = 'gauge-ring'; 
        gaugeRing.classList.add(analysis.statusClass);
        gaugeNeedle.style.transform = `rotate(${analysis.needleAngle}deg) translate(0, -60px)`;
        
        // Atualiza a porcentagem no centro do gauge (usa foulingPercentageDisplay)
        if (foulingPercentageDisplay) {
            foulingPercentageDisplay.textContent = `${analysis.foulingIndex}%`;
        }
        
        statusText.textContent = analysis.status;
        statusText.style.color = analysis.statusClass === 'status-green' ? '#28a745' : analysis.statusClass === 'status-yellow' ? '#ffc107' : '#dc3545';
        predictionMessage.innerHTML = analysis.message;
        
        actionArea.innerHTML = analysis.actionHtml;
        
        timeToCare.textContent = analysis.careTime > 0 ? `${analysis.careTime.toFixed(1)} meses` : 'IMEDIATO';
        timeToUrgent.textContent = analysis.urgentTime > 0 ? `${analysis.urgentTime.toFixed(1)} meses` : 'AGORA';
        
        waterTempSpan.textContent = analysis.simulatedWaterTemp.toFixed(1);
        hullRoughnessSpan.textContent = analysis.simulatedHullRoughness;
        
        // Usa shipDataTable e shipTitle
        populateShipTable(ship);
        
        // Usa shipImage
        shipImage.src = analysis.imageUrl;
        shipImage.alt = `Desenho do navio ${ship['Nome do Navio']} no estado ${analysis.status}`;
    }

    // --- Inicialização e Eventos ---

    // Popula o seletor de navios
    shipsData.forEach((ship, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = ship['Nome do Navio'];
        shipSelector.appendChild(option);
    });

    // Evento de mudança no seletor
    shipSelector.addEventListener('change', (event) => {
        const selectedIndex = parseInt(event.target.value);
        const selectedShip = shipsData[selectedIndex];
        if (selectedShip) {
            renderDashboard(selectedShip);
        }
    });

    // Inicializa a aplicação com o primeiro navio
    const initialShip = shipsData[0];
    if (initialShip) {
        renderDashboard(initialShip);
    }
});