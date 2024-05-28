document.addEventListener('DOMContentLoaded', () => {
  const cells = document.querySelectorAll('.cell');
  const resetButton = document.getElementById('reset');
  let currentPlayer = 'X';
  let board = Array(9).fill(null);
  let isGameActive = true;

  const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
  ];

  const checkWinner = () => {
      for (let condition of winningConditions) {
          const [a, b, c] = condition;
          if (board[a] && board[a] === board[b] && board[a] === board[c]) {
              isGameActive = false;
              alert(`${board[a]} wins!`);
              return;
          }
      }

      if (!board.includes(null)) {
          isGameActive = false;
          alert('Draw!');
      }
  };

  const handleClick = (e) => {
      const index = e.target.dataset.index;

      if (board[index] || !isGameActive) return;

      board[index] = currentPlayer;
      e.target.textContent = currentPlayer;

      checkWinner();

      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  };

  const resetGame = () => {
      board = Array(9).fill(null);
      cells.forEach(cell => cell.textContent = '');
      currentPlayer = 'X';
      isGameActive = true;
  };

  cells.forEach(cell => cell.addEventListener('click', handleClick));
  resetButton.addEventListener('click', resetGame);
});
