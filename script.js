const hourHand = document.querySelector('.hand-hours')
const minuteHand = document.querySelector('.hand-minutes')
const secondHand = document.querySelector('.hand-seconds')

const setDate = () => {
    const date = new Date()

    const seconds = date.getSeconds()
    const secondsDegrees = ((seconds / 60) * 360)
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    const minutes = date.getMinutes()
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6);
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`

    const hours = date.getHours() % 12
    const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setDate, 1000)

setDate()