$(function(){ //시작
    var viewImg = $('.artGroup .artView .image');
    var thumbsImg = $('.artGroup .article .image');
    var title = $('.artGroup li').even();
    var icon = $('.artGroup li i');

    thumbsImg.click(function(){
        viewImg.css('backgroundImage', $(this).css('backgroundImage'));
    });

    $('.show i').removeClass('xi-plus-min');
    $('.show i').addClass('xi-minus-min');
    title.click(function(){
        title.removeClass('show');
        $(this).addClass('show');
        icon.removeClass('xi-minus-min');
        icon.addClass('xi-plus-min');
        $('.show i').removeClass('xi-plus-min');
        $('.show i').addClass('xi-minus-min');
    });
}); //끝