const WA='995598881368';
const GA='G-TYN56TWBXX';
const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>[...r.querySelectorAll(s)];
function wa(text){return `https://wa.me/${WA}?text=${encodeURIComponent(text)}`}
$$('[data-wa]').forEach(a=>a.href=wa(a.dataset.wa));
const menu=$('.menu'),nav=$('.navlinks');
if(menu&&nav){menu.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',nav.classList.contains('open'))})}
function loadAnalytics(){if(window.__gaLoaded)return;window.__gaLoaded=true;const s=document.createElement('script');s.async=true;s.src=`https://www.googletagmanager.com/gtag/js?id=${GA}`;document.head.appendChild(s);window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config',GA,{anonymize_ip:true})}
const cookie=$('#cookie-consent');
const stored=localStorage.getItem('analyticsConsent');
if(stored==='yes')loadAnalytics();
if(stored&&cookie)cookie.hidden=true;
$('#analytics-yes')?.addEventListener('click',()=>{localStorage.setItem('analyticsConsent','yes');loadAnalytics();cookie.hidden=true});
$('#analytics-no')?.addEventListener('click',()=>{localStorage.setItem('analyticsConsent','no');cookie.hidden=true});
const quiz=$('#scenario-quiz');
if(quiz){
const qs=[
{q:'В какой ситуации вы чаще всего перестаёте быть собой?',o:['В отношениях','В работе или деньгах','Когда нужно проявиться публично','В конфликте','После переезда или в одиночестве','Пока трудно назвать']},
{q:'Что вы обычно делаете в этот момент?',o:['Замираю','Стараюсь всем понравиться','Начинаю всё контролировать','Атакую или спорю','Ухожу и закрываюсь','Делаю вид, что всё нормально']},
{q:'Что вы хотели бы попробовать вместо привычной реакции?',o:['Говорить прямо','Спокойно держать границы','Действовать смелее','Лучше слышать другого','Проявляться свободнее','Хочу сначала понять свой вариант']},
{q:'Что вам сейчас важнее?',o:['Разобрать одну конкретную сцену','Системно тренировать новый способ проявляться']}
];
let step=0,answers=[];
const label=$('[data-step]',quiz),title=$('[data-question]',quiz),box=$('[data-options]',quiz),result=$('[data-result]',quiz);
function render(){
if(step>=qs.length){const individual=answers[3]?.includes('одну конкретную');const route=individual?'индивидуальная работа над конкретной жизненной сценой':'курс «Проявись» для системной тренировки самовыражения';title.textContent='Похоже, вам стоит начать отсюда';box.innerHTML='';result.hidden=false;const message='Здравствуйте! Я прошёл(ла) «Сейчас мы выясним». Мои ответы: '+answers.map((a,i)=>`${i+1}) ${a}`).join('; ')+'. Хочу понять, какой формат мне подойдёт.';result.innerHTML=`<div class="quiz-result"><h4>${route}</h4><p>Это не диагноз и не ярлык. Это рабочая гипотеза: какой формат сейчас даст вам больше практики и ясности.</p><a class="btn" target="_blank" rel="noopener" href="${wa(message)}">Отправить мои ответы Михаилу →</a></div>`;label.textContent='Маршрут готов';return}
label.textContent=`Шаг ${step+1} из ${qs.length}`;title.textContent=qs[step].q;result.hidden=true;box.innerHTML='';qs[step].o.forEach(v=>{const b=document.createElement('button');b.className='option';b.type='button';b.textContent=v;b.onclick=()=>{answers[step]=v;step++;render()};box.appendChild(b)})}
render();
}
