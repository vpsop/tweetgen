// ! Global Variables
var tweet_numbers_container_hidden = true;

var retweets_hidden = false;
var quotes_hidden = false;
var likes_hidden = false;

var current_tweet_characters = 0;


// Profile picture live preview

$("#pfp").change(function () {
    var input = this;
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $("#preview-pfp")
                .attr('src', e.target.result)
        };
        reader.readAsDataURL(input.files[0]);
    }

});

// Name Live preview

$("#name").keyup(function () {
    var $this = $(this);
    $(".preview-name_text").text($this.val());
});

//  Verified Live preview

$("#isVerified").change(function () {
    var $this = $(this);
    console.log($this[0].checked);

    if ($this[0].checked) {
        $("#preview-verified").show();
    } else if (!$this[0].checked) {
        $("#preview-verified").hide()
    }
});

// Username Live preview

$("#username").keyup(function () {
    var $this = $(this);
    $(".preview-username").text($this.val());
});

// Limit tweet characters

function maxLength(element) {
    if (!('maxLength' in element)) {
        var max = element.attributes.maxLength.value;
        element.onkeypress = function () {
            if (this.value.length >= max) {
                return false;
            };
        }
    }
}

// Tweet Live Preview

$("#tweet-text").keyup(function () {
    var $this = $(this);
    var value = $this.val();
    var valueLength = value.length;
    $(".preview-tweet_text").text($this.val());
    maxLength(document.getElementById("tweet-text"));
    $(".current-characters").text(valueLength.toString());
});

//  Image Live Preview

$("#tweet_image").change(function () {
    var input = this;
    if (input.files && input.files[0]) {

        $("#preview-tweet_image").show();

        var reader = new FileReader();
        reader.onload = function (e) {
            $("#preview-tweet_image")
                .attr('src', e.target.result)
        };
        reader.readAsDataURL(input.files[0]);
    }

});

// Time Live Preview

$("#tweet_time").change(function () {
    var $this = $(this);
    var time = $this.val();

    var hhmm = time.split(":");
    var hh = hhmm[0];
    var mm = hhmm[1];
    var ampm = "AM"

    if (hh > 12) {
        hh = hh - 12;
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    var formattedTime = hh + ":" + mm + " " + ampm;

    $(".preview-time").text(formattedTime);
    console.log(formattedTime);
});

// Date Live Preview

$("#tweet_date").change(function () {
    var $this = $(this);
    var date = $this.val();
    var dateArray = date.split("-");
    var yy = dateArray[0];
    var mm = dateArray[1];
    var dd = dateArray[2];

    var mmStr = "";

    // console.log(parseInt(mm));
    // console.log(typeof(mm));

    switch (parseInt(mm)) {
        case 1:
            mmStr = "Jan";
            break;
        case 2:
            mmStr = "Feb";
            break;
        case 3:
            mmStr = "Mar";
            break;
        case 4:
            mmStr = "Apr";
            break;
        case 5:
            mmStr = "May";
            break;
        case 6:
            mmStr = "Jun";
            break;
        case 7:
            mmStr = "Jul";
            break;
        case 8:
            mmStr = "Aug";
            break;
        case 9:
            mmStr = "Sept";
            break;
        case 10:
            mmStr = "Oct";
            break;
        case 11:
            mmStr = "Nov";
            break;
        case 12:
            mmStr = "Dec";
            break;
        default:
            mmStr = "Jan";
            break;
    }

    if (parseInt(dd) < 10) {
        var ddArray = Array.from(dd);
        dd = ddArray[1];
    }

    $(".preview-month").text(mmStr);
    $(".preview-day").text(dd);
    $(".preview-year").text(yy);
});

// Client Live Preview

$("#tweet_client").keyup(function () {
    var $this = $(this);
    $(".preview-client").text($this.val());

    var clientStr = $this.val();

    if (clientStr.length <= 0) {
        $(".client-separator").hide();
    } else {
        $(".client-separator").show();
    }
});

//  Tweet Numbers

function allHidden() {
    if (quotes_hidden && retweets_hidden && likes_hidden) {
        $(".preview-tweet_numbers-container").hide();
        tweet_numbers_container_hidden = true;
    }
}

// Retweets

$("#retweets_number").change(function () {
    var $this = $(this);
    if (tweet_numbers_container_hidden) {
        $(".preview-tweet_numbers-container").show();
        $(".quotes").hide();
        quotes_hidden = true;
        $(".likes").hide();
        likes_hidden = true;
        tweet_numbers_container_hidden = false;
    }
    var count = $this.val();
    if (parseInt(count) > 1) {
        $("#isRetweetsPlural").show();
        $(".retweets").show();
        retweets_hidden = false;
    } else if (parseInt(count) < 1) {
        $("#isRetweetsPlural").show();
        $(".retweets").hide();
        retweets_hidden = true;
        count = "0";
    } else if (parseInt(count) == 1) {
        $("#isRetweetsPlural").hide();
        $(".retweets").show();
        retweets_hidden = false;
    } else {
        $(".retweets").hide();
        retweets_hidden = true;
    }



    $("#preview-retweets_number").text(count);
    allHidden();
});

// Quotes


$("#quotes_number").change(function () {
    var $this = $(this);

    if (tweet_numbers_container_hidden) {
        $(".preview-tweet_numbers-container").show();
        tweet_numbers_container_hidden = false;
        $(".retweets").hide();
        retweets_hidden = true;
        $(".likes").hide();
        likes_hidden = true;

    }

    var count = $this.val();
    if (parseInt(count) > 1) {
        $("#isQuotesPlural").show();
        $(".quotes").show();
        quotes_hidden = false;
    } else if (parseInt(count) < 1) {
        $("#isQuotesPlural").show();
        $(".quotes").hide();
        quotes_hidden = true;

        count = "0";
    } else if (parseInt(count) == 1) {
        $("#isQuotesPlural").hide();
        $(".quotes").show();
        quotes_hidden = false;
    } else {
        $(".quotes").hide();
        quotes_hidden = true;
    }

    $("#preview-quotes_number").text(count);
    allHidden();
});

// Likes

$("#likes_number").change(function () {
    var $this = $(this);

    if (tweet_numbers_container_hidden) {
        $(".preview-tweet_numbers-container").show();
        tweet_numbers_container_hidden = false;
        $(".quotes").hide();
        quotes_hidden = true;
        $(".retweets").hide();
        retweets_hidden = true;

    }

    var count = $this.val();
    if (parseInt(count) > 1) {
        $("#isLikesPlural").show();
        $(".likes").show();
        likes_hidden = false;
    } else if (parseInt(count) < 1) {
        $("#isLikesPlural").show();
        $(".likes").hide();
        likes_hidden = true;

        count = "0";
    } else if (parseInt(count) == 1) {
        $(".likes").show();
        likes_hidden = false;
        $("#isLikesPlural").hide();
    } else {
        $(".likes").hide();
        likes_hidden = true;
    }

    $("#preview-likes_number").text(count);
    allHidden();
});