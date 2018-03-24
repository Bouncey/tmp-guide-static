webpackJsonp([0x40e3d766f8e24c00],{"./node_modules/json-loader/index.js!./.cache/json/javascript-manipulating-cookies.json":function(n,e){n.exports={data:{markdownRemark:{html:'<h2>Manipulating Cookies</h2>\n<p>You find an amazing and informative recipe website to cook a foreign meal for your guests but it’s in foreign language, luckily you are able to change the language on the site website using a selection dropdown. A couple of days later you visit the same site again to make a dish for your mother, but now you see the website in your native language by default. </p>\n<p>*The website remembers language you selected on your last visit and stores it in form of a <strong>cookie</strong>. Now it automatically selected your preferred language by reading that cookie.*</p>\n<p><code>userLanguage:french</code></p>\n<p>Cookies are used to store data in form of <code>name:value</code> pair on the client side part. It lets a website store user specific information on the browser for later use. The  stored information could be <code>sessionID</code>, <code>userCountry</code>, <code>visitorLanguage</code> etc.</p>\n<p>Another way to store the data on the client side is <code>localstorage</code>.</p>\n<h3>Set Cookie</h3>\n<p>A cookie can be set using the syntax below but a library, like the one mentioned at the end, is highly recommended to make development easier for everyone. While setting the cookie, you can set the expiry for it as well. If skipped, cookie is erased when browser is closed.</p>\n<p><strong>Keep in mind a cookie set by a particular domain can only be read by that domain &#x26; it’s subdomains only.</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment" spellcheck="true">// Using vanilla javascript</span>\ndocument<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">\'userLanguage=french; expires=Sun, 2 Dec 2017 23:56:11 UTC; path=/\'</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">//Using JS cookie library</span>\nCookies<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token string">\'userLanguage\'</span><span class="token punctuation">,</span> <span class="token string">\'french\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> expires<span class="token punctuation">:</span> <span class="token number">7</span><span class="token punctuation">,</span> path<span class="token punctuation">:</span> <span class="token string">\'/\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><em>Cookie expires in 7 days</em></p>\n<h3>Get Cookie</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment" spellcheck="true">// Using vanilla javascript</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>cookie<span class="token punctuation">)</span>\n\n<span class="token comment" spellcheck="true">// => "_ga=GA1.2.1266762736.1473341790; userLanguage=french"</span>\n\n<span class="token comment" spellcheck="true">// Using JS cookie library</span>\nCookies<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">\'userLanguage\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// => "french"</span>\n</code></pre>\n      </div>\n<h3>Delete Cookie</h3>\n<p>In order to delete a cookie set the expires date to something in the past.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment" spellcheck="true">// Using vanilla javascript</span>\ndocument<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">\'userLanguage; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/\'</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">//Using JS cookie library</span>\nCookies<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">\'userLanguage\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><em>If you find yourself playing with cookies a lot in your project, please use a library like this <a href="https://github.com/js-cookie/js-cookie">JS Cookie</a> and save yourself a ton of time.</em></p>\n<h4>More Information:</h4>\n<ul>\n<li><a href="https://www.quirksmode.org/js/cookies.html">Cookie explained</a></li>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/document/cookie">MDN Cookie Guide</a></li>\n<li><a href="https://www.youtube.com/watch?v=xdH9zsW1CK0">Udacity Cookie Video</a></li>\n</ul>',fields:{slug:"/javascript/manipulating-cookies/"},frontmatter:{title:"Manipulating Cookies"}}},pathContext:{slug:"/javascript/manipulating-cookies/"}}}});
//# sourceMappingURL=path---javascript-manipulating-cookies-4a6ba86ce9ece16d6dc4.js.map