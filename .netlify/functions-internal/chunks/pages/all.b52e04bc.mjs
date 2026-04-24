/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, s as spreadAttributes, u as unescapeHTML, d as renderComponent, m as maybeRenderHead, e as renderHead, f as renderSlot } from '../astro.df3af42f.mjs';
/* empty css                              */import { Cloudinary } from '@cloudinary/url-gen';

const $$Astro$i = createAstro("https://www.mariposawellnessllc.com");
const $$OpenGraphArticleTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}
${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}
${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}
${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}
${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}
${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/Users/pawanbenjamin/mari/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro");

const $$Astro$h = createAstro("https://www.mariposawellnessllc.com");
const $$OpenGraphBasicTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}>
<meta property="og:type"${addAttribute(openGraph.basic.type, "content")}>
<meta property="og:image"${addAttribute(openGraph.basic.image, "content")}>
<meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/Users/pawanbenjamin/mari/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro");

const $$Astro$g = createAstro("https://www.mariposawellnessllc.com");
const $$OpenGraphImageTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>
${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}
${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}
${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}
${!(height === null) ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}
${!(alt === null) ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/Users/pawanbenjamin/mari/node_modules/astro-seo/src/components/OpenGraphImageTags.astro");

const $$Astro$f = createAstro("https://www.mariposawellnessllc.com");
const $$OpenGraphOptionalTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}
${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}
${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}
${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}
${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}
${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}
${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/Users/pawanbenjamin/mari/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro");

const $$Astro$e = createAstro("https://www.mariposawellnessllc.com");
const $$ExtendedTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}
${props.extend.meta?.map(({ content, httpEquiv, name, property }) => renderTemplate`<meta${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(name, "name")}${addAttribute(property, "property")}>`)}`;
}, "/Users/pawanbenjamin/mari/node_modules/astro-seo/src/components/ExtendedTags.astro");

const $$Astro$d = createAstro("https://www.mariposawellnessllc.com");
const $$TwitterTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}
${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}
${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}
${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}
${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}
${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}
${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/Users/pawanbenjamin/mari/node_modules/astro-seo/src/components/TwitterTags.astro");

const $$Astro$c = createAstro("https://www.mariposawellnessllc.com");
const $$SEO = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || props.openGraph.basic.title == null || props.openGraph.basic.type == null || props.openGraph.basic.image == null) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is stongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}

${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}

<link rel="canonical"${addAttribute(Astro2.props.canonical || Astro2.url.href, "href")}>

${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}

<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>

${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}
${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}
${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}
${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}
${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}
${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}`;
}, "/Users/pawanbenjamin/mari/node_modules/astro-seo/src/SEO.astro");

const $$Astro$b = createAstro("https://www.mariposawellnessllc.com");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Footer;
  const links = [
    { href: "/", label: "home" },
    { href: "/about", label: "about" },
    { href: "/services", label: "services" },
    { href: "/treatments", label: "treatments" },
    { href: "/faq", label: "faq" },
    { href: "/contact", label: "contact" }
  ];
  const year = new Date().getFullYear();
  return renderTemplate`${maybeRenderHead($$result)}<footer class="mt-24 border-t border-sage-100 bg-cream-50">
  <div class="mx-auto max-w-page px-6 py-10">
    <nav class="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
      ${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-xs font-sans uppercase tracking-widest text-ink-muted hover:text-sage-600">
            ${link.label}
          </a>`)}
    </nav>
    <p class="mt-6 text-center text-xs font-sans text-ink-muted tracking-wide">
      &copy; ${year} Mariposa Wellness LLC
    </p>
  </div>
</footer>`;
}, "/Users/pawanbenjamin/mari/src/components/Footer.astro");

const $$Astro$a = createAstro("https://www.mariposawellnessllc.com");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Header;
  const links = [
    { href: "/", label: "home" },
    { href: "/about", label: "about" },
    { href: "/services", label: "services" },
    { href: "/treatments", label: "treatments" },
    { href: "/faq", label: "faq" },
    { href: "/contact", label: "contact" }
  ];
  return renderTemplate`${maybeRenderHead($$result)}<header class="sticky top-0 z-30 backdrop-blur-sm bg-cream-100/80 border-b border-sage-100 astro-3EF6KSR2">
  <div class="mx-auto max-w-page px-6 py-4 flex items-center justify-between astro-3EF6KSR2">
    <a href="/" class="flex items-center gap-3 font-display text-lg md:text-xl tracking-tightish font-normal astro-3EF6KSR2">
      <img src="/logo.svg" alt="Mariposa Wellness" class="h-8 md:h-9 w-auto shrink-0 astro-3EF6KSR2">
      <span class="flex items-baseline gap-1.5 astro-3EF6KSR2">
        <span class="text-sage-600 astro-3EF6KSR2">mariposa</span>
        <span class="text-ink-soft italic font-light astro-3EF6KSR2">wellness</span>
      </span>
    </a>

    <div class="flex items-center gap-6 astro-3EF6KSR2">
      <a href="/contact" class="hidden sm:inline-flex text-xs font-sans uppercase tracking-widest text-ink-soft hover:text-sage-600 astro-3EF6KSR2">
        contact
      </a>
      <button id="menu-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="overlay-menu" class="hamburger relative w-8 h-8 flex items-center justify-center text-ink astro-3EF6KSR2">
        <span class="hamburger-line hamburger-line--top astro-3EF6KSR2" aria-hidden="true"></span>
        <span class="hamburger-line hamburger-line--mid astro-3EF6KSR2" aria-hidden="true"></span>
        <span class="hamburger-line hamburger-line--bot astro-3EF6KSR2" aria-hidden="true"></span>
      </button>
    </div>
  </div>
</header>

<nav id="overlay-menu" class="overlay-menu fixed inset-0 z-50 bg-cream-100 pointer-events-none opacity-0 transition-opacity duration-300 overflow-y-auto astro-3EF6KSR2" aria-hidden="true">
  <div class="min-h-full flex flex-col astro-3EF6KSR2">
    <div class="flex items-center justify-between px-6 py-4 border-b border-sage-100 astro-3EF6KSR2">
      <a href="/" class="flex items-center gap-3 font-display text-lg md:text-xl tracking-tightish font-normal astro-3EF6KSR2">
        <img src="/logo.svg" alt="Mariposa Wellness" class="h-8 md:h-9 w-auto shrink-0 astro-3EF6KSR2">
        <span class="flex items-baseline gap-1.5 astro-3EF6KSR2">
          <span class="text-sage-600 astro-3EF6KSR2">mariposa</span>
          <span class="text-ink-soft italic font-light astro-3EF6KSR2">wellness</span>
        </span>
      </a>
      <button id="menu-close" aria-label="Close menu" class="close-btn w-8 h-8 flex items-center justify-center text-ink hover:text-sage-600 transition-colors astro-3EF6KSR2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" class="w-6 h-6 astro-3EF6KSR2" aria-hidden="true">
          <line x1="5" y1="5" x2="19" y2="19" class="astro-3EF6KSR2"></line>
          <line x1="19" y1="5" x2="5" y2="19" class="astro-3EF6KSR2"></line>
        </svg>
      </button>
    </div>

    <ul class="menu-list flex-1 flex flex-col items-center justify-center gap-4 sm:gap-6 py-12 px-6 text-center astro-3EF6KSR2">
      ${links.map((link) => renderTemplate`<li class="astro-3EF6KSR2">
            <a${addAttribute(link.href, "href")} class="font-display text-2xl sm:text-3xl md:text-4xl font-light tracking-tightish hover:text-sage-600 transition-colors astro-3EF6KSR2">
              ${link.label}
            </a>
          </li>`)}
    </ul>

    <div class="px-6 py-6 text-center astro-3EF6KSR2">
      <a href="mailto:admin@mariposawellnessllc.com" class="text-xs font-sans uppercase tracking-widest text-ink-muted hover:text-sage-600 astro-3EF6KSR2">
        admin@mariposawellnessllc.com
      </a>
    </div>
  </div>
</nav>`;
}, "/Users/pawanbenjamin/mari/src/components/Header.astro");

const $$Astro$9 = createAstro("https://www.mariposawellnessllc.com");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <link rel="icon" type="image/svg+xml" href="/favicon.png">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <link rel="canonical" href="https://www.mariposawellnessllc.com">
    <link rel="sitemap" href="/sitemap-index.xml">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400&family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    ${renderComponent($$result, "SEO", $$SEO, { "title": title, "description": "Mariposa Wellness LLC Marisa Alonso Physical Therapy Integrative Manual Physical Therapy and Pelvic Health located in Washington DC Therapists", "openGraph": {
    basic: {
      title: "Marisa Alonso Mariposa Wellness LLC",
      type: "Health Care Physical Therapy Pelvic Floor",
      image: "https://res.cloudinary.com/dmstif28x/image/upload/v1681262148/aqua-negative_p6pbcc.svg"
    }
  }, "extend": {
    link: [{ rel: "icon", href: "/favicon.png" }]
  } })}
  ${renderHead($$result)}</head>
  <body class="min-h-screen flex flex-col">
    ${renderComponent($$result, "Header", $$Header, {})}
    <div class="flex-1">
      ${renderSlot($$result, $$slots["default"])}
    </div>
    ${renderComponent($$result, "Footer", $$Footer, {})}
  </body></html>`;
}, "/Users/pawanbenjamin/mari/src/layouts/Layout.astro");

const $$Astro$8 = createAstro("https://www.mariposawellnessllc.com");
const $$PageHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$PageHeader;
  const { title, desc, prev, next } = Astro2.props;
  const prevHref = prev === "home" ? "/" : `/${prev}`;
  const nextHref = next === "home" ? "/" : `/${next}`;
  return renderTemplate`${maybeRenderHead($$result)}<section id="sub-nav" class="mx-auto max-w-page px-6 pt-10 md:pt-16">
  <div class="flex flex-col gap-4">
    ${(title || desc) && renderTemplate`<h1 class="font-display font-light tracking-tightish text-4xl md:text-6xl leading-[1.05]">
          ${title && renderTemplate`<span class="block text-ink">${title}</span>`}
          ${desc && renderTemplate`<span class="block italic text-sage-600">${desc}</span>`}
        </h1>`}
    <nav class="mt-4 flex items-center justify-between text-xs font-sans uppercase tracking-widest text-ink-muted">
      <a${addAttribute(prevHref, "href")} class="hover:text-sage-600">
        &larr; ${prev}
      </a>
      <a${addAttribute(nextHref, "href")} class="hover:text-sage-600">
        ${next} &rarr;
      </a>
    </nav>
    <hr class="mt-2 border-sage-100">
  </div>
</section>`;
}, "/Users/pawanbenjamin/mari/src/components/PageHeader.astro");

const $$Astro$7 = createAstro("https://www.mariposawellnessllc.com");
const $$CldImage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$CldImage;
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dmstif28x"
    }
  });
  const { src, ...props } = Astro2.props;
  let cldSrc = cld.image(src);
  if (src.startsWith("https://")) {
    cldSrc.setDeliveryType("fetch");
  }
  return renderTemplate`${maybeRenderHead($$result)}<img${addAttribute(cldSrc.toURL(), "src")} loading="lazy"${spreadAttributes(props)}>`;
}, "/Users/pawanbenjamin/mari/src/components/CldImage.astro");

const $$Astro$6 = createAstro("https://www.mariposawellnessllc.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Mariposa Wellness LLC Integrative Manual Therapy & Pelvic Health" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Integrative Manual Therapy", "desc": "& Pelvic Health", "next": "about", "prev": "services" })}${maybeRenderHead($$result2)}<main class="mx-auto max-w-page px-6 py-12 md:py-16">
    <figure class="relative overflow-hidden rounded-md shadow-sm shadow-sage-900/10">
      ${renderComponent($$result2, "CldImage", $$CldImage, { "src": "mari/eight_lmmlwq.jpg", "alt": "Marisa with patient", "width": "auto", "height": "auto", "class": "w-full saturate-[.85] contrast-[1.05]" })}
      <figcaption class="absolute inset-x-0 bottom-0 p-6 md:p-10 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
        <h2 class="font-display font-light tracking-tightish text-3xl md:text-5xl leading-none text-cream-50">
          <span class="opacity-80">mariposa</span>
          <span class="block italic">wellness</span>
        </h2>
      </figcaption>
    </figure>

    <section class="mx-auto mt-12 md:mt-16 max-w-reading prose-body">
      <p class="text-xl md:text-2xl font-display font-light text-ink leading-snug">
        At Mariposa Wellness I combine a variety of manual medicine modalities
        to treat the whole person.
      </p>
      <p>
        With an expertise in Pelvic Health and almost 20 years experience as a
        physical therapist my goal is to provide treatment to enhance your
        overall movement and function while empowering you with knowledge
        regarding your body and particular condition and techniques for self
        care.
      </p>
    </section>

    <section class="mx-auto mt-12 max-w-reading flex flex-col sm:flex-row gap-3 sm:gap-4">
      <a href="/contact" class="btn flex-1">Become a new patient</a>
      <a href="https://bchwbooking.clientsecure.me/" class="btn-soft flex-1">Book an appointment</a>
    </section>
  </main>` })}`;
}, "/Users/pawanbenjamin/mari/src/pages/index.astro");

const $$file$5 = "/Users/pawanbenjamin/mari/src/pages/index.astro";
const $$url$5 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro("https://www.mariposawellnessllc.com");
const $$Treatments = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Treatments;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "treatments" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "treatment", "desc": "methods", "next": "faq", "prev": "services" })}${maybeRenderHead($$result2)}<main class="mx-auto max-w-page px-6 py-12 md:py-16">
    <div class="mx-auto max-w-3xl space-y-12">
      <section>
        <h2 class="flex items-baseline gap-4 text-ink mb-4">
          <span class="font-sans text-xs tracking-widest text-sage-500 shrink-0 tabular-nums">
            01
          </span>
          <span class="font-display text-3xl md:text-4xl font-light tracking-tightish">
            core synchronism
          </span>
        </h2>
        <p class="text-ink-soft leading-relaxed mb-4">
          Core Synchronism is a system of hand medicine designed to assist
          nature in establishing harmony with all parts of the organism. It is
          not pathology specific. It is a mechanical system designed to restore
          balance, which results in activating an individual's self-healing
          ability.
        </p>
        <a href="http://coresynchronism.org/" class="inline-flex items-center gap-1 text-sm font-sans uppercase tracking-widest text-sage-600 hover:text-sage-700">
          more info &rarr;
        </a>
      </section>

      <hr class="border-sage-100">

      <section>
        <h2 class="flex items-baseline gap-4 text-ink mb-4">
          <span class="font-sans text-xs tracking-widest text-sage-500 shrink-0 tabular-nums">
            02
          </span>
          <span class="font-display text-3xl md:text-4xl font-light tracking-tightish">
            visceral manipulation
          </span>
        </h2>
        <p class="text-ink-soft leading-relaxed mb-4">
          Visceral Manipulation uses an in depth understanding of the anatomy
          in order to address fascial restrictions around the organ systems.
          Visceral manipulation can be utilized to treat a number of different
          symptoms from chronic constipation, bowel/bladder dysfunction,
          painful periods, musculoskeletal pain, infertility and more.
        </p>
        <a href="https://www.barralinstitute.com/therapies/index.php" class="inline-flex items-center gap-1 text-sm font-sans uppercase tracking-widest text-sage-600 hover:text-sage-700">
          Barral Institute &rarr;
        </a>
      </section>

      <hr class="border-sage-100">

      <section>
        <div class="md:flex md:gap-6 lg:gap-8 md:items-center">
          <figure class="mb-6 md:mb-0 md:w-64 lg:w-72 md:shrink-0 aspect-[4/3] overflow-hidden rounded-md bg-sage-50 shadow-sm shadow-sage-900/5">
            ${renderComponent($$result2, "CldImage", $$CldImage, { "src": "mari/stom2_u3amcw.jpg", "width": "auto", "height": "auto", "alt": "Marisa and patient", "class": "h-full w-full object-cover saturate-[.85] contrast-[1.05]" })}
          </figure>
          <div class="md:flex-1 md:min-w-0">
            <h2 class="flex items-baseline gap-4 text-ink mb-4">
              <span class="font-sans text-xs tracking-widest text-sage-500 shrink-0 tabular-nums">
                03
              </span>
              <span class="font-display text-3xl md:text-4xl font-light tracking-tightish">
                pelvic floor physical therapy
              </span>
            </h2>
            <p class="text-ink-soft leading-relaxed">
              Pelvic floor physical therapy address the whole body with a
              deeper understanding of the pelvic floor muscles, nerves,
              organs, and function. As a pelvic floor physical therapist my
              goal is to empower each person to understand how their pelvic
              floor functions and to support them reaching their goals. The
              pelvic floor is a truly special area of the body because it is
              the only area in the body where our skeletal muscle have a
              direct impact on our organs (bowel, bladder, uterus, prostate).
              Therefor dysfunction at the pelvic floor can lead to
              bowel/bladder incontinence, retention, constipation, sexual
              dysfunction, pain, and more. Also, because the pelvic floor is
              one of our core muscles in can often be a missing link in
              persistent back pain, sciatica, and hip pain.
            </p>
          </div>
        </div>
      </section>

      <hr class="border-sage-100">

      <section>
        <div class="md:flex md:gap-6 lg:gap-8 md:items-center">
          <figure class="mb-6 md:mb-0 md:w-64 lg:w-72 md:shrink-0 aspect-[4/3] overflow-hidden rounded-md bg-sage-50 shadow-sm shadow-sage-900/5">
            ${renderComponent($$result2, "CldImage", $$CldImage, { "src": "mari/four-1_fmzwof.jpg", "width": "auto", "height": "auto", "alt": "Marisa and patient", "class": "h-full w-full object-cover saturate-[.85] contrast-[1.05]" })}
          </figure>
          <div class="md:flex-1 md:min-w-0">
            <h2 class="flex items-baseline gap-4 text-ink mb-4">
              <span class="font-sans text-xs tracking-widest text-sage-500 shrink-0 tabular-nums">
                04
              </span>
              <span class="font-display text-3xl md:text-4xl font-light tracking-tightish">
                myofascial release
              </span>
            </h2>
            <p class="text-ink-soft leading-relaxed">
              Myofascial release techniques address restrictions in the
              body's connective tissue matrix. Connective tissue, or fascia,
              is a network of tissue that connects our muscles, organs, and
              bones. Thickening of the fascia restricts motion in tissue
              which can lead to pain and dysfunction. Myofascial release uses
              a variety of tissue manipulation techniques to promote mobility
              in the fascia to decrease pain and improve movement.
            </p>
          </div>
        </div>
      </section>
    </div>
  </main>` })}`;
}, "/Users/pawanbenjamin/mari/src/pages/treatments.astro");

const $$file$4 = "/Users/pawanbenjamin/mari/src/pages/treatments.astro";
const $$url$4 = "/treatments";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Treatments,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro("https://www.mariposawellnessllc.com");
const $$ServiceBlock = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ServiceBlock;
  const { title, desc, treatmentList, imageUrl, number } = Astro2.props;
  const listLabel = title === "community education classes" ? "class topics include" : "common conditions treated";
  return renderTemplate`${maybeRenderHead($$result)}<article class="service-block border-b border-sage-100 py-10 first:pt-0 last:border-b-0 astro-2LFPBJAS">
  <div class="md:flex md:gap-6 lg:gap-8 md:items-center astro-2LFPBJAS">
    ${imageUrl !== "" && renderTemplate`<figure class="mb-6 md:mb-0 md:w-56 lg:w-64 md:shrink-0 md:self-start aspect-[4/3] overflow-hidden rounded-md bg-sage-50 shadow-sm shadow-sage-900/5 astro-2LFPBJAS">
          ${renderComponent($$result, "CldImage", $$CldImage, { "src": imageUrl, "alt": title, "height": "auto", "width": "auto", "class": "h-full w-full object-cover saturate-[.85] contrast-[1.05] astro-2LFPBJAS" })}
        </figure>`}

    <div class="md:flex-1 md:min-w-0 astro-2LFPBJAS">
      <h3 class="flex items-baseline gap-4 text-ink astro-2LFPBJAS">
        ${number && renderTemplate`<span class="font-sans text-xs tracking-widest text-sage-500 shrink-0 tabular-nums astro-2LFPBJAS">
              ${number}
            </span>`}
        <span class="font-display text-2xl md:text-3xl font-light tracking-tightish astro-2LFPBJAS">
          ${title}
        </span>
      </h3>

      <p class="mt-4 text-ink-soft leading-relaxed astro-2LFPBJAS">${desc}</p>
    </div>
  </div>

  ${treatmentList && treatmentList.length > 0 && renderTemplate`<details${addAttribute([[
    "expandable mt-6 pl-4 border-l-2 border-sage-200",
    imageUrl !== "" && "md:ml-[15.5rem] lg:ml-[18rem]"
  ], "astro-2LFPBJAS"], "class:list")}>
        <summary class="cursor-pointer list-none font-sans text-xs uppercase tracking-widest text-sage-600 hover:text-sage-700 inline-flex items-center gap-1 astro-2LFPBJAS">
          <span class="expandable-label astro-2LFPBJAS">${listLabel}</span>
          <span class="expandable-arrow transition-transform duration-300 astro-2LFPBJAS">
            &rarr;
          </span>
        </summary>
        <ul class="expandable-content mt-3 grid gap-1.5 text-sm text-ink-soft sm:grid-cols-2 overflow-hidden astro-2LFPBJAS">
          ${treatmentList.map((treatment) => renderTemplate`<li class="flex gap-2 astro-2LFPBJAS">
              <span class="text-sage-400 astro-2LFPBJAS" aria-hidden="true">
                ·
              </span>
              <span class="astro-2LFPBJAS">${treatment}</span>
            </li>`)}
        </ul>
      </details>`}
</article>`;
}, "/Users/pawanbenjamin/mari/src/components/ServiceBlock.astro");

const $$Astro$3 = createAstro("https://www.mariposawellnessllc.com");
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Services;
  const list1 = [
    "Pregnancy related Back/Hip Pain",
    "Post-Partum urinary/ fecal incontinence",
    "Diastasis Recti",
    "Pelvic Organ Prolapse",
    "C-Section Scar Treatment",
    "Postural pain due to wearing, carrying, nursing baby",
    "Symphysis pubis dysfunction (SPD)",
    "Sexual Dysfunction",
    "Sacro-iliac joint dysfunction",
    "Pelvic instability"
  ];
  const list2 = [
    "Tissue preparation Pre-Gender affirming surgery",
    "Post- Gender Affirming surgery rehabilitation",
    "Pelvic pain",
    "Difficulty using/ progressing dilators",
    "Urinary incontinence",
    "Voiding dysfunction",
    "Scar pain",
    "Pain with intercourse",
    "Urinary dysfunction",
    "Dyspareunia (pain with intercourse)",
    "Recurrent urinary tract infections",
    "Decreased sexual response",
    "Vaginoplasty"
  ];
  const list3 = [
    "Vulvodynia/Vestibulodynia",
    "Interstitial Cystitis/Painful Bladder Syndrome",
    "Pudendal Neuralgia",
    "Endometriosis",
    "Urgency/ Frequent Urination",
    "Urinary/ Fecal Incontinence",
    "Abdominal pain syndrome",
    "Chronic Pelvic Pain (women)",
    "Constipation",
    "Coccyx pain",
    "Vaginissmus",
    "Clitoral pain",
    "Sacral pain",
    "Anal/rectal pain",
    "Pain with sex",
    "Fertility problems due to scar tissue",
    "Post surgical care for any pelvic or abdominal surgery",
    "Anorgasmia",
    "Recurrent UTIs"
  ];
  const list4 = [
    "Chronic Pelvic Pain Syndrome/male pelvic pain",
    "Nonbacterial chronic prostatitis",
    "Urgency/ Frequent Urination",
    "Urinary/ Fecal Incontinence",
    "Sexual dysfunction",
    "Abdominal pain syndrome",
    "Constipation",
    "Erectile Dysfunction",
    "Interstitial Cystitis/Painful Bladder Syndrome",
    "Pudendal Neuralgia",
    "Coccyx pain",
    "Penile/ Testicular pain",
    "Penile pain",
    "Anal/ rectal pain",
    "Post-ejaculatory pain",
    "Post prostatectomy pain"
  ];
  const list5 = [
    "Carpal Tunnel Syndrome",
    "Chronic or Acute Musculoskeletal pain",
    "Fibromyalgia",
    "Foot and Ankle Pain",
    "Headaches",
    "Hip Pain",
    "Knee Pain",
    "Low Back Pain",
    "Migraines",
    "Myofascial pain syndrome",
    "Neck Pain",
    "Shoulder Pain",
    "Sciatica",
    "Scoliosis",
    "Femoral-acetabular impingement"
  ];
  const list6 = [
    "How to care for the pregnant body",
    "Physical therapy considerations for healing postpartum",
    "Sexual health throughout the lifespan",
    "How to manage prolapse",
    "How to manage incontinence"
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "services" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "", "desc": "services", "next": "treatments", "prev": "about" })}${maybeRenderHead($$result2)}<main class="mx-auto max-w-page px-6 py-12 md:py-16">
    <div class="mx-auto max-w-3xl">
    ${renderComponent($$result2, "ServiceBlock", $$ServiceBlock, { "number": "01", "title": "prenatal postpartum", "desc": "During pregnancy and in the postpartum phase, changes in hormones, the alignment of the pregnant person (and fetus), and the birthing process itself can potentially cause muscle, joint, nerve, bladder and bowel problems. At Mariposa wellness our goals for treatment during pregnancy and postpartum are to improve fetal and parent alignment to allow for greater ease with labor and delivery, and help accelerate the new parent\u2019s recovery after childbirth.", "treatmentList": list1, "imageUrl": "mari/looking-at-baby_ple4yn.jpg" })}
    ${renderComponent($$result2, "ServiceBlock", $$ServiceBlock, { "number": "02", "title": "gender inclusive pelvic health", "desc": "At Mariposa wellness we are dedicated to inclusive rehabilitation for patients across the gender spectrum.", "treatmentList": list2, "imageUrl": "mari/gender_ymeb87.jpg" })}
    ${renderComponent($$result2, "ServiceBlock", $$ServiceBlock, { "number": "03", "title": "female pevlic health", "desc": "At Mariposa Wellness we specialize in the treatment of the following conditions specific to a womans uro-gynecological, sexual, and colo-rectal function, pre-and post-pregnancy, and chronic abdominal and pelvic pain syndromes. As Licensed Physical Therapists with advanced training in pelvic floor rehabilitation, we can help to normalize the myofascial tissue texture around the body, promote pelvic alignment, and restore normal functioning in the organs of the abdomino-pelvic area.", "treatmentList": list3, "imageUrl": "mari/laugh_lsplso.jpg" })}
    ${renderComponent($$result2, "ServiceBlock", $$ServiceBlock, { "number": "04", "title": "male pelvic health", "desc": "Our specialized Pelvic Floor Physical Therapists also treat conditions that are specific to the health of male urological and sexual function. For men, fascial restrictions in the pelvic floor and pelvic girdle can cause sexual dysfunction, difficulty with urination and bowel movements, or pelvic pain. Fascial restrictions in the male pelvis are often caused by poor postural alignment or scarring from abdominal or pelvic surgeries. Our Pelvic Floor Physical Therapists will help to reduce adhered scar tissue restrictions, and will also help to improve flexibility and normalize function to the urinary and reproductive systems.", "treatmentList": list4, "imageUrl": "mari/seven_zacrld.jpg" })}
    ${renderComponent($$result2, "ServiceBlock", $$ServiceBlock, { "number": "05", "title": "chronic pain", "desc": "Chronic pain, like neck or back pain, can be caused by poor posture, accidents, falls, emotional trauma, surgeries and disease. It can significantly impact a person\u2019s life and function and can be crippling to the mind, body and spirit. This is why it is extremely important to address these conditions holistically. At Mariposa Wellness we use integrative manual therapy techniques including Core Synchronism, Visceral Manipulation, and Myofascial Release to effectively treat persistent pain, release blocked emotional tension and improve postural and functionality in the body.", "treatmentList": list5, "imageUrl": "mari/eight_lmmlwq.jpg" })}
    ${renderComponent($$result2, "ServiceBlock", $$ServiceBlock, { "number": "06", "title": "community education classes", "desc": "If you are interested in having a physical therapist come out and talk with your new parents group please email admin@mariposawellnessllc.com", "treatmentList": list6, "imageUrl": "" })}
    </div>
  </main>` })}`;
}, "/Users/pawanbenjamin/mari/src/pages/services.astro");

const $$file$3 = "/Users/pawanbenjamin/mari/src/pages/services.astro";
const $$url$3 = "/services";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://www.mariposawellnessllc.com");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "contact" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "", "desc": "contact", "next": "home", "prev": "faq" })}${maybeRenderHead($$result2)}<main class="mx-auto max-w-page px-6 py-12 md:py-16">
    <div class="mx-auto max-w-reading grid gap-10 md:grid-cols-2">
      <section class="rounded-sm border border-sage-100 bg-cream-50 p-8 flex flex-col gap-6">
        <div>
          <h2 class="font-display text-2xl md:text-3xl font-light tracking-tightish text-ink">
            returning patients
          </h2>
          <hr class="mt-3 border-sage-200">
        </div>
        <p class="text-ink-soft leading-relaxed">
          Book your next appointment through our secure client portal.
        </p>
        <a href="https://bchwbooking.clientsecure.me/" class="btn">
          book appointment
        </a>
      </section>

      <section class="rounded-sm border border-sage-100 bg-cream-50 p-8 flex flex-col gap-6">
        <div>
          <h2 class="font-display text-2xl md:text-3xl font-light tracking-tightish text-ink">
            new patients
          </h2>
          <hr class="mt-3 border-sage-200">
        </div>
        <p class="text-ink-soft leading-relaxed">
          If you would like to become a new patient, please reach out at the
          address below.
        </p>
        <a href="mailto:admin@mariposawellnessllc.com" class="font-sans text-sage-700 hover:text-sage-800 tracking-tight break-words [word-break:break-word] text-base sm:text-lg">
          admin<wbr>@mariposawellnessllc.com
        </a>
        <div class="mt-auto flex flex-col gap-2">
          <a href="mailto:admin@mariposawellnessllc.com" class="btn">
            send email
          </a>
          <button type="button" data-copy-email="admin@mariposawellnessllc.com" class="btn-ghost">
            <span data-copy-label>copy email</span>
          </button>
        </div>
      </section>
    </div>
  </main>` })}`;
}, "/Users/pawanbenjamin/mari/src/pages/contact.astro");

const $$file$2 = "/Users/pawanbenjamin/mari/src/pages/contact.astro";
const $$url$2 = "/contact";

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://www.mariposawellnessllc.com");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Me" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Marisa", "desc": "she/ella", "next": "services", "prev": "home" })}${maybeRenderHead($$result2)}<main class="mx-auto max-w-page px-6 py-12 md:py-16">
    <article class="mx-auto max-w-3xl prose-body">
      <figure class="mb-8 md:mb-2 md:mr-8 md:float-left md:w-72 lg:w-80 overflow-hidden rounded-md shadow-sm shadow-sage-900/10">
        ${renderComponent($$result2, "CldImage", $$CldImage, { "src": "mari/mari-karuna_gnlu1y.webp", "alt": "Marisa", "height": "auto", "width": "auto", "class": "w-full saturate-[.85] contrast-[1.05]" })}
        <figcaption class="px-4 py-2 text-xs font-sans uppercase tracking-widest text-ink-muted bg-cream-50">
          Marisa Alonso
        </figcaption>
      </figure>

      <p>
        My whole life, I have known that my path is to support others thrive in
        their journey toward healing and wholeness. My interest in manual
        therapy started when I was eight and my dad herniated a disc in his
        back, developing sciatica that after a while made it really difficult
        for him to move. For weeks he was mainly bedridden. I would bring him
        hot packs in bed and try to lift his spirits. When my dad seemed at a
        loss for what to do, my mom, a physical therapist, asked one of her
        manual physical therapist buddies to help out. She would come to the
        house, throw a mat on the floor, and treat my dad. I would watch in
        fascination as my dad was able to move better and better after every
        session. He was diligent with his exercises and now, over 30 years
        later he is active, strong, and never needed surgery! This was the
        start of my curiosity, deep awe, and respect for the body's innate
        ability to heal.
      </p>

      <blockquote class="md:clear-left my-10 border-l-2 border-sage-400 pl-6 py-2 font-display text-xl md:text-2xl italic font-light text-sage-700 leading-snug">
        "This was the start of my curiosity, deep awe, and respect for the
        body's innate ability to heal."
      </blockquote>

      <p>
        As a college student I studied physical therapy at the University of
        Connecticut graduating in 2004. At school I was passionate about
        advocating for women's health and women's right to choose and be
        informed about all aspects of their health. Also, as one of the only
        Latina's and POC folks in the physical therapy and allied health
        department, I was acutely aware of the disparities in health research
        and access to healthcare among BIPOC communities. I completed my
        graduation thesis on Psychosocial Barriers to Physical Activity in
        Puerto Rican Women and published my research in the Journal of
        Strength and Conditioning. I also gave lectures at local conferences
        on the importance of healthcare practitioners recognizing the racial
        and ethic differences when developing treatment plans.
      </p>

      <p>
        Knowing that I wanted to focus my career in pelvic health, I completed
        the course work through the Herman & Wallace Pelvic Rehabilitation
        Institute and began a fulfilling career as a pelvic health physical
        therapist. I have worked at the National Rehabilitation Institute,
        Kirk Center for Health Living in the Chicagoland region, a specialty
        clinic for pelvic floor dysfunction, and in 2012 I was the co-founder
        and co-owner of Body Connect Health and Wellness in Washington DC. At
        Body Connect one of our main missions was not only to provide
        exceptional care for all persons with pelvic floor dysfunction but
        also to empower the community through education classes on topics
        ranging from work ergonomics, pre and postpartum wellness, to sexual
        health throughout the lifespan.
      </p>
    </article>
  </main>` })}`;
}, "/Users/pawanbenjamin/mari/src/pages/about.astro");

const $$file$1 = "/Users/pawanbenjamin/mari/src/pages/about.astro";
const $$url$1 = "/about";

const _page4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://www.mariposawellnessllc.com");
const $$Faq = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Faq;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "FAQ" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "frequently", "desc": "asked questions", "next": "contact", "prev": "treatments" })}${maybeRenderHead($$result2)}<main class="mx-auto max-w-page px-6 py-12 md:py-16">
    <div class="mx-auto max-w-reading space-y-12">
      <section>
        <h2 class="font-display text-3xl md:text-4xl font-light tracking-tightish text-ink mb-4">
          insurance
        </h2>
        <p class="text-ink-soft leading-relaxed">
          Mariposa Wellness is an out-of-network outpatient physical therapy
          provider. This means that the client is responsible for paying the
          full fee at the time of service. We will issue a superbill that can
          be submitted by the client to their insurance for direct
          reimbursement. Each insurance company and plan is different. We
          recommend contacting your insurance company directly to find out
          what your coverage is for "outpatient physical therapy."
        </p>
      </section>

      <hr class="border-sage-100">

      <section>
        <h2 class="font-display text-3xl md:text-4xl font-light tracking-tightish text-ink mb-4">
          fees
        </h2>
        <ul class="mb-6 space-y-2 text-ink-soft">
          <li class="flex justify-between border-b border-sage-100 pb-2">
            <span>90 min evaluation</span>
            <span class="font-sans tabular-nums">$405</span>
          </li>
          <li class="flex justify-between border-b border-sage-100 pb-2">
            <span>55 min treatment</span>
            <span class="font-sans tabular-nums">$220</span>
          </li>
        </ul>
        <h3 class="font-display text-xl md:text-2xl font-normal text-ink mt-6 mb-3">
          accessibility rates
        </h3>
        <p class="text-ink-soft leading-relaxed">
          At Mariposa Wellness we understand the exceptional cost of medical
          care especially for folks looking to find solutions for health and
          healing outside of the traditional medical model. Because of this we
          keep 15% of our schedule available for folks needing treatment but
          unable to pay the full cost. If you are interested this option
          please reach out.
        </p>
      </section>

      <hr class="border-sage-100">

      <section>
        <h2 class="font-display text-3xl md:text-4xl font-light tracking-tightish text-ink mb-4">
          cancellation policy
        </h2>
        <p class="text-ink-soft leading-relaxed">
          Cancellations must be received within 48hrs of the scheduled
          appointment. The full session amount will be charged for
          cancellations received later than 48hrs.
        </p>
      </section>
    </div>
  </main>` })}`;
}, "/Users/pawanbenjamin/mari/src/pages/faq.astro");

const $$file = "/Users/pawanbenjamin/mari/src/pages/faq.astro";
const $$url = "/faq";

const _page5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faq,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b, _page3 as c, _page4 as d, _page5 as e };
