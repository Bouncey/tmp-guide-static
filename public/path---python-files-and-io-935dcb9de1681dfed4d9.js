webpackJsonp([0x27aeeea233c6f200],{"./node_modules/json-loader/index.js!./.cache/json/python-files-and-io.json":function(n,s){n.exports={data:{markdownRemark:{html:'<h2>Files and IO</h2>\n<h3>Output to Screen</h3>\n<p>Python provides the simplest way to produce output to the screen. </p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code><span class="token keyword">print</span> <span class="token string">"Python is a powerful language."</span><span class="token punctuation">,</span><span class="token string">"It is easy to learn."</span>\n</code></pre>\n      </div>\n<p>Output: </p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>Python is a powerful language.It is easy to learn.</code></pre>\n      </div>\n<h3>Input from User</h3>\n<p>There are two ways to take input from a user.</p>\n<dl>\n  <dt> raw_input([prompt]) </dt>\n  <dd>Used to read one line from standard input and returns it as a string</dd>\n</dl>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code>str <span class="token operator">=</span> raw_input<span class="token punctuation">(</span><span class="token string">"Enter your name: "</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span> <span class="token string">"Welcome "</span><span class="token punctuation">,</span> str\n</code></pre>\n      </div>\n<p>Output: </p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>Enter your name: John Doe\nWelcome John Doe</code></pre>\n      </div>\n<dl>\n  <dt>input(prompt)</dt>\n  <dd>Similar functionality to raw_input(), but assumes the input is a valid Python expression</dd>\n</dl>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code>str <span class="token operator">=</span> input<span class="token punctuation">(</span><span class="token string">"Enter input: "</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span> <span class="token string">"Input: "</span><span class="token punctuation">,</span> str\n</code></pre>\n      </div>\n<p>Output: </p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>Enter input: [x*5 for x in range(2,10,2)]\nInput: [10,20,30,40]</code></pre>\n      </div>\n<h3>Interacting with Files in Python</h3>\n<p>Using Python, files can be easily opened, read, written and closed. With the available functions :</p>\n<ol>\n<li><code>open()</code></li>\n<li><code>read()</code></li>\n<li><code>write()</code></li>\n<li><code>close()</code></li>\n</ol>\n<p>Example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code>file1 <span class="token operator">=</span> open<span class="token punctuation">(</span><span class="token string">"foo.txt"</span><span class="token punctuation">,</span> <span class="token string">"r+"</span><span class="token punctuation">)</span>     <span class="token comment" spellcheck="true"># Opens the file with read permission.  </span>\nfile1<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">"Python is a powerful language.It is easy to learn."</span><span class="token punctuation">)</span>     <span class="token comment" spellcheck="true"># Writes data into the file.</span>\ndata <span class="token operator">=</span> file1<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span>     <span class="token comment" spellcheck="true"># Reads first 15 characters in the file.</span>\n<span class="token keyword">print</span> <span class="token string">"First 15 characters are:\\n"</span><span class="token punctuation">,</span> data     <span class="token comment" spellcheck="true"># Prints output</span>\nfile1<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment" spellcheck="true"># Closes the opened file.</span>\n</code></pre>\n      </div>\n<p>Output:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>First 15 characters are:\nPython is a pow</code></pre>\n      </div>\n<h2>Suggested Reading</h2>\n<ul>\n<li><a href="https://automatetheboringstuff.com/chapter8/">https://automatetheboringstuff.com/chapter8/</a> </li>\n<li><a href="https://docs.python.org/2/tutorial/inputoutput.html">https://docs.python.org/2/tutorial/inputoutput.html</a></li>\n<li><a href="https://www.tutorialspoint.com/python/python_files_io.htm">https://www.tutorialspoint.com/python/python<em>files</em>io.htm</a></li>\n</ul>',fields:{slug:"/python/files-and-io/"},frontmatter:{title:"Files and IO"}}},pathContext:{slug:"/python/files-and-io/"}}}});
//# sourceMappingURL=path---python-files-and-io-935dcb9de1681dfed4d9.js.map