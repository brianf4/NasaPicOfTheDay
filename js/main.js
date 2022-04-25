const url = `https://api.nasa.gov/planetary/apod?api_key=bgzOkibs3a1OAkn1d0hcXllgWdz8eF7CS7pycdew`


fetch(url)
.then(res => res.json()) // parse response as JSON
.then(data => {
  console.log(data)
  document.querySelector('img').src = data.hdurl
  document.querySelector('h1').innerText = data.title
  document.querySelector('p').innerText = data.explanation
})
.catch(err => {
    console.log(`error ${err}`)
});


