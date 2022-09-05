import {
  statisticsDataTextbookShortTerm, statisticsDataAudiocallShortTerm,
  statisticsDataSprintShortTerm,
  staticGet, staticGetSprint,
} from './statisticsData';

export const StatisticsPageTextbookShortTeam = {
  render(array:number[]): string {
    return `
    <div class = "statistics__shortterm">
      <div class="shortterm__new-words">
        Количество новых слов
        <div class="words">${array[0]}</div>
      </div>
      <div class="shortterm__right-answers">
        Количество изученных слов
        <div class="words">${Math.round(array[1])}</div>
      </div>
      <div class="shortterm__max-seria">
        Процент правильных ответов
        <div class="words">${array[2]}</div>
      </div>
    </div>`;
  },
};

export const StatisticsPageAudiocallShortTeam = {
  render(array:number[]): string {
    return `
    <div class = "statistics__shortterm">
      <div class="shortterm__new-words">
        Количество новых слов
        <div class="words">${array[0]}</div>
      </div>
      <div class="shortterm__right-answers">
        Процент правильных ответов
        <div class="words">${Math.round(array[1])}</div>
      </div>
      <div class="shortterm__max-seria">
        Самая длинная серия правильных ответов
        <div class="words">${array[2]}</div>
      </div>
    </div>`;
  },
};

export const StatisticsPageSprintShortTeam = {
  render(array:number[]): string {
    return `
    <div class = "statistics__shortterm">
      <div class="shortterm__new-words">
        Количество новых слов
        <div class="words">${array[0]}</div>
      </div>
      <div class="shortterm__right-answers">
        Процент правильных ответов
        <div class="words">${Math.round(array[1])}</div>
      </div>
      <div class="shortterm__max-seria">
        Самая длинная серия правильных ответов
        <div class="words">${array[2]}</div>
      </div>
    </div>`;
  },
};
