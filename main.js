document.querySelector('button').addEventListener('click', getTarot)
function getTarot(){
fetch("https://rws-cards-api.herokuapp.com/api/v1/cards/random")
    .then(res => res.json())
    .then(data => {
        console.log(data.cards[0])
        document.querySelector('h2').innerText = data.cards[0].desc

    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}