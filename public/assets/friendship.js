(()=>{'use strict';
const form=document.getElementById('friendship-selector');
if(!form)return;
const result=document.getElementById('friendship-result');
const error=document.getElementById('friendship-error');
const counter=document.getElementById('friendship-count');
const WA='995598881368';
let started=false;
function track(name,parameters={}){
 try{if(localStorage.getItem('analyticsConsent')==='yes'&&typeof window.gtag==='function'){
   window.gtag('event',name,{page_path:location.pathname,offer_type:'community',...parameters});
 }}catch{}
}
function selectedInterests(){
 return Array.from(form.querySelectorAll('input[name="interest"]:checked'),el=>el.value);
}
function clearResult(){
 result.hidden=true;result.replaceChildren();error.hidden=true;
 counter.textContent=String(selectedInterests().length);
}
form.addEventListener('change',()=>{
 if(!started){started=true;track('friendship_match_start');}
 clearResult();
});
form.addEventListener('input',()=>{if(!result.hidden)clearResult();});
form.addEventListener('submit',event=>{
 event.preventDefault();
 const interests=selectedInterests();
 if(!interests.length){
  error.textContent='Выберите хотя бы одно занятие — или отметьте «Своя идея».';
  error.hidden=false;form.querySelector('input[name="interest"]').focus();
  track('friendship_match_validation_error');
  return;
 }
 error.hidden=true;
 const mode=form.querySelector('input[name="role"]:checked')?.value||'Пока не знаю';
 const availability=form.elements.namedItem('availability').value||'Пока не знаю';
 const idea=form.elements.namedItem('idea').value.trim().slice(0,240);
 const message=[
  'Здравствуйте, Михаил! Я увидел(а) «Деятельную дружбу» в Тбилиси и хочу присоединиться.',
  'Мне интересно: '+interests.join(', ')+'.',
  'Как хочу участвовать: '+mode+'.',
  'Когда удобно: '+availability+'.',
  ...(idea?['Моя идея: '+idea+'.']:[]),
  'Подскажите, пожалуйста, ближайший реальный формат встречи, место и условия.'
 ].join('\n');
 const heading=document.createElement('h3');
 heading.textContent='Ваш первый шаг готов';
 const summary=document.createElement('p');
 summary.textContent='Вы выбрали: '+interests.join(', ')+'.';
 const details=document.createElement('p');
 details.textContent='Участие: '+mode+'. Удобное время: '+availability+'.';
 const detailIdea=idea?document.createElement('p'):null;
 if(detailIdea)detailIdea.textContent='Ваша идея: '+idea;
 const note=document.createElement('p');
 note.textContent='Проверьте карточку. WhatsApp откроется с заполненным сообщением: отправка произойдёт только после вашего подтверждения.';
 const link=document.createElement('a');
 link.className='btn';link.href='https://wa.me/'+WA+'?text='+encodeURIComponent(message);
 link.textContent='Отправить Михаилу в WhatsApp →';
 link.target='_blank';link.rel='noopener noreferrer';
 link.addEventListener('click',()=>{
  track('friendship_whatsapp_click',{interest_count:interests.length,selected_role:mode});
  track('whatsapp_click',{cta_location:'friendship_match',offer_type:'community'});
  track('generate_lead',{lead_source:'friendship_match',offer_type:'community'});
 });
 result.replaceChildren(heading,summary,details,...(detailIdea?[detailIdea]:[]),note,link);
 result.hidden=false;
 track('friendship_match_complete',{interest_count:interests.length,selected_role:mode});
 result.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'nearest'});
 heading.setAttribute('tabindex','-1');heading.focus({preventScroll:true});
});
})();