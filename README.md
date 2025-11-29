# 🚢 BioFouling Predictor AI (BFPA)

BFPA é um sistema de análise preditiva baseado em **Machine Learning**, projetado para estimar o risco de **bioincrustração (fouling)** no casco de navios. O objetivo é fornecer alertas antecipados para otimizar a manutenção e limpeza do casco, reduzindo arrasto hidrodinâmico, consumo de combustível e emissões.

---

## ✨ Funcionalidades

- **Previsão do Índice de Incrustração**: Estima o `fouling_index` em uma escala de 0 a 100.  
- **Sistema de Alerta (Verde/Amarelo/Vermelho)**: Classifica o risco atual do casco.  
- **Análise Preditiva de Tempo**: Calcula o tempo aproximado (em meses) até o navio atingir os estados de **Cuidado** e **Urgência**.  
- **Modelo Open Source**: Utiliza bibliotecas Python padrão (`scikit-learn`) para transparência e fácil customização.

---

## ⚙️ Tecnologias Utilizadas

- **Linguagem**: Python 3.x  
- **Data Science**: `pandas`, `numpy`  
- **Machine Learning**: `scikit-learn` (Modelo: `LinearRegression`)  
- **Backend (Sugerido para Produção)**: `Flask` ou `FastAPI` (para servir o modelo via API REST)

---

## 🚀 Configuração e Instalação

### Pré-requisitos

Certifique-se de ter o **Python 3** instalado em sua máquina.

### Passos de Instalação

1. Clone o repositório:

```bash
git clone [LINK_DO_SEU_REPOSITORIO]
cd BFPA
