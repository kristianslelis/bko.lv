function toggleAnswer() {
    var answerContainer = document.getElementById('answer');
    var button = document.querySelector('.toggle-answer-btn');
    
    if (answerContainer.style.display === 'none' || answerContainer.style.display === '') {
        answerContainer.style.display = 'block';
        button.textContent = 'Noslēpt atbildi';
        button.style.backgroundColor = '#B35595'; // Red color for "Hide Answer"
    } else {
        answerContainer.style.display = 'none';
        button.textContent = 'Parādīt atbildi';
        button.style.backgroundColor = '#2E9967'; // Blue color for "Show Answer"
    }
}