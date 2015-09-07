/**
 * Created by DaisyCream on 2015/8/15.
 */
LOADING = function(){};

LOADING.IMG_ARRAY=[
    "png/arrow_left.png",
    "png/arrow_right.png",
    "png/CFC.png",
    "png/cloud1.png",
    "png/cloud2.png",
    "png/GGLG2.png",
    "png/home.png",
    "png/joinCommit.png",
    "png/joinCommit_click.png",
    "png/jump.png",
    "png/logo.png",
    "png/manPhoto.png",
    "png/nav_bg.png",
    "png/people_man.png",
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


LOADING.HiddenAll = function(){
    $$("page1").style.display = "none";
    $$("page2").style.display = "none";
    $$("page3").style.display = "none";
    $$("page4").style.display = 'none';
};

LOADING.DisplayAll = function(){
    $$("page1").style.display = "block";
    $$("page2").style.display = "block";
    $$("page3").style.display = "block";
    $$("page4").style.display = 'block';
};

LOADING.Start = function(){
    LOADING.HiddenAll();
    $$("loading").style.display = "block";
    LOADING.loadImg();
};

LOADING.End = function(){
    LOADING.DisplayAll();
    $$("loading").style.display = "none";
};


/***
 *
 */
LOADING.preSum = 0;
LOADING.preAll = 0;
LOADING.preLong = 200/LOADING.IMG_ARRAY.length;
LOADING.preNum = (100/LOADING.IMG_ARRAY.length);
LOADING.index = 0;
LOADING.loadImg = function() {
    if (LOADING.index >= LOADING.IMG_ARRAY.length){
        LOADING.preSum=200;
        $$("loadingBar").style.width = LOADING.preSum+"px";
        $$("loadingNum").innerHTML = "100%";
        LOADING.End();
        return;
    }

    var img = new Image();
    img.src = LOADING.IMG_ARRAY[LOADING.index];
    img.onload = function(){
        LOADING.preAll+=LOADING.preNum;
        LOADING.preSum+=LOADING.preLong;
        $$("loadingBar").style.width = LOADING.preSum+"px";
        $$("loadingNum").innerHTML = LOADING.preAll.toFixed(2)+"%";
        LOADING.index++;
        LOADING.loadImg();
    };

};

LOADING.Start();