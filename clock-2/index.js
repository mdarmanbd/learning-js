

setInterval(function(){
    let newTime = new Date();
    let hourDeg = newTime.getHours();
    let minDeg = newTime.getMinutes();
    let secDeg = newTime.getSeconds();

    hourRotation = 30*hourDeg + minDeg/2;
    minRotation = 6*minDeg;
    secRotation = 6*secDeg;

    document.getElementById('hour').style.transform = `rotate(${hourRotation}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minRotation}deg)`;
    document.getElementById('second').style.transform = `rotate(${secRotation}deg)`;

}, 1000);