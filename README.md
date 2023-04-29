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
// @match        https://newacademic.tmu.edu.tw/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=edu.tw
// @grant        none
// @license     MIT
// ==/UserScript==



(function () {
    setInterval(function(){//自動填問卷
        if (!document.getElementsByName('viewFrame').length){return;}
    
        let window_element = document.getElementsByName('viewFrame')[0].contentWindow.document;

        if (!window_element.getElementById("table2")){return;}


        let div_element=window_element.getElementById("table2");
        let input_elements = div_element.getElementsByTagName("input");
        for(let i = 0; i < input_elements.length; i++) {input_elements[i].checked = true;}//全部都非常滿意
        window_element.getElementById("SAVE_BTN2").click();

        console.log('check data');
    },2000);//每兩秒檢查一次


    setInterval(function(){//自動開問卷(未完成，我沒問卷能填了...)
        /********判斷頁面********/
        
        if (!document.getElementsByName('mainFrame').length){return;}
        
        if (!document.getElementsByName('mainFrame')[0].contentWindow.document.getElementsByClassName('title_2').length){return;}
        
        let elements=document.getElementsByName('mainFrame')[0].contentWindow.document;
        let t=elements.getElementsByClassName('title_2')[0];//頁面標題
        if (!t.innerHTML.includes('填寫問卷')){return;}
        if(t.parentNode.getElementsByTagName("td").length>2){return;}
        t.setAttribute('width','65%');
    


        /******加入按鈕*****/
        let fill_btn = document.createElement("td");
        fill_btn.innerHTML="<input type=\"button\" value=\"Fill All\" class=\"btn\" id=\"fill_all\">"
        t.parentNode.append(fill_btn);


        fill_btn.addEventListener('mouseout',function(e){//麻煩的按鈕效果，新校務行政系統按鈕hover的時候border沒有用員角，發瘋
            let btn=t.parentNode.getElementsByTagName('input')[0];
            btn.setAttribute('class','btn');
            btn.setAttribute('value',"Fill All");
            
        },false)
        fill_btn.addEventListener('mouseover',function(e){//麻煩的按鈕效果
            let btn=t.parentNode.getElementsByTagName('input')[0];
            btn.setAttribute('class','btnhov');
            btn.setAttribute('value',"未完成");
            
        },false)


        /********點所有問卷(未完成，我沒問卷能填了...) */


        fill_btn.addEventListener('click',function(e){

            let sheetTB=elements.getElementById('grid-scroll').getElementsByTagName('tr');

            for(let i=1; i<sheetTB.length;i+=1){
                let st=sheetTB[i].getElementsByTagName('span');
                console.log(st);
                /******丟request */

                $.ajax({
                    url: '',
                    //dataType: 'json',
                    //method:'',
                    success: function(data) {
                      return;
                    }
                  });
            }


            
        },false)

        /***********/





    },2000);//每兩秒檢查一次


}());

```
