/* eslint-disable import/no-cycle */
import { IWord } from '../types/types';
import Words from '../words/words';
import { hashes } from '../components/hashes';
/* eslint-disable import/no-cycle */
import { api } from '../api/api';

export class TextbookController {
  pageSelector: string;

  unitSelector: string;

  constructor(unitSelector: string, pageSelector: string) {
    this.unitSelector = unitSelector;
    this.pageSelector = pageSelector;
  }

  init(unit: number): void {
    this.setEventListeners(unit);
  }

  setEventListeners(unit: number): void {
    const click: (e: MouseEvent) => void = (e: MouseEvent) => {
      if (e.target) {
        const target = e.target as HTMLElement;
        if ((target).classList.contains(this.unitSelector)) {
          window.location.hash = `${hashes.textbook}/${(target).dataset.unit}`;
        }
        if ((target).classList.contains(this.pageSelector)) {
          console.log('click');
          window.location.hash = `${window.location.hash}/${(target).dataset.page}`;
        }
        if ((target).id === 'go-back') {
          if (+window.location.hash.split('/')[2] && unit) {
            window.location.hash = `${hashes.textbook}/${unit}`;
          } else { window.location.hash = `${hashes.textbook}`; }
        }
        if ((target).classList.contains('btn-difficult')) {
          target.classList.add('added');
          target.innerText = 'Сложное слово';
          (target as HTMLButtonElement).disabled = true;
          const btnLearned = document.querySelector(`.btn-learned[data-word="${target.dataset.word}"]`);
          (btnLearned as HTMLButtonElement).disabled = false;
          (btnLearned as HTMLButtonElement).innerText = 'Изучено?';
          (async () => {
            await api.getWord(target.dataset.word as string)
              .then((res) => {
                Words.aggregatedWords.push(res as IWord);
                Words.learnedWords = Words.learnedWords.filter((word) => word.id !== target.dataset.word);
              });
          })();
        }
        if ((target).classList.contains('btn-learned')) {
          target.classList.add('added');
          target.innerText = 'Изучено';
          (target as HTMLButtonElement).disabled = true;
          const btnDifficult = document.querySelector(`.btn-difficult[data-word="${target.dataset.word}"]`);
          (btnDifficult as HTMLButtonElement).disabled = false;
          (btnDifficult as HTMLButtonElement).innerText = 'Сложно?';
          (async () => {
            await api.getWord(target.dataset.word as string)
              .then((res) => {
                Words.learnedWords.push(res as IWord);
                Words.aggregatedWords = Words.aggregatedWords.filter((word) => word.id !== target.dataset.word);
              });
          })();
        }
      }
    };
    document.onclick = click;
  }
}
