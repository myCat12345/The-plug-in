var Common={};
Common.formatDuring=formatDuring;
Common.getDate=getDate;
Common.timer=timer;
Common.stairs=stairs;
function formatDuring(mss) {
    var days, hours, minutes, seconds,totaldays,totalhours,totalminutes,totalseconds;
    totaldays=parseInt(mss/(1000*60*60*24));
    totalhours=parseInt(mss/(1000*60*60));
    totalminutes=parseInt(mss/(1000*60));
    totalseconds=parseInt(mss/1000);
    days = parseInt(mss / (1000 * 60 * 60 * 24));
    hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
    seconds = parseInt((mss % (1000 * 60)) / 1000);
    return data={              
        'totaldays':totaldays,
        'totalhours':totalhours,
        'totalminutes':totalminutes,
        'totalseconds':totalseconds,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }    
}
function getDate(endtime) {
    return formatDuring(new Date(endtime) - new Date());    
}    
function timer(fun,time){
    return setInterval(fun,time);
}
function stairs(){
    //1.楼梯什么时候显示，800px scroll--->scrollTop
        $(window).on('scroll',function(){
            var $scroll=$(this).scrollTop();
            console.log($scroll);
            if($scroll>=800){
                $('#loutinav').show();
            }else{
                $('#loutinav').hide();
            }

            //4.拖动滚轮，对应的楼梯样式进行匹配
            $('.louti').each(function(){
                var $loutitop=$('.louti').eq($(this).index()).offset().top+400;
                //console.log($loutitop);
                if($loutitop>$scroll){//楼层的top大于滚动条的距离
                    $('#loutinav li').removeClass('active');
                    $('#loutinav li').eq($(this).index()).addClass('active');
                    return false;//中断循环
                }
            });
        }); 
        //2.获取每个楼梯的offset().top,点击楼梯让对应的内容模块移动到对应的位置  offset().left        
        var $loutili=$('#loutinav li').not('.last');
        $loutili.on('click',function(){
            $(this).addClass('active').siblings('li').removeClass('active');
            var $loutitop=$('.louti').eq($(this).index()).offset().top;
            //获取每个楼梯的offsetTop值
            $('html,body').animate({//$('html,body')兼容问题body属于chrome
                scrollTop:$loutitop
            })
        });
        //3.回到顶部
        $('.last').on('click',function(){
            $('html,body').animate({//$('html,body')兼容问题body属于chrome
                scrollTop:0
            })
        }); 
}