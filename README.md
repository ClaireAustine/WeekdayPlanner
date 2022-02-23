# Daily Planner
### This is a simple daily planner I made to help better understand Jquery, JqueryUI and moment.

It displays the current date and standard working hours with spots to fill in events and tasks. The current hour is displayed in red, future hours in green and past hours in grey. Users can type in an event or task for each hour and save it so if they refresh the page it remains displayed.

 I did this by using moment to get the current date and hour, then a for each loop to loop through each row and an if else statement to check if the hour is present, past or future. I also used jquery on() to add an event listener to the save buttons to save the description section of each row inside the local storage.

 !["top of page"](https://github.com/ClaireAustine/WeekdayPlanner/blob/main/1.png)
 !["tasks added on page"](https://github.com/ClaireAustine/WeekdayPlanner/blob/main/2.png)
 !["example of present/future/past hour colors"](https://github.com/ClaireAustine/WeekdayPlanner/blob/main/3.png)

 https://claireaustine.github.io/WeekdayPlanner/