$(".TVShowsbtn").on("click", function(){
       $(".recentAddMovie-main").addClass("hidden");
       $(".series").removeClass("hidden");
       $(".TVShowsbtn").removeClass("unclicked");
       $(".Moviesbtn").removeClass("clicked");
       $(".TVShowsbtn").addClass("clicked");
       $(".Moviesbtn").addClass("unclicked");
      
       
     });
     $(".Moviesbtn").on("click", function(){
        $(".recentAddMovie-main").removeClass("hidden");
        $(".series").addClass("hidden");
        $(".TVShowsbtn").removeClass("clicked");
        $(".Moviesbtn").removeClass("unclicked");
        $(".Moviesbtn").addClass("clicked");
        $(".TVShowsbtn").addClass("unclicked");
      });

      $(".mangabtn").on("click", function(){
        $(".anime-latest").addClass("hidden");
        $(".manga-latest").removeClass("hidden");
        $(".mangabtn").removeClass("unclicked");
        $(".animebtn").removeClass("clicked");
        $(".mangabtn").addClass("clicked");
        $(".animebtn").addClass("unclicked");
       
        
      });
      $(".animebtn").on("click", function(){
         $(".anime-latest").removeClass("hidden");
         $(".manga-latest").addClass("hidden");
         $(".mangabtn").removeClass("clicked");
         $(".animebtn").removeClass("unclicked");
         $(".animebtn").addClass("clicked");
         $(".mangabtn").addClass("unclicked");
       });
 
       