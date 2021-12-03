// displays the date and time on top of the page 
//stores moment function to a variable called "today"
var today = moment();

//sets up the way the today's date is displayed at the top of the page
$('#currentDay').text(today.format('dddd, MMMM Do'));

// creates a listener for the save button
$(document).ready(function(){

    $('.saveBtn').on('click', function(){
        var timeSaved = $(this).parent().attr('id');
        var textSubmitted = $(this).siblings('.description').val();
        
        localStorage.setItem(timeSaved, textSubmitted); // saves user input to local storage in an array
    })// closes listener 

    $('.deleteBtn').on('click', function(){
        var timeSaved = $(this).parent().attr('id');
        var textSubmitted = $(this).siblings('.description').val();
            
        localStorage.removeItem(timeSaved, textSubmitted); // saves user input to local storage in an array
    })// closes listener 

    

    // a function that keeps up with current time and acts accordingly. Bloccks the ability to submit text on past time blocks
    function liveTimeUpdate(){ 

        var currentTime = today.hour();

        $('.time-block').each(function (){

            var blockPastTime = parseInt($(this).attr('id'));// iterates through the schedule chart according to the time

            // if the the current hour is greater than the past hour the function will clasify it as the past
            if(blockPastTime < currentTime){
                $(this).removeClass('future');
                $(this).removeClass('present');
                $(this).addClass('past');
            } 
            
            //classifies it time as the present if current time is the same as the block time 
            else if(blockPastTime == currentTime){
                $(this).removeClass('future');
                $(this).removeClass('past');
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

    // saves data to local storage for each hour-------------------
    $('#9am .description').val(localStorage.getItem('9am'));
    $('#10am .description').val(localStorage.getItem('10am'));
    $('#11am .description').val(localStorage.getItem('11am'));
    $('#12pm .description').val(localStorage.getItem('12pm'));
    $('#1pm .description').val(localStorage.getItem('1pm'));
    $('#2pm .description').val(localStorage.getItem('2pm'));
    $('#3pm .description').val(localStorage.getItem('3pm'));
    $('#4pm .description').val(localStorage.getItem('4pm'));
    $('#5pm .description').val(localStorage.getItem('5pm'));
    // ------------------------------------------------------------
    

    // removes data from local storage-------------------------------

    var deleteClicked = document.getElementsByClassName('deleteBtn');
    
    // listens for the delete button to be clicked so it can remove data from the local storage
    deleteClicked.onclick = function(){ 
        $('#9am .description').val(localStorage.removeItem('9am'));
        $('#10am .description').val(localStorage.removeItem('10am'));
        $('#11am .description').val(localStorage.removeItem('11am'));
        $('#12pm .description').val(localStorage.removeItem('12pm'));
        $('#1pm .description').val(localStorage.removeItem('1pm'));
        $('#2pm .description').val(localStorage.removeItem('2pm'));
        $('#3pm .description').val(localStorage.removeItem('3pm'));
        $('#4pm .description').val(localStorage.removeItem('4pm'));
        $('#5pm .description').val(localStorage.removeItem('5pm'));
    }
    // ---------------------------------------------------------------
    
    liveTimeUpdate();// calls for liveTimeUpdate function so it can use CSS to update the schedule chart accordingly  
})// closes dom