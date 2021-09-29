//sets date at the top of the page
var now = moment().format('dddd MMM Do');
$("#currentDay").text(now);

//sets current hour to two-digit military time
var currentHour = moment().format('HH');

//iterates over each input tag to get the hour and compare it to the current hour
$("input").each( function(){
    var dataHour = $(this).attr("data-hour")
    //turns future hours green
    if (dataHour > currentHour) {
        $(this).addClass("future")
    }
    //turns past hours gray
    else if (dataHour < currentHour) {
        $(this).addClass("past")
    }
    //turns current hour red
    else $(this).addClass("present")
})

var saveBtn = $('.saveBtn');

//creates variables for each input field
var nineInput = $('#input-9AM');
var tenInput = $('#input-10AM');
var elevenInput = $('#input-11AM');
var twelveInput = $('#input-12PM');
var oneInput = $('#input-1PM');
var twoInput = $('#input-2PM');
var threeInput = $('#input-3PM');
var fourInput = $('#input-4PM');
var fiveInput = $('#input-5PM');

//creates array for input values to be updated from local storage
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

//save button function - saves input from specific time block
saveBtn.on('click', function(event) {
    event.preventDefault();
    var siblingInput = ($(this).siblings("input")[0]); 
    saveEventData(siblingInput);
})

//function to compare event times (come from click events) to time blocks
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

    //updates input in local storage
    localStorage.setItem("calendarEvents", JSON.stringify(calendarEvents));
}

//checks local storage and updates global variable 
function displayCalendarEvents() {
    if (localStorage.getItem("calendarEvents") !== null) {
            calendarEvents = JSON.parse(localStorage.getItem("calendarEvents"));
            nineInput.val(calendarEvents.nineInput);
            tenInput.val(calendarEvents.tenInput);
            elevenInput.val(calendarEvents.elevenInput);
            twelveInput.val(calendarEvents.twelveInput);
            oneInput.val(calendarEvents.oneInput);
            twoInput.val(calendarEvents.twoInput);
            threeInput.val(calendarEvents.threeInput);
            fourInput.val(calendarEvents.fourInput);
        }
    }
displayCalendarEvents();
