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

