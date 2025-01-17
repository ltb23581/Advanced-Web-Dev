let slideShowOne = [
    "bush.jpg", "carson.jpg", "chafee.jpg", "christie.jpg", 
    "cruz.jpg", "fiorina.jpg", "gilmore.jpg", "graham.jpg", 
    "jindal.jpg", "kasich.jpg", "lessig.jpg", "omalley.jpg", 
    "pataki.jpg", "paul.jpg", "perry.jpg", "rubio.jpg", 
    "sanders.jpg", "santorum.jpg", "trump.jpg", "walker.jpg", 
    "webb.jpg"
];

let slideShowTwo = [
    "trump.jpg", "sanders.jpg", "rubio.jpg", "walker.jpg", 
    "christie.jpg", "cruz.jpg", "fiorina.jpg", "carson.jpg", 
    "kasich.jpg", "graham.jpg", "jindal.jpg", "chafee.jpg", 
    "gilmore.jpg", "omalley.jpg", "lessig.jpg", "pataki.jpg", 
    "paul.jpg", "perry.jpg", "santorum.jpg", "bush.jpg", 
    "webb.jpg"
];

let slideShowThree = [
    "webb.jpg", "jindal.jpg", "carson.jpg", "sanders.jpg", 
    "fiorina.jpg", "kasich.jpg", "cruz.jpg", "trump.jpg", 
    "graham.jpg", "bush.jpg", "christie.jpg", "perry.jpg", 
    "rubio.jpg", "pataki.jpg", "lessig.jpg", "omalley.jpg", 
    "santorum.jpg", "gilmore.jpg", "walker.jpg", "chafee.jpg"
];

let showOneIndex = 0;
let showTwoIndex = 0;
let showThreeIndex = 0;

function initializeImages() {
    document.getElementById('image1').src = `./pix/${slideShowOne[showOneIndex]}`;
    document.getElementById('image2').src = `./pix/${slideShowTwo[showTwoIndex]}`;
    document.getElementById('image3').src = `./pix/${slideShowThree[showThreeIndex]}`;
}

window.onload = initializeImages;

function show1() {
    const img = document.getElementById('image1');
    showOneIndex = (showOneIndex + 1) % slideShowOne.length; 
    img.src = `./pix/${slideShowOne[showOneIndex]}`; 
}

function back1() {
    const img = document.getElementById('image1');
    showOneIndex = (showOneIndex - 1 + slideShowOne.length) % slideShowOne.length; 
    img.src = `./pix/${slideShowOne[showOneIndex]}`;
}

function show2() {
    const img = document.getElementById('image2');
    showTwoIndex = (showTwoIndex + 1) % slideShowTwo.length; 
    img.src = `./pix/${slideShowTwo[showTwoIndex]}`; 
}

function back2() {
    const img = document.getElementById('image2');
    showTwoIndex = (showTwoIndex - 1 + slideShowTwo.length) % slideShowTwo.length; 
    img.src = `./pix/${slideShowTwo[showTwoIndex]}`; 
}

function show3() {
    const img = document.getElementById('image3');
    showThreeIndex = (showThreeIndex + 1) % slideShowThree.length; 
    img.src = `./pix/${slideShowThree[showThreeIndex]}`; 
}

function back3() {
    const img = document.getElementById('image3');
    showThreeIndex = (showThreeIndex - 1 + slideShowThree.length) % slideShowThree.length; 
    img.src = `./pix/${slideShowThree[showThreeIndex]}`;
}


