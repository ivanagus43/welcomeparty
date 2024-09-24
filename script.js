document.querySelectorAll('.answer').forEach(input => {
    input.addEventListener('input', function() {
        const userAnswer = this.value.trim().toUpperCase();
        const correctAnswer = this.dataset.correct;

        if (userAnswer === correctAnswer) {
            this.classList.add('correct');
            this.classList.remove('incorrect');
        } else {
            this.classList.add('incorrect');
            this.classList.remove('correct');
        }
    });
});
