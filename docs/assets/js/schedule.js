window.addEventListener('load', function() {
    if (pageTitle && pageTitle === 'Schedule') {
        convertTimesToLocal();
    }
});

function convertTimesToLocal() {
    let statusElement = document.querySelector('#timezone-status');
    let offset = getTimezoneOffset();

    console.log(offset);


    statusElement.innerHTML = "<strong>Schedule times advertised below have been converted to your computer's local timezone.</strong>";
}

function getTimezoneString() {

}

function getTimezoneOffset() {
    return new Date().getTimezoneOffset();
}