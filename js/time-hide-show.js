        function running() {
            Object.prototype.twoDigits = function () {
                return ("0" + this).slice(-2);
            }

            // get current date and time
            let now = new Date();
            n = now.getHours().twoDigits() + ':' + now.getMinutes().twoDigits();

            if (n > '08:59' && n < '09:59') {
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
            else if (n > '09:59' && n < '10:59') {
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
            else if (n > '10:59' && n < '11:29') {
                
                $('.class-1 .overlay').hide();
                $('.class-2 .overlay').hide();
                $('.class-3 .overlay').show();
                $('.class-4 .overlay').show();
                $('.class-1 .overlay-2').show();
                $('.class-2 .overlay-2').show();
                $('.class-3 .overlay-2').hide();
                $('.class-4 .overlay-2').hide();
               
            }   
            else if (n > '11:29' && n < '12:29') {
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
            else if (n > '12:29' && n < '13:29') {
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
            else if (n > '13:29' && n <= '23:59') {
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
                $('.hooray').show();
                $('.overlay').show();
                $('.overlay-2').hide();
              
            }
        }
        $(document).ready(function () {
            running();
        });