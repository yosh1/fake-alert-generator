//italian normal adcopy android

   
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

langs["it"]={
pheader:'Sono stati rilevati <span id="blink">(' + virus + ')</span> virus sul tuo ' + brand + ' ' + model +'.',
eheader:'Avviso di Sistema!',
subhead:'Abbiamo rilevato che il tuo ' + brand + ' ' + model + ' &#232; stato infettato dai virus.Presto dannegger&#224; la tua carta SIM, i dati, le foto e i contatti se non verr&#224; intrapresa alcuna azione.',
body2:'<b>Come rimuovere i virus:</b>',
body3:'<b>Passo 1: </b> tocca il pulsante in basso e vai su Google Play per installare gratuitamente l\'app di rimozione dei virus consigliata',
body4:'<b>Passo 2: </b> esegui l\'app per rimuovere tutti i virus',
cta:'RIMUOVI SUBITO I VIRUS',
exitpop: brand + ' ' + model + ' &#232; infettato da un virus e richiede un intervento immediato.<br><br>Continua e segui le istruzioni per riparare il tuo '+ brand + ' ' + model + '.Non chiudere questa finestra.<br><br>**Esci a tuo esclusivo rischio**',
entry:'ATTENZIONE!\n\n' + brand + ' ' + model + ' &#232; infettato da un virus e richiede un intervento immediato.\n\nContinua e segui le istruzioni per riparare il tuo '+ brand + ' ' + model + '.Non chiudere questa finestra.\n\n**Esci a tuo esclusivo rischio**',
};