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

  //This loop dynamically creates all the cards on the game board
  cardArray.forEach(function(currentValue, index){

    //Here we create the container-div for each card
    const cardContainer = document.createElement("div");
    cardContainer.classList.add('cardContainer');

    //Here we create the card-div which will hold both a front- and a back-div
    const card = document.createElement("div");
    card.classList.add('card');
    card.dataset.value = `${currentValue}`;//Assigns character to card
    card.dataset.id = `${index}`;//Assigns specific id number to card

    //Here we create the front-div
    const front = document.createElement("div");
    front.classList.add('front');

    //Here we create the back-div
    const back = document.createElement("div");
    back.classList.add('back', `${currentValue}`);
    back.innerHTML = `<p>${currentValue}</p>`;

    //Here we append all our newly created elements to the actual game board
    const gameBoard = document.querySelector('.gameBoard');
    gameBoard.appendChild(cardContainer);
    cardContainer.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);

    //Here we make it possible for users to click on the cards
    //and define what will happen if they do
    card.addEventListener('click', function(){

      //We check if there is less than two cards in our compare array
      if (compareArray.length < 2) {

        //We flipp the card by adding the class 'back' to it
        card.classList.add('back');

        //We push the value(character's name) of the card into our compare array
        compareArray.push(card.dataset.value);

        //We push the id of the card into or id array
        idArray.push(card.dataset.id)

        //We check if the compare array holds more than one card
        if (compareArray.length > 1) {

          //We check if the two cards has the same value(character's name)
          if (compareArray[0] === compareArray[1]){

            console.log('Match!');

            cardsFlipped += 2;//We add two cards to our flipped-counter

            //We empty our compare- and id array
            compareArray = [];
            idArray = [];

            //We check to see if the whole board is cleared
            if (cardsFlipped == cardArray.length){

              //We reset the game
              function reset() {

                //We notify the user of it's victory
                alert("Cowabunga! You cleared the board... Generating new game!");

                //We wipe the game board and generate a new game
                document.querySelector('.gameBoard').innerHTML = "";
                newGame();
              }

              setTimeout(reset, 400);

            }

          }
          else {

            console.log('No match!');

            //This function flips the cards back over
            function flipBack(){

              //We loop through our id array to identify which cards to flip
              idArray.forEach(function(currentValue){

                const flipBack = document.querySelector(`.card[data-id="${currentValue}"]`);
                flipBack.classList.remove('back');
                console.log('Flipback done');
              })

              //We empty our compare- and id array
              compareArray = [];
              idArray = [];

            }

            //We execute our flip back funciton with a slight delay
            setTimeout(flipBack, 400);

          }

        }

      }

    });

  });

  //Here we create our reset button
  const button = document.querySelector(".button");

  //Here we make it possible for users to click on the reset button
  //and define what will happen if they do
  button.addEventListener('click', function(){

  //We wipe the game board and generate a new game
  document.querySelector('.gameBoard').innerHTML = "";
  newGame();

  //We empty our compare- and id array
  compareArray = [];
  idArray = [];

  console.log('The game was reset!');

  })


}
