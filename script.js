const correctAnswers = [
    ['A', 'B', 'C', 'D', 'E'],  // Baris 1
    ['A', 'B', 'C', 'D', 'E'],  // Baris 2
    ['A', 'B', 'C', 'D', 'E'],  // Baris 3
    ['A', 'B', 'C', 'D', 'E'],  // Baris 4
    ['A', 'B', 'C', 'D', 'E'],  // Baris 5
];

document.querySelector('#checkAnswers').addEventListener('click', () => {
    // Reset semua kolom sebelum memeriksa jawaban
    const allColumns = document.querySelectorAll('td');
    allColumns.forEach(cell => {
        cell.classList.remove('column-correct', 'column-incorrect');
    });

    document.querySelectorAll('.answer').forEach((input, index) => {
        const rowIndex = Math.floor(index / 5); // 5 kolom
        const colIndex = index % 5;
        const userAnswer = input.value.trim().toUpperCase();
        const correctAnswer = correctAnswers[rowIndex][colIndex];

        // Menentukan warna kolom berdasarkan jawaban
        const columnCells = document.querySelectorAll(`tr td:nth-child(${colIndex + 1})`);
        
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
