const questions = [
    {
        question: "In the 2017 NFL regular season who had the most passing yards?",
        answers: {
        a: "Drew Brees (NO)",
        b: "Ben Roethlisberger (PIT)",
        c: "Aaron Rodgers (GB)",
        d: "Tom Brady (NE)"
        },

        correctAnswer: "d"
    },

    {
        question: "What team won the AFC West?",
        answers: {
        a: "Chargers",
        b: "Chiefs",
        c: "Jaguars",
        d: "Broncos"
        },

        correctAnswer: "b"
    },

    {
        question: "How many wins did the Cleveland Browns finish the season with?",
        answers: {
        a: "0",
        b: "2",
        c: "4",
        d: "6"
        },

        correctAnswer: "a"
    },

    {
        question: "Which rookie had the most receptions?",
        answers: {
        a: "Alvin Kamara (NO)",
        b: "Evan Engram (NYG)",
        c: "JuJu Smith-Schuster (PIT)",
        d: "Kenny Golladay (DET)"
        },

        correctAnswer: "a"
    },

    {
        question: "Which kicker made a 62-yard field goal in 2017?",
        answers: {
        a: "Justin Tucker (BAL)",
        b: "Greg Zuerlein (LA)",
        c: "Matt Prater (DET)",
        d: "Stephen Gostkowski (NE)"
        },

        correctAnswer: "d"
    },

    {
        question: "Who led the league in sacks?",
        answers: {
        a: "Demarcus Lawrence (DAL)",
        b: "Aaron Donald (LA)",
        c: "Chandler Jones (ARI)",
        d: "Von Miller (Den)"
        },

        correctAnswer: "c"
    },

    {
        question: "Who won the Walter Payton NFL Man of the Year?",
        answers: {
        a: "Drew Brees (NO)",
        b: "Von Miller (Den)",
        c: "Larry Fitzgerald",
        d: "J. J. Watt"
        },

        correctAnswer: "d"
    },

    {
        question: "Which defense allowed the least yards per game?",
        answers: {
        a: "Eagles",
        b: "Panthers",
        c: "Jaguars",
        d: "Vikings"
        },

        correctAnswer: "d"
    },

    {
        question: "Who became the first player in NFL history to throw for at least 500 yards in three different NFL games?",
        answers: {
        a: "Aaron Rodgers (GB)",
        b: "Drew Brees (NO)",
        c: "Ben Roethlisberger (PIT)",
        d: "Alex Smith (KC)"
        },

        correctAnswer: "c"
    },

    {
        question: "Which ball carrier achieved the longest run of the year and fastest ball carrier speed in one play?",
        answers: {
        a: "Tyreek Hill (KC)",
        b: "Kareem Hunt (KC)",
        c: "Leonard Fournette (JAX)",
        d: "Alvin Kamara (NO)"
        },

        correctAnswer: "c"
    }
];



function generateItemElement(items, questionNumber) {
    return `
        <span class="questionNumber">Question ${questionNumber} of 10</span>
        <p>${items.question}</p>
        <div>
            <input type="radio" id="a" value="a" name="question${questionNumber}">
            <label for="choice1">${items.answers.a}</label>
        </div>
        <div>
            <input type="radio" id="b" value="b" name="question${questionNumber}">
            <label for="choice2">${items.answers.b}</label>
        </div>
        <div>
            <input type="radio" id="c" value="c" name="question${questionNumber}">
            <label for="choice3">${items.answers.c}</label>
        </div>
        <div>
            <input type="radio" id="d" value="d" name="question${questionNumber}">
            <label for="choice4">${items.answers.d}</label>
        </div>

        <div class="button-container">
            <button class="button" type="submit">Submit Answer</button>
        </div>
    `
}

function generateQuestionsString(questions, questionNumber) {
    console.log("generating quesetions");

    const items = questions[questionNumber - 1];
        const currentQuestion = generateItemElement(items, questionNumber)
    return currentQuestion;
}

function renderQuizQuestions() {
    console.log("`renderShoppingList` ran");
    let questionNumber = 1;
    const questionString = generateQuestionsString(questions, questionNumber);
    $(".js-quiz").html(questionString);
    questionNumber ++;
}

function handleStartQuiz() {
    $(".js-button-container").on("click", `.js-start-button`, event => {
        console.log("`handleStartQuiz` ran");
        renderQuizQuestions();
    } )
}

function hideElements() {
    $(".js-button-container").on("click", `.js-start-button`, event => {
        console.log("`hideElements` ran");
        $(".js-button-container").addClass("hidden");
        $(".text").addClass("hidden");
    } )
}

function handleAnswers() {
    //leaving off point
}



function handleQuiz() {
    handleStartQuiz();
    hideElements();
    handleAnswers();
}

$(handleQuiz);