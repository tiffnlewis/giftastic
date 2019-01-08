$(document).ready(function () {

    var fails = ["Skateboarding", "Running", "Cupcakes", "Dogs"];

    function displayFailGifs() {

        var fails = $(this).attr("data-name");

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=fail+" + fails + "&api_key=6IRaFrUJY78MeCrZJgYYVXYo1QdBrvcy&limit=10";

        $.ajax({

            url: queryURL,

            method: "GET"

        }).then(function (response) {

            var gif = $("<div id = 'fails'>");

            var rating = response.rating;

            var pRating = $("<p>").text("Rating: " + rating);

            gif.append(pRating);

            $("#fail-gifs").prepend(gif);

            var imgURL = response.images

            var image = $("<img>").attr("src", imgURL);

            gif.append(image);

        });

    }

    function renderButtons() {

        $("#fail-gifs-btn").empty();

        for (var i = 0; i < fails.length; i++) {

            var a = $("<button>");

            a.addClass("fails");

            a.addClass("btn btn-primary");

            a.attr("data-name", fails[i]);

            a.text(fails[i]);

            $("#fail-gifs-btn").prepend(a);
        }
    }

    $("#add-fail").on("click", function (event) {

        event.preventDefault();

        var fail = $("#fail-search").val().trim();

        fails.push(fail);

        renderButtons();

    });

    $(document).on("click", ".btn", displayFailGifs);

    renderButtons();

});