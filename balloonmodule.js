$(document).ready(function() {
    
    var bubble_0 = $('.bubble');
    var bubble_1 = $('.bubble1');
    var bubble_2 = $('.bubble2');
    var bubble_3 = $('.bubble3');
    var bubble_4 = $('.bubble4');
    var bubble_5 = $('.bubble5');
    var bubble_6 = $('.bubble6');
    var bubble_7 = $('.bubble7');


    var currentBubble0x = 0;
    var currentBubble0Y = 0;
    var currentBubble1X = 0;
    var currentBubble1Y = 0;
    var currentBubble2X = 0;
    var currentBubble2Y = 0;
    var currentBubble3X = 0;
    var currentBubble3Y = 0;
    var currentBubble4X = 0;
    var currentBubble4Y = 0;
    var currentBubble5X = 0;
    var currentBubble5Y = 0;
    var currentBubble6X = 0;
    var currentBubble6Y = 0;
    var currentBubble7X = 0;
    var currentBubble7Y = 0;
    
    var currentBubble=[[]];

    var bubble;

    function createBaloon() {

        selector = [bubble_0,bubble_1,bubble_2,bubble_3,bubble_4,bubble_5,bubble_6,bubble_7];

        for(var i=0;i<8;i++){

            var p = [300, 400, 500, 600, 700, 800, 850, 900];

            selector[i].css({
            "left": p[i],
            "top": "500px"
             });

            selector[i].animate({
                "top": "-60px"
            }, p[i]*10);

            selector[i].animate({ "top": p[i]-200+"px" }, p[i]*8);

        }

    }
    setInterval(createBaloon, 2000);

    function inter() {
        currentBubble0Y = bubble_0.offset().top;
        currentBubble0x = bubble_0.offset().left;
        currentBubble1Y = bubble_1.offset().top;
        currentBubble1X = bubble_1.offset().left;
        currentBubble2Y = bubble_2.offset().top;
        currentBubble2X = bubble_2.offset().left;
        currentBubble3Y = bubble_2.offset().top;
        currentBubble3X = bubble_2.offset().left;
        currentBubble4Y = bubble_2.offset().top;
        currentBubble4X = bubble_2.offset().left;
        currentBubble5Y = bubble_2.offset().top;
        currentBubble5X = bubble_2.offset().left;
        currentBubble6Y = bubble_2.offset().top;
        currentBubble6X = bubble_2.offset().left;
        currentBubble7Y = bubble_2.offset().top;
        currentBubble7X = bubble_2.offset().left;


        var hei = parseInt(bubble_0.css("height").slice(0, -2));

    }

});
