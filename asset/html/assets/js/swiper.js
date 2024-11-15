document.addEventListener('DOMContentLoaded', function () {
    // Swiper 슬라이더 초기화
    var swiper = new Swiper('.swiper', {
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        watchSlidesProgress: true,
        slidesPerView: 4,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1300: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 2,
            },
            0: { 
                slidesPerView: 1,
            },
        },
    });
    
        var isPlaying = true;

    // 재생/정지 버튼 이벤트 리스너
        document.getElementById('playPauseBtn').addEventListener('click', function () {
        var img = document.getElementById('playPauseImg');  // 이미지 요소 선택
        if (isPlaying) {
            swiper.autoplay.stop();  // 재생 중지
            img.src = './assets/img/ico_play.png';  // 이미지 경로 변경
            img.alt = 'Play';  // 이미지의 대체 텍스트 변경 (접근성 향상)
            img.width = '12';
            img.height = '14';
        } else {
            swiper.autoplay.start();  // 다시 재생
            img.src = './assets/img/ico_pause.png';  // 이미지 경로 변경
            img.alt = 'Pause';  // 이미지의 대체 텍스트 변경
            img.width = '10';
        }
        
        isPlaying = !isPlaying;
    });
});