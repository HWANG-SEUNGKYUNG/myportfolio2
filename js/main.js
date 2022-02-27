var myFullpage = new fullpage('#fullpage', {
    menu: '.gnb_list',
    anchors: ['section0','section1', 'section2', 'section3', 'section4','section5','section6','section7'],
    sectionsColor: ['#ffffff00'],
    autoScrolling: true,  //스크롤 바를 스크롤 하면 한 페이지씩 넘어감(기본설정)
    responsiveHeight:350,  //세로 높이가 350px보다 작아졌을때는 오토스크롤링 작동X
    scrollBar:true, 
    navigation:true , //오른쪽 페이지 버튼
    // normalScrollElements: '#s7',
    //오토스크롤이 아니라 정상 스크롤이 적용
});

new WOW().init();

/*chart doughnut1*/
const chart1 = document.querySelector('.doughnut1');
const chart2 = document.querySelector('.doughnut2');
const chart3 = document.querySelector('.doughnut3');
const chart4 = document.querySelector('.doughnut4');
const chart5 = document.querySelector('.doughnut5');
const chart6 = document.querySelector('.doughnut6');


const makeChart = (percent, classname, color) => {
    let i = 1;
    let chartFn = setInterval(function() {
        if (i < percent) {
        colorFn(i, classname, color);
        i++;
        } else {
        clearInterval(chartFn);
        }
    }, 19); //도넛차트속도
}

const colorFn = (i, classname, color) => {
    classname.style.background = "conic-gradient(" + color + " 0% " + i + "%, #dedede " + i + "% 100%)";
}

const replay = () => {
    makeChart(90, chart1, '#38a5fd');
    makeChart(85, chart2, '#38a5fd');
    makeChart(75, chart3, '#38a5fd');
    makeChart(95, chart4, '#38a5fd');
    makeChart(90, chart5, '#38a5fd');
    makeChart(80, chart6, '#38a5fd');
}

makeChart(90, chart1, '#38a5fd');
makeChart(85, chart2, '#38a5fd');
makeChart(75, chart3, '#38a5fd');
makeChart(95, chart4, '#38a5fd');
makeChart(90, chart5, '#38a5fd');
makeChart(80, chart6, '#38a5fd');

/*action-button*/
$(function() {
    $(".read-more > a").on('mouseenter', function(e) {
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find("span").css({
        top: y,
        left: x
        });
    });
    $(".read-more > a").on('mouseout', function(e) {
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find("span").css({
        top: y,
        left: x
        });
    });
});

//gwkf mobile 창
$(".gwkfmobileA > a").click(function(){
    window.open("https://hwang-seungkyung.github.io/GWKF-m/", "광주세계김치축제_m", "width=375 , height=800");
});



//designImg
var $btn = $('.designNav li a');

$btn.click(function(){
    
    $btn.removeClass('on');
    $(this).addClass('on');
});


/*  isotope 플러그인 설정 */
$('.thumb').isotope({
    // options
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    stagger: 30
});


/*  isotope 플러그인을 이용한 필터링 */
$('.btn_article').click(function(){
    $('.thumb').isotope({ filter: '.article' });
});
$('.btn_logo').click(function(){
    $('.thumb').isotope({ filter: '.logo' });
});
$('.btn_app').click(function(){
    $('.thumb').isotope({ filter: '.app' });
});
$('.btn_brand').click(function(){
    $('.thumb').isotope({ filter: '.brand' });
});
$('.btn_graphic').click(function(){
    $('.thumb').isotope({ filter: '.graphic' });
});


//갤러리(Fancybox 박스  http://fancybox.net/)
$(".thumb li img").fancybox({

    transitionEffect: "circular",  
    buttons: [
        "zoom",
        "share",
        "slideShow",
        "close",
    ],
});


//topbtn
$('.topbtn').click(function(){
    $('html').animate({scrollTop:0},1000);     
});


//contactbox on
var $icon = $('.iconbox img');

$icon.click(function(){
    
    $icon.removeClass('iconon');
    $(this).addClass('iconon');
});

//contactbox tab

$('.content div:gt(0)').hide();

$(".tab li").click(function(){
    var nn = $(this).index();   //몇번째 li를 클릭한건지 알아내서 변수에 넣어준다.(0부터시작)

    $(".tab li").removeClass("select");
    $(this).addClass("select");

    $(".content div").hide();
    $(".content div").eq(nn).show();

});
