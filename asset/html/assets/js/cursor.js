$(document).ready(function() {
    // 화면에서 마우스가 움직일 때마다 이벤트 발생
    $(document).mousemove(function(event) {
        // 마우스 위치에 원을 따라다니게 설정
        $(".cursor-circle").css({
            left: event.pageX + "px", // 마우스 X 위치
            top: event.pageY + "px"   // 마우스 Y 위치
        });
    });
    // 특정 요소에 마우스를 올렸을 때 (hover)
    $("img").hover(
        function() {
            // 마우스 hover 시 원을 크게 만들기
            $(".cursor-circle").stop(true).animate({
                width: "80px",
                height: "80px",
                backgroundColor: "rgba(0, 0, 50, 0.7)" // 색상도 변경 가능
            },300).text("CLICK");;
        }, 
        function() {
            // 마우스가 벗어났을 때 원의 크기를 원래대로 돌리기
            $(".cursor-circle").stop(true).animate({
                width: "20px",
                height: "20px",
                backgroundColor: "rgba(0, 0, 0, 0.7)" // 원래 색상으로 복귀
            },300).text("");;
        }
    );
    // $("li").hover(
    //     function() {
    //         // 마우스 hover 시 원을 크게 만들기
    //         $(".cursor-circle").stop(true).animate({
    //             width: "80px",
    //             height: "80px",
    //             backgroundColor: "rgba(138, 153, 219, 0.7)" // 색상도 변경 가능
    //         },300);
    //     }, 
    //     function() {
    //         // 마우스가 벗어났을 때 원의 크기를 원래대로 돌리기
    //         $(".cursor-circle").stop(true).animate({
    //             width: "20px",
    //             height: "20px",
    //             backgroundColor: "rgba(0, 0, 0, 0.7)" // 원래 색상으로 복귀
    //         },300);
    //     }
    // );
});

