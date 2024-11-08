$(document).ready(function() {
    const itemsPerPage = 5; // 페이지당 항목 수
    let currentPage = 1;
    const containers = $('.container');
    const totalPages = Math.ceil(containers.length / itemsPerPage);

    function renderPage(page) {
        containers.hide(); // 모든 컨테이너 숨기기
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        containers.slice(start, end).show(); // 현재 페이지에 해당하는 컨테이너만 표시

        // 페이지 버튼 활성화
        $('.page_btn').removeClass('active'); // 모든 버튼에서 active 클래스 제거
        $('.page_btn').eq(page - 1).addClass('active'); // 현재 페이지 버튼에 active 클래스 추가
    }

    // 페이지 버튼 클릭 이벤트
    $('.page_btn').click(function() {
        currentPage = parseInt($(this).text());
        renderPage(currentPage);
    });

    $('.prev').click(function() {
        if (currentPage > 1) {
            currentPage--;
            renderPage(currentPage);
        }
    });

    $('.next').click(function() {
        if (currentPage < totalPages) {
            currentPage++;
            renderPage(currentPage);
        }
    });

    renderPage(currentPage); // 초기 페이지 렌더링

    $('.page_btn, .prev, .next').on('click', function() {
        // 페이지 이동 로직을 여기에 추가
        console.log($(this).text() + ' 페이지로 이동');

        // 페이지 이동 후 위로 스크롤
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
    });

    const container = $('.list_text_wrap');

    function adjustScrollbar() {
        const contentHeight = container[0].scrollHeight; // 전체 콘텐츠 높이
        const containerHeight = container.height(); // 컨테이너 높이
        const thumbHeight = Math.max((containerHeight / contentHeight) * containerHeight, 227); // 최소 높이 20px 설정
        container.css('--scrollbar-thumb-height', thumbHeight + 'px'); // CSS 변수 설정
    }

    // 스크롤 이벤트 처리
    container.on('scroll', adjustScrollbar);

    // 페이지 로드 및 창 크기 조정 시 핸들 높이 조정
    adjustScrollbar();
    $(window).resize(adjustScrollbar);

    $('.btn_start').on('click', function() {
        const video = $(this).siblings('.video')[0]; // 클릭한 버튼의 형제인 비디오 요소 선택
        const poster = $(this).siblings('.poster'); // 포스터 요소 선택
        const buttonImage = $(this).find('.play-pause-button');
        let mouseTimer;

        if (video.paused) {
            video.play(); // 비디오 재생
            poster.hide(); // 포스터 숨김
            buttonImage.attr('src', './assets/img/ico-sub4-viedo-butto.svg'); // 버튼 이미지 변경 (재생 중)
            hideButtonAfterDelay($(this)); // 버튼 숨기기 타이머 시작
        } else {
            video.pause(); // 비디오 정지
            poster.show(); // 포스터 보이기
            buttonImage.attr({'src':'./assets/img/ico-sub4-viedo-butto.svg','alt':'정지버튼'}); // 버튼 이미지 변경 (정지 중)
        }

        // 마우스 이동 감지
        $(this).closest('.watch').on('mousemove', function() {
            clearTimeout(mouseTimer); // 이전 타이머 초기화
            $(this).find('.btn_start').show(); // 버튼 보이기
            hideButtonAfterDelay($(this).find('.btn_start')); // 버튼 숨기기 타이머 시작
        });

        // 버튼 숨기기 타이머 함수
        function hideButtonAfterDelay(button) {
            mouseTimer = setTimeout(function() {
                button.hide(); // 일정 시간 후 버튼 숨김
            }, 2000); // 2초 후에 숨김
        }

        $('video').on('play', function() {
            $('video').not(this).each(function() {
                this.pause();
            });
        });
    });

    

    

    
});
