var i = 0;
var text = "FEATURES";
var speed = 100;
var images;
// FOR PRODUCT TITLE TYPING
function typeWriter(){
    if(i < text.length) {
        document.getElementById("producttitle").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}  


// FOR FADING IN AND OUT
$(document).ready(function(){
    $(window).on('load', function(){ // load the window
        // hide elements for fade in
        $("#productFeature").hide().fadeIn(2000);
        $("#extraFeatTable").hide();
    });
    $("#extraFeatures").mouseover(function(){
        $("#extraFeatTable").fadeIn(1000);
    });
});


 
