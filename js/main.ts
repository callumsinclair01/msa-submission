function getQuote(quoteParam: string): void {
    //Request the Quote from API
    var xmlhr = new XMLHttpRequest();
    xmlhr.open("POST", "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=" + quoteParam , false);
    xmlhr.setRequestHeader("X-Mashape-Authorization", "vypKENl7ubmsh97NGJPiBsx5IHD1p1M4ybnjsnnalfLTpMVBX0");
    xmlhr.send();

    var JSONResponce: string = xmlhr.responseText;
    var responceArray: Array<string> = JSON.parse(JSONResponce);

    var quote_text: string = responceArray['quote'];
    var author: string = responceArray['author'];
    var category: string = responceArray['category'];

    document.getElementById("quote-to-change").innerHTML = quote_text + " - " + author;

    getImage(author);

};

function getImage(searchParam: string): void {

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
        var imageArray: Array<Array<string>> = data["value"];
        //Get the three image objects
        var firstImageObject: Array<string> = imageArray[0];
        //Get the thumbnails of image objects to display on page
        var firstImage: string = firstImageObject["thumbnailUrl"];

        document.getElementById("image_placement").innerHTML = "<img src=" + firstImage + " class=\"center-block img-responsive\" />";
        
    })
    .fail(function() {
        alert("error");
    });
};
