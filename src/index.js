const SEO = {
  '/': {
    prependTodayHtml: `<div class="wrap"><div class="facts" style="margin-bottom:28px"><div class="fact"><strong>19:00</strong><span>спектакли ежедневно</span></div><div class="fact"><strong>30 ₾</strong><span>стоимость в текущей программе</span></div><div class="fact"><strong>Абано 13/15</strong><span>Тбилиси · подтвердите перед визитом</span></div></div></div>`
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
    appendHtml: `<section><div class="wrap"><div class="section-head"><div class="eyebrow">После первого сообщения</div><h2>Понятный следующий шаг без обязательств</h2><p>Вы коротко описываете одну ситуацию. В ответ уточняются актуальный формат, возможность очной или онлайн-встречи и организационные условия. После этого вы решаете, подходит ли вам такой способ работы.</p></div><div class="grid3"><article class="card"><h3>1. Описываете сцену</h3><p>Достаточно нескольких предложений: что происходит сейчас и какой другой результат вы хотели бы попробовать.</p></article><article class="card"><h3>2. Уточняем формат</h3><p>Перед встречей подтверждаем способ участия и актуальные организационные детали — без выдуманных сроков и искусственной срочности.</p></article><article class="card"><h3>3. Принимаете решение</h3><p>Если формат подходит, договариваемся о встрече. Если нет — можно выбрать спектакль или курс и познакомиться с методом иначе.</p></article></div></div></section>`
  },
  '/afisha/': {
    appendHtml: `<section><div class="wrap two"><div><div class="eyebrow">Перед первым визитом</div><h2 style="font-family:Georgia,serif;font-size:44px">Можно начать просто со зрительского места</h2><p>Интерактивность не означает обязательного выхода на сцену. Можно посмотреть спектакль со стороны, понять правила и атмосферу, а включаться в действие только если самому захочется.</p></div><div class="card"><h3>Что уточнить перед приходом</h3><p>Напишите, чтобы подтвердить актуальную тему спектакля, время, наличие мест и организационные детали именно на выбранный день.</p></div></div></section>`
  },
  '/druzya-tbilisi/': {
    title: 'Найти друзей в Тбилиси — творческие проекты и встречи',
    description: 'Творческая компания в Тбилиси: музыка, танцы, кино, театр, игры и совместные проекты. Знакомимся через действие, а не только разговоры.'
  },
  '/about/': {
    description: 'Биография Михаила Пайкина: режиссёр, бизнес-психолог и коуч. Театр, проекты, профессиональный путь и авторский подход к театротерапии.'
  },
  '/tvorcheskie-znakomstva-tbilisi/': {
    title: 'Творческие знакомства в Тбилиси — совместные проекты'
  },
  '/chem-zanyatsya-tbilisi/': {
    title: 'Чем заняться в Тбилиси — творческие идеи и встречи'
  }
};

function normalizePath(pathname) {
  if (pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('text/html')) return response;

    const path = normalizePath(new URL(request.url).pathname);
    const page = SEO[path] || {};
    const rewriter = new HTMLRewriter()
      .on('head', {
        element(head) {
          head.append('<script defer src="/assets/measure-enhance.js"></script>', { html: true });
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

    return rewriter.transform(response);
  },
};
