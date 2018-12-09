//Greek normal adcopy android

   
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

langs["el"]={
pheader:'&#904;χουν εντοπιστε&#943; <span id="blink">(' + virus + ')</span> ιο&#943; στο ' + brand + ' ' + model +' ιο&#943; στο.',
eheader:'Προειδοπο&#943;ηση Συστ&#942;ματο&#962;!',
subhead:'&#904;χουμε εντοπ&#943;σει πω&#962; το ' + brand + ' ' + model + ' σα&#962; &#941;χει μολυνθε&#943; με ιο&#973;&#962;.Θα φθε&#943;ρει σ&#973;ντομα την κ&#940;ρτα SIM σα&#962;, τα δεδομ&#941;να, τι&#962; φωτογραφ&#943;ε&#962; και τι&#962; επαφ&#941;&#962; σα&#962;, ε&#940;ν δεν ληφθο&#973;ν μ&#941;τρα.',
body2:'<b>Πω&#962; να αφαιρ&#941;σετε τον ι&#972;:</b>',
body3:'<b>Β&#942;μα 1:</b> Πατ&#942;στε το κουμπ&#943; παρακ&#940;τω για να μεταβε&#943;τε στο Google Play και να εγκαταστ&#942;σετε τη συνιστ&#974;μενη εφαρμογ&#942; αφα&#943;ρεση&#962; του ιο&#973; για δωρε&#940;ν',
body4:'<b>Β&#942;μα 2:</b> Κ&#940;ντε εκκ&#943;νηση τη&#962; εφαρμογ&#942;&#962; για να αφαιρ&#941;σετε &#972;λου&#962; του&#962; ιο&#973;&#962;',
cta:'ΑΦΑΙΡΕΣΗ ΙΟΥ ΤΩΡΑ',
exitpop: 'Το '+ brand + ' ' + model + ' σα&#962; &#941;χει μολυνθε&#943; με ι&#972; και απαιτε&#943;ται &#940;μεση δρ&#940;ση.<br><br>Συνεχ&#943;στε και ακολουθ&#942;στε τι&#962; οδηγ&#943;ε&#962; για να επιδιορθ&#974;σετε το '+ brand + ' ' + model + '.σα&#962;. Μην κλε&#943;σετε αυτ&#972; το παρ&#940;θυρο.<br><br>** &#904;ξοδο&#962; με δικ&#942; σα&#962; ευθ&#973;νη **',
entry:'ΠΡΟΕΙΔΟΠΟΙΗΣΗ!\n\nτο' + brand + ' ' + model + ' σα&#962; &#941;χει μολυνθε&#943; με ι&#972; και απαιτε&#943;ται &#940;μεση δρ&#940;ση.\n\nΣυνεχ&#943;στε και ακολουθ&#942;στε τι&#962; οδηγ&#943;ε&#962; για να επιδιορθ&#974;σετε το '+ brand + ' ' + model + ' σα&#962;. Μην κλε&#943;σετε αυτ&#972; το παρ&#940;θυρο.\n\n** &#904;ξοδο&#962; με δικ&#942; σα&#962; ευθ&#973;νη **',
};