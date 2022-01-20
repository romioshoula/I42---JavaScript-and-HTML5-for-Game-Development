//D3Tasks 3.4 RamiWailShoula

var img = document.querySelectorAll(".img");
var arr = 
[
"3",
"1",
"2",
"6",
"4",
"3",
"4",
"1",
"5",
"2",
"5",
"6",
];

for (let i = 0; i < 12; i++) {
    img[i].src = "./slideshow memory/Moon.gif";
    img[i].addEventListener("click", () => {
        img[i].src = `./slideshow memory/${arr[i]}.gif`;        
    });
}
