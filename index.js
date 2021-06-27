const quizData = [
    {
        question: "Bharachukki Falls are in which state of India?",
        a: 'Karnataka',
        b: 'Andhra Pradesh',
        c: 'Telangana',
        d: 'Tamil Nadu',
        correct: "a"
    },
    {
        question: "Jamuna river of Bangladesh is _______ river of India?",
        a: 'Yamuna',
        b: 'Teesta',
        c: 'Brahamputra',
        d: 'Ganga',
        correct: "c"
    },
    {
        question: "Indian Maritime University is located at:",
        a: 'Hyderabad',
        b: 'Vishakapatnam',
        c: 'Chennai',
        d: 'Kochi',
        correct: "c"
    },
    {
        question: "Which of the following is the world’s largest peninsula?",
        a: 'India',
        b: 'South Africa',
        c: 'Arabia',
        d: 'Both A & B',
        correct: "c"
    },
    {
        question: "Which of the following imaginary line almost divides India into two equal parts?",
        a: 'Equator',
        b: 'Tropic of cancer',
        c: 'Tropic of capricorn',
        d: 'Arctic circle',
        correct: "b"
    },
    {
        question: "Which of the following river has the largest river basin in India?",
        a: 'The Indus',
        b: 'The Ganga',
        c: 'The Brahmaputra',
        d: 'The Krishna',
        correct: "b"
    },
    {
        question: "Which of the following longitudes is the standard meridian of India?",
        a: "69°30'E",
        b: "75°30'E",
        c: "82°30'E",
        d: "90°30'E",
        correct: "c"
    },
    {
        question: "The river Narmada is originate from.....",
        a: "Satpura",
        b: "Amarkantak",
        c: "Brahmagiri",
        d: "Slopes of the Western Ghats",
        correct: "b"
    }
]



const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

const answersEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');

var count=0;
let score = 0;

var currentQuiz = Math.floor((Math.random()*7));
loadQuiz(currentQuiz);
var arr = [currentQuiz];

function random(){
    while(true){
        var num = Math.floor((Math.random()*7)+1);
        if(arr.includes(num))
            continue;
        else
            break;
    }
    arr.push(num);
    return num;
}

function loadQuiz(currentQuiz){
    deSelect();
    var no = count+1;
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = no +".    " +currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function getSelected(){
    let answer= undefined;

    answersEls.forEach((answerEl) =>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    
    return answer;
}

function deSelect(){
    answersEls.forEach((answerEl) =>{
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click',()=>{
    const answer = getSelected();
        if(answer)
        {
            if(answer===quizData[currentQuiz].correct)
                score++;
            currentQuiz = random();
            count++;
            if(count<5){
                loadQuiz(currentQuiz);
            }
            else{
                if(score>=4)
                    quiz.innerHTML = `<h2>Score: ${score}/5 🔥</h2> <button onclick="location.reload()">Try again</button`;
                else if(score==3)
                    quiz.innerHTML = `<h2>Score: ${score}/5 🙂</h2> <button onclick="location.reload()">Try again</button`;
                else 
                quiz.innerHTML = `<h2>Score: ${score}/5 ☹️</h2> <button onclick="location.reload()">Try again</button`;
                } 

        }      
});

