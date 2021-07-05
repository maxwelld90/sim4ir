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

    let sampleStr = '2012/04/20 10:10:30 +0200';

    convertTimezone(sampleStr, timezoneString);

}

function getTimezoneString() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

/* Function from https://stackoverflow.com/a/54127122 */
function convertTimezone(date, timezoneString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: timezoneString})); 
}