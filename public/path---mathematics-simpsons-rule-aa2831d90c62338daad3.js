webpackJsonp([0x3735391999cba400],{"./node_modules/json-loader/index.js!./.cache/json/mathematics-simpsons-rule.json":function(n,s){n.exports={data:{markdownRemark:{html:'<h1>Simpson’s Rule</h1>\n<p>In numerical analysis, Simpson’s rule is a method for numerical integration <i>(numerical approximation of definite integrals)</i>.</p>\n<p>Simpson’s rule approximates the integration of the form,</p>\n<p><img src="https://raw.githubusercontent.com/pranabendra/articles/master/Simpson-Method/sim1.png"></p>\n<p>where, </p>\n<ul>\n<li><code>f(x)</code> is called the <i>integrand</i></li>\n<li><code>a</code> = lower limit of integration</li>\n<li><code>b</code> = upper limit of integration</li>\n</ul>\n<h2>Simpson’s 1/3 Rule</h2>\n<img src="https://raw.githubusercontent.com/pranabendra/articles/master/Simpson-Method/sim01.jpg" width="600"  alt="Simpson\'s Rule">\n<p>As shown in the diagram above, the integrand <code>f(x)</code> is approximated by a second order polynomial; the quadratic interpolant being <code>P(x)</code>.</p>\n<p>The approximation follows,</p>\n<p><img src="https://raw.githubusercontent.com/pranabendra/articles/master/Simpson-Method/sim3.png"></p>\n<p>Replacing <code>(b-a)/2</code> as <code>h</code>, we get, </p>\n<p><img src="https://raw.githubusercontent.com/pranabendra/articles/master/Simpson-Method/sim4.png"></p>\n<p>As you can see, there is a factor of <code>1/3</code> in the above expression. That’s why, it is called <b>Simpson’s 1/3 Rule</b>.</p>\n<p>If a function is highly oscillatory or lacks derivatives at certain points, then the above rule may fail to produce accurate results. One common way of handling this problem is by breaking up the interval <code>[a,b]</code> into a number of small subintervals. Simpson’s rule is then applied to each subinterval, with the results being summed to produce an approximation for the integral over the entire interval. This sort of approach is termed the <i>composite Simpson’s rule</i>.</p>\n<p>Suppose that the interval <code>[a,b]</code> is split up into <code>n</code> subintervals, with <code>n</code> being an even number. Then, the composite Simpson’s rule is given by, </p>\n<p><img src="https://raw.githubusercontent.com/pranabendra/articles/master/Simpson-Method/sim7.png"></p>\n<p>where <b>x<sub>j</sub> = a+jh</b> for <b>j = 0,1,…,n-1,n</b> with <b>h=(b-a)/n </b>; in particular, <b>x<sub>0</sub> = a</b> and <b>x<sub>n</sub> = b</b>.</p>\n<h4>Example:</h4>\n<p><b>Approximate the value of the integral given below, taking n = 8. </b></p>\n<p><img src="https://raw.githubusercontent.com/pranabendra/articles/master/Simpson-Method/sim9.png"></p>\n<p>Implementation of Simpson’s 1/3 Rule in C++ is as follows :</p>\n<div class="gatsby-highlight">\n      <pre class="language-cpp"><code><span class="token macro property">#<span class="token directive keyword">include</span><span class="token string">&lt;iostream></span></span>\n<span class="token macro property">#<span class="token directive keyword">include</span><span class="token string">&lt;cmath></span></span>\n<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>\n\n<span class="token keyword">float</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">float</span> x<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> x<span class="token operator">*</span><span class="token function">sin</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\t<span class="token comment" spellcheck="true">//Define the function f(x)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">float</span> <span class="token function">simpson</span><span class="token punctuation">(</span><span class="token keyword">float</span> a<span class="token punctuation">,</span> <span class="token keyword">float</span> b<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n\t<span class="token keyword">float</span> h<span class="token punctuation">,</span> x<span class="token punctuation">[</span>n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\t<span class="token keyword">int</span> j<span class="token punctuation">;</span>\n\th <span class="token operator">=</span> <span class="token punctuation">(</span>b<span class="token operator">-</span>a<span class="token punctuation">)</span><span class="token operator">/</span>n<span class="token punctuation">;</span>\n\t\n\tx<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">;</span>\n\t\n\t<span class="token keyword">for</span><span class="token punctuation">(</span>j<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">{</span>\n\t\tx<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> a <span class="token operator">+</span> h<span class="token operator">*</span>j<span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\t\n\t<span class="token keyword">for</span><span class="token punctuation">(</span>j<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">&lt;=</span>n<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">{</span>\n\t\tsum <span class="token operator">+</span><span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">[</span><span class="token number">2</span><span class="token operator">*</span>j <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">4</span><span class="token operator">*</span><span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">[</span><span class="token number">2</span><span class="token operator">*</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">[</span><span class="token number">2</span><span class="token operator">*</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\t\n\t<span class="token keyword">return</span> sum<span class="token operator">*</span>h<span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n\t<span class="token keyword">float</span> a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>n<span class="token punctuation">;</span>\n\ta <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\t\t<span class="token comment" spellcheck="true">//Enter lower limit a</span>\n\tb <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>\t\t<span class="token comment" spellcheck="true">//Enter upper limit b</span>\n\tn <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>\t\t<span class="token comment" spellcheck="true">//Enter step-length n</span>\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span>n<span class="token operator">%</span><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>\n\t\tcout<span class="token operator">&lt;&lt;</span><span class="token function">simpson</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>\n\t<span class="token keyword">else</span>\n\t\tcout<span class="token operator">&lt;&lt;</span><span class="token string">"n should be an even number"</span><span class="token punctuation">;</span>\n\t<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>Simpson’s 3/8 Rule</h2>\n<p>Simpson’s 3/8 rule is similar to Simpson’s 1/3 rule. The only difference is that, here, the interpolant is a cubic polynomial. The 3/8 rule is about twice as accurate as the 1/3 rule, but it uses one more function value.</p>\n<p>Simpson’s 3/8 rule states :</p>\n<p><img src="https://raw.githubusercontent.com/pranabendra/articles/master/Simpson-Method/sim6.png"></p>\n<p>Replacing <code>(b-a)/3</code> as <code>h</code>, we get, </p>\n<p><img src="https://raw.githubusercontent.com/pranabendra/articles/master/Simpson-Method/sim5.png"></p>\n<p>Simpson’s 3/8 rule for n intervals (n should be a multiple of 3) :</p>\n<p><img src="https://raw.githubusercontent.com/pranabendra/articles/master/Simpson-Method/sim8.png"></p>\n<p>where <b>x<sub>j</sub> = a+jh</b> for <b>j = 0,1,…,n-1,n</b> with <b>h=(b-a)/n </b>; in particular, <b>x<sub>0</sub> = a</b> and <b>x<sub>n</sub> = b</b>.</p>\n<h3>More Information:</h3>\n<ol>\n<li><a href = "https://en.wikipedia.org/wiki/Simpson%27s_rule">Simpson’s Rule</a></li>\n<li><a href = "w3.gazi.edu.tr/~balbasi/mws_gen_int_txt_simpson13.pdf">Simpson’s 1/3 Rule</a></li>\n</ol>',fields:{slug:"/mathematics/simpsons-rule/"},frontmatter:{title:"Simpson's Rule"}}},pathContext:{slug:"/mathematics/simpsons-rule/"}}}});
//# sourceMappingURL=path---mathematics-simpsons-rule-aa2831d90c62338daad3.js.map