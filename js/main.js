function getI(a){
    return document.getElementById(a);
}
function f(){
    return (Math.round(Math.random()*9));
    
}
setInterval(function(){
    var x=(Math.round(30+Math.random()*window.innerHeight));
    var y=(Math.round(30+Math.random()*(window.innerHeight-100)));
    $("div").css({
        background :"#"+f()+f()+f()+f()+f()+f(),
        borderColor: "#"+f()+f()+f()+f()+f()+f(),
        boxShadow: "0 0 50px #"+f()+f()+f()+f()+f()+f()
    })
    $("div").animate({
        left: x+"px",
        top: y+"px",
    }, 1300, "easeInOutBounce")
},1300)