const fs = require('fs')
module.exports = (type, amount, progressLogging) => {
    if(type == "compute"){
        if(progressLogging) console.log(`Setting Up pi Compute for ${amount.toLocaleString()} digits of pi\nNote: For big numbers this may take a while!`)
        let i = 1n; let x = 3n * (10n ** (BigInt(amount) + 20n)); let pi = x; let doneDigits = 0; let nextLog = 1000
        while (x > 0) {
            x = x * i / ((i + 1n) * 4n);
            pi += x / (i + 2n);
            i += 2n;
            const pistr16 = pi.toString(16);
            doneDigits = (((pistr16.length - x.toString(16).length) * 1.20412) - 20).toFixed(0)
            nextLog--
            if(nextLog == 0){
                if(progressLogging){
                    nextLog = 1000
                    console.clear()
                    let percentage = (100 / (amount)) * (doneDigits)
                    let bars = Math.round(percentage / 10)
                    console.log(`Computing ${amount} digits of pi\n${doneDigits} Digits Done:  ${percentage.toFixed(2)}% ${BarBox(bars)}\n\nNote: The speed of this will entirely depend on your pc specs,\nIf you dont need more than 1000000 we reccomend using "database" instead of "compute"`)
                } else nextLog = 1000
            }
        }
        let array = `${(pi / (10n ** 20n))}`.split("")
        insert(array, 1, ".")
        let arrayFormatted = array.join("")
        return arrayFormatted
    } if(type == "database"){
        if(amount > 1000000) return "Can not database generate more than 1,000,000 digits of Pi\nTo generate more than 1 million you will need to compute the digits with: \n<PiGenerator>(\"compute\", amount, <progressLogging>)"
        if(amount < 1) return "Can not generate less than 1 digit of pi"

        let piDB = fs.readFileSync("./node_modules/pi-generator.js/1MilDigits.txt", "utf-8")
        let piDigits = piDB.split(".")[1].split("")
        let pi = "3."
        var i;
        for(i = 0; i < amount; i++){
            pi = `${pi}${piDigits[i]}`

            if(i == amount - 1){
                return pi
            }
        }
    }
}

function insert(array, index, elements) {    array.splice(index, 0, elements);}
function BarBox(done){
    let amtLeft = 11 - done
    let string = []
    var i;
    for(i = 1; i < 11; i++){
        if(i < amtLeft){
            
            string.unshift("-")
        } else {
            string.unshift("=")
        }
        if(i == 10){
            return `[${string.join("")}]`
        }
    }
}