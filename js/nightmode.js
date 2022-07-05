$("#night-mode-btn").click(function () {
    var pngSource = $(".night-mode-img").attr("src")
    if (pngSource === "images/night.png") {
        // Currently : Day --> Night
        $(".night-mode-img").attr("src", "images/day.png");
        $("body").addClass("night-mode-enabled");
        $(".night-mode-img").attr("style", "background-color: #FFFFFF;");
        $(".side-heading").addClass("white-text");
        $("h5").addClass("white-text");
        $(".form-check-label").addClass("white-text");
        $(".footer-area").addClass("dark-footer");

    } else {
        // Night --> Day
        $(".night-mode-img").attr("src", "images/night.png");
        $("body").removeClass("night-mode-enabled");
        $(".side-heading").removeClass("white-text");
        $("h5").removeClass("white-text");
        $(".form-check-label").removeClass("white-text");
        $(".footer-area").removeClass("dark-footer");

    }


});