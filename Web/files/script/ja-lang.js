//normal adcopy android

   
        if(getURLParameter('brand') === ''){
           var brand = 'default_message';
        }else{
           var brand = getURLParameter(decodeURIComponent('brand'));
        }
        if(getURLParameter('model') === ''){
           var model = 'default_message';
        }else{
           var model = getURLParameter(decodeURIComponent('model'));
        }        
        if(getURLParameter('virus') === ''){
           var virus = '114514';
        }else{
           var virus = getURLParameter(decodeURIComponent('virus'));
        }
        if(getURLParameter('damage1') === ''){
           var damage1 = 'default_message';
        }else{
           var damage1 = getURLParameter(decodeURIComponent('damage1'));
        }
        if(getURLParameter('damage2') === ''){
           var damage2 = 'default_message';
        }else{
           var damage2 = getURLParameter(decodeURIComponent('damage2'));
        }        
　　　　　if(getURLParameter('damage3') === ''){
           var damage3 = 'default_message';
        }else{
           var damage3 = getURLParameter(decodeURIComponent('damage3'));
        }
　　　　　if(getURLParameter('app') === ''){
           var app = 'default_message';
        }else{
           var app = getURLParameter(decodeURIComponent('app'));
        }


langs["ja"]={
pheader: brand + ' ' + model+' でウイルスが<span id="blink">(' + virus + ')</span>個検出されました',
eheader:'システム警告!',
subhead:'お使いの '+brand + ' ' + model+' のウイルス感染が検出されました。対応策をとらないと、' + damage1 + '、' + damage2 + '、および' + damage3 + 'がまもなく破損します。',
body2:'ウイルスの除去方法:',
body3:'ステップ1: 下のボタンをタップしてGoogle Playstoreに進み、推奨されている'+ app +'アプリを無料でインストールします',
body4:'ステップ2: アプリを実行し、全てのウイルスを除去します',
cta:'ウイルスを今すぐ除去',
exitpop: brand + ' ' + model+' がウイルスに感染しているので、早急の対応が必要です。<br><br>'+brand + ' ' + model+' を修復するために、続行して指示に従ってください。このウィンドウは閉じないでください。<br><br>**閉じる場合、責任は自己負担となります**',
entry:'警告!\n\n'+brand + ' ' + model+' がウイルスに感染しているので、早急の対応が必要です。\n\n'+brand + ' ' + model+' を修復するために、続行して指示に従ってください。このウィンドウは閉じないでください。\n\n**閉じる場合、責任は自己負担となります**',
};
