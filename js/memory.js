"use strict";

const cardArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
let compareArray = [];
let cardsFlipped = 0;

function newGame(){

  console.log(compareArray);

  cardArray.forEach(function(currentValue, index){

    console.log(index);
    const cardContainer = document.createElement("div");
    cardContainer.classList.add('cardContainer');
    cardContainer.dataset.value = `${currentValue}`;

    const card = document.createElement("div");
    card.classList.add('card');
    card.classList.add(`${index}`);
    const front = document.createElement("div");
    front.classList.add('front');
    const back = document.createElement("div");
    back.classList.add('back', `${currentValue}`);

    const gameBoard = document.querySelector('.gameBoard');
    gameBoard.appendChild(cardContainer); //Adds the container element to the game board
    cardContainer.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', function(){

      if (compareArray.length < 2) {

        card.classList.add('back');
        console.log(card);
        const value = cardContainer.dataset.value;
        compareArray.push(value);

        if (compareArray.length > 1) {

          if (compareArray[0] === compareArray[1]){

            console.log('Match!');

            cardsFlipped += 2;
            compareArray = [];
          }
          else {

            console.log('No match!');

            const test = compareArray[0];

            console.log(test);

            const flipBack_1 = document.getElementsByClassName(compareArray[0]);
            const flipBack_2 = document.getElementsByClassName(compareArray[1]);
            console.log(flipBack_1);
            console.log(flipBack_2);
            card.classList.add('back');
            flipBack_1.classList.remove('back');
            flipBack_2.classList.remove('back');

            compareArray = [];

          }

        }
        console.log(cardsFlipped);
        console.log(compareArray);

      }

    });

  });


}
