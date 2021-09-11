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
var enableClick = true;

//btn1클릭시
$btn1.on("click",function(e){
    e.preventDefault();

    //일단 현재 버튼이 활성화 되어 있으면 
    var isOn = $(this).hasClass("on");
    //강제로 함수종료에서 아무것도 실행하지 않음
    if(isOn) return;

    //enaableClick초기 전역변수값이 true이기 떄문에 버튼 클릭시
    if(enableClick){ 
        //일단 한번은 박스1열리는 함수가 실행됨       
        openBox1(); 
        //그와 동시시에 전역변수 enableClick값을 false로 변경해서 재클릭 방지
        enableClick = false;
    }
});

//박스1 닫기 이밴트
$close1.on("click",function(e){
    e.preventDefault();
    closeBox1();    
});

//박스2 열기 이벤트
$btn2.on("click", function(e){
    e.preventDefault();

    var isOn = $(this).hasClass("on");
    if(isOn) return;

    if(enableClick){
        openBox2();
        enableClick = false;
    }
    
});

//박스2 닫기 이벤트
$close2.on("click", function(e){
    e.preventDefault();
    closeBox2();
})

function openBox1(){
    //일단은 기존 박스2 를 닫아버리고
    closeBox2();

    //첫번째 버튼 활성화
    $btn1.addClass("on");

    //박스1의 모션을 열기 시작
    $top.stop().animate({width: "100%"},speed,function(){
        $right.stop().animate({height: "100%"},speed,function(){
            $bottom.stop().animate({width: "100%"},speed,function(){
                $left.stop().animate({height: "100%"},speed,function(){
                    $con.stop().fadeIn(speed,function(){
                        $close1.stop().animate({right: 40, opacity:1},speed,function(){
                            //콜백함수를 이용해서 모든 모션이 끝나는 순간 다시 enableClick값을 true로 변경해서 재클릭 가능하게 수정
                            enableClick = true;
                        });
                    });
                });
            });
        });
    }); 
}
function closeBox1(){
    $btn1.removeClass("on");
    $con.stop().fadeOut(speed/2, function(){
        $top.stop().animate({width: "0%"},speed/2);
        $right.stop().animate({height: "0%"},speed/2);
        $bottom.stop().animate({width: "0%"},speed/2);
        $left.stop().animate({height: "0%"},speed/2);
        $close1.stop().animate({right: -40, opacity: 0},speed/2);
    });
}
function openBox2(){
    $btn2.addClass("on");
    closeBox1();
    $wrap2.stop().animate({height: 400, marginTop: -200},speed,function(){
        $close2.stop().animate({right: 40, opacity: 1},speed, function(){
            enableClick = true;
        });
    })
}
function closeBox2(){
    $btn2.removeClass("on");
    $close2.stop().animate({right: -40, opacity:1},speed/2,function(){
        $wrap2.stop().animate({height: 0, marginTop: 0},speed/2);
    });
}