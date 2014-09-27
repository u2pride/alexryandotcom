$(document).ready(function () {
    
    $(".outsidelink").click(function () {
        window.open($(this).find("a:first").attr("href"));
        return false;
    });
    
    $(".outsidelink").hover(function () {
        window.status = $(this).find("a:first").attr("href");
    }, function () {
        window.status = "";
        
    });

});
    
            