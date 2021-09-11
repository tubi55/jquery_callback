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
var $btn2 = $(".btn2");
var $con = $(".con");
var $wrap2 = $("#wrap2");
var $close1 = $(".close1");
var $close2 = $(".close2");
var speed = 500;

//박스1 열기 이벤트
$btn1.on("click",function(e){
    e.preventDefault();
    openBox1();       
});

//박스1 닫기 이밴트
$close1.on("click",function(e){
    e.preventDefault();
    closeBox1();    
});

//박스2 열기 이벤트
$btn2.on("click", function(e){
    e.preventDefault();
    openBox2();
});

//박스2 닫기 이벤트
$close2.on("click", function(e){
    e.preventDefault();
    closeBox2();
})

function openBox1(){
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
}
function closeBox1(){
    $con.stop().fadeOut(speed/2, function(){
        $top.stop().animate({width: "0%"},speed/2);
        $right.stop().animate({height: "0%"},speed/2);
        $bottom.stop().animate({width: "0%"},speed/2);
        $left.stop().animate({height: "0%"},speed/2);
        $close1.stop().animate({right: -40, opacity: 0},speed/2);
    });
}
function openBox2(){
    $wrap2.stop().animate({height: 400, marginTop: -200},speed,function(){
        $close2.stop().animate({right: 40, opacity: 1},speed);
    })
}
function closeBox2(){
    $close2.stop().animate({right: -40, opacity:1},speed/2,function(){
        $wrap2.stop().animate({height: 0, marginTop: 0},speed/2);
    });
}