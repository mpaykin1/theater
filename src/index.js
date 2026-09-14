export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('text/html')) return response;

    return new HTMLRewriter()
      .on('head', {
        element(head) {
          head.append('<script defer src="/assets/measure-enhance.js"></script>', { html: true });
        },
      })
      .transform(response);
  },
};
