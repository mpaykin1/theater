(()=>{
  let started=false;
  const safeGet=(store,key)=>{try{return store.getItem(key)||''}catch{return''}};
  const safeSet=(store,key,value)=>{try{store.setItem(key,value)}catch{}};
  const consent=()=>safeGet(localStorage,'analyticsConsent')==='yes';
  const offerType=()=>{const p=location.pathname;if(p.startsWith('/afisha'))return'performance';if(p.startsWith('/kurs'))return'course';if(p.startsWith('/individual'))return'individual';if(p.startsWith('/druzya-tbilisi'))return'community';if(p.startsWith('/tvorcheskie-znakomstva-tbilisi'))return'creative_meetups';if(p.startsWith('/chem-zanyatsya-tbilisi'))return'tbilisi_activities';if(p.startsWith('/about'))return'about';if(p==='/')return'home';return''};
  const locationOf=el=>{const s=el?.closest?.('section');return s?.id||String(s?.className||'global').split(' ')[0]||'global'};
  function initAttribution(){
    const q=new URLSearchParams(location.search);
    if(!safeGet(sessionStorage,'ga_landing'))safeSet(sessionStorage,'ga_landing',location.pathname+location.search);
    const ref=document.referrer&&!document.referrer.includes(location.host)?document.referrer:'';
    if(ref&&!safeGet(sessionStorage,'ga_first_referrer'))safeSet(sessionStorage,'ga_first_referrer',ref);
    ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'].forEach(k=>{const v=q.get(k);if(v&&!safeGet(sessionStorage,'ga_'+k))safeSet(sessionStorage,'ga_'+k,v)});
  }
  const attribution=()=>({
    site_host:location.host,
    landing_path:safeGet(sessionStorage,'ga_landing'),
    first_referrer:safeGet(sessionStorage,'ga_first_referrer'),
    utm_source:safeGet(sessionStorage,'ga_utm_source'),
    utm_medium:safeGet(sessionStorage,'ga_utm_medium'),
    utm_campaign:safeGet(sessionStorage,'ga_utm_campaign'),
    utm_content:safeGet(sessionStorage,'ga_utm_content'),
    utm_term:safeGet(sessionStorage,'ga_utm_term')
  });
  const track=(name,params={})=>{if(consent()&&typeof window.gtag==='function')window.gtag('event',name,{page_path:location.pathname,page_title:document.title,offer_type:offerType(),...attribution(),...params})};
  function start(){
    if(started)return;
    if(!consent()||typeof window.gtag!=='function'){setTimeout(start,250);return}
    started=true;
    initAttribution();
    const seen=new WeakSet();
    if('IntersectionObserver'in window){
      const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting&&!seen.has(e.target)){seen.add(e.target);track('cta_view',{cta_text:e.target.textContent.trim(),cta_location:locationOf(e.target)})}}),{threshold:.6});
      document.querySelectorAll('[data-wa],.actions .btn').forEach(el=>io.observe(el));
    }
    setTimeout(()=>{if(document.visibilityState==='visible'){safeSet(sessionStorage,'ga_engaged_20s','1');track('engaged_visit',{seconds:20})}},20000);
    document.addEventListener('click',e=>{
      const el=e.target.closest?.('[data-quiz-wa]');
      if(!el)return;
      track('qualify_lead',{qualification_method:'completed_quiz',lead_source:'quiz_whatsapp',cta_text:el.textContent.trim(),cta_location:locationOf(el)});
    });
  }
  start();
})();
