//malay normal adcopy android

   
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

langs["ms"]={
pheader:'<span id="blink">(' + virus + ')</span> virus telah dikesan pada ' + brand + ' ' + model +'.',
eheader:'Amaran Sistem!',
subhead:'Kami telah mengesan bahawa ' + brand + ' ' + model + ' anda telah dijangkiti virus.Tidak lama lagi, ia akan merosakkan kad sim, foto dan kenalan anda jika tiada tindakan yang diambil.',
body2:'<b>Cara menghapuskan virus:</b>',
body3:'<b>Langkah 1:</b> Ketik butang di bawah & pergi ke Google Play untuk memasang aplikasi penghapusan virus yang disyorkan secara percuma',
body4:'<b>Langkah 2:</b>  Jalankan aplikasi untuk menghapuskan semua virus',
cta:'HAPUSKAN VIRUS SEKARANG',
exitpop: brand + ' ' + model + ' dijangkiti virus dan tindakan segera diperlukan.<br><br>Teruskan dan ikut arahan untuk membetulkan '+ brand + ' ' + model + ' anda. Jangan tutup tetingkap ini.<br><br>**Keluar atas risiko anda sendiri**',
entry:'AMARAN!\n\n' + brand + ' ' + model + ' dijangkiti virus dan tindakan segera diperlukan.\n\nTeruskan dan ikut arahan untuk membetulkan '+ brand + ' ' + model + ' anda. Jangan tutup tetingkap ini.\n\n**Keluar atas risiko anda sendiri**',
};