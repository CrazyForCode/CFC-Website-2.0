/**
 * Created by DaisyCream on 2015/8/11.
 */


//    var arrowUp = document.getElementById("arrowUp");
//    var arrowDown = document.getElementById("arrowDown");
//    var workAll = document.getElementById("workAll");
//    var workCount = 0;//�����ڵڼ���workWindow
//    var workHeight = 260;//�ƶ��ĳ���
//
//    arrowDown.onclick = function(){
//        workCount++;
//        if(workCount>3){
//            workCount=3;
//            return;
//        }
//        workAll.style.top = -(workCount*workHeight)+"px";
//    }
//
//
//    arrowUp.onclick = function workmoveup(){
//        workCount--;
//        if(workCount<0){
//            workCount=0;
//            return;
//        }
//        workAll.style.top = -(workCount*workHeight)+"px";
//    }



function $$(target){
    return document.getElementById(target);
}

/****************************WORKSHOW***************************/


WORKSHOW = function(){};
WORKSHOW.workShowOpenBtu = document.getElementById("workShowOpenBtu");
WORKSHOW.workShowScreen = document.getElementById("workShowScreen");
WORKSHOW.btuClickCount = 0;
WORKSHOW.workShowOpenBtu.onclick = function(){
    WORKSHOW.btuClickCount++;
    if(WORKSHOW.btuClickCount%2!=0) {
        WORKSHOW.workShowScreen.className = "workShowScreenON";
        WORKSHOW.workShowScreen.style.display = "block";
    }
    else{
        WORKSHOW.workShowScreen.className = "workShowScreenOFF";
    }
};



/***
 * This is the add show
 */
WORKSHOW.workShowContent = document.getElementById("workShowContent");
WORKSHOW.workShowContentSingle = document.getElementsByClassName("workShowContentSingle");
WORKSHOW.workShowContentSingleCount = WORKSHOW.workShowContentSingle.length;
WORKSHOW.addShow = function(){
    WORKSHOW.workShowContent.style.width = 600*WORKSHOW.workShowContentSingleCount+"px";
};
WORKSHOW.addShow();


/***
 * This is the workShow picture set
 */
WORKSHOW.workShowPhoto = document.getElementsByClassName("workShowPhoto");
WORKSHOW.setPicture = function(){
    for(var i=0;i<WORKSHOW.workShowPhoto.length;i++){
        WORKSHOW.workShowPhoto[i].style.backgroundImage = "url(png/work"+(i+1)+".png)";
    }
};

WORKSHOW.setPicture();


/***
 * This is the workShow slide
 */
WORKSHOW.slideLong = 0;
$("#arrowLeft").click(function(){
    if(WORKSHOW.slideLong<0){
        WORKSHOW.slideLong++;
        $("#workShowContent").animate({left:WORKSHOW.slideLong*600+"px"},1000);
    }

});
$("#arrowRight").click(function(){
    if(WORKSHOW.slideLong>-(WORKSHOW.workShowContentSingleCount-1)){
        WORKSHOW.slideLong--;
        $("#workShowContent").animate({left:WORKSHOW.slideLong*600+"px"},1000);
    }
});


/**
 * This is the web control height
 * @constructor
 */
CONTROLHEIGHT = function(){};

CONTROLHEIGHT.fixHeight = document.documentElement.clientHeight;
CONTROLHEIGHT.fixWidth = document.documentElement.clientWidth;

CONTROLHEIGHT.setHeight = function(){
    $$('page1').style.height = CONTROLHEIGHT.fixHeight + 'px';
    $$('page2').style.height = CONTROLHEIGHT.fixHeight + 'px';
    $$('page3').style.height = CONTROLHEIGHT.fixHeight - 1 + 'px';

};

CONTROLHEIGHT.setHeight();


/*************************************onmousewheel*********************************/
var SCROLLWHEEL = function(){};
var body = document.getElementsByTagName('body')[0];
SCROLLWHEEL.topNow = 0;


SCROLLWHEEL.getEvent = function(){
    if(window.addEventListener){
        window.addEventListener('DOMMouseScroll',SCROLLWHEEL.startScroll,true);
    }
    window.onmousewheel = SCROLLWHEEL.startScroll;
};

SCROLLWHEEL.startScroll = function(e){
    e = e || window.event;
    if(e.wheelDelta){
        if(e.wheelDelta>0){
            SCROLLWHEEL.goDown();
        }
        else{
            SCROLLWHEEL.goTo();
        }
    }
    if(e.detail){
        if(e.detail>0){
            SCROLLWHEEL.goTo();
        }
        else{
            SCROLLWHEEL.goDown();
        }
    }

};

SCROLLWHEEL.goTo = function(){
    if(SCROLLWHEEL.topNow==-2){
        body.style.top = SCROLLWHEEL.topNow * CONTROLHEIGHT.fixHeight-$$('page4').clientHeight - CONTROLHEIGHT.fixWidth*0.05 + 'px';
        SCROLLWHEEL.topNow--;
    }
    if(SCROLLWHEEL.topNow>-2){
        SCROLLWHEEL.topNow--;
        body.style.top = SCROLLWHEEL.topNow * CONTROLHEIGHT.fixHeight + 'px';
    }
};

SCROLLWHEEL.goDown = function(){
    if(SCROLLWHEEL.topNow<0){
        SCROLLWHEEL.topNow++;
    }
    body.style.top = SCROLLWHEEL.topNow * CONTROLHEIGHT.fixHeight + 'px';
};

window.onload = function(){
    //alert(CONTROLHEIGHT.fixWidth*0.05);
    SCROLLWHEEL.getEvent();
};