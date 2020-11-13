$(document).ready(function () {

$(":radio").change(weekdays)

    function weekdays()
        {
$("p").show();
            selectedDay = this.id;
            $("#date").text(selectedDay);
            switch (selectedDay) {
                case "Monday":
                    $("#work").text("work");
                    $("#time").text("8:00 - 16:00");
                    break;
                case "Tuesday":
                    $("#work").text("work");
                    $("#time").text("8:00 - 16:00");
                    break;
                case "Wednesday":
                    $("#work").text("school");
                    $("#time").text("12:00 - 16:00");
                    break;
                case "Thursday":
                    $("#work").text("school");
                    $("#time").text("12:00 - 16:00");
                    break;
                case "Friday":
                    $("#work").text("work");
                    $("#time").text("8:00 - 16:00");
                    break;
                case "Saturday":
                    $("#work").text("gym");
                    $("#time").text("8:00 - 10:00");
                    break;
                case "Sunday":
                    $("#work").text("gym");
                    $("#time").text("8:00 - 10:00");
                    break;

            }
        };
        


        

});