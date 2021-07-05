window.addEventListener('load', function() {
    if (pageTitle && pageTitle === 'Schedule') {
        convertTimesToLocal();
    }
});

const OFFSET = "+0200"; // What timezone is the conference scheduled in? (CEST)

function convertTimesToLocal() {
    let statusElement = document.querySelector('#timezone-status');
    let toConvert = document.querySelectorAll('.time');
    let timezoneList = document.querySelectorAll('.timezone');
    let timezoneString = getTimezoneString();

    for (let timeElement of toConvert) {
        convertTimes(timeElement, timezoneString);
    }

    for (let timezone of timezoneList) {
        timezone.innerText = timezoneString;
    }
    
    statusElement.innerHTML = "<u><strong>Schedule times advertised below have been converted to your computer's local timezone (<span class='highlighted'>" + timezoneString + "</span>).</strong></u>";
}

function convertTimes(element, timezoneString) {
    let bothTimes = element.innerText;
    let timeSplit = bothTimes.split('-');
    let newString = '';

    for (let time of timeSplit) {
        let timeStr = "2021-07-15 " + time + ":00 " + OFFSET;
        let dateObject = convertTZ("2021-07-15 " + time + ":00 " + OFFSET, timezoneString);

        let hours = dateObject.getHours().toString();
        let minutes = dateObject.getMinutes().toString();

        console.log(dateObject);

        if (hours.length == 1) {
            hours = "0" + hours;
        }
        
        if (minutes.length == 1) {
            minutes = "0" + minutes;
        }

        newString = newString + hours + ":" + minutes + "-";
    }
    
    newString = newString.slice(0, -1);
    element.innerText = newString;
}

function getTimezoneString() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

/* Function from https://stackoverflow.com/a/54127122 */
function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
}