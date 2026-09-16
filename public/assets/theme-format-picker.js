(()=>{
const WA='995598881368';
const THEMES={
 control:{title:'Контроль и доверие',tag:'Отпустить контроль',desc:'Про то, что происходит, когда вы устали всё держать на себе и хотите проверить, где можно ослабить хватку, довериться и не разрушить всё вокруг.'},
 mask:{title:'Сними маску',tag:'Быть собой рядом с людьми',desc:'Про привычные роли — сильного, удобного, правильного — и возможность попробовать быть живее и честнее рядом с другими.'},
 dream:{title:'Мечта, которая оживает',tag:'Перейти от желания к действию',desc:'Для идеи или мечты, которая слишком долго существует только в голове. Тема помогает превратить желание в первый конкретный ход.'},
 talk:{title:'Разговор, которого я избегаю',tag:'Сказать то, что давно не сказано',desc:'Для сложного разговора, конфликта или невысказанных слов. Можно исследовать разные способы войти в эту сцену и повести её иначе.'},
 people:{title:'Свои люди',tag:'Контакт и близость',desc:'Про одиночество, знакомство, близость и ощущение принадлежности — как из отдельных людей возникает живой контакт.'},
 boundary:{title:'Право сказать «нет»',tag:'Границы без чувства вины',desc:'Для ситуаций, где трудно отказать, попросить о нужном или защитить своё. Тема про границы без войны с другим человеком.'},
 choice:{title:'Поворот сюжета',tag:'Решение и новый ход',desc:'Для состояния, когда вы ходите по кругу между вариантами. Помогает увидеть несколько продолжений истории и попробовать новый ход.'}
};
const QUESTIONS=[
 {q:'Что сильнее всего занимает вас прямо сейчас?',o:[
  ['Я всё контролирую и устал(а) от этого',{theme:{control:7,choice:1},format:{show:2,class:2}}],
  ['Я слишком часто играю роль, вместо того чтобы быть собой',{theme:{mask:7,people:1},format:{show:2,class:3}}],
  ['Есть мечта или идея, которую я всё откладываю',{theme:{dream:7,choice:2},format:{show:1,class:4}}],
  ['Есть разговор или конфликт, который не выходит из головы',{theme:{talk:7,boundary:2},format:{show:1,class:5}}],
  ['Не хватает близости, компании, ощущения «свои»',{theme:{people:7,mask:1},format:{show:4,class:2}}],
  ['Мне трудно отказать, защитить своё или попросить о нужном',{theme:{boundary:7,talk:2},format:{show:1,class:5}}],
  ['Нужно принять решение, но я хожу по кругу',{theme:{choice:7,control:2},format:{show:2,class:4}}]
 ]},
 {q:'Что вам сейчас нужнее — увидеть или попробовать?',o:[
  ['Хочу увидеть свою тему со стороны и почувствовать, что откликается',{theme:{},format:{show:7,class:1}}],
  ['Хочу сам(а) пробовать действия и новые реакции',{theme:{},format:{class:8,show:0}}],
  ['Сначала посмотреть, а включиться только если захочется',{theme:{people:1,mask:1,control:1},format:{show:6,class:2}}],
  ['Хочу разобрать конкретную сцену почти как репетицию',{theme:{talk:2,boundary:2,choice:1},format:{class:9,show:0}}]
 ]},
 {q:'Какое чувство ближе прямо сейчас?',o:[
  ['Напряжение: если отпущу — всё развалится',{theme:{control:6},format:{show:2,class:3}}],
  ['Усталость от необходимости соответствовать',{theme:{mask:6},format:{show:2,class:3}}],
  ['Предвкушение: хочется наконец начать',{theme:{dream:6},format:{class:4,show:1}}],
  ['Злость или много невысказанного',{theme:{talk:5,boundary:3},format:{class:5,show:1}}],
  ['Одиночество или нехватка живого контакта',{theme:{people:6},format:{show:5,class:2}}],
  ['Вина, когда ставлю себя на первое место',{theme:{boundary:6},format:{class:5,show:1}}],
  ['Неопределённость — не понимаю, куда идти дальше',{theme:{choice:6},format:{class:3,show:2}}]
 ]},
 {q:'Что хотелось бы получить после встречи?',o:[
  ['Сильное узнавание: «это прямо про меня»',{theme:{mask:1,people:1,control:1},format:{show:6,class:1}}],
  ['Один новый способ действовать в сложной ситуации',{theme:{talk:1,boundary:1,choice:1},format:{class:7,show:1}}],
  ['Первый реальный шаг к тому, что давно откладываю',{theme:{dream:5,choice:2},format:{class:7,show:0}}],
  ['Чуть больше контакта, свободы и живости',{theme:{people:3,mask:3},format:{show:3,class:3}}],
  ['Почувствовать, что я могу не контролировать всё',{theme:{control:5},format:{show:3,class:3}}]
 ]},
 {q:'Сколько у вас сейчас энергии на участие?',o:[
  ['Мало. Хочу мягкий вход без необходимости что-то делать',{theme:{control:1,people:1,mask:1},format:{show:7,class:0},slot:'12'}],
  ['Средне. Могу включиться, если почувствую интерес',{theme:{},format:{show:3,class:3},slot:'12'}],
  ['Много. Хочу работать с темой активно',{theme:{dream:1,talk:1,boundary:1,choice:1},format:{class:7,show:1},slot:'10'}]
 ]},
 {q:'Когда вы реально можете прийти?',o:[
  ['Сегодня вечером в 19:00',{theme:{},format:{show:20,class:0},availability:'show'}],
  ['Завтра в 10:00',{theme:{},format:{class:20,show:0},availability:'10'}],
  ['Завтра в 12:00',{theme:{},format:{class:20,show:0},availability:'12'}],
  ['Могу и сегодня вечером, и завтра утром — выберите за меня',{theme:{},format:{show:1,class:1},availability:'any'}],
  ['Завтра могу и в 10:00, и в 12:00',{theme:{},format:{class:12,show:0},availability:'class_any'}]
 ]}
];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const consent=()=>{try{return localStorage.getItem('analyticsConsent')==='yes'}catch{return false}};
const track=(n,p={})=>{try{if(consent()&&typeof gtag==='function')gtag('event',n,{page_path:location.pathname,page_title:document.title,...p})}catch{}};
function localDate(offset=0){const parts=Object.fromEntries(new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Tbilisi',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date()).filter(x=>x.type!=='literal').map(x=>[x.type,x.value]));const d=new Date(Date.UTC(+parts.year,+parts.month-1,+parts.day));d.setUTCDate(d.getUTCDate()+offset);return d}
const dateText=d=>new Intl.DateTimeFormat('ru-RU',{day:'numeric',month:'long',timeZone:'UTC'}).format(d);
function pick(themeScores,formatScores,availability,slotHint){
 const theme=Object.entries(themeScores).sort((a,b)=>b[1]-a[1])[0][0];
 let format=formatScores.class>formatScores.show?'class':'show';
 if(availability==='show')format='show';
 if(['10','12','class_any'].includes(availability))format='class';
 let slot='19:00';
 if(format==='class'){
  if(availability==='10'||availability==='12')slot=availability+':00';
  else if(availability==='class_any'||availability==='any')slot=slotHint==='12'?'12:00':'10:00';
  else slot=slotHint==='12'?'12:00':'10:00';
 }
 return {theme,format,slot};
}
function initQuiz(){
 const root=document.querySelector('#today-picker');if(!root)return;
 document.title='Что вам сейчас нужнее — спектакль или занятие в Тбилиси';
 const hero=document.querySelector('.hero');if(hero){const h=hero.querySelector('h1'),lead=hero.querySelector('.lead'),proof=hero.querySelector('.proofbar');if(h)h.innerHTML='Что вам сейчас нужнее: <em>спектакль или занятие?</em>';if(lead)lead.textContent='Шесть вопросов определят две вещи: какая жизненная тема для вас актуальна сейчас и лучше прожить её сегодня вечером через спектакль или завтра утром через практическое занятие.';if(proof)proof.innerHTML='<div><strong>Сегодня 19:00</strong><span>спектакль</span></div><div><strong>Завтра 10:00 / 12:00</strong><span>занятия</span></div><div><strong>7 тем</strong><span>персональный подбор</span></div>'}
 const sec=root.closest('section'),head=sec?.querySelector('.section-head');if(head)head.innerHTML='<div class="eyebrow">Персональный подбор</div><h2>Сначала выясним тему. Потом — какой способ работы с ней вам сейчас подходит.</h2><p>Квиз не ставит диагноз. Он сопоставляет ваш запрос, желаемую глубину участия, энергию и доступное время с темами и форматами.</p>';
 root.innerHTML='<small data-ft-step>Шаг 1 из 6</small><h3 data-ft-question></h3><div class="options" data-ft-options></div><div data-ft-result hidden></div>';
 const stepEl=root.querySelector('[data-ft-step]'),qEl=root.querySelector('[data-ft-question]'),box=root.querySelector('[data-ft-options]'),result=root.querySelector('[data-ft-result]');
 let step=0,answers=[],themeScores=Object.fromEntries(Object.keys(THEMES).map(k=>[k,0])),formatScores={show:0,class:0},availability='any',slotHint='10',started=false;
 function render(){
  if(step>=QUESTIONS.length){const rec=pick(themeScores,formatScores,availability,slotHint),t=THEMES[rec.theme],date=rec.format==='show'?localDate(0):localDate(1),kind=rec.format==='show'?'спектакль':'занятие',when=rec.format==='show'?`сегодня, ${dateText(date)} · ${rec.slot}`:`завтра, ${dateText(date)} · ${rec.slot}`;try{sessionStorage.setItem('recommended_theme',rec.theme);sessionStorage.setItem('recommended_format',rec.format);sessionStorage.setItem('recommended_slot',rec.slot)}catch{}
   track('format_theme_quiz_complete',{theme:rec.theme,theme_title:t.title,recommended_format:rec.format,recommended_slot:rec.slot});stepEl.textContent='Рекомендация готова';qEl.textContent=`Вам сейчас подходит ${kind} «${t.title}»`;box.innerHTML='';result.hidden=false;
   const items=answers.map((a,i)=>`<li style="margin:7px 0"><strong>${i+1}.</strong> ${esc(a)}</li>`).join('');
   const msg=`Здравствуйте! Я прошёл(ла) квиз на сайте. Мне рекомендовано: ${kind} «${t.title}», ${when}. Мои ответы: ${answers.map((a,i)=>`${i+1}) ${a}`).join('; ')}. Подтвердите, пожалуйста, что можно прийти.`;
   const href=`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
   result.innerHTML=`<div class="quiz-result"><div class="eyebrow">Ваш вариант сейчас</div><h3>«${esc(t.title)}»</h3><div class="meta">${rec.format==='show'?'Спектакль':'Практическое занятие'} · ${esc(t.tag)}</div><p style="margin-top:12px">${esc(t.desc)}</p><div class="notice" style="margin:18px 0"><strong>${esc(when)}</strong><br>${rec.format==='show'?'30 ₾ · Абано 13/15':'Условия участия подтвердите перед приходом'}</div><div class="card" style="margin:18px 0"><div class="eyebrow">Ваша карточка</div><h3>${rec.format==='show'?'Спектакль':'Занятие'} «${esc(t.title)}»</h3><p><strong>${esc(when)}</strong></p><ol style="padding-left:22px">${items}</ol><p style="opacity:.75">Можно сделать скриншот карточки или отправить все результаты Михаилу одной кнопкой.</p></div><div class="actions"><a class="btn" data-ft-wa href="${href}" target="_blank" rel="noopener">Отправить результаты Михаилу →</a><a class="btn ghost" href="/raspisanie-tbilisi/?theme=${rec.theme}&format=${rec.format}&slot=${encodeURIComponent(rec.slot)}">Открыть мой вариант в расписании →</a></div><button class="option" data-ft-restart type="button" style="margin-top:18px">Пройти ещё раз</button></div>`;
   result.querySelector('[data-ft-wa]').onclick=()=>{track('format_theme_quiz_whatsapp',{theme:rec.theme,recommended_format:rec.format,recommended_slot:rec.slot});track('generate_lead',{lead_source:'format_theme_quiz',theme:rec.theme,recommended_format:rec.format,recommended_slot:rec.slot});track('qualify_lead',{qualification_method:'format_theme_quiz_complete',theme:rec.theme,recommended_format:rec.format,recommended_slot:rec.slot})};
   result.querySelector('[data-ft-restart]').onclick=()=>{step=0;answers=[];themeScores=Object.fromEntries(Object.keys(THEMES).map(k=>[k,0]));formatScores={show:0,class:0};availability='any';slotHint='10';result.hidden=true;track('format_theme_quiz_restart');render()};return;
  }
  result.hidden=true;stepEl.textContent=`Шаг ${step+1} из ${QUESTIONS.length}`;qEl.textContent=QUESTIONS[step].q;box.innerHTML='';QUESTIONS[step].o.forEach(([label,w])=>{const b=document.createElement('button');b.className='option';b.type='button';b.textContent=label;b.onclick=()=>{if(!started){started=true;track('format_theme_quiz_start')}Object.entries(w.theme||{}).forEach(([k,v])=>themeScores[k]+=v);Object.entries(w.format||{}).forEach(([k,v])=>formatScores[k]+=v);if(w.availability)availability=w.availability;if(w.slot)slotHint=w.slot;answers[step]=label;track('format_theme_quiz_step',{step:step+1,answer:label});step++;render()};box.appendChild(b)});
 }
 track('format_theme_quiz_view');render();
}
function initSchedule(){
 const old=document.querySelector('[data-schedule-list]');if(!old)return;
 const sec=old.closest('section'),head=sec?.querySelector('.section-head');if(head)head.innerHTML='<div class="eyebrow">Ближайшие форматы</div><h2>Сегодня вечером — спектакль. Завтра утром — занятия.</h2><p>Тема может быть персональной. Если вы прошли квиз, ваш вариант будет подсвечен автоматически.</p>';
 let theme=new URLSearchParams(location.search).get('theme')||'',format=new URLSearchParams(location.search).get('format')||'',slot=new URLSearchParams(location.search).get('slot')||'';try{theme=theme||sessionStorage.getItem('recommended_theme')||'';format=format||sessionStorage.getItem('recommended_format')||'';slot=slot||sessionStorage.getItem('recommended_slot')||''}catch{}
 const today=localDate(0),tomorrow=localDate(1);const wrap=document.createElement('div');old.replaceWith(wrap);
 const blocks=[{format:'show',slot:'19:00',date:today,label:`Сегодня, ${dateText(today)} · 19:00`,name:'Спектакль'},{format:'class',slot:'10:00',date:tomorrow,label:`Завтра, ${dateText(tomorrow)} · 10:00`,name:'Занятие'},{format:'class',slot:'12:00',date:tomorrow,label:`Завтра, ${dateText(tomorrow)} · 12:00`,name:'Занятие'}];
 blocks.forEach(block=>{const section=document.createElement('div');section.style.marginBottom='34px';section.innerHTML=`<div class="section-head"><div class="eyebrow">${block.name}</div><h2 style="font-size:36px">${esc(block.label)}</h2></div><div class="grid3"></div>`;const grid=section.querySelector('.grid3');Object.entries(THEMES).forEach(([key,t])=>{const recommended=key===theme&&block.format===format&&(!slot||block.slot===slot);const msg=`Здравствуйте! Хочу прийти: ${block.name.toLowerCase()} «${t.title}», ${block.label}. Подтвердите, пожалуйста, участие.`;const a=document.createElement('article');a.className='card';if(recommended){a.style.outline='2px solid currentColor';a.style.outlineOffset='3px'}a.innerHTML=`<div class="meta">${recommended?'Ваша рекомендация · ':''}${esc(t.tag)}</div><h3>«${esc(t.title)}»</h3><p>${esc(t.desc)}</p><div class="actions"><a class="btn" data-ft-book href="https://wa.me/${WA}?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener">${recommended?'Это мой вариант →':'Выбрать →'}</a></div>`;a.querySelector('[data-ft-book]').onclick=()=>{track('format_theme_schedule_click',{theme:key,format:block.format,slot:block.slot});track('generate_lead',{lead_source:'format_theme_schedule',theme:key,recommended_format:block.format,recommended_slot:block.slot})};grid.appendChild(a)});wrap.appendChild(section)});
 track('format_theme_schedule_view',{recommended_theme:theme,recommended_format:format,recommended_slot:slot});
}
function init(){if(location.pathname.startsWith('/chem-zanyatsya-tbilisi'))initQuiz();if(location.pathname.startsWith('/raspisanie-tbilisi'))initSchedule()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();