$(document).ready(
    function () {
        $("input[name=day]").change(showSchedule);

        function showSchedule(event) {
            event.preventDefault();

            var selectedRadioButton = $("input[name=day]:checked");
            var day = selectedRadioButton.data("day");

            switch (day)
            {
                case "Sunday":
                    $("#event").text("Relax");
                    $("#schedule").text("All Day");
                    break;
                case "Monday":
                    $("#event").text("Work");
                    $("#schedule").text("7:30 A.M. to 4:30 P.M.");
                    break;
                case "Tuesday":
                    $("#event").text("Volunteer");
                    $("#schedule").text("8:30 A.M. to 4:30 P.M.");
                    break;
                case "Wednesday":
                    $("#event").text("Grizzly Bear Taming");
                    $("#schedule").text("6:30 A.M. to 4:30 P.M.");
                    break;
                case "Thursday":
                    $("#event").text("Recover From Grizzly Bear Taming");
                    $("#schedule").text("All Day");
                    break;
                case "Friday":
                    $("#event").text("Work");
                    $("#schedule").text("7:30 A.M. to 4:30 P.M.");
                    break;
                case "Saturday":
                    $("#event").text("Relax");
                    $("#schedule").text("All Day");
                    break;
            }
        }

    });