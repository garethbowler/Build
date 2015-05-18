
function checkWidth(init)
{
    /*If browser resized, check width again */
    if ($(window).width() > 990) {
        $('#nav').addClass('affix');

    }
    else {
        if (!init) {
            $('#nav').removeClass('affix');
        }
    }
}

$(document).ready(function() {
    checkWidth(true);

    $(window).resize(function() {
        checkWidth(false);
    });
});