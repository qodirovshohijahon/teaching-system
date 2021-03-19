let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits'
//    let getTodo = 'https://jsonplaceholder.typicode.com/todos/2'
function postUser() {
  fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      age: '22'
    })
  })
    .then(
      function getAuthor(res) {
        if (res.ok) return res.json()
        //       console.log('res-------json-------', res.json())
      }
    )
    .then(
      function getAuthorOfCommits(auth) {
        console.log('authors---', auth)
      }
    )
    .catch(
      function showError(err) {
        console.log("Error occured")
      }
    )
  }
//calling function above
//  postUser()

//  https://www.pexels.com/photo/trendy-asian-girls-in-colorful-clothes-and-earrings-4185875/