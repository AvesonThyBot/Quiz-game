const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');


// Start button
startBtn.onclick= () => {
    popupInfo.classList.add('active')
    main.classList.add('active')

} 

// exit pop up button
exitBtn.onclick= () => {
    popupInfo.classList.remove('active')
    main.classList.remove('active')

} 

// start quiz button
continueBtn.onclick= () => {
    popupInfo.classList.add('active')
} 

// background remover
let isBackgroundImage = true;

function removeBackground() {
    const body = document.body;
    if (isBackgroundImage) {
        body.style.background = '#48bbfe';
    } else {
        body.style.background = 'url("/images/background.jpg") no-repeat center / cover';
    }
    isBackgroundImage = !isBackgroundImage;
}