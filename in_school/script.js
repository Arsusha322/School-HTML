function checkAnswer(inputId, correctAnswer, buttonId) {
    var userAnswer = document.getElementById(inputId).value;
    var button = document.getElementById(buttonId)

    if (parseInt(userAnswer) === correctAnswer) {
        button.innerHTML = "&#10003;";
    } else {
        button.innerHTML = "&#10005;";
    }
}
