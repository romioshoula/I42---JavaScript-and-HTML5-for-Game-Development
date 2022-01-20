var UserInput = prompt("Enter your massage");

var h1ID = document.getElementsByClassName("script");

for(let i =0; i < 6; i++) {
    h1ID[i].append(UserInput);
    //document.write(value);
}