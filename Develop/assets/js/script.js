// displays the date and time on top of the page 
var today = moment();
$('#currentDay').text(today.format('dddd, MMMM Do'));

// creates a listener for the save button
$(document).ready(function(){

    $('.saveBtn').on('lick', function(){
        var timeSaved = $(this).parent().attr('id');
        var textSubmitted = $(this).siblings('.description').val();
        
        localStorage.setItem(timeSaved, textSubmitted); // saves user input to local storage in an array
    })// closes listener 

    // a function that keeps up with current time and acts accordingly. Bloccks the ability to submit text on past time blocks
    function liveTimeUpdate(){ 

        var currentTime = moment().hour();

        $('.time-block').each(function (){

            var blockPastTime = parseInt(($this).attr('id').split('hour')[1]);// iterates through the schedule chart according to the time

            // if the the current hour is greater than the past hour the function will clasify it as the past
            if(blockPastTime < currentTime){
                $(this).addClass('past');
            } 
            
            //classifies it time as the present if current time is the same as the block time 
            else if(blockPastTime == currentTime){
                $(this).removeClass('past');
                $(this).removeClass('future');
                $(this).addClass('present');
            }

            //classifies it time as the future
            else{
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }

        })// closes loop for the schedule chart

    }// closes fucntion that checks for past, present or future time

    

    

    
})// closes dom