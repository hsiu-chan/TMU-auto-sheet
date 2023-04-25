# TMU-auto-sheet
>需要先在瀏覽器安裝油猴插件（Tampermonkey）

直接把 main.js 貼到油猴新增腳本裡面，存檔之後，只要到教務行政系統點擊教學評量就會自動填好（都非常同意）

```javascript
// ==UserScript==
// @name         TMU auto sheet
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       xiang
// @match        https://newacademic.tmu.edu.tw/mainframe.aspx
// @icon         https://www.google.com/s2/favicons?sz=64&domain=edu.tw
// @grant        none
// @license     MIT
// ==/UserScript==



(function () {

setInterval(function(){
    let window_element = document.getElementsByName('viewFrame')[0].contentWindow.document;
    let div_element=window_element.getElementById("table2");
    if (div_element){
        let input_elements = div_element.getElementsByTagName("input");
        for(let i = 0; i < input_elements.length; i++) {input_elements[i].checked = true;}//全部都非常滿意
        window_element.getElementById("SAVE_BTN2").click();
    }
    console.log('check data');
},2000);//每兩秒檢查一次

}());

```
