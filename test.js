const virgule = require('./virgule.js')

const text = 'Generate cool virgule fade-in animations for a piece of text'
const num = 10

const virglueText = virgule(text,num)

let i = 0

let timer = setInterval(()=>{
    process.stdout.write(virglueText[i]+'\r')
    i++
    if (i >= virglueText.length) {
        console.log(virglueText.pop())
        clearInterval(timer)
    }
},25)


