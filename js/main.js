function getQuote() {
    //Request the Quote from API
    var xmlhr = new XMLHttpRequest();
    xmlhr.open("POST", "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=" + 'movies' , false);
    xmlhr.setRequestHeader("X-Mashape-Authorization", "vypKENl7ubmsh97NGJPiBsx5IHD1p1M4ybnjsnnalfLTpMVBX0");
    xmlhr.send();

    var JSONResponce = xmlhr.responseText;
    var responceArray = JSON.parse(JSONResponce);

    var quote_text = responceArray['quote'];
    var author = responceArray['author'];
    var category = responceArray['category'];

    document.getElementById("quote-to-change").innerHTML = quote_text + " - " + author;

    getImage(author);

};

function getImage(searchParam) {

    $.ajax({
        url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=" + searchParam,
        beforeSend: function(xhrObj) {
            xhrObj.setRequestHeader("Content-Type", "multipart/form-data");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "f75ee9aacaab426f8f216a54fe721352");
        },
        type: "POST",
        data: "{}",
    })
    .done(function(data) {
        var imageArray = data["value"];
        //Get the three image objects
        var firstImageObject = imageArray[0];
        var secondImageObject = imageArray[1];
        var thirdImageObject = imageArray[2];
        //Get the thumbnails of image objects to display on page
        var firstImage = firstImageObject["thumbnailUrl"];
        var secondImage = secondImageObject["thumbnailUrl"];
        var thirdImage = thirdImageObject["thumbnailUrl"];

        document.getElementById("first_image_placement").innerHTML = "<img src=" + firstImage + " />";
        document.getElementById("second_image_placement").innerHTML = "<img src=" + secondImage + " />";
        document.getElementById("third_image_placement").innerHTML = "<img src=" + thirdImage + " />";
        
    })
    .fail(function() {
        alert("error");
    });
};