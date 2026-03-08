# Autômatos Celulares - Visualização de Regras

Uma aplicação React para visualização de autômatos celulares elementares, implementando as regras 30, 90 e 110.

## 🔬 Sobre Autômatos Celulares

Autômatos celulares são modelos matemáticos discretos que consistem em uma grade de células, onde cada célula pode estar em um de vários estados. O estado de cada célula evolui ao longo de passos discretos de acordo com regras baseadas nos estados das células vizinhas.

Este projeto implementa **autômatos celulares elementares**, onde:
- Cada célula pode estar em um de dois estados (0 ou 1)
- O próximo estado de uma célula depende de seu estado atual e dos estados de seus dois vizinhos
- Existem 256 regras possíveis (2^8), numeradas de 0 a 255

### Regras Implementadas

- **Regra 30**: Produz um padrão caótico e é usado em geradores de números aleatórios
- **Regra 90**: Produz o triângulo de Sierpinski, um fractal famoso
- **Regra 110**: Demonstrada como sendo Turing-completa, capaz de computação universal

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Tajetti/cellular-automata-rule30.git

# Entre no diretório
cd rule-automata

# Instale as dependências
npm install
```

### Executar em desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:5173` no seu navegador.

### Build para produção

```bash
npm run build
```

### Preview da build

```bash
npm run preview
```

## 🛠️ Tecnologias

- **React 19** - Biblioteca para construção da interface
- **Vite** - Build tool e dev server
- **CSS3** - Estilização responsiva

## 📁 Estrutura do Projeto

```
src/
├── App.jsx         # Componente principal com lógica dos autômatos
├── App.css         # Estilos da aplicação
├── main.jsx        # Ponto de entrada
└── index.css       # Estilos globais
```

## 🧮 Como Funciona

A função `applyRule` implementa a lógica do autômato celular:

```javascript
function applyRule(row, ruleNumber) {
  const next = [];
  for (let i = 0; i < row.length; i++) {
    const left = row[i - 1] || 0;
    const middle = row[i] || 0;
    const right = row[i + 1] || 0;
    
    // Converte o padrão de 3 bits em um índice (0-7)
    const pattern = (left << 2) | (middle << 1) | right;
    
    // Aplica a regra usando operação bitwise
    next[i] = (ruleNumber >> pattern) & 1;
  }
  return next;
}
```

Cada padrão de 3 células (esquerda, centro, direita) mapeia para um bit específico no número da regra.

## 📝 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 👨‍💻 Autor

Desenvolvido como estudo de autômatos celulares e React.
