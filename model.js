
console.time(time_1)

fetch("https://dog.ceo/api/breeds/image/random")

.then(response => response.json())



.then((res) =>  {

document.querySelector('.js-img').innerHTML = `<img src="${res.message}">`







})

console.timeEnd(time_1)