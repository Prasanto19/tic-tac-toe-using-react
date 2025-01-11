export default function decideWinner(squares) {
  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]; //Winning combination for the game, the game decide the winner according to this combination
  for (let i = 0; i < winningCombination.length; i++) {
    const [first, second, third] = winningCombination[i];
    if (
      squares[first] &&
      squares[first] === squares[second] &&
      squares[first] === squares[third]
    ) {
      return [squares[first], winningCombination[i]]; // return the result if winner is found
    }
  } //Searching the winner after checking every every rows input value

  return [null, []]; //return if the winner is not found
}
