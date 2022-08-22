/* eslint-disable max-len */
export const sprintSettings = {
  hashName: '',
  previousHashName: window.location.hash,
  sprintLevel: 0,
  sprintPage: 0,
  sprintFromTextbook: false,
  previousHashNameArray():string[] {
    return this.previousHashName.split('/');
  },
  setLevelFromTextbook(): void {
    if (this.previousHashNameArray()[0] === '#textbook') {
      this.sprintLevel = +this.previousHashNameArray()[1] - 1;
      this.sprintFromTextbook = true;
    }
  },
  setLevelFromSelect(level:string): void {
    this.sprintLevel = +level[level.length - 1];
    this.sprintPage = 0;
    this.sprintFromTextbook = false;
  },
  setPageFromTextbook(): void {
    if (this.previousHashNameArray()[0] === '#textbook') {
      this.sprintPage = +this.previousHashNameArray()[2] - 1;
      this.sprintFromTextbook = true;
    }
  },
};

export function changeSprintSettings(): void {
  if (sprintSettings.hashName) { sprintSettings.previousHashName = sprintSettings.hashName; }
  sprintSettings.hashName = window.location.hash;
  sprintSettings.setLevelFromTextbook();
  sprintSettings.setPageFromTextbook();
}
