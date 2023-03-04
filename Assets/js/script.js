$(document).ready(function() {
  $('#currentDay').text(dayjs().format('dddd, MMM DD, YYYY'));
  $(".saveBtn").on("click", function() {
    var userInput = $(this).siblings(".description").val();
    var userTime = $(this).parent().attr("id");
    
    localStorage.setItem(userTime, userInput);
    
    
    $(".notification").addClass('show');
    
    setTimeout(function () {
      $(".notifcation").removeClass('show');
    }, 1000);
  });
  
  function timeUpdate() {
    var currentTime = dayjs().hour();
    $(".time-block").each(function() {
      var timeId = parseInt($(this).attr("id").split("-")[1]);
      if (timeId < currentTime) {
        $(this).addClass("past");
      } else if (timeId === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");  
      }
    });
  }
  timeUpdate();
  setInterval(timeUpdate, 1000);
  $("#hr-9 .description").val(localStorage.getItem("hr-9"));
  $("#hr-10 .description").val(localStorage.getItem("hr-10"));
  $("#hr-11 .description").val(localStorage.getItem("hr-11"));
  $("#hr-12 .description").val(localStorage.getItem("hr-12"));
  $("#hr-13 .description").val(localStorage.getItem("hr-13"));
  $("#hr-14 .description").val(localStorage.getItem("hr-14"));
  $("#hr-15 .description").val(localStorage.getItem("hr-15"));
  $("#hr-16 .description").val(localStorage.getItem("hr-16"));
  $("#hr-17 .description").val(localStorage.getItem("hr-17"));
  $("#hr-18 .description").val(localStorage.getItem("hr-18"));
  
  
});
  
  