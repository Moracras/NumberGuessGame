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


    }
})