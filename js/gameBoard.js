

//This array is the one holding all of the memory cards
const memory_array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];

//This array stores the values of the flipped cards so we can compare if they match
let values = [];

//The this array stores each card's specific id number
let cards_ids = [];

//The this variable is for keeping track of how many cards have been flipped
let cards_flipped = 0;

//This function is for shuffeling the cards
Array.prototype.memory_card_shuffle = function() {

  let i = this.length, j, temp;

  while(--i > 0) {
    j = Math.floor(Math.random() * (i+1));
    temp = this[j];
    this[j] = this[i];
    this[i] = temp;
  }
}

//This function is for generating a new game
function newGame() {

  cards_flipped = 0;
  let output = '';
  //We call the function for shuffling the cards
  memory_array.memory_card_shuffle ();

  //We generate the output by looping through the array
  //Assigning each card a specific id number
  for(let i = 0; i < memory_array.length; i++) {
    // output += '<div id="card_'+i+'"  onclick="flipCard(this,\''+memory_array[i]+'\')"></div>';
    const output = document.createElement("div");

    output.addEventListener('click', function(event){

      flipCard(event.target, memory_array[i])

    });
    //We declare where we want the output to placed
    document.getElementById('gameBoard').appendChild(output);
  }
}

console.log(memory_array);
console.log(cards_flipped);

//This function is for flipping the cards
function flipCard(card, val) {

  if(card.innerHTML == "" && values.length < 2) {

    card.classList.remove('front');
    card.classList.add('back');
    card.innerHTML = val;

      if(values.length == 0) {

        values.push(val);
        cards_ids.push(card.id);

      } else if (values.length == 1) {

          values.push(val);
          cards_ids.push(card.id);

            if (values[0] == values[1]) { //If the cards has the same value

              console.log("It's a match!");

              cards_flipped += 2;
              //Clear both arrays
              values = [];
              cards_ids = [];

              //Check to see if the whole board is cleared
              if (cards_flipped == memory_array.length){

                function reset() {

                  alert("Congratulations! You cleared the board... Generating new game!");

                  //Wipe the game board and generate a new game
                  document.getElementById('gameBoard').innerHTML == "";
                  newGame();
                }

                setTimeout(reset, 1000);

              }

              } else {

                console.log("No match!");

                function flip2Back() {
                  //Flip the two cards back over
                  let card_1 = document.getElementById(cards_ids[0]);
                  let card_2 = document.getElementById(cards_ids[1]);

                  console.log(card_1);

                  card_1.classList.remove('back');
                  card_1.classList.add('front');
                  card_1.innerHTML = "";

                  card_2.classList.remove('back');
                  card_2.classList.add('front');
                  card_2.innerHTML = "";


                  //Clear both arrays
                  values = [];
                  cards_ids = [];

                }
                setTimeout(flip2Back, 300);
            }
      }

  }

}
