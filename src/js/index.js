$("#navigation").load("../templates/navbar.html", () => {   
    $(document).ready(function(){
        var toggle_icon_button = $(".toggle_icon_button")
        var navigation = $("#navigation")
        toggle_icon_button.on("click", function(){
            navigation.toggleClass("open hidden")
        })
    })
})
$("#footer").load("../templates/footer.html")