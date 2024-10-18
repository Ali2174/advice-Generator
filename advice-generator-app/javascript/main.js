const advice = document.querySelector('.advice');
const adviceid = document.querySelector('.advice-id');
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    fetch('https://randomuser.me/api/').then((response) => {

        return response.json()  
    }).then((data) => {

        //  advice.textContent = data.slip.advice;
        //  adviceid.textContent = data.slip.id;

        advice.setAttribute('src',`${data.results[10].picture.thumbnail}`) ;
    });


})
/* https://api.adviceslip.com/advice */

