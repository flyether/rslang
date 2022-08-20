import { hashes } from '../components/hashes';

export class TextbookController {
  unitsBlockSelector: string;

  unitBlockSelector: string;

  constructor(unitsBlockSelector: string, unitBlockSelector: string) {
    this.unitsBlockSelector = unitsBlockSelector;
    this.unitBlockSelector = unitBlockSelector;
  }

  init(view: string): HTMLElement {
    return this.setEventListeners(view);
  }

  setEventListeners(view: string): HTMLElement {
    const unitsBlock = document.createElement('div');
    unitsBlock.classList.add(this.unitsBlockSelector);
    unitsBlock.addEventListener('click', (e: MouseEvent) => {
      if (e.target) {
        if ((e.target as HTMLElement).classList.contains(this.unitBlockSelector)) {
          window.location.hash = `${hashes.textbook}/${(e.target as HTMLElement).dataset.unit}`;
        }
      }
    });
    unitsBlock.innerHTML = view;
    console.log(unitsBlock.outerHTML);
    return unitsBlock;
  }
}
