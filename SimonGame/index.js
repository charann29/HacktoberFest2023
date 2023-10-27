const buttonColours = ["red", "blue", "green", "yellow"];
// console.log(buttonColours)

// gamePattern
let gamePattern = [];

// empty array value first after that value store via userChosenColors which we clicked

let userClickedPattern = [];

var level = 0;

var started = false;

$(".reload").hide();

// Exit  button 
$(".Exit").on("click", function () {
    if (window.confirm("Do you really want to leave?")) {
        window.close();
    }
})


$(".st-btn").on("click", function () {
    if (!started) {
        $("#level-title").text("level " + level);
        // hide start button after game start 
        // and add some css for how button will show after game start
        $(".st-btn").html("Start").hide();
        $(".reload").show();
        $(".reload").css("margin-left", 0)
        $(".Exit").hide();
        nextSequence();
        started = true;
    }
})

// this is for start with keyboard press 
// $(document).on("keydown", function (event) {
//     if (event.key == "a") {
//         if (!started) {
//             $("#level-title").text("level " + level);
//             nextSequence();
//             started = true;
//         }
//     }
// });

$(".btn").on("click", function () {
    //  this will give the value of clicked button
    // attr is return attributes and values of the selected elements 
    // $(this) will trigger the tapped button action  

    var userChosenColour = $(this).attr("id");

    // console.log(userChosenColour)

    // here we push the color name in userClickedPattern via userChosenColour
    // so whatever value is coming to userChosenColour it will store in userClickedPattern

    userClickedPattern.push(userChosenColour);

    // clicked button sound via playSounds function
    playSounds(userChosenColour);
    animatePress(userChosenColour);

    // it will give the index value of random color genrated and like assume random value is green so it will give the index value of green so its first so index value is 1 
    // and this value use to comapare of answer which  random color is came and which color user is pressed looking at screen so both value is true so condition is satisfied 
    checkAnswer(userClickedPattern.length - 1);

});

function checkAnswer(currentLevel) {
    // this if function for start the game if u didn't press a Start button then it will not go to else function cuz in our first if we check the value of buttton which we pressed userClickedPattern and also check gamePattern value and our gamePattern array will store value when we press Start button else it will not store any value and its value is undefined so with ! symbol (!gamePattern[currentLevel]) so our value is true so here our both condition is true userClicked  which we pressed and our gamePattern value is truee so condition satisfied 

    if (userClickedPattern[currentLevel] && !gamePattern[currentLevel]) {
        return;
    }
    // console.log(gamePattern[currentLevel])
    // console.log(userClickedPattern[currentLevel])
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000)
        }
    } else {
        playSounds("wrong");
        $("body").addClass("game-over");

        // this is for show our start-again button which we hide after clicking the start button after game start 
        $(".st-btn").show();
        if (level <= 8) {
            $("#level-title").html("Game Over!! Nice Try, <br> Total level you cleared : " + level);
        }
        else {
            $("#level-title").html("Game Over !! You Played well, <br> Total level you cleared : " + level);
        }

        // add some css with this event if press wrong color then how our button will show 
        $(".st-btn").html("Restart");
        $(".reload").hide();
        $(".Exit").show();


        // this timeout for if u click button and its wrong then our body add game over class and game over class have red background so its add after timeout this class is remove 
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 900);
        // start over function is for reset game with press any key 
        startOver()





    }
}

function playSounds(name) {
    const audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();

}

function animatePress(currentColor) {
    /* this is for button animation when we press any button
    *  then it will show some animation but after 1seconds it will remove
    *  we use for doing this is first we access the element id which is
    *  denoted by # + currentColor so its like our data come from UserChosenColour
    *  then the value goes to current color then we access that particular class
    *  and we add class pressed for animation after that we add setTimeout
    *  for remove that class cuz it's not look nice if pressed class is stay there
    *  after click button So we add remove class in our function with particular time
    */
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);

}


function nextSequence() {

    // here userClickedpattern should be empty if its not the then random value came but if u follow pattern then its game over u press wrong button so and if u didnt follow pattern just press button which came randomly so game will continue but here our game is for pattern follow if u follow pattern then u will go to another level thats why here we did userClickedPattern to  empty   
    userClickedPattern = [];
    console.log(userClickedPattern);
    level++;
    $("#level-title").text("Level - " + level);
    // random number generate
    const randomNumber = Math.floor(Math.random() * 4);
    // console.log(randomNumber)

    // random array value generate
    const randomChosenColour = buttonColours[Math.floor(Math.random() *
        buttonColours.length)];
    // console.log(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSounds(randomChosenColour);
    gamePattern.push(randomChosenColour);
}

function startOver() {
    // so here in startover our level will O and gamePattery array will empty no past data carry after that we add started false so we have access to press button on it 
    level = 0;
    gamePattern = [];
    started = false;
}

