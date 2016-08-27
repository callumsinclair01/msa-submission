btn.on("click", function() {
    getPirateText("Hello")
    alert("Button Pressed")
});


function getPirateText(userText) {
    $.ajax({
        url: "http://isithackday.com/arrpi.php",
        beforeSend: function(xhrObj) {
            //Request headers
        },
        text: userText,

    })
        .done(function(text) {
            alert("Return text is: " + text)
        })

        .fail(function(error) {
            alert("Didn't work!")
        });
}