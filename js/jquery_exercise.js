// alert($("#list-item1").text());
// $(".codeup").css("border", "solid 1px red");
// $("li").css("font-size", "20px");
// $("h1, li, p").css("background-color", "yellow");
// alert($("h1").text());
// $("#title").click(() => {
//   console.log($(this).text());
//   $(this).css("background-color", "#FF0");
// });

$("#title").click(function () {
  $(this).css("background-color", "#FF0");
});

$("p").dblclick(function () {
  $("p").css("font-size", "18px");
});

$("li").hover(
  function () {
    $("li").css("color", "#F00");
  },
  function () {
    $("li").css("color", "#000");
  }
);
