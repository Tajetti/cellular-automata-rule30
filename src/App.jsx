import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


  function ruleThirty(row) {
    const next = [];

    for(let i = 0; i < row.length; i++) {
      const middle = row[i] || 0;
      const left = row[i - 1] || 0;
      const right = row[i + 1] || 0;

      const pattern = (left << 2) | (middle << 1) | right;
    
      next[i] = (30 >> pattern) & 1;

    }
    return next;
  }


  function generateRuleThirty(initialRow, steps) {
    const grid = [];
    let row = initialRow;

    for (let i = 0; i < steps; i++) {
      grid.push(row);
      row = ruleThirty(row);
    }

    return grid;
  }

function App() {
  const initialRow = [0, 0, 1, 1, 0, 0, 1, 0, 1];
  const rows = generateRuleThirty(initialRow, 10);

  return (
    <div>
      <h1>Rule 30</h1>

      {rows.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex', justifyContent: 'center' }}>
          {row.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              style={{
                width: 20,
                height: 20,
                backgroundColor: cell ? 'black' : 'white',
                border: '1px solid #ddd'
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App