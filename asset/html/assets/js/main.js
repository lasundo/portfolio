$(document).ready(function() {
    function checkScreenSize() {
        if ($(window).width() <= 1200) {
            $("img[src='./assets/img/paper-wrap.png']").attr("src", "./assets/img/paper-wrap_mo.jpg"); // 새 이미지 경로
        } else {
            $("img[src='./assets/img/new-image.png']").attr("src", "./assets/img/paper-wrap_mo.jpg"); // 원래 이미지 경로
        }
    }

    // 초기 화면 크기 체크
    checkScreenSize();

    // 창 크기 변경 시 체크
    $(window).resize(function() {
        checkScreenSize();
    });
});


// 탑 버튼
$(document).ready(function() {
    var topButton = $('#topButton');

    // 스크롤 시 버튼 보이기
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) { // 300px 이상 스크롤 시
            topButton.fadeIn(); // 버튼 표시
        } else {
            topButton.fadeOut(); // 버튼 숨기기
        }
    });

    // 버튼 클릭 시 페이지 상단으로 이동
    topButton.click(function() {
        $('html, body').animate({ scrollTop: 0 }, 500); // 500ms 동안 상단으로 스크롤
        return false;
    });
});

// 모바일 햄버거 메뉴
$(document).ready(function() {
    $('.menuButton').click(function() {
        $('#mobileMenu').toggle(); // 메뉴가 펼쳐지거나 접힘
    });
});

//depth2 메뉴
$(document).ready(function() {
    // 하위 메뉴를 가진 항목을 클릭했을 때
    $('.depth1_mo_a').click(function(e) {
        e.preventDefault(); // 링크 기본 동작(페이지 이동) 방지

        // 클릭된 항목의 하위 메뉴 토글
        $(this).toggleClass('active'); // active 클래스 추가/제거
        $(this).next('.depth2_mo').slideToggle(); // 하위 메뉴 슬라이드 토글
    });
});

$(document).ready(function() {
    // 초기화 함수 정의
    var $fullpageClass = $('.section02');
    function initFullpage() {
        if ($(window).width() > 768) {  // 화면 너비가 768px 이상일 때만 fullPage.js 실행
            $fullpageClass.addClass('section');
            $('#fullpage').fullpage({
                autoScrolling: true,
                scrollHorizontally: false,
                navigation: true,
                navigationPosition: 'left',
                css3: true,
                
                afterLoad: function(origin, destination, direction) {
                    // 섹션이 로드될 때마다 헤더와의 배경 관계가 제대로 처리되도록 설정
                    if (destination.index === 2) {
                        // 예시: section03에 도착했을 때 특정 동작 수행
                        console.log('Section 03 loaded');
                    }
                    
                }
            });
            
            $('body').css('overflow', 'hidden');
        } else {
            // 모바일 화면일 때 fullPage.js가 있으면 삭제
            if ($.fn.fullpage.destroy) {
                $.fn.fullpage.destroy('all'); // fullPage.js를 완전히 해제
                $('body').css('overflow', 'auto');
                $fullpageClass.removeClass('section');
                topButton.show(); // 서브페이지에서 탑 버튼 보이기
            }
        }
    }

    // 처음 로드 시 fullPage.js 설정 여부 확인
    initFullpage();

    // 창 크기가 변경될 때 fullPage.js 설정을 재확인
    $(window).resize(function() {
        initFullpage();  // 창 크기에 따라 다시 fullPage.js 설정
    });
});