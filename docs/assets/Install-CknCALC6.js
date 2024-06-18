import{o as O,i as t,t as D,p as e,b as G}from"./index-CGV8CO-b.js";var H=D('<div><h2 class="fw-bold mb-4">Install</h2><h5>Install from npm:</h5><ol><li><p>Run the following command in the terminal:</p><pre><code class=language-bash></code></pre></li><li><p>After installation, you can import the library into your project as follows:</p><pre><code class=language-javascript></code></pre></li><li><p>Or, since it also comes with an IIFE bundle, you can insert it directly into your HTML:</p><pre><code class=language-html></code></pre></li></ol><h5>Install from cdn:</h5><ol><li><p>Add the following script in the <code>&lt;head&gt;</code> tag of your HTML:</p><pre><code class=language-html></code></pre><p>Example:</p><pre><code class=language-html>');function L(){const l=`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/${e.name}@${e.version}/dist/${e.name}.min.css">`,i=`<script src="https://cdn.jsdelivr.net/npm/${e.name}@${e.version}/dist/${e.name}.min.js"><\/script>`,r=`npm install ${e.name}`,c=`import '${e.name}/dist/${e.name}.css'
import ${e.libName} from '${e.name}'`,d=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Example</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@${e.devDependencies.bootstrap}/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="node_modules/${e.name}/dist/${e.name}.min.css">
    <script src="node_modules/${e.name}/dist/${e.name}.min.js"><\/script>
  </head>
  <body>
    <select id="example" class="form-select">
      <option value="apple">Apple</option>
      <option value="banana">Banana</option>
      <option value="grape">Grape</option>
      <option value="kiwi">Kiwi</option>
      <option value="orange">Orange</option>
    </select>
    <script>
      const example = new ${e.libName}(document.getElementById('example'))
    <\/script>
  </body>
</html>`,m=`${l}
${i}`,h=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Example</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@${e.devDependencies.bootstrap}/dist/css/bootstrap.min.css">
    ${l}
    ${i}
  </head>
  <body>
    <select id="example" class="form-select">
      <option value="apple">Apple</option>
      <option value="banana">Banana</option>
      <option value="grape">Grape</option>
      <option value="kiwi">Kiwi</option>
      <option value="orange">Orange</option>
    </select>
    <script>
      const example = new ${e.libName}(document.getElementById('example'))
    <\/script>
  </body>
</html>`;return O(()=>{G.highlightAll()}),(()=>{var n=H(),$=n.firstChild,g=$.nextSibling,o=g.nextSibling,s=o.firstChild,b=s.firstChild,f=b.nextSibling,u=f.firstChild,a=s.nextSibling,_=a.firstChild,v=_.nextSibling,x=v.firstChild,y=a.nextSibling,w=y.firstChild,C=w.nextSibling,S=C.firstChild,I=o.nextSibling,j=I.nextSibling,k=j.firstChild,E=k.firstChild,p=E.nextSibling,A=p.firstChild,B=p.nextSibling,M=B.nextSibling,N=M.firstChild;return t(u,r),t(x,c),t(S,d),t(A,m),t(N,h),n})()}export{L as default};
