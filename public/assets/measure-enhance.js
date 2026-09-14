(()=>{
  let started=false;
  const offerType=()=>{const p=location.pathname;if(p.startsWith('/afisha'))return'performance';if(p.startsWith('/kurs'))return'course';if(p.startsWith('/individual'))return'individual';if(p.startsWith('/druzya-tbilisi'))return'community';if(p.startsWith('/tvorcheskie-znakomstva-tbilisi'))return'creative_meetups';if(p.startsWith('/chem-zanyatsya-tbilisi'))return'tbilisi_activities';if(p.startsWith('/about'))return'about';if(p==='/')return'home';return''};
  const locationOf=el=>{const s=el.closest('section');return s?.id||String(s?.className||'global').split(' ')[0]||'global'};
  const track=(name,params={})=>{if(localStorage.getItem('analyticsConsent')==='yes'&&typeof window.gtag==='function')window.gtag('event',name,{page_path:location.pathname,page_title:document.title,offer_type:offerType(),...params})};
  function start(){
    if(started)return;
    if(localStorage.getItem('analyticsConsent')!=='yes'||typeof window.gtag!=='function'){setTimeout(start,250);return}
    started=true;
    const seen=new WeakSet();
    if('IntersectionObserver'in window){
      const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting&&!seen.has(e.target)){seen.add(e.target);track('cta_view',{cta_text:e.target.textContent.trim(),cta_location:locationOf(e.target)})}}),{threshold:.6});
      document.querySelectorAll('[data-wa],.actions .btn').forEach(el=>io.observe(el));
    }
    setTimeout(()=>{if(document.visibilityState==='visible')track('engaged_visit',{seconds:20})},20000);
  }
  start();
})();
