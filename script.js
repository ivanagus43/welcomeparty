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
        result.textContent = ''; // Menghapus hasil sebelumnya
    });

    document.querySelectorAll('.answer').forEach((input, index) => {
        const rowIndex = Math.floor(index / 5); // 5 kolom
        const colIndex = index % 5;
        const userAnswer = input.value.trim().toUpperCase();
        const correctAnswer = correctAnswers[rowIndex][colIndex];

        // Menentukan hasil berdasarkan jawaban
        const resultCell = input.nextElementSibling; // Mendapatkan elemen div di samping input
        if (userAnswer === correctAnswer) {
            resultCell.textContent = 'Benar'; // Menampilkan "Benar" jika jawaban benar
        } else if (userAnswer !== '') {
            resultCell.textContent = 'Salah'; // Menampilkan "Salah" jika jawaban salah
        }
    });
});
