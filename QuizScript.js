const quizData = [
    {
        question: "1) What is the Biggest Continent in the World?",
        a:"North America",
        b:"Asia", 
        c:"Africa", 
        d:"Australia", 
        correct: "b"    
    },
    {
        question: "2) Which Bank is called Bankers Bank of India?",
        a:"Reserve Bank of India", 
        b:"Punjab National Bank",
        c:"State Bank of India", 
        d:"ICICI Bank",
        correct:"a" 
        
    },
    {
        question: "3) Which is Largest Animal on Land?",    
        a:"Tiger",
        b:"African Elephant",
        c:"White Elephant",
        d:"Crocodile",
        correct:"b" 
    },
    {
        question: "4) Which is Largest Island in the World?",
        a:"New Guinea",
        b:"Andaman nicobar",
        c:"Greenland",
        d:"Hawai",
        correct:"c"     
    },
    {
        question: "5) Which is the 29th State of India?",   
        a:"Uttarahand",
        b:"Uttar Pradesh",
        c:"Madhya Pradesh",
        d:"Telangana",
        correct:"d"  
    } 
    ];
    const quiz = document.getElementById("quiz");
    const answerElements = document.querySelectorAll(".answer");
    const questionElement = document.getElementById("question");
    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    const submitButton = document.getElementById("submit");
    let currentQuiz = 0;
    let score = 0;
    const deselectAnswers = () => {
        answerElements.forEach((answer) => (answer.checked = false));
    };
    const getSelected = () => {
        let answer;
        answerElements.forEach((answerElement) => {
            if (answerElement.checked) answer = answerElement.id;
        });
        return answer;
    };
    const loadQuiz = () => {
        deselectAnswers();
        const currentQuizData = quizData[currentQuiz];
        questionElement.innerText = currentQuizData.question;
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
    };
    loadQuiz();
    submitButton.addEventListener("click", () => {
        const answer = getSelected();
        if (answer)
         {
            if (answer === quizData[currentQuiz].correct) score++;
            currentQuiz++;
            if (currentQuiz < quizData.length) loadQuiz();
            else {
                quiz.innerHTML = ` <h2>You answered ${score}/${quizData.length} questions correctly</h2> 
                    <button onclick="history.go(0)">Play Again</button> `
            }
        }
    });