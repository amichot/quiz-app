



const questions = [
    {
        question: "In the 2017 NFL regular season who had the most passing yards?",
        answers: {
        a: "Drew Brees (NO)",
        b: "Ben Roethlisberger (PIT)",
        c: "Aaron Rodgers (GB)",
        d: "Tom Brady (NE)"
        },

        correctAnswer: "d",
        answerText: "Tom Brady led the league with 4,577 passing yards! Philip Rivers came in second with 4,515 yards."
    },

    {
        question: "What team won the AFC West?",
        answers: {
        a: "Chargers",
        b: "Chiefs",
        c: "Jaguars",
        d: "Broncos"
        },

        correctAnswer: "b",
        answerText: "The Chiefs won the AFC West with a record of 10 - 6. The Jaguars won the AFC South."
    },

    {
        question: "How many wins did the Cleveland Browns finish the season with?",
        answers: {
        a: "0",
        b: "2",
        c: "4",
        d: "6"
        },

        correctAnswer: "a",
        answerText: "The Cleveland Browns did not win a single game in 2017, finishing the season 0 - 16."
    },

    {
        question: "Which rookie had the most receptions?",
        answers: {
        a: "Alvin Kamara (NO)",
        b: "Evan Engram (NYG)",
        c: "JuJu Smith-Schuster (PIT)",
        d: "Kenny Golladay (DET)"
        },

        correctAnswer: "a",
        answerText: "Even though Alvin Kamara is a running back he led all rookies with 81 receptions during the 2017 regular season."
    },

    {
        question: "Which kicker made a 62-yard field goal in 2017?",
        answers: {
        a: "Justin Tucker (BAL)",
        b: "Greg Zuerlein (LA)",
        c: "Matt Prater (DET)",
        d: "Stephen Gostkowski (NE)"
        },

        correctAnswer: "d",
        answerText: "Stephen Gostkowski was the only kicker to kick a 62-yard field goal in 2017."
    },

    {
        question: "Who led the league in sacks?",
        answers: {
        a: "Demarcus Lawrence (DAL)",
        b: "Aaron Donald (LA)",
        c: "Chandler Jones (ARI)",
        d: "Von Miller (Den)"
        },

        correctAnswer: "c",
        answerText: "Chandler Jones led the league with 17 sacks during the regular season."
    },

    {
        question: "Who won the Walter Payton NFL Man of the Year?",
        answers: {
        a: "Drew Brees (NO)",
        b: "Von Miller (Den)",
        c: "Larry Fitzgerald",
        d: "J. J. Watt"
        },

        correctAnswer: "d",
        answerText: "J.J. Watt raised 37 million dollars to help Houston recover from Hurricane Harvey"
    },

    {
        question: "Which defense allowed the least yards per game?",
        answers: {
        a: "Eagles",
        b: "Panthers",
        c: "Jaguars",
        d: "Vikings"
        },

        correctAnswer: "d",
        answerText: "The Vikings defense gave up an averaged of 275.9 yards per game."
    },

    {
        question: "Who became the first player in NFL history to throw for at least 500 yards in three different NFL games?",
        answers: {
        a: "Aaron Rodgers (GB)",
        b: "Drew Brees (NO)",
        c: "Ben Roethlisberger (PIT)",
        d: "Alex Smith (KC)"
        },

        correctAnswer: "c",
        answerText: "In week 14 Roethlisberger threw for 506 yards against the Ravens making him the only Quarterback to throw for over 500 yards three times in his career."
    },

    {
        question: "Which ball carrier achieved the longest run of the year and fastest ball carrier speed in one play?",
        answers: {
        a: "Tyreek Hill (KC)",
        b: "Kareem Hunt (KC)",
        c: "Leonard Fournette (JAX)",
        d: "Alvin Kamara (NO)"
        },

        correctAnswer: "c",
        answerText: "Fournette ran for a 90-yard touchdown reaching a top speed of 22.05 MPH in week 5 against the Steelers."
    }
];

let questionNumber = 0;
let answersRight = 0;


function generateItemElement(items, questionNumber) {
    console.log("generatingItemElements");
    return `
        <div class="js-remove">
            <section>
                <div class="questionHeader">
                    <span class="questionInfo">Question ${questionNumber} of 10</span>
                    <span class="questionInfo">Answered Correct: ${answersRight} of ${questionNumber - 1}</span>
                </div>
            </section>
            <section>
                <ul>
                    <p>${items.question}</p>
                    <li>
                        <input type="radio" id="a" value="a" name="question${questionNumber}" required>
                        <label for="a">${items.answers.a}</label>
                    </li>
                    <li>
                        <input type="radio" id="b" value="b" name="question${questionNumber}">
                        <label for="b">${items.answers.b}</label>
                    </li>
                    <li>
                        <input type="radio" id="c" value="c" name="question${questionNumber}">
                        <label for="c">${items.answers.c}</label>
                    </li>
                    <li>
                        <input type="radio" id="d" value="d" name="question${questionNumber}">
                        <label for="d">${items.answers.d}</label>
                    </li>

                </ul>

                <div class="button-container js-quizButton-container">
                    <button class="button js-button" type="submit">Submit Answer</button>
                </div>
            </section>
        </div>
    `
}

function generateQuestionsString(questions, questionNumber) {
    console.log("generating questions");

    const items = questions[questionNumber - 1];
        const currentQuestion = generateItemElement(items, questionNumber)
    return currentQuestion;
}

function renderQuizQuestions() {
    console.log("`renderQuizQuestions` ran");
    questionNumber ++;
    console.log(questionNumber)
    if (questionNumber > 10) {
        HandlequizEnd();
    }
    else {
    const questionString = generateQuestionsString(questions, questionNumber);
    $(".js-form-container").html(questionString);
    }
}

function handleStartQuiz() {
    $(".js-form-container").on("click keydown", `.js-start-button`, event => {
        console.log("`handleStartQuiz` ran");
        removeElements();
        renderQuizQuestions();
    } )
}

function removeElements() {
        console.log("`removeElements` ran");
        $(".js-remove").remove();
}

function generateAnswer(response, img) {
    return `
        <div class="js-remove">
            <div class="imgContainer">${img}</div>
            <p>${response}</p>
            <div class="button-container js-quizButton-container">
                <button class="button js-start-button" type="button">Next Question</button>
            </div>
        </div>
    `
}

function getAnswer(userAnswer) {
    const question = questions[questionNumber - 1];
    let response = `<p class="answerResponse">Sorry!</p> The correct answer is ${question.correctAnswer}! ${question.answerText}`
    let img = `<img src="images/wrong.png" alt="Wrong Sign" height="52" width="52"></img>`;
    if (question.correctAnswer === userAnswer) {
        answersRight += 1;
        response = `<p class="answerResponse">CORRECT!</p> ${question.answerText}`;
        img = `<img src="images/right.png" alt="Right Sign" height="52" width="52"></img>`;
    }
    const currentAnswer = generateAnswer(response, img)
    removeElements();
    return currentAnswer;
}

function handleAnswers() {
    $(".js-form-container").on("submit", function(event) {
        event.preventDefault();
        console.log("`handleAnswers` ran");
        let userAnswer = $(`input[name=question${questionNumber}]:checked`).val()
        const answer = getAnswer(userAnswer);
        $(".js-form-container").html(answer);
    })
    
}

function generateQuizEnd(message) {
    return `
        <div class="js-remove">
            <p>${message}</p>
            <div class="button-container js-quizButton-container">
                <button class="button js-retake-button" type="button">Retake Quiz</button>
            </div>
        </div>
    `
}

function finalStatement() {
    let percentRight = answersRight * 10;
    let message = `You got ${percentRight}% of your questions right, Well... at least you know some new football facts!`;
    if (percentRight === 100) {
        message = `Amazing! You are an NFL Guru!!! You got ${percentRight}% of your questions right, CONGRATULATIONS MIGHTY ONE!`;
    }

    else if (percentRight >= 80) {
        message = `The force appears to be with you. You got ${percentRight}% of your questions right, CoNgRaTuLaTiOnS!`;
    }

    else if (percentRight >= 60) {
        message = `You got ${percentRight}% of your questions right, good job!`;
    }

    else if (percentRight >= 40) {
        message = `You got ${percentRight}% of your questions right, better luck next time!`;
    }
    const endingStatement = generateQuizEnd(message);
    $(".js-form-container").html(endingStatement);
}

function HandlequizEnd() {
    finalStatement();
}

function generateStartScreen() {
    return `
    <div class="js-remove">
        <h2 class="text">Answer ten multiple choice questions on the 2017 NFL season to see if you are a real
        football guru!</h2>
        <div class="button-container js-button-container">
        <button class="button js-start-button" type="button">Start Quiz</button>
    </div>

    </div>
    `
}

function retakeQuiz() {
        $(".js-form-container").on("click enter", `.js-retake-button`, function(event) {
            console.log("`retakeQuiz` ran");
            questionNumber = 0;
            answersRight = 0;
            removeElements();
            const startScreen = generateStartScreen();
            $(".js-form-container").html(startScreen);
        })
}



function handleQuiz() {
    handleStartQuiz();
    handleAnswers();
    retakeQuiz();
}

$(handleQuiz);


