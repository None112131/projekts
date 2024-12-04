

  fetch("https://www.omdbapi.com/?i=tt3896198&apikey=951c761d") 
  .then(response => response.json())
 
  .then(res => {

    const age = res.Metascore

      console.log(res)

    document.querySelector('.js-img').innerHTML = `<img src='${res.Poster}'>`

    document.querySelector('.text').innerHTML  = age

    
     })
    
    









