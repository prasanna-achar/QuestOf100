function updateClock(){
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');

    let now = new Date();

    function padTwo(value){
        return value.toString().padStart(2, '0');
    }

    let seconds = now.getSeconds()
    let minutes = now.getMinutes()
    let hours = now.getHours() % 12 || 12;

    timeElement.textContent = `${padTwo(hours)}:${padTwo(minutes)}:${padTwo(seconds)} ${
        now.getHours > 12 ? "PM": "AM"
    }`
     dateElement.textContent = `${now.toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })}`
}

const timerId = setInterval(updateClock, 1000)

updateClock()