$(function () {
    var tab_Btn = $(".tab_btn > ul > li");
    var tab_Cont = $(".tab_cont > ul");
    var tab_ContDiv = $(".tab_cont > .tab_div");
    var tab_Title = $(".tab_title"); // 제목 h3 선택
    var tab_Title2 = $(".tab_title2"); // 제목 h3 선택

    // 탭에 맞는 제목을 배열로 저장
    var tabTitles = ["대관공고", "대관절차", "대관비용", "대관신청서"];
    var tabTitles2 = ["운영목표", "윤리헌장", "인권경영", "안전보건경영"];

    // 초기 설정: 첫 번째 탭과 첫 번째 페이지를 보여줌
    tab_Cont.hide().eq(0).show(); // 첫 번째 탭 콘텐츠 보이기
    tab_Cont.eq(0).find('.page_content').hide().eq(0).show(); // 첫 번째 페이지 보이기
    // 초기 설정: 첫 번째 탭과 첫 번째 페이지를 보여줌
    tab_ContDiv.hide().eq(0).show(); // 첫 번째 탭 콘텐츠 보이기
    tab_ContDiv.eq(0).find('.page_content').hide().eq(0).show(); // 첫 번째 페이지 보이기


    // 탭 버튼 클릭 시
    tab_Btn.click(function (e) {
        e.preventDefault();
        var target = $(this);
        var index = target.index();

        // 탭 전환 처리
        tab_Btn.removeClass("active"); // 모든 탭의 active 제거
        target.addClass("active"); // 클릭한 탭에 active 추가
        tab_Cont.hide(); // 모든 탭 콘텐츠 숨기기
        tab_Cont.eq(index).show(); // 해당하는 탭 콘텐츠 보이기
        tab_ContDiv.hide(); // 모든 탭 콘텐츠 숨기기
        tab_ContDiv.eq(index).show(); // 해당하는 탭 콘텐츠 
        // 탭에 맞는 제목 설정
        tab_Title.text(tabTitles[index]);
        tab_Title2.text(tabTitles2[index]);

        // 해당 탭의 첫 번째 페이지를 기본으로 보여줌
        tab_Cont.eq(index).find('.page_content').hide().eq(0).show();
        tab_ContDiv.eq(index).find('.page_content').hide().eq(0).show();

        // 해당 탭의 페이지 버튼 초기화
        updatePageButtons(1); // 1번 페이지 버튼 활성화

    });


    // 페이지 버튼 클릭 시
    $(".page_btn").click(function (e) {
        e.preventDefault();
        var pageIndex = $(this).data('page'); // 클릭한 페이지 번호
        var parentUl = $(this).closest('.tab_div'); // 현재 탭 콘텐츠의 ul

        parentUl.find('.page_content').hide(); // 모든 페이지 숨기기
        parentUl.find('.page_content[data-page="' + pageIndex + '"]').show(); // 선택한 페이지만 보이기
        // 클릭한 페이지 버튼 활성화
        updatePageButtons(pageIndex);
    });

    // Prev 버튼 클릭 시 이전 페이지로 이동
    $(".prev_btn").click(function (e) {
        e.preventDefault();
        var currentPage = $(".page_btn.active").data('page');
        if (currentPage > 1) {
            var prevPage = currentPage - 1;

            // 이전 페이지 보여주기
            $(".page_content").hide();
            $(".page_content[data-page='" + prevPage + "']").show();

            // 이전 페이지 버튼 활성화
            updatePageButtons(prevPage);
        }
    });

    // Next 버튼 클릭 시 다음 페이지로 이동
    $(".next_btn").click(function (e) {
        e.preventDefault();
        var currentPage = $(".page_btn.active").data('page');
        var totalPages = $(".page_btn").length;
        if (currentPage < totalPages) {
            var nextPage = currentPage + 1;

            // 다음 페이지 보여주기
            $(".page_content").hide();
            $(".page_content[data-page='" + nextPage + "']").show();

            // 다음 페이지 버튼 활성화
            updatePageButtons(nextPage);
        }
    });

    // 현재 페이지에 맞는 버튼에 .active 클래스 붙이기
    function updatePageButtons(pageIndex) {
        $(".page_btn").removeClass("active"); // 모든 버튼에서 active 클래스 제거
        $(".page_btn[data-page='" + pageIndex + "']").addClass("active"); // 해당 페이지 버튼에 active 클래스 추가
    }
});