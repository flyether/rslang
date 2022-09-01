import {
  statisticsDataTextbookShortTerm, statisticsDataAudiocallShortTerm,
  statisticsDataSprintShortTerm,
  staticGet,
} from './statisticsData';

export const StatisticsPageTextbookShortTeam = {
  render(): string {
    return `
    <div class = "statistics__shortterm">
      <div class="shortterm__new-words">
        Количество новых слов
        <div class="words">${statisticsDataTextbookShortTerm.newWords}</div>
      </div>
      <div class="shortterm__right-answers">
        Количество изученных слов
        <div class="words">${statisticsDataTextbookShortTerm.learnedWords}</div>
      </div>
      <div class="shortterm__max-seria">
        Процент правильных ответов
        <div class="words">${statisticsDataTextbookShortTerm.percentOfRightAnswers}</div>
      </div>
    </div>`;
  },
};

export const StatisticsPageAudiocallShortTeam = {
  render(): string {
    return `
    <div class = "statistics__shortterm">
      <div class="shortterm__new-words">
        Количество новых слов
        <div class="words">${statisticsDataAudiocallShortTerm.newWords}</div>
      </div>
      <div class="shortterm__right-answers">
        Процент правильных ответов
        <div class="words">${statisticsDataAudiocallShortTerm.percentOfRightAnswers}</div>
      </div>
      <div class="shortterm__max-seria">
        Самая длинная серия правильных ответов
        <div class="words">${statisticsDataAudiocallShortTerm.longestSeriesOfRightAnswers}</div>
      </div>
    </div>`;
  },
};

export const StatisticsPageSprintShortTeam = {
  render(): string {
    return `
    <div class = "statistics__shortterm">
      <div class="shortterm__new-words">
        Количество новых слов
        <div class="words">${statisticsDataSprintShortTerm.newWords}</div>
      </div>
      <div class="shortterm__right-answers">
        Процент правильных ответов
        <div class="words">${statisticsDataSprintShortTerm.percentOfRightAnswers}</div>
      </div>
      <div class="shortterm__max-seria">
        Самая длинная серия правильных ответов
        <div class="words">${statisticsDataSprintShortTerm.longestSeriesOfRightAnswers}</div>
      </div>
    </div>`;
  },
};
