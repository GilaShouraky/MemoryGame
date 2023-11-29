const cardi = ['a', 'b', 'c', 'd','e']
function numRandomLimit (min, max){
    // הפונקציה מקבלת שני מספרים שמהווים מינימיום ומקסימום, ומחזירה מספר רנדומלי אחד בטווח
    return Math.floor(Math.random() * (max - min) + min)
}


function mix (array){
let arrayMix = []
let numAlready = []
for (i in array){
    let numRandom = numRandomLimit(0, array.length)
    while (numAlready.includes(numRandom) ) {
        // בודק שלא חזר לי מספר רנדומלי שכבר היה
        numRandom = numRandomLimit(0, array.length)  
    }
    arrayMix[numRandom] = array[i]
    numAlready.push(numRandom)
}
return arrayMix
}