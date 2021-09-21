const startMatch = document.getElementById('start-match')
const addEnergy = document.getElementById('add-energy');
const removeEnergy = document.getElementById('remove-energy');
const energySpan = document.getElementById('energy');
const nextTurn = document.getElementById('next-turn');
const turnSpan = document.getElementById('turn');
const matchContent = document.querySelector('.match-content');

let turn = 1;
let energy = 3;
const maxEnergy = 10;
energySpan.innerText = energy;
turnSpan.innerText = turn;

startMatch.addEventListener('click', (e) => {
    e.preventDefault();
    startMatch.innerText = 'New match';
    matchContent.classList.add('active');
});

addEnergy.addEventListener('click', (e) => {
    e.preventDefault();
    if (energy + 1 > maxEnergy) return;
    energy++;
    energySpan.innerText = energy;
});

removeEnergy.addEventListener('click', (e) => {
    e.preventDefault();
    if (energy <= 0) return;
    energy--;
    energySpan.innerText = energy;

});

nextTurn.addEventListener('click', (e) => {
    e.preventDefault();
    if (energy + 2 > maxEnergy) {
        energy = maxEnergy;
    } else {
        energy += 2;
    }
    energySpan.innerText = energy;
    turn++;
    turnSpan.innerText = turn;
});

document.addEventListener('keypress', (e) => {
    switch (e.key) {
        case "q":
            removeEnergy.focus();
            removeEnergy.click();
            break;
        case "w":
            addEnergy.focus();
            addEnergy.click();
            break;
        case " ":
            nextTurn.focus();
            nextTurn.click();
            break;
        case "r":
            startMatch.focus();
            startMatch.click();
            break;

    }
})