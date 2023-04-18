import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, s as spreadAttributes, u as unescapeHTML, d as renderComponent, m as maybeRenderHead, e as renderHead, f as renderSlot } from '../astro.df3af42f.mjs';
/* empty css                           *//* empty css                                *//* empty css                              *//* empty css                             */import { Cloudinary } from '@cloudinary/url-gen';
/* empty css                           *//* empty css                           *//* empty css                         */
const $$Astro$i = createAstro();
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

const $$Astro$h = createAstro();
const $$OpenGraphBasicTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}>
<meta property="og:type"${addAttribute(openGraph.basic.type, "content")}>
<meta property="og:image"${addAttribute(openGraph.basic.image, "content")}>
<meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/Users/pawanbenjamin/mari/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro");

const $$Astro$g = createAstro();
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

const $$Astro$f = createAstro();
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

const $$Astro$e = createAstro();
const $$ExtendedTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}
${props.extend.meta?.map(({ content, httpEquiv, name, property }) => renderTemplate`<meta${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(name, "name")}${addAttribute(property, "property")}>`)}`;
}, "/Users/pawanbenjamin/mari/node_modules/astro-seo/src/components/ExtendedTags.astro");

const $$Astro$d = createAstro();
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

const $$Astro$c = createAstro();
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

const $$Astro$b = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead($$result)}<footer class="astro-SZ7XMLTE">
  <a href="/" class="astro-SZ7XMLTE"><span class="astro-SZ7XMLTE">home</span></a>
  <a href="/about" class="astro-SZ7XMLTE"><span class="astro-SZ7XMLTE">about</span></a>
  <a href="/treatments" class="astro-SZ7XMLTE"><span class="astro-SZ7XMLTE">treatments</span></a>
  <a href="/services" class="astro-SZ7XMLTE"><span class="astro-SZ7XMLTE">services</span></a>
  <a href="/faq" class="astro-SZ7XMLTE"><span class="astro-SZ7XMLTE">faq</span></a>
  <a href="/contact" class="astro-SZ7XMLTE"><span class="astro-SZ7XMLTE">contact</span></a>
</footer>`;
}, "/Users/pawanbenjamin/mari/src/components/Footer.astro");

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Astro$a = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", '<header class="astro-3EF6KSR2">\n  <div id="overlaid-menu" class="hidden astro-3EF6KSR2">\n    <ul class="astro-3EF6KSR2">\n      <a href="/" class="astro-3EF6KSR2"><li class="astro-3EF6KSR2"><h2 class="astro-3EF6KSR2">home</h2></li></a>\n      <a href="/about" class="astro-3EF6KSR2"> <li class="astro-3EF6KSR2"><h2 class="astro-3EF6KSR2">about</h2></li></a>\n      <a href="/services" class="astro-3EF6KSR2"> <li class="astro-3EF6KSR2"><h2 class="astro-3EF6KSR2">services</h2></li></a>\n      <a href="/treatments" class="astro-3EF6KSR2"> <li class="astro-3EF6KSR2"><h2 class="astro-3EF6KSR2">treatments</h2></li></a>\n      <a href="/faq" class="astro-3EF6KSR2"> <li class="astro-3EF6KSR2"><h2 class="astro-3EF6KSR2">faq</h2></li></a>\n      <a href="/contact" class="astro-3EF6KSR2"> <li class="astro-3EF6KSR2"><h2 class="astro-3EF6KSR2">contact</h2></li></a>\n    </ul>\n  </div>\n  <div id="burger-box" class="astro-3EF6KSR2">\n    <label for="checkbox" class="hamburger-menu astro-3EF6KSR2">\n      <input type="checkbox" class="astro-3EF6KSR2">\n    </label>\n  </div>\n\n  <a href="/contact" class="astro-3EF6KSR2"><span class="astro-3EF6KSR2">contact</span></a>\n</header>\n\n<div id="name" class="astro-3EF6KSR2">\n  <h1 class="astro-3EF6KSR2">mariposa</h1>\n  <h1 class="astro-3EF6KSR2">wellness</h1>\n</div>\n\n\n<script defer>\n  const name = document.querySelector("#name");\n  function fadeOutOnScroll(element) {\n    if (!element) {\n      return;\n    }\n\n    let distanceToTop =\n      window.pageYOffset + element.getBoundingClientRect().top;\n\n    let elementHeight = element.offsetHeight;\n    let scrollTop = document.documentElement.scrollTop;\n\n    console.log({ distanceToTop, elementHeight, scrollTop });\n\n    let opacity = 1;\n\n    if (scrollTop > distanceToTop) {\n      opacity = 1 - (scrollTop - distanceToTop) / elementHeight;\n    }\n\n    if (opacity >= 0) {\n      element.style.opacity = opacity;\n    }\n  }\n  function scrollHandler() {\n    fadeOutOnScroll(name);\n  }\n\n  window.addEventListener("scroll", scrollHandler);\n\n  // visibility logic\n\n  const menu = document.querySelector("#overlaid-menu");\n  const contact = document.querySelector("span");\n  const burger = document.querySelector("input");\n  burger.addEventListener("click", (e) => {\n    menu.classList.toggle("fade-in");\n    menu.classList.toggle("hidden");\n    // menu.classList.toggle("fade-out");\n    contact.classList.toggle("hidden");\n    console.log({ menu: menu.classList, contact: contact.classList });\n  });\n<\/script>'])), maybeRenderHead($$result));
}, "/Users/pawanbenjamin/mari/src/components/Header.astro");

const $$Astro$9 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>

    ${renderComponent($$result, "SEO", $$SEO, { "title": title, "description": "Integrative Manual Physical Therapy and Pelvic Health", "openGraph": {
    basic: {
      title: "Mariposa Wellness LLC",
      type: "Health Care Physical Therapy Pelvic Floor",
      image: "https://user-images.githubusercontent.com/5182256/131216951-8f74f425-f775-463d-a11b-0e01ad9fce8d.png"
    }
  } })}
  ${renderHead($$result)}</head>
  <body>
    ${renderComponent($$result, "Header", $$Header, {})}
    ${renderSlot($$result, $$slots["default"])}
    ${renderComponent($$result, "Footer", $$Footer, {})}
    
  </body>
</html>`;
}, "/Users/pawanbenjamin/mari/src/layouts/Layout.astro");

const $$Astro$8 = createAstro();
const $$PageHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$PageHeader;
  const { title, desc, prev, next } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<header id="sub-nav" class="astro-WU5DJ4RX">
  <h3 class="astro-WU5DJ4RX">${title}<br class="astro-WU5DJ4RX"> ${desc}</h3>
  <nav class="astro-WU5DJ4RX">
    <div class="astro-WU5DJ4RX">
      <a${addAttribute(`/${prev === "home" ? "" : prev}`, "href")} class="astro-WU5DJ4RX"><span class="astro-WU5DJ4RX"> ← ${prev}</span></a>
    </div>
    <div class="astro-WU5DJ4RX">
      <a${addAttribute(`/${next === "home" ? "" : next}`, "href")} class="astro-WU5DJ4RX"><span class="astro-WU5DJ4RX">${next} →</span></a>
    </div>
  </nav>
</header>`;
}, "/Users/pawanbenjamin/mari/src/components/PageHeader.astro");

const $$Astro$7 = createAstro();
const $$CldImage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$CldImage;
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dmstif28x"
    }
  });
  const { src, ...props } = Astro2.props;
  let cldSrc = cld.image(src).format("auto");
  if (src.startsWith("https://")) {
    cldSrc.setDeliveryType("fetch");
  }
  return renderTemplate`${maybeRenderHead($$result)}<img${addAttribute(cldSrc.toURL(), "src")} loading="lazy"${spreadAttributes(props)}>`;
}, "/Users/pawanbenjamin/mari/src/components/CldImage.astro");

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$6 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '\n\n\n<script defer>\n  const subNav = document.querySelector("#sub-nav");\n  function fadeOutOnScroll(element) {\n    if (!element) {\n      return;\n    }\n\n    let distanceToTop =\n      window.pageYOffset + element.getBoundingClientRect().top;\n\n    let elementHeight = element.offsetHeight;\n    let scrollTop = document.documentElement.scrollTop;\n\n    console.log({ distanceToTop, elementHeight, scrollTop });\n\n    let opacity = 1;\n\n    if (scrollTop > distanceToTop) {\n      opacity = 1 - (scrollTop - distanceToTop) / elementHeight;\n    }\n\n    if (opacity >= 0) {\n      element.style.opacity = opacity;\n    }\n  }\n  function scrollHandler() {\n    fadeOutOnScroll(subNav);\n  }\n\n  window.addEventListener("scroll", scrollHandler);\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Mariposa Wellness", "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Integrative Manual Therapy", "desc": " & Pelvic Health", "next": "about", "prev": "services", "class": "astro-J7PV25F6" })}${maybeRenderHead($$result2)}<main class="astro-J7PV25F6">
    <figure class="astro-J7PV25F6">
      ${renderComponent($$result2, "CldImage", $$CldImage, { "src": "mari/eight_lmmlwq.jpg", "alt": "Marisa with Patient", "width": "auto", "height": "auto", "class": "astro-J7PV25F6" })}
      <!-- <img src={remoteImage} alt="Marisa with Patient" /> -->
      <figcaption id="main-heading" class="astro-J7PV25F6">
        <h1 class="astro-J7PV25F6">
          <span class="white astro-J7PV25F6">mariposa</span>
          <br class="astro-J7PV25F6"><span class="astro-J7PV25F6">wellness</span>
        </h1>
      </figcaption>
    </figure>

    <section class="astro-J7PV25F6">
      <p class="astro-J7PV25F6">
        At Mariposa Wellness I combine a variety of manual medicine modalities
        to treat the whole person
      </p>
      <p class="astro-J7PV25F6">
        With an expertise in Pelvic Health and almost 20 years experience as a
        physical therapist my goal is to provide treatment to enhance your
        overall movement and function while empowering you with knowledge
        regarding your body and particular condition and techniques for self
        care.
      </p>
    </section>

    <section id="ask" class="astro-J7PV25F6">
      <a href="/contact" class="astro-J7PV25F6"><button class="astro-J7PV25F6">I would like to become a new patient.</button></a>
      <a href="https://bchwbooking.clientsecure.me/" class="astro-J7PV25F6"><button class="astro-J7PV25F6">I would like to book an appointment.</button></a>
    </section>
  </main>` }));
}, "/Users/pawanbenjamin/mari/src/pages/index.astro");

const $$file$5 = "/Users/pawanbenjamin/mari/src/pages/index.astro";
const $$url$5 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro();
const $$Treatments = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Treatments;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "treatments", "class": "astro-V3XG6E4Z" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "treatment", "desc": "methods", "next": "faq", "prev": "services", "class": "astro-V3XG6E4Z" })}${maybeRenderHead($$result2)}<main class="astro-V3XG6E4Z">
    <div class="content astro-V3XG6E4Z">
      <section class="bp astro-V3XG6E4Z">
        <h2 class="astro-V3XG6E4Z">core synchronism</h2>
        <p class="astro-V3XG6E4Z">
          Core Synchronism is a system of hand medicine designed to assist
          nature in establishing harmony with all parts of the organism. It is
          not pathology specific. It is a mechanical system designed to restore
          balance, which results in activating an individual’s self-healing
          ability
        </p>
        <a href="http://coresynchronism.org/" class="astro-V3XG6E4Z"><span class="astro-V3XG6E4Z">more info</span></a>
      </section>
      <section class="bp astro-V3XG6E4Z">
        <h2 class="astro-V3XG6E4Z">visceral manipulation</h2>
        <p class="astro-V3XG6E4Z">
          Visceral Manipulation uses an in depth understanding of the anatomy in
          order to address fascial restrictions around the organ systems.
          Visceral manipulation can be utilized to treat a number of different
          symptoms from chronic constipation, bowel/bladder dysfunction, painful
          periods, musculoskeletal pain, infertility and more.
        </p>
        <a href="https://www.barralinstitute.com/therapies/index.php" class="astro-V3XG6E4Z"><span class="astro-V3XG6E4Z">Barral Institute info</span></a>
      </section>
      <section class="bp astro-V3XG6E4Z">
        ${renderComponent($$result2, "CldImage", $$CldImage, { "src": "mari/stom2_u3amcw.jpg", "width": "auto", "height": "auto", "alt": "Marisa and Patient", "class": "astro-V3XG6E4Z" })}
        <h2 class="astro-V3XG6E4Z">pelvic floor physical therapy</h2>

        <p class="astro-V3XG6E4Z">
          Pelvic floor physical therapy address the whole body with a deeper
          understanding of the pelvic floor muscles, nerves, organs, and
          function. As a pelvic floor physical therapist my goal is to empower
          each person to understand how their pelvic floor functions and to
          support them reaching their goals. The pelvic floor is a truly special
          area of the body because it is the only area in the body where our
          skeletal muscle have a direct impact on our organs (bowel, bladder,
          uterus, prostate). Therefor dysfunction at the pelvic floor can lead
          to bowel/bladder incontinence, retention, constipation, sexual
          dysfunction, pain, and more. Also, because the pelvic floor is one of
          our core muscles in can often be a missing link in persistent back
          pain, sciatica, and hip pain.
        </p>
      </section>
      <section class="bp astro-V3XG6E4Z">
        ${renderComponent($$result2, "CldImage", $$CldImage, { "src": "mari/four-1_fmzwof.jpg", "width": "auto", "height": "auto", "alt": "Marisa and Patient", "class": "astro-V3XG6E4Z" })}
        <h2 class="astro-V3XG6E4Z">myofascial release</h2>
        <p class="astro-V3XG6E4Z">
          Myofascial release techniques address restrictions in the body's
          connective tissue matrix. Connective tissue, or fascia, is a network
          of tissue that connects our muscles, organs, and bones. Thickening of
          the fascia restricts motion in tissue which can lead to pain and
          dysfunction. Myofascial release uses a variety of tissue manipulation
          techniques to promote mobility in the fascia to decrease pain and
          improve movement.
        </p>
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

const $$Astro$4 = createAstro();
const $$ServiceBlock = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ServiceBlock;
  const { title, desc, treatmentList, imageUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="main astro-2LFPBJAS">
  ${imageUrl !== "" && renderTemplate`${renderComponent($$result, "CldImage", $$CldImage, { "src": imageUrl, "alt": title, "height": "auto", "width": "auto", "class": "astro-2LFPBJAS" })}`}
  <details class="astro-2LFPBJAS">
    <summary class="astro-2LFPBJAS">
      ${title}
    </summary>
    <p class="astro-2LFPBJAS">
      ${desc}
      </p><details class="astro-2LFPBJAS">
        ${title === "community education classes" ? renderTemplate`<summary class="astro-2LFPBJAS">class topics include</summary>` : renderTemplate`<summary class="astro-2LFPBJAS">common conditions treated</summary>`}

        <ul class="astro-2LFPBJAS">
          ${treatmentList !== void 0 && treatmentList.map((treatment) => {
    return renderTemplate`<li class="astro-2LFPBJAS">${treatment}</li>`;
  })}
        </ul>
      </details>
    </details>
  </div>
  <hr class="astro-2LFPBJAS">`;
}, "/Users/pawanbenjamin/mari/src/components/ServiceBlock.astro");

const $$Astro$3 = createAstro();
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "services" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "", "desc": "services", "next": "treatments", "prev": "about" })}${maybeRenderHead($$result2)}<main>
    ${renderComponent($$result2, "ServiceBlock", $$ServiceBlock, { "title": "prenatal postpartum", "desc": "During pregnancy and in the postpartum phase, changes in hormones, the alignment of the pregnant person (and fetus), and the birthing process itself can potentially cause muscle, joint, nerve, bladder and bowel problems. At Mariposa wellness our goals for treatment during pregnancy and postpartum are to improve fetal and parent alignment to allow for greater ease with labor and delivery, and help accelerate the new parent\u2019s recovery after childbirth.", "treatmentList": list1, "imageUrl": "mari/looking-at-baby_ple4yn.jpg" })}
    ${renderComponent($$result2, "ServiceBlock", $$ServiceBlock, { "title": "gender inclusive pelvic health", "desc": "At Mariposa wellness we are dedicated to inclusive rehabilitation for patients across the gender spectrum.", "treatmentList": list2, "imageUrl": "mari/gender_ymeb87.jpg" })}
    ${renderComponent($$result2, "ServiceBlock", $$ServiceBlock, { "title": "female pevlic health", "desc": "At Mariposa Wellness we specialize in the treatment of the following conditions specific to a womans uro-gynecological, sexual, and colo-rectal function, pre-and post-pregnancy, and chronic abdominal and pelvic pain syndromes. As Licensed Physical Therapists with advanced training in pelvic floor rehabilitation, we can help to normalize the myofascial tissue texture around the body, promote pelvic alignment, and restore normal functioning in the organs of the abdomino-pelvic area.", "treatmentList": list3, "imageUrl": "mari/laugh_lsplso.jpg" })}
    ${renderComponent($$result2, "ServiceBlock", $$ServiceBlock, { "title": "male pelvic health", "desc": "Our specialized Pelvic Floor Physical Therapists also treat conditions that are specific to the health of male urological and sexual function. For men, fascial restrictions in the pelvic floor and pelvic girdle can cause sexual dysfunction, difficulty with urination and bowel movements, or pelvic pain. Fascial restrictions in the male pelvis are often caused by poor postural alignment or scarring from abdominal or pelvic surgeries. Our Pelvic Floor Physical Therapists will help to reduce adhered scar tissue restrictions, and will also help to improve flexibility and normalize function to the urinary and reproductive systems.", "treatmentList": list4, "imageUrl": "mari/seven_zacrld.jpg" })}
    ${renderComponent($$result2, "ServiceBlock", $$ServiceBlock, { "title": "chronic pain", "desc": "Chronic pain, like neck or back pain, can be caused by poor posture, accidents, falls, emotional trauma, surgeries and disease. It can significantly impact a person\u2019s life and function and can be crippling to the mind, body and spirit. This is why it is extremely important to address these conditions holistically. At Mariposa Wellness we use integrative manual therapy techniques including Core Synchronism, Visceral Manipulation, and Myofascial Release to effectively treat persistent pain, release blocked emotional tension and improve postural and functionality in the body.", "treatmentList": list5, "imageUrl": "mari/eight_lmmlwq.jpg" })}
    ${renderComponent($$result2, "ServiceBlock", $$ServiceBlock, { "title": "community education classes", "desc": "If you are interested in having a physical therapist come out and talk with your new parents group please email admin@mariposawellnessllc.com", "treatmentList": list6, "imageUrl": "" })}
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

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '\n\n<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"><\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "contact", "class": "astro-UW5KDBXL" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "", "desc": "contact", "next": "home", "prev": "faq", "class": "astro-UW5KDBXL" })}${maybeRenderHead($$result2)}<main class="astro-UW5KDBXL">
    <div class="container astro-UW5KDBXL">
      <section class="returning astro-UW5KDBXL">
        <h3 class="astro-UW5KDBXL">returning patients</h3>
        <hr class="astro-UW5KDBXL">
        <a href="https://bchwbooking.clientsecure.me/" class="astro-UW5KDBXL">
          <button class="astro-UW5KDBXL">book appointment</button></a>
      </section>
      <section class="new astro-UW5KDBXL">
        <h3 class="astro-UW5KDBXL">new patients</h3>
        <hr class="astro-UW5KDBXL">
        <p class="astro-UW5KDBXL">
          Please fill out the form below and we will get back to you as soon as
          possible!
        </p>

        <form id="contact-form" class="astro-UW5KDBXL">
          <label for="name" class="astro-UW5KDBXL"></label>
          <input type="text" name="name" placeholder="name" class="astro-UW5KDBXL">
          <label for="email" class="astro-UW5KDBXL"></label>
          <input type="email" name="email" placeholder="email" class="astro-UW5KDBXL">
          <label for="subject" class="astro-UW5KDBXL"></label>
          <input type="text" name="subject" placeholder="subject" class="astro-UW5KDBXL">
          <label for="message" class="astro-UW5KDBXL"></label>
          <input type="text" name="message" placeholder="message" class="astro-UW5KDBXL">
          <button class="sub-but astro-UW5KDBXL" type="submit">submit</button>
        </form>
      </section>
    </div>
  </main>` }));
}, "/Users/pawanbenjamin/mari/src/pages/contact.astro");

const $$file$2 = "/Users/pawanbenjamin/mari/src/pages/contact.astro";
const $$url$2 = "/contact";

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate(_a || (_a = __template(["", '\n\n<script defer>\n  // const subNav = document.querySelector("#sub-nav");\n  // function fadeOutOnScroll(element) {\n  //   if (!element) {\n  //     return;\n  //   }\n\n  //   let distanceToTop =\n  //     window.pageYOffset + element.getBoundingClientRect().top;\n\n  //   let elementHeight = element.offsetHeight;\n  //   let scrollTop = document.documentElement.scrollTop;\n\n  //   console.log({ distanceToTop, elementHeight, scrollTop });\n\n  //   let opacity = 1;\n\n  //   if (scrollTop > distanceToTop) {\n  //     opacity = 1 - (scrollTop - distanceToTop) / elementHeight;\n  //   }\n\n  //   if (opacity >= 0) {\n  //     element.style.opacity = opacity;\n  //   }\n  // }\n  // function scrollHandler() {\n  //   fadeOutOnScroll(subNav);\n  // }\n\n  // window.addEventListener("scroll", scrollHandler);\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "About Me", "class": "astro-KH7BTL4R" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Marisa", "desc": "she/ella", "next": "services", "prev": "home", "class": "astro-KH7BTL4R" })}${maybeRenderHead($$result2)}<main class="astro-KH7BTL4R">
    <figure class="astro-KH7BTL4R">
      ${renderComponent($$result2, "CldImage", $$CldImage, { "src": "mari/mari-karuna_gnlu1y.webp", "alt": "mari and k", "height": "auto", "width": "auto", "class": "astro-KH7BTL4R" })}
      <figcaption id="main-heading" class="astro-KH7BTL4R">
        <h1 class="astro-KH7BTL4R">
          <span class="white astro-KH7BTL4R">marisa</span>
          <!-- <br /><span>she/ella</span> -->
        </h1>
      </figcaption>
    </figure>

    <section class="astro-KH7BTL4R">
      <p class="astro-KH7BTL4R">
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
        session. He was diligent with his exercises and now, over 30 years later
        he is active, strong, and never needed surgery! This was the start of my
        curiosity, deep awe, and respect for the body's innate ability to heal.
      </p>
      <div class="quote astro-KH7BTL4R">
        <h4 class="astro-KH7BTL4R">
          "This was the start of my curiosity, deep awe, and respect for the
          body's innate ability to heal."
        </h4>
      </div>

      <p class="astro-KH7BTL4R">
        As a college student I studied physical therapy at the University of
        Connecticut graduating in 2004. At school I was passionate about
        advocating for women’s health and women’s right to choose and be
        informed about all aspects of their health. Also, as one of the only
        Latina’s and POC folks in the physical therapy and allied health
        department, I was acutely aware of the disparities in health research
        and access to healthcare among BIPOC communities. I completed my
        graduation thesis on Psychosocial Barriers to Physical Activity in
        Puerto Rican Women and published my research in the Journal of Strength
        and Conditioning. I also gave lectures at local conferences on the
        importance of healthcare practitioners recognizing the racial and ethic
        differences when developing treatment plans.
      </p>
      <!-- <div class="quote">
        <h4>
          "...our main mission(s) was not only to provide exceptional care for
          all persons with pelvic floor dysfunction but also to empower the
          community..."
        </h4>
      </div> -->
      <p class="astro-KH7BTL4R">
        Knowing that I wanted to focus my career in pelvic health, I completed
        the course work through the Herman & Wallace Pelvic Rehabilitation
        Institute and began a fulfilling career as a pelvic health physical
        therapist. I have worked at the National Rehabilitation Institute, Kirk
        Center for Health Living in the Chicagoland region, a specialty clinic
        for pelvic floor dysfunction, and in 2012 I was the co-founder and
        co-owner of Body Connect Health and Wellness in Washington DC. At Body
        Connect one of our main missions was not only to provide exceptional
        care for all persons with pelvic floor dysfunction but also to empower
        the community through education classes on topics ranging from work
        ergonomics, pre and postpartum wellness, to sexual health throughout the
        lifespan.
      </p>
    </section>

    <!-- <section id="ask">
      <button>I would like to become a new patient.</button>
      <button>I would like to book an appointment.</button>
    </section> -->
  </main>` }));
}, "/Users/pawanbenjamin/mari/src/pages/about.astro");

const $$file$1 = "/Users/pawanbenjamin/mari/src/pages/about.astro";
const $$url$1 = "/about";

const _page4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Faq = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Faq;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "FAQ", "class": "astro-6KMWGHHU" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "frequently", "desc": "asked questions", "next": "contact", "prev": "treatments", "class": "astro-6KMWGHHU" })}${maybeRenderHead($$result2)}<main class="astro-6KMWGHHU">
    <div class="container astro-6KMWGHHU">
      <section class="bp astro-6KMWGHHU">
        <h2 class="astro-6KMWGHHU">insurance</h2>
        <p class="astro-6KMWGHHU">
          Mariposa Wellness is an out-of-network outpatient physical therapy
          provider. This means that the client is responsible for paying the
          full fee at the time of service. We will issue a superbill that can be
          submitted by the client to their insurance for direct reimbursement.
          Each insurance company and plan is different. We recommend contacting
          your insurance company directly to find out what your coverage is for
          “outpatient physical therapy.”
        </p>
      </section>
      <section class="bp astro-6KMWGHHU">
        <h2 class="astro-6KMWGHHU">fees</h2>
        <ul id="fee" class="astro-6KMWGHHU">
          <li class="astro-6KMWGHHU">90 Min Evaluation: $405</li>
          <li class="astro-6KMWGHHU">55 minute treatment: $220</li>
        </ul>
        <p class="astro-6KMWGHHU">
          </p><h4 class="astro-6KMWGHHU">accessibility rates</h4>
          <p class="astro-6KMWGHHU">
            At Mariposa Wellness we understand the exceptional cost of medical
            care especially for folks looking to find solutions for health and
            healing outside of the traditional medical model. Because of this we
            keep 15% of our schedule available for folks needing treatment but
            unable to pay the full cost. If you are interested this option
            please
          </p>
        
      </section>
      <section class="bp astro-6KMWGHHU">
        <h2 class="astro-6KMWGHHU">cancellation policy</h2>
        <p class="astro-6KMWGHHU">
          Cancellations must be received with in 48hrs of the scheduled
          appointment. The full session amount will be charged for cancellations
          received later than 48hrs.
        </p>
      </section>
      <section class="bp astro-6KMWGHHU">
        <h2 class="astro-6KMWGHHU">medicare</h2>
        <p class="astro-6KMWGHHU">
          Mariposa Wellness is not a participating provider with medicare. If
          you are a medicare recipient and interested in receiving our services,
          we can see you as a “wellness” client. This means you will not be
          issued a superbill for submitting to insurance.
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
