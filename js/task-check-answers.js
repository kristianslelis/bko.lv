// Function to show or hide answers within a specific task container
function toggleAnswers(button) {
    var taskContainer = button.closest('.task-check-answers-container');
    var answersContainer = taskContainer.querySelector('.answer-container');
    
    if (answersContainer.style.display === 'none' || answersContainer.style.display === '') {
        answersContainer.style.display = 'block';
        button.textContent = 'Noslēpt atbildi';
        button.style.backgroundColor = '#B35595'; // Red color for "Hide Answer"
    } else {
        answersContainer.style.display = 'none';
        button.textContent = 'Parādīt atbildi';
        button.style.backgroundColor = '#2E9967'; // Green color for "Show Answer"
    }
}

// Function to check all answers within a specific task container
function checkAllAnswers(button) {
    var taskContainer = button.closest('.task-check-answers-container');
    var questions = taskContainer.querySelectorAll('.question');

    questions.forEach((question) => {
        var input = question.querySelector('.question-input');
        var radioButtons = question.querySelectorAll('input[type="radio"]');
        var checkboxes = question.querySelectorAll('input[type="checkbox"]');
        var container = question.querySelector('.multiple-choice-container') || question.querySelector('.multi-select-container');
        
        if (input) {
            var correctAnswer = input.dataset.correctAnswer;
            if (input.value.trim() === correctAnswer) {
                input.style.backgroundColor = 'lightgreen';
            } else {
                input.style.backgroundColor = 'salmon';
            }
        } else if (radioButtons.length > 0) {
            var correctRadio = Array.from(radioButtons).find(r => r.dataset.correct === 'true');
            var selectedOption = Array.from(radioButtons).find(r => r.checked);
            
            if (selectedOption && selectedOption.value === correctRadio.value) {
                container.classList.add('correct-answer');
                container.classList.remove('incorrect-answer');
            } else {
                container.classList.add('incorrect-answer');
                container.classList.remove('correct-answer');
            }
        } else if (checkboxes.length > 0) {
            var correctCheckboxes = Array.from(checkboxes).filter(c => c.dataset.correct === 'true').map(c => c.value);
            var selectedCheckboxes = Array.from(checkboxes).filter(c => c.checked).map(c => c.value);
            
            if (arraysEqual(selectedCheckboxes.sort(), correctCheckboxes.sort())) {
                container.classList.add('correct-answer');
                container.classList.remove('incorrect-answer');
            } else {
                container.classList.add('incorrect-answer');
                container.classList.remove('correct-answer');
            }
        }
    });
}

// Helper function to compare two arrays
function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}
