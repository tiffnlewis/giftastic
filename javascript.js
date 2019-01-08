$(document).ready(function () {

    var fails = ["Skateboarding", "Running", "Cupcakes", "Dogs"];

    function displayFailGifs() {

        var fail = $(this).attr("data-name");

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=fail+" + fail + "&api_key=6IRaFrUJY78MeCrZJgYYVXYo1QdBrvcy&limit=10";

        $.ajax({

            url: queryURL,

            method: "GET"

        }).then(function (response) {

            console.log(queryURL);

            var gif = $("<div>");

            for (var i = 0; i < 10; i++) {

                var rating = response.data[i].rating;

                var pRating = $("<p>").text("Rating: " + rating);

                gif.append(pRating);
    
                $("#fail-gifs").prepend(gif);
    
                var imgURL = response.data[i].images.fixed_width.url;
    
                var image = $("<img>").attr("src", imgURL);
    
                gif.append(image);

            }


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