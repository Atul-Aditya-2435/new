var randomNumber1 = Math.floor(Math.random() *6) + 1;
var randonDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = " images/" + randonDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);



var randomNumber2 = Math.floor(Math.random() *6) + 1;
var randonDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = " images/" + randonDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 won";
}
else if(randomNumber1<randomNumber2){
    
    document.querySelector("h1").innerHTML = "Player 2 won";
}
else{
    document.querySelector("h1").innerHTML = "Match Draw";
}
