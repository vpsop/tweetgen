// VAr to hold img dataurl of canvas
var dataURL;

$(document).ready(function () {
    $(".generate-btn-container").show();
});

$(".generate-btn").click(function () { 

    var capture = document.getElementById("preview-container");

    var scroll = $("#preview-container");
    console.log(scroll);
    


    var bgColor = "";
    switch ($("#tweetContainer").attr("theme")) {
        case "dim":
            bgColor = "#15202b";
            break;
        case "dark":
            bgColor = "#000000";
            break;
        case "light":
        default:
            bgColor = "#ffffff";
    }

    var height = $("#preview-container").height();
    var width = $("#preview-container").width();


    html2canvas(capture, {
        allowTaint: true,

        width: width,
        height: height,
        scale: 1,
        scrollX: 0,
        scrollY: 0,
        logging: false,
    }).then(function (canvas) {

        dataURL = canvas.toDataURL();
        $("#generated-img").attr("src", dataURL);
    })
    $("canvas").remove();


    setTimeout(() => {
        $(".download-btn-container").fadeIn("fast");
    }, 600);
    
});

$(".download-btn").click(function () {
    $(".generated-img-container").show();
    var link = document.createElement("a"); 

    document.body.appendChild(link);

    $("body a").attr("href", dataURL);
    $("body a").attr("download", "FakeTweet");

    link.click();
    document.body.removeChild(link);
    

});