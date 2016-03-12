/**
 * Created by linzhongming on 16/3/12.
 */
function TestJS(){
    //测试操作dom样式
    var testJS=document.getElementById("searchBtn");
    testJS.style.color="black";
}

function  bannerChange(buttonValue) {
    var changeBannerBoard = document.getElementById("imgBox");
    var topMovePx=(buttonValue-1)*(-315);
    changeBannerBoard.style.top = topMovePx;
}
