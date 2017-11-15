$(document).ready(function() {
    $("#jdom a").click(function() {
        $(this).prev("div").toggle();
        if ($(this).prev("div").is(":visible")) {
            $(this).text("Show less");
        } else {
            $(this).text("Show more");
        }
    });
});