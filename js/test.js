// Select all question containers
document.querySelectorAll('.question-container').forEach(container => {
    // Inside each container, select the answers
    container.querySelectorAll('.answer').forEach(answer => {
        answer.addEventListener('click', function() {
            // Remove any existing classes (correct/incorrect) from all answers in the current container
            container.querySelectorAll('.answer').forEach(a => {
                a.classList.remove('correct', 'incorrect');
            });

            // Add the correct or incorrect class based on the answer's data attribute
            if (this.dataset.correct === 'true') {
                this.classList.add('correct');
            } else {
                this.classList.add('incorrect');
            }

            // Get the explanation box
            const explanationBox = container.querySelector('.explanation');
            explanationBox.style.display = 'none'; // Hide the explanation box by default

            // Check if this answer has an explanation
            if (this.dataset.explanation) {
                explanationBox.innerHTML = this.dataset.explanation; // Set explanation text with HTML
                explanationBox.style.display = 'block'; // Show the explanation box
            } else {
                explanationBox.innerHTML = ''; // Clear any previous explanation text
            }
        });
    });
});
