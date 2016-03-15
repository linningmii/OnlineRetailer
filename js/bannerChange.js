/**
 * Created by linzhongming on 16/3/12.
 */
function TestJS(x) {

    //测试操作dom样式
    var testJS = document.getElementById("searchBtn");
    var FFontSize = 0;
    if (x == "搜 索") {
        FFontSize = 25;

    }
    else {
        FFontSize = 8;
    }
    testJS.style.fontSize = FFontSize + "px";
    alert(testJS.style.width);
}

function bannerChange(buttonValue) {
    //切换图片内容
    var changeBannerBoard = document.getElementById("bannerBoardImgBox");
    var topMovePx = (buttonValue - 1) * (-315);    //图片纵向排列,默认高度为315px,初始top为0,top每减少315px即切换到下一张图片
    changeBannerBoard.style.top = topMovePx + "px";

    //切换数字按钮样式
    var bannerPageNumber = document.getElementsByName("bannerPageNumber");
    for (var btnNum = 1; btnNum < 6; btnNum++) {
        bannerPageNumber[btnNum - 1].className = "inactiveBannerBoard";
    }
    bannerPageNumber[buttonValue - 1].className = "activeBannerBoard";
}

function shopListBannerChange(buttonValue){
    var changeBannerBoard = document.getElementById("shopListImgBox");
}

