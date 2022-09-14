<details>

  <summary>Как работает MVC</summary>

В файле index.ts импортbhetv стили, и все модули, которые нужны для инициализации нашей SPA.
У нас есть объекты с компонентами и роутами(страницами).В объект с роутами в который добавлены страницы.

И есть начальный объект, включающий наш SPA контейнер, компоненты, страницы.
 
Далее мы имеем самовызывающую функцию в SPA,которая сразу отрабатывает и в результате чего в нашей SPA два метода(init – где мы инициализируем контроллер, модель и View , и render – для рендеринга компонент наши)

При загрузке DOM мы вызываем метод init и передаем туда InitialObj.

В init мы вызываем сразу метод renderComponents,в котором мы находим намш единственный div c id=spa в верстке и по очереди рендерим туда наши компоненты(хедер,контент и футер.

  ```javascript

 const components: Components = {
  header: Header,
  content: Content,
  footer: Footer,
};

const routes: Routes = {
  main: MainPage,
  default: MainPage,
  textbook: TextbookPage,
  team: AboutTeamPage,
  sprint: SprintGamePage,
  aboutsprint: AboutSprintGamePage,
  audiocall: AudiocallGamePage,
  audiocallgame: AudiocallGame,
  statistics: StatisticsPage,
};

export const initialObj: InitialObj = {
  container: 'spa',
  routes,
  components,
};

export const mySPA = (() => {
  let view: ModuleView;
  let model: ModuleModel;
  let controller: ModuleController;
  return {
    init(obj: InitialObj) {
      this.renderComponents(obj.container, obj.components);
      const containerSPA = document.getElementById(obj.container) as HTMLElement;
      view = new ModuleView();
      model = new ModuleModel();
      controller = new ModuleController();

      view.init(containerSPA, routes);
      model.init(view);
      controller.init(containerSPA, model);
    },

    renderComponents(container: string, componentsObj: Components) {
      const root = document.getElementById(container) as HTMLElement;
      const componentsList = Object.keys(componentsObj);
      /* eslint-disable-next-line */
      for (const item of componentsList) {
        root.innerHTML += componentsObj[item as keyof Components].render();
      }
    },
  };
})();

window.addEventListener('DOMContentLoaded', () => {
  mySPA.init(initialObj);
});

  ```
Дальше создаем модель, контроллер и View (экземпляры классов ModuleView, ModuleController, ModuleModel) и инициализируем их с помощью метода init, который описан в их классах.
В контроллер для инициализации мы передаем контейнер наш и модель.

Контроллер ничего не знает про View  и передает все в модель.

Метод updateStates перерисовывает, то есть при инициализации он вызывается и передает в модель хэш страницы.  при переходе на другую страницу вызывает перерисовку страниц.

  ```javascript

  updateState(): void {
    const hashPageName = window.location.hash.slice(1).toLowerCase();
    this.myModuleModel.updateState(hashPageName);
    this.findMenuElements(hashPageName);
    this.findAuthorizationElements();
    switch (hashPageName) {
      case 'aboutsprint':
        this.addButtonsAboutSprintGameListeners();
        break;
      default:
    }
  }
  ```
В модели уже содержится вся логика приложения, расчеты и т.д. Для инициализации модели передаем ей View , то есть она имеет доступ только ко View  и передает туда информацию для того, чтобы вьюшка отрисовала. Модель при init сохранила себе View и при вызове метода updateStates из контроллера передает View название страницы, вызывая метод renderContent у View .

```javascript
 renderContent(hashPageName: string): void {
    let routeName = 'default';
    routeName = (hashPageName.length) ? hashPageName.split('/')[0] : routeName;
    const route = this.routesObj[routeName as keyof Routes];
    this.myModuleContainer.innerHTML = route.render();
    if (hashPageName === 'sprint') { SprintGamePage.initMVC(); }
    if (hashPageName === 'statistics') { StatisticsPage.initMVC(); }
  }
   ```

View имеет доступ к контейнеру и списку наших страниц. То есть вьюшка занимается отрисовкой (дизейблит кнопки например).

При вызове метода renderComponent View имеет доступ к контейнеру нашему и рендерит туда страницу, название которой она получила от модели, а та от контроллера при срабатывании события hashchange. Она смотрит какую страницу получила, если ничего не получила, то рендерит дефолтную страницу, и вызывает метод render у нашей страницы.

</details>

<details>

  <summary>Обработка запросов на сервер</summary>

Для обработки запросов на сервер был создан файл api.ts в директории rslang\src\api.

 В файле создан объект с лаконичным названием api и всеми методами, которые экспортировались в другие части проекта.
 
Ниже приведён пример кода для отправления солова юзера на сервер:
  

  ```javascript

 async CreateUserWord(userId: string, wordID: string, value: IUserWords): Promise<IUserWords | undefined> {
    try {
      const response = await fetch(`${apiPath}${usersEndpoint}/${userId}/${wordsEndpoint}/${wordID}`, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          Authorization: `Bearer ${storage.user?.token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
      });
      if (response.ok) {
        return await response.json() as IUserWords;
      } else {
        console.log(response.statusText);
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      throw new Error('Error creating user word');
    }
  },

  ```


</details>

<details>

  <summary>Авторизация</summary>

Авторизация использует Api методы из файла api.ts 

При регистрации и авторизации ловится событие на кнопку ‘войти’. Через делегирование событий навешанное на весь document.
При нажати открываеться модальное окно. Отрисовывается форма у которой отключены свойства поумолчанию.

Ниже приведен пример кода. При отправке формы проверяеться есть ли занчение в поле логин и пароль. Вызываеться метод api.userSignIn У нас сохраняються данный и в локолсторидже и в локальном объектое хранения данных. 

  ```javascript

 if (userEmailInput && userPasswordInput) {
          const authForm = document.getElementById('auth') as HTMLButtonElement;
          if (authForm) {
            authForm.addEventListener('submit', (e: Event) => {
              const errForm = document.querySelector('.form-signin-error') as HTMLElement;
              errForm.innerHTML = '';
              const userEmail = userEmailInput!.value;
              const userPassword = userPasswordInput!.value;
              e.preventDefault();
              api.userSignIn(userEmail, userPassword)
                .then((value) => {
                  storage.user = value;
                  localStorage.setItem('user', JSON.stringify(value));
                  showUser(false);
                  closeModal();
                }).catch((err) => {
                  errForm.innerHTML = 'Пользователь не найден, проверьте свои данные или зарегистрируйтесь';
                  console.log(err);
                });
            });
          }
        }

  ```
В коде вызываеться функция showUser отрисовывающая логотип и никнейм и рисующая кнопку 'выйти'.
Так же присутствует блок ловли ошибок.
</details>
  
<details>

  <summary>Электронный учебник</summary>
  
 У учебника постоянно вызывается метод render, он вызывает строку, которая вставляется в блок SPA с id SPA. В методе render за верстку отвечает view. В проверках я проверяю, если unit не задан, то отрисовывается выбор раздела. Если unit задан, а page нет, то во view отрисовываются страницы ( на них переход ). Если есть page и unit, то отрисовываются слова через метод getCards. View рендерится вместе с header и footer на 83 строке.
В getCards сначала проверяется, зарегистрирован ли пользователь. Потом деструктурирую this, чтобы получить из него класс wordList и переменную isAuth. UserId изначально делаю пустой строкой, но если isAuth есть, то записываю userId из localStorage. JSON.parse нужен потому что в localStorage нельзя хранить объекты, можно только строки, поэтому обернула строку в JSON, потом распарсиваю.
Затем пишу функцию renderCards, которая вставляет карточки.
Дальше пишу асинхронный код в IIFE. В ней мы берём слова пользователя, которые на сервере. Изначально объявляю userWords как пустой массив. Но если userWords есть, то в массив userWords вставляются getAllUserWords - т.е. слова с сервера.
У меня есть файл words.ts, там где объявлено, что в нем есть статические массивы aggregatedWords и learnedWords. Просто из вначале опустошили, потом перебираю массив userWords со словами что пришли с сервера, они либо сложные либо изученные. Делаю проверку - если слово сложное, то вставляю его id в сложные слова, если изученное - то в изученные.
  
 ```javascript
  
  if (unit === this.unitDifficultWords) {
        (async () => {
          const words: IWord[] = [];
          const requests = [];
          const wordsPerPage = 20;
          const rest = Words.aggregatedWords.length % wordsPerPage;
          const maxPage = Math.ceil(Words.aggregatedWords.length / wordsPerPage);
          const startValue = (page - 1) * wordsPerPage;
          let numberOfWords = wordsPerPage;
          if (page === maxPage) {
            numberOfWords = rest;
          }
          for (let i = startValue; i < startValue + numberOfWords; i += 1) {
            requests.push(api.getWord(Words.aggregatedWords[i])
              .then((res) => {
                words.push(res as IWord);
              }));
          }
          await Promise.all(requests);
          renderCards(words);
          document.querySelector('.spinner')?.remove();
          this.checkWords(words);
        })();
        return;
      }
  
   ```
  
Если unit равен разделу «Сложные слова», то создаю массив со словами и массив с запросами, которые отправятся на сервер. Чтобы не делать await-in-loop, вначале я поместила запросы в массив requests и сделала requests.push. Запушила туда api.getWords, то есть запрос который пушит в words, getWord делается по id. Затем просто выполняются все эти запросы через Promise.all, рендерятся карточки с тем массивом слов, который получился, проверяются слова ( сложные или изученные).
Дальше делаю запрос на сервер, чтоб бежал слова по unit и page.
Если массив со словами есть, то записывается в Words.words(это было нужно для мини игр), дальше проверяю слова на изученные и сложные в этом res. Дальше снова вызывается renderCards.
В renderCards вначале получаю контейнер со словами, потом на стр.108 если он у нас есть то его опустошаю ( делаю innerHTML пустым), потом в цикле for пробегаюсь по массиву words, который передается в renderCards. Проверяется слово изученное или сложное, новое или угаданное. На стр115 проверяю, если передался еще массив со словами userWords ( массив с пользовательскими словами), то из пересылаю, то есть пробегаюсь по userWords, если слова aggregated или learned или new ( у него статус true или false). Дальше записываются в верстку карточки. Создаются переменная, потом в неё добавляется класс, потом в нее  вставляется верстка. В верстке words[i] это слово, которое я создаю в верстке и к него беру свойства ( wordTranslate, transcription, audio и т.д.). Здесь также используется isWordInDifficult, isWordLearned в тернарках. Делается либо кнопку disabled, либо текст в ней меняется либо что то еще.
Дальше карточка вставляется в wordContainer. Для чего используется async IIFE: без неё метод render вернул бы ту верстку с wordContainer просто как строку, а не как DOMElement. А по строке мы не можем делать поиск через querySelector, чтобы в нее что то вставлять. Т.е. getCards делает следующее: если слова сложные, то делается запрос на сложные слова, если мы находимся в любом другом разделе, то делается запрос на слова и они вставляются в wordContainer со всякими проверками.
Метод checkWords проверяет слова на сложные и изученные. Вначале получаю хэш, потом сплутую по слэшу, чтобы получить unit и page.
Дальше делается цикл по запросу который нам пришёл.
  
  ```javascript
  
  for (let i = 0; i < res.length; i += 1) {
      const isWordLearned = Words.learnedWords.some((word) => word === res[i].id);
      const isAggregatedWord = Words.aggregatedWords.some((word) => word === res[i].id);
      areWordsLearned.push(isWordLearned || isAggregatedWord);
    }
  
  ```
  
  Пробегаюсь по этим словам в цикле for и проверяю изученное слово или сложное. 
Если да, то пушим в areWordsLearned, если массив будет содержать только true (то есть на странице все слова либо сложные либо изученные) то беру наш wordList, ему добавляется класс learned-page, также textbook-game становится disabled.
После того как все отрисовалось вызывается controllerTextbook.init.
В controllerTextbook.ts вызывается метод setEventListeners. В нем вначале проверяется userId( вошел ли пользователь). Если вошел то userId будет в localeStorage и мы его оттуда заберём.
На стр.28  функция click, которая будет передана в обработчик события. В нее передается MouseEvent. Дальше делаем проверки. 
В конце делаю document.onclick = click. Пробовала делать с document.addEventListener, но он почему то вызывался много раз.  
  
  
</details>

<details>

  <summary>Статистика</summary>

Для статистики мы используем запрос на сервер api.GetsStatistics.
На сервер записываются данные из игр и учебников.

Ниже приведены интерфейсы, которые имеют опциональные параметры, но уследить чтобы их не перезаписывали на нули оказалось не просто. А статистика краткосрочная по учебнику вообще не требовала записи, так как она вычисляет все из запроса на сервер по словам пользователя и по результатам игр (к сожалению, просто не нашлось времени привести в удобный вид и удалить лишнее притом если бы занимался всей статистикой один человек, а не два это было бы проще и согласование. У нас было разделение на 2 игры и тут у нас появились самые большие сложности с командной работой).

  ```javascript
 
export interface IStatistic {
  learnedWords?: number;
  optional?: IOptionalStatisticWrapper;
}

export interface IOptionalStatisticWrapper {
  textbook?: IOptionalStatistic;
  games?: IOptionalStatisticGame;
  long?: ILongStatisticsStore;
}

export interface ILongStatisticsStore {
  learnedWords?: number[];
  NewWords?: number[];
  date?: string[];
}

export interface IOptionalStatisticGame {
  date?: string;
  newWords?: number;
  percentOfRightAnswers?: number;
  longestSeriesOfRightAnswers?: number;
  rightAnswers?: number;
  AllAnswersFromGame?: number;
  newWordsSprint?: number;
  percentOfRightAnswersSprint?: number;
  longestSeriesOfRightAnswersSprint?: number;
  rightAnswersSprint?: number;
  AllAnswersFromGameSprint?: number;
  answer?: string[];
}

export interface IOptionalStatistic {
  date?: string;
  newWords?: number;
  percentOfRightAnswers?: number;
  learnedWordss?: number;
}

  ```

  При начале отрисовки статистика сравнивает текущую дату с последней записанной датой на сервер.
Если даты совпадают, то рисуется краткосрочная статистика с данными сервера. Если даты разные то присваиваются нули, а данные с сервера за последний краткий период добавляются в долгосрочную статистику и обновляют ее на сервере. 

</details>

<details>

  <summary>Игра аудиовызов</summary>

Вся логика игры заключена в 2х фалах - supporting-func.ts listener-audiocall.ts. Отрисовка блока оболочки в фале game-render.ts.

## supporting-func.ts

Вспомогательные функции (по хорошему их надо было разнести в отдельные компоненты):

*	shuffle для перемешивания приходящих слов.

*	maping собирает массив всех правильных ответов во время игры и делает коллекцию Мар слово => количество повторений. Если количество повторений 3 (для простых) и 5 (для сложных), то слова отправляются с меткой изученные на сервер в пользовательский словарь. Метод класс Support getLearnedWord работает с ‘той функцией в связке.

*	soundAudio для проигрывания слов с передаваемым путем к медиафайлу.
Класс Support отвечает за всю логику. Инициализируем все значения с нулями и пустыми строками в конструкторе.

Метод getUserWords() получает с сервера слова пользователя и сортирует их на категории : изученные, сложные, если переход из учебника то отдельный массив для исключения повторений изученных слов.
Метод checkLearnedWrds()  отправляет пометки об изученных словах на сервер.
Метод staticGet() получает статистику с сервера и для удобства присваивает локальному объекту хранилищу. Эти данные будут изменяться в процессе игры. Далее обновленные данные отправятся на сервер с помощью метода staticUpdate.

Метод deleteWrongWordFromServer() удаляет из пользовательского словаря изученные слова, если их не правильно ответили в игре. 

Метод CrateNewWord проверяет нет ли появившегося слова среди изученных и если нет отправляет с пометкой «новое» на сервер. 

Метод printBtnString() отрисовывает HTML в зависимости от условий. const countWord = 15 – указывает количество раундов.

Уровень сложности выбирает пользователь, а страницу приходящих слов в сервера выбирает рандом, если пользователь не пришел из учебника ( в ином случае страница из учебника используется).
Далее если раундов меньше заданного в countWord числа отрисовываем контейнер с кнопками в контент которых передаются перемешанные и отфильтрованные на повторения слова и вызывается функция проигрывания аудио.

Если раундов больше, то рисуется финальная страница с результатом игры и выводом кнопок «повторить» и «выбрать уровень сложности». На этом этапе проверяется авторизирован ли пользователь. Если пользователь авторизирован, то начинается работа над статистикой. Проверяется длина массива с правильными ответами и сравнивается с записанной на сервере. Также прибавляется количество новых слов записанных за игру, высчитываем общий процент правильных ответов. Сохраняется текущая дата в удобном для отображения формате (вспомогательная функция dataNow()) И в самом конце очищается локальный объект для хранения данных (вспомогательная функция очистки). 

## listener-audiocall.ts
Начинается работа с делегирования событий (вешаем слушатель на document)

Для работы с клавиатуры мы просто присваиваем соответствующей клавише соответствующее событие клик, которое уже обрабатываем ниже при ловле нужных кликов по классам.

Например пробел взывает клик по кнопке проигрывателя, который в свою очередь вызывает функцию проигрывания.

При нажатии на любую кнопку ответа увеличивается раунд на 1. Далее идёт проверка. Если слово угадано правильно то слово добавляется в массив правильных ответов. Отрабатывает функция создания нового слова ( в ней есть проверки точно ли оно новое) и включается вспомогательная функция rightAnswerFunc с соответственным звуком и записью очков в игру. Она перерисовывает новый HTML методом из класса support.printBtnString().

Если слово неправильно угадано, то проверяется было ли слово из изученных – удаляеться из пользовательского словаря. Если слово не изучено оно становиться новым и включается функция wrongAnswerFunc. wrongAnswerFunc отрисовывает правильное слово ответ с изображением, проигрывает соответствующий звук записывает неверный результат для статистики и финального окна. 

Далее функционал кнопки «начать заново» Чиститься локальное хранилище данных отрисовывается новая игра с тем же уровнем.

Ниже код перехода из учебника на игру. Который укажет нужный уровень и страницу из хэша и задаст support.textbook = true для локального хранилища, который уже укажет логику исключения повтора изученных слов.

  ```javascript
   if ((e.target as HTMLElement).classList.contains('level-textbook')) {
        const locationHash = window.location.hash.split('/');
        const unit = +locationHash[1];
        const page = +locationHash[2];
        support.level = unit;
        support.page = page - 1;
        support.textbook = true;
      }
  ```
Ниже код выбирающий уровень в зависимости от того на какую кнопку при выборе уровня нажал юзер с очисткой локальных данных игры. 
  ```javascript
   if ((e.target as HTMLElement).classList.contains('level-change')) {
        support.textbook = false;
        support.clearLocalStorage();
      }

      if ((e.target as HTMLElement).classList.contains('btn-level')) {
        const dataN = Number((e.target as HTMLElement).id.replace(/[^0-9]/g, ''));

        if ((e.target as HTMLElement).id === (`level${dataN}`)) {
          support.clearLocalStorage();
          support.level = dataN;
        }
      }
  ```
Спасибо за внимание!
</details>

