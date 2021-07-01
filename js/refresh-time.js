        function refreshAt(hours, minutes, seconds) {
            var now = new Date();
            var then = new Date();

            if (now.getHours() > hours ||
                (now.getHours() == hours && now.getMinutes() > minutes) ||
                now.getHours() == hours && now.getMinutes() == minutes && now.getSeconds() >= seconds) {
                then.setDate(now.getDate() + 1);
            }
            then.setHours(hours);
            then.setMinutes(minutes);
            then.setSeconds(seconds);

            var timeout = (then.getTime() - now.getTime());
            setTimeout(function () { window.location.reload(true); }, timeout);
}
        refreshAt(00, 00, 00);
        refreshAt(00, 00, 04);
        refreshAt(09, 00, 00);
        refreshAt(09, 00, 04);
        refreshAt(10, 00, 00); 
        refreshAt(10, 00, 04); 
        refreshAt(11, 00, 00);
        refreshAt(11, 00, 04);
        refreshAt(11, 30, 00); 
        refreshAt(11, 30, 04); 
        refreshAt(12, 30, 00);
        refreshAt(12, 30, 04);
        refreshAt(13, 30, 00);
        refreshAt(13, 30, 04);