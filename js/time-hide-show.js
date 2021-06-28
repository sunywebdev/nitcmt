    function running() {
            Object.prototype.threeDigits = function () {
                return ("0" + this).slice(-2);
            }

            // get current date and time (d === 1 || d === 3 || d === 5 || d === 6)
            let now = new Date();
            n = now.getHours().threeDigits() + ':' + now.getMinutes().threeDigits() + ':' + now.getSeconds().threeDigits();
            const d = now.getDay()
        

        if ((d === 1) && (n > '00:00:00' && n < '11:15:00')) {
                $('.exam-1 .class-will-start').hide();
                $('.exam-2 .class-will-start').show();
                $('.exam-3 .class-will-start').show();
                $('.exam-4 .class-will-start').show();
                $('.exam-1 .class-ended').show();
                $('.exam-2 .class-ended').hide();
                $('.exam-3 .class-ended').hide();
                $('.exam-4 .class-ended').hide();
                $('.sunday').hide();
                $('.tuesday').hide();
                $('.thursday').hide();
                $('.hooray').show();
                $('.class-1 .class-will-start').hide();
                $('.class-2 .class-will-start').hide();
                $('.class-3 .class-will-start').hide();
                $('.class-4 .class-will-start').hide();
                $('.class-1 .class-ended').hide();
                $('.class-2 .class-ended').hide();
                $('.class-3 .class-ended').hide();
                $('.class-4 .class-ended').hide();
        }

        else if ((d === 1) && (n > '11:15:00' && n < '13:00:00')) {
                $(".exam-2").addClass("now").removeClass("old");
                $('.exam-1 .class-will-start').hide();
                $('.exam-2 .class-will-start').hide();
                $('.exam-3 .class-will-start').show();
                $('.exam-4 .class-will-start').show();
                $('.exam-1 .class-ended').show();
                $('.exam-2 .class-ended').hide();
                $('.exam-3 .class-ended').hide();
                $('.exam-4 .class-ended').hide();
                $('.sunday').hide();
                $('.tuesday').hide();
                $('.thursday').hide();
                $('.hooray').show();
                $('.class-1 .class-will-start').hide();
                $('.class-2 .class-will-start').hide();
                $('.class-3 .class-will-start').hide();
                $('.class-4 .class-will-start').hide();
                $('.class-1 .class-ended').hide();
                $('.class-2 .class-ended').hide();
                $('.class-3 .class-ended').hide();
                $('.class-4 .class-ended').hide();
        }
        else if ((d === 1) && (n > '13:00:00' && n < '23:59:59')) {
                $('.exam-1 .class-will-start').hide();
                $('.exam-2 .class-will-start').hide();
                $('.exam-3 .class-will-start').show();
                $('.exam-4 .class-will-start').show();
                $('.exam-1 .class-ended').show();
                $('.exam-2 .class-ended').show();
                $('.exam-3 .class-ended').hide();
                $('.exam-4 .class-ended').hide();
                $('.sunday').hide();
                $('.tuesday').hide();
                $('.thursday').hide();
                $('.hooray').show();
                $('.class-1 .class-will-start').hide();
                $('.class-2 .class-will-start').hide();
                $('.class-3 .class-will-start').hide();
                $('.class-4 .class-will-start').hide();
                $('.class-1 .class-ended').hide();
                $('.class-2 .class-ended').hide();
                $('.class-3 .class-ended').hide();
                $('.class-4 .class-ended').hide();
        }

            
 
        /***************** before Class time start ******************/   

           else if ((d === 0) && (n > '00:00:00' && n < '09:00:00')) {
                $('.sunday').show();
                $('.tuesday').hide();
                $('.thursday').hide();
                $('.hooray').hide();
                $('.class-1 .class-will-start').show();
                $('.class-2 .class-will-start').show();
                $('.class-3 .class-will-start').show();
                $('.class-4 .class-will-start').show();
                $('.class-1 .class-ended').hide();
                $('.class-2 .class-ended').hide();
                $('.class-3 .class-ended').hide();
                $('.class-4 .class-ended').hide();
            }
            else if ((d === 2) && (n > '00:00:00' && n < '09:00:00')) {
               $('.sunday').hide();
                $('.tuesday').show();
                $('.thursday').hide();
                $('.hooray').hide();
                $('.class-1 .class-will-start').show();
                $('.class-2 .class-will-start').show();
                $('.class-3 .class-will-start').show();
                $('.class-4 .class-will-start').show();
                $('.class-1 .class-ended').hide();
                $('.class-2 .class-ended').hide();
                $('.class-3 .class-ended').hide();
                $('.class-4 .class-ended').hide();
        }
            else if ((d === 4) && (n > '00:00:00' && n < '09:00:00')) {
               $('.sunday').hide();
                $('.tuesday').hide();
                $('.thursday').show();
                $('.hooray').hide();
                $('.class-1 .class-will-start').show();
                $('.class-2 .class-will-start').show();
                $('.class-3 .class-will-start').show();
                $('.class-4 .class-will-start').show();
                $('.class-1 .class-ended').hide();
                $('.class-2 .class-ended').hide();
                $('.class-3 .class-ended').hide();
                $('.class-4 .class-ended').hide();
            }
        /***************** before Class time end ******************/
                
                /***************** Class 1 start ******************/
            else if ((d === 0) && (n > '09:00:00' && n < '10:00:00')) {
                $(".class-1").addClass("now").removeClass("old");
                $('.sunday').show();
                $('.tuesday').hide();
                $('.thursday').hide();
                $('.hooray').hide();
                $('.class-1 .class-will-start').hide();
                $('.class-2 .class-will-start').show();
                $('.class-3 .class-will-start').show();
                $('.class-4 .class-will-start').show();
                $('.class-1 .class-ended').hide();
                $('.class-2 .class-ended').hide();
                $('.class-3 .class-ended').hide();
                $('.class-4 .class-ended').hide();
            }
            else if ((d === 2) && (n > '09:00:00' && n < '10:00:00')) {
                $(".class-1").addClass("now").removeClass("old");
                $('.sunday').hide();
                $('.tuesday').show();
                $('.thursday').hide();
                $('.hooray').hide();
                $('.class-1 .class-will-start').hide();
                $('.class-2 .class-will-start').show();
                $('.class-3 .class-will-start').show();
                $('.class-4 .class-will-start').show();
                $('.class-1 .class-ended').hide();
                $('.class-2 .class-ended').hide();
                $('.class-3 .class-ended').hide();
                $('.class-4 .class-ended').hide();
            }
            else if ((d === 4) && (n > '09:00:00' && n < '10:00:00')) {
                $(".class-1").addClass("now").removeClass("old");
                $('.sunday').hide();
                $('.tuesday').hide();
                $('.thursday').show();
                $('.hooray').hide();
                $('.class-1 .class-will-start').hide();
                $('.class-2 .class-will-start').show();
                $('.class-3 .class-will-start').show();
                $('.class-4 .class-will-start').show();
                $('.class-1 .class-ended').hide();
                $('.class-2 .class-ended').hide();
                $('.class-3 .class-ended').hide();
                $('.class-4 .class-ended').hide();
            }
                /***************** Class 1 end ******************/

                /***************** Class 2 start ******************/
            else if ((d === 0) && (n > '10:00:00' && n < '11:00:00')) {
                $(".class-2").addClass("now").removeClass("old");
                $('.sunday').show();
                $('.tuesday').hide();
                $('.thursday').hide();
                $('.hooray').hide();
                $('.class-1 .class-will-start').hide();
                $('.class-2 .class-will-start').hide();
                $('.class-3 .class-will-start').show();
                $('.class-4 .class-will-start').show();
                $('.class-1 .class-ended').show();
                $('.class-2 .class-ended').hide();
                $('.class-3 .class-ended').hide();
                $('.class-4 .class-ended').hide();
               
            }
            else if ((d === 2) && (n > '10:00:00' && n < '11:00:00')) {
                $(".class-2").addClass("now").removeClass("old");
                $('.sunday').hide();
                $('.tuesday').show();
                $('.thursday').hide();
                $('.hooray').hide();
                $('.class-1 .class-will-start').hide();
                $('.class-2 .class-will-start').hide();
                $('.class-3 .class-will-start').show();
                $('.class-4 .class-will-start').show();
                $('.class-1 .class-ended').show();
                $('.class-2 .class-ended').hide();
                $('.class-3 .class-ended').hide();
                $('.class-4 .class-ended').hide();
               
            }
            else if ((d === 4) && (n > '10:00:00' && n < '11:00:00')) {
                $(".class-2").addClass("now").removeClass("old");
                $('.sunday').hide();
                $('.tuesday').hide();
                $('.thursday').show();
                $('.hooray').hide();
                $('.class-1 .class-will-start').hide();
                $('.class-2 .class-will-start').hide();
                $('.class-3 .class-will-start').show();
                $('.class-4 .class-will-start').show();
                $('.class-1 .class-ended').show();
                $('.class-2 .class-ended').hide();
                $('.class-3 .class-ended').hide();
                $('.class-4 .class-ended').hide();
               
            }
                /***************** Class 2 end ******************/
                
                 /***************** Break time start ******************/
            else if ((d === 0) && (n > '11:00:00' && n < '11:30:00')) {
                $('.sunday').show();
                $('.tuesday').hide();
                $('.thursday').hide();
                $('.hooray').hide();
                $('.class-1 .class-will-start').hide();
                $('.class-2 .class-will-start').hide();
                $('.class-3 .class-will-start').show();
                $('.class-4 .class-will-start').show();
                $('.class-1 .class-ended').show();
                $('.class-2 .class-ended').show();
                $('.class-3 .class-ended').hide();
                $('.class-4 .class-ended').hide();
            }
            else if ((d === 2) && (n > '11:00:00' && n < '11:30:00')) {
                $('.sunday').hide();
                $('.tuesday').show();
                $('.thursday').hide();
                $('.hooray').hide();
                $('.class-1 .class-will-start').hide();
                $('.class-2 .class-will-start').hide();
                $('.class-3 .class-will-start').show();
                $('.class-4 .class-will-start').show();
                $('.class-1 .class-ended').show();
                $('.class-2 .class-ended').show();
                $('.class-3 .class-ended').hide();
                $('.class-4 .class-ended').hide();
            }
            else if ((d === 4) && (n > '11:00:00' && n < '11:30:00')) {
                $('.sunday').hide();
                $('.tuesday').hide();
                $('.thursday').show();
                $('.hooray').hide();
                $('.class-1 .class-will-start').hide();
                $('.class-2 .class-will-start').hide();
                $('.class-3 .class-will-start').show();
                $('.class-4 .class-will-start').show();
                $('.class-1 .class-ended').show();
                $('.class-2 .class-ended').show();
                $('.class-3 .class-ended').hide();
                $('.class-4 .class-ended').hide();
            }

                /***************** break end ******************/
                
                
                /***************** Class 3 start ******************/
            else if ((d === 0) && (n > '11:30:00' && n < '12:30:00')) {
                $(".class-3").addClass("now").removeClass("old");
                $('.sunday').show();
                $('.tuesday').hide();
                $('.thursday').hide();
                $('.hooray').hide();
                $('.class-1 .class-will-start').hide();
                $('.class-2 .class-will-start').hide();
                $('.class-3 .class-will-start').hide();
                $('.class-4 .class-will-start').show();
                $('.class-1 .class-ended').show();
                $('.class-2 .class-ended').show();
                $('.class-3 .class-ended').hide();
                $('.class-4 .class-ended').hide();    
            }
            else if ((d === 2) && (n > '11:30:00' && n < '12:30:00')) {
                $(".class-3").addClass("now").removeClass("old");
                $('.sunday').hide();
                $('.tuesday').show();
                $('.thursday').hide();
                $('.hooray').hide();
                $('.class-1 .class-will-start').hide();
                $('.class-2 .class-will-start').hide();
                $('.class-3 .class-will-start').hide();
                $('.class-4 .class-will-start').show();
                $('.class-1 .class-ended').show();
                $('.class-2 .class-ended').show();
                $('.class-3 .class-ended').hide();
                $('.class-4 .class-ended').hide();    
            }
            else if ((d === 4) && (n > '11:30:00' && n < '12:30:00')) {
                $(".class-3").addClass("now").removeClass("old");
                $('.sunday').hide();
                $('.tuesday').hide();
                $('.thursday').show();
                $('.hooray').hide();
                $('.class-1 .class-will-start').hide();
                $('.class-2 .class-will-start').hide();
                $('.class-3 .class-will-start').hide();
                $('.class-4 .class-will-start').show();
                $('.class-1 .class-ended').show();
                $('.class-2 .class-ended').show();
                $('.class-3 .class-ended').hide();
                $('.class-4 .class-ended').hide();    
            }
                /***************** Class 3 end ******************/
                
                /***************** Class 4 start ******************/
            else if ((d === 0) && (n > '12:30:00' && n < '13:30:00')) {
                $(".class-4").addClass("now").removeClass("old");
                $('.sunday').show();
                $('.tuesday').hide();
                $('.thursday').hide();
                $('.hooray').hide();
                $('.class-1 .class-will-start').hide();
                $('.class-2 .class-will-start').hide();
                $('.class-3 .class-will-start').hide();
                $('.class-4 .class-will-start').hide();
                $('.class-1 .class-ended').show();
                $('.class-2 .class-ended').show();
                $('.class-3 .class-ended').show();
                $('.class-4 .class-ended').hide();
            
            }
            else if ((d === 2) && (n > '12:30:00' && n < '13:30:00')) {
                $(".class-4").addClass("now").removeClass("old");
                $('.sunday').hide();
                $('.tuesday').show();
                $('.thursday').hide();
                $('.hooray').hide();
                $('.class-1 .class-will-start').hide();
                $('.class-2 .class-will-start').hide();
                $('.class-3 .class-will-start').hide();
                $('.class-4 .class-will-start').hide();
                $('.class-1 .class-ended').show();
                $('.class-2 .class-ended').show();
                $('.class-3 .class-ended').show();
                $('.class-4 .class-ended').hide();
            
            }
            else if ((d === 4) && (n > '12:30:00' && n < '13:30:00')) {
                $(".class-4").addClass("now").removeClass("old");
                $('.sunday').hide();
                $('.tuesday').hide();
                $('.thursday').show();
                $('.hooray').hide();
                $('.class-1 .class-will-start').hide();
                $('.class-2 .class-will-start').hide();
                $('.class-3 .class-will-start').hide();
                $('.class-4 .class-will-start').hide();
                $('.class-1 .class-ended').show();
                $('.class-2 .class-ended').show();
                $('.class-3 .class-ended').show();
                $('.class-4 .class-ended').hide();
            
            }
                /***************** Class 4 end ******************/
                
                   
                /***************** after Class start ******************/
            else if ((d === 0) && (n > '13:30:00' && n < '23:59:59')) {
                $('.sunday').show();
                $('.tuesday').hide();
                $('.thursday').hide();
                $('.hooray').hide();
                $('.class-1 .class-will-start').hide();
                $('.class-2 .class-will-start').hide();
                $('.class-3 .class-will-start').hide();
                $('.class-4 .class-will-start').hide();
                $('.class-1 .class-ended').show();
                $('.class-2 .class-ended').show();
                $('.class-3 .class-ended').show();
                $('.class-4 .class-ended').show();
            
            }
            else if ((d === 2) && (n > '13:30:00' && n < '23:59:59')) {
                $('.sunday').hide();
                $('.tuesday').show();
                $('.thursday').hide();
                $('.hooray').hide();
                $('.class-1 .class-will-start').hide();
                $('.class-2 .class-will-start').hide();
                $('.class-3 .class-will-start').hide();
                $('.class-4 .class-will-start').hide();
                $('.class-1 .class-ended').show();
                $('.class-2 .class-ended').show();
                $('.class-3 .class-ended').show();
                $('.class-4 .class-ended').show();
            
            }
            else if ((d === 4) && (n > '13:30:00' && n < '23:59:59')) {
                $('.sunday').hide();
                $('.tuesday').hide();
                $('.thursday').show();
                $('.hooray').hide();
                $('.class-1 .class-will-start').hide();
                $('.class-2 .class-will-start').hide();
                $('.class-3 .class-will-start').hide();
                $('.class-4 .class-will-start').hide();
                $('.class-1 .class-ended').show();
                $('.class-2 .class-ended').show();
                $('.class-3 .class-ended').show();
                $('.class-4 .class-ended').show();
            
            }
                /***************** after Class end ******************/

            else {
                $('.sunday').hide();
                $('.tuesday').hide();
                $('.thursday').hide();
                $('.hooray').show();
                $('.class-1 .class-will-start').hide();
                $('.class-2 .class-will-start').hide();
                $('.class-3 .class-will-start').hide();
                $('.class-4 .class-will-start').hide();
                $('.class-1 .class-ended').hide();
                $('.class-2 .class-ended').hide();
                $('.class-3 .class-ended').hide();
                $('.class-4 .class-ended').hide();
            }
        }
        $(document).ready(function () {
            running();
        });