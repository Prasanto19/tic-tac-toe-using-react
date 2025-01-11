export default function Square({
  value,
  onSquareClick,
  winner,
  winningPosition,
}) {
  let squareStyle;

  //Defining styles for the square according to the playing condition
  if (winner) {
    if (winningPosition)
      squareStyle = "bg-lime-600 text-zinc-100 cursor-not-allowed";
    else squareStyle = "cursor-not-allowed bg-zinc-500 text-zinc-100";
  } else {
    if (value === "X") squareStyle = "bg-fuchsia-500 text-neutral-100";
    else if (value === "O") squareStyle = "bg-sky-500";
    else squareStyle = "bg-white";
  }

  return (
    <button
      className={` border border-gray-400 h-12 w-12 m-1 leading-9 text-lg ${squareStyle}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
