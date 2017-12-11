"use strict";

const cardArray = [
  'Leonardo',
  'Leonardo',
  'Michelangelo',
  'Michelangelo',
  'Rafael',
  'Rafael',
  'Donatello',
  'Donatello',
  'Splinter',
  'Splinter',
  'April',
  'April',
  'Shredder',
  'Shredder',
  'Kraang',
  'Kraang'
];

let compareArray = [];
let cardsFlipped = 0;

function newGame(){

  console.log(compareArray);
  console.log(cardArray);


  cardArray.forEach(function(currentValue, index){

    console.log(index);
    const cardContainer = document.createElement("div");
    cardContainer.classList.add('cardContainer');


    const card = document.createElement("div");
    card.classList.add('card');
    card.dataset.value = `${currentValue}`;


    const front = document.createElement("div");
    front.classList.add('front');


    const back = document.createElement("div");
    back.classList.add('back', `${currentValue}`);
    back.innerHTML = `<p>${currentValue}</p>`;


    const gameBoard = document.querySelector('.gameBoard');
    gameBoard.appendChild(cardContainer); //Adds the container element to the game board
    cardContainer.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);


    card.addEventListener('click', function(){

      if (compareArray.length < 2) {

        card.classList.add('back');
        console.log(card);
        compareArray.push(card.dataset.value);

        console.log(compareArray);

        if (compareArray.length > 1) {

          if (compareArray[0] === compareArray[1]){

            console.log('Match!');

            cardsFlipped += 2;
            compareArray = [];
            console.log(compareArray);
            console.log(cardsFlipped);
          }
          else {

            console.log('No match!');

            function flipBack(){
              console.log(compareArray);

              compareArray.forEach(function(currentValue){

                const flipBack = document.querySelector(`.card[data-value=${currentValue}]`);

                flipBack.classList.remove('back');

              })

              compareArray = [];
              console.log(compareArray);

            }

            setTimeout(flipBack, 400);

          }

        }

      }

    });

  });


}





// function flipBack2(){
//
// const currentValue1 = compareArray[0];
// const currentValue2 = compareArray[1];
//
// console.log(currentValue1);
// console.log(currentValue2);
//
// const flipBack1 = document.querySelector(`.card[data-value=${currentValue1}]`);
// const flipBack2 = document.querySelector(`.card[data-value=${currentValue2}]`);
//
// flipBack1.classList.remove('back');
// flipBack2.classList.remove('back');
//
// compareArray = [];
//
//
// }
