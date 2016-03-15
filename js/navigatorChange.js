/**
 * Created by linzhongming on 16/3/14.
 */

function navigatorChange() {
    var shopClassItem = document.getElementsByClassName("shopClassItem");
    //alert(shopClassItem.length);
    alert(shopClassItem[0].classList);
    for (var shopClassItemNum=0;shopClassItemNum<5;shopClassItemNum++){
        shopClassItem[shopClassItemNum].className="shopClassItem"
    }

}
