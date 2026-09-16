(()=>{
const WA='995598881368';
const themes={
 control:{title:'Контроль и доверие',tag:'Отпустить контроль',desc:'Для вечера, когда вы устали всё держать на себе. История о том, что происходит, если рискнуть не контролировать каждый шаг и проверить, кому и чему можно доверять.'},
 mask:{title:'Сними маску',tag:'Быть собой рядом с людьми',desc:'Для тех, кто слишком хорошо умеет быть удобным, сильным или правильным. Спектакль исследует роли, которые мы носим, и момент, когда можно попробовать выйти из них.'},
 dream:{title:'Мечта, которая оживает',tag:'Перейти от желания к действию',desc:'Для состояния «я давно хочу, но всё не начинается». Здесь мечта получает сцену, препятствие — роль, а первый реальный шаг можно попробовать прямо внутри истории.'},
 talk:{title:'Разговор, которого я избегаю',tag:'Сказать то, что давно не сказано',desc:'Для трудного разговора, конфликта или невысказанных слов. Можно увидеть разные версии одной сцены и проверить, что меняется, если говорить и действовать иначе.'},
 people:{title:'Свои люди',tag:'Контакт и близость',desc:'Для вечера, когда особенно хочется живого человеческого контакта. Спектакль о знакомстве, одиночестве, близости и о том, как из случайных людей появляется ощущение «я здесь свой».'},
 boundary:{title:'Право сказать «нет»',tag:'Границы без чувства вины',desc:'Для тех моментов, когда согласиться легче, чем отказать. История о границах, давлении, вине и возможности выбирать себя, не превращая другого человека во врага.'},
 choice:{title:'Поворот сюжета',tag:'Решение и новый ход',desc:'Для ситуации, где вы застряли между вариантами. Спектакль позволяет проиграть несколько продолжений одной истории и почувствовать, какой следующий ход действительно ваш.'}
};
window.THEATER_THEMES=themes;
const questions=[
 {q:'Что сильнее всего занимает вас сегодня?',o:[['Я всё контролирую и устал(а) от этого',{control:6,choice:1}],['Я слишком часто играю роль, вместо того чтобы быть собой',{mask:6,people:1}],['Есть мечта или идея, которую я всё откладываю',{dream:6,choice:2}],['Есть разговор или конфликт, который не выходит из головы',{talk:6,boundary:2}],['Не хватает близости, компании, ощущения «свои»',{people:6,mask:1}],['Мне трудно отказать, защитить своё или попросить о нужном',{boundary:6,talk:2}],['Нужно принять решение, но я хожу по кругу',{choice:6,control:2}]]},
 {q:'Какое чувство ближе прямо сейчас?',o:[['Напряжение: если отпущу — всё развалится',{control:5}],['Усталость от необходимости соответствовать',{mask:5}],['Предвкушение: хочется наконец начать',{dream:5}],['Злость или много невысказанного',{talk:4,boundary:3}],['Одиночество или нехватка живого контакта',{people:5}],['Вина, когда ставлю себя на первое место',{boundary:5}],['Неопределённость — не понимаю, куда идти дальше',{choice:5}]]},
 {q:'Что хотелось бы унести с собой после спектакля?',o:[['Ощущение, что не всё нужно держать в руках',{control:5}],['Разрешение быть менее правильным(ой) и более живым(ой)',{mask:5}],['Первый шаг к тому, чего давно хочу',{dream:5}],['Другой способ провести сложный разговор',{talk:5}],['Ощущение контакта и включённости в жизнь',{people:5}],['Способ сказать «нет» и не разрушиться от вины',{boundary:5}],['Ясность: какой вариант попробовать первым',{choice:5}]]},
 {q:'Как вы хотите участвовать сегодня?',o:[['Сначала смотреть, включусь если захочу',{control:1,mask:1,people:2}],['Хочу активно пробовать разные действия',{dream:2,talk:2,choice:2}],['Хочу взаимодействовать с людьми',{people:4,mask:2}],['Хочу безопасно потренировать трудную сцену',{talk:4,boundary:4}],['Пусть история неожиданно поведёт меня сама',{control:3,choice:2}]]},
 {q:'Сколько у вас сейчас энергии на перемены?',o:[['Мало — нужен мягкий вход',{control:2,people:2,mask:2}],['Средне — могу включиться, если зацепит',{choice:2,talk:1,dream:1}],['Много — хочу действовать прямо сегодня',{dream:4,talk:2,boundary:2,choice:2}]]},
 {q:'Какая фраза больше похожа на вашу?',o:[['«Можно хоть раз не тащить всё самому?»',{control:7}],['«А если я перестану быть тем, кем меня привыкли видеть?»',{mask:7}],['«Хватит мечтать. Хочу, чтобы это началось.»',{dream:7}],['«Я знаю, что должен(на) сказать. Но не говорю.»',{talk:7}],['«Хочу снова чувствовать людей рядом.»',{people:7}],['«Я не хочу, но почему-то снова соглашаюсь.»',{boundary:7}],['«А что, если попробовать совсем другой ход?»',{choice:7}]]}
];
const consent=()=>{try{return localStorage.getItem('analyticsConsent')==='yes'}catch{return false}};
const track=(name,p={})=>{try{if(consent()&&typeof gtag==='function')gtag('event',name,{page_path:location.pathname,page_title:document.title,...p})}catch{}};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function tbilisiParts(){return Object.fromEntries(new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Tbilisi',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',hour12:false}).formatToParts(new Date()).filter(x=>x.type!=='literal').map(x=>[x.type,x.value]))}
function nearestDate(){const p=tbilisiParts(),d=new Date(Date.UTC(+p.year,+p.month-1,+p.day));if(+p.hour>=19)d.setUTCDate(d.getUTCDate()+1);return d}
function dateText(d){return new Intl.DateTimeFormat('ru-RU',{day:'numeric',month:'long',timeZone:'UTC'}).format(d)}
function initQuiz(){
 const root=document.querySelector('#today-picker');if(!root)return;
 const parent=root.closest('section');const head=parent?.querySelector('.section-head');if(head)head.innerHTML='<div class="eyebrow">Какой спектакль нужен именно вам сегодня?</div><h2>Шесть вопросов — одна персональная тема вечера</h2><p>Отвечайте не «как правильно», а как есть сегодня. Алгоритм сопоставит ответы с темами спектаклей и предложит ту, которая сильнее всего совпадает с вашим запросом.</p>';
 root.innerHTML='<small data-thematic-step>Шаг 1 из 6</small><h3 data-thematic-question></h3><div class="options" data-thematic-options></div><div data-thematic-result hidden></div>';
 const stepEl=root.querySelector('[data-thematic-step]'),qEl=root.querySelector('[data-thematic-question]'),box=root.querySelector('[data-thematic-options]'),result=root.querySelector('[data-thematic-result]');
 let step=0,answers=[],scores=Object.fromEntries(Object.keys(themes).map(k=>[k,0])),started=false;
 function render(){
  if(step>=questions.length){const key=Object.entries(scores).sort((a,b)=>b[1]-a[1])[0][0],t=themes[key],dt=nearestDate();try{sessionStorage.setItem('recommended_theme',key)}catch{}
   track('thematic_quiz_complete',{theme:key,theme_title:t.title,theme_score:scores[key]});stepEl.textContent='Ваш спектакль найден';qEl.textContent=`Сегодня вам нужен спектакль «${t.title}»`;box.innerHTML='';result.hidden=false;
   const items=answers.map((a,i)=>`<li style="margin:7px 0"><strong>${i+1}.</strong> ${esc(a)}</li>`).join('');
   const msg=`Здравствуйте! Я прошёл(ла) анкету на сайте. Мне рекомендован спектакль «${t.title}» ${dateText(dt)} в 19:00. Мои ответы: ${answers.map((a,i)=>`${i+1}) ${a}`).join('; ')}. Подтвердите, пожалуйста, что можно прийти.`;
   const wa=`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
   result.innerHTML=`<div class="quiz-result"><div class="eyebrow">Персональная рекомендация</div><h3>«${esc(t.title)}»</h3><div class="meta">${esc(t.tag)}</div><p style="margin-top:12px">${esc(t.desc)}</p><div class="notice" style="margin:18px 0"><strong>${esc(dateText(dt))} · 19:00 · 30 ₾ · Абано 13/15</strong><br>Перед визитом подтвердите место и актуальные детали.</div><div class="card" style="margin:18px 0"><div class="eyebrow">Ваша карточка</div><h3>${esc(t.title)}</h3><p>Ваши ответы:</p><ol style="padding-left:22px">${items}</ol><p style="opacity:.75">Можно сделать скриншот карточки или отправить её Михаилу кнопкой ниже.</p></div><div class="actions"><a class="btn" data-thematic-wa href="${wa}" target="_blank" rel="noopener">Отправить результаты Михаилу →</a><a class="btn ghost" href="/raspisanie-tbilisi/?theme=${encodeURIComponent(key)}">Открыть этот спектакль в расписании →</a></div><button class="option" data-restart type="button" style="margin-top:18px">Пройти ещё раз</button></div>`;
   result.querySelector('[data-thematic-wa]').addEventListener('click',()=>{track('thematic_quiz_whatsapp',{theme:key});track('generate_lead',{lead_source:'thematic_quiz',theme:key});track('qualify_lead',{qualification_method:'thematic_quiz_complete',theme:key})});
   result.querySelector('[data-restart]').addEventListener('click',()=>{step=0;answers=[];scores=Object.fromEntries(Object.keys(themes).map(k=>[k,0]));result.hidden=true;track('thematic_quiz_restart');render()});return;
  }
  result.hidden=true;stepEl.textContent=`Шаг ${step+1} из ${questions.length}`;qEl.textContent=questions[step].q;box.innerHTML='';questions[step].o.forEach(([label,w])=>{const b=document.createElement('button');b.className='option';b.type='button';b.textContent=label;b.onclick=()=>{if(!started){started=true;track('thematic_quiz_start')}Object.entries(w).forEach(([k,v])=>scores[k]+=v);answers[step]=label;track('thematic_quiz_step',{step:step+1,answer:label});step++;render()};box.appendChild(b)});
 }
 track('thematic_quiz_view');render();
}
function initSchedule(){
 const list=document.querySelector('[data-schedule-list]');if(!list)return;
 const section=list.closest('section'),head=section?.querySelector('.section-head');if(head)head.innerHTML='<div class="eyebrow">Тематическое расписание</div><h2>Сначала выберите день, потом — спектакль для себя</h2><p>Каждый день в 19:00 доступны разные тематические линии. Выберите дату и тему или пройдите анкету — она подсветит наиболее подходящий спектакль.</p>';
 const query=new URLSearchParams(location.search).get('theme');let rec=query;try{rec=rec||sessionStorage.getItem('recommended_theme')}catch{}
 const start=nearestDate(),fmt=new Intl.DateTimeFormat('ru-RU',{weekday:'short',day:'numeric',month:'short',timeZone:'UTC'});let selected=new Date(start);
 const controls=document.createElement('div');controls.className='actions';controls.style.marginBottom='24px';
 const grid=document.createElement('div');grid.className='grid3';
 list.replaceWith(controls,grid);
 const renderThemes=()=>{grid.innerHTML='';Object.entries(themes).forEach(([key,t])=>{const msg=`Здравствуйте! Хочу прийти на спектакль «${t.title}» ${dateText(selected)} в 19:00. Подтвердите, пожалуйста, место, стоимость 30 ₾ и адрес Абано 13/15.`;const a=document.createElement('article');a.className='card';if(key===rec){a.style.outline='2px solid currentColor';a.style.outlineOffset='3px'}a.innerHTML=`<div class="meta">${key===rec?'Ваша рекомендация · ':''}${esc(t.tag)}</div><h3>«${esc(t.title)}»</h3><p>${esc(t.desc)}</p><p><strong>${esc(dateText(selected))} · 19:00</strong><br>30 ₾ · Абано 13/15</p><div class="actions"><a class="btn" href="https://wa.me/${WA}?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener" data-theme-book="${key}">Выбрать этот спектакль →</a></div>`;grid.appendChild(a)});grid.querySelectorAll('[data-theme-book]').forEach(a=>a.addEventListener('click',()=>{track('thematic_schedule_click',{theme:a.dataset.themeBook,schedule_date:selected.toISOString().slice(0,10)});track('generate_lead',{lead_source:'thematic_schedule',theme:a.dataset.themeBook})}))};
 for(let i=0;i<7;i++){const d=new Date(start);d.setUTCDate(d.getUTCDate()+i);const b=document.createElement('button');b.type='button';b.className=i===0?'btn':'btn ghost';b.textContent=i===0?`Ближайший · ${fmt.format(d)}`:fmt.format(d);b.onclick=()=>{selected=d;controls.querySelectorAll('button').forEach(x=>x.className='btn ghost');b.className='btn';renderThemes();track('thematic_schedule_date',{schedule_date:d.toISOString().slice(0,10)})};controls.appendChild(b)}
 renderThemes();track('thematic_schedule_view',{recommended_theme:rec||''});
}
function init(){if(location.pathname.startsWith('/chem-zanyatsya-tbilisi'))initQuiz();if(location.pathname.startsWith('/raspisanie-tbilisi'))initSchedule()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
