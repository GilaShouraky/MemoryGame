function mix(array) {
    for (i = 0; i <= array.length * 2; i++) {
        let num1 = Math.floor(Math.random() * array.length)
        let num2 = Math.floor(Math.random() * array.length)
        let temp = array[num1]
        array[num1] = array[num2]
        array[num2] = temp
    }
    return array
}


function clickValid(e) {
    e.target.classList.add('show');
    e.target.innerText = e.target.value;
}


function toggleShow(element) {
    element.classList.toggle('show')
}


function ifCouple(arrElement) {
    arrElement[0].classList.add('finding')
    arrElement[1].classList.add('finding')
    toggleShow(arrElement[1])
    toggleShow(arrElement[0])
}


function ifNOTCouple(arrElement) {
    arrElement[0].innerText = '***'
    arrElement[1].innerText = '***'
    toggleShow(arrElement[1])
    toggleShow(arrElement[0])
}


function openingTwoCards(arrElement){
    if (arrElement[0].value == arrElement[1].value) {
        ifCouple(arrElement)
    }
    else {
        ifNOTCouple(arrElement)
    }
}


function checkWin(){
    if (document.getElementsByClassName('finding').length == 10) {
        alert('winnnnnnnnnn');
        return true
    }
    else{return false}
}


function click(e) {
    if (!checkWin()) {
        if (e.target.classList[1] != 'finding') {
            clickValid(e)
            let tor = document.getElementsByClassName('show')
            if (tor.length == 2) {
                setTimeout(() => {openingTwoCards(tor); setTimeout(() => {checkWin()}, 100);}, 500);
            }
        }
    }
}


function createCard(v) {
    const board = document.getElementsByClassName('cards_container')[0]
    let card = document.createElement('div')
    card.classList.add('card')
    card.value = (v)
    card.innerText = '***'
    card.onclick = click
    board.appendChild(card)
}



function init() {
    const card = ['a', 'b', 'c', 'd', 'e']
    const listCard = mix(card.concat(card))
    listCard.forEach(v => createCard(v))
}


init()