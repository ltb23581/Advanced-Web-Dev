let buildList = document.querySelector('#userInputDropdown');

for (var i = 0; i <= 100; i++) {
    buildList.innerHTML += "<option value='" + i + "'>" + i + "</option>";
}

function compare() {
    let inputValue = document.querySelector('#userInputField').value; 
    let dropdownValue = document.querySelector('#userInputDropdown').value; 

    let answer = inputValue !== "" ? Number(inputValue) : Number(dropdownValue);
    let reaction = document.querySelector('#response');

    switch (true) {
        case answer === 24:
            reaction.innerHTML = "The answer is correct.";
            break;
        case answer < 24:
            if (answer < 20) {
                reaction.innerHTML = answer + " is way too low.";
            } else {
                reaction.innerHTML = answer + " is too low.";
            }
            break;
        case answer > 24 && answer < 28:
            reaction.innerHTML = answer + " is too high but close.";
            break;
        case answer > 28:
            reaction.innerHTML = answer + " is way too high.";
            break;
        default:
            reaction.innerHTML = "Invalid input.";
    }
}

