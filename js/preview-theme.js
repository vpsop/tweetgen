// Changing theme attribute through radio buttons
$("#light").click(function () { 
    $('#preview-container').attr("theme", "light");
});

$("#dim").click(function () {
    $('#preview-container').attr("theme", "dim");
});

$("#dark").click(function () {
    $('#preview-container').attr("theme", "dark");
});


// Listener for attribute change and action

var previewBox = document.querySelector('#preview-container');

var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.type == "attributes") {
            var attributeChanged = mutation.attributeName;
            if (attributeChanged == "theme") {
                var value = $('#preview-container').attr(attributeChanged);
                if (value == "dim") {
                    $('#preview-container').removeClass("preview-dark");
                    $('#preview-container').addClass("preview-dim");
                    $('.dim-white-text').addClass("white-text");
                    $('.dim-grey-text').addClass("grey-text");

                } else if (value == "light") {
                    $('#preview-container').removeClass("preview-dim");
                    $('#preview-container').removeClass("preview-dark");
                    $('.dim-white-text').removeClass("white-text");
                    $('.dim-grey-text').removeClass("grey-text");
                }else if (value == "dark") {
                    $('#preview-container').addClass("preview-dark");
                    $('.dim-white-text').addClass("white-text");
                    $('.dim-grey-text').addClass("grey-text");
                }
            }
            
        }
    });
});




observer.observe(previewBox, {
    attributes: true //configure it to listen to attribute changes
});

