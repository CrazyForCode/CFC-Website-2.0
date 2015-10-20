/**
 * Created by DaisyCream on 2015/8/15.
 */
var LOADING = function(){};
LOADING.IMG_ARRAY_VIDEO = [
    "png/loading_bg.png",
    "png/loadingLogo.png",
    "png/enterBtu.png",
    "png/introductionCooper.png",
    "png/introductionFree.png",
    "png/introductionHappy.png",
    "png/introductionHeight.png",
    "png/introductionHonor.png",
    "png/teamIntroduction.png",
    "png/videoPage.png"
];

LOADING.IMG_ARRAY_HOME=[
    "png/arrow_left.png",
    "png/arrow_right.png",
    "png/CFC.png",
    "png/cloud1.png",
    "png/cloud2.png",
    "png/cutApart.png",
    "png/home.png",
    "png/joinCommit.png",
    "png/joinCommit_click.png",
    "png/jump.png",
    "png/logo.png",
    "png/nav_bg.png",
    "png/rail.png",
    "png/show.png",
    "png/title.png",
    "png/window_big.png",
    "png/work1.png",
    "png/work2.png",
    "png/work3.png",
    "png/work4.png",
    "png/work5.png",
    "png/work6.png",
    "png/work7.png",
    "png/work8.png",
    "png/work9.png",
    "png/work10.png"
];

function $$(target){
    return document.getElementById(target);
}

LOADING.videoHiddenAll = function(){
    $$("page1").style.display = "none";
    $$("page2").style.display = "none";
    $$("page3").style.display = "none";
    $$("page4").style.display = 'none';
    $$("videoShow").style.display = 'none';
};

LOADING.videoDisplayAll = function(){
    $$("page1").style.display = "none";
    $$("page2").style.display = "none";
    $$("page3").style.display = "none";
    $$("page4").style.display = 'none';
};

LOADING.homeDisplayAll = function(){
    $$("page1").style.display = "block";
    $$("page2").style.display = "block";
    $$("page3").style.display = "block";
    $$("page4").style.display = 'block';
    $$("loading").style.display = 'none';
};



LOADING.videoIndex = 0;
LOADING.homeIndex = 0;



LOADING.videoLoadingStart = function(){
    console.log("loading");
    LOADING.videoHiddenAll();
    $$("loading").style.display = "block";
    LOADING.loadImg(LOADING.IMG_ARRAY_VIDEO,LOADING.videoIndex);
};

LOADING.homeLoadingStart = function(){
    LOADING.videoDisplayAll();
    $$("videoShow").style.display = 'block';
    $$("videoShow").setAttribute('class','videoShowOpacity');
    $$("videoShow").style.opacity = 1;
    $$("loading").style.display = "none";
    //SCROLLWHEEL.getEvent();
};




LOADING.loadImg = function(imgStr,index) {
    if (index >= imgStr.length){
        LOADING.homeLoadingStart();
        return;
    }

    var img = new Image();
    img.src = imgStr[index];
    img.onload = function(){
        index++;
        console.log(index);
        setTimeout(function(){

        LOADING.loadImg(imgStr,index)},200);
    };
};

$$('loading').style.height = document.documentElement.clientHeight -1 + 'px';


LOADING.videoLoadingStart();

