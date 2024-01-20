  $(document).ready(function () {
    // Display the current date in a format 

    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY [at] hh:mm:ss a"));

    setInterval(function () {
        //Keep the current time ticking on the page
        
        $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY [at] hh:mm:ss a"));
      }, 1000);
  
    // Calendar timeblocks to display

    var container = $(".container");
    for (var hour = 9; hour <= 17; hour++) {
      var timeblock = $("<div>").addClass("row time-block");
      var hourCol = $("<div>").addClass("col-1 hour").text(hour + ":00");
      var textArea = $("<textarea>").addClass("col-10 description");
      var saveBtn = $("<button>").addClass("col-1 saveBtn").html('<i class="fas fa-save"></i>');
  
      // Add hour-dependent classes (past, present, future)

      if (hour < dayjs().hour()) {
         //Style class at past hour
        timeblock.addClass("past");
      } else if (hour === dayjs().hour()) {
        //Style class at current hour
        timeblock.addClass("present");
      } else {
         //Style class at future hour
        timeblock.addClass("future");
      }
  
      timeblock.append(hourCol, textArea, saveBtn);
      container.append(timeblock);
    }
     
    // Save calendar events and save them in local storage

    $(".saveBtn").on("click", function () {
        // Retrieve the text and corresponding hour

        var text = $(this).siblings(".description").val();
        var hour = parseInt($(this).siblings(".hour").text());
    
        // Save to local storage

        localStorage.setItem("event_" + hour, text);
      });
    
      // Load events from local storage

      for (var hour = 9; hour <= 17; hour++) {
        var text = localStorage.getItem("event_" + hour);
        if (text !== null) {
          $(".hour:contains(" + hour + ":00)").siblings(".description").val(text);
        }
      }
  });