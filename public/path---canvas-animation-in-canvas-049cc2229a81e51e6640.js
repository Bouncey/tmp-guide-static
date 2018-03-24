webpackJsonp([0xa2f83bbcc6f6b000],{"./node_modules/json-loader/index.js!./.cache/json/canvas-animation-in-canvas.json":function(n,a){n.exports={data:{markdownRemark:{html:'<h2>Animation in Canvas</h2>\n<p>To animate things in <code>canvas</code>, use <code>window.requestAnimationFrame</code> to set up a draw loop.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">/* code goes here */</span>\n  window<span class="token punctuation">.</span><span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>draw<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nwindow<span class="token punctuation">.</span><span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>draw<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>The below code will cause the <code>draw</code> function to be run every frame.</p>\n<p><code>canvas</code> has no special functions that allow for animating. You just have to be used to writing in animation loops. The usual design paradigm for animation loops is to update the state, then draw the state. For instance, to draw a square moving across the screen:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"canvas"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">\'2d\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> x<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> y<span class="token operator">=</span><span class="token number">50</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// reset canvas</span>\n  ctx<span class="token punctuation">.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment" spellcheck="true">//update state</span>\n  x<span class="token operator">+=</span><span class="token number">1</span><span class="token punctuation">;</span>\n\n  <span class="token comment" spellcheck="true">// render state</span>\n  ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  ctx<span class="token punctuation">.</span><span class="token function">rect</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  window<span class="token punctuation">.</span><span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>draw<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nwindow<span class="token punctuation">.</span><span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>draw<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>To see this concept in action, see the ’<a href="/articles/canvas/particle-sim">Particle Sim</a>’ page.</p>\n<h4>More Information:</h4>\n<ul>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API">MDN Canvas API</a></li>\n</ul>',fields:{slug:"/canvas/animation-in-canvas/"},frontmatter:{title:"Animation"}}},pathContext:{slug:"/canvas/animation-in-canvas/"}}}});
//# sourceMappingURL=path---canvas-animation-in-canvas-049cc2229a81e51e6640.js.map