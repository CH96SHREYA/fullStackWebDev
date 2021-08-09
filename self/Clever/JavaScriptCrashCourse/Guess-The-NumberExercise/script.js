
let guess =[];
let correctNumber= getRandomNumber();
console.log(correctNumber);

window.onload = function() {
    initGame();
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);    
}

/**
 * Functionality for playing the whole game
 */
function playGame(){
  let numberGuess = document.getElementById("number-guess").value; 
  saveGuessHistory(numberGuess);
  displayResult(numberGuess,correctNumber);
  displayHistory();
}

/**
 * Show the result for if the guess it too high, too low, or correct
 */

function displayResult(numberGuess, correctNumber){
  if(numberGuess < correctNumber)
    showNumberBelow();  
  else if (numberGuess > correctNumber)
    showNumberAbove();   
  else
    showYouWon();  
}


/**
 * Initialize a new game by resetting all values and content on the page
 */
function initGame(){
  correctNumber =0;
  guess= [];
  resetResultContent();  
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent(){  
  document.getElementById("number-guess").value = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("history").innerHTML = "";
}

/**
 * Return a random number between 1 and 100
 */
function getRandomNumber(){
 return Math.floor(Math.random()*100)+1;
}

/**
 * Save guess history 
 */
function saveGuessHistory(guessNumber) { 
  guess.push(guessNumber);  
}

/**
 * Display guess history to user
 */

function displayHistory() {  
  let list = "<ul class='list-group'>";
  guess.forEach(elem => {       
   list+=  "<li class='list-group-item'>You guessed "+ elem + " </li>"
   console.log(elem +" "+ list); 
  })  
  list += '</ul>';  
  console.log(list);
  document.getElementById("history").innerHTML = list;
}



/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   */  
   var dialog = getDialog("won",text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   */
  var dialog = getDialog("warning",text);

  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   */
  var dialog = getDialog("warning",text);
  document.getElementById("result").innerHTML = dialog;
}
