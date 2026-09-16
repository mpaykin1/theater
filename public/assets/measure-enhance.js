(()=>{
  let started=false;
  const safeGet=(store,key)=>{try{return store.getItem(key)||''}catch{return''}};
  const safeSet=(store,key,value)=>{try{store.setItem(key,value)}catch{}};
  const consent=()=>safeGet(localStorage,'analyticsConsent')==='yes';
  const offerType=()=>{const p=location.pathname;if(p.startsWith('/afisha'))return'performance';if(p.startsWith('/kurs'))return'course';if(p.startsWith('/individual'))return'individual';if(p.startsWith('/druzya-tbilisi'))return'community';if(p.startsWith('/tvorcheskie-znakomstva-tbilisi'))return'creative_meetups';if(p.startsWith('/chem-zanyatsya-tbilisi'))return'tbilisi_activities';if(p.startsWith('/about'))return'about';return p==='/'?'home':''};
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
  function initTodayResultCard(){
    const result=document.querySelector('[data-today-result]');
    if(!result)return;
    const enhance=()=>{
      if(result.hidden||result.querySelector('.result-share-card'))return;
      const wa=result.querySelector('[data-today-wa]');
      const title=result.querySelector('.quiz-result h3')?.textContent?.trim();
      if(!wa||!title)return;
      let message='';
      try{message=new URL(wa.href).searchParams.get('text')||''}catch{}
      const marker='Мои ответы: ';
      const raw=message.includes(marker)?message.slice(message.indexOf(marker)+marker.length):'';
      const answers=raw?raw.split(/;\s*(?=\d+\))/).map(x=>x.replace(/^\d+\)\s*/,'')):[];
      const card=document.createElement('div');
      card.className='card result-share-card';
      card.style.margin='18px 0';
      const eyebrow=document.createElement('div');
      eyebrow.className='eyebrow';
      eyebrow.textContent='Карточка результата';
      const heading=document.createElement('h3');
      heading.textContent=title;
      const intro=document.createElement('p');
      intro.textContent='Ваши ответы:';
      const list=document.createElement('ol');
      list.style.paddingLeft='22px';
      list.style.margin='10px 0 16px';
      answers.forEach(answer=>{const li=document.createElement('li');li.textContent=answer;li.style.margin='7px 0';list.appendChild(li)});
      const note=document.createElement('p');
      note.style.opacity='.78';
      note.textContent='Можно сделать скриншот этой карточки. Но проще нажать кнопку ниже: WhatsApp откроется с уже заполненными результатами — останется только нажать «Отправить».';
      card.append(eyebrow,heading,intro,list,note);
      const actions=result.querySelector('.actions');
      if(actions)actions.before(card);else result.appendChild(card);
      wa.textContent='Отправить мои результаты Михаилу →';
      wa.setAttribute('aria-label','Отправить результаты анкеты Михаилу в WhatsApp');
      track('today_picker_result_card_view',{recommended_title:title,answers_count:answers.length});
    };
    enhance();
    new MutationObserver(enhance).observe(result,{subtree:true,childList:true,attributes:true,attributeFilter:['hidden']});
  }
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
  initTodayResultCard();
  start();
})();
