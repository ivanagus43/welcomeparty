const correctAnswers = [
    ['A', 'B', 'C', 'D', 'E'],  // Baris 1
    ['A', 'B', 'C', 'D', 'E'],  // Baris 2
    ['A', 'B', 'C', 'D', 'E'],  // Baris 3
    ['A', 'B', 'C', 'D', 'E'],  // Baris 4
    ['A', 'B', 'C', 'D', 'E'],  // Baris 5
];

document.querySelectorAll('.answer').forEach((input, index) => {
    input.addEventListener('input', function() {
        const rowIndex = Math.floor(index / 5); // 5 kolom
        const colIndex = index % 5;
        const userAnswer = this.value.trim().toUpperCase();
        const correctAnswer = correctAnswers[rowIndex][colIndex];

        if (userAnswer === correctAnswer) {
            this.classList.add('correct');
            this.classList.remove('incorrect');
        } else if (userAnswer !== '') {
            this.classList.add('incorrect');
            this.classList.remove('correct');
        } else {
            this.classList.remove('correct', 'incorrect'); // Reset jika input kosong
        }
    });
});
