//D3Tasks 1.2 RamiWailShoula

var qry = document.querySelector(".D3Tasks");

var s = "I am now typing a message in a new child window. ";

var pos = 0; 


qry.addEventListener("click", ()=>{
  var x = window.open("about:blank", "Done", "width=400,height=400");
  write(x);
})

var write = (x) => {
  if(pos < s.length)
  {
   x.document.body.innerHTML += s.charAt(pos);
    pos++;
   setTimeout(() => {write(x)}, 50);
 }
}



