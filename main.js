/*
    자바스크립트는 기본적으로 비동기적으로 코드가 실행됨
    --> 비동기 -> 동기화
    --> promise(ES6) VS callback (ES5)

    animate메서드는 마지막 인수로 콜백함수를 지원
    --특정 모션이 끝나는 순간 다음 기능을 동기적으로 실행가능

    show() : none-->block
    hide() : block --> none
    fadeIn(speed, callback) : none-->block (fade모션효과추가)
    fadeOut(speed, callback) : block --> none (fade모션효과추가)
    slideDown(speed, callback) : 슬라이드기능 추가 (보이게)
    slideUp(speed, callback) : 슬라이드기능 추가 (안보이게)
*/
var $top = $(".top");
var $right = $(".right");
var $bottom = $(".bottom");
var $left = $(".left");
var $btn1 = $(".btn1");
var $con = $(".con");
var $close1 = $(".close1");
var speed = 1000;

//박스 열기
$btn1.on("click",function(e){
    e.preventDefault();

    $top.stop().animate({width: "100%"},speed,function(){
        $right.stop().animate({height: "100%"},speed,function(){
            $bottom.stop().animate({width: "100%"},speed,function(){
                $left.stop().animate({height: "100%"},speed,function(){
                    $con.stop().fadeIn(speed,function(){
                        $close1.stop().animate({right: 40, opacity:1},speed);
                    });
                });
            });
        });
    });    
});

//박스 닫기
$close1.on("click",function(e){
    e.preventDefault();

    $con.stop().fadeOut(speed/2, function(){
        $top.stop().animate({width: "0%"},speed/2);
        $right.stop().animate({height: "0%"},speed/2);
        $bottom.stop().animate({width: "0%"},speed/2);
        $left.stop().animate({height: "0%"},speed/2);
        $close1.stop().animate({right: -40, opacity: 0},speed/2);
    });
});