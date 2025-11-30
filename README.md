# 🚢 BioFouling Predictor AI (BFPA)

O **BFPA** é um sistema de análise preditiva baseado em *Machine Learning* (simulado com lógica de negócios no **frontend**), projetado para estimar o risco de **bioincrustração (fouling)** no casco de navios.  
Seu objetivo é fornecer alertas antecipados para otimizar a manutenção e limpeza do casco, reduzindo:

- Arrasto hidrodinâmico  
- Consumo de combustível  
- Emissões de CO₂  

---

## ✨ Funcionalidades do Dashboard

O dashboard web oferece uma visualização em **tempo real (simulada)** do estado de múltiplos navios, permitindo decisões proativas de manutenção.

### 🔍 Previsão do Índice de Incrustração
- Estima o `foulingIndex` de **0 (Ótimo)** a **100 (Urgência)**.

### 🚦 Sistema de Alerta (Verde / Amarelo / Vermelho)
- **Verde (Ótimo):** risco baixo, sem ação imediata.  
- **Amarelo (Cuidado):** risco moderado — planejar inspeção/limpeza.  
- **Vermelho (Urgência):** risco alto/crítico — ação imediata necessária.  

### ⏳ Análise Preditiva de Tempo
Calcula o tempo aproximado (em meses) até o navio atingir:

- Estado de **Cuidado**  
- Estado de **Urgência**  

Auxilia no planejamento logístico e de manutenção.

### 🛠️ Recomendação de Ação Condicional
- **Amarelo:** botão de *Agendamento de Limpeza*  
- **Vermelho:** botão *Contato Urgente*  

### 📡 Monitoramento de Sensores (Simulado)
O modelo utiliza dados simulados como:

- Temperatura da água  
- Rugosidade do casco  
- Dias parado  
- Velocidade média  

---

## ⚙️ Tecnologias Utilizadas

Este projeto utiliza uma arquitetura **full-stack leve** para simular o ciclo completo de dados.

### 🧠 Modelo de Previsão (Backend / Simulação)

| Categoria       | Tecnologia              | Uso |
|-----------------|--------------------------|-----|
| Linguagem       | **Python 3.x**           | Lógica do modelo de ML (simulação do cálculo do `foulingIndex`) |
| Data Science    | **pandas, numpy**        | Manipulação e preparação dos dados |
| Machine Learning| **scikit-learn (LinearRegression)** | Treinamento e simulação do modelo |
| Backend (prod.) | **Flask ou FastAPI**     | Servir o modelo via API REST (opcional para produção) |

---

### 🖥️ Dashboard (Frontend)

| Categoria  | Tecnologia   | Uso |
|------------|--------------|-----|
| Estrutura  | **HTML5**    | Estrutura da página |
| Estilização| **CSS3**     | Estilos, responsividade e UI |
| Interatividade | **JavaScript ES6+** | Lógica simulada, atualização do dashboard, manipulação dos dados dos navios |


