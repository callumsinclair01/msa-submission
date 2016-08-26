$('.input_form').on('submit', function() {
    $.ajax({
        url: "http://isithackday.com/arrpi.php",
        text: document.getElementById("pirate_input")
    })

    .done(function() {
        alert("Pirate message recieved")
    })
})