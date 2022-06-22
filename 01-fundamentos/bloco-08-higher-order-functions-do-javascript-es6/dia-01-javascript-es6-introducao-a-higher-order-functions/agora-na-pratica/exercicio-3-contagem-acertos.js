const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const answerValue = (rightAnswer, studentAnswer) => studentAnswer === rightAnswer ? 1 : -0.5;

const totalPoints = (rightAnswers, studentAnswers, callback) => {
  let points = 0;

  for (let i = 0; i < rightAnswers.length; i += 1) {
    if (studentAnswers[i] === 'N.A') continue;
    points += callback(rightAnswers[i], studentAnswers[i]);
  }

  return `Pontuação: ${points}`;
}

console.log(totalPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, answerValue));