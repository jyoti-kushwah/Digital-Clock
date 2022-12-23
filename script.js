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
      // if(hour>=12 && ampm === "AM"){
        if(hour>12 && hour<=19 ){
          let a=document.getElementById("jyoti");
          a.style.backgroundImage="url('abc.jpeg')";
       
          let test=document.getElementById("test") 
          test.innerText="STOP YAWMING GET SOME TEA.. ITS JUST EVENING"

          let b =document.getElementById("alarm")
          alarm.innerText="GOOD EVENING !!"
        }else if (hour>=12 && hour<=15){
          let test=document.getElementById("test")
          test.innerText="LET'S HAVE SOME LUNCH"

          let c=document.getElementById("alarm")
          alarm.innerText="GOOD AFTERNOON !!TAKE SOME SLEEP"

          let d=document.getElementById("jyoti")
          d.style.backgroundImage="url('./lunchtime.png')";

        }else if(hour>=20 && hour<=23){
          let e=document.getElementById("test")
          e.innerText="CLOSE YOUR EYES AND GO TO SLEEP"

          let f=document.getElementById("alarm")
          alarm.innerText="GOOD NIGHT !!"

          let g=document.getElementById("jyoti")
          g.style.backgroundImage="url('goodnigtht.png')"
         }
        if(hour>=12){
          ampm.innerHTML="PM"
        }else {
          ampm.innerHTML="AM"
        }if(hour>12){
          hour = hour-12;
        }

      
        document.getElementById("hh").innerText = hour;
        document.getElementById("mm").innerText = min;
        document.getElementById("ss").innerText = sec;
        document.getElementById("ampm").innerHTML = ampm;

        setTimeout(time,1000);
 }
 time();

 function alarm(){
  let img=document.getElementById("img")
  let img1=document.getElementById("img1")
  let img2=document.getElementById("img2")
  let img3=document.getElementById("img3")

  let img4=document.getElementById("img4")
  let img5=document.getElementById("img5")
  let img6=document.getElementById("img6")
  let img7=document.getElementById("img7")

  img4.innerHTML=img.value;
  img5.innerHTML=img1.value;
  img6.innerHTML=img2.value;
  img7.innerHTML=img3.value;

 }
 document.getElementById("set").addEventListener("click",alarm)
 
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