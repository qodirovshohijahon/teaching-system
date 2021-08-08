### 1. Do these [Quizzes](https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/its-quiz-time) 
### 2. [Learn and code from this article](https://medium.com/@_bengarrison/javascript-es8-introducing-async-await-functions-7a471ec7de8a)

### 3. [Learn and Code your gitrepository](https://blog.pusher.com/promises-async-await/)

### 4. [Learn from this video and code into your gitrepo](https://www.youtube.com/watch?v=krAYA4rvbdA&ab_channel=ColtSteele)
```js
let ur = `https://api.github.com/users/qodirovshohijahon`;
function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
}

loadJson(ur)
  .then(res => console.log(res))
  .catch(alert); // Error: 404

```