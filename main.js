document.querySelector('button').addEventListener('click', getTarot)
function getTarot(){
    fetch("https://tarot-api-proj.herokuapp.com/api/random")
    .then(res => res.json())
    .then(data => {
        console.log(data.meaning)
        document.querySelector('h2').innerHTML = data.meaning

    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}