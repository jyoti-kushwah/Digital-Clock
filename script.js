// setInterval(time,1000);

 function  time(){
    let  times = new Date();
    let  hour = times.getHours();
    let  min = times.getMinutes();
    let  sec = times.getSeconds();
    let ap = "AM"
    // let  ap= time.getHours() >= 12 ? "PM" : "AM";
    // document.getElementById("time").innerHTML=hour + ":" + min + ":"+ sec + ":" 
      //  setInterval(time,1000);
      if (hour === 0){
        hour = 12;
      }
      if(hour >12){
        hour = hour - 12;
        ap = "PM"
      }
      if(hour < 10){
        hour = "0" + hour;
      }
      if(min < 10){
        min = "0" + min;
      }
      if(sec < 10){
        sec = "0" + sec;
      }

      // if(hour>=12 && ampm === "AM"){
        if(hour < 8 && hour >= 4 && ap === "PM" ){

       
          let a=document.getElementById("jyoti");
          a.style.backgroundImage="url('abc.jpeg')";
       
          let j=document.getElementById("test") 
          j.innerText="STOP YAWMING GET SOME TEA.. ITS JUST EVENING"

          let b =document.getElementById("turn")
          b.innerText="GOOD EVENING !!"
        }
      
        else if (hour < 4 && ap === "PM"){

          let p=document.getElementById("test")
          p.innerText="LET'S HAVE SOME LUNCH"

          let c=document.getElementById("turn")
          c.innerText="GOOD AFTERNOON !! AND TAKE SOME SLEEP"

          let d=document.getElementById("jyoti")
          d.style.backgroundImage="url('E:\prepbytes project\Digital Clock\lunch.jpeg')";

        }
        
        else if(hour > 11 && hour >= 8 && ap ==="PM"){
          let e=document.getElementById("test")
          e.innerText="CLOSE YOUR EYES AND GO TO SLEEP"

          let f=document.getElementById("turn")   
          f.innerText="GOOD NIGHT !!"

          let g=document.getElementById("jyoti")
          g.style.backgroundImage="url('goodnight.png')"
         }
         else if(hour > 1 && hour >= 7 && 12 && ap === "AM"){
          let m=document.getElementById("test")
          m.innerText = "GRAB SOME HEALTHY BREAKFAST";

          let l= document.getElementById("jyoti") 
          l.style.backgroundImage="url('./window.jpeg')"

         let s =document.getElementById("turn")
          s.innerText="GOOD MORINING !! WAKE UP !!";
         }
        // if(hour>=12){
        //   ap.innerHTML="PM"
        // }else {
        //   ap.innerHTML="AM"
        // }if(hour>12){
        //   hour = hour-12;
        // }
      
      
        document.getElementById("hh").innerText = hour;
        document.getElementById("mm").innerText = min;
        document.getElementById("ss").innerText = sec;
        document.getElementById("ampm").innerHTML = ap;

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