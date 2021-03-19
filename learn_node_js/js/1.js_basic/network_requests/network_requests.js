let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits'
console.log(fetch(url))
  // .then(
  //   function getAuthor(res) {
  //     console.log('res-------', res)
  //     console.log('res-------json-------', res.json())
  //     return res.json()
  // })
  // .then(function getAuthor(commit) {
  //   return commit[0].author.login
  // }))