"use strict";
//Still left to do:
// Try in firefox *
// Comment code
// Test on friends computers
// Add readme with installation instructions
// läs igenom kravlistan på git
// .editorconfig

//This is the array tha holds all of the memory cards
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


//This array we use to hold and compare the two currently flipped cards
let compareArray = [];


//This array keeps trak of the specific id number of the currently flipped cards
let idArray = [];


//This variable keeps track of how many cards has been succesfully paired
//When it reaches 16(the length of the card array) the player has won
let cardsFlipped = 0;


//This function generates a new game
function newGame(){

  //We begin by making sure this variable is set to zero
  cardsFlipped = 0;

  //Then we randomly sort our array of memory cards
  cardArray.sort(function() { return 0.5 - Math.random() });

  cardArray.forEach(function(currentValue, index){

    console.log(index);
    const cardContainer = document.createElement("div");
    cardContainer.classList.add('cardContainer');


    const card = document.createElement("div");
    card.classList.add('card');
    card.dataset.value = `${currentValue}`;
    card.dataset.id = `${index}`;


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
        idArray.push(card.dataset.id)

        console.log(compareArray);

        if (compareArray.length > 1) {

          if (compareArray[0] === compareArray[1]){

            console.log('Match!');

            cardsFlipped += 2;
            compareArray = [];
            idArray = [];
            console.log(compareArray);
            console.log(cardsFlipped);

            //Check to see if the whole board is cleared
            if (cardsFlipped == cardArray.length){

              function reset() {

                alert("Cowabunga! You cleared the board... Generating new game!");

                //Wipe the game board and generate a new game
                document.querySelector('.gameBoard').innerHTML = "";
                newGame();
              }

              setTimeout(reset, 400);

            }

          }
          else {

            console.log('No match!');

            function flipBack(){

              console.log(compareArray);
              console.log(idArray);

              idArray.forEach(function(currentValue){
                console.log('Flipback done');
                const flipBack = document.querySelector(`.card[data-id="${currentValue}"]`);
                console.log(flipBack);
                console.log(currentValue);
                flipBack.classList.remove('back');
              })

              compareArray = [];
              idArray = [];

            }

            setTimeout(flipBack, 400);

          }

        }

      }

    });

  });

  const button = document.querySelector(".button");
  button.addEventListener('click', function(){

  document.querySelector('.gameBoard').innerHTML = "";

  newGame();

  compareArray = [];
  idArray = [];

  console.log('The game was reset!');

  })


}
