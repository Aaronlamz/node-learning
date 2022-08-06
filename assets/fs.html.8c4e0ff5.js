import{r as p,o,c,a as n,d as e,F as l,b as s,e as t}from"./app.24464b52.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const r={},u=n("h1",{id:"\u6587\u4EF6\u7CFB\u7EDF",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6587\u4EF6\u7CFB\u7EDF","aria-hidden":"true"},"#"),s(" \u6587\u4EF6\u7CFB\u7EDF")],-1),d=n("p",null,"\u6587\u4EF6\u7CFB\u7EDF\uFF08File System\uFF09\u662F Node \u4E2D\u4F7F\u7528\u6700\u4E3A\u9891\u7E41\u7684\u6A21\u5757\u4E4B\u4E00\uFF0C\u8BE5\u6A21\u5757\u63D0\u4F9B\u4E86\u8BFB\u5199\u6587\u4EF6\u7684\u80FD\u529B\uFF0C\u662F\u501F\u52A9\u4E8E\u5E95\u5C42\u7684 libuv \u7684 C++ API \u6765\u5B9E\u73B0\u7684\u3002",-1),k=n("p",null,"\u524D\u7AEF\u5E38\u89C1\u7684\u6784\u5EFA\u5DE5\u5177\uFF0C\u6BD4\u5982 Webpack\u3001Gulp \u7B49\uFF0C\u90FD\u4F1A\u4F7F\u7528\u6587\u4EF6\u7CFB\u7EDF\u6A21\u5757\u6765\u8BFB\u53D6\u6587\u4EF6\uFF0C\u5E76\u4E14\u628A\u6587\u4EF6\u5185\u5BB9\u8F93\u51FA\u5230\u78C1\u76D8\u4E0A\u3002",-1),b=n("h2",{id:"\u6A21\u5757\u4F7F\u7528",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6A21\u5757\u4F7F\u7528","aria-hidden":"true"},"#"),s(" \u6A21\u5757\u4F7F\u7528")],-1),m=s("node:fs \u6A21\u5757\u652F\u6301\u4EE5\u6807\u51C6 "),h={href:"https://www.zhihu.com/question/21048638",target:"_blank",rel:"noopener noreferrer"},f=s("POSIX"),_=s(" \u51FD\u6570\u5EFA\u6A21\u7684\u65B9\u5F0F\u4E0E\u6587\u4EF6\u7CFB\u7EDF\u8FDB\u884C\u4EA4\u4E92\u3002"),g=t(`<p>Node API \u652F\u6301Promise \u5F02\u6B65\u3001\u540C\u6B65\u548C\u56DE\u8C03\u7684\u5F62\u5F0F\u3002\u6765\u770B\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u57FA\u4E8E Node.js 18.4.0 \u7248\u672C ES6 \u7684\u6587\u4EF6\u7CFB\u7EDF\u6A21\u5757</span>
<span class="token comment">// \u57FA\u4E8E promise \u7684 API</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fs <span class="token keyword">from</span> <span class="token string">&#39;node:fs/promises&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \u4F7F\u7528\u56DE\u8C03\u548C\u540C\u6B65\u7684 API\uFF1A</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fs <span class="token keyword">from</span> <span class="token string">&#39;node:fs&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u6240\u6709\u6587\u4EF6\u7CFB\u7EDF\u64CD\u4F5C\u90FD\u5177\u6709\u540C\u6B65\u3001\u56DE\u8C03\u548C\u57FA\u4E8E promise \u7684\u5F62\u5F0F\uFF0C\u5E76\u4E14\u53EF\u4EE5\u4F7F\u7528 CommonJS \u8BED\u6CD5\u548C ES6 \u6A21\u5757\u8FDB\u884C\u8BBF\u95EE\u3002</p><ul><li>Promise \u793A\u4F8B</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> unlink <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;node:fs/promises&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> <span class="token function">unlink</span><span class="token punctuation">(</span><span class="token string">&#39;/tmp/hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// unlink(path) \u5982\u679C path \u6307\u5411\u7B26\u53F7\u94FE\u63A5\uFF0C\u5219\u5220\u9664\u8BE5\u94FE\u63A5\uFF0C\u4F46\u4E0D\u5F71\u54CD\u94FE\u63A5\u6240\u6307\u5411\u7684\u6587\u4EF6\u6216\u76EE\u5F55\u3002 \u5982\u679C path \u6307\u5411\u7684\u6587\u4EF6\u8DEF\u5F84\u4E0D\u662F\u7B26\u53F7\u94FE\u63A5\uFF0C\u5219\u5220\u9664\u6587\u4EF6\u3002</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;successfully deleted /tmp/hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;there was an error:&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>\u56DE\u8C03\u7684\u793A\u4F8B \u56DE\u8C03\u7684\u5F62\u5F0F\u5C06\u5B8C\u6210\u56DE\u8C03\u51FD\u6570\u4F5C\u4E3A\u5176\u6700\u540E\u4E00\u4E2A\u53C2\u6570\uFF0C\u5E76\u5F02\u6B65\u5730\u8C03\u7528\u8BE5\u64CD\u4F5C\u3002 \u4F20\u7ED9\u5B8C\u6210\u56DE\u8C03\u7684\u53C2\u6570\u53D6\u51B3\u4E8E\u65B9\u6CD5\uFF0C\u4F46\u662F\u7B2C\u4E00\u4E2A\u53C2\u6570\u59CB\u7EC8\u4E3A\u5F02\u5E38\u9884\u7559\u3002 \u5982\u679C\u64CD\u4F5C\u6210\u529F\u5B8C\u6210\uFF0C\u5219\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A null \u6216 undefined\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> unlink <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;fs&#39;</span><span class="token punctuation">;</span>

<span class="token function">unlink</span><span class="token punctuation">(</span><span class="token string">&#39;/tmp/hello&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;successfully deleted /tmp/hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>\u540C\u6B65\u7684\u793A\u4F8B \u540C\u6B65\u7684 API \u4F1A\u963B\u6B62 Node.js \u4E8B\u4EF6\u5FAA\u73AF\u548C\u8FDB\u4E00\u6B65\u7684 JavaScript \u6267\u884C\uFF0C\u76F4\u5230\u64CD\u4F5C\u5B8C\u6210\u3002 \u7ACB\u5373\u629B\u51FA\u5F02\u5E38\uFF0C\u53EF\u4EE5\u4F7F\u7528 try\u2026catch \u8FDB\u884C\u5904\u7406\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u5176\u5192\u6CE1\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> unlinkSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;fs&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token function">unlinkSync</span><span class="token punctuation">(</span><span class="token string">&#39;/tmp/hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;successfully deleted /tmp/hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5904\u7406\u9519\u8BEF</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u5E38\u7528-api-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528-api-\u793A\u4F8B" aria-hidden="true">#</a> \u5E38\u7528 API \u793A\u4F8B</h2><blockquote><p>\u4E0B\u9762\u7684\u4F8B\u5B50\u5747\u4F7F\u7528\u540C\u6B65API\u7684\u5F62\u5F0F\uFF0C\u8BF7\u6CE8\u610F\uFF0C\u540C\u6B65API\u7684\u8FD4\u56DE\u503C\u4E3A Promise \u5BF9\u8C61\u3002</p></blockquote><p>1\u3001fs.accessSync(path[, mode])</p><ul><li>path <code>string</code> | <code>Buffer</code> | <code>URL</code></li><li>mode <code>integer</code> \u9ED8\u8BA4\u503C: fs.constants.F_OK</li></ul>`,13),y=s("\u540C\u6B65\u5730\u6D4B\u8BD5\u7528\u6237\u5BF9 path \u6307\u5B9A\u7684\u6587\u4EF6\u6216\u76EE\u5F55\u7684\u6743\u9650\u3002 mode \u53C2\u6570\u662F\u53EF\u9009\u7684\u6574\u6570\uFF0C\u6307\u5B9A\u8981\u6267\u884C\u7684\u53EF\u8BBF\u95EE\u6027\u68C0\u67E5\u3002 mode \u5E94\u8BE5\u662F\u503C fs.constants.F_OK \u6216\u7531 fs.constants.R_OK\u3001fs.constants.W_OK \u548C fs.constants.X_OK \u4E2D\u7684\u4EFB\u4F55\u4E00\u4E2A\uFF08\u4F8B\u5982 fs.constants.W_OK | fs.constants.R_OK\uFF09\u7684\u6309\u4F4D\u6216\u7EC4\u6210\u7684\u63A9\u7801\u3002 \u67E5\u770B"),v={href:"http://nodejs.cn/api/fs.html#file-access-constants",target:"_blank",rel:"noopener noreferrer"},w=s("\u6587\u4EF6\u8BBF\u95EE\u7684\u5E38\u91CF"),x=s("\u4EE5\u83B7\u53D6\u53EF\u80FD\u7684 mode \u503C\u3002"),j=t(`<p>\u5982\u679C\u4EFB\u4F55\u53EF\u8BBF\u95EE\u6027\u68C0\u67E5\u5931\u8D25\uFF0C\u5C06\u629B\u51FA Error\u3002 \u5426\u5219\uFF0C\u8BE5\u65B9\u6CD5\u5C06\u8FD4\u56DE undefined\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> accessSync<span class="token punctuation">,</span> constants <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;fs&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token function">accessSync</span><span class="token punctuation">(</span><span class="token string">&#39;etc/passwd&#39;</span><span class="token punctuation">,</span> constants<span class="token punctuation">.</span><span class="token constant">R_OK</span> <span class="token operator">|</span> constants<span class="token punctuation">.</span><span class="token constant">W_OK</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;can read/write&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;no access!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>2\u3001fs.copyFileSync(src, dest[, flags])</p><ul><li>src <code>string</code> | <code>Buffer</code> | <code>URL</code> \u9700\u8981\u590D\u5236\u7684\u6E90\u6587\u4EF6\u540D\u79F0</li><li>dest <code>string</code> | <code>Buffer</code> | <code>URL</code> \u590D\u5236\u5230\u7684\u76EE\u6807\u6587\u4EF6\u540D\u79F0</li><li>flags <code>integer</code> \u9ED8\u8BA4\u503C: 0 \u7528\u4E8E\u590D\u5236\u64CD\u4F5C\u7684\u4FEE\u9970\u7B26\u3002\u9ED8\u8BA4\u503C\u4E3A 0\uFF0C\u8868\u793A\u4E0D\u4F7F\u7528\u4EFB\u4F55\u4FEE\u9970\u7B26\u3002</li></ul><p>\u540C\u6B65\u5730\u5C06src\u590D\u5236\u5230dest\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5982\u679Cdest\u5DF2\u7ECF\u5B58\u5728\uFF0C\u4F1A\u88AB\u8986\u76D6\u3002\u8FD4\u56DE\u672A\u5B9A\u4E49\u3002Node.js\u5BF9\u590D\u5236\u64CD\u4F5C\u7684\u539F\u5B50\u6027\u4E0D\u505A\u4EFB\u4F55\u4FDD\u8BC1\u3002\u5982\u679C\u5728\u76EE\u6807\u6587\u4EF6\u88AB\u6253\u5F00\u5199\u5165\u540E\u53D1\u751F\u9519\u8BEF\uFF0CNode.js\u5C06\u5C1D\u8BD5\u5220\u9664\u76EE\u6807\u6587\u4EF6\u3002</p><p>mode\u662F\u4E00\u4E2A\u53EF\u9009\u7684\u6574\u6570\uFF0C\u7528\u4E8E\u6307\u5B9A\u590D\u5236\u64CD\u4F5C\u7684\u884C\u4E3A\u3002\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u7531\u4E24\u4E2A\u6216\u591A\u4E2A\u503C\u7684\u4F4D\u6570OR\u7EC4\u6210\u7684\u63A9\u7801\uFF08\u4F8B\u5982\uFF1Afs.constants.COPYFILE_EXCL | fs.constants.COPYFILE_FICLONE\uFF09\u3002</p><p>\u9009\u9879\u5177\u4F53\u8BF4\u660E\uFF1A</p><ul><li>fs.constants.COPYFILE_EXCL\uFF1A\u5982\u679C\u76EE\u6807\u6587\u4EF6\u5DF2\u5B58\u5728\uFF0C\u5219\u629B\u51FA\u9519\u8BEF\u3002</li><li>fs.constants.COPYFILE_FICLONE\uFF1A\u590D\u5236\u64CD\u4F5C\u5C06\u8BD5\u56FE\u521B\u5EFA\u4E00\u4E2Acopy-on-write(\u5199\u5165\u65F6\u590D\u5236\uFF1F)\u7684\u8F6F\u8FDE\u63A5(reflink)\u3002\u5982\u679C\u5E73\u53F0\u4E0D\u652F\u6301copy-on-write\u65B9\u5F0F\uFF0C\u90A3\u4E48\u5C31\u4F1A\u4F7F\u7528\u540E\u5907\u590D\u5236\u673A\u5236\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> copyFileSync<span class="token punctuation">,</span> constants <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;node:fs&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// destination.txt will be created or overwritten by default.</span>
<span class="token function">copyFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;source.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;destination.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;source.txt was copied to destination.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// By using COPYFILE_EXCL, the operation will fail if destination.txt exists.</span>
<span class="token function">copyFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;source.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;destination.txt&#39;</span><span class="token punctuation">,</span> constants<span class="token punctuation">.</span><span class="token constant">COPYFILE_EXCL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>3\u3001fs.cpSync(src, dest[, options])</p><blockquote><p>v16.7.0 \u7248\u672C\u65B0\u589E\u7684 API</p></blockquote><ul><li>src <code>string</code> | <code>Buffer</code> | <code>URL</code> \u9700\u8981\u590D\u5236\u7684\u6E90\u6587\u4EF6\u8DEF\u5F84</li><li>dest <code>string</code> | <code>Buffer</code> | <code>URL</code> \u590D\u5236\u5230\u7684\u76EE\u6807\u6587\u4EF6\u8DEF\u5F84</li><li>options <code>Object</code> \u9ED8\u8BA4\u503C: {} <ul><li>dereference\uFF1A<code>boolean</code> \u9ED8\u8BA4\u503C: false \u5982\u679C\u4E3Atrue\uFF0C\u5219\u590D\u5236\u7684\u6587\u4EF6\u5C06\u5305\u542B\u5B83\u4EEC\u7684\u786C\u94FE\u63A5\u3002</li><li>errorOnExist\uFF1A<code>boolean</code> \u9ED8\u8BA4\u503C: false \u5982\u679C\u4E3Atrue\uFF0C\u5219\u590D\u5236\u7684\u6587\u4EF6\u5C06\u4F1A\u8986\u76D6\u76EE\u6807\u6587\u4EF6\u3002</li><li>filter\uFF1A<code>function</code> \u9ED8\u8BA4\u503C: null \u5982\u679C\u63D0\u4F9B\u4E86\u8FD9\u4E2A\u53C2\u6570\uFF0C\u5219\u53EA\u590D\u5236\u8FC7\u6EE4\u5668\u8FD4\u56DEtrue\u7684\u6587\u4EF6\u3002</li><li>force\uFF1A<code>boolean</code> \u9ED8\u8BA4\u503C: false \u5982\u679C\u4E3Atrue\uFF0C\u5219\u590D\u5236\u7684\u6587\u4EF6\u5C06\u4F1A\u8986\u76D6\u76EE\u6807\u6587\u4EF6\u3002</li><li>preserveTimestamps\uFF1A<code>boolean</code> \u9ED8\u8BA4\u503C: false \u5982\u679C\u4E3Atrue\uFF0C\u5219\u590D\u5236\u7684\u6587\u4EF6\u5C06\u4FDD\u6301\u539F\u6709\u7684\u65F6\u95F4\u6233\u3002</li><li>recursive\uFF1A<code>boolean</code> \u9ED8\u8BA4\u503C: false \u5982\u679C\u4E3Atrue\uFF0C\u5219\u590D\u5236\u7684\u6587\u4EF6\u5C06\u5305\u542B\u5B83\u4EEC\u7684\u5B50\u76EE\u5F55\u3002</li><li>verbatimSymlinks\uFF1A<code>boolean</code> \u9ED8\u8BA4\u503C: false \u5982\u679C\u4E3Atrue\uFF0C\u5219\u590D\u5236\u7684\u6587\u4EF6\u5C06\u5305\u542B\u5B83\u4EEC\u7684\u786C\u94FE\u63A5\u3002</li></ul></li></ul><p>\u540C\u6B65\u5730\u5C06\u6574\u4E2A\u76EE\u5F55\u7ED3\u6784\u4ECEsrc\u590D\u5236\u5230dest\uFF0C\u5305\u62EC\u5B50\u76EE\u5F55\u548C\u6587\u4EF6\u3002</p>`,13),F=s("\u5F53\u628A\u4E00\u4E2A\u76EE\u5F55\u590D\u5236\u5230\u53E6\u4E00\u4E2A\u76EE\u5F55\u65F6\uFF0C\u4E0D\u652F\u6301"),I={href:"https://blog.logrocket.com/understanding-using-globs-node-js/",target:"_blank",rel:"noopener noreferrer"},P=s("globs\u8BED\u6CD5"),E=s("\uFF0C\u884C\u4E3A\u7C7B\u4F3C\u4E8Ecp dir1/ dir2/\u3002"),O=s("\u5176\u4ED6API\uFF0C\u8BF7\u53C2\u89C1\u5B98\u65B9\u6587\u6863"),S={href:"https://nodejs.org/api/fs.html#fsexistssyncpath",target:"_blank",rel:"noopener noreferrer"},L=s("File System"),C=t('<h2 id="filehandle-\u7C7B" tabindex="-1"><a class="header-anchor" href="#filehandle-\u7C7B" aria-hidden="true">#</a> FileHandle \u7C7B</h2><p>FileHandle \u5BF9\u8C61\u662F\u4E00\u4E2A\u6587\u4EF6\u63CF\u8FF0\u7B26\u7684\u5BF9\u8C61\u5305\u88C5\u5668\uFF0C\u5B83\u53EF\u4EE5\u7528\u6765\u8BFB\u53D6\u3001\u5199\u5165\u3001\u6216\u8005\u5220\u9664\u6587\u4EF6\u3002</p><p>FileHandle \u5BF9\u8C61\u7684\u5B9E\u4F8B\u901A\u8FC7 fs.open() \u6216 fs.openFile() \u65B9\u6CD5\u521B\u5EFA\u3002</p><p>\u6240\u6709 FileHandle \u5BF9\u8C61\u90FD\u662F EventEmitter</p><p>\u5982\u679C FileHandle \u5BF9\u8C61\u4E0D\u662F\u4F7F\u7528 filehandle.close() \u65B9\u6CD5\u5173\u95ED\u7684\u8BDD\uFF0C\u5219\u4F1A\u5C1D\u8BD5\u81EA\u52A8\u5173\u95ED\u6587\u4EF6\u63CF\u8FF0\u7B26\u5E76\u4E14\u4F1A\u629B\u51FA\u5F02\u5E38\uFF0C\u907F\u514D\u5185\u5B58\u6CC4\u6F0F\u3002\u4F46\u662F\u6700\u597D\u4E0D\u8981\u4F9D\u8D56\u8FD9\u4E2A\u7279\u6027\uFF0C\u56E0\u4E3A\u5B83\u53EF\u80FD\u5728\u4EE5\u540E\u7684\u7248\u672C\u4E2D\u88AB\u79FB\u9664\u3002</p><h2 id="\u901A\u7528\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u901A\u7528\u5BF9\u8C61" aria-hidden="true">#</a> \u901A\u7528\u5BF9\u8C61</h2><p>\u6240\u6709\u7684\u6587\u4EF6\u7CFB\u7EDF API \u7C7B\u578B\uFF08Promise\u3001\u56DE\u8C03\u548C\u540C\u6B65API\uFF09\u90FD\u5171\u4EAB\u8FD9\u4E9B\u901A\u7528\u5BF9\u8C61\u3002</p><h3 id="fs-dir-\u7C7B" tabindex="-1"><a class="header-anchor" href="#fs-dir-\u7C7B" aria-hidden="true">#</a> fs.Dir \u7C7B</h3><h2 id="\u5E38\u7528\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u793A\u4F8B" aria-hidden="true">#</a> \u5E38\u7528\u793A\u4F8B</h2><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a> \u53C2\u8003\u94FE\u63A5</h2>',10),A={href:"https://nodejs.org/api/fs.html",target:"_blank",rel:"noopener noreferrer"},N=s("File System API"),B={href:"https://github.com/nodejs/node/blob/v18.4.0/lib/fs.js",target:"_blank",rel:"noopener noreferrer"},K=s("fs\u6E90\u4EE3\u7801");function R(q,X){const a=p("ExternalLinkIcon");return o(),c(l,null,[u,d,k,b,n("p",null,[m,n("a",h,[f,e(a)]),_]),g,n("p",null,[y,n("a",v,[w,e(a)]),x]),j,n("p",null,[F,n("a",I,[P,e(a)]),E]),n("blockquote",null,[n("p",null,[O,n("a",S,[L,e(a)])])]),C,n("ul",null,[n("li",null,[n("a",A,[N,e(a)])]),n("li",null,[n("a",B,[K,e(a)])])])],64)}var U=i(r,[["render",R]]);export{U as default};