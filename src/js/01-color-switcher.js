const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener("click", () => {

    startBtn.disabled = true;
    stopBtn.disabled = false;
    
    intervalId = setInterval(() => {  

        const randomColor = getRandomHexColor();
        body.style.backgroundColor = randomColor;      

    }, 1000);
});

stopBtn.addEventListener("click", () => {

    stopBtn.disabled = true;
    startBtn.disabled = false;  
    
  clearInterval(intervalId);  
});
