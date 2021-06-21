        var DayOfTheWeek = new Date().getDay();
        if (DayOfTheWeek == 6 || DayOfTheWeek == 0) {
            $('.sunday').show();
            $('.thursday').hide();
            $('.tuesday').hide();
            $('.hooray').hide();
        }
        else if (DayOfTheWeek == 6 || DayOfTheWeek == 2) {
            $('.tuesday').show();
            $('.tuesday').hide();
            $('.sunday').hide();
            $('.hooray').hide();
        }
        else if (DayOfTheWeek == 6 || DayOfTheWeek == 4) {
            $('.thursday').show();
            $('.tuesday').hide();
            $('.sunday').hide();
            $('.hooray').hide();
        } else {
            $('.thursday').hide();
            $('.tuesday').hide();
            $('.sunday').hide();
            $('.hooray').show();
        }