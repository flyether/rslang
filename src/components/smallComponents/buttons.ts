/* eslint-disable max-len */
export const Buttons = {
  create: (str:string, className:string, disabled = false):string => `<button class="button ${className}" ${disabled ? 'disabled' : ''}>${str}</button>`,
};
