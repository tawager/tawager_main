/**
 * Created by a_wags25 on 1/21/15.
 */
$(document).ready(function(){


    var $overlay = $('<div id= "overlay"></div>');
    var $image = $('<img>');
    var $caption = $('<p class="overlay_caption"></p>');

//add image to overlay
    $overlay.append($image);

//add overlay to page
    $("body").append($overlay);

//capture click event and prevent anchor from default link behavior
    $("a.image").click(function(event){
        event.preventDefault();

        var imageAnchor = $(this).attr("href");
        //relaunch overlay with clicked image
        $image.attr("src", imageAnchor);



        $overlay.show();

        var captionText= $(this).children("p.caption").text();
        $caption.text(captionText);

    });

//hide overlay when clicked
    $overlay.click(function () {
        $overlay.hide();
    });


});