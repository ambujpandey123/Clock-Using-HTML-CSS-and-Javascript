

let hr=document.getElementById('hour');
let min=document.getElementById('minute');
let sec=document.getElementById('second');
let dg=document.getElementById('digitime');

const rotate=()=>{
  const d = new Date();
let  h=d.getHours();
let  m=d.getMinutes();
let  s=d.getSeconds();
  
  let hrotate=h*30+m/2;
  let mrotate=6*m;
  let srotate=6*s;
  
 hr.style.transform = `rotate(${hrotate}deg)`;
 min.style.transform =`rotate(${mrotate}deg)`;
 sec.style.transform =`rotate(${srotate}deg)`;
 
 dg.innerHTML=`Digital Time - ${h} : ${m} : ${s} `;
}
setInterval(rotate,1000);


