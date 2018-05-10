$(document).ready(function () {
    $("a.vip_item").click(function (event) {
        //$(event).html("click")
        console.log(event);
        // console.log("....")
        $("a.vip_item").removeClass("vip_item_selected");
        $("a.vip_item").find(".vip_selected").hide();
        $(this).addClass("vip_item_selected");
        $(this).find(".vip_selected").show();
        event.stopPropagation();
    });
    $("a.vip_item").eq(1).trigger("click") //默认调用第1个的click事件 (从0开始的索引)
});