const adviceUpdateButton = document.querySelector('.advice-update')
const adviceId = document.querySelector('.advice-id')
const adviceDescription = document.querySelector('.advice-description')

async function fecthAdvice(){
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    return data.slip
}

async function updateAdvice(){
    const advice = await fecthAdvice()
    adviceId.innerHTML = `Advice # ${advice.id}`
    adviceDescription.innerHTML = `"${advice.advice}"`
}

updateAdvice()

adviceUpdateButton.addEventListener('click', updateAdvice)