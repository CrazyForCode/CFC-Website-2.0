/**
 * Created by DaisyCream on 2015/8/11.
 */

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
SCROLLWHEEL.isScroll = false;


SCROLLWHEEL.getEvent = function(){
    if(window.addEventListener){
        window.addEventListener('DOMMouseScroll',SCROLLWHEEL.startScroll,false);
    }
    window.onmousewheel = SCROLLWHEEL.startScroll;
    SCROLLWHEEL.addKeyControl();
};

SCROLLWHEEL.addKeyControl = function(){
    document.onkeydown = function(event){
        var event = event || window.event;
        switch(event.keyCode){
            case 38:
                SCROLLWHEEL.goDown();
                break;
            case 40:
                SCROLLWHEEL.goTo();
                break;
        }
    };
};

SCROLLWHEEL.startScroll = function(e){
    if(SCROLLWHEEL.isScroll){
        return;
    }
    e = e || window.event;
    if(e.wheelDelta || e.wheelDelta==0){
        if(e.wheelDelta>0){
            SCROLLWHEEL.goDown();
        }
        else{
            SCROLLWHEEL.goTo();
        }
    }
    else if(e.detail || e.detail==0){
        if(e.detail>0){
            SCROLLWHEEL.goTo();
        }
        else{
            SCROLLWHEEL.goDown();
        }
    }
    SCROLLWHEEL.isScroll = true;
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
    setTimeout(function(){
        SCROLLWHEEL.isScroll = false;
    },1500);
};

SCROLLWHEEL.goDown = function(){
    //SCROLLWHEEL.isScroll = false;
    if(SCROLLWHEEL.topNow<0){
        SCROLLWHEEL.topNow++;
    }
    body.style.top = SCROLLWHEEL.topNow * CONTROLHEIGHT.fixHeight + 'px';
    setTimeout(function(){
        SCROLLWHEEL.isScroll = false;
    },1500);
};

/****************************People Photo***************************/
var addPhoto = function(){};
addPhoto.windowPhoto = document.getElementsByClassName('windowPhoto');
addPhoto.count = 0;
addPhoto.theWindowPhoto = function(){
    for(addPhoto.count;addPhoto.count<LOADING.IMG_ARRAY_PHOTO.length;addPhoto.count++){
        addPhoto.windowPhoto[addPhoto.count].style.backgroundImage = 'url('+ LOADING.IMG_ARRAY_PHOTO[addPhoto.count] +')';
    }
};


/*********************************check the window is open**********************************/
var winSingle = document.getElementsByClassName('winSingle');
var openWindowTip = document.getElementById('openWindowTip');
for(var i=0;i<winSingle.length;i++){
    winSingle[i].onmousemove = function(){
        setTimeout(function(){openWindowTip.style.display = 'none';},1000);
    };
}


window.onload = function(){
};