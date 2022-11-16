 //1.스크립트 위로 튕기는것
 $(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

// 햄버거메뉴
$(function(){
    $('.menuOpen button.open').on('click', function(){
        $('.menuWrap').addClass('on');
    });
    $('.menuOpen .menuWrap .close').on('click', function(){
        $('.menuWrap').removeClass('on');
    });
});

//fixHeader
var scrollNum = 0;
scrollNum = $(document).scrollTop();
fixHeader();

//윈도우창 조절시 이벤트
$(window).on('scroll resize', function() {
    scrollNum = $(document).scrollTop();
    fixHeader();
});

//고정헤더 함수
function fixHeader() {
    if (scrollNum > 150) { 
        $('header').addClass('on');
    } else {
        $('header').removeClass('on');
    };
};

// 글자 애니메이션
$(function (){
    Splitting();
});

//1.circlBox SVGAni애니메이션
$(function(){
    $('.better').find('path').each(function(i, path){
        var length =  path.getTotalLength();
        //alert(length);
    });
});

$(function(){
    $('.visual').find('path').each(function(i, path){
        var length =  path.getTotalLength();
        //alert(length);
    });
});

// 스크롤 애니메이션
$(function() {
    $('.animate').scrolla({
            mobile: true,
            once: false, 
        });    
    });    

    //상단이동 부드럽게
$(function() {            
    $('.goTop').on('click', function() {
        var top = $('body').offset().top;
        $('html, body').animate( { scrollTop : (top) }, 400 );  
    });     
});  