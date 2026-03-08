import { useState } from 'react'
import './App.css'

function applyRule(row, ruleNumber) {
  const next = [];

  for (let i = 0; i < row.length; i++) {
    const middle = row[i] || 0;
    const left = row[i - 1] || 0;
    const right = row[i + 1] || 0;

    const pattern = (left << 2) | (middle << 1) | right;
    next[i] = (ruleNumber >> pattern) & 1;
  }

  return next;
}

function generateGrid(initialRow, steps, ruleNumber) {
  const grid = [];
  let currentRow = [...initialRow];

  for (let i = 0; i < steps; i++) {
    grid.push(currentRow);
    currentRow = applyRule(currentRow, ruleNumber);
  }

  return grid;
}

function App() {
  const [ruleInput, setRuleInput] = useState('30');
  const [ruleNumber, setRuleNumber] = useState(30);

  const width = 51;
  const steps = 30;
  const initialRow = Array(width).fill(0);
  initialRow[Math.floor(width / 2)] = 1;

  const rows = generateGrid(initialRow, steps, ruleNumber);

  function handleGenerate() {
    const parsed = Number(ruleInput);

    if (!Number.isInteger(parsed) || parsed < 0 || parsed > 255) {
      return;
    }

    setRuleNumber(parsed);
  }

  return (
    <div className="app layout">
      <aside className="sidebar">
        <h2>O que é Cellular Automata?</h2>
        <p>
          Um autômato celular é um sistema formado por células em uma grade. Cada célula
          possui um estado (0 ou 1) e evolui em etapas. O próximo estado depende da
          própria célula e dos seus vizinhos.
        </p>

        <h3>Como funciona a Rule 30</h3>
        <p>
          Na Rule 30, cada trio de vizinhança (esquerda, centro e direita) gera um novo
          estado com base no número 30 em binário: <strong>00011110</strong>.
        </p>
        <ul>
          <li>111 → 0</li>
          <li>110 → 0</li>
          <li>101 → 0</li>
          <li>100 → 1</li>
          <li>011 → 1</li>
          <li>010 → 1</li>
          <li>001 → 1</li>
          <li>000 → 0</li>
        </ul>
        <p>
          Isso cria um padrão com comportamento caótico, mesmo começando com uma linha
          inicial simples.
        </p>
      </aside>

      <main className="content">
        <h1>Rule {ruleNumber}</h1>

        <div className="controls">
          <input
            type="number"
            min="0"
            max="255"
            value={ruleInput}
            onChange={(event) => setRuleInput(event.target.value)}
            placeholder="Digite uma rule (0-255)"
          />
          <button onClick={handleGenerate}>
            Generate
          </button>
        </div>

        <div className="grid" style={{ display: 'inline-flex' }}>
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="grid-row">
              {row.map((cell, cellIndex) => (
                <div key={cellIndex} className={`cell ${cell ? 'active' : ''}`} />
              ))}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App