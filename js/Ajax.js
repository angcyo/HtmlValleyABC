$(document).ready(function () {
    $(".content").text("ready....");
//     $.get("https://www.baidu.com", function (data, status) {
// //        alert("数据: " + data + "\n状态: " + status);
//         $(".content").text("数据: " + data + "\n状态: " + status);
//     });

//     $.load("https://www.baidu.com", function (data, status) {
// //        alert("数据: " + data + "\n状态: " + status);
//         $(".content").text("数据: " + data + "\n状态: " + status);
//     });

    $(".content").load("https://www.baidu.com")
});