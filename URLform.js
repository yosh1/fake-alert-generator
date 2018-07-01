function tbox1() {

    var str1 = document.js.elements[2].value;
    var str2 = document.js.elements[0].value;
    var str3 = document.js.elements[1].value;
    var str4 = document.js.elements[3].value;
    var str5 = document.js.elements[4].value;
    var str6 = document.js.elements[5].value;
    var str7 = document.js.elements[6].value;
    window.open("https://yoshi1125hisa.github.io/AdGeneratorWeb-v0.1.0?virus=" + str1 + "&brand=" + str2 + "&model=" + str3 + "&damage1=" + str4 + "&damage2=" + str5 + "&damage3=" + str6 + "&app=" + str7, '_blank');

}


//テキストボックスの文字を操作する
function clr() {

    document.js.virus.value = "";
    document.js.brand.value = "";
    document.js.model.value = "";
    document.js.damage1.value = "";
    document.js.damage2.value = "";
    document.js.damage3.value = "";
    document.js.app.value = "";

}
