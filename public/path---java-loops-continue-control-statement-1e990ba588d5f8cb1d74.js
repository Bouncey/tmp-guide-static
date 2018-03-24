webpackJsonp([0xd0ab99b4b2e0c000],{"./node_modules/json-loader/index.js!./.cache/json/java-loops-continue-control-statement.json":function(n,s){n.exports={data:{markdownRemark:{html:'<h1>Continue Control Statement</h1>\n<p>The <code>continue</code> statement makes a loop skip all the following lines after the continue and jump ahead to the beginning of the next iteration. In a <code>for</code> loop, control jumps to the update statement, and in a <code>while</code> or <code>do while</code> loop, control jumps to the boolean expression/condition.</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">continue</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    System<span class="token punctuation">.</span>out<span class="token punctuation">.</span>print <span class="token punctuation">(</span>j <span class="token operator">+</span> <span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>The value of <code>j</code> will be printed for each iteration, except when it is equal to <code>5</code>. The print statement will get skipped because of the <code>continue</code> and the output will be:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>0 1 2 3 4 6 7 8 9</code></pre>\n      </div>\n<p>Say you want to count the number of <code>i</code>s in a the word <code>mississippi</code>. Here you could use a loop with the <code>continue</code> statement, as follows:</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code>String searchWord <span class="token operator">=</span> <span class="token string">"mississippi"</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// max stores the length of the string</span>\n<span class="token keyword">int</span> max <span class="token operator">=</span> searchWord<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">int</span> numPs <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> max<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// We only want to count i\'s - skip other letters</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>searchWord<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token string">\'i\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">continue</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment" spellcheck="true">// Increase count_i for each i encountered</span>\n    numPs<span class="token operator">++</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nSystem<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"numPs = "</span> <span class="token operator">+</span> numPs<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><img src="//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CJZH/0\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<p>Additionally, you can use labels to choose a specific loop out of a nested set to skip to the next iteration. </p>',fields:{slug:"/java/loops/continue-control-statement/"},frontmatter:{title:"Continue Control Statement"}}},pathContext:{slug:"/java/loops/continue-control-statement/"}}}});
//# sourceMappingURL=path---java-loops-continue-control-statement-1e990ba588d5f8cb1d74.js.map