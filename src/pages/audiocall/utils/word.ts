/* eslint-disable linebreak-style */
import { IWord, IWordGame } from '../../../types/types';

/* eslint-disable linebreak-style */
export default function Word(word: IWordGame): IWordGame {
  return {
    word: word.word,
    translate: word.translate,
    audio: word.audio,
    image: word.image,
    id: word.id,
  };
}
