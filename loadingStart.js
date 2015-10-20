/**
 * Created by DaisyCream on 15/10/20.
 */
var LOADINGSTART = function(){};
LOADINGSTART.target = document.getElementsByTagName('span');
LOADINGSTART.moveCount = 0;
LOADINGSTART.stopTime;
LOADINGSTART.turnNew = false;

LOADINGSTART.loadingMove = function() {
    LOADINGSTART.target[LOADINGSTART.moveCount].setAttribute('class', 'loadingCFCMove');
    LOADINGSTART.moveCount++;

    LOADINGSTART.turnNew = false;
    if (LOADINGSTART.moveCount == LOADINGSTART.target.length) {
        setTimeout(LOADINGSTART.removeClass,1400);
        LOADINGSTART.moveCount = 0;
        LOADINGSTART.turnNew = true;
    }
    LOADINGSTART.stopTime = setTimeout(LOADINGSTART.loadingMove,500);
    if(LOADINGSTART.turnNew){
        clearTimeout(LOADINGSTART.stopTime);
    }
};

LOADINGSTART.removeClass = function(){
    for(var i=0;i<LOADINGSTART.target.length;i++) {
        LOADINGSTART.target[i].removeAttribute('class');
    }
    setTimeout(LOADINGSTART.loadingMove,50);
};

LOADINGSTART.loadingMove();