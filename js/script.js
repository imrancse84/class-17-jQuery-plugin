      $(function(){

        $(".bg-danger").click(function(){
          $("body").addClass("bg-danger text-white");
          $("body").removeClass("bg-info bg-primary bg-dark bg-light bg-success");
        });

        $(".bg-info").click(function(){
          $("body").addClass("bg-info text-white");
          $("body").removeClass("bg-danger bg-primary bg-dark bg-secondary bg-success");
        });

        $(".bg-primary").click(function(){
          $("body").addClass("bg-primary text-white");
          $("body").removeClass("bg-danger bg-info bg-dark bg-secondary bg-success");
        });

        $(".bg-dark").click(function(){
          $("body").addClass("bg-dark text-white");
          $("body").removeClass("bg-danger bg-primary bg-info bg-secondary bg-success");
        });

         $(".bg-secondary").click(function(){
          $("body").addClass("bg-secondary text-white");
          $("body").removeClass("bg-danger bg-primary bg-info bg-dark bg-success");
        });

         $(".bg-success").click(function(){
          $("body").addClass("bg-success text-white");
          $("body").removeClass("bg-danger bg-primary bg-info bg-dark bg-secondary");
        });


         $(".settings img").click(function(){

          $(".settings").toggleClass("move");


         });





      });