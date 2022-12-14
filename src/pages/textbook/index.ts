import './textbook.scss';
import { hashes } from '../../components/hashes';
import { api } from '../../api/api';
import {
  ILearnedPages, ITextbookPage, IUserData, IUserWord, IWord,
} from '../../types/types';

import Header from '../../components/header';
import Footer from '../../components/footer';
import { TextbookController } from '../../controller/controllerTextbook';
import Words from '../../words/words';
import { difficulties, statuses } from '../../words/difficulties';

const TextbookPage: ITextbookPage = {
  classname: 'textbook',
  wordlist: 'word-list',

  unitDifficultWords: 7,

  isAuth: !!localStorage.getItem('user'),

  learnedPages: [{ unit: 0, page: 0 }],

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
    const isLearnedPage = this.learnedPages.some((learnedPage) => learnedPage.unit === unit
      && learnedPage.page === page);
    this.isAuth = !!localStorage.getItem('user');
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
      const isLearnedPage = this.learnedPages.some((page) => page.unit === unit && page.page === i);
      pages += `<li class="unit-page ${isLearnedPage ? 'learned-page-menu' : ''}" data-page="${i}">Page ${i}</li>`;
    }
    return pages;
  },
  getCards(unit: number, page: number): void {
    this.isAuth = !!localStorage.getItem('user');
    const { wordlist, isAuth } = this;
    let userId = '';
    if (this.isAuth) {
      userId = JSON.parse(localStorage.getItem('user')!).userId;
    }
    function renderCards(words: IWord[], userWords?: IUserWord[] | undefined) {
      const wordContainer = document.querySelector(`.${wordlist}`);
      if (wordContainer) {
        wordContainer.innerHTML = '';
        for (let i = 0; i < words.length; i += 1) {
          let isWordInDifficult = Words.aggregatedWords.some((word) => words[i].id === word);
          let isWordLearned = Words.learnedWords.some((word) => words[i].id === word);
          let isWordNew = false;
          let isWordGuessed = false;
          if (userWords) {
            isWordInDifficult = userWords.some((word) => words[i].id === word.wordId
              && word.difficulty === difficulties.aggregated);
            isWordLearned = userWords.some((word) => words[i].id === word.wordId
              && word.difficulty === difficulties.learned);
            isWordNew = userWords.some((word) => words[i].id === word.wordId
              && word?.optional?.status === statuses.new);
            isWordGuessed = userWords.some((word) => words[i].id === word.wordId
              && word?.optional?.answer === true);
          }
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
      ${isWordNew ? `<div class="word-progress ${isWordGuessed ? 'progress-done' : 'progress-no'}"></div>` : ''}
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
      ${isWordInDifficult ? 'disabled' : ''} >${isWordInDifficult ? 'Сложное слово' : 'Сложно?'}</button>
      <button class="btn-orange btn-learned ${isWordLearned ? 'added' : ''}"
      data-word = "${words[i].id}"
      ${isWordLearned ? 'disabled' : ''}>${isWordLearned ? 'Изучено' : 'Изучено?'}</button>
      </div>` : ''}`;
          card.dataset.word = words[i].id;
          wordContainer.append(card);
        }
      }
    }
    (async () => {
      let userWords: IUserWord[] = [];
      if (userId) {
        userWords = (await api.getAllUserWords(userId))!;
      }
      Words.aggregatedWords = [];
      Words.learnedWords = [];
      for (let i = 0; i < userWords?.length; i += 1) {
        if (userWords[i].difficulty === difficulties.aggregated) {
          Words.aggregatedWords.push(userWords[i].wordId);
        }
        if (userWords[i].difficulty === difficulties.learned) {
          Words.learnedWords.push(userWords[i].wordId);
        }
      }
      if (unit === this.unitDifficultWords) {
        (async () => {
          const words: IWord[] = [];
          const requests = [];
          const wordsPerPage = 20;
          const rest = Words.aggregatedWords.length % wordsPerPage;
          const maxPage = Math.ceil(Words.aggregatedWords.length / wordsPerPage);
          const startValue = (page - 1) * wordsPerPage;
          let numberOfWords = wordsPerPage;
          if (page === maxPage) {
            numberOfWords = rest;
          }
          for (let i = startValue; i < startValue + numberOfWords; i += 1) {
            requests.push(api.getWord(Words.aggregatedWords[i])
              .then((res) => {
                words.push(res as IWord);
              }));
          }
          await Promise.all(requests);
          renderCards(words);
          this.checkWords(words);
        })();
        return;
      }
      const res = await api.getWords(unit - 1, page - 1);
      if (res) {
        Words.words = res as IWord[];
        this.checkWords(res);
        renderCards(res as IWord[], userWords);
      }
    })();
  },
  checkWords(res: IWord[]) {
    const locationHash = window.location.hash.split('/');
    const unit = +locationHash[1];
    const page = +locationHash[2];
    const areWordsLearned = [];
    for (let i = 0; i < res.length; i += 1) {
      const isWordLearned = Words.learnedWords.some((word) => word === res[i].id);
      const isAggregatedWord = Words.aggregatedWords.some((word) => word === res[i].id);
      areWordsLearned.push(isWordLearned || isAggregatedWord);
    }
    if (!areWordsLearned.includes(false)) {
      document.querySelector('.word-list')?.classList.add('learned-page');
      document.querySelectorAll('.textbook-game')?.forEach((item) => {
        item.classList.add('learned-page-game');
        (item as HTMLButtonElement).disabled = true;
      });
      this.learnedPages.push({ unit, page });
    }
  },
};

export default TextbookPage;
