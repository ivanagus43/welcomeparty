document.getElementById("checkAnswers").addEventListener("click", function() {
    const correctAnswers = [
        "A", "B", "C", "D", "E",
        "F", "G", "H", "I", "J"
    ];

    const textareas = document.querySelectorAll("textarea.answer");
    const results = document.querySelectorAll(".result");

    // Cek jawaban baru
    textareas.forEach((textarea, index) => {
        const userAnswer = textarea.value.trim();
        const resultDiv = results[index];

        // Reset hasil untuk setiap jawaban
        resultDiv.textContent = ""; // Hapus teks hasil sebelumnya
        resultDiv.className = ""; // Hapus kelas sebelumnya

        if (userAnswer === "") {
            resultDiv.textContent = "❌"; // Tampilkan silang jika kosong
            resultDiv.className = "wrong"; // Tambahkan kelas salah
        } else if (userAnswer === correctAnswers[index]) {
            resultDiv.textContent = "✔️"; // Tampilkan centang jika benar
            resultDiv.className = "correct"; // Tambahkan kelas benar
        } else {
            resultDiv.textContent = "❌"; // Tampilkan silang jika salah
            resultDiv.className = "wrong"; // Tambahkan kelas salah
        }
    });
});
