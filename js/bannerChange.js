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
    var changeBannerBoard = document.getElementById("imgBox");
    var topMovePx = (buttonValue - 1) * (-315);
    changeBannerBoard.style.top = topMovePx + "px";
    var bannerPageNumber = document.getElementsByName("bannerPageNumber");
    for (var btnNum = 1; btnNum < 6; btnNum++) {
        bannerPageNumber[btnNum - 1].className = "inactiveBannerBoard";
    }
    bannerPageNumber[buttonValue - 1].className = "activeBannerBoard";
}

