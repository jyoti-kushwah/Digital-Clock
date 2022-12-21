// setInterval(time,1000);

 function  time(){
    const times = new Date();
    let  hour = times.getHours();
    const  min = times.getMinutes();
    let  sec = times.getSeconds();
    let ampm = hour >= 12 ? "PM" : "AM";
    // document.getElementById("time").innerHTML=hour + ":" + min + ":"+ sec + ":" 
      //  setInterval(time,1000);
      if (hour === 0){
        hour = 12;
      }
      if(hour >12){
        hour = hour - 12;
      }
        document.getElementById("hh").innerText = hour;
        document.getElementById("mm").innerText = min;
        document.getElementById("ss").innerText = sec;
        document.getElementById("ampm").innerHTML = ampm;

        setTimeout(time,1000);
 }
 time();
 
// if (hour === 0){
//   hour = 12;
// }
// if(hour >12){
//   hour = hour - 12;

//   document.getElementById("hh").innerText = hour;
//   document.getElementById("mm").innerText = min;
//   document.getElementById("ss").innerText = sec;
//   document.getElementById("ampm").innerHTML = ampm;
// document.getElementById("hh").innerText = hour;
// document.getElementById("mm").innerText = min;
// document.getElementById("ss").innerText = sec;
// document.getElementById("ampm").innerHTML = ampm;