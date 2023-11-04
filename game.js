let rightNumber= Math.ceil(Math.random()*100)
console.log(rightNumber);


let message = document.querySelector(".msg")

let liveScore = 10;

let topscore = 0;


document.querySelector(".check").addEventListener("click", () =>{
    const guessedNo = document.querySelector(".guess").value


    if (!guessedNo){
        message.textContent ="Please enter a number"
    }else if (guessedNo == rightNumber){
        message.textContent ="Congratulations, you guessed the correct number!"
        document.querySelector("body").style.backgroundColor ="green"
        document.querySelector(".number").textContent = rightNumber
        if (liveScore > topscore){
            topscore = liveScore
            document.querySelector(".top-score").textContent = topscore
        }

    }else{ //if guess is wrong

        if (liveScore > 1){
            liveScore --;
            document.querySelector(".score").textContent = liveScore

            guessedNo < rightNumber ? message.textContent ="lower"
            :message.textContent ="higher"

        }else{
            message.textContent = "You lose😦"
            document.querySelector(".score").textContent = 0;
            document.querySelector("body").style.backgroundColor ="red"
        }

    }
})
// again button resets the game except top-score /bck #2d3436

document.querySelector(".again").onclick =() => {
    document.querySelector("body").style.backgroundColor = "#2d3436"

    rightNumber = Math.ceil(Math.random()*100) ;
    console.log(rightNumber);
    liveScore = 10;

    document.querySelector(".score").textContent = liveScore
    document.querySelector(".number").textContent ="?"
    document.querySelector(".guess").value =""
    message.textContent ="Game is starting for new player"
}


// using enter as check button

document.addEventListener("keydown", function(e){
    if (e.key ==="Enter")
})