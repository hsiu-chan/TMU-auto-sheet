// ==UserScript==
// @name         TMU auto sheet
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       xiang
// @match        https://newacademic.tmu.edu.tw/*
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
