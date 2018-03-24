webpackJsonp([0x1985c91514abd600],{"./node_modules/json-loader/index.js!./.cache/json/miscellaneous-what-is-clojure.json":function(e,a){e.exports={data:{markdownRemark:{html:'<h2>Clojure is a dialect of Lisp.</h2>\n<p>Lisps are an entirely separate family of languages to C-like languages such as C#, Javascript, Python or Ruby. This means Lisps might look odd to programmers who are more familiar with these languages. Essentially, being a Lisp means that everything in Clojure is a list containing data (even function calls!), it has dynamic typing, and you can define <em>macros</em> that let you manipulate your own code. Here’s a simple example of some Clojure for you to examine:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>   (defn hello-world [] (println "Hello world!"))</code></pre>\n      </div>\n<p>This defines a function (using the <code>defn</code> macro) called <code>hello-world</code> that takes no input (<code>[]</code>) and prints <code>"Hello world!"</code> to the console. We can call it like so:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>   (hello-world)\n   ; => Hello world!\n   ;    nil</code></pre>\n      </div>\n<h2>Clojure is a functional language.</h2>\n<p>All variables in Clojure are immutable, and can’t be changed using an assignment operator (<code>=</code> in most C-like languages) or by a function. All functions aim to be <em>referentially transparent</em>, which means that if you give them the same input, they should give the same output no matter what. The <code>hello-world</code> example above is referentially transparent - it will always print “Hello world!” no matter what. Something that relies on a random number generator is not referentially transparent, because its output is random.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>  (defn random-function []\n    (if (> (rand 4) 2)     ; if a random number between 0 and 2 is greater than 2...\n      (println "foo")      ; ...print "foo". otherwise...\n      (println "bar")))    ; ...print "bar"</code></pre>\n      </div>\n<p>While not being able to change variables might sound nightmarish, it’s a lot easier than you think, especially if the language is based around it (like Clojure is!), and avoiding unnecessary mutation can make your code much less buggy.</p>\n<h2>Clojure runs on the Java Virtual Machine.</h2>\n<p>The JVM is the virtual machine that interprets Java bytecode and uses it to run a program. This means Clojure works almost seamlessly with code designed for Java (although it does look a bit odd), and it also means that it runs quite quickly compared to some other Lisps. While it’s quite a bit slower than Java, it’s still a lot faster than Python, Ruby or Javascript.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>  (.indexOf [1 2 3 4] 2) ;; .indexOf is a Java method!\n  ; => 1</code></pre>\n      </div>\n<h2>Clojure is designed for concurrency.</h2>\n<p>“Concurrency” here means “one program working on multiple threads at once,” which can make your code much faster. It can also make your code much buggier; imagine if two different functions were changing and reading from the same object at once! It would be utter chaos. Thankfully, in Clojure, variables are immutable, which means there’s no chance of this kind of mayhem breaking loose. The language also has a variety of features to make concurrent code easier, such as the Software Transactional Memory system, agents and atoms.</p>\n<p>| <img src="//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2" title=":point_left:" alt=":point_left:" class="forum-image"> Previous | <a href="//forum.freecodecamp.com/t/clojure-resources/18422"><img src="//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2" title=":book:" alt=":book:" class="forum-image"> Home <img src="//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2" title=":book:" alt=":book:" class="forum-image"></a> | <a href="//forum.freecodecamp.com/t/clojure-the-basics/18410">Next <img src="//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2" title=":point_right:" alt=":point_right:" class="forum-image"></a>|<br>\n| | <a href="//forum.freecodecamp.com/t/clojure-resources/18422">Table of Contents</a> | <a href="//forum.freecodecamp.com/t/clojure-the-basics/18410">Basics</a>|</p>',fields:{slug:"/miscellaneous/what-is-clojure/"},frontmatter:{title:"What Is Clojure"}}},pathContext:{slug:"/miscellaneous/what-is-clojure/"}}}});
//# sourceMappingURL=path---miscellaneous-what-is-clojure-58a27835dd189f74cfdc.js.map