document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const answers = {
        question1: 'false', // Jawaban benar untuk pertanyaan 1
        question2: 'true'   // Jawaban benar untuk pertanyaan 2
    };

    let score = 0;
    const userAnswers = new FormData(event.target);

    for (let [question, answer] of userAnswers.entries()) {
        if (answers[question] === answer) {
            score++;
        }
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Skor Anda: ${score} dari ${Object.keys(answers).length}`;
});
