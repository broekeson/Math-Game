var playing = false;
var score;
var action
var timeremaining;
var correctAnswer;
var beginner  = document.getElementById("beginner");
// var intermediate  = document.getElementById("intermediate");
var advance = document.getElementById("advance");

// if we click on the start/reset button
document.getElementById("startreset").onclick = function () {
    // if we are playing
    if (playing ==  true) {
      //reload page
      location.reload();
    } 
    //  if we are not playing
    else{
    	hide("startreset");
      	show("difficulty");
      	document.getElementById("instruction").innerHTML  = "<p>Select Your Level</P>";
      	hide("gameover");

      	//selecting level
        beginner.onclick = function(){
        hide("difficulty");
        show("startreset");
        document.getElementById("instruction").innerHTML="Click on the correct answer";
        playing = true;
        //set score to 0
        score = 0;
        document.getElementById("scoreValue").innerHTML = score;
        //show the countdown box
        show("timeremaining");
        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;

        hide("gameover");

        //change button to reset
        document.getElementById("startreset").innerHTML  = "Reset Game";
        //  reduce the time by 1sec in loops
          // start countdowm
        startCountdown();

          //generate new Q&A
        generateQA();

        for(i=1;  i<5;  i++){
          // Clicking on answer box
        document.getElementById("box"+i).onclick = function () {
          // checking if we are playing
          if(playing  ==  true){ //if yes
            if(this.innerHTML  == correctAnswer){//check for correct answer
              score = score + 1;  //increase the score by 1
              document.getElementById("scoreValue").innerHTML = score;
              //hide wrong box and show correct box
              hide("wrong");
              show("correct");
              setTimeout(function () {
                hide ("correct");
              },1000);
              generateQA();
            }else{
              //wrong answer
              hide("correct");
              show("wrong");
              setTimeout(function () {
                hide ("wrong");
            },1000);
           }
          }else{
            document.getElementById("instruction").innerHTML = "<p>Please click 'Start Game' to begin</p>"
            }
          }
        }
      } 

      intermediate.onclick = function(){
        hide("difficulty");
        show("startreset");
        document.getElementById("instruction").innerHTML="Click on the correct answer";
        playing = true;
        //set score to 0
        score = 0;
        document.getElementById("scoreValue").innerHTML = score;
        //show the countdown box
        show("timeremaining");
        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;

        hide("gameover");

        //change button to reset
        document.getElementById("startreset").innerHTML  = "Reset Game";
        //  reduce the time by 1sec in loops
          // start countdowm
        startCountdown();

          //generate new Q&A
        generateQA0();

        for(i=1;  i<5;  i++){
          // Clicking on answer box
        document.getElementById("box"+i).onclick = function () {
          // checking if we are playing
          if(playing  ==  true){ //if yes
            if(this.innerHTML  == correctAnswer){//check for correct answer
              score = score + 1;  //increase the score by 1
              document.getElementById("scoreValue").innerHTML = score;
              //hide wrong box and show correct box
              hide("wrong");
              show("correct");
              setTimeout(function () {
                hide ("correct");
              },1000);
              generateQA0();
            }else{
              //wrong answer
              hide("correct");
              show("wrong");
              setTimeout(function () {
                hide ("wrong");
            },1000);
           }
          }else{
            document.getElementById("instruction").innerHTML = "<p>Please click 'Start Game' to begin</p>"
            }
          }
        }
      }


      advance.onclick = function(){
        hide("difficulty");
        show("startreset");
        document.getElementById("instruction").innerHTML="Click on the correct answer";
        playing = true;
        //set score to 0
        score = 0;
        document.getElementById("scoreValue").innerHTML = score;
        //show the countdown box
        show("timeremaining");
        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;

        hide("gameover");

        //change button to reset
        document.getElementById("startreset").innerHTML  = "Reset Game";
        //  reduce the time by 1sec in loops
          // start countdowm
        startCountdown();

          //generate new Q&A
        generateQA1();

        for(i=1;  i<5;  i++){
          // Clicking on answer box
        document.getElementById("box"+i).onclick = function () {
          // checking if we are playing
          if(playing  ==  true){ //if yes
            if(this.innerHTML  == correctAnswer){//check for correct answer
              score = score + 1;  //increase the score by 1
              document.getElementById("scoreValue").innerHTML = score;
              //hide wrong box and show correct box
              hide("wrong");
              show("correct");
              setTimeout(function () {
                hide ("correct");
              },1000);
              generateQA1();
            }else{
              //wrong answer
              hide("correct");
              show("wrong");
              setTimeout(function () {
                hide ("wrong");
            },1000);
           }
          }else{
            document.getElementById("instruction").innerHTML = "<p>Please click 'Start Game' to begin</p>"
            }
          }
        }
      }
    }
  }






    //Functions
      // start countdown; 
      function startCountdown() {
        action  = setInterval(function () {
          //timeleft = yes - continue
          timeremaining -= 1;
          document.getElementById("timeremainingvalue").innerHTML = timeremaining;
          
          //timeleft = no - game over
          if (timeremaining ==  0) {
              stopCountdown();
          show("gameover");
          document.getElementById("gameover").innerHTML=  "<p>Game over!</p><p>Your score is "+ score +".</p>";
          hide("timeremaining");
          hide("correct");
          hide("wrong");
          playing = false;
          document.getElementById("startreset").innerHTML = "Start Game";
            }
        },1000)
      }

      //stop countdown
      function stopCountdown() {
        clearInterval(action);
      }

      //hide element
      function hide(id) {
        document.getElementById(id).style.display = "none";
      }
      
      //show element
      function show(id) {
        document.getElementById(id).style.display = "block";
      }

      //generate question and multiple answers
      function generateQA () {
        var x = 1 + Math.round(9*Math.random());
        var y = 1 + Math.round(9*Math.random());
        correctAnswer = x*y;
        document.getElementById("question").innerHTML = x + "x" + y;
        var correctPosition = 1  + Math.round(3*Math.random());
        document.getElementById("box" + correctPosition).innerHTML  = correctAnswer;  //fill one box with the correct answer
        
        //fill other boxes with wrong answer

        var answer  = [correctAnswer];
        for (let i = 1; i < 5; i++){
            if (i != correctPosition) {
              var wrongAnswer;
              do{
              wrongAnswer = (1 + Math.round(9*Math.random())) *  (1 + Math.round(9*Math.random())); //wrong answer
              }
              while (answer.indexOf(wrongAnswer)>-1);

              document.getElementById("box"+i).innerHTML  = wrongAnswer;

              answer.push(wrongAnswer);
            }
        }
      } 
      
      function generateQA0 () {
        var x = 2 * Math.round(7*Math.random());
        var y = 2 * Math.round(7*Math.random());
        correctAnswer = Math.round(x*y);
        document.getElementById("question").innerHTML = x + "x" + y;
        var correctPosition = 1  + Math.round(3*Math.random());
        document.getElementById("box" + correctPosition).innerHTML  = correctAnswer;  //fill one box with the correct answer
        
        //fill other boxes with wrong answer

        var answer  = [correctAnswer];
        for (let i = 1; i < 5; i++){
            if (i != correctPosition) {
              var wrongAnswer;
              do{
              wrongAnswer = (2 * Math.round(7*Math.random())) *  (2 * Math.round(7*Math.random())); //wrong answer
              }
              while (answer.indexOf(wrongAnswer)>-1);

              document.getElementById("box"+i).innerHTML  = wrongAnswer;

              answer.push(wrongAnswer);
            }
        }
      }
      
      function generateQA1 () {
        var x = 1 + Math.round(9*Math.random());
        var y = 1 + Math.round(9*Math.random());
        correctAnswer = x/y;
        document.getElementById("question").innerHTML = x + "/" + y;
        var correctPosition = 1  + Math.round(3*Math.random());
        document.getElementById("box" + correctPosition).innerHTML  = correctAnswer;  //fill one box with the correct answer
        
        //fill other boxes with wrong answer

        var answer  = [correctAnswer];
        for (let i = 1; i < 5; i++){
            if (i != correctPosition) {
              var wrongAnswer;
              do{
              wrongAnswer = (1 + Math.round(9*Math.random())) / (1 + Math.round(9*Math.random())); //wrong answer
              }
              while (answer.indexOf(wrongAnswer)>-1);

              document.getElementById("box"+i).innerHTML  = wrongAnswer;

              answer.push(wrongAnswer);
            }
        }
      }