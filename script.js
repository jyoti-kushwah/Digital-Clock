

function  time(){
    let times = new Date ();
    let hour = times.getHours();
    let min = times.getMinutes();
    let sec = times.getSeconds();
    document.getElementById("time").innerHTML=hour + ":" + min + ":"+ sec + ":" ;
    //  setInterval(time,1000);

}
time();
setInterval(function(){
    time();

},1000);
