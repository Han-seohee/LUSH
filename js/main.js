//body 영역을 다 읽은 후 다음 스크립트를 실행하세요.
//전체 문서가 로드되면 중괄호 안의 함수를 실행하세요.
//window.addEventListener('DOMContentLoaded',function(){});

//jquery 로딩함수
$(function(){

    //마우스오버 이벤트 - $('선택자')..mouseover(function(){});
    $('.b1').mouseover(function(){
        //$('.sub-menu, .sub-bg').css({display:'block'});
        $('.sub1, .sub-bg').stop().slideDown();
    });

    $('.b1').mouseout(function(){
        //$('.sub-menu, .sub-bg').css({display:'none'});
        $('.sub1, .sub-bg').stop().slideUp();
    });

    $('.sub1').mouseover(function(){
        //$('.sub-menu, .sub-bg').css({display:'block'});
        $('.sub1, .sub-bg').stop().slideDown();
    });

    $('.sub1').mouseout(function(){
        //$('.sub-menu, .sub-bg').css({display:'block'});
        $('.sub1, .sub-bg').stop().slideUp();
    });




    //마우스오버 이벤트 - $('선택자')..mouseover(function(){});
    $('.b2').mouseover(function(){
        //$('.sub-menu, .sub-bg').css({display:'block'});
        $('.sub2, .sub-bg').stop().slideDown();
    });

    $('.b2').mouseout(function(){
        //$('.sub-menu, .sub-bg').css({display:'none'});
        $('.sub2, .sub-bg').stop().slideUp();
    });

    $('.sub2').mouseover(function(){
        //$('.sub-menu, .sub-bg').css({display:'block'});
        $('.sub2, .sub-bg').stop().slideDown();
    });

    $('.sub2').mouseout(function(){
        //$('.sub-menu, .sub-bg').css({display:'block'});
        $('.sub2, .sub-bg').stop().slideUp();
    });


    

});//로딩함수 끝