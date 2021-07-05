window.addEventListener('load', function() {
    if (pageTitle && pageTitle === 'Schedule') {
        convertTimesToLocal();
    }
});

function convertTimesToLocal() {
    let statusElement = document.querySelector('#timezone-status');
    let offset = getTimezoneOffset();
    let timezoneString = getTimezoneString();

    console.log(offset);
    console.log(timezoneString);


    statusElement.innerHTML = "<strong>Schedule times advertised below have been converted to your computer's local timezone (" + timezoneString + ").</strong>";
}

function getTimezoneString() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

function getTimezoneOffset() {
    return new Date().getTimezoneOffset();
}