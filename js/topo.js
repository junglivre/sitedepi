$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".irTopo").fadeIn();
        } else {
            $(".irTopo").fadeOut();
        }
    });
    $(".irTopo").click(function () {
        scroll(0, 0)
    });
});