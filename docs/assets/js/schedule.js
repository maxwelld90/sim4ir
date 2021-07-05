window.addEventListener('load', function() {
    if (pageTitle && pageTitle === 'Schedule') {
        convertTimesToLocal();
    }
});

function convertTimesToLocal() {
    let statusElement = document.querySelector('#timezone-status');



    statusElement.innerHTML = "Schedule times advertised below have been converted to your computer's local timezone.";
}