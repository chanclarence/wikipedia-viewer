$(document).ready(function () {
    $("#random").click(function () {
        window.open("https://en.wikipedia.org/wiki/Special:Random");
    });

    // Coded with help from Dylan Israel - https://www.youtube.com/channel/UC5Wi_NYysX-LfcqT3Hq9Faw
    $("#searchButton").click(function () {
        // Gets search input
        var searchTerm = $("#searchTerm").val();
        // Concats search input into Wikipedia API url
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=" + searchTerm;
        $.ajax({
            type: "GET",
            url: url,
            async: true,
            dataType: "json",
            success: function (data) {
                $("#output").empty();
                $("#endResults").empty();
                for (var i = 0; i < data[1].length; i++) {
                    $("#output").append("<li><a href=" + data[3][i] + " target=\"blank\"><p style=\"text-align: center\">" + data[1][i] + "</p></a><p>" + data[2][i] + "</p></li>");
                }
                $("#endResults").append("<li><p style=\"text-align: center\">Thanks for searching! <a href=\"#top\">Try a new search?</a></p></li>");
                    
            },
            error: function (errorMessage) {
                alert("Error");
            }
        });
    });

    $("#searchTerm").keypress(function (e) {
        if (e.which === 13) {
            $("#searchButton").click();
        }
    });

});