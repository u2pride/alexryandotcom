$(document).ready(function () {
    
    
	jQuery('.postFadeIn').addClass("hiddentwo").viewportChecker({
	    classToAdd: 'visibletwo animated fadeIn', // Class to add to the elements when they are visible
	    offset: 300,
    }); 
    
    jQuery('.postFadeIn2').addClass("hiddentwo").viewportChecker({
        classToAdd: 'visibletwo animated fadeIn',
        offset: 400,
    });
    
    jQuery('.postPulse').addClass("hiddentwo").viewportChecker({
        classToAdd: 'visibletwo animated pulse',
        offset: 5000,
    });
    
    jQuery('.postRubber').addClass("hiddentwo").viewportChecker({
        classToAdd: 'visibletwo animated rubberBand',
        offset: 300,
    });
    
    
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
    
            