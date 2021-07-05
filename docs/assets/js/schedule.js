window.addEventListener('load', function() {
    if (pageTitle && pageTitle === 'Schedule') {
        convertTimesToLocal();
    }
});

function convertTimesToLocal() {
    let statusElement = document.querySelector('#timezone-status');
    let toConvert = document.querySelectorAll('.time');
    let timezoneString = getTimezoneString();

    for (let timeElement of toConvert) {
        convertTimes(timeElement, timezoneString);
    }
    
    statusElement.innerHTML = "<strong>Schedule times advertised below have been converted to your computer's local timezone (<span class='highlighted'>" + timezoneString + "</span>).</strong>";
}

function convertTimes(element, timezoneString) {
    let bothTimes = element.innerText;

    console.log(convertTZ("2021-07-05 15:00:00 +0200", "Pacific/Auckland"))

}

function getTimezoneString() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

/* Function from https://stackoverflow.com/a/54127122 */
function convertTZ(date, timezoneString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: timezoneString}));   
}