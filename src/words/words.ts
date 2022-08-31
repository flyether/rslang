/* eslint-disable import/no-cycle */
import { IWord } from '../types/types';

class Words {
  static words: IWord[] = [];

  static aggregatedWords: string[] = [];

  static learnedWords: string[] = [];
}

export default Words;
