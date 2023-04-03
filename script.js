
const adviceNum = document.getElementById('advice-num');
const advices = document.getElementById('advices');
const btn = document.getElementById('btn');

btn.addEventListener('click', getAdvice);

async function getAdvice() {
    let response = await fetch("https://api.adviceslip.com/advice");
    let data = await response.json();
    adviceNum.innerHTML = 'ADVICE #' +data.slip.id;
    advices.innerHTML = '"' +data.slip.advice+ '"';
    
}
    
