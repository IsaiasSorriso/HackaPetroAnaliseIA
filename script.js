document.addEventListener('DOMContentLoaded', () => {
    // 1. Dados Fixos do Navio (Baseados na imagem)
    const shipData = {
        'Nome do Navio': 'Oceanus Explorer',
        'Classe': 'Panamax',
        'Tipo': 'Graneleiro',
        'Porte Bruto': '80,000 DWT',
        'Comprimento total(m)': '230.0 m',
        'Boca (m)': '32.3 m',
        'Calado (m)': '14.0 m',
        'Pontal (m)': '18.0 m'
    };

    // 2. Elementos do Dashboard
    const gaugeRing = document.getElementById('gauge-ring');
    const gaugeNeedle = document.getElementById('gauge-needle');
    const statusText = document.getElementById('status-text');
    const predictionMessage = document.getElementById('prediction-message');
    const timeToCare = document.getElementById('time-to-care');
    const timeToUrgent = document.getElementById('time-to-urgent');
    const waterTempSpan = document.getElementById('water-temp');
    const hullRoughnessSpan = document.getElementById('hull-roughness');

    // 3. Função para popular a tabela de dados do navio
    function populateShipTable() {
        const table = document.getElementById('ship-data-table');
        let html = '<thead><tr>';
        let valuesHtml = '<tbody><tr>';

        for (const key in shipData) {
            html += `<th>${key}</th>`;
            valuesHtml += `<td>${shipData[key]}</td>`;
        }

        html += '</tr></thead>';
        valuesHtml += '</tr></tbody>';
        
        table.innerHTML = html + valuesHtml;
    }

    // 4. Função para simular dados de sensores e fazer a análise
    function runAnalysis() {
        // SIMULAÇÃO DE DADOS DE SENSORES (em uma aplicação real viriam de uma API)
        // 🌡️ A rugosidade e a temperatura da água são fatores chave para o fouling.
        // Valores de exemplo para um estado Ótimo:
        const simulatedWaterTemp = 22.5; // °C
        const simulatedHullRoughness = 100; // µm (valor baixo = ótimo)

        // Variável que determina o estado (0 a 100, 0=ótimo, 100=urgência)
        // Vamos simular um valor de 20 (Ótimo/Verde)
        const foulingIndex = 20; 

        // Atualiza os dados de sensores na UI
        waterTempSpan.textContent = simulatedWaterTemp.toFixed(1);
        hullRoughnessSpan.textContent = simulatedHullRoughness;

        let status = '';
        let needleAngle = 0; // Posição do ponteiro (CSS usa transform: rotate())
        let careTime = 0;
        let urgentTime = 0;
        let message = '';
        let statusClass = '';

        // Lógica de Estado (Termômetro)
        if (foulingIndex < 35) { // Verde: Ótimo
            status = 'ÓTIMO';
            needleAngle = 135; // Ângulo para a seção verde
            statusClass = 'status-green';
            // Previsão otimista
            careTime = 2.5;
            urgentTime = 4.5;
            message = `🎉 Muito bem! O navio até o momento está em um estado **ótimo**. Com base nos dados, temos **${careTime.toFixed(1)} meses** para ele entrar no estado de Cuidado (Amarelo) e **${urgentTime.toFixed(1)} meses** para entrar no estado de Urgência (Vermelho).`;
        } else if (foulingIndex < 70) { // Amarelo: Cuidado
            status = 'CUIDADO';
            needleAngle = 0; // Ângulo para a seção amarela
            statusClass = 'status-yellow';
            // Previsão de atenção
            careTime = 0.5;
            urgentTime = 2.0;
            message = `⚠️ Atenção! O navio está entrando no estado de **Cuidado**. Recomenda-se o planejamento de inspeção. Faltam aproximadamente **${urgentTime.toFixed(1)} meses** para atingir o estado de Urgência.`;
        } else { // Vermelho: Urgência
            status = 'URGÊNCIA';
            needleAngle = -135; // Ângulo para a seção vermelha
            statusClass = 'status-red';
            // Previsão crítica
            careTime = 0;
            urgentTime = 0.25;
            message = `🚨 CRÍTICO! O navio está no estado de **URGÊNCIA**. É necessária uma intervenção imediata para limpeza do casco, evitando perda significativa de eficiência e aumento de consumo de combustível.`;
        }

        // 5. Atualiza o Dashboard na UI
        
        // Remove classes antigas e adiciona a nova classe de cor
        gaugeRing.className = 'gauge-ring'; // Reset
        gaugeRing.classList.add(statusClass);

        // Define a posição do ponteiro
        gaugeNeedle.style.transform = `rotate(${needleAngle}deg) translate(0, -60px)`;
        
        // Atualiza os textos
        statusText.textContent = status;
        statusText.style.color = window.getComputedStyle(gaugeRing).borderColor; // Pega a cor do border
        
        predictionMessage.innerHTML = message;
        
        // Atualiza os tempos de previsão
        timeToCare.textContent = careTime > 0 ? `${careTime.toFixed(1)} meses` : 'IMEDIATO';
        timeToUrgent.textContent = urgentTime > 0 ? `${urgentTime.toFixed(1)} meses` : 'AGORA';
    }

    // Inicializa a aplicação
    populateShipTable();
    runAnalysis();
});