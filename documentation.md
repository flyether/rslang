

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