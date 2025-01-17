let sq = document.querySelector('#square');

function resetCSS() {
    sq.style.width = '';
    sq.style.height = '';
    sq.style.left = '';
    sq.style.top = '';
    sq.style.borderRadius = '';
    sq.style.backgroundColor = '';
    sq.style.backgroundImage = '';
    sq.style.backgroundSize = '';
    sq.style.transform = '';
    sq.style.boxShadow = '';
}

function changeCSS() {
    resetCSS();
    sq.style.backgroundColor = 'red';
    sq.style.borderRadius = '90%';
}

function changeCSS2() {
    resetCSS();
    sq.style.backgroundImage = 'url("./smiley.webp")';
    sq.style.backgroundSize = '100px 100px';          
}

function changeCSS3() {
    resetCSS();
    sq.style.backgroundColor = 'yellow';
    sq.style.width = '300px';
    sq.style.height = '300px';
    sq.style.left = '150px';
    sq.style.top = '150px';
}

function changeCSS4() {
    resetCSS();
    sq.style.backgroundColor = 'green';
    sq.style.borderRadius = '50%';
    sq.style.boxShadow = '10px 10px 15px rgba(0, 0, 0, 0.5)';
}

function changeCSS5() {
    resetCSS();
    sq.style.top = '150px';
    sq.style.transform = 'rotate(45deg)';
}
