$(document).ready(function() {
    var mySwiper3 = new Swiper('.mySwiper3', {
        navigation: {
            nextEl: '.nextButton',
            prevEl: '.prevButton',
        },
        scrollbar: {
            el: '.swiper-scrollbar', // 스크롤바 엘리먼트
            draggable: true,
            hide: false, // 스크롤바 숨김 여부
        },
        loop: true, // 무한 루프 설정
        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: 0,
        
        breakpoints: {
            1200: {
                slidesPerView: 1.5,
            },
            768: {
                slidesPerView: 1.1,
            },
            0: { 
                slidesPerView: 1.1
            },
        },
    });

    // 화면 크기 체크 및 스크롤바 표시 설정
    function checkScreenSize() {
        if ($(window).width() <= 1200) {
            mySwiper3.scrollbar.el.style.display = 'block'; // 스크롤바 보이기
            mySwiper3.scrollbar.el.style.visibility = 'visible'; // 스크롤바 보이도록 설정
            $("img[src='./assets/img/paper-wrap.png']").attr("src", "./assets/img/paper-wrap_mo.jpg");
        } else {
            mySwiper3.scrollbar.el.style.display = 'none'; // 스크롤바 숨기기
            mySwiper3.scrollbar.el.style.visibility = 'hidden'; // 스크롤바를 보이지 않도록 설정
            $("img[src='./assets/img/paper-wrap_mo.jpg']").attr("src", "./assets/img/paper-wrap.png");
        }
    }

    // 초기 화면 크기 체크
    checkScreenSize();

    // 창 크기 변경 시 체크
    $(window).resize(function() {
        checkScreenSize();
    });

    // 다음 슬라이드로 이동 버튼
    $('.nextButton').on('click', function() {
        mySwiper3.slideNext(); // 다음 슬라이드로 이동
    });

    // 이전 슬라이드로 이동 버튼
    $('.prevButton').on('click', function() {
        mySwiper3.slidePrev(); // 이전 슬라이드로 이동
    });
});