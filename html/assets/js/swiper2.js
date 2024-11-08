$(document).ready(function() {
    var swiperInstance = null; // Swiper 인스턴스 초기화

    function initSwiper() {
        var $swiperContainer = $('.swiper2');

        if ($(window).width() <= 1200) {
            // 1200px 이하일 때 Swiper 인스턴스가 없으면 생성
            if (!swiperInstance) {
            $swiperContainer.addClass('mySwiper2'); // 클래스 추가
            swiperInstance = new Swiper('.mySwiper2', {
                slidesPerView: 1,
                spaceBetween: 10,
                loop: true, 
                scrollbar: {
                    el: ".swiper-scrollbar",
                    draggable: true, // 스크롤바를 드래그할 수 있게 설정
                    hide: false,
                },
                initialSlide: 0,
                breakpoints: {
                1200: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1,
                },
                0: { 
                    slidesPerView: 1.2,
                    centeredSlides: true,
                    spaceBetween: 0,
                    observer: true, // DOM 변화를 감지하여 업데이트
                    observeParents: true, // 부모 요소의 변화도 감지
                    loop: true, 
                },
            },
            on: {
                init: function() {
                    this.update(); // 초기화 후 강제로 업데이트
                    this.loopFix(); // 초기화 후 슬라이드 순서를 고정
                },
                slideChangeTransitionEnd: function() {
                  if (this.params.loop) {
                    this.loopFix();
                  }
                },
            }
            });
            // 초기화 후 강제로 업데이트 호출
            swiperInstance.update();
            }
        } else {
        // 1200px 이상일 때 Swiper 인스턴스가 있으면 제거
        if (swiperInstance) {
          swiperInstance.destroy(true, true); // Swiper 인스턴스 완전히 제거
          swiperInstance = null; // 인스턴스 초기화
          $swiperContainer.removeClass('mySwiper2'); // 클래스 제거
        }
      }
    }
  
    // 초기 Swiper 설정
    initSwiper();
  
    // 화면 크기 변경 시 Swiper 설정 다시 체크
    $(window).resize(function() {
      initSwiper();
    });
  });