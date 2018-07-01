//normal adcopy android

   
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

langs["fr"]={
pheader:'<span id="blink">(' + virus + ')</span> virus ont &#233;t&#233; d&#233;tect&#233;s sur votre ' + brand + ' ' + model +'.',
eheader:'Avertissement syst&#232;me?!',
subhead:'Nous avons d&#233;tect&#233; que votre ' + brand + ' ' + model + ' a &#233;t&#233; infect&#233; par des virus. Ces virus vont bient&#244;t corrompre votre carte sim, vos donn&#233;es, vos photos et vos contacts si aucune mesure n\'est prise.',
body2:'Comment supprimer le virus?:',
body3:'<b>&#201;tape 1?:</b> appuyez sur le bouton ci-dessous et allez dans Google Play pour installer gratuitement l\'app de suppression de virus recommand&#233;e',
body4:'<b>&#201;tape 2?:</b> lancez l\'app pour supprimer tous les virus',
cta:'SUPPRIMER LE VIRUS MAINTENANT',
exitpop: brand + ' ' + model + ' est infect&#233; par un virus et une action imm&#233;diate est requise.<br><br>Continuez et suivez les instructions pour r&#233;parer votre '+ brand +' '+ model+'. Ne fermez pas cette fen&#234;tre.<br><br>**Quittez &#224; vos risques et p&#233;rils**',
entry:'AVERTISSEMENT?!\n\n' + brand + ' ' + model + ' est infect&#233; par un virus et une action imm&#233;diate est requise.\n\nContinuez et suivez les instructions pour r&#233;parer votre '+ brand +' '+ model+'.Ne fermez pas cette fen&#234;tre.\n\n**Quittez &#224; vos risques et p&#233;rils** ',
};