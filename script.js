document.addEventListener('DOMContentLoaded', () => {
    // 1. Dados dos Navios (JSON/Array de Objetos)
    const shipsData = [
        {
            'Nome do Navio': 'Oceanus Explorer',
            'Classe': 'Panamax',
            'Tipo': 'Graneleiro',
            'Porte Bruto': '80,000 DWT',
            'Comprimento total(m)': '230.0 m',
            'Boca (m)': '32.3 m',
            'Calado (m)': '14.0 m',
            'Pontal (m)': '18.0 m',
            'foulingIndex': 20, // Ótimo (Verde)
            'simulatedWaterTemp': 22.5, // °C
            'simulatedHullRoughness': 100 // µm
        },
        {
            'Nome do Navio': 'Mariner Voyager',
            'Classe': 'Capesize',
            'Tipo': 'Minério',
            'Porte Bruto': '180,000 DWT',
            'Comprimento total(m)': '290.0 m',
            'Boca (m)': '45.0 m',
            'Calado (m)': '17.0 m',
            'Pontal (m)': '22.0 m',
            'foulingIndex': 55, // Cuidado (Amarelo)
            'simulatedWaterTemp': 28.0, 
            'simulatedHullRoughness': 250 // µm
        },
        {
            'Nome do Navio': 'Global Tanker VII',
            'Classe': 'Suezmax',
            'Tipo': 'Petroleiro',
            'Porte Bruto': '150,000 DWT',
            'Comprimento total(m)': '275.0 m',
            'Boca (m)': '48.0 m',
            'Calado (m)': '16.0 m',
            'Pontal (m)': '20.0 m',
            'foulingIndex': 85, // Urgência (Vermelho)
            'simulatedWaterTemp': 30.5, 
            'simulatedHullRoughness': 450 // µm
        }
    ];

    // 2. Elementos do Dashboard
    const shipSelector = document.getElementById('ship-selector');
    const gaugeRing = document.getElementById('gauge-ring');
    const gaugeNeedle = document.getElementById('gauge-needle');
    const statusText = document.getElementById('status-text');
    const predictionMessage = document.getElementById('prediction-message');
    const timeToCare = document.getElementById('time-to-care');
    const timeToUrgent = document.getElementById('time-to-urgent');
    const waterTempSpan = document.getElementById('water-temp');
    const hullRoughnessSpan = document.getElementById('hull-roughness');
    const shipDataTable = document.getElementById('ship-data-table');
    const shipTitle = document.getElementById('ship-title');
    
    // --- Funções de Análise e Renderização ---

    // Função que aplica a lógica de estado e gera a mensagem/dados
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

        // Lógica de Estado (Termômetro)
        if (foulingIndex < 35) { // Verde: Ótimo
            status = 'ÓTIMO';
            needleAngle = 135; 
            statusClass = 'status-green';
            careTime = 2.5;
            urgentTime = 4.5;
            message = `🎉 Muito bem! O navio está em um estado **ótimo**. Com base nos dados, temos aproximadamente **${careTime.toFixed(1)} meses** para ele entrar no estado de Cuidado (Amarelo) e **${urgentTime.toFixed(1)} meses** para Urgência (Vermelho).`;
        } else if (foulingIndex < 70) { // Amarelo: Cuidado
            status = 'CUIDADO';
            needleAngle = 0; 
            statusClass = 'status-yellow';
            careTime = 0.5;
            urgentTime = 2.0;
            message = `⚠️ Atenção! O navio está no estado de **Cuidado**. Recomenda-se o planejamento de inspeção. Faltam aproximadamente **${urgentTime.toFixed(1)} meses** para atingir o estado de Urgência.`;
        } else { // Vermelho: Urgência
            status = 'URGÊNCIA';
            needleAngle = -135; 
            statusClass = 'status-red';
            careTime = 0;
            urgentTime = 0.25;
            message = `🚨 CRÍTICO! O navio está no estado de **URGÊNCIA**. É necessária uma intervenção imediata para limpeza do casco, evitando perda significativa de eficiência e aumento de consumo de combustível.`;
        }
        
        return {
            status,
            needleAngle,
            statusClass,
            careTime,
            urgentTime,
            message,
            simulatedWaterTemp,
            simulatedHullRoughness
        };
    }
    
    // Função para popular a tabela de dados do navio
    function populateShipTable(shipData) {
        let html = '<thead><tr>';
        let valuesHtml = '<tbody><tr>';
        
        // Remove as chaves de análise para exibir apenas as informações do navio
        const keysToSkip = ['foulingIndex', 'simulatedWaterTemp', 'simulatedHullRoughness'];
        
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

        // 5. Atualiza o Dashboard na UI
        
        // Remove classes antigas e adiciona a nova classe de cor
        gaugeRing.className = 'gauge-ring'; // Reset
        gaugeRing.classList.add(analysis.statusClass);

        // Define a posição do ponteiro
        gaugeNeedle.style.transform = `rotate(${analysis.needleAngle}deg) translate(0, -60px)`;
        
        // Atualiza os textos de status
        statusText.textContent = analysis.status;
        // NOTE: Em um cenário real, você teria que garantir que o CSS para a classe status-X esteja carregado
        // Aqui, vou manter a cor fixa para evitar problemas de escopo no getComputedStyle
        statusText.style.color = analysis.statusClass === 'status-green' ? '#28a745' : analysis.statusClass === 'status-yellow' ? '#ffc107' : '#dc3545';
        
        predictionMessage.innerHTML = analysis.message;
        
        // Atualiza os tempos de previsão
        timeToCare.textContent = analysis.careTime > 0 ? `${analysis.careTime.toFixed(1)} meses` : 'IMEDIATO';
        timeToUrgent.textContent = analysis.urgentTime > 0 ? `${analysis.urgentTime.toFixed(1)} meses` : 'AGORA';
        
        // Atualiza os dados de sensores na UI
        waterTempSpan.textContent = analysis.simulatedWaterTemp.toFixed(1);
        hullRoughnessSpan.textContent = analysis.simulatedHullRoughness;
        
        // Atualiza a tabela de dados do navio
        populateShipTable(ship);
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