import{o as M,i as s,p as e,b as P,t as R}from"./index-B_wNie0a.js";var Y=R(`<div><h2 class="fw-bold mb-4">Customize</h2><p>Assuming you're using a package manager like npm, you’ll have a file structure that looks like this:</p><pre><code class=language-bash></code></pre><p>In your <code>custom.scss</code>, you’ll load Bootstrap’s source Sass files with <code>@use</code>. You have two options: include all of Bootstrap, or pick the parts you need.</p><pre><code class=language-css></code></pre><pre><code class=language-css></code></pre><p>By default, <code></code> inherits its style from Bootstrap’s CSS variables (form controls, menus and chips), so anything you change in Bootstrap automatically changes <code></code> style as well.</p><p>The validation states that <code></code> styles can be configured the same way as Bootstrap’s <code>$validation-states</code>:</p><pre><code class=language-css></code></pre><p>Bootstrap 6 writes CSS custom properties without the <code>bs-</code> prefix in its Sass source and adds the prefix at build time with PostCSS. <code></code> follows the same convention: its Sass output is unprefixed (matching Bootstrap compiled from Sass), while the CSS in <code>dist/</code> is prefixed (matching <code>bootstrap.min.css</code>). If you prefix your compiled Bootstrap CSS with <code>postcss-prefix-custom-properties</code>, run <code></code> through it as well.</p><p>Read more about customizing Bootstrap styles at <a class=text-break href=https://getbootstrap.com/docs/6.0/customize/sass/ target=_blank>https://getbootstrap.com/docs/6.0/customize/sass/</a>.`);const q=`your-project/
├── scss/
│   └── custom.scss
└── node_modules/
│   └── bootstrap/
│       ├── js/
│       └── scss/
│   └── ${e.name}/
│       ├── dist/
│       └── scss/
└── index.html`,D=`// Custom.scss
// Option A: Include all of Bootstrap

// Override any tokens with \`@use ... with ()\`. Only the keys you change need to be listed.
@use "../node_modules/bootstrap/scss/bootstrap" with (
  $root-tokens: (
    --border-radius: .25rem,
  ),
);
@use "../node_modules/${e.name}/scss/${e.name}";

// Then add additional custom code here`,E=`// Custom.scss
// Option B: Include parts of Bootstrap

// 1. Include root first (configuration, colors, tokens, and CSS layers)
@use "../node_modules/bootstrap/scss/root";

// 2. Include any other partials as needed
@use "../node_modules/bootstrap/scss/content";
@use "../node_modules/bootstrap/scss/layout";
@use "../node_modules/bootstrap/scss/forms";
@use "../node_modules/bootstrap/scss/buttons";

// 3. Components (${e.name} needs forms, menu and chip)
@use "../node_modules/bootstrap/scss/menu";
@use "../node_modules/bootstrap/scss/chip";
// ...

// 4. Helpers and utilities
@use "../node_modules/bootstrap/scss/helpers";
@use "../node_modules/bootstrap/scss/utilities/api";

// 5. Include ${e.name}
@use "../node_modules/${e.name}/scss/${e.name}";

// 6. Add additional custom code here`,F=`@use "../node_modules/${e.name}/scss/${e.name}" with (
  $validation-states: (
    "valid": "success",
    "invalid": "danger",
    "warning": "warning",
  ),
);`;function J(){return M(()=>{P.highlightAll()}),(()=>{var o=Y(),u=o.firstChild,p=u.nextSibling,t=p.nextSibling,m=t.firstChild,h=t.nextSibling,i=h.nextSibling,g=i.firstChild,n=i.nextSibling,b=n.firstChild,l=n.nextSibling,_=l.firstChild,a=_.nextSibling,$=a.nextSibling,S=$.nextSibling,d=l.nextSibling,f=d.firstChild,x=f.nextSibling,c=d.nextSibling,y=c.firstChild,C=c.nextSibling,w=C.firstChild,B=w.nextSibling,v=B.nextSibling,r=v.nextSibling,k=r.nextSibling,z=k.nextSibling,I=z.nextSibling,A=I.nextSibling,O=A.nextSibling,j=O.nextSibling,T=j.nextSibling,H=T.nextSibling;return s(m,q),s(g,D),s(b,E),s(a,()=>e.name),s(S,()=>e.name),s(x,()=>e.name),s(y,F),s(r,()=>e.name),s(H,()=>e.name),o})()}export{J as default};
