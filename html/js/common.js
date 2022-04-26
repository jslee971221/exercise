$(function(){
    $('.hdr').load('./inc/header.html', function(){

        $('html').animate({
            scrollTop : 0
        },0);


        var loc = [];
        var ind = 0;
        for(var i=0; i<$('body>div').length; i++){
            loc[i] = $('body>div').eq(i).offset().top;
        }
        $('.hdrLeft nav h4').click(function(){
            ind = $(this).index();
            $('html').animate({
                scrollTop : loc[ind + 1] - 80
            }, 500);
        });
    });
    $('.ftr').load('./inc/footer.html');
});
