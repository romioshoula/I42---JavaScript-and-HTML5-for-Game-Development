//D3Tasks 2.1 RamiWailShoula

document.querySelector(".enter").addEventListener("click", ()=>{
    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;
    var number = document.querySelector(".number").value;
    var password = document.querySelector(".password").value;

    var x = window.open("./JS_Day3_Task_2.1_2.html");
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("number", number);
    localStorage.setItem("password", password);
});