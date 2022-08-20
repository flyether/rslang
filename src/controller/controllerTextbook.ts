import { hashes } from '../components/hashes';

export class TextbookController {
  pageSelector: string;

  unitSelector: string;

  constructor(unitSelector: string, pageSelector: string) {
    this.unitSelector = unitSelector;
    this.pageSelector = pageSelector;
  }

  init(unit: number, page: number): void {
    this.setEventListeners(unit, page);
  }

  setEventListeners(unit: number, page: number): void {
    document.addEventListener('click', (e: MouseEvent) => {
      if (e.target) {
        if ((e.target as HTMLElement).classList.contains(this.unitSelector)) {
          window.location.hash = `${hashes.textbook}/${(e.target as HTMLElement).dataset.unit}`;
        }
        if ((e.target as HTMLElement).classList.contains(this.pageSelector)) {
          window.location.hash = `${hashes.textbook}/${unit}/${(e.target as HTMLElement).dataset.page}`;
        }
      }
    });
  }
}
