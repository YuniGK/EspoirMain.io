//신상품
$(".productUl li").hover(function () {
    $(this).find('.hoverBefore').css('opacity', '0');
    $(this).find('.hoverAfter').css('opacity', '1');
}, function () {
    $(this).find('.hoverBefore').css('opacity', '1');
    $(this).find('.hoverAfter').css('opacity', '0');
});

$('.productUl').masonry({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.productUl li',
    // use element for option
    columnWidth: '.productUl li',
    percentPosition: true
})

//리뷰 상품
$(".swiper-productSlider li").hover(function () {
    $(this).find('.hoverBefore').css('opacity', '0');
    $(this).find('.hoverAfter').css('opacity', '1');
}, function () {
    $(this).find('.hoverBefore').css('opacity', '1');
    $(this).find('.hoverAfter').css('opacity', '0');
});

//헤더 
$(window).scroll(function () {
    var height = $(document).scrollTop(); //실시간으로 스크롤의 높이를 측정
    if (height > 0) {
        $('header .logoBox').addClass('fixed');
    } else if (height == 0) {
        $('header .logoBox').removeClass('fixed');
    }
});

//입력창 비우기
let closeBtn = $(".fa-times-circle");

closeBtn.click(function () {
    $(".searchBox .search input").val("");
});

//메뉴 클릭
var $mainSidebar = $(".mBox");

function openNav() {
    $mainSidebar.css({
        'left': '0px'
    });
}

$(window).resize(function () {
    //console.log($(window).width());
    //console.log($(window).width() > 1024);

    if ($(window).width() > 1024) {
        closeNav();
    }
});

function closeNav() {
    $mainSidebar.css({
        'left': '-100%'
    });
}

//메인 슬라이드
var swiper = new Swiper(".swiper-mainslider", {
    slidesPerView: 1,
    loop: true,
    mousewheel: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//리뷰 상품 슬라이드
var prodcutswiper = new Swiper(".swiper-productSlider", {
    spaceBetween: 30,
    slidesPerView: 3,
    loop: true,
    mousewheel: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});