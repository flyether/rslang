import yesImage from '../assets/yes.png';
import NoImage from '../assets/no.png';

const SprintResults = {
  render(questions:string[], answers:boolean[], rightAnswers:number, wrongAnswers:number, score:number):string {
    const tableTextContent:string = this.createTable(questions, answers);
    return `<div class="result-conteiner">
              <p class="sprint__result__score">Твой результат: ${score} очков </p>
              <p class="sprint__result">Правильных ответов: ${rightAnswers}. Ошибок: ${wrongAnswers}.</p>
              <div class="table-conteiner">
                <span>Выученные слова:</span>
                <table class="sprint__table__result">${tableTextContent}</table>
              </div>
              <a class="sprint__close__result" href="#main">Закрыть</a>
            </div>`;
  },
  createTable: (questions:string[], answers:boolean[]):string => {
    let result = '';
    for (let i = 0; i < questions.length; i++) {
      const src = answers[i] ? yesImage : NoImage;
      result += `<tr><td>${questions[i]}</td><td><img src="${src}" alt="yes/no"></td></tr>`;
    }
    return result;
  },
};

export default SprintResults;
