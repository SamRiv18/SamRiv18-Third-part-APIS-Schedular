// displays the date and time on top of the page 
var today = moment();
$('#currentDay').text(today.format('dddd, MMMM Do'));

// creates a listerner for the save button
$(document).ready(function(){

    $(".saveBtn").on("click", function(){
        var timeSaved = $(this).parent().attr("id");
        var textSubmitted = $(this).siblings(".description").val();
        
        localStorage.setItem(timeSaved, textSubmitted); // saves user input to local storage in an array
    })

})