$(document).ready(function(){
    
    var masTab = $('.service_tabs .tab'), masServices = $('.services_wrap');
    $(masTab).click(function(){
        $('.service_tabs .tab').removeClass('active');
        $(this).addClass('active');
        var ind = $(this).index();
        $('.services_wrap').hide();
        $(masServices[ind]).fadeIn();
    });
    
    $('.services_wrap .mob_tab').click(function(){
        $(this).toggleClass('active');
        $(this).parent().find('.services_bg').slideToggle();
    });
    
    $('.header_sliders_flex .main_slider').slick({
        arrows: false,
        dots: true,
        fade: true
    });
    
    $('.header_bl .important_info_slider').slick({
        arrows: false,
        dots: true
    });
    
    $('.banner_index_slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true
    });
    
    $('.events_slider').slick({
        arrows: true,
        dots: true
    });
    
    $('.useful_links_flex').slick({
        arrows: false,
        dots: true,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
    if($(window).width() < 600){
        $('.useful_links_flex').slick('unslick');
    }
    
    $('.menu_mob_btn').click(function(){
        $('.menu_bl .menu').height($(window).height() - 43);
        $('body').toggleClass('noscroll');
        $('.menu_ico,.menu_mob_btn').toggleClass('active');
        $('.menu_bl .menu').slideToggle();
    });
    
    $('.employees_data_table .table_tab').click(function(){
        $(this).next('.table_hide,.table_second').slideToggle();
    });
    
    $('.list_pages .page_tab').click(function(){
        $(this).toggleClass('active');
        $(this).next('.list_pages .second_hide').slideToggle();
    });
    
    $(".fancybox").fancybox({
        helpers : {
            title : {
                type : 'inside'
            }
        },
        afterLoad : function() {
            this.title = (this.title ? '  ' + this.title : '') + '</br><span style="color:#fff;font:15px Montserrat;position:relative;top: 20px;font-weight:700;">' + 'Фото ' + (this.index + 1) + ' из ' + this.group.length ;
        }
    });
    
    $('.helpful_information_bl .add_link').click(function(e){
        e.preventDefault();
        $('.helpful_information_bl .more_item').slideDown();
    });
    
    $('.calendar_news .date_popup').datepicker();
    
});

function ResizeLoad(){
    if($(window).width() > 1240){
        $('.media_banner_bg').width(($(window).width() - 1200)/2 + 285);
        $('.media_banner_bg').css({marginLeft: -($(window).width()-1200)/2+'px'});
        $('.filter_news_bg').width($('.filter_news').width()+($(window).width() - 1200)/2);
        $('.filter_news_bg').css({marginRight: -($(window).width()-1200)/2+'px'});
    } else{
        $('.media_banner_bg').width('auto');
        $('.media_banner_bg').css({marginLeft: '-20px'});
    }
}
$(window).on('load resize', ResizeLoad);