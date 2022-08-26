/* eslint-disable import/no-cycle */
import './textbook.scss';
import { hashes } from '../../components/hashes';
import { api } from '../../api/api';
import { IWord } from '../../types/types';

import Header from '../../components/header';
import Footer from '../../components/footer';
import { TextbookController } from '../../controller/controllerTextbook';
import Words from '../../words/words';

const TextbookPage = {
  classname: 'textbook',
  wordlist: 'word-list',

  unitDifficultWords: 7,

  isAuth: localStorage.getItem('user'),

  render(): string {
    const locationHash = window.location.hash.split('/');
    const unit = +locationHash[1];
    const page = +locationHash[2];
    let view = '';
    const minUnit = 1;
    const maxUnit = 7;
    const unitSelector = 'textbook-unit';
    const pageSelector = 'unit-page';
    const minPage = 1;
    const maxPage = 30;
    const controllerTextbook = new TextbookController(unitSelector, pageSelector);
    this.isAuth = localStorage.getItem('user');
    if (!unit) {
      view = `<div class="textbook-units">
      <div class="textbook-unit" data-unit="1">Раздел 1</div>
      <div class="textbook-unit" data-unit="2">Раздел 2</div>
      <div class="textbook-unit" data-unit="3">Раздел 3</div>
      <div class="textbook-unit" data-unit="4">Раздел 4</div>
      <div class="textbook-unit" data-unit="5">Раздел 5</div>
      <div class="textbook-unit" data-unit="6">Раздел 6</div>
      ${this.isAuth ? `<div class="textbook-unit" data-unit="7">Раздел "Сложные слова"</div>
      ` : ''}
      </div>`;
    } else if (!page && unit <= maxUnit && unit >= minUnit && typeof unit === 'number') {
      view = `
         <div class="textbook-navigation unit-navigation">
            <button class="btn-round" id="go-back"></button>
            <p class="unit-name">Раздел ${this.unitDifficultWords === unit ? '"Сложные слова"' : unit}</p>
         </div>
         <ul class="unit-pages">
            ${this.renderPages(unit)}
         </ul>`;
    } else {
      view = `<div class=${this.classname}>
      <div class="textbook-navigation">
        <button class="btn-round" id="go-back"></button>
        <p class="unit-name">Раздел ${this.unitDifficultWords === unit ? '"Сложные слова"' : unit}
         <span class="unit-page-name">страница ${page}</span>
        </p>
      </div>
      <ul class=${this.wordlist}>
       ${this.getCards(unit, page)}
      </ul>
      <div class="textbook-footer">
        <div class="textbook-pagination">
          <button class="pagination-btn btn-orange previous" ${page === minPage ? 'disabled' : ''}>Предыдущая</button>
          ${this.isAuth ? `<a class="textbook-game level-textbook" href="${hashes.audiocall}">Аудиовызов</a>
          <a class="textbook-game" href="${hashes.aboutsprint}">Спринт</a>` : ''}
          <button class="pagination-btn btn-orange next" ${page === maxPage ? 'disabled' : ''}>Следующая</button>
        </div>
      </div>
    </div>`;
    }
    controllerTextbook.init(unit);
    return `${Header.render()}${view}${Footer.render()}`;
  },
  renderPages(unit: number): string {
    let pages = '';
    let pagesCount = 30;
    const wordsPerPage = 20;
    if (unit === this.unitDifficultWords) {
      pagesCount = Math.ceil(Words.aggregatedWords.length / wordsPerPage);
    }
    for (let i = 1; i <= pagesCount; i += 1) {
      pages += `<li class="unit-page" data-page="${i}">Page ${i}</li>`;
    }
    return pages;
  },
  getCards(unit: number, page: number): void {
    this.isAuth = localStorage.getItem('user');
    const { wordlist, isAuth } = this;
    function renderCards(words: IWord[]) {
      const wordContainer = document.querySelector(`.${wordlist}`);
      if (wordContainer) {
        wordContainer.innerHTML = '';
        for (let i = 0; i < words.length; i += 1) {
          const isWordInDifficult = Words.aggregatedWords.some((word) => words[i].id === word.id);
          const isWordLearned = Words.learnedWords.some((word) => words[i].id === word.id);
          const card = document.createElement('li');
          card.classList.add('word-item');
          card.innerHTML = `
  <div class="word-image"
  style="background-image: url(https://rslang-learning-english-words.herokuapp.com/${words[i].image})">
  </div>
  <div class="word-description">
    <div class="word-pronounce word-audio">
    <p class="word-name">${words[i].word} ${words[i].transcription}</p>
      <div class="audio">
        <audio src="https://rslang-learning-english-words.herokuapp.com/${words[i].audio}"></audio>
      </div>
    </div>
    <p class="word-pronounce translation">${words[i].wordTranslate}</p>
    <p class="word-example">${words[i].textMeaning}</p>
    <p class="word-example translation">${words[i].textMeaningTranslate}</p>
    <p class="word-example">${words[i].textExample}</p>
    <p class="word-example translation">${words[i].textExampleTranslate}</p>
  </div>
  ${isAuth ? `
<div class="word-noted">
      <button class="btn-orange btn-difficult  ${isWordInDifficult ? 'added' : ''}"
      data-word = "${words[i].id}"
      ${isWordInDifficult ? 'disabled' : ''} >Сложно?</button>
      <button class="btn-orange btn-learned ${isWordLearned ? 'added' : ''}"
      data-word = "${words[i].id}"
      ${isWordLearned ? 'disabled' : ''}>Изучено?</button>
      </div>` : ''}`;
          card.dataset.word = words[i].id;
          wordContainer.append(card);
        }
      }
    }
    if (unit === this.unitDifficultWords) {
      setTimeout(() => {
        renderCards(Words.aggregatedWords);
      }, 0);
      return;
    }
    (async () => {
      await api.getWords(unit - 1, page - 1)
        .then((res) => {
          if (res) {
            Words.words = res as IWord[];
            renderCards(res as IWord[]);
          }
        });
    })();
  },
};

export default TextbookPage;
