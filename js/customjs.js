$(document).ready(function(){
    $("#homeHeading").mouseenter(function(){
        $("#homeHeading").slideUp("slow");
    });
   $("#homeparagraph").mouseleave(function(){
        $("#homeparagraph").slideDown("slow");
    });
     
});