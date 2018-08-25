$(document).ready(function(){
    
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
    
    
});