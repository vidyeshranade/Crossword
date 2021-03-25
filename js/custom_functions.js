
function getData(title)
{
    switch(title)
    {
        case "hms101":
            document.getElementById("loadPuzzFile").src = "puzzles/script_dc_आनंदबक्षी_16_March_2021_2107.js";									
            // $( "#puzzList" ).hide( "slow", function() {
            //     alert(  "You time starts now...");
            // });											
            break;
        case "hms102":
            document.getElementById("loadPuzzFile").src = "puzzles/script_dc_आनंदबक्षी_16_March_2021_2102.js";									
            // $( "#puzzList" ).hide( "slow", function() {
            //     alert(  "You time starts now...");
            // });											
            break;
        case "hms103":
            document.getElementById("loadPuzzFile").src = "puzzles/script_dc_आनंदबक्षी_16_March_2021_2105.js";	
            // $( "#puzzList" ).hide( "slow", function() {
            //     alert(  "You time starts now...");
            // });											
            break;
            default:
            alert(  "Coming soon ...");
            void(0);
    }
    alert( "You time started now...");
    // hide all select elements
    $("select").hide();
    countDownTimer();
}

// VR: added to expand the Across/ Down clues section
function showAccordian(id) {
    var x = document.getElementById(id);
    var y = document.getElementById('acrossBtn');
    var z = document.getElementById('downBtn');
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        if (id === 'across') {
            y.innerHTML = 'Close Across';					
        } else if (id === 'down') {
            z.innerHTML = 'Close Down';					
        }
    } else { 
        x.className = x.className.replace(" w3-show", "");
        if (id === 'across') {
            y.innerHTML = 'Open Across';					
        } else if (id === 'down') {
            z.innerHTML = 'Open Down';					
        }
    }
}

// VR: added to show timer
function countDownTimer() {
    // Set the date we're counting down to
    // var countDownDate = new Date("Mar 18, 2021 12:52:00").getTime();
    var countDownDate = new Date().getTime() + (1000 * 60  * 15) // added 15 minutes
    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
        
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
        
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    // Output the result in an element with id="countDownTimer"
    //   document.getElementById("countDownTimer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    document.getElementById("countDownTimer").innerHTML = 'Time Remaining: ' + minutes + "m " + seconds + "s ";
        
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countDownTimer").innerHTML = "EXPIRED";
    }
    }, 1000);

}

