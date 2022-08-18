/* eslint-disable import/no-cycle */
import './textbook.scss';
import { api } from '../../api/api';
import { IWord } from '../../types/types';

import Header from '../../components/header';
import Footer from '../../components/footer';

const TextbookPage = {
  classname: 'textbook',
  wordlist: 'word-list',
  render(): string {
    const view = ` <div class=${this.classname}>
    <div class="textbook-navigation">
      <button class="btn-round"></button>
      <p class="unit-name">Раздел 1 <span class="unit-page">страница 1</span></p>
    </div>
    <ul class=${this.wordlist}>
     ${this.getCards()}
    </ul>
    <div class="textbook-footer">
      <div class="textbook-pagination">
        <button class="pagination-btn btn-orange">Предыдущая</button>
        <button class="pagination-btn btn-orange">Следующая</button>
      </div>
    </div>
  </div>`;
    return `${Header.render()}${view}${Footer.render()}`;
  },
  // render(): string {
  //   const view = `<div class="textbook-units">
  //   <div class="textbook-unit" data-unit="1">Раздел 1</div>
  //   <div class="textbook-unit" data-unit="2">Раздел 2</div>
  //   <div class="textbook-unit" data-unit="3">Раздел 3</div>
  //   <div class="textbook-unit" data-unit="4">Раздел 4</div>
  //   <div class="textbook-unit" data-unit="5">Раздел 5</div>
  //   <div class="textbook-unit" data-unit="6">Раздел 6</div>
  //   <div class="textbook-unit" data-unit="7">Раздел "Сложные слова"</div>
  //   </div>`;
  //   return `${Header.render()}${view}${Footer.render()}`;
  // },
  // render(): string {
  //   return `<ul class="unit-pages">
  // ${this.renderPages()}
  // </ul>`;
  // },

  renderPages(): string {
    let pages = '';
    const pagesCount = 30;
    for (let i = 1; i <= pagesCount; i += 1) {
      pages += `<li class="unit-page">Page ${i}</li>`;
    }
    return pages;
  },
  getCards(): void {
    const { wordlist } = this;
    function renderCards(words: IWord[]) {
      const wordContainer = document.querySelector(`.${wordlist}`);
      if (wordContainer) {
        wordContainer.innerHTML = '';
      }
      for (let i = 0; i < words.length; i += 1) {
        const card = document.createElement('li');
        card.classList.add('word-item');
        card.innerHTML = `
  <div class="word-image" 
  style="background-image: url(https://rslang-learning-english-words.herokuapp.com/${words[i].image})">
  </div>
  <div class="word-description">
    <div class="word-pronounce word-audio">
    <p>${words[i].word} ${words[i].transcription}</p>
      <div class="audio"><audio></audio></div>
    </div>
    <p class="word-pronounce translation">${words[i].wordTranslate}</p>
    <p class="word-example">${words[i].textMeaning}</p>
    <p class="word-example translation">${words[i].textMeaningTranslate}</p>
    <p class="word-example">${words[i].textExample}</p>
    <p class="word-example translation">${words[i].textExampleTranslate}</p>
  </div>
  <div class="word-noted">
      <button class="btn-orange btn-difficult">Сложно?</button>
      <button class="btn-orange btn-learned">Изучено?</button>
  </div>`;
        wordContainer?.append(card);
      }
    }
    (async () => {
      await api.getWords(3, 5)
        .then((res) => {
          renderCards(res as IWord[]);
        });
    })();
  },
};

export default TextbookPage;
