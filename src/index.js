const TEXT_SCENOGRAPHY_DEMO = `<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>Вася грустно смотрел на воду — текстосценография</title>
<meta name="description" content="Пробная текстосценография: автоматическое атмосферное оформление короткого текста.">
<meta name="robots" content="noindex,nofollow">
<meta name="generator" content="World Server Text Scenography">
<meta name="theme-color" content="#071019">
<link rel="canonical" href="https://theater.mmmpaykin.workers.dev/text-scenography/">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<style>:root{--ink:#061019;--mist:#89a9bd;--pale:#d8e6ee;--line:rgba(219,237,247,.16)}
*{box-sizing:border-box}html,body{margin:0;min-height:100%;background:#061019;color:#eef6f9}body{font-family:Inter,system-ui,-apple-system,"Segoe UI",sans-serif}
.scene{position:relative;min-height:100svh;overflow:hidden;isolation:isolate;background:
linear-gradient(180deg,#07111a 0%,#0a1b27 42%,#102a38 62%,#06121a 100%)}
.water-canvas{position:absolute;inset:38% 0 0;width:100%;height:62%;z-index:-4}
.sky{position:absolute;inset:0 0 40%;z-index:-7;background:
radial-gradient(circle at 74% 16%,rgba(214,234,244,.13),transparent 5%),
radial-gradient(ellipse at 50% 110%,rgba(92,139,160,.17),transparent 42%),
linear-gradient(180deg,#050b11,#0b1822 58%,#122b37);filter:saturate(.85)}
.moon{position:absolute;right:18vw;top:12vh;width:42px;height:42px;border-radius:50%;z-index:-5;background:#cfdae0;box-shadow:0 0 22px rgba(213,233,242,.3),0 0 90px rgba(158,201,219,.14);opacity:.78}
.haze{position:absolute;left:-10%;right:-10%;top:35%;height:19%;z-index:-3;background:linear-gradient(180deg,transparent,rgba(159,193,207,.09),transparent);filter:blur(18px)}
.shore{position:absolute;left:-8vw;bottom:8vh;width:48vw;height:20vh;z-index:-1;background:#030709;clip-path:polygon(0 38%,30% 20%,68% 32%,100% 68%,100% 100%,0 100%);filter:blur(.2px)}
.figure{position:absolute;left:34vw;bottom:18.5vh;width:34px;height:104px;z-index:0;filter:drop-shadow(0 7px 8px rgba(0,0,0,.65));transform:rotate(2deg)}
.figure .head{position:absolute;left:9px;top:0;width:17px;height:18px;border-radius:48% 52% 45% 55%;background:#020506}
.figure .body{position:absolute;left:7px;top:16px;width:21px;height:56px;border-radius:12px 11px 8px 9px;background:linear-gradient(90deg,#020506,#071014);transform:skew(-2deg)}
.figure .leg{position:absolute;top:67px;width:8px;height:38px;background:#020506;border-radius:6px;transform-origin:top}
.figure .l1{left:9px;transform:rotate(5deg)}.figure .l2{left:20px;transform:rotate(-4deg)}
.reflection{position:absolute;z-index:-2;filter:blur(11px);opacity:.23;transform-origin:center top}
.reflection-one{right:15.7vw;top:43vh;width:84px;height:37vh;background:linear-gradient(180deg,rgba(221,238,244,.45),rgba(119,174,194,.04) 74%,transparent);clip-path:polygon(39% 0,60% 0,70% 18%,53% 31%,71% 45%,35% 58%,60% 73%,42% 100%,24% 72%,45% 58%,27% 42%,48% 28%)}
.reflection-two{left:33vw;bottom:0;width:55px;height:17vh;background:linear-gradient(180deg,rgba(6,16,20,.55),transparent);opacity:.35}
.grain{position:absolute;inset:0;pointer-events:none;z-index:8;opacity:.055;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.86' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.9'/%3E%3C/svg%3E");mix-blend-mode:screen}
.scene-top,.scene-bottom{position:absolute;left:clamp(18px,4vw,58px);right:clamp(18px,4vw,58px);display:flex;justify-content:space-between;align-items:center;z-index:10;color:rgba(226,239,246,.63);font-size:11px;letter-spacing:.13em;text-transform:uppercase}
.scene-top{top:max(22px,env(safe-area-inset-top))}.scene-bottom{bottom:max(22px,env(safe-area-inset-bottom));padding-top:14px;border-top:1px solid var(--line)}
.back{color:inherit;text-decoration:none;letter-spacing:.03em;text-transform:none;font-size:12px}.back:hover{color:#fff}.status{display:inline-flex;gap:8px;align-items:center}.status i{width:6px;height:6px;border-radius:50%;background:#a4c9d8;box-shadow:0 0 8px #9ac8da;animation:pulse 2.8s ease-in-out infinite}
.story{position:absolute;left:clamp(22px,7vw,108px);top:50%;z-index:4;transform:translateY(-50%);max-width:min(800px,76vw)}
.kicker{margin:0 0 20px;color:#a5becb;font-size:11px;font-weight:700;letter-spacing:.24em;text-transform:uppercase}
h1{margin:0;font-family:Georgia,"Times New Roman",serif;font-weight:400;font-size:clamp(50px,8vw,126px);line-height:.88;letter-spacing:-.052em;color:#edf4f6;text-shadow:0 3px 32px rgba(0,0,0,.25)}
.ellipsis{color:#8dacbb}.after{max-width:480px;margin:30px 0 0;color:rgba(223,235,241,.61);font-family:Georgia,"Times New Roman",serif;font-size:clamp(16px,1.5vw,21px);line-height:1.55;font-style:italic}
@keyframes pulse{0%,100%{opacity:.28;transform:scale(.72)}50%{opacity:1;transform:scale(1.15)}}
@media(max-width:720px){
 .scene-top{align-items:flex-start}.mode{max-width:45%;text-align:right;font-size:9px;line-height:1.4}
 .story{left:24px;right:24px;top:42%;max-width:none}
 h1{font-size:clamp(48px,15vw,76px);line-height:.91}
 .after{max-width:82%;margin-top:24px;font-size:16px}
 .moon{right:14vw;top:15vh;width:32px;height:32px}
 .figure{left:64vw;bottom:17vh;transform:scale(.82) rotate(2deg);transform-origin:bottom}
 .shore{width:82vw;left:-18vw;bottom:6vh;height:19vh}
 .reflection-one{right:7vw;top:42vh}
 .scene-bottom{font-size:8px;gap:12px}.scene-bottom>span:first-child{max-width:58%}
}
@media(prefers-reduced-motion:reduce){.status i{animation:none}}
</style>
<script>(()=>{'use strict';
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
})();</script>
</head>
<body>
<main class="scene" id="scene">
  <canvas class="water-canvas" id="water" aria-hidden="true"></canvas>
  <div class="sky" aria-hidden="true"></div>
  <div class="moon" aria-hidden="true"></div>
  <div class="haze" aria-hidden="true"></div>
  <div class="shore" aria-hidden="true"></div>
  <div class="figure" aria-hidden="true">
    <span class="head"></span><span class="body"></span><span class="leg l1"></span><span class="leg l2"></span>
  </div>
  <div class="reflection reflection-one" aria-hidden="true"></div>
  <div class="reflection reflection-two" aria-hidden="true"></div>
  <div class="grain" aria-hidden="true"></div>

  <header class="scene-top">
    <a class="back" href="/" aria-label="Вернуться на главную">← Михаил Пайкин</a>
    <span class="mode">TEXT SCENOGRAPHY · DEMO 001</span>
  </header>

  <section class="story">
    <p class="kicker">грусть · вода · тишина</p>
    <h1>Вася грустно<br>смотрел на воду<span class="ellipsis">…</span></h1>
    <p class="after">Вода ничего не отвечала. И именно поэтому казалось, что она понимает.</p>
  </section>

  <footer class="scene-bottom">
    <span>автоматическое визуальное оформление текста</span>
    <span class="status"><i></i> живой фон</span>
  </footer>
</main>
</body>
</html>`;

const HREFLANG = {
  '/': '/en/',
  '/afisha/': '/en/shows-tbilisi/',
  '/kurs/': '/en/course/',
  '/individual/': '/en/individual/',
  '/about/': '/en/about/',
  '/druzya-tbilisi/': '/en/friends-tbilisi/',
  '/tvorcheskie-znakomstva-tbilisi/': '/en/creative-meetups-tbilisi/',
  '/chem-zanyatsya-tbilisi/': '/en/what-to-do-tbilisi/',
  '/kak-ponyat-chego-ya-hochu/': '/en/what-do-i-want/',
  '/raspisanie-tbilisi/': '/en/schedule-tbilisi/',
  '/privacy/': '/en/privacy/'
};

const SEO = {
  '/': {
    prependTodayHtml: `<div class="wrap"><div class="facts" style="margin-bottom:28px"><div class="fact"><strong>19:00</strong><span>спектакли ежедневно</span></div><div class="fact"><strong>30 ₾</strong><span>стоимость в текущей программе</span></div><div class="fact"><strong>Абано 13/15</strong><span>Тбилиси · подтвердите перед визитом</span></div></div><div class="actions" style="margin-bottom:26px"><a class="btn ghost" href="/raspisanie-tbilisi/">Афиша и расписание →</a><a class="btn ghost" href="/chem-zanyatsya-tbilisi/">Куда пойти и чем заняться в Тбилиси →</a><a class="btn ghost" href="/kak-ponyat-chego-ya-hochu/">Как понять, чего я хочу? →</a></div></div>`
  },
  '/privacy/': {
    title: 'Политика конфиденциальности — театр Михаила Пайкина',
    appendHtml: `<section class="today" id="privacy-details"><div class="wrap"><div class="section-head"><div class="eyebrow">Как устроена приватность</div><h2>Что происходит с данными на этом сайте</h2><p>Мы используем только тот минимум данных, который нужен для работы сайта, безопасности и — если вы отдельно согласились — для понимания того, какие страницы помогают посетителям.</p></div><div class="grid3"><article class="card"><h3>Что измеряем после согласия</h3><p>Google Analytics может получать технические сведения о посещении: открытую страницу, тип устройства, источник перехода и действия вроде просмотра предложения или клика по кнопке. Это нужно, чтобы улучшать структуру сайта и не гадать, какие материалы действительно полезны.</p></article><article class="card"><h3>Что не делаем</h3><p>На сайте нет рекламного профилирования и скрытого включения аналитики до вашего выбора. Мы не просим здесь паспортные данные, медицинские сведения или другую чувствительную информацию. Сообщения, которые вы отправляете через WhatsApp, обрабатываются уже правилами самого WhatsApp.</p></article><article class="card"><h3>Как изменить выбор</h3><p>Решение об аналитике хранится локально в вашем браузере. Вы можете удалить данные сайта в настройках браузера и при следующем посещении выбрать заново. Если аналитика не разрешена, основные страницы, афиша, курс и контакты продолжают работать.</p></article></div><div class="notice" style="margin-top:22px">Внешние сервисы — WhatsApp, YouTube, Instagram и teatr.ge — имеют собственные политики конфиденциальности. Перед передачей им данных можно ознакомиться с их правилами отдельно.</div><div class="card" style="margin-top:22px"><h3>Вопросы о данных</h3><p>Если вам важно уточнить, как устроен сайт или аналитика, можно написать Михаилу через контактные ссылки на сайте до передачи любой дополнительной информации. Мы стараемся собирать меньше данных, а не больше: аналитика нужна для оценки полезности страниц и пользовательских переходов, а не для составления рекламных профилей посетителей.</p></div></div></section>`,
    jsonLd: { '@context': 'https://schema.org', '@graph': [
      { '@type': 'WebPage', '@id': 'https://theater.mmmpaykin.workers.dev/privacy/#page', url: 'https://theater.mmmpaykin.workers.dev/privacy/', name: 'Политика конфиденциальности — театр Михаила Пайкина', inLanguage: 'ru' },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://theater.mmmpaykin.workers.dev/' },
        { '@type': 'ListItem', position: 2, name: 'Конфиденциальность', item: 'https://theater.mmmpaykin.workers.dev/privacy/' }
      ] }
    ] }
  },
  '/individual/': {
    title: 'Индивидуальная театротерапия в Тбилиси — Михаил Пайкин',
    appendHtml: `<section><div class="wrap"><div class="section-head"><div class="eyebrow">После первого сообщения</div><h2>Понятный следующий шаг без обязательств</h2><p>Вы коротко описываете одну ситуацию. В ответ уточняются актуальный формат, возможность очной или онлайн-встречи и организационные условия. После этого вы решаете, подходит ли вам такой способ работы.</p></div><div class="grid3"><article class="card"><h3>1. Описываете сцену</h3><p>Достаточно нескольких предложений: что происходит сейчас и какой другой результат вы хотели бы попробовать.</p></article><article class="card"><h3>2. Уточняем формат</h3><p>Перед встречей подтверждаем способ участия и актуальные организационные детали — без выдуманных сроков и искусственной срочности.</p></article><article class="card"><h3>3. Принимаете решение</h3><p>Если формат подходит, договариваемся о встрече. Если нет — можно выбрать спектакль или курс и познакомиться с методом иначе.</p></article></div><div class="actions"><a class="btn ghost" href="/raspisanie-tbilisi/">Посмотреть актуальное расписание →</a></div></div></section>`
  },
  '/afisha/': {
    appendHtml: `<section><div class="wrap two"><div><div class="eyebrow">Перед первым визитом</div><h2 style="font-family:Georgia,serif;font-size:44px">Можно начать просто со зрительского места</h2><p>Интерактивность не означает обязательного выхода на сцену. Можно посмотреть спектакль со стороны, понять правила и атмосферу, а включаться в действие только если самому захочется.</p></div><div class="card"><h3>Что уточнить перед приходом</h3><p>Напишите, чтобы подтвердить актуальную тему спектакля, время, наличие мест и организационные детали именно на выбранный день.</p><a class="more" href="/raspisanie-tbilisi/">Расписание на 7 дней →</a></div></div></section>`
  },
  '/druzya-tbilisi/': {
    title: 'Найти друзей в Тбилиси — деятельная дружба и творчество',
    description: 'Ищете друзей в Тбилиси? Выберите музыку, театр, кино, танцы или свой проект и знакомьтесь через совместное дело. Анкета и связь с Михаилом.'
  },
  '/about/': {
    description: 'Биография Михаила Пайкина: режиссёр, бизнес-психолог и коуч. Театр, проекты, профессиональный путь и авторский подход к театротерапии.'
  },
  '/tvorcheskie-znakomstva-tbilisi/': {
    title: 'Творческие знакомства в Тбилиси — совместные проекты'
  },
  '/raspisanie-tbilisi/': {
    appendHtml: `<section class="today"><div class="wrap"><div class="section-head"><div class="eyebrow">Как пользоваться расписанием</div><h2>Выберите день, а формат — по задаче</h2><p>Если хочется просто выйти из дома, увидеть живой театр и самому решить, насколько активно участвовать, начните со спектакля. Если хочется больше практики голоса, контакта и проявленности в группе, посмотрите «Проявись». Если важна одна конкретная жизненная сцена, разговор или решение, лучше запросить индивидуальный слот.</p></div><div class="grid3"><article class="card"><h3>Спектакль</h3><p>Фиксированная часть текущей программы уже известна: ежедневно в 19:00, стоимость 30 ₾, адрес Абано 13/15. Меняться может тема конкретного вечера, поэтому её лучше подтвердить перед приходом.</p></article><article class="card"><h3>«Проявись»</h3><p>Расписание групповой практики не выдумывается автоматически. Страница показывает честный статус «по записи», а кнопка связи помогает узнать ближайшее занятие, время, стоимость и возможность присоединиться.</p></article><article class="card"><h3>Индивидуально</h3><p>Для индивидуальной работы свободное время зависит от записи. Сайт не обещает несуществующий слот: можно сразу спросить, есть ли окно сегодня или в ближайшее время, очно в Тбилиси или онлайн.</p></article></div><div class="notice" style="margin-top:22px">Расписание автоматически сдвигается каждый день. После 19:00 ближайшим спектаклем станет следующий день, поэтому на странице не остаётся вчерашняя дата.</div></div></section>`
  },
  '/text-scenography/': {
    title: 'Вася грустно смотрел на воду — текстосценография'
  },
  '/chem-zanyatsya-tbilisi/': {
    title: 'Куда пойти и чем заняться в Тбилиси сегодня — тест',
    description: 'Куда пойти и чем заняться в Тбилиси сегодня? Ответьте на 6 вопросов и получите персональный выбор: спектакль сегодня или занятие завтра.',
    appendHtml: `<section class="today" id="live-schedule"><div class="wrap two"><div><div class="eyebrow">После рекомендации</div><h2 style="font-family:Georgia,serif;font-size:44px;margin:10px 0 18px">Сверьтесь с живым расписанием</h2><p class="lead" style="font-size:19px">Спектакль в текущей программе идёт ежедневно в 19:00. Для «Проявись» и индивидуальной работы ближайшее время уточняется по записи. Страница расписания автоматически показывает ближайшие семь дат.</p><div class="actions"><a class="btn" href="/raspisanie-tbilisi/">Открыть актуальное расписание →</a></div></div><div class="card"><h3>Что уже известно</h3><p><strong>Спектакль:</strong> ежедневно · 19:00 · 30 ₾ · Абано 13/15.</p><p><strong>Другие форматы:</strong> ближайший слот по записи.</p></div></div></section>`
  }
};

function normalizePath(pathname) {
  if (pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

export default {
  async fetch(request, env) {
    const path = normalizePath(new URL(request.url).pathname);
    if (path === '/text-scenography/') {
      return new Response(TEXT_SCENOGRAPHY_DEMO, {
        status: 200,
        headers: {
          'content-type': 'text/html; charset=utf-8',
          'cache-control': 'public, max-age=60',
          'x-content-type-options': 'nosniff'
        }
      });
    }
    const response = await env.ASSETS.fetch(request);
    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('text/html')) return response;

    const page = SEO[path] || {};
    const rewriter = new HTMLRewriter()
      .on('head', {
        element(head) {
          if (!path.startsWith('/en/')) head.append('<script defer src="/assets/measure-enhance.js"></script>', { html: true });
          const enPath = HREFLANG[path];
          if (enPath) {
            const origin = new URL(request.url).origin;
            head.append(`<link rel="alternate" hreflang="ru" href="${origin}${path}"><link rel="alternate" hreflang="en" href="${origin}${enPath}"><link rel="alternate" hreflang="x-default" href="${origin}${path}">`, { html: true });
          }
          if (page.jsonLd) {
            head.append(`<script type="application/ld+json">${JSON.stringify(page.jsonLd).replace(/</g, '\\u003c')}</script>`, { html: true });
          }
        },
      });

    if (page.title) {
      rewriter.on('title', { element(el) { el.setInnerContent(page.title); } });
    }
    if (page.description) {
      rewriter.on('meta[name="description"]', { element(el) { el.setAttribute('content', page.description); } });
    }
    if (page.appendHtml) {
      rewriter.on('main', { element(el) { el.append(page.appendHtml, { html: true }); } });
    }
    if (page.prependTodayHtml) {
      let inserted = false;
      rewriter.on('section.today', {
        element(el) {
          if (inserted) return;
          inserted = true;
          el.prepend(page.prependTodayHtml, { html: true });
        }
      });
    }
    const enPath = HREFLANG[path];
    if (enPath) {
      rewriter.on('nav.navlinks', {
        element(el) {
          el.append(`<a href="${enPath}" lang="en" hreflang="en">EN</a>`, { html: true });
        }
      });
    }

    return rewriter.transform(response);
  },
};
