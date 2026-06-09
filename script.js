(()=> {
 const pages=[...document.querySelectorAll(".card")], dots=document.getElementById("dots"); let i=0;
 pages.forEach((_,k)=>{let d=document.createElement("i");if(k===0)d.className="active";dots.appendChild(d)});
 const ds=[...dots.children];
 function show(n){
   i=Math.max(0,Math.min(pages.length-1,n));
   pages.forEach((x,k)=>{x.classList.toggle("active",k===i);if(k===i){x.classList.remove("active");void x.offsetWidth;x.classList.add("active")}});
   ds.forEach((d,k)=>d.classList.toggle("active",k===i));
 }
 document.getElementById("next").onclick=()=>show(i+1);
 document.getElementById("prev").onclick=()=>show(i-1);
 const openBtn=document.getElementById("openBtn"); if(openBtn) openBtn.onclick=()=>setTimeout(()=>show(1),350);
 let sx=0;document.addEventListener("touchstart",e=>sx=e.touches[0].clientX,{passive:true});
 document.addEventListener("touchend",e=>{let dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>55)dx<0?show(i+1):show(i-1)},{passive:true});
 const mb=document.getElementById("musicBtn"), a=document.getElementById("music");
 if(mb&&a){mb.onclick=async()=>{try{if(a.paused){await a.play();mb.classList.add("playing")}else{a.pause();mb.classList.remove("playing")}}catch(e){}}}
})();