

// // משימות להיום:
// // 1. לבנות מערך של קלפים.

// const card=["a", "b", "c", "d"]

// function mix(mixcard){
// let temp;
// for (let i=0; i<mixcard.length*2; i++ ){
//     let random1 = Math.floor(Math.random*mixcard.length);
//     let random2 = Math.floor(Math.random*mixcard.length);
//     temp=mixcard[random1];
//     mix[random1] = mix[random2]
//     mixcard[random2]= temp;
// }
// return mixcard
// }

// const playCard = (mix(card.concat(card)));
// const star = "*".repeat(playCard.length).split('');
// console.log(star);


// // 2. לבנות פונקציה שתערבב את המערך (להדפיס את המערך בסוף כש * מייצגת קלף נסתר)

// //const card=["*"["a"], "*"["b"],"*"["c"]]


// // 3. פונקציה שתקבל 2 בחירות מהמשתמש ותבדוק אם הקלפים שנבחרו תואמים או לא.
// //    במידה והם תואמים צריך להדפיס למסך את המערך שהקלפים שנבחרו גלויים במידה ולא לזרוק alert של המערך עם הקלפים גלויים אבל לא לשמור אותם בתור גלויים.
//  function getIndex(){
//     return (Number(prompt("choose a number between 1-8")-1));
//  }

// function chekmatch(a,b){
//     return a==b
// }

// let a= getIndex();
// let b =getIndex(); 

const mainArray = ["a", "b", "c", "d", "e"];

function shuffle(arrayForShuffling) {
  let temp;
  for (let i = 0; i < arrayForShuffling.length * 2; i++) {
    let random1 = Math.floor(Math.random() * arrayForShuffling.length);
    let random2 = Math.floor(Math.random() * arrayForShuffling.length);
    temp = arrayForShuffling[random1];
    arrayForShuffling[random1] = arrayForShuffling[random2];
    arrayForShuffling[random2] = temp;
  }
  return arrayForShuffling;
}

function checkIfEqual(valueA, valueB) {
  return valueA === valueB;
}

// /*
// פונקציה להחלפת ערך בתא ספציפי בתוך מערך
// מקבלת : מיקום במערך
// ערך להחלפה
// מערך שצריך להחליף בו
// */
const switchValuesInArray = (index,value,arrToSwitch)=>{
  arrToSwitch[index] = value;
  return arrToSwitch
}

function init() {
  const arrayAfterShuffling = shuffle(mainArray.concat(mainArray));
  let stars = "*".repeat(arrayAfterShuffling.length).split("");
  console.log(stars);
  let bordElement = document.getElementsByClassName("board")[0]
        arrayAfterShuffling.forEach(value => {
          let cardElement = document.createElement ("div")
          cardElement.classList.add= ("card")
          cardElement.onclick=(e)=>{
          cardElement.innerText=e.target.value
        };
      }
 bordElement.appendChild(cardElement)

  while (!checkIfEqual(stars.toString(), arrayAfterShuffling.toString())) {
      let firstValueFromUser = getIndex();
      stars[firstValueFromUser] = arrayAfterShuffling[firstValueFromUser];
      alert(stars);
      let scendValueFromUser = getIndex();
      stars[scendValueFromUser] = arrayAfterShuffling[scendValueFromUser];
      alert(stars);
      const isEqual = checkIfEqual(
          arrayAfterShuffling[firstValueFromUser],
          arrayAfterShuffling[scendValueFromUser]
        );
        if (!isEqual) {
            stars[firstValueFromUser] = "*";
            stars[scendValueFromUser] = "*";
          } else console.log(stars);
        }
      

      }
      init();
      
        
        
      





  


init().repeat(10)

