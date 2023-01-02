// Need to hide all of the questions before the quix starts               DONE
// need to show the first question when start quiz is pressed              DONE
// need to show correct or wrong on the next question when an answer is pressed
// next question should be visible when previous question has been answered
// display timer API in top of screen
// when wrong answer is pressed, timer decreases by 10
// when final question is answered the timer value is taken and recorded as the score
// user can enter their initals and it will save in local storage with their score
// high scores link should link to previous scores from local storage
// go back takes you to the home page
// clear high scores button will remove high scores from local storage and the page

var quiz = document.getElementsByClassName("question");
var scores = document.querySelector("#high-scores")

console.log(quiz);

console.log(scores);

for (i=0; i<quiz.length; i++) {
    quiz[i].setAttribute("style","visibility:hidden");
}

scores.setAttribute("style","visibility:hidden");

var start = document.querySelector("#start-button")

start.addEventListener("click", function(){
    quiz[0].setAttribute("style","visibility:visibile");
    document.querySelector("#quiz-start").style.visibility = "hidden";

    // var timerInterval = setInterval(function() {
    //     secondsLeft--;
    //     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
    // },1000);
})

var answer = document.querySelectorAll(".question > ul > li > button");

console.log(document.querySelectorAll(".question > ul > li > button"));

for(i=0;i<answer.length; i++){ 
    answer[i].addEventListener("click", function(){
        for (i=0;i<quiz.length; i++); {
            quiz[i+1].setAttribute("style","visibility:visibile");
            quiz[i].setAttribute("style","visibility:hidden");
        }
    })
}

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);
  }
    