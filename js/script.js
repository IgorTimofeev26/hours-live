const time = document.querySelector(".box__hours #time");
const buttonStart = document.querySelector(".button__start")
const input = document.querySelector("input")


setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "АМ";
    if (hours > 12) {
        day_night = "РМ";
        // hours = hours - 12;
    }
    if(seconds < 10) {
        seconds = '0' + seconds;
    }
    if(minutes < 10) {
        minutes = '0' + minutes
    }
    if(hours < 10) {
        hours = '0' + hours;
    }
    time.textContent = hours + ':' + minutes + ':' + seconds + ' ' + day_night;
})

const watch = document.querySelector('#watch');
let miliseconds = 0;
let timer;

const startWatch = () => {
    watch.classList.remove('pause');
    clearInterval(timer)
    timer = setInterval (()=> {
        miliseconds += 10;
        let dateTimer = new Date(miliseconds);
        watch.innerHTML = 
            ('0' + dateTimer.getUTCHours()).slice(-2) + ':' +    
            ('0' + dateTimer.getUTCMinutes()).slice(-2) + ':' +    
            ('0' + dateTimer.getUTCSeconds()).slice(-2);       
            // ('0' + dateTimer.getUTCMilliseconds()).slice(-3,-1);  
    },10)
};




const pauseWatch = () => {
    watch.classList.add('paused');
    clearInterval(timer);
};

const resetWatch = () => {
    watch.classList.remove('pause');
    clearInterval(timer);
    miliseconds = 0;
    watch.innerHTML = '00:00:00';
    
};
document.addEventListener('click', (e) => {
    const element = e.target;
    if (element.id === 'start') startWatch();
    if (element.id === 'pause') pauseWatch();
    if (element.id === 'reset') resetWatch();
})
let popup = document.querySelector('.popup-bg')
document.addEventListener('click', (e) => {
    const element = e.target;
})
const settingButton = document.querySelector('.open-popup')
settingButton.addEventListener('click', function() {
    
    popup.style.display = popup.style.display === 'none' ? 'block' : 'none'
})
document.querySelector('.close-popup').addEventListener('click', function() {
    popup.style.display = popup.style.display === 'none' ? 'block' : 'none'
})

// let input = document.getElementById("myTime").value;
const startBottun = document.querySelector('.start__timer')
const timeCount = document.querySelector('.time-count')
    
document.querySelector('.button__start').addEventListener('click', function() {
    popup.style.display = popup.style.display === 'none' ? 'block' : 'none'
    // console.log(input.value)
    timeCount.textContent = input.value
   
    // let date = new Date()
    // let hours = date.getHours();
    // let minutes = date.getMinutes();
    // let seconds = date.getSeconds();
    // timeCount.textContent = hours + ':' + minutes + ':' + seconds
})



let timerInterval;
let remainingTime = 0
function startTimer () {
   const [startHours, startMinutes, startSeconds] = timeCount.textContent.split(":").map(Number)
   remainingTime = startHours * 3600 + startMinutes * 60 + startSeconds;

   if (remainingTime < 0) {
    stopTimer()
  }
  timerInterval = setInterval(updateTimer, 1000);
  updateTimer();
}

function stopTimer() {
    clearInterval(timerInterval);
}

function updateTimer() {
    if (remainingTime <= 0) {
      // Если оставшееся время истекло, останавливаем таймер и выводим сообщение
      stopTimer();
    } else {
      // Иначе, вычисляем часы, минуты и секунды из оставшегося времени и обновляем отображение
      const hours = Math.floor(remainingTime / 3600);
      const minutes = Math.floor((remainingTime % 3600) / 60);
      const seconds = remainingTime % 60;
      timeCount.textContent = `${hours}:${minutes}:${seconds}`;
      remainingTime--; // Уменьшаем оставшееся время на 1 секунду
    }
}


const buttonStartTimer = document.querySelector(".start_timer")
buttonStartTimer.addEventListener("click", startTimer);
document.querySelector(".pause_timer").addEventListener("click", stopTimer);
document.querySelector(".reset_timer").addEventListener("click", function (){
    clearInterval(timerInterval);
    timeCount.textContent = '00:00:00'
})
  