$('.input_form').on('submit', function() {
    $.ajax({
        url: "http://isithackday.com/arrpi.php",
        text: document.getElementById("pirate_input")
    })

    alert(document.getElementById("pirate_input"))
    alert("Please work")
})