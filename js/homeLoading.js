/**
 * Created by DaisyCream on 2015/8/15.
 */
var LOADING = function(){};
LOADING.IMG_ARRAY_VIDEO = [
    "png/loading_bg.png",
    "png/loadingLogo.png",
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
    "png/openWindowTip.png",
    "png/work1.png",
    "png/work2.png",
    "png/work3.png",
    "png/work4.png",
    "png/work5.png",
    "png/work6.png",
    "png/work7.png",
    "png/work8.png",
    "png/work9.png",
    "png/work10.png",
    "png/work11.png"
];
LOADING.IMG_ARRAY_PHOTO = [
    "peoplePhoto/yangli.png",
    "peoplePhoto/liangjingfeng.png",
    "peoplePhoto/wujian.png",
    "peoplePhoto/yanglingxiao.png",
    "peoplePhoto/yetianxiong.png",
    "peoplePhoto/limao.png",
    "peoplePhoto/yuanzhengli.png",
    "peoplePhoto/tongyun.png",
    "peoplePhoto/lixin.png",
    "peoplePhoto/dongshu.png",
    "peoplePhoto/lvhaosen.png",
    "peoplePhoto/chenhao.png",
    "peoplePhoto/zhuliping.png",
    "peoplePhoto/dandan.png",
    "peoplePhoto/liuqijun.png",
    "peoplePhoto/chenyaoxuan.png",
    "peoplePhoto/zhangyuanyuan.png",
    "peoplePhoto/tuhao.png",
    "peoplePhoto/huangshiwen.png",
    "peoplePhoto/jiawan.png",
    "peoplePhoto/liyeting.png",
    "peoplePhoto/shisan.png",
    "peoplePhoto/sunxuan.png",
    "peoplePhoto/tianchuanyu.png",
    "peoplePhoto/wangchaoran.png",
    "peoplePhoto/zhangsicong.png",
    "peoplePhoto/caoyunxuan.png",
    "peoplePhoto/liwanjing.png",
    "peoplePhoto/liyunhang.png",
    "peoplePhoto/liaozhongwei.png",
    "peoplePhoto/wudongliang.png",
    "peoplePhoto/lifeng.png",
    "peoplePhoto/xufangzheng.png",
    "peoplePhoto/yangjusheng.png",
    "peoplePhoto/yangxin.png",
    "peoplePhoto/zhanghaolin.png",
    "peoplePhoto/zhangyunzhao.png"
];


function $$(target){
    return document.getElementById(target);
}

LOADING.homeDisplayAll = function(){
    $$("page1").style.display = "block";
    $$("page2").style.display = "block";
    $$("page3").style.display = "block";
    $$("page4").style.display = 'block';
    $$("loading").style.display = 'none';
};



LOADING.homeIndex = 0;
LOADING.loadingLong = 50;
LOADING.statusImgStr = LOADING.IMG_ARRAY_VIDEO.concat(LOADING.IMG_ARRAY_PHOTO);

LOADING.homeLoadingStart = function(){
    LOADING.loadImg(LOADING.statusImgStr,LOADING.homeIndex);
};

LOADING.homeLoadingEnd = function(){
    $$("loading").setAttribute('class','.homeShowOpacity');
    $$("loading").style.opacity = 0;
    LOADING.homeDisplayAll();
    SCROLLWHEEL.getEvent();
    addPhoto.theWindowPhoto();
};



LOADING.longNow = 56;
LOADING.avgLongRemove = (LOADING.loadingLong/LOADING.statusImgStr.length).toFixed(2);
console.log(LOADING.avgLongRemove);

LOADING.loadImg = function(imgStr,index) {
    if (index >= imgStr.length){
        $$('loadingBg').style.top = '6%';
        LOADING.homeLoadingEnd();
        return;
    }

    var img = new Image();
    img.src = imgStr[index];
    img.onload = function(){
        index++;
        LOADING.longNow-=LOADING.avgLongRemove;
        $$('loadingBg').style.top = LOADING.longNow + '%';
        setTimeout(function(){
        LOADING.loadImg(imgStr,index)},40);
    };
};

$$('loading').style.height = document.documentElement.clientHeight -1 + 'px';


LOADING.homeLoadingStart();

