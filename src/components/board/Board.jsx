import decideWinner from "../../utils/decideWinner";
import Square from "./square/Square";
export default function Board({ squares, isXnext, onPlay }) {
  const [winner, winnerArray] = decideWinner(squares);
  const [winningPositionOne, winningPositionTwo, winningPositionThree] =
    winnerArray;

  //Defining text styles for the Title according to the playing condition
  let status, playerCSSStyle;
  if (winner) {
    status = `Winner : ${winner}`;
  } else {
    status = "Next Player : " + (isXnext ? "X" : "O");
    if (isXnext) {
      playerCSSStyle = "bg-fuchsia-500 text-neutral-100";
    } else {
      playerCSSStyle = "bg-sky-500";
    }
  }

  //This is calculated to decide who is the next player and turn off the game if the winner is found
  function handleClick(i) {
    if (squares[i] || winner) return;

    const nextSquares = squares.slice();
    if (isXnext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  //This is calculated to control the styles of cells of winner and non winner combination
  function winningPositionStatus(sqPosition) {
    if (
      sqPosition === winningPositionOne ||
      sqPosition === winningPositionTwo ||
      sqPosition === winningPositionThree
    )
      return true;
    else return false;
  }

  return (
    <div className="">
      <h1
        className={
          winner
            ? "bg-lime-600 text-zinc-100 text-center w-full"
            : `text-center w-full w  ${playerCSSStyle}`
        }
      >
        {status}
      </h1>
      <div className="flex">
        <Square
          value={squares[0]}
          winningPosition={winningPositionStatus(0)}
          winner={winner}
          onSquareClick={() => handleClick(0)}
        />
        <Square
          value={squares[1]}
          winner={winner}
          winningPosition={winningPositionStatus(1)}
          squarePosition={0}
          onSquareClick={() => handleClick(1)}
        />
        <Square
          value={squares[2]}
          winningPosition={winningPositionStatus(2)}
          winner={winner}
          onSquareClick={() => handleClick(2)}
        />
      </div>
      <div className="flex">
        <Square
          value={squares[3]}
          winningPosition={winningPositionStatus(3)}
          winner={winner}
          onSquareClick={() => handleClick(3)}
        />
        <Square
          value={squares[4]}
          winningPosition={winningPositionStatus(4)}
          winner={winner}
          onSquareClick={() => handleClick(4)}
        />
        <Square
          value={squares[5]}
          winningPosition={winningPositionStatus(5)}
          winner={winner}
          onSquareClick={() => handleClick(5)}
        />
      </div>
      <div className="flex">
        <Square
          value={squares[6]}
          winningPosition={winningPositionStatus(6)}
          winner={winner}
          onSquareClick={() => handleClick(6)}
        />
        <Square
          value={squares[7]}
          winner={winner}
          winningPosition={winningPositionStatus(7)}
          onSquareClick={() => handleClick(7)}
        />
        <Square
          value={squares[8]}
          winningPosition={winningPositionStatus(8)}
          winner={winner}
          onSquareClick={() => handleClick(8)}
        />
      </div>
    </div>
  );
}
