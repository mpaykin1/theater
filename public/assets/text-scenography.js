(()=>{'use strict';
const canvas=document.getElementById('water');if(!canvas)return;
const ctx=canvas.getContext('2d',{alpha:true});let w=0,h=0,dpr=1,raf=0,reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
function resize(){const r=canvas.getBoundingClientRect();dpr=Math.min(devicePixelRatio||1,2);w=Math.max(1,r.width);h=Math.max(1,r.height);canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0)}
function line(y,amp,freq,phase,alpha,width){ctx.beginPath();for(let x=-10;x<=w+10;x+=8){const yy=y+Math.sin(x*freq+phase)*amp+Math.sin(x*freq*.37-phase*.63)*amp*.32;if(x===-10)ctx.moveTo(x,yy);else ctx.lineTo(x,yy)}ctx.strokeStyle='rgba(162,204,220,'+alpha+')';ctx.lineWidth=width;ctx.stroke()}
function draw(t){ctx.clearRect(0,0,w,h);
 const g=ctx.createLinearGradient(0,0,0,h);g.addColorStop(0,'rgba(72,123,143,.09)');g.addColorStop(.42,'rgba(24,71,90,.16)');g.addColorStop(1,'rgba(0,13,20,.43)');ctx.fillStyle=g;ctx.fillRect(0,0,w,h);
 const phase=t*.00032;
 for(let i=0;i<20;i++){const y=12+i*(h/18);line(y,1.2+i*.08,.013+i*.0007,phase*(1+i*.035)+i*.65,.055+i*.004,.7+(i%3)*.18)}
 for(let i=0;i<10;i++){const y=h*.22+i*24;const x=w*.74+Math.sin(t*.0002+i)*25;ctx.fillStyle='rgba(218,237,243,'+(0.018+i*.003)+')';ctx.fillRect(x,y,18+Math.sin(i)*12,.7)}
 if(!reduced)raf=requestAnimationFrame(draw)}
resize();addEventListener('resize',()=>{cancelAnimationFrame(raf);resize();draw(performance.now())});draw(performance.now());
})();