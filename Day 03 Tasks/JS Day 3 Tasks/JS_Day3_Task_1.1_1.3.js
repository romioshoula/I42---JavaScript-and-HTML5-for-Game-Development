//JS_Day3_Task_1.1_1.3 RamiWailShoula

var qry = document.querySelector(".D3Tasks");
var clr = document.querySelector(".clear");

let mx = 0,my=0;

let dx =5 , dy = 5;

qry.addEventListener("click", ()=>{
    var x = window.open("JS_Day3_Task_1.1_1.3.html", "-_blank", "toolbar=yes,width=400,height=400,scrollbars=yes");
    x.moveTo(0,0);
   var cw= setInterval(() => {
        mover(x);
        x.resizeTo(300,300);
    }, 75);
    clr.addEventListener("click", ()=>{
      clearInterval(cw);
    })
  })

  function mover(x) {
      if((mx+dx > (screen.availWidth-400))  || (mx+dx <0)) dx = -dx;
      if((my+dy > (screen.availHeight-400) ) || (my+dy <0)) dy = -dy;
      mx+=dx;
      my+=dy;
      x.moveTo(mx,my);
      x.focus();
  }