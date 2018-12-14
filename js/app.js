wordBank = ['hangman']; //wordbank replace with json file later
const wordBox = document.getElementById('wordBox');
const buttonBox = document.getElementById('buttonBox');
const rowOne = document.getElementById('rowOne');
const rowTwo = document.getElementById('rowTwo');
const message = document.getElementById('message');
//random number generator to choose word out of wordbank
let rand = 0 //change to random number later
const charArr = wordBank[rand].split("");

for (let i = 0; i < charArr.length; i++){
  const charBox = document.createElement('div');
  charBox.setAttribute('class', `char${i}`+' '+'charBox');
  wordBox.appendChild(charBox);
}
// creates alphabet buttons for user to press
for (let i = 65; i < 91; i++){
  const key = document.createElement('div');
  key.setAttribute('class', `${String.fromCharCode(i)}`+' '+'key');
  key.textContent = String.fromCharCode(i);
  if (i < 78) {
    rowOne.appendChild(key);
  }
  else {
    rowTwo.appendChild(key);
  }
}

buttonBox.addEventListener('click', check);

// hangman img ids
const imgArr = ["head", "body", "armR", "armL", "legR", "legL"];
let wrong = 0;
let correct =0;
let isGameOver = false;
//checks if the selected character button matches a letter in the word
function check() {
  if (!isGameOver){
    let isMatch = false;
    for (let i= 0; i < charArr.length; i++){
      document.getElementsByClassName(event.target.getAttribute('class')[0])[0].style.backgroundColor ="black"
      //checks if player guess is correct
      if(event.target.getAttribute('class')[0].toUpperCase() === charArr[i].toUpperCase()){
        console.log(document.getElementsByClassName(`char${i}`)[0]);
        document.getElementsByClassName(`char${i}`)[0].textContent = charArr[i].toUpperCase();

        isMatch = true;
        correct++;
        //displays message once all letters have been guessed
        if (correct === charArr.length){
          isGameOver = true;
          message.textContent = "You win!";
        }
      }
      // checks to if guess is wrong
      if ((i === charArr.length -1) && !isMatch){
        document.getElementById(imgArr[wrong]).style.visibility = "visible";
        wrong++;
        if (wrong ===6){
          isGameOver = true;
          message.textContent = "Game Over";
          //toggle class
        }
      }
    }
  }
}
//window.innerWidth
