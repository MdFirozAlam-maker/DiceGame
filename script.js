function rollDice() {

const winName = document.querySelector(".container h2")
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;


let randomDiceImage = "dice" +randomNumber1 + ".png";
let randomDiceImage2 = "dice" +randomNumber2 + ".png";

let leftImage = document.querySelector('.img1');
leftImage.setAttribute("src","images/" +randomDiceImage);

let rightImage = document.querySelector('.img2');
rightImage.setAttribute("src", "images/"+randomDiceImage2);


const player1Tag = document.querySelector(".player1");
  const player2Tag = document.querySelector(".player2");

if(randomNumber1 > randomNumber2){
    winName.innerHTML = "🏴Player 1 Win 🏴";
    player1Tag.innerHTML = "Player 1- <b>Winner</b>";
    player2Tag.innerHTML = "Player 2- <b>LOSER</b>";
    setTimeout(() => {
        player1Tag.innerHTML = "player1";
        player2Tag.innerHTML = "player2";
    }, 1000);


} else if(randomNumber1 < randomNumber2){
    winName.innerHTML = "🏴Player 2 win 🏴";
     player1Tag.innerHTML = "Player 1-<b>LOSER</b>";
    player2Tag.innerHTML = "Player 2-<b>Winner</b>";

    setTimeout(() => {
        player1Tag.innerHTML = "Player 1";
    player2Tag.innerHTML = "Player 2";
    },1000)

} else {
    winName.innerText = "Draw😂";
}


}

function resetDice() {
    document.querySelector(".img1").setAttribute("src","./images/dice6.png");
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
    document.querySelector("h2").innerText = "Play Game";
}