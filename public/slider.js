(()=>{var __webpack_exports__={};$(window).bind("load",(function(){console.log("Window Loaded!!");var totalWidth=0;$(".team-slider img").each((function(){totalWidth=totalWidth+$(this).width()+10}));var i=0,wW=window.outerWidth,sWidth=Math.abs(eval(wW-totalWidth))+20;function scrollit(){i<=sWidth?$(".team-row-1").scrollLeft(i):i=0,i+=1}window.setInterval(scrollit,12),$(window).resize(scrollit)}))})();