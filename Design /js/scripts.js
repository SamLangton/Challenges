/*
The javascript file should hide/display content when the button is clicked as per the example given.
Use straight javascript and avoid JQuery. You can use any resource to set this up. 
Some hints are given below but you can use any structure or approach of your choosing.

*/

var button = document.querySelector('#toggle');


button.addEventListener('click', function(e){
    var y = document.getElementById("toggle");
    var x = document.getElementById('table');
    if (x.style.display === "flex") {
        x.style.display = "none";
        y.value = "SHOW CONTENT";
        
    } 
    else {
        x.style.display = "flex";
        y.value = "HIDE CONTENT";
    }
})