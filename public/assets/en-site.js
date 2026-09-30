(()=>{'use strict';
const WA='995598881368',MID='G-TYN56TWBXX';
const q=(s,r=document)=>r.querySelector(s),qa=(s,r=document)=>[...r.querySelectorAll(s)];
function wa(m){return 'https://wa.me/'+WA+'?text='+encodeURIComponent(m)}
qa('[data-wa-message]').forEach(a=>{a.href=wa(a.dataset.waMessage);a.target='_blank';a.rel='noopener noreferrer'});
const menu=q('.menu'),nav=q('.navlinks');if(menu&&nav)menu.onclick=()=>{const on=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!on));nav.classList.toggle('open',!on)};
function loadGA(){if(window.gtag)return;window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config',MID,{anonymize_ip:true});const s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+MID;document.head.appendChild(s)}
const consent=localStorage.getItem('analyticsConsent');if(consent==='yes')loadGA();
const box=q('#cookie-consent');if(box&&consent)box.hidden=true;
q('#analytics-yes')?.addEventListener('click',()=>{localStorage.setItem('analyticsConsent','yes');loadGA();if(box)box.hidden=true});
q('#analytics-no')?.addEventListener('click',()=>{localStorage.setItem('analyticsConsent','no');if(box)box.hidden=true});
function track(n,p={}){try{if(localStorage.getItem('analyticsConsent')==='yes'&&window.gtag)gtag('event',n,{page_path:location.pathname,...p})}catch{}}
qa('[data-wa-message]').forEach(a=>a.addEventListener('click',()=>track('whatsapp_click',{cta_location:a.dataset.cta||'en_page'})));

const themes={
 control:{name:'Control & Trust',desc:'A theme about releasing total control and trying trust without becoming passive.'},
 mask:{name:'Take Off the Mask',desc:'A theme about stopping the performance of being “fine”, “correct” or convenient and trying a more honest role.'},
 dream:{name:'The Dream That Starts Moving',desc:'A theme about turning a wish into one small action instead of another round of planning.'},
 talk:{name:'The Conversation I Keep Avoiding',desc:'A theme about unsaid words, conflict and rehearsing a difficult conversation.'},
 people:{name:'My People',desc:'A theme about loneliness, connection and finding a way to approach other people.'},
 no:{name:'The Right to Say No',desc:'A theme about boundaries, guilt and the right to choose yourself.'},
 turn:{name:'Plot Twist',desc:'A theme about uncertainty, choice and trying a move you have not tried before.'}
};
const themeKeys=Object.keys(themes);
function startQuiz(root,type){
 const questions=type==='want'?[
  ['What feels most missing right now?',['Freedom','Connection','Clarity','Courage','Rest','Movement']],
  ['What are you tired of repeating?',['Controlling everything','Being convenient','Postponing','Avoiding a conversation','Being alone','Saying yes when I mean no']],
  ['What would feel different tomorrow?',['I made a choice','I said what I meant','I met people','I acted','I loosened control','I protected a boundary']],
  ['Would you rather observe a story or try an action yourself?',['Observe first','Try an action']],
  ['When can you realistically come?',['Tonight','Tomorrow 10:00','Tomorrow 12:00','Either']]
 ]:[
  ['What do you need most from today?',['A live experience','People','A new perspective','A difficult conversation','A boundary','A push to act']],
  ['How much energy do you have?',['Low','Medium','High']],
  ['How social do you want to be?',['Mostly observe','Small contact','Actively join']],
  ['Is there one situation you want to change?',['Yes','Not really','I am not sure']],
  ['When can you come?',['Tonight','Tomorrow 10:00','Tomorrow 12:00','Either']]
 ];
 let step=0,answers=[];
 const title=q('[data-question]',root),options=q('[data-options]',root),result=q('[data-result]',root),progress=q('[data-progress]',root);
 function chooseTheme(){
  const joined=answers.join(' ').toLowerCase();
  if(/control/.test(joined))return 'control';
  if(/convenient|mask/.test(joined))return 'mask';
  if(/postpon|act|movement|push/.test(joined))return 'dream';
  if(/conversation|said what/.test(joined))return 'talk';
  if(/people|alone|connection/.test(joined))return 'people';
  if(/boundary|saying yes/.test(joined))return 'no';
  return 'turn';
 }
 function render(){
  if(step>=questions.length){
   const key=chooseTheme(),t=themes[key],last=answers[answers.length-1]||'Either';
   const active=answers.some(a=>/try an action|actively join|high/i.test(a));
   const session=last==='Tonight'||(!/Tomorrow/.test(last)&&!active)?'Interactive show today at 19:00':(last.includes('12:00')?'Practice session tomorrow at 12:00':'Practice session tomorrow at 10:00');
   title.textContent='Your current theme: '+t.name;options.innerHTML='';progress.textContent='Result';result.hidden=false;
   const msg='Hello Mikhail! I completed the English website quiz. Theme: '+t.name+'. Suggested format: '+session+'. Answers: '+answers.map((a,i)=>(i+1)+') '+a).join('; ')+'. Could you confirm the current availability?';
   result.innerHTML='<div class="card"><h3>'+t.name+'</h3><p>'+t.desc+'</p><p><strong>'+session+'</strong></p><a class="btn" href="'+wa(msg)+'" target="_blank" rel="noopener noreferrer">Send my result to Mikhail →</a></div>';
   track('en_quiz_complete',{quiz_type:type,theme:key,session});
   return;
  }
  progress.textContent='Question '+(step+1)+' of '+questions.length;title.textContent=questions[step][0];result.hidden=true;options.innerHTML='';
  questions[step][1].forEach(v=>{const b=document.createElement('button');b.type='button';b.className='option';b.textContent=v;b.onclick=()=>{if(step===0)track('en_quiz_start',{quiz_type:type});answers.push(v);step++;render()};options.appendChild(b)});
 }
 render();
}
qa('[data-en-quiz]').forEach(root=>startQuiz(root,root.dataset.enQuiz));
})();