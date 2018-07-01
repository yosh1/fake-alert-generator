//Russian normal adcopy android

   
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

langs["ru"]={
pheader:'На вашем ' + brand + ' ' + model +' был обнаружен вирус <span id="blink">(' + virus + ')</span>',
eheader:'Системное предупреждение!',
subhead:'Мы обнаружили, что ваш ' + brand + ' ' + model + ' был заражен вирусами.Вирус скоро повредит вашу SIM-карту, данные, фотографии и контакты, если не будет предпринято никаких действий',
body2:'<b>Как удалить вирус:</b>',
body3:'<b>Шаг 1:</b> нажмите на кнопку ниже и перейдите в Google Play, чтобы бесплатно установить рекомендуемые приложения для удаления вирусов',
body4:'<b>Шаг 2:</b> используйте приложение, чтобы удалить все вирусы',
cta:'УДАЛИТЬ ВИРУС СЕЙЧАС',
exitpop: brand + ' ' + model + ' заражен вирусом, и требуется незамедлительное действие.<br><br>Продолжите и следуйте инструкциям для лечения вашего '+ brand + ' ' + model + '.Не закрывайте это окно.<br><br>**Выйти на свой страх и риск**',
entry:'ВНИМАНИЕ!\n\n' + brand + ' ' + model + ' заражен вирусом, и требуется незамедлительное действие.\n\nПродолжите и следуйте инструкциям для лечения вашего '+ brand + ' ' + model + '.Не закрывайте это окно.\n\n**Выйти на свой страх и риск**',
};