$(document).ready(function() {
    $('.ico').click(function() {
        var listContent = $(this).closest('.festival_list_wrap').find('.list_content');
        var arrow = $(this).find('.arrow');

        // 추가 콘텐츠만 토글
        listContent.toggle();

        // 화살표 이미지 변경
        if (listContent.is(':visible')) {
            arrow.attr('src', './assets/img/ico-sub2-arrow-top.svg'); // 위쪽 화살표
        } else {
            arrow.attr('src', './assets/img/ico-sub2-arrow-bottom.svg'); // 아래쪽 화살표
        }
    });
});
