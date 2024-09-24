const correctAnswers = [
    ['A', 'B', 'C', 'D', 'E'],  // Baris 1
    ['A', 'B', 'C', 'D', 'E'],  // Baris 2
    ['A', 'B', 'C', 'D', 'E'],  // Baris 3
    ['A', 'B', 'C', 'D', 'E'],  // Baris 4
    ['A', 'B', 'C', 'D', 'E'],  // Baris 5
];

document.querySelector('#checkAnswers').addEventListener('click', () => {
    document.querySelectorAll('.answer').forEach((input, index) => {
        const rowIndex = Math.floor(index / 5); // 5 kolom
        const colIndex = index % 5;
        const userAnswer = input.value.trim().toUpperCase();
        const correctAnswer = correctAnswers[rowIndex][colIndex];

        // Hapus kelas sebelumnya
        const columnCells = document.querySelectorAll(`tr td:nth-child(${colIndex + 1})`);
        columnCells.forEach(cell => {
            cell.classList.remove('column-correct', 'column-incorrect');
        });

        if (userAnswer === correctAnswer) {
            columnCells.forEach(cell => {
                cell.classList.add('column-correct');
            });
        } else if (userAnswer !== '') {
            columnCells.forEach(cell => {
                cell.classList.add('column-incorrect');
            });
        }
    });
});
