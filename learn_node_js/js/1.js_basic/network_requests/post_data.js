
function postData() {
  postUrl = 'https://shokhijakhon.free.beeceptor.com/my/api/path'
  fetch(postUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      data: 'My name is SHeer'
    })
  })
    .then((res) => {
      console.log(res.json())
      return res.json()
    })
    .then(data => console.log(data))
    .catch(err => console.log('errrr'))
  } 
//    postData()