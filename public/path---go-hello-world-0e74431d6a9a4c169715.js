webpackJsonp([0x629097c3a3bdf80],{"./node_modules/json-loader/index.js!./.cache/json/go-hello-world.json":function(n,a){n.exports={data:{markdownRemark:{html:'<p>To install Go in your computer, download its installer from <a href=\'https://golang.org/dl/\' target=\'_blank\' rel=\'nofollow\'>here</a> and install it by following these <a href=\'https://golang.org/doc/install\' target=\'_blank\' rel=\'nofollow\'>installation instructions</a>.</p>\n<h2>First Go program</h2>\n<p>Create a file named <code>main.go</code> and add the following code in it :-</p>\n<div class="gatsby-highlight">\n      <pre class="language-go"><code><span class="token keyword">package</span> main <span class="token comment" spellcheck="true">// Package declaration</span>\n\n<span class="token keyword">import</span> <span class="token string">"fmt"</span> <span class="token comment" spellcheck="true">// Importing packages</span>\n\n<span class="token comment" spellcheck="true">// Function declaration</span>\n<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Hello, World!"</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Now, run the above program from Terminal/Command Line. To do this, open Terminal/Command Line and move to the directory in which <code>main.go</code> is present. First compile the program and run <code>go build main.go</code>. Then run the command <code>go run main.go</code> to run program.\nYou should see the ouptut similar to the following output :-</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>$ go build main.go\n$ go run main.go\nHello, World!</code></pre>\n      </div>\n<h2>Analysis</h2>\n<h3>Package declaration</h3>\n<div class="gatsby-highlight">\n      <pre class="language-go"><code><span class="token keyword">package</span> main\n</code></pre>\n      </div>\n<p>In go, every program is associated with a “package”, or a collection of associated programs. A notable exception is the special package “main”, which indicates to the go complier that it should run the following program.</p>\n<h3>Imports</h3>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>import “fmt”</code></pre>\n      </div>\n<p>If you want to use functions from other packages, you need to import them. There are certain packages developed by the go maintainers (called the “standard library”) and can be found at <a href="https://golang.org/pkg/">https://golang.org/pkg/</a>. In this case, we need the “fmt” package for our print statement (below).</p>\n<h3>Function declaration</h3>\n<div class="gatsby-highlight">\n      <pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Functions are the heart of any program in go. They can have arguments and return values, but the <code>main</code> function does neither of these. It acts as the “entry point,” or where go looks first to run your program. We want our Hello World program to print, so we want to put our code here.</p>\n<h3>Print statement</h3>\n<div class="gatsby-highlight">\n      <pre class="language-go"><code>fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Hello, world!"</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Go doesn’t require semicolons at the end of lines, as the complier adds them automatically. The package <code>fmt</code> (which we imported above!) has function <code>Println</code>, which we invoke using the <code>.</code> syntax. We pass arguments to the function between the parens. In this case, the argument is the string we want to print (<code>"Hello, world!"</code>). Note that the string itself is enclosed in quotation marks.</p>\n<p>Now that you have the tools necessary, go out and make your own Go programs! The best way to learn is to experiment. If you ever need help, try the excellent go documentation: <a href="https://golang.org/doc/">https://golang.org/doc/</a></p>',fields:{slug:"/go/hello-world/"},frontmatter:{title:"Hello World in Go"}}},pathContext:{slug:"/go/hello-world/"}}}});
//# sourceMappingURL=path---go-hello-world-0e74431d6a9a4c169715.js.map