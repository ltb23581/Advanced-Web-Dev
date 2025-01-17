let candidateNames = ["Jeb Bush", "Ben Carson", "Lincoln Chafee", "Chris Christie", "Ted Cruz", "Carly Fiorina", "Jim Gilmore", "Lindsey Graham", "Bobby Jindal", "John Kasich", "Lawrence Lessig", "Martin O'Malley", "George Pataki", "Rand Paul", "Rick Perry", "Marco Rubio", "Bernie Sanders", "Rick Santorum", "Donald Trump", "Scott Walker", "Jim Webb"];

let candidatePix = ["bush.jpg", "carson.jpg", "chafee.jpg", "christie.jpg", "cruz.jpg", "fiorina.jpg", "gilmore.jpg", "graham.jpg", "jindal.jpg", "kasich.jpg", "lessig.jpg", "omalley.jpg", "pataki.jpg", "paul.jpg", "perry.jpg", "rubio.jpg", "sanders.jpg", "santorum.jpg", "trump.jpg", "walker.jpg", "webb.jpg"];

let output = document.querySelector('#alsoRan');
let currentIndex = 0;

function showCurrentCandidate() {
    output.innerHTML = `
        <div class="cand">
            <img src="pix/${candidatePix[currentIndex]}" alt="${candidateNames[currentIndex]}">
            <p>${candidateNames[currentIndex]}</p>
        </div>`;
}

showCurrentCandidate();

function canShow(plusMinus) {
    currentIndex += plusMinus; 

    if (currentIndex >= candidateNames.length) {
        currentIndex = 0;
    }
    if (currentIndex < 0) {
        currentIndex = candidateNames.length - 1;
    }

    showCurrentCandidate();
}

// buttons!
document.querySelector('#next').onclick = function() {
    canShow(1);
};
document.querySelector('#previous').onclick = function() {
    canShow(-1);
};

