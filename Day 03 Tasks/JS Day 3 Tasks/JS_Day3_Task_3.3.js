//D3Tasks 3.3 RamiWailShoula

var cur = document.querySelectorAll(".img");
var x = 0;
var isPause = false;

var h = setInterval(() => {
    if(!isPause) {
        cur[x].src = `./slideshow marbles/marble3.jpg`;
        if (!x == 0) cur[x - 1].src = `./slideshow marbles/marble1.jpg`;
        if (x == 0) cur[4].src = `./slideshow marbles/marble1.jpg`;
        x++;
      
        if (x >= 5) {
          x = 0;
        }
    }
}, 1000); //1 sec intervals

for (let i = 0; i < 5; i++) {
  cur[i].addEventListener("mouseenter", () => {
    isPause = true;
  });
  cur[i].addEventListener("mouseleave", () => {
    isPause = false;
  });
}
