// use moment to get todays current day and time, and to display which hours are in the future and which are in the past, and the current hour
//use if else statments inside function using moment, if current hour green if else grey, if future red

//use jquery UI to create and append elements to row(li?) for each hour(add class = col-12 for each loop)


// GIVEN I am using a daily planner to create a schedule

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours (9-5)

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// add click event with form, save to local storage, use JSON and display in that hour

var currentDay = $("#currentDay")
var timeBlocksEl = $("#timeblocks")

function currentDay(){
    // check out moment formats
    var today= moment()
    currentDay.text(today);
}

function hours(){
    // 9-5, current hour, past hours, future hours
    var timeBlocks= moment()
}

//if i know what the current hour is do i need to know what the future and past hours are?
//do i need to make a separate function for current future and past hours?
//how do i create and append collumns if theyre elements created using Bootstrap layout? //add class or id?
//am i supposed to use a for each loop to display each hour?
//look up jquery ui timeblocks/hourly planner
// can i create a for each loop that displays each hour and appends a collumn or do they all have to be separate elements in html?


