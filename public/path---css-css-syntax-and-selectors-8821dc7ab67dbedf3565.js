webpackJsonp([0x145288d1bdfa0300],{"./node_modules/json-loader/index.js!./.cache/json/css-css-syntax-and-selectors.json":function(n,a){n.exports={data:{markdownRemark:{html:'<h2>CSS Syntax and Selectors</h2>\n<p>When we talk about the syntax of CSS, we’re talking about how things are laid out. There are rules about what goes where, both so you can write CSS consistently and a program (like a browser) can interpret it and apply it to the page correctly.</p>\n<p>There are two main ways to write CSS.</p>\n<h3>Inline CSS</h3>\n<p>Inline CSS applies styling to a single element and its children, until another style overriding the first is encountered.</p>\n<p>To apply inline CSS, add the “style” attribute to an HTML element that you’d like to modify. Inside quotes, include a semicolon-delimited list of key/value pairs (each in turn separated by a colon) indicating styles to set.</p>\n<p>Here’s an example of inline CSS. The words “One” and “Two” will have a background color of yellow and text color of red. The word “Three” has a new style that overrides the first, and will have a background color of green and text color of cyan. In the example, we’re applying styles to <code>&#x3C;div></code> tags, but you can apply a style to any HTML element. </p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span> <span class="token property">background</span><span class="token punctuation">:</span>yellow</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  One\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    Two\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">color</span><span class="token punctuation">:</span>cyan<span class="token punctuation">;</span> <span class="token property">background</span><span class="token punctuation">:</span>green</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Three\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h3>External CSS</h3>\n<p>While writing an inline style is a quick way to change a single element, there’s a more efficient way to apply the same style to many elements of the page at once.</p>\n<p>The syntax of external CSS is a little different than inline. You still specify a semicolon-delimited list of styles, but now they’re inside of curly braces and preceded by a selector, which tells the browser which element(s) the style should be applied to.</p>\n<p>Here’s an example that has a similar effect as the “inline” example above, except the CSS has been extracted to its own area. The words “One” and “Two” will match the <code>div</code> selector and be red text on a yellow background. The words “Three” and “Four” will match the <code>div</code> selector too, but they also match the <code>.nested_div</code> selector which applies to any HTML element that references that class. This more specific selector overrides the first, and they end up appearing as cyan text on a green background.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style language-css">\n  <span class="token selector">div</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n  <span class="token selector">.nested_div</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> cyan<span class="token punctuation">;</span> <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n  One\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    Two\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>nested_div<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Three\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>nested_div<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Four\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>The selectors shown above are extremely simple, but they can get quite complex. For example, it’s possible to apply styles only to nested elements; that is, an element that’s a child of another element.</p>\n<p>Here’s an example where we’re specifying a style that should only be applied to <code>div</code> elements that are a direct child of other <code>div</code> elements. The result is that “Two” and “Three” will appear as red text on a yellow background, but “One” and “Four” will remain unaffected (and most likely black text on a white background).</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style language-css">\n  <span class="token selector">div > div</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n  One\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    Two\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    Three\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n  Four\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h4>More Information:</h4>\n<ul>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax">CSS Syntax</a> @ MDN</li>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors">CSS Selectors</a> @ MDN</li>\n</ul>',fields:{slug:"/css/css-syntax-and-selectors/"},frontmatter:{title:"CSS Syntax and Selectors"}}},pathContext:{slug:"/css/css-syntax-and-selectors/"}}}});
//# sourceMappingURL=path---css-css-syntax-and-selectors-8821dc7ab67dbedf3565.js.map