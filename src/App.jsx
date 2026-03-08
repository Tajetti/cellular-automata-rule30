import { useState } from 'react'
import './App.css'

// Função genérica para aplicar uma regra de autômato celular
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
  let row = initialRow;

  for (let i = 0; i < steps; i++) {
    grid.push(row);
    row = applyRule(row, ruleNumber);
  }

  return grid;
}

function AutomataGrid({ rule, rows }) {
  return (
    <div className="automata-container">
      <h2>Rule {rule}</h2>
      <div className="grid">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="grid-row">
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className={`cell ${cell ? 'active' : ''}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const initialRow = Array(51).fill(0);
  initialRow[25] = 1; // Célula central ativa
  const steps = 30;

  const rule30Grid = generateGrid(initialRow, steps, 30);
  const rule90Grid = generateGrid(initialRow, steps, 90);
  const rule110Grid = generateGrid(initialRow, steps, 110);

  return (
    <div className="app">
      <h1>Autômatos Celulares</h1>
      <div className="grids-container">
        <AutomataGrid rule={30} rows={rule30Grid} />
        <AutomataGrid rule={90} rows={rule90Grid} />
        <AutomataGrid rule={110} rows={rule110Grid} />
      </div>
    </div>
  );
}

export default App