import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { g as server_default, h as deserializeManifest } from './chunks/astro.df3af42f.mjs';
import { _ as _page0, a as _page1, b as _page2, c as _page3, d as _page4, e as _page5 } from './chunks/pages/all.aa8cdf79.mjs';
import 'mime';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'html-escaper';
import 'string-width';
/* empty css                                 */import '@cloudinary/url-gen';

const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/treatments.astro", _page1],["src/pages/services.astro", _page2],["src/pages/contact.astro", _page3],["src/pages/about.astro", _page4],["src/pages/faq.astro", _page5],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":["_astro/about.6fd23a3c.css"],"scripts":[{"type":"external","value":"_astro/hoisted.386486e0.js"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/about.6fd23a3c.css"],"scripts":[{"type":"external","value":"_astro/hoisted.386486e0.js"}],"routeData":{"route":"/treatments","type":"page","pattern":"^\\/treatments\\/?$","segments":[[{"content":"treatments","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/treatments.astro","pathname":"/treatments","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/about.6fd23a3c.css"],"scripts":[{"type":"external","value":"_astro/hoisted.386486e0.js"}],"routeData":{"route":"/services","type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/about.6fd23a3c.css"],"scripts":[{"type":"external","value":"_astro/hoisted.79216dff.js"}],"routeData":{"route":"/contact","type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/about.6fd23a3c.css"],"scripts":[{"type":"external","value":"_astro/hoisted.386486e0.js"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/about.6fd23a3c.css"],"scripts":[{"type":"external","value":"_astro/hoisted.386486e0.js"}],"routeData":{"route":"/faq","type":"page","pattern":"^\\/faq\\/?$","segments":[[{"content":"faq","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/faq.astro","pathname":"/faq","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://www.mariposawellnessllc.com","base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"componentMetadata":[["/Users/pawanbenjamin/mari/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/pawanbenjamin/mari/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/pawanbenjamin/mari/src/pages/faq.astro",{"propagation":"none","containsHead":true}],["/Users/pawanbenjamin/mari/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/pawanbenjamin/mari/src/pages/services.astro",{"propagation":"none","containsHead":true}],["/Users/pawanbenjamin/mari/src/pages/treatments.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.386486e0.js","/astro/hoisted.js?q=0":"_astro/hoisted.79216dff.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/about.6fd23a3c.css","/favicon.png","/logo.svg","/_astro/Header.astro_astro_type_script_index_0_lang.ca5e9319.js","/_astro/hoisted.386486e0.js","/_astro/hoisted.79216dff.js"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
