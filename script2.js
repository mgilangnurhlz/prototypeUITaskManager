$(".mail-choice").change(function () {
  if ($(this).is(":checked")) {
    $(this).parent().addClass("selected-bg");
  } else {
    $(this).parent().removeClass("selected-bg");
  }
});

$(".inbox-calendar").click(function () {
  $(".calendar-container").toggleClass("calendar-show");
  $(".inbox-container").toggleClass("hide");
  $(".mail-detail").toggleClass("hide");
});
