var wins = 0;
var losses = 0;
var num = 8;
var guessesLeft = 8;
var guessedLetter =[];
var theRappers = ["kyle", "drake", "kanye","kendrick"];
var displayWord = [];



// FUNCTIONS:


function minusguess() {
    num -= 1;
    return num;
}
var ranWord = theRappers[Math.floor(Math.random() * theRappers.length)];

// This for loop takes that random word generated and then counts
//  the length and displays the _ for each character within a empty var string, then grabs element on html by ID and changes it with innerHTML.
for (let i = 0; i < ranWord.length; i++) {
    displayWord += "_ ";
    var gotdiv = document.getElementById("daWord");
    gotdiv.innerHTML = displayWord; 
    


// The user clicks a key and that key is checked if it is a character within the displayWord randomly generated with the above for loop.
// I want this for loop to check my random word one index at a time and if that index matches the users key pressed then take that index and match it with the index of the displayword.

document.onkeyup = function(event) {
    var n = ranWord.includes(event.key, 0)
        if (n == true) {
            for (var j = 0; j < ranWord.length; j++) {
                if (ranWord[j] = event.key) {
                    displayWord[j] = event.key;
                    var gei = document.getElementById("daWord");
                    gei.textContent[j] = event.key;
                    console.log("Trae");
                }
                

                

                
            }
            
        
        }
        else if (n == false) {
            var takeid = document.getElementById("guessedAlready");
            takeid.innerHTML += event.key;
            guessesLeft--;
            }
            

            
        


            
            
        }
    
}





 


    
    




    


// document.onkeyup() = function(event) {
//     if (event.key === displayWord[i].toLowerCase) {
            // diplayWord[i] = event.key;
        
//     }
    // else (event.key != displayWord[i]){
        // add to += guessedLetters
        // 
    // }
    
// }






    // When key is clicked add that key to the guesed letters var and change guesses left -1 .

   
        // add that key clicked to the already guessed list
    
    


// if that key clicked is correct also add that key to the _ _ _ _ _ _ character place.

// if that key is wrong only add to the guessed list.



// Pseudo Code:

// Uses Cases(everything the user needs to do):

// Use #1: User loads page
    // Display underscores for each letter of that word that needs to be guessed.
    // Display GuessesRemaining, wins, losses
// Use #2: User clicks letter between a - z. 
    // If user guesses a letter within that word, display the letter within that correct position, 
    // else gueeses remaining -1 , if guesses remaining is 0 game is over.
    // if all guesses correct user wins and wins +1.

// ============Varianles first===========
// Var wordBank = []
// Var wins = 0;
// Var losses = 0;
// Var wrongguesses = []
// var userInput
// var currentword from wordbank and store within currentword var 
// var underscores = [] this will need to be updated if user correctly guesses a letter 





// ==================Functions============

// function reset () - will randomly choose a word from wordbank
// Math.floor and math.random function to random choose
// add underscores to underscores arry according to array of curent word.
// we need to write syntax useing our current word as our input and output an array of _ according to current word.
// Display underscores according to word within HTML element, by converting the array into a string
// display wins, losses, guesses remaining.







// ===============Event listeners=========
// One page load execute our reset function to randomly choose a word for the user to guess
// document.onkeyup = function(event) is an event listener set to a function
// store userGuess in a varaible 
// userInput = <value from the event object>

// ex. user input is 's'
// check to see if user input = letter within array. How to check and see if character is correct within a string.
// update the underscore array [0] with S

// else update the wrongGuess var and display that within that array/element and decrease guesses remaining by 1

 