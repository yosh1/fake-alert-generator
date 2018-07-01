// normal adcopy android

   
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
           var damage3 = 'YAJU��s House';
        }else{
           var damage3 = getURLParameter(decodeURIComponent('damage3'));
        }

langs["en"]={
pheader:'<span id="blink">(' + virus + ')</span> virus have been detected on your ' + brand + ' ' + model +'.',
eheader:'System Warning!',
subhead:'We have detected that your ' + brand + ' ' + model + ' has been infected with viruses. It will soon corrupt your sim card, data, photos, and contacts if no action is taken.',
body2:'How to remove virus:',
body3:'Step 1: Tap the button below & go to Google Playstore to install the recommended virus removal app for free',
body4:'Step 2: Run the app to remove all viruses.',
cta:'Remove Virus Now',
exitpop: brand + ' ' + model + ' is infected with virus and immediate action is required.<br><br>Continue and follow the instructions to fix your '+ brand + ' ' + model + '.<br><br> **Exit at your own risk**',
entry:'WARNING!\n\n' + brand + ' ' + model + ' is infected with virus and immediate action is required!\n\nContinue with instructions to fix '+ brand + ' ' + model + '. Do not close this window!\n\n**Exit at your own risk**',
};