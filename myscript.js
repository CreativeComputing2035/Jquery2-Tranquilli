$(document).ready(function(){
    "use strict";
    $("#myList li:first").on("mouseover", function(evt){
        $(this).css("color","green");
    });
    
    $("#square1").on("click", swapMe);
    //! used to change square one text to quote//
    $("#myList li:nth-child(2)").on("click", swapMe1);
    //! used to change child 3 & 4 when clicking on 2//
    $("#square1").on("dblclick", swapMe2);
    //! used to change child 3 & 4 when clicking on 2//
    $("#square2").on("mouseover", mouseover);
    //! used to change //
    $("#myList li:nth-child(3)").click(myFunction2);
    $("#myList li:nth-child(4)").on("click", myFunction3);
    $("#myList li:nth-child(5)").one("click", function(evt) {
});
});

function swapMe1() {
    var tempText = $("#myList li:nth-child(3)").text();
    $("#myList li:nth-child(3)").text($("#myList li:nth-child(4)").text());
    $("#myList li:nth-child(4)").text(tempText);
};
function myFunction2() {
    $(this).css({"text-shadow":"4px 4px #FFFF00","font-size":"300%"});
}
function myFunction3() {
    $(this).toggleClass("long-shadow");
};
function myFunction4(myObject) {
    $(myObject).slideDown()
        .delay(2000)
        .animate({left: '+=700px'})
        .animate({top: '-=400px',
                  height: '500px'}, "slow");
}
function swapMe() {
    //! swaping out the text for box one with the text from "hey"//
    $("#square1").text($("#hey").text());
};
function swapMe2() {
    //! swaping out the text for box one with "newquote" on double click//
    $("#square1").text($("#newquote").text());
};
function mouseover() {
    //! Creating the animation function on box three with mouseover//
    $("#square3").animate({right: '450px'});
};
$(document).ready(function(){
    $("#love").click(function(){
        $("square2").replaceWith();
    });
});






