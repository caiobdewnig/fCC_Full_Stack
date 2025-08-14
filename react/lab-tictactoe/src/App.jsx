import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  // Função pra clicar num quadrado
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  // Função pra resetar o jogo
  function handleReset() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  function renderSquare(i) {
    return (
      <button className="square" onClick={() => handleClick(i)}>
        {squares[i]}
      </button>
    );
  }

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(s => s !== null);
  let status = "";
  if (winner) {
    status = `${winner} wins!`;
  } else if (isDraw) {
    status = "Draw!";
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <>
      <h1>Tic-Tac-Toe</h1>
      <p>{status}</p>
      <div className="board">
        {Array(9).fill(null).map((_, i) => renderSquare(i))}
      </div>
      <button id="reset" onClick={handleReset}>Reset</button>
    </>
  );
}

// Checa vitória
function calculateWinner(squares) {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  for (let [a,b,c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;

