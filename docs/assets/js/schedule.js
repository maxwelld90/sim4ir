window.addEventListener('load', function() {
    if (pageTitle && pageTitle === 'Schedule') {
        convertTimesToLocal();
    }
});

function convertTimesToLocal() {
    let statusElement = document.querySelector('#timezone-status');
    let toConvert = document.querySelectorAll('.time');
    let offset = getTimezoneOffset();
    let timezoneString = getTimezoneString();

    for (let timeElement of toConvert) {
        console.log(timeElement);
    }
    
    statusElement.innerHTML = "<strong>Schedule times advertised below have been converted to your computer's local timezone (<span class='highlighted'>" + timezoneString + "</span>).</strong>";
}

function getTimezoneString() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

function getTimezoneOffset() {
    return new Date().getTimezoneOffset();
}