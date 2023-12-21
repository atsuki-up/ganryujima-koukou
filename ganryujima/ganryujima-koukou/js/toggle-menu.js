window.addEventListener('load', function () {
    var $button = document.querySelector('.toggle-menu-buttom');
    var $menu = document.querySelector('.header-site-menu');
    $button.addEventListener('click', function () {
        if ($menu.classList.contains('is-show')) {
            $menu.classList.remove('is-show');
        }
        else {
            $menu.classList.add('is-show');
        }
    });
});
