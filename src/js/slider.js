$(window).bind("load", function() {
  console.log("Window Loaded!!")
    var totalWidth = 0;
    $(".team-slider img").each(function() {
          totalWidth = totalWidth + $(this).width()+10;
    });
    var i = 0;
    var wW = window.outerWidth;
    var sWidth = Math.abs(eval(wW-totalWidth))+20;
      function scrollit(){
        if(i<= sWidth){
        $(".team-row-1").scrollLeft(i)
        }else{
        i = 0;
        }
        i = i+1
      }
     window.setInterval(scrollit, 12); 
     $(window).resize(scrollit);
    });