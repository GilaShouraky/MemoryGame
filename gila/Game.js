// const mainArray = ["a", "b", "c", "d", "e"];
// פונקציה שמכפילה את המערך כפול 2 ומערבבת את המיקומים של המערך
function shuffle(shuffleArr) {
  for (i = 0; i < shuffleArr.length * 2; i++) {
    let random1 = Math.floor(Math.random() * shuffleArr.length)
    let random2 = Math.floor(Math.random() * shuffleArr.length)
    shuffleArr[random1] = shuffleArr[random2]
    shuffleArr[random2] = shuffleArr[random1]
  }
  return shuffleArr
}
// פונקציה שקולטת מספר מהמשתמש וע"י המיקום של המספר יהיה אפשר לפתוח את הקלף
function getIndex() {
  return Number(prompt("please choose one number between 1-10")) - 1;
}
// פונצקיה שבודקת אם 2 הערכים שווים
function checkIfSame(valueA, valueB) {
  return valueA === valueB
}

// פונקציה להחלפת ערך בתא ספציפי בתוך מערך מקבלת : מיקום במערך, ערך להחלפה ומערך שצריך להחליף בו
// const switchValuesInArray = (index, value, arrToSwitch) => {
//   arrToSwitch[index] = value;
//   return arrToSwitch
// }
// הופך את כל הערכים במערך לכוכביות, ואז פותחים קלף ועוד קלף, ואם הם שווים אז משאירים פתוח, אם לא- מחזירים חזרה הכל
// function init() {
//   let stars = "*".repeat(arrayAfterShuffling.length).split("");
//   console.log(stars);
//   while (!(checkIfSame(stars.toString(), arrayAfterShuffling.toString()))) {
//     let firstClick = getIndex()
//     stars[firstClick] = arrayAfterShuffling[firstClick]
//     alert(stars)
//     let scendClick = getIndex()
//     stars[scendClick] = arrayAfterShuffling[scendClick]
//     alert(stars)
//     let isCorect = checkIfSame(arrayAfterShuffling[firstClick], arrayAfterShuffling[scendClick])
//     if (!isCorect) {
//       arrayAfterShuffling[firstClick] = "*"
//       arrayAfterShuffling[scendClick] = "*"
//     }
//     else { console.log(stars); }
//   }
// }
// init()

const mainArray = ["green", "red", "yellow", "blue", "white"];
// פונקציה שמכפילה את המערך כפול 2 ומערבבת את המיקומים של המערך
function shuffle(shuffleArr) {
  for (i = 0; i < shuffleArr.length * 2; i++) {
    let random1 = Math.floor(Math.random() * shuffleArr.length)
    let random2 = Math.floor(Math.random() * shuffleArr.length)
    let temp = shuffleArr[random1]
    shuffleArr[random1] = shuffleArr[random2]
    shuffleArr[random2] = temp
  }
  return shuffleArr
}

let board = document.getElementsByClassName("board")[0]
let arrayAfterShuffling = shuffle(mainArray.concat(mainArray));
function createCard(num) {
  for (i = 0; i <= num; i++) {
    let card = document.createElement("div") //מוסיף div
    card.classList.add("card") // מכניס class="card" לתוך הדיב
    card.value = arrayAfterShuffling[i]
    board.appendChild(card)
    card.onclick = frontCard
  }
}
createCard(9)

// for (i = 0; i < arrayAfterShuffling[i].length; i++) {
//   if(arrayAfterShuffling[i].length<=2) {
//     break;
//   }
function frontCard(e) {
  e.target.classList.toggle("frontCard")
  if (document.getElementsByClassName("frontCard").length == 2) {
    e.target.style.background = e.target.value;
  }
}
// let play = document.getElementsByClassName("frontCard")
// if (play.length <= 2) {
//   alert("😍😍")
// }



// let board = document.getElementsByClassName("board")[0]
// function createCard(num) {
//   for (i = 1; i <= num; i++) {
//     let card = document.createElement("div") //מוסיף div
//     card.classList.add("card") // מכניס class="card" לתוך הדיב
//     board.appendChild(card)
//     card.onclick = frontCard
//     // let onclick = document.getElementById("onclick")
//   }
// }
// createCard(10)

// function frontCard(e) {
//   e.target.classList.toggle("frontCard")





