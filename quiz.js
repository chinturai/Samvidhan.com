let question;
let form;
let res;
let qno;
let score;

const questions = [
    {
        title : 'What is the primary function of the Lok Sabha?',
        options : ["Enforcing laws", "Reviewing judicial cases", "Making and passing laws", "Appointing judges"],
        answer : '2',
        score : 1
    },
    {
        title : 'How many members are there in the Rajya Sabha?',
        options : [
            "250", "245", "275", "300"
        ],
        answer : '1',
        score : 1
    },
    {
        title : 'Which of the following is NOT a type of bill in the Indian Parliament?',
        options : [
            "Money Bill", "Constitutional Amendment Bill", "International Bill", "Ordinary Bill"
        ],
        answer : '2',
        score : 1
    },
    {
        title : 'Who presides over joint sessions of Parliament in India?',
        options : [
            "President", "Prime Minister", "Speaker of the Lok Sabha", "Vice President"
        ],
        answer : '2',
        score : 1
    },
    {
        title : 'Which court in India has the power of judicial review?',
        options : [
            "Supreme Court", "High Court", "District Court", "Both a) and b)"
        ],
        answer : '3',
        score : 1
    },
    {
        title : 'What is Public Interest Litigation (PIL)?',
        options : [
            "A case initiated by the court itself", "A case involving the general public or community interest", "A case involving government contracts", "None of the above"
        ],
        answer : '1',
        score : 1
    },
    {
        title : 'Who appoints the judges of the Supreme Court?',
        options : [
            "Prime Minister", "Chief Justice of India", "President of India", "Parliament"
        ],
        answer : '2',
        score : 1
    },
    {
        title : 'Who is the ceremonial head of the Indian Executive?',
        options : [
            "Prime Minister", "President", "Governor", "Chief Justice of India"
        ],
        answer : '1',
        score : 1
    },
    {
        title : 'What is the role of the Council of Ministers in India?',
        options : [
            "They assist the Judiciary in law enforcement", "They advise the President and implement government policies", "They make appointments to the High Court", "They control the Legislature"
        ],
        answer : '1',
        score : 1
    },
    {
        title : 'Which article of the Indian Constitution empowers the President to declare an emergency?',
        options : [
            "Article 360", "Article 356", "Article 352", "Article 354"
        ],
        answer : '2',
        score : 1
    }
];

function restartScreen() {
    document.querySelector('.quiz-heading').innerHTML = `Score: ${score}`;
    const card = document.querySelector('.question-card');
    card.innerHTML = "<ul>";
    questions.forEach((ques) => {
        const html = `
        <li>${ques.title} <div class="answer-label">${ques.options[ques.answer]}</div></li>
        `;
        card.innerHTML += html;
    });
    card.innerHTML += "</ul>";
    document.querySelector('.answer-key').style.display ='block';
    document.querySelector('button').style.display ='block';
}

function resetradio() {
    document.querySelectorAll('[type="radio"]').forEach((radio) => {
        radio.removeAttribute("disabled");
    });
    res.setAttribute("class","idle");
    res.innerHTML = "Empty";
}

function evaluate() {
    if(form.op.value == questions[qno].answer) {
        res.setAttribute("class","correct");
        res.innerHTML = "Correct";
        score += questions[qno].score;

    } 
    else {
        res.setAttribute("class","incorrect");
        res.innerHTML = "Incorrect";
    }
    document.querySelectorAll('[type="radio"]').forEach((radio) => {
        radio.setAttribute("disabled","");
    })
}

function getNextQuestion() {
    qno++;
    ques = questions[qno];
    question.innerHTML = ques.title;
    const labels = document.querySelectorAll('label');
    labels.forEach((label, idx) => {
        label.innerHTML = ques.options[idx];
    }); 
}

function handleSubmit(e) {
    e.preventDefault();
    if(!form.op.value) {
        alert('Please select an option');
    }
    else if(form.submit.classList.contains('submit')) {
        evaluate();
        form.submit.classList.remove('submit');
        form.submit.value = "Next"
        form.submit.classList.add('next');
    }
    else if(qno < questions.length - 1 && form.submit.classList.contains('next')) {
        getNextQuestion();
        resetradio();
        form.submit.classList.remove('next');
        form.submit.value = "Submit"
        form.submit.classList.add('submit');
        form.reset();
    }
    else if(form.submit.classList.contains('next')) {
        restartScreen();
        form.submit.classList.remove('next');
        form.submit.value = "Submit"
        form.submit.classList.add('submit');
        form.reset();
    }
}



function init() {
    document.body.innerHTML = `
        <h1 class="quiz-heading">Welcome to Samvidhan.com's Skill Assesment QUIZ</h1>
        <div class="app-body">
            <h1 class="answer-key">Answer Key</h1>
            <div class="question-card">
                <h2 id='question'>Questions</h2>
                <form>
                    <input type="radio" id="op1" name="op" value="0">
                    <label for="op1">op1</label><br>
                    <input type="radio" id="op2" name="op" value="1">
                    <label for="op2">op2</label><br>
                    <input type="radio" id="op3" name="op" value="2">
                    <label for="op3">op3</label><br>
                    <input type="radio" id="op4" name="op" value="3">
                    <label for="op4">op4</label><br>
                    <div id = "res" class="idle">Empty</div><br>
                    <input type="submit" name="submit" value = 'Submit' class = "submit"/>
                </form>
            </div>
            <button>Restart</button>
        </div>
    `;
   question = document.querySelector('#question');
   form = document.querySelector('form');
   res = document.querySelector('#res');
   qno = -1;
   score = 0;
   form.addEventListener('submit', handleSubmit);
   document.querySelector('button').addEventListener('click', init);
   getNextQuestion();
}
document.querySelector('button').addEventListener('click', init);
init();