   $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll < 50){
            $('.fixed-top').css('background', 'transparent');
			$('.nav-link').css('color', '#000');
        } else{
            $('.fixed-top').css('background', 'rgba(169, 169, 169, 0.8)');
			$('.nav-link').css('color', '#fff');
        }
    });
	
	
