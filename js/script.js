

var currentDay = $("#currentDay")
var timeBlocksEl = $("#timeblocks")



var today= moment().format('dddd, MMMM Do')
 currentDay.text(today);

$('.saveBtn').on('click', function (){
    var value = $(this).siblings('.description').val()
    var key = $(this).parent().attr('id')

    localStorage.setItem(key , value)
})

function hours(){
   
    var currentHour= moment().hours();

    

    $('.row').each(function(){
        var timeBlockhour = parseInt($(this).attr('id'))

        if(timeBlockhour < currentHour){
            $(this).addClass('past')
        } else if(timeBlockhour === currentHour){
            $(this).addClass('present')
        } else{
            $(this).addClass('future')
        }
    })

}

hours()


$('#9 .description').val(localStorage.getItem("9"))
$('#10 .description').val(localStorage.getItem("10"))
$('#11 .description').val(localStorage.getItem("11"))
$('#12 .description').val(localStorage.getItem("12"))
$('#13 .description').val(localStorage.getItem("13"))
$('#14 .description').val(localStorage.getItem("14"))
$('#15 .description').val(localStorage.getItem("15"))
$('#16 .description').val(localStorage.getItem("16"))
$('#17 .description').val(localStorage.getItem("17"))

