

function runRandom(){
    randomVar1 = Math.ceil(Math.random()*6)
    console.log("1st num = "+randomVar1)
    randomVar2 = Math.ceil(Math.random()*6)
    console.log("2nd num = "+randomVar2)
    if(randomVar1 == 1){
        document.getElementById("dice1").innerHTML = "<i class='fas fa-dice-one'></i>";
    }else if(randomVar1 == 2){
        document.getElementById("dice1").innerHTML = "<i class='fas fa-dice-two'></i>";
    }else if(randomVar1 == 3){
        document.getElementById("dice1").innerHTML = "<i class='fas fa-dice-three'></i>";
    }else if(randomVar1 == 4){
        document.getElementById("dice1").innerHTML = "<i class='fas fa-dice-four'></i>";
    }else if(randomVar1 == 5){
        document.getElementById("dice1").innerHTML = "<i class='fas fa-dice-five'></i>";
    }else if(randomVar1 == 6){
        document.getElementById("dice1").innerHTML = "<i class='fas fa-dice-six'></i>";
    }else{
        alert("Please report this bug to developer with screenshot")
    }

    if(randomVar2 == 1){
        document.getElementById("dice2").innerHTML = "<i class='fas fa-dice-one'></i>";
    }else if(randomVar2 == 2){
        document.getElementById("dice2").innerHTML = "<i class='fas fa-dice-two'></i>";
    }else if(randomVar2 == 3){
        document.getElementById("dice2").innerHTML = "<i class='fas fa-dice-three'></i>";
    }else if(randomVar2 == 4){
        document.getElementById("dice2").innerHTML = "<i class='fas fa-dice-four'></i>";
    }else if(randomVar2 == 5){
        document.getElementById("dice2").innerHTML = "<i class='fas fa-dice-five'></i>";
    }else if(randomVar2 == 6){
        document.getElementById("dice2").innerHTML = "<i class='fas fa-dice-six'></i>";
    }else{
        alert("Please report this bug to developer with screenshot")
    }

    if(randomVar1 > randomVar2){
        document.getElementById("Result").innerHTML = "Player 1 Won"
    }else if(randomVar1 < randomVar2){
        document.getElementById("Result").innerHTML = "Player 2 Won"
    }else{
        document.getElementById("Result").innerHTML = "Draw"
    }
}
