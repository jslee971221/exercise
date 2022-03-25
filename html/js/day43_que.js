<<<<<<< HEAD
$(function(){//시작
    var q1Li = $('.arcodion>li');
    var q2i = 0;
    var q2btn = $('.q2ArtView .btn div');
    var q2Group = $('.q2ArtView .artGroup');
    var q3i = 0;
    var q3btn = $('.q3ArtView .btn div');
    var q3pbtn = $('.q3ArtView .paging li');
    var q3Group = $('.q3ArtView .artGroup');
    var q3Article = $('.q3ArtView .artGroup .article');
    var q4i = 0;
    var q4btn = $('.q4ArtView .btn div');
    var q4Group = $('.q4ArtView .artGroup');
    var q4pbtn = $('.q4ArtView .paging li');
    var q4Group = $('.q4ArtView .artGroup');
    var q4Article = $('.q4ArtView .artGroup.left .article');
    var limit = function(i, list){
        if(i >= list.length){
            return list.length - 1;
        }else if(i <= 0){
            return 0;
        }else{
            return i;
        }
    }
    var pagingSlideLR = function(i, group, pbtn){
        pbtn.removeClass('show');
        pbtn.eq(i).addClass('show');
        group.css('marginLeft', -100 * i + '%');
    }
    var pagingSlideUD = function(i, group, pbtn){
        pbtn.removeClass('show');
        pbtn.eq(i).addClass('show');
        group.css('marginTop', -200 * i + 'px');
    }

    // 문제1
    q1Li.even().click(function(){
        q1Li.removeClass('show');
        $(this).next().addClass('show');
    });

    // 문제2
    q2btn.eq(1).css('opacity', '0');
    q2btn.eq(0).click(function(){
        q2i++;
        if(q2i >= 9){
            q2btn.eq(0).css('opacity', '0')
        }else{
            q2btn.css('opacity', '1');
        }
        if(q2i >= 9){
            q2i = 9;
        }
        q2Group.css('marginLeft', -33.33 * q2i + '%');
    });
    q2btn.eq(1).click(function(){
        q2i--;
        if(q2i <= 0){
            q2btn.eq(1).css('opacity', '0');
        }else{
            q2btn.css('opacity', '1'); 
        }
        if(q2i <= 0){
            q2i = 0;
        }
        q2Group.css('marginLeft', -33.33 * q2i + '%');
    });

    //문제3
    q3pbtn.click(function(){
        q3i = $(this).index();
        pagingSlideLR(q3i, q3Group, q3pbtn);
    });
    q3btn.eq(0).click(function(){
        q3i++;
        q3i = limit(q3i, q3Article);
        pagingSlideLR(q3i, q3Group, q3pbtn);
    });
    q3btn.eq(1).click(function(){
        q3i--;
        q3i = limit(q3i, q3Article);
        pagingSlideLR(q3i, q3Group, q3pbtn);
    });

    //문제4
    q4pbtn.click(function(){
        q4i = $(this).index();
        pagingSlideUD(q4i, q4Group, q4pbtn);
    });
    q4btn.eq(0).click(function(){
        q4i++;
        q4i = limit(q4i, q4Article);
        pagingSlideUD(q4i, q4Group, q4pbtn);
    });
    q4btn.eq(1).click(function(){
        q4i--;
        q4i = limit(q4i, q4Article);
        pagingSlideUD(q4i, q4Group, q4pbtn);
    });


=======
$(function(){//시작
    var q1Li = $('.arcodion>li');
    var q2i = 0;
    var q2btn = $('.q2ArtView .btn div');
    var q2Group = $('.q2ArtView .artGroup');
    var q3i = 0;
    var q3btn = $('.q3ArtView .btn div');
    var q3pbtn = $('.q3ArtView .paging li');
    var q3Group = $('.q3ArtView .artGroup');
    var q3Article = $('.q3ArtView .artGroup .article');
    var q4i = 0;
    var q4btn = $('.q4ArtView .btn div');
    var q4Group = $('.q4ArtView .artGroup');
    var q4pbtn = $('.q4ArtView .paging li');
    var q4Group = $('.q4ArtView .artGroup');
    var q4Article = $('.q4ArtView .artGroup.left .article');
    var limit = function(i, list){
        if(i >= list.length){
            return list.length - 1;
        }else if(i <= 0){
            return 0;
        }else{
            return i;
        }
    }
    var pagingSlideLR = function(i, group, pbtn){
        pbtn.removeClass('show');
        pbtn.eq(i).addClass('show');
        group.css('marginLeft', -100 * i + '%');
    }
    var pagingSlideUD = function(i, group, pbtn){
        pbtn.removeClass('show');
        pbtn.eq(i).addClass('show');
        group.css('marginTop', -200 * i + 'px');
    }

    // 문제1
    q1Li.even().click(function(){
        q1Li.removeClass('show');
        $(this).next().addClass('show');
    });

    // 문제2
    q2btn.eq(1).css('opacity', '0');
    q2btn.eq(0).click(function(){
        q2i++;
        if(q2i >= 9){
            q2btn.eq(0).css('opacity', '0')
        }else{
            q2btn.css('opacity', '1');
        }
        if(q2i >= 9){
            q2i = 9;
        }
        q2Group.css('marginLeft', -33.33 * q2i + '%');
    });
    q2btn.eq(1).click(function(){
        q2i--;
        if(q2i <= 0){
            q2btn.eq(1).css('opacity', '0');
        }else{
            q2btn.css('opacity', '1'); 
        }
        if(q2i <= 0){
            q2i = 0;
        }
        q2Group.css('marginLeft', -33.33 * q2i + '%');
    });

    //문제3
    q3pbtn.click(function(){
        q3i = $(this).index();
        pagingSlideLR(q3i, q3Group, q3pbtn);
    });
    q3btn.eq(0).click(function(){
        q3i++;
        q3i = limit(q3i, q3Article);
        pagingSlideLR(q3i, q3Group, q3pbtn);
    });
    q3btn.eq(1).click(function(){
        q3i--;
        q3i = limit(q3i, q3Article);
        pagingSlideLR(q3i, q3Group, q3pbtn);
    });

    //문제4
    q4pbtn.click(function(){
        q4i = $(this).index();
        pagingSlideUD(q4i, q4Group, q4pbtn);
    });
    q4btn.eq(0).click(function(){
        q4i++;
        q4i = limit(q4i, q4Article);
        pagingSlideUD(q4i, q4Group, q4pbtn);
    });
    q4btn.eq(1).click(function(){
        q4i--;
        q4i = limit(q4i, q4Article);
        pagingSlideUD(q4i, q4Group, q4pbtn);
    });


>>>>>>> a9386bd991bffe6883888ae390cbef6dcea29f99
});//끝