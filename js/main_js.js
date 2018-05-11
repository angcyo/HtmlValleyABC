$(document).ready(function () {
    $(function () {
        //The passed argument has to be at least a empty object or a object with your desired options
        $('body').overlayScrollbars({});
    });

    $(".bottom_nav_item").click(function () {
        reset_nav(this);
        selector_nav(this);
        // $(this).find("i").addClass("nav_found_selected")
        // $(this).find("span").text("点击")
        // console.log($(this).find("span"))
        // console.log($(this).attr("id"))
        // console.log(this)
        // console.log(event)
    })

    //默认选中首页
    $(".bottom_nav_item").first().click();

    //关闭对话框
    $(".nav_center_dialog_cancel").click(function () {

        $(".nav_center_dialog").animate({
            height: '0px',
        }, function () {
            //动画结束
            //$(".nav_center_dialog_wrapper").hide();
        });

        $(".nav_center_dialog_wrapper").animate({
            opacity: '0'
        }, "slow", function () {
            $(".nav_center_dialog_wrapper").hide();
        });
        // alert($(".nav_center_dialog"));
    });

    $(".nav_center_dialog_wrapper").click(function () {
        $(".nav_center_dialog_cancel").click();
    });

    //显示对话框
    $(".nav_center").click(function () {
        //alert($(".nav_center_dialog"));

        $(".nav_center_dialog_wrapper").show();
        $(".nav_center_dialog_wrapper").animate({
            opacity: '0.5'
        }, "slow");

        $(".nav_center_dialog").animate({
            height: '180px',
        });
    })
});

/*重置底部导航栏默认图标*/
function reset_nav(nav_item) {
    let ico = $(nav_item).find("i");
    if ($(ico).length <= 0) {
        //选中了一个没有i标签的nav
        return;
    }
    $(nav_item).parent().find("a").each(function () {
        let ico = $(this).find("i");
        ico.removeClass();
        switch ($(this).attr("id")) {
            case "nav_home":
                ico.addClass("nav_home");
                break;
            case "nav_message":
                ico.addClass("nav_message");
                break;
            case "nav_found":
                ico.addClass("nav_found");
                break;
            case "nav_me":
                ico.addClass("nav_me");
                break;
        }
    });
}

/*选中导航*/
function selector_nav(nav_item) {
    let ico = $(nav_item).find("i");
    if ($(ico).length <= 0) {
        return;
    }
    ico.removeClass();
    switch ($(nav_item).attr("id")) {
        case "nav_home":
            ico.addClass("nav_home_selected");
            break;
        case "nav_message":
            ico.addClass("nav_message_selected");
            break;
        case "nav_found":
            ico.addClass("nav_found_selected");
            break;
        case "nav_me":
            ico.addClass("nav_me_selected");
            break;
    }
}