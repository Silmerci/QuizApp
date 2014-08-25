
var score = 0;   
var currentQuestion = 0;

// quiz //

var questions = [{

		question: "What year did Google IPO?",
		choices: ["1999","2004","2005","2002"],
		answer: "2004",
		qNumber: 0

		},

		{

		question: "What was Facebooks IPO price?",
		choices: ["$85","$32","$35","$17"],
		answer: "$35",
		qNumber: 1

		},

		{

		question: "Who saved Bank of America from default?",
		choices: ["Gates","China","Fed","Buffet"],
		answer: "Buffet",
		qNumber: 2
		},

		{

		question: "What time does the NYSE close in NYC?",
		choices: ["3:30","2:30","4:00","5:00"],
		answer: "4:00",
		qNumber: 3

		},

		{

		question: "When I say Elon, You say...",
		choices: ["Musk","Zucks","Hayden","Mint"],
		answer: "Musk",
		qNumber: 4

		}
		];

 // correct answer fade in 
function correct () {
	$("#question-page").fadeOut("fast", function(){
		$(this).css({display:"none"})		
			$("#correct").fadeIn("fast");
			score ++;

});
};

// incorrect fade in 
function incorrect () {
	$("#question-page").fadeOut("fast", function(){
		$(this).css({display:"none"})		
			$("#incorrect").fadeIn("fast");

});
};

// score count for correct guesses

function scoreCount () {

	$("#score-box").text("Score - "+ score);
};

// final score 

function finalScore (){
	$("#results-1").text("You Scored " + score + "!");
}

// feedback based on user's score

function finalFeedback (){
	if (score <= 1) {
		$("#final-remark").text("Too Bad!")
	}
	else if (score <= 3){
		$("#final-remark").text("Not Bad!")
	}

	else if ( score <= 4){
		$("#final-remark").text("Good Work!")
	}

	else {
		$("#final-remark").text("Awesome!")
	}
};

//questoin number for each question

function showQuestionNumber () {

	$(".question-title").text("Question " + currentQuestion );
};	

// next question 

function nextQuestion() {
	if (currentQuestion < 6) {

		$("#correct").hide();
		$("#incorrect").hide();
		$("#question-page").fadeIn("fast");
		$('.question').text(questions[currentQuestion -1].question)
		var newChoice = '<div class="kanji">'+questions[currentQuestion - 1].choices[0]+'</div><div class="boom">'+questions[currentQuestion - 1].choices[1]+'</div><div class="boom">'+questions[currentQuestion - 1].choices[2]+'</div> <div class="boom">'+questions[currentQuestion - 1].choices[3]+'</div>'		
		$("#answer-box").html(newChoice);	
		scoreCount();
		showQuestionNumber();
		previousAnswers();
		
		
	}

	else {
		$("#correct").hide();
		$("#incorrect").hide();
		$("#results").fadeIn("fast");
		finalScore();
		finalFeedback();

	}

};

// showing previous questinos answeres

function previousAnswers (){
	$("#answer-list").append("<li>" + questions[currentQuestion - 2].answer + " " + "</li>") 
}





$(document).ready(function(){

	console.log("document ready");


$("#button-p").click(function(){
	$("#main").fadeOut("fast", function(){
		$(this).css({display:"none"});		
			});		
		nextQuestion();

});

$(".feedback").on('click', ".button", function(){
	currentQuestion++;
	nextQuestion();

	console.log("button clicked");
	console.log(currentQuestion);

});


$("#answer-box").on('click', ".boom", function(){	
	 var selectedAnswer = $(this).text();
	 console.log(selectedAnswer);
	if ( selectedAnswer == questions[currentQuestion -1].answer) {
		$("#question-page").fadeOut("fast");
		correct();
			
				}
		else {
			incorrect();

		}
	
});


$("#home-button").click(function() {
    location.reload();
});

  


});









