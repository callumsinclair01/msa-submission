function getQuote() {
    //Request the Quote from API
    var xmlhr = new XMLHttpRequest();
    xmlhr.open("POST", "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=" + 'famous' , false)
    xmlhr.setRequestHeader("X-Mashape-Authorization", "vypKENl7ubmsh97NGJPiBsx5IHD1p1M4ybnjsnnalfLTpMVBX0");
    xmlhr.send();

    var quoteResponce = xmlhr.responseText;

    alert("This works")

    document.getElementById("quote-to-change").innerHTML = result;
};