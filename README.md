# Cellular Automata - Rule 30

Aplicação em React + Vite para visualizar a evolução de um autômato celular elementar usando a **Regra 30**.

## Sobre o projeto

No autômato celular elementar:

- cada célula tem estado `0` (branco) ou `1` (preto);
- o próximo estado depende de `esquerda`, `centro` e `direita`;
- a regra é aplicada em cada linha para gerar a próxima.

Este projeto renderiza o grid da evolução da Rule 30 a partir de uma linha inicial fixa.

## Tecnologias

- React 19
- Vite 7
- CSS

## Como rodar

### 1) Instalar dependências

```bash
npm install
```

### 2) Ambiente de desenvolvimento

```bash
npm run dev
```

Abra o endereço exibido no terminal (normalmente `http://localhost:5173`).

### 3) Build de produção

```bash
npm run build
```

### 4) Preview da build

```bash
npm run preview
```

## Estrutura

```text
src/
  App.jsx      # Lógica e renderização do autômato
  App.css      # Estilos da interface
  main.jsx     # Entrada da aplicação
```

## Próximos passos

- Adicionar visualização para outras regras (ex.: 90 e 180)
- Permitir alterar tamanho da linha inicial
- Permitir escolher quantidade de gerações
