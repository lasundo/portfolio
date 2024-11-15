$(function(){
     // 페이지네이션 기능
     let currentPage = 1;
     const itemsPerPage = 5; // 한 페이지에 표시할 아이템 수
     const totalItems = $('.list_wrap#pagenation1 .list_item').length;
     const totalPages = Math.ceil(totalItems / itemsPerPage);
 
     function renderItems() {
         $('.wath_list_wrap#pagenation1 .container').hide();
         $('.wath_list_wrap#pagenation1 .container').slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).show();
 
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