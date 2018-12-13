wordBank = ['hangman']; //wordbank replace with json file later
const wordBox = document.getElementById('wordBox');
const buttonBox = document.getElementById('buttonBox');
const rowOne = document.getElementById('rowOne');
const rowTwo = document.getElementById('rowTwo');
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
  key.setAttribute('class', `key${i}`+' '+'key');
  key.textContent = String.fromCharCode(i);
  if (i < 78) {
    rowOne.appendChild(key);
  }
  else {
    rowTwo.appendChild(key);
  }
}
//window.innerWidth
