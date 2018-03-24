webpackJsonp([0xad25d882c2556000],{"./node_modules/json-loader/index.js!./.cache/json/php-ajax.json":function(n,s){n.exports={data:{markdownRemark:{html:'<h2>AJAX</h2>\n<!-- Please add any articles you think might be helpful to read before writing the article -->\n<p><b>AJAX</b> stands for <b>Asynchronous JavaScript And XML</b>. It is not a programming language. It is a technology for developing better, faster and interactive Web Applications using HTML, CSS, JavaScript and XML. </p>\n<ol>\n  <li>HTML : Hypertext Markup Language (HTML) is used for defining the structure of a Web Application.</li>\n  <li>CSS  : Cascading Style Sheet (CSS) is used to provide look and style to a Web Application.</li>\n  <li>JavaScript : JavaScript is used for making a Web Application interactive, interesting and user friendly.</li>\n  <li>XML  : Extensible Markup Language (XML) is a format to store and transport data from the Web Server.</li>\n</ol>\n<h4>What\'s the meaning of Asynchronous in AJAX?</h4>\n<p>Asynchronous means that the the Web Application could send and receive data from the Web Server without refreshing the page. This background process of sending and receiving data from the server along with updating different sections of a web page defines Asynchronous property/feature of AJAX.<p>\n<h4>How <b>AJAX</b> works?</h4>\n<p>AJAX makes use of a browser built-in <b>XMLHttpRequest object</b> to request data from a Web Server and <b>HTML DOM</b> to display or use the data.</p>\n<p><b>XMLHttpRequest Object</b> : It is an API in the form an object whose methods help in transfer of data between a web browser and a web server.</p>\n<p><b>HTML DOM</b> : When a web page is loaded, the browser creates a Document Object Model of the page.</p>\n<img src="https://i.imgur.com/pfC7QFH.png" title="How AJAX work" />\n<p><b>Create a XMLHttpRequest Object :</b></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> xhttp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><b>Properties of XMLHttpRequest object :</b></p>\n<p><code>readystate</code> is a property of the XMLHttpRequest Object which holds the status of the XMLHttpRequest.</p>\n<ul>\n  <li>0: request not initialized</li>\n  <li>1: server connection established</li>\n  <li>2: request received</li> \n  <li>3: processing request</li>\n  <li>4: request finished and response is ready</li>\n </ul>\n \n```onreadystatechange``` is a property of the XMLHttpRequest Object which defines a function to be called when the readyState property changes.<br/>\n  \n```status``` is a property of the XMLHttpRequest Object which returns the status-number of a request\n<ul>\n  <li>200: "OK"</li>\n  <li>403: "Forbidden"</li>\n  <li>404: "Not Found"</li>\n</ul> \n<p><b>XMLHttpRequest Object Methods :</b>\nTo send a request to a Web Server, we use the open() and send() methods of the XMLHttpRequest object.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>xhttp<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"GET"</span><span class="token punctuation">,</span> <span class="token string">"content.txt"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nxhttp<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><b>Create a function changeContent() using JavaScript :</b></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">changeContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> xhttp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  xhttp<span class="token punctuation">.</span>onreadystatechange <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>readyState <span class="token operator">==</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n     document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"foo"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>responseText<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  xhttp<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"GET"</span><span class="token punctuation">,</span> <span class="token string">"content.txt"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  xhttp<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><b>AJAX example to change content of a web page :</b></p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token doctype">&lt;!DOCTYPE html></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>foo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>The XMLHttpRequest Object<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>changeContent()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Change Content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script language-javascript">\n<span class="token keyword">function</span> <span class="token function">changeContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> xhttp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  xhttp<span class="token punctuation">.</span>onreadystatechange <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>readyState <span class="token operator">==</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"foo"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>responseText<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  xhttp<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"GET"</span><span class="token punctuation">,</span> <span class="token string">"content.txt"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  xhttp<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>The file <code>content.txt</code> should be present in the root directory of the Web Application.</p>\n<h3>Sources</h3>\n<ul>\n<li><a href="https://www.w3schools.com/js/js_ajax_intro.asp">W3Schools</a></li>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started">MDN web docs</a></li>\n</ul>\n<h3>Other Resources</h3>\n<ul>\n<li><a href="https://www.w3schools.com/js/js_ajax_intro.asp">W3Schools</a></li>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started">MDN web docs</a></li>\n</ul>',fields:{slug:"/php/ajax/"},frontmatter:{title:"AJAX"}}},pathContext:{slug:"/php/ajax/"}}}});
//# sourceMappingURL=path---php-ajax-7a28f13291d0218ce93b.js.map