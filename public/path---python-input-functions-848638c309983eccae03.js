webpackJsonp([0xae7307f71e730800],{"./node_modules/json-loader/index.js!./.cache/json/python-input-functions.json":function(e,t){e.exports={data:{markdownRemark:{html:'<p>Many a time, in a program we need some input from the user. Taking inputs from the user makes the program feel interactive. In Python 3, to take input from the user we have a function <code>input()</code>. Let’s see some examples:</p>\n<ol>\n<li>\n<p>When we just want to take the input:</p>\n<h1>This will just give a prompt without any message</h1>\n<p>inp = input()</p>\n</li>\n</ol>\n<p><img src="//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CUqX/0\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<ol>\n<li>\n<p>To give a prompt with a message:</p>\n<p>prompt<em>with</em>message = input(’<Your prompt message should appear here>‘)</p>\n<h1><Your prompt message should appear here> _</h1>\n<h1>The ’_’ in the output is the prompt</h1>\n</li>\n</ol>\n<p><img src="//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CUqX/1\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<p>3. When we want to take an integer input:  </p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>number = int(input(\'Please enter a number: \'))</code></pre>\n      </div>\n<p><img src="//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CUqX/2\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<p>If you enter a non integer value then Python will throw an error <code>ValueError</code>. <strong>So whenever you use this, please make sure that you catch it too.</strong> Otherwise, your program will stop unexpectedly after the prompt.  </p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>number = int(input(\'Please enter a number: \'))\n# Please enter a number: as\n# Enter a string and it will throw this error\n# ValueError: invalid literal for int() with base 10 \'as\'</code></pre>\n      </div>\n<p>4. When we want a string input:  </p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>string = str(input(\'Please enter a string: \'))</code></pre>\n      </div>\n<p><img src="//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CUqX/3\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<p>Though, inputs are stored by default as a string. Using the <code>str()</code> function makes it clear to the code-reader that the input is going to be a ‘string’. It is a good practice to mention what type of input will be taken beforehand.</p>\n<p><a href=\'https://docs.python.org/3/library/functions.html#input\' target=\'_blank\' rel=\'nofollow\'>Official Docs</a></p>',fields:{slug:"/python/input-functions/"},frontmatter:{title:"Python Input Function"}}},pathContext:{slug:"/python/input-functions/"}}}});
//# sourceMappingURL=path---python-input-functions-848638c309983eccae03.js.map