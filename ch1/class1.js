var a = 10;
function call(){
    console.log("Hello from class1",a);
}

document.addEventListener('DOMContentLoaded', function(){
    var btn = document.getElementById('myButton');
    if(btn){
        btn.addEventListener('click', function(){
            call();
        });
    }
});


let show = function(){
    console.log("Show function called");
}






















































































































