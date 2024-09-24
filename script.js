const correctAnswers = [
    ['A', 'B', 'C', 'D', 'E'],  // Baris 1
    ['A', 'B', 'C', 'D', 'E'],  // Baris 2
    ['A', 'B', 'C', 'D', 'E'],  // Baris 3
    ['A', 'B', 'C', 'D', 'E'],  // Baris 4
    ['A', 'B', 'C', 'D', 'E'],  // Baris 5
];

document.querySelector('#checkAnswers').addEventListener('click', () => {
    // Reset hasil sebelumnya
    const results = document.querySelectorAll('.result');
    results.forEach(result => {
        result.textContent = ''; // Menghapus tanda centang/silang sebelumnya
    });

    document.querySelectorAll('.answer').forEach((input, index) => {
        const rowIndex = Math.floor(index / 5); // 5 kolom
        const colIndex = index % 5;
        const userAnswer = input.value.trim().toUpperCase();
        const correctAnswer = correctAnswers[rowIndex][colIndex];

        // Menentukan hasil berdasarkan jawaban
        const resultCell = document.querySelector(`tr:nth-child(${Math.floor(index / 5) + 2}) .result`);
        
        if (userAnswer === correctAnswer) {
            resultCell.textContent += '✔️ '; // Tanda centang jika benar
        } else if (userAnswer !== '') {
            resultCell.textContent += '❌ '; // Tanda silang jika salah
        }
    });
});
