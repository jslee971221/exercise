$(function(){
    //$()는 너무 남발하면 메모리 낭비가 심하기때문에 자주 사용되는 것들은 변수에 담아놓는다.
    var btn = $('button');
    var q1 = 0;
    var q1Group = $('.q1View>.artGroup');
    var q1List = $('.q1View .article');
    var q2 = 0;
    var q2Group = $('.q2View>.artGroup');
    var q2List = $('.q2View .article');
    var q2PagingBtn = $('.q2View li');
    var q3View = $('.q3View .thumbView');
    var q3Thumb = $('.q3View .thumb');
    var q4I = 0;
    var q4J = 0;
    var q4View = $('.q4View .thumbView');
    var q4Group = $('.q4View .thumbnails');
    var q4Thumb = $('.q4View .thumbnails .thumb');
    //겹치는 부분은 함수로 정리하여 중복되는 부분을 줄인다.
    var limit = function(i, list){ //슬라이드의 마지막 이미지에서 더 넘어가지 않도록 제한을 줌.
        if(i >= list.length){
            return list.length - 1;
        }else if(i <= 0){
            return 0;
        }else{
            return i;
        }
    }
    var indexClass = function(group, btn, i){
        group.css('marginTop', -500 * i + 'px');
        btn.removeClass('show');
        btn.eq(i).addClass('show');
    }
    var grayscale = function(qView, qThumb, i){
        qView.css('marginLeft', -100 * i + '%');
        qThumb.css('filter', 'grayscale(1)'); 
        qThumb.eq(i).css('filter', 'grayscale(0)');
    }

    //문제 1
    btn.eq(0).click(function(){
        q1++;
        q1 = limit(q1, q1List);
        q1Group.css('marginLeft', -100 * q1 + '%');
    });
    btn.eq(1).click(function(){
        q1--;
        q1 = limit(q1, q1List);
        q1Group.css('marginLeft', -100 * q1 + '%');
    });
    //

    //문제 2
    q2PagingBtn.click(function(){
        q2 = $(this).index();
        indexClass(q2Group, q2PagingBtn, q2);
    });
    btn.eq(2).click(function(){
        q2++;
        q2 = limit(q2, q2List);
        indexClass(q2Group, q2PagingBtn, q2);
        
    });
    btn.eq(3).click(function(){
        q2--;
        q2 = limit(q2, q2List);
        indexClass(q2Group, q2PagingBtn, q2);               
    });
    //
    //문제 3
    q3Thumb.click(function(){
       q3View.css('backgroundColor', $(this).css('backgroundColor'));
       q3View.text($(this).text());
    });
    //
    //문제 4
    q4Thumb.click(function(){
        q4J = $(this).index(); 
        grayscale(q4View, q4Thumb, q4J);
    });
    btn.eq(4).click(function(){
        q4I++;
        if(q4I >= 3){
            q4I = 3;
        }
        q4J++;
        q4J = limit(q4J, q4Thumb); 
        q4Group.css('marginLeft', -20 * q4I + '%');
        grayscale(q4View, q4Thumb, q4J);
    });
    btn.eq(5).click(function(){
        q4I--;
        if(q4I <= 0){
            q4I = 0;
        }
        q4J--;
        q4J = limit(q4J, q4Thumb);
        q4Group.css('marginLeft', -20 * q4I + '%');
        grayscale(q4View, q4Thumb, q4J);
    });
});