        function running() {
            Object.prototype.twoDigits = function () {
                return ("0" + this).slice(-2);
            }

            // get current date and time
            let now = new Date();
            n = now.getHours().twoDigits() + ':' + now.getMinutes().twoDigits();

            if (n > '09:00' && n < '10:00') {
                $(".class-1").addClass("now").removeClass("old");
                $('.class-1 .overlay').hide();
                $('.class-2 .overlay').show();
                $('.class-3 .overlay').show();
                $('.class-4 .overlay').show();
                $('.class-1 .overlay-2').hide();
                $('.class-2 .overlay-2').hide();
                $('.class-3 .overlay-2').hide();
                $('.class-4 .overlay-2').hide();
            }
            else if (n > '10:00' && n < '11:00') {
                $(".class-2").addClass("now").removeClass("old");
                $('.class-1 .overlay').hide();
                $('.class-2 .overlay').hide();
                $('.class-3 .overlay').show();
                $('.class-4 .overlay').show();
                $('.class-1 .overlay-2').show();
                $('.class-2 .overlay-2').hide();
                $('.class-3 .overlay-2').hide();
                $('.class-4 .overlay-2').hide();
               
            }
            else if (n > '11:00' && n < '11:29') {
                
                $('.class-1 .overlay').hide();
                $('.class-2 .overlay').hide();
                $('.class-3 .overlay').show();
                $('.class-4 .overlay').show();
                $('.class-1 .overlay-2').show();
                $('.class-2 .overlay-2').show();
                $('.class-3 .overlay-2').hide();
                $('.class-4 .overlay-2').hide();
               
            }   
            else if (n > '11:30' && n < '12:30') {
                $(".class-3").addClass("now").removeClass("old");
                $('.class-1 .overlay').hide();
                $('.class-2 .overlay').hide();
                $('.class-3 .overlay').hide();
                $('.class-4 .overlay').show();
                $('.class-1 .overlay-2').show();
                $('.class-2 .overlay-2').show();
                $('.class-3 .overlay-2').hide();
                $('.class-4 .overlay-2').hide();
                
                
            }
            else if (n > '12:30' && n < '13:30') {
                $(".class-4").addClass("now").removeClass("old");
                $('.class-1 .overlay').hide();
                $('.class-2 .overlay').hide();
                $('.class-3 .overlay').hide();
                $('.class-4 .overlay').hide();
                $('.class-1 .overlay-2').show();
                $('.class-2 .overlay-2').show();
                $('.class-3 .overlay-2').show();
                $('.class-4 .overlay-2').hide();
            
            }
            else if (n > '13:30' && n <= '23:59') {
                $('.sunday').hide();
                $('.tuesday').hide();
                $('.thursday').hide();
                $('.hooray').show();
                $('.overlay').hide();
                $('.overlay-2').hide();
            }
            else {
                $(".class-1").addClass("old").removeClass("now");
                $(".class-2").addClass("old").removeClass("now");
                $(".class-3").addClass("old").removeClass("now");
                $(".class-4").addClass("old").removeClass("now");
                $('.hooray').hide();
                $('.overlay').hide();
                $('.overlay-2').hide();
              
            }
        }
        $(document).ready(function () {
            running();
        });