function mix(array) {
    for (i = 0; i <= array.length*2; i++){
        let num1 = Math.floor(Math.random() * array.length)
        let num2 = Math.floor(Math.random() * array.length)
        let temp = array[num1]
        array[num1] = array[num2]
        array[num2] = temp
}
return array
}

function creatBoard(array){
    let result = []
    for (n of array){
        result.push([n, '*'])
    }
    return result
}

function printBoard(array){
    let result = ''
    for (n of array){
        result += n[1]
    }
    return result
}

function success(array, num1, num2){
    if (array[num1][0] == array[num2][0]){
        array[num1][1] = ' '
        array[num2][1] = ' '
        return 'success!'
    }
}

function checkWin(array){
    for (n of array){
        if (n[1] == '*'){
            return false
        }
    }
    return true
}

function printChoose(array, num1, num2){
    let result = ''
    for (i in array){
        if (i == num1 || i == num2){
            result += array[i][0]
        }
        else{
            result += array[i][1]
        }
    }
    return result
}
function validInput(num){
    if (isNaN(num) || num > 10 || num < 0){
        return false
    }
    return true
}


function init(array){
    let broad = creatBoard(mix(array.concat(array)))
    while(checkWin(broad) == false){
        alert(printBoard(broad));
        let choose1 = prompt('Enter a number between 1 and 10:')-1
        while(validInput(choose1)== false){
            choose1 = prompt('noooo \n Enter a number between 1 and 10:')-1
        }
        let choose2 = prompt('Enter a number between 1 and 10:')-1
        while(choose1 == choose2 || validInput(choose2) == false ){
            choose2 = prompt('nooo \n Enter a number between 1 and 10:')-1
        }
        alert(printChoose(broad, choose1, choose2))
        success(broad, choose1, choose2)
    }
    return 'win!!!!!!!!!!!!!!!'
}

const card = ['a', 'b', 'c', 'd','e']
init(card);
