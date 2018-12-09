// chinese normal adcopy android

   
        if(getURLParameter('brand') === ''){
           var brand = 'YAJU Senpai';
        }else{
           var brand = getURLParameter(decodeURIComponent('brand'));
        }
        if(getURLParameter('model') === ''){
           var model = 'YJSNPI';
        }else{
           var model = getURLParameter(decodeURIComponent('model'));
        }        
        if(getURLParameter('virus') === ''){
           var virus = '114514';
        }else{
           var virus = getURLParameter(decodeURIComponent('virus'));
        }
        if(getURLParameter('damage1') === ''){
           var damage1 = 'INMU kun';
        }else{
           var damage1 = getURLParameter(decodeURIComponent('damage1'));
        }
        if(getURLParameter('damage2') === ''){
           var damage2 = 'Foliage plant kun';
        }else{
           var damage2 = getURLParameter(decodeURIComponent('damage2'));
        }        
　　　　　if(getURLParameter('damage3') === ''){
           var damage3 = 'YAJU’s House';
        }else{
           var damage3 = getURLParameter(decodeURIComponent('damage3'));
        }

langs["zh"]={
pheader:'在&#24744;的' + brand + ' ' + model +'上探測到了<span id="blink">(' + virus + ')</span>個病毒',
eheader:'系統警告!',
subhead:'我們探測到&#24744;的' + brand + ' ' + model + '已經被病毒感染。若不採取措施，病毒會很快損壞&#24744;的SIM&#21345;，資料，照片和連絡人資訊。',
body2:'<b>如何移除病毒</b>',
body3:'<b>第1?:</b>點&#25802;以下按鈕轉到Google Play以免費安裝推薦的殺毒軟體',
body4:'<b>第2?:</b>運行應用以移除所有病毒。',
cta:'立刻移除病毒',
exitpop: brand + ' ' + model + '已感染病毒，請盡快採取措施。\n\n繼續並按照以下?明修復&#24744;的'+ brand + ' ' + model + '。請不要關閉本窗口。\n\n**退出，但風險自負**',
entry:'警告!\n\n&#24744;的' + brand + ' ' + model + '已感染病毒，請盡快採取措施。\n\n繼續並按照以下?明修復&#24744;的'+ brand + ' ' + model + '。請不要關閉本窗口。\n\n**退出，但風險自負**',
};