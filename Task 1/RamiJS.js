console.log("something wlse 12345 some tips !@#$!");

var n = prompt("How many numbers do u want to enter?");
var sum =0;


for (var i =0 ; i < n ; i++) {
    var x;
    x= prompt(`Enter Number ${i+1}`);
    x= parseInt(x);

    if(!isFinite(x) || sum >= 100){
        document.write("sum exceeds 100, stopping! ");
        console.log("sum exceeds 100, stopping! ");
        break;
    }
    if (x==0){
        document.write("YOU ENTERED 0, stopping! ");
        console.log("YOU ENTERED 0, stopping!  ");
        break
    }
    sum+=x;

}

document.write("sum is: " ,sum);