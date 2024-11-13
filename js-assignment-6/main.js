const correctAnswers = ["a", "b", "a", "c", ];

const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let score = 0;
  const totalQuestions = correctAnswers.length;
  const scorePerQuestion = 100 / totalQuestions;

  const userAnswers = [];

  
  console.log("before", userAnswers);
  correctAnswers.forEach(function (answer, index) {
    userAnswers.push(form[`q${index + 1}`].value);
  });

  for (let i = 0; i < correctAnswers.length; i++) {
    const answer = correctAnswers[i];
    const userAnswer = userAnswers[i];
    if (answer === userAnswer) {
      score += scorePerQuestion;
    }
  }
result.style.display = "block";
  let output = 0;
  const timer = setInterval(function () {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);

  result.style.display = "block";
});
