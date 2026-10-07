function replay(){document.querySelectorAll(".tag,.stamp").forEach(e=>{e.style.animation="none";e.offsetHeight;e.style.animation=""})}
const y=document.getElementById("y");if(y)y.textContent=new Date().getFullYear();
const f=document.getElementById("lead");
if(f)f.addEventListener("submit",async e=>{e.preventDefault();const m=document.getElementById("msg"),b=f.querySelector("button");b.disabled=true;
try{const r=await fetch(f.action,{method:"POST",body:new FormData(f),headers:{Accept:"application/json"}});if(!r.ok)throw 0;f.reset();m.textContent="Thanks. We will contact you shortly."}
catch(_){m.textContent="Something went wrong. Please call 561-509-0126."}m.style.display="block";b.disabled=false});
