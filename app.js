//selectors
const container = document.querySelector('.container');
const text = document.querySelector('#text');
//variables
const totalTime = 7500;
const breathTime = (totalTime/5)*2;
const holdTime = totalTime/5;

//functions
function breathAnimation(params) {
    text.innerHTML = 'Breath In!';
    container.classList.remove('shrink');
    container.classList.add('grow');

    setTimeout(() => {
        text.innerHTML = 'Hold';

        setTimeout(() => {
            text.innerHTML = 'Breathe Out!';
            container.classList.remove('grow');
            container.classList.add('shrink');
        }, holdTime);
    },breathTime)
}
breathAnimation();
setInterval(breathAnimation, totalTime);