//D3Tasks 3.2 RamiWailShoula

var next = document.querySelector(".next");
var previous = document.querySelector(".previous");
var slideshow = document.querySelector(".slideshow");
var stop1 = document.querySelector(".stop");
var img = document.querySelector(".img");
let n = 1;

next.addEventListener("click", () => {
  img.src = `./slideshow pics/${n}.jpg`;
  n++;
  if (n >= 6) {
    n = 1;
  }
});

previous.addEventListener("click", () => {
  img.src = `./slideshow pics/${n}.jpg`;
  n--;
  if (n <= 0) {
    n = 6;
  }
});

slideshow.addEventListener("click", () => {
    var slider = setInterval(() => {
        img.src = `./slideshow pics/${n}.jpg`;
        n++;
        if(n >= 6) {
            n=1;
        }
  }, 2000); //2 seconds intervals (2 * 1000 ms)
  stop1.addEventListener("click", () => {
      clearInterval(slider);
  });
});
