var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var period = document.getElementById("period");
var darkModeToggle = document.getElementById('darkModeToggle');
var clock = document.getElementById('clock');

darkModeToggle.addEventListener('change', function() {
    if (darkModeToggle.checked) {
        enableDarkMode();
    } else {
        enableLightMode();
    }
});

function enableDarkMode() {
    document.body.classList.add('dark-mode');
    document.querySelector('.custom-control-label').textContent = 'Disable Light Mode';
    clock.style.boxShadow = '0px 0px 20px 5px rgba(0, 0, 0, 0.5)';
}

function enableLightMode() {
    document.body.classList.remove('dark-mode');
    document.querySelector('.custom-control-label').textContent = 'Enable Dark Mode';
    clock.style.boxShadow = '';
}

function digitalClock() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    // Convert hour to 12-hour format and determine AM/PM
    period.textContent = (hour >= 12) ? "PM" : "AM";
    hour = (hour % 12) || 12; // Convert midnight (0) to 12

    // Add leading zeros to minutes and seconds if they are less than 10
    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    // Update the text content of the clock elements
    hours.textContent = hour;
    minutes.textContent = min;
    seconds.textContent = sec;
}

setInterval(digitalClock, 1000);
