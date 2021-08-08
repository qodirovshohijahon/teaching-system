let githubUrl = `https://api.github.com/users/qodirovshohijahon`

function getGithubUser(url) {
    return fetch(url).
        then((response) => {
            if (response.status == 200) {
            return response.json();
            } else {
            throw new Error(response.status);
            }
        });
}

getGithubUser(githubUrl)
  .then((res) => {
    console.log(res);
  })
  .catch(console.log());


























// async function loadJson(url) {
//   let res = await fetch(url);
//   if (res.status == 200) {
//     let respone = await res.json();
//     console.log(respone);
//   } else throw new Error(res.status);
// }

// loadJson(url);
