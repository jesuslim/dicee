let randomNumber1 = Math.floor(Math.random()*6) + 1;
let diceFace1 = `images/dice${randomNumber1}.png`;
let dice1 = document.querySelectorAll('img')[0];

dice1.setAttribute('src', diceFace1);

let randomNumber2 = Math.floor(Math.random()*6) + 1;
let diceFace2 = `images/dice${randomNumber2}.png`;
let dice2 = document.querySelectorAll('img')[1];

dice2.setAttribute('src', diceFace2);

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = '🚩 Player 1 Wins!';
} else if (randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML = 'Player 2 Wins! 🚩';
} else {
    document.querySelector('h1').innerHTML = 'Draw!';
}