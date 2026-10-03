(()=>{'use strict';
const canvas=document.getElementById('water');if(!canvas)return;
const ctx=canvas.getContext('2d',{alpha:true});let w=0,h=0,dpr=1,raf=0,last=0;
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const ripples=Array.from({length:26},(_,i)=>({
  y:.02+i*.042,
  amp:1.05+i*.065,
  freq:.011+i*.00052,
  speed:.00019+i*.000007,
  alpha:.035+i*.0037,
  width:.55+(i%4)*.16,
  drift:(i%2?1:-1)*(5+(i%5)*2)
}));
const glints=Array.from({length:18},(_,i)=>({
  y:.13+i*.035,
  offset:i*.83,
  width:10+(i%5)*9,
  alpha:.018+(i%4)*.008
}));
function resize(){
 const r=canvas.getBoundingClientRect();dpr=Math.min(devicePixelRatio||1,2);
 w=Math.max(1,r.width);h=Math.max(1,r.height);
 canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);
 ctx.setTransform(dpr,0,0,dpr,0,0)
}
function wave(row,t){
 const y=h*row.y;ctx.beginPath();
 for(let x=-20;x<=w+20;x+=7){
  const drift=Math.sin(t*.00008+row.y*17)*row.drift;
  const yy=y+Math.sin((x+drift)*row.freq+t*row.speed)*row.amp+Math.sin(x*row.freq*.41-t*row.speed*.61)*row.amp*.38;
  if(x===-20)ctx.moveTo(x,yy);else ctx.lineTo(x,yy)
 }
 ctx.strokeStyle='rgba(162,204,220,'+row.alpha+')';ctx.lineWidth=row.width;ctx.stroke()
}
function draw(t){
 ctx.clearRect(0,0,w,h);
 const g=ctx.createLinearGradient(0,0,0,h);
 g.addColorStop(0,'rgba(72,123,143,.09)');
 g.addColorStop(.42,'rgba(24,71,90,.16)');
 g.addColorStop(1,'rgba(0,13,20,.43)');
 ctx.fillStyle=g;ctx.fillRect(0,0,w,h);
 ripples.forEach(r=>wave(r,t));
 glints.forEach((glt,i)=>{
  const y=h*glt.y+Math.sin(t*.00034+glt.offset)*2;
  const x=w*.735+Math.sin(t*.00016+glt.offset)*34+i%3*7;
  const pulse=.72+Math.sin(t*.0007+i)*.28;
  ctx.fillStyle='rgba(218,237,243,'+(glt.alpha*pulse)+')';
  ctx.fillRect(x,y,glt.width*(.8+pulse*.3),.55+(i%3)*.18)
 });
 const near=ctx.createLinearGradient(0,h*.7,0,h);
 near.addColorStop(0,'rgba(5,24,33,0)');
 near.addColorStop(1,'rgba(0,7,11,.28)');
 ctx.fillStyle=near;ctx.fillRect(0,h*.65,w,h*.35);
 last=t;
 if(!reduced)raf=requestAnimationFrame(draw)
}
function restart(){cancelAnimationFrame(raf);resize();draw(last||performance.now())}
resize();addEventListener('resize',restart,{passive:true});draw(performance.now());
})();