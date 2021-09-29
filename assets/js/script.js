//input field to save to local storage when save button is clicked
//input field stays when page is refreshed
//current day is displayed at top
//current hour is red
//past hours are grey
//future hours are green

var now = moment().format('dddd MMM Do');
$("#currentDay").text(now);

var saveBtn = $('.saveBtn');

var nineInput = $('#input-9AM');
var tenInput = $('#input-10AM');
var elevenInput = $('#input-11AM');
var twelveInput = $('#input-12PM');
var oneInput = $('#input-1PM');
var twoInput = $('#input-2PM');
var threeInput = $('#input-3PM');
var fourInput = $('#input-4PM');
var fiveInput = $('#input-5PM');

var calendarEvents = {
    nineInput: nineInput.val(),
    tenInput: tenInput.val(), 
    elevenInput: elevenInput.val(),
    twelveInput: twelveInput.val(),
    oneInput: oneInput.val(),
    twoInput: twoInput.val(),
    threeInput: threeInput.val(),
    fourInput: fourInput.val(),
    fiveInput: fiveInput.val(),
};

saveBtn.on('click', function(event) {
    event.preventDefault();
    var siblingInput = ($(this).siblings("input")[0]); 
    console.log(siblingInput.value)
    saveEventData(siblingInput);
})

function saveEventData(siblingInput) {
    var eventTime = siblingInput.id.split('-')[1];
    if (eventTime === "9AM") {
        calendarEvents.nineInput = siblingInput.value;
    }
    else if (eventTime === "10AM") {
        calendarEvents.tenInput = siblingInput.value;
    }
    else if (eventTime === "11AM") {
        calendarEvents.elevenInput = siblingInput.value;
    }
    else if (eventTime === "12PM") {
        calendarEvents.twelveInput = siblingInput.value;
    }
    else if (eventTime === "1PM") {
        calendarEvents.oneInput = siblingInput.value;
    }
    else if (eventTime === "2PM") {
        calendarEvents.twoInput = siblingInput.value;
    }
    else if (eventTime === "3PM") {
        calendarEvents.threeInput = siblingInput.value;
    }
    else if (eventTime === "4PM") {
        calendarEvents.fourInput = siblingInput.value;
    }
    else calendarEvents.fiveInput = siblingInput.value;

    localStorage.setItem("calendarEvents", JSON.stringify(calendarEvents));
}

function renderSavedEvents(){
    
}








//iterate over all the divs(rows) that have a time-block
//first div is labeled "9AM"
//turn time into moment object


// var fakeTime = "09:00:00 CST";
// var timeObj = moment(fakeTime);

//compare moment object to current time


//figure out if this row is past, present, or future
//then apply correct class to row
//moment js compare dates