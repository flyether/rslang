/* eslint-disable import/no-cycle */
import { IWord } from '../types/types';

class Words {
  static words: IWord[] = [];

  static aggregatedWords: IWord[] = [];

  static learnedWords: IWord[] = [];
}

export default Words;
