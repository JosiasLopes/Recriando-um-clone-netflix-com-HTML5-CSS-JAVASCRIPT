$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$("#informacoes").click(function(){
	//alert($(".detalhes").css("visibility"));
	if($(".detalhes").css("visibility")=='hidden' && $(".detalhes").css("display")=='none' ){
		
		//$(".detalhes").show();
		$(".detalhes").animate({height: '100px', opacity: '1'}, "slow");
		$(".detalhes").css({"display":"block","visibility":"visible"});
		
	}else{
		$(".detalhes").animate({height: '0', opacity: '0'}, "slow");
		$(".detalhes").css({"display":"none","visibility":"hidden"});
		
			
	}
	
});
