// ローディング中の画面チラツキ防止
$(window).on("load", function() {
    $("body")
        .css("visibility","initial")
        .css("overflow", "initial")
        .hide()
        .fadeIn("slow");
});
