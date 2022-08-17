/* eslint-disable max-len */
export const Audio = {
  create: (id:string, src:string):string => `<audio id="${id}">
          <source src="${src}.mp3" type="audio/mpeg">
      </audio>`,
};
