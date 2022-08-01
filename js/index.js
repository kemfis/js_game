const score = document.querySelector('.score');
const result = document.querySelector('.result');
const options = document.querySelectorAll('.option');

let compScore = 0;
let userScore = 0;

options.forEach(i => {
    i.addEventListener('click', (e) => {
        let userChoice = e.target.dataset.option;
        game(userChoice);
    })
})

const game = (userChoice) => {
    let compChoice = Math.ceil(Math.random(0.1) * 3)

    if(compChoice === 1){
        compChoice = 'Камень';
    } else if (compChoice === 2){
        compChoice = 'Бумага';
    } else {
        compChoice = 'Ножницы';
    }
    
    switch(compChoice[0]+userChoice[0]){
        case 'КБ':
            userWin(userChoice, compChoice);
            break;
        case 'КН':
            compWin(compChoice, userChoice);
            break;
        case 'БК':
            compWin(compChoice, userChoice);
            break;
        case 'БН':
            userWin(userChoice, compChoice);
            break;
        case 'НБ':
            compWin(compChoice, userChoice);
            break;
        case 'НК':
            userWin(userChoice, compChoice);
        default:
            draw(userChoice);
    }
}

const compWin = (compChoice, userChoice) => {
    score.innerHTML = `${userScore}:${++compScore}`;
    result.innerHTML = `Выбор Тома: ${compChoice}<br> Твой выбор: ${userChoice}<br> Toм Выиграл!`;
    optionAnimation(userChoice, 'lose');
}

const userWin = (userChoice, compChoice) => {
    score.innerHTML = `${++userScore}:${compScore}`;
    result.innerHTML = `Твой выбор: ${userChoice}<br> Выбор Тома:  ${compChoice}<br> Ты Выиграл!`;
    optionAnimation(userChoice, 'win');
}

const draw = (userChoice) => {
    result.innerHTML = `Ничья, продолжайте игру!`;
    optionAnimation(userChoice, 'draw');
}

const optionAnimation = (choice,selector) => {
    const link = document.querySelector(`.${choice}`);
    link.classList.add(selector);
    setTimeout( () => {
        link.classList.remove(selector)
    }, 500);
}

