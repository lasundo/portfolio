$(document).ready(function() {
    // 초기 상태: 리스트형 콘텐츠 표시, 캘린더형 콘텐츠 숨김
    $('#pagenation1').show(); // 리스트형 콘텐츠 표시
    $('#tab2').hide(); // 캘린더형 콘텐츠 숨김
    $('.page_wrap').show(); // 페이지 버튼 기본적으로 표시

    // 탭 클릭 이벤트
    $('.btn').click(function() {
        if ($(this).attr('id') === 'tab1') {
            // 리스트형 탭 클릭 시
            $('#pagenation1').show(); // 리스트형 콘텐츠 표시
            $('#tab2').hide(); // 캘린더형 콘텐츠 숨김
            $('.page_wrap').show(); // 페이지 버튼 표시
        } else {
            // 캘린더형 탭 클릭 시
            $('#pagenation1').hide(); // 리스트형 콘텐츠 숨김
            $('#tab2').show(); // 캘린더형 콘텐츠 표시
            $('.page_wrap').hide(); // 페이지 버튼 숨김
        }

        // 활성화된 탭 스타일
        $('.btn').removeClass('active');
        $(this).addClass('active');
    });

    // 페이지네이션 기능
    let currentPage = 1;
    const itemsPerPage = 9; // 한 페이지에 표시할 아이템 수
    const totalItems = $('.list_wrap#pagenation1 .list_item').length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    function renderItems() {
        $('.list_wrap#pagenation1 .list_item').hide();
        $('.list_wrap#pagenation1 .list_item').slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).show();

        // 페이지 버튼 스타일 업데이트
        $('.page_btn').removeClass('active'); // 모든 버튼에서 active 클래스 제거
        $('.page_btn').eq(currentPage - 1).addClass('active'); // 현재 페이지 버튼에 active 클래스 추가
    }

    // 페이지 버튼 클릭 이벤트
    $('.page_btn').click(function() {
        currentPage = parseInt($(this).text());
        renderItems();
    });

    // 이전 및 다음 버튼 기능
    $('.prev').click(function() {
        if (currentPage > 1) {
            currentPage--;
            renderItems();
        }
    });

    $('.next').click(function() {
        if (currentPage < totalPages) {
            currentPage++;
            renderItems();
        }
    });

    // 초기 렌더링
    renderItems();
});

$(document).ready(function() {
    $('.page_btn, .prev, .next').on('click', function() {
        // 페이지 이동 로직을 여기에 추가
        console.log($(this).text() + ' 페이지로 이동');

        // 페이지 이동 후 위로 스크롤
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
    });

    /* 호버효과 */
    $('.event .text h3').hover(function(){
        $(this).css({borderBottom:'1px solid var(--grayscale-900)'});
    }, function(){
        $(this).css({borderBottom:'0'});
    });

    ////////////////////////////////////////////////////////
});

/* 캘린더 아이콘 클릭 이벤트 */
$(document).ready(function() {
    function setupEventHandlers() {
        // 기존 이벤트 핸들러를 제거합니다.
        $('.ico').off('click');

        $('.ico').on('click', function() {
            const eventContainer = $(this).closest('.event'); // 클릭한 아이콘의 부모 .event 요소 선택
            const titles = eventContainer.find('.title'); // 해당 .event 내의 모든 제목 선택
            const output = $('.output');

            // 제목을 순회하여 출력
            let titlesHtml = '';
            titles.each(function() {
                titlesHtml += `<h3 class="show">${$(this).html()}</h3>`;
            });

            // 제목이 보이는지 여부에 따라 처리
            if (output.is(':visible') && output.html() === titlesHtml) {
                // 이미 열려있는 제목을 클릭하면 숨기기
                output.removeClass('visible').addClass('hidden').html('');
            } else {
                // 제목을 출력
                output.removeClass('hidden').addClass('visible').html(titlesHtml);
            }
        });
    }

    // 초기 이벤트 핸들러 설정
    setupEventHandlers();

    // 윈도우 리사이즈 이벤트
    $(window).resize(function() {
        if ($(window).width() <= 767) {
            setupEventHandlers(); // 767px 이하일 때 이벤트 핸들러 설정
        } else {
            // 767px 초과일 때 이벤트 핸들러 제거
            $('.ico').off('click');
            $('.output').removeClass('visible').addClass('hidden').html(''); // 출력 영역 숨기기
        }
    }).trigger('resize'); // 초기 로딩 시에도 체크

    /* 모바일에서 글자수 제한 */
    function applyEllipsis() {
        $('.text').each(function() {
            var $this = $(this);
            var maxLength = 10; // 최대 글자 수

            if ($(window).width() <= 430) { // 모바일 화면 크기
                // 첫 번째 p 태그 처리
                var firstP = $this.find('p:first-of-type');
                if (firstP.text().length > maxLength) {
                    var trimmedText = firstP.text().substring(0, maxLength) + '...';
                    firstP.text(trimmedText);
                }

                // h3 태그 처리
                var title = $this.find('h3');
                if (title.text().length > maxLength) {
                    var trimmedTitle = title.text().substring(0, maxLength) + '...';
                    title.text(trimmedTitle);
                }
            } else {
                // 모바일이 아닐 때 원래 텍스트로 복원
                $this.find('p:first-of-type, h3').each(function() {
                    var originalText = $(this).data('original-text');
                    if (originalText) {
                        $(this).text(originalText);
                    } else {
                        $(this).data('original-text', $(this).text());
                    }
                });
            }
        });
    }

    applyEllipsis(); // 초기 적용

    // 화면 크기 변경 시 적용
    $(window).resize(applyEllipsis);
});









