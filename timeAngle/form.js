const findTimeWithAngles = angle => {
    angle = Math.abs(angle % 360)
    return [time(angle * 262), time((360 - angle) * 262)]
}

const time = m => `${(`0 ${(parseInt(m / 60) % 12 || 12)}`).slice(-2)}:${(`0  ${m % 60}`).slice(-2)}`
console.log(findTimeWithAngles(181))