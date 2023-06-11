var player1 = Math.floor(Math.random()*6)+1;
var player2 = Math.floor(Math.random()*6)+1;
var firstimg = "./images/dice"+player1+".png";
var secondimg = "./images/dice"+player2+".png";
document.querySelector(".img1").setAttribute("src",firstimg);
document.querySelector(".img2").setAttribute("src",secondimg);




if(player1>player2){
    document.querySelector(".result").innerHTML="<p><em>wow! player1 is the winner..</em></p>";
}
else if(player1<player2){
    document.querySelector(".result").innerHTML="<p><em>wow! player2 is the winner..</em></p>"; 
}
else{
    document.querySelector(".result").innerHTML="<p><em>Draw!..</em></p>"; 
}
console.log(player1+" "+player2);