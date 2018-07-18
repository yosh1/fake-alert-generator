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
           var damage3 = 'YAJU’s House';
        }else{
           var damage3 = getURLParameter(decodeURIComponent('damage3'));
        }

langs["de"]={
pheader:'<span id="blink">(' + virus + ')</span> Viren wurden auf Ihrem ' + brand + ' ' + model +' entdeckt.',
eheader:'Systemwarnung!',
subhead:'Wir haben entdeckt, dass Ihr ' + brand + ' ' + model + ' mit Viren infiziert wurde.Sie werden bald Ihre SIM-Karte, Daten, Fotos und Kontakte besch&#228;digen, falls Sie keine Ma&#223;nahmen ergreifen.',
body2:'<b>So entfernen Sie Viren:</b>',
body3:'<b>Schritt 1: </b> Tippen Sie auf den unteren Button und gehen Sie zu Google Playstore, um die empfohlene App zur Virusentfernung kostenlos zu installieren',
body4:'<b>Schritt 2:</b> F&#252;hren Sie die App aus, um alle Viren zu entfernen',
cta:'VIRUS JETZT ENTFERNEN',
exitpop: brand + ' ' + model + ' ist mit einem Virus infiziert und es ist sofortiges Handeln erforderlich.<br><br>Fahren Sie fort und folgen Sie den Anweisungen, um Ihr '+ brand + ' ' + model + '.zu reparieren. Schlie&#223;en Sie dieses Fenster nicht.<br><br>**Verlassen auf Ihr eigenes Risiko**',
entry:'WARNUNG!\n\n' + brand + ' ' + model + ' ist mit einem Virus infiziert und es ist sofortiges Handeln erforderlich.\n\nFahren Sie fort und folgen Sie den Anweisungen, um Ihr '+ brand + ' ' + model + '.zu reparieren. Schlie&#223;en Sie dieses Fenster nicht.\n\n**Verlassen auf Ihr eigenes Risiko**',
};