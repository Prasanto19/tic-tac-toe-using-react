import { useState } from "react";
import Board from "./components/board/Board";

export default function TicTacToe() {
  //This state is needed for controlling the move from a history
  const [history, setHistory] = useState([Array(9).fill(null)]);

  //This state is needed for deciding who is the next player
  const [isXnext, setIsXnext] = useState(true);

  //This state is needed the current moving position
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];
  function handlePlay(nextSquares) {
    setIsXnext(!isXnext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  //Jumping to a previous state
  function jumpTo(move) {
    setCurrentMove(move);
    setIsXnext(move % 2 === 0);

    //Start the game from beginning
    if (move === 0) {
      setHistory([Array(9).fill(null)]);
    }
  }

  //Button for moving to a previous state
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to the move #${move} .`;
    } else {
      description = `Go to Start the game!`;
    }
    return (
      <li key={move} className=" bg-gray-700 text-white mb-1 p-1 rounded-sm">
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="flex justify-center p-4">
      <div className="mr-16">
        <Board squares={currentSquares} isXnext={isXnext} onPlay={handlePlay} />
      </div>
      <div>
        <ol className="border border-gray-400 p-1 text-lg">{moves}</ol>
      </div>
    </div>
  );
}
