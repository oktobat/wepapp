'use strict';

//인덱스JS


$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

/*function(e)에서 e는 매개 변수*/


//menuOpen
$(function(){
    $('.wrap .menuOpen button.open').on('click',function(){
       $('.menuOpen .menuWrap').addClass('on') ;
    });
    $('.wrap .menuOpen .menuWrap .close').on('click',function(){
       $('.menuOpen .menuWrap').removeClass('on') ;
    });
});





//SVG애니
$(function(){
   $('svgAni').find('path').each(function(i,path){
       var length =  path.getTotalLength();
       // alert(length);
    });
});
     

/*스크롤라*/
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
}); 


//상단이동
$(function() {            
    $('.goTop').on('click', function() {
        var top = $('body').offset().top;
        $('html, body').animate( { scrollTop : (top) }, 400 );  
    });     
}); 
//슬라이드 메뉴

$(function( ){
 $('.slider-nav').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   autoplay : true,
   dots: false,
   autoplaySpeed : 2000,
   focusOnSelect: true,
  nextArrow:$('.next'),
  prevArrow:$('.prev'),      
 });
});


//글자애니메이션  Splitting 데모사이트 그대로 작성 따라하기
$(function(){
    Splitting();
});

