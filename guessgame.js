let randomnumber=parseInt(Math.random()*100+1)
// console.log(radnomnumber)

const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
let guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const loworHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let preGuess=[]
let numGuess=1

let playGame=true 
if (playGame){
    submit.addEventListener('click', function (e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        validateGuess(guess)
    })
}
// ab sab sy pehle ye check karna ha user ny game start kardia phir kyu ky form hw click karny per server ky pas na jae tw preventDefault lagyga phir jo user ny value guess ki ha wo validate guess ko bhejdo takay wo checking karley

//Now we are writing Logic 

function validateGuess(guess){      //it will check the guess ky ye kahin alphabet tw ni ha 1 sy chota tw ni ha ya 100 sy bara tw ni ha
    if (isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess<1){
        alert('please enter ha valid number')
    }else if(guess>100){
        alert('please enter ha valid number')
    }else{
        preGuess.push(guess)
        console.log(preGuess)
        if (numGuess===11){
            displayGuess(guess)
            displayMessage(`Game over. Random number is ${randomnumber}`)
            endgame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){         // ye guess ki value hum is function mei isliye lejaarahy ky hum msg print karsakein kay ye bara guess ha ya chota guess ha
    if(guess===randomnumber){
        displayMessage(`You guessed it right`)
        endgame()
    }else if (guess<randomnumber){
        displayMessage(`Your guess is tooo low`)
    }else if (guess>randomnumber)
        displayMessage(`Your guess is too high`)
} 
function displayGuess(guess){       //is function meu jab uppar wala msg print kargyga tw foran hi is function mei hum jo user ny input kara tha usko empty kardingy  previous guesses mei user ky guess ko likhdingy aur remaining mei sy 1 minus karadingy
    userInput.value=""
    guessSlot.innerHTML+=`${guess}   `
    numGuess++
    remaining.innerHTML=`${11-numGuess}`
}
function displayMessage(message){
    console.log(message)    //ismei simply aik msg print kardingy value high ha ye low 
    loworHi.innerHTML=`<h2>${message}</h2>`
}
function endgame(){
    userInput.value=""
    userInput.setAttribute("disabled","")  // here  it is in key value pair so we take "" as value,  we do this bcz we dont want that user write value in input box so we disabbled this
    //now the game ended so we say useer to start a new game so initially we make para variable we  append it in our startover tagg so new element of para created in html and change that para into button
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Star new Game</h2>`
    startOver.appendChild(p)
    playGame=false
    loworHi.innerHTML="";
    newgame()
}
function newgame(){
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function (e){
    randomnumber=parseInt(Math.random()*100+1)
    preGuess=[]
    numGuess=1
    guessSlot.innerHTML=""
    remaining.innerHTML=`${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame=true    
    })
}





// 🎯 Guess Game ko tod ke dekho (VERY SIMPLE)

// Sirf ye likho:

// random number generate karo
// user input lo
// check karo valid hai ya nahi
// compare karo
// result dikhao
// chances kam karo
// game over ya continue

// 👉 bas itna hi game hai

// 🎯 Guess Game ko tod ke dekho (VERY SIMPLE)

// Sirf ye likho:


// | Step     | Function           |
// | -------- | ------------------ |
// | validate | `validateGuess()`  |
// | compare  | `checkGuess()`     |
// | show     | `displayGuess()`   |
// | message  | `displayMessage()` |


// 🧠 SIMPLE TRICK (MOST IMPORTANT)

// 👉 Har function ka ek hi kaam hona chahiye

// validate → sirf check kare
// display → sirf dikhaye
// compare → sirf compare kare

// 👉 isko kehte hain:
// “One function = one job”