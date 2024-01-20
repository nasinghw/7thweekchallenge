  $(document).ready(function () {
    // Display the current date
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY [at] hh:mm:ss a"));
  
    // Calendar timeblocks to display
    var container = $(".container");
    for (var hour = 9; hour <= 17; hour++) {
      var timeblock = $("<div>").addClass("row time-block");
      var hourCol = $("<div>").addClass("col-1 hour").text(hour + ":00");
      var textArea = $("<textarea>").addClass("col-10 description");
      var saveBtn = $("<button>").addClass("col-1 saveBtn").html('<i class="fas fa-save"></i>');
  
      // Add hour-dependent classes (past, present, future)
      if (hour < dayjs().hour()) {
        timeblock.addClass("past");
      } else if (hour === dayjs().hour()) {
        timeblock.addClass("present");
      } else {
        timeblock.addClass("future");
      }
  
      timeblock.append(hourCol, textArea, saveBtn);
      container.append(timeblock);
    }
      
  });