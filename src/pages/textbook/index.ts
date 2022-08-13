import './textbook.scss';

const TextbookPage = {
  classname: 'textbook',
  // render(): string {
  //   return ` <div class=${this.classname}>
  //   <div class="textbook-navigation">
  //     <button class="btn-round"></button>
  //     <p class="unit-name">Unit 1</p>
  //   </div>
  //   <ul class="word-list">
  //     ${this.renderCards()}
  //   </ul>
  //   <div class="textbook-footer">
  //   <div class="textbook-pagination">
  //     <button class="pagination-btn">Prev</button>
  //     <button class="pagination-btn">Next</button>
  //   </div>
  //   <div class="textbook-games">
  //       <a href="">Аудиовызов</a>
  //       <a href="">Спринт</a>
  //     </div>
  //     </div>
  // </div>`;
  // },
  // render(): string {
  //   return `<div class="textbook-units">
  //   <div class="textbook-unit" data-unit="1">Раздел 1</div>
  //   <div class="textbook-unit" data-unit="2">Раздел 2</div>
  //   <div class="textbook-unit" data-unit="3">Раздел 3</div>
  //   <div class="textbook-unit" data-unit="4">Раздел 4</div>
  //   <div class="textbook-unit" data-unit="5">Раздел 5</div>
  //   <div class="textbook-unit" data-unit="6">Раздел 6</div>
  //   <div class="textbook-unit" data-unit="7">Раздел "Сложные слова"</div>
  //   </div>`;
  // },
  render(): string {
    return `<ul class="unit-pages">
${this.renderPages()}
</ul>`;
  },

  renderPages(): string {
    let pages = '';
    const pagesCount = 30;
    for (let i = 1; i <= pagesCount; i += 1) {
      pages += `<li class="unit-page">Page ${i}</li>`;
    }
    return pages;
  },
  renderCards(): string {
    let cards = '';
    const cardsCount = 10;
    for (let i = 0; i < cardsCount; i += 1) {
      cards += `<li class="word-item">
<img class="word-image"
  src="https://illustoon.com/photo/thum/7156.png"
  alt="apple">
<div class="word-description">
  <div class="word-pronounce word-audio">
  <p>apple</p>
    <div class="audio"><audio></audio></div>
  </div>
  <p class="word-pronounce">|ˈæp(ə)l| noun</p>
  <p class="word-example">An <strong>apple</strong> fell from the tree.</p>
  <p class="word-example">The <strong>apple</strong> trees yielded an abundant harvest.</p>
</div>
<div class="word-difficult">
<p>Is it a difficult word for you?</p>
<button class="btn-round btn-difficult">+</button>
</div>
</li>`;
    }
    return cards;
  },
};

export default TextbookPage;
