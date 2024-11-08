document.addEventListener('DOMContentLoaded', function () {
    var familySiteBtn = document.querySelector('.family_site_btn');
    var familySiteMenu = document.querySelector('.family_site_menu');

    familySiteBtn.addEventListener('click', function () {
        if (familySiteMenu.style.display === 'block') {
            familySiteMenu.style.display = 'none';
        } else {
            familySiteMenu.style.display = 'block';
        }
    });

    document.addEventListener('click', function (e) {
        if (!familySiteBtn.contains(e.target) && !familySiteMenu.contains(e.target)) {
            familySiteMenu.style.display = 'none';
        }
    });
});