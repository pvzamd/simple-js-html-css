let base = -3

const shapeLadder = (base, pixel = "") => {
    let shapeDrawn = ""
    for (let i = 1; i <= base;) {
        for (let j = base - i; j >= 0; j--) {
            shapeDrawn += `${"\t".repeat(j)}${(pixel || i + '\t')}\n`
            i++
        }
    }
    for (let i = 1; i <= base;) {
        for (let j = base - i; j >= 0; j--) {
            shapeDrawn += `${"\t".repeat(j)}${(pixel || i + '\t')}\n`
            i++
        }
    }
    return `Checkout a pair of parallel lines with a length of ${base}\n ${shapeDrawn.trimEnd()}`
}

const shapeLessThan = base => {
    let shapeDrawn = ""
    for (let i = 1; i <= base;) {
        for (let j = base - i; j >= 0; j--) {
            shapeDrawn += `${"\t".repeat(j)}${(i + '\t')}\n`
            i++
        }
    }
    for (let i = 1; i <= base;) {
        for (let j = base - i; j >= 0; j--) {
            shapeDrawn += `${"\t".repeat(i)}${(j ? j : '' + '\t')}\n`
            i++
        }
    }
    return `Checkout a less than sign with a height of ${base}\n ${shapeDrawn.trimEnd()}`
}

const shapeRombus = base => {
    let shapeDrawn = ""
    for (let i = 1; i <= base;) {
        for (let j = base - i; j >= 0; j--) {
            shapeDrawn += `${"\t".repeat(j)}${(i)}${("\t".repeat(i * 2 - 2))}${(i > 1 ? i : '')}\n`
            i++
        }
    }
    for (let i = 1; i <= base;) {
        for (let j = base - i; j >= 0; j--) {
            shapeDrawn += `${"\t".repeat(i)}${(j || '')}${("\t".repeat(j > 0 ? j * 2 - 2 : 0))}${(j > 1 ? j : '')}\n`

            i++
        }
    }
    return `Checkout a rombus with sides of length ${base}\n ${shapeDrawn.trimEnd()}`
}

const shapeDiamondCondence = base => {
    let shapeDrawn = ""
    for (let i = 1; i <= base;) {
        for (let j = base - i; j >= 0; j--) {
            shapeDrawn += `${"\t".repeat(j)}${(i + '\t').repeat(2 * i - 1)}\n`
            i++
        }
    }
    for (let i = 1; i <= base;) {
        for (let j = base - i; j >= 0; j--) {
            shapeDrawn += `${"\t".repeat(i)}${(j + '\t').repeat(2 * j - 1 < 0 ? 0 : 2 * j - 1)}\n`
            i++
        }
    }
    return `Checkout a condenced diamond with height of ${base}\n ${shapeDrawn.trimEnd()}`
}

const shapeDiamondSameOccurance = base => {
    let shapeDrawn = ""
    for (let i = 1; i <= base;) {
        for (let j = base - i; j >= 0; j--) {
            shapeDrawn += `${"\t".repeat(j)}${(i + '\t\t').repeat(i)}\n`
            i++
        }
    }
    for (let i = 1; i <= base;) {
        for (let j = base - i; j >= 0; j--) {
            shapeDrawn += `${"\t".repeat(i)}${(j + '\t\t').repeat(j)}\n`
            i++
        }
    }
    return `Checkout a nice diamond with height of ${base}\n ${shapeDrawn.trimEnd()}`
}

const seeTheShape = async base => {
    if (base < 2 && base > -2) return console.log(`Do you wanted to see ${base}s? here are some for you\n${(base + "").repeat(Math.floor(Math.random() * 1000))}`)
    const delay = delayInMs => new Promise(resolve => setTimeout(resolve, delayInMs))
    let absoluteBase = base
    if (base < 0){
        absoluteBase = base*-1
        console.log(`Let's asume you wanted ${absoluteBase} as the base but with ${base} to be consoled`)
    }
    for (let i = 2; i <= absoluteBase; i++) {
        console.log(`Generating shapes with base ${i}`)
        await delay(1000)
        console.log(shapeLadder(i, base))
        await delay(1000)
        console.log(shapeLessThan(i))
        await delay(1000)
        console.log(shapeRombus(i))
        await delay(1000)
        console.log(shapeDiamondCondence(i))
        await delay(1000)
        console.log(shapeDiamondSameOccurance(i))
        if (i < base) {
            console.log(`Please wait loading more with base ${i + 1}...`)
            await delay(3000)
        }
    }
}

seeTheShape(base)