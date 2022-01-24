$("#collapser").click(function() {
    if ($('#sidebar').css('width') === '250px') {
        $("#sidebar").css("width", "50px");
        $(".collapsable").hide();
        $(".sidebarMenuItem").css("padding-left", "0");
        $(".sidebarMenuItem").css("justify-content", "center");
    } else {
        $("#sidebar").css("width", "250px");
        $(".collapsable").show();
        $(".sidebarMenuItem").css("padding-left", "30px");
        $(".sidebarMenuItem").css("justify-content", "");
    }

});