webpackJsonp([0x1b9dd86d6c91b10],{"./node_modules/json-loader/index.js!./.cache/json/javascript-tutorials-using-anonymous-functions-for-private-namespacing-in-your-javascript-apps.json":function(e,t){e.exports={data:{markdownRemark:{html:'<p>Let’s take a look at what a namespace is when it comes to building JavaScript applications and some of the benefits from using a private namespace when building your apps.</p>\n<p><strong>Please note that this article references anonymous self-executing functions. If you’re unaware of what this is, please read this excellent article by Noah Stokes: <a href=\'http://esbueno.noahstokes.com/post/77292606977/self-executing-anonymous-functions-or-how-to-write\' target=\'_blank\' rel=\'nofollow\'>Self-Executing Anonymous Functions or How to Write Clean Javascript</a>. This article will go into detail about anonymous self-executing functions.</strong></p>\n<h2>What is a Namespace?</h2>\n<p>To put it simply, a namespace is just a section of code that has its own space. When you first begin writing JS apps, you generally just type the code out and run it. This puts all of the code into what’s known as the <strong>global namespace</strong>, which contains all of the code for the window you’re working in.</p>\n<p>If you keep all of your code in the <strong>global namespace</strong>, though, you can run into problems with collisions, naming conventions, etc. especially in large JS applications/games.</p>\n<p>Let’s take a look at an example of how using only the <strong>global namespace</strong> to develop a game is a bad idea.</p>\n<p>So, let’s say we have a game that is keep tracking of the points that the player has:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>var points = 0;</code></pre>\n      </div>\n<p>A lot of games track points to add a competitive edge to the game. By simply typing that line into a script, we’ve created a variable named <em>points</em> that can track the points gained by the user.</p>\n<p>And that’s all fine and well, but let’s say that we have a more advanced user playing the game. This user knows how to look at the source of a web page, and so this person takes a peek at the source behind the JS game and realizes that the <em>points</em> variable is just sitting there in the <strong>global namespace</strong>. An evil smirk descends across their face as they contemplate the points they can achieve! They decide that they don’t want to wait to beat some baddies up, or smash some mushrooms, or what have you, to rack up a bunch of points. They want their points now! Well, how does <em>a quadrillion billion million</em> points sound?! So, they load up the console on their favorite browser, and simply type into the console:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>points = 34750925489459203859095480917458059034;</code></pre>\n      </div>\n<p>Once the user hits enter, the <em>points</em> variable is updated in the game. Now, the user has a truly humongous, and likely unrealistic, amount of points in the game, and he can brag to his friends that no one can possibly beat his awesome score.</p>\n<p>So, how do we prevent this from occurring? This is where <strong>private namespaces</strong> come into play.</p>\n<h2>Private Namespaces</h2>\n<p><strong>Private namespaces</strong> allow developers to put their code into sections (or <strong>namespaces</strong>). These sections operate independently of each other but can still read and write from the <strong>global namespace</strong>.</p>\n<p>To break this down into simpler terms from a real life scenario, let’s say you are working in an office building. You have your own office, and you see others with their own offices. Each office is locked, and only the person who owns the office has a key to this office. Let’s also say that you have some type of new super lock that makes your office impenetrable by any other person in the building. Let’s consider the office building itself as the <strong>global namespace</strong> and each office as a <strong>private namespace</strong>. You don’t have access to anyone else’s office nor do they have access to yours. But, each one of you have access to the rest of the office building, whether that’s getting coffee, grabbing a snack, etc. Each one of you can grab something from the <strong>global namespace</strong> (or create/modify something there), but you can’t create/modify/grab anything from each other’s offices; you can only create/modify/grab from your own <strong>private namespace</strong>/office.</p>\n<h2>Achieving a Private Namespace</h2>\n<p>So, how do we achieve this <strong>private namespace</strong> in JavaScript? Use an anonymous self-executing function! If you didn’t read the article by Noah Stokes, <a href=\'http://esbueno.noahstokes.com/post/77292606977/self-executing-anonymous-functions-or-how-to-write\' target=\'_blank\' rel=\'nofollow\'>Self-Executing Anonymous Functions or How to Write Clean Javascript</a>, please do so now. This article will go into detail about anonymous self-executing functions.</p>\n<p>Let’s take a look at using that <em>points</em> variable from earlier, but let’s separate it into a <strong>private namespace</strong>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>//The most common way you\'ll see an anonymous self-executing function\n(function () {\n    var points = 0;\n})();\n\n//This is just one of many more alternative ways to use an anonymous self-executing function\n/*\n!function () {\n    var points = 0;\n}();\n*/</code></pre>\n      </div>\n<p>Now, when the user gets to the page, they will be unable to open up the console in their browser and change the value of the points variable as they wish! Awesome!</p>\n<h2>Namespace and Document Interaction</h2>\n<p>The above code was but one use for using an anonymous self-executing function to give code its own <strong>private namespace</strong>. Keep in mind that namespaces only affect JS code (variables/arrays/objects/etc.), not code that pertains to the document itself.</p>\n<p>Any code within a namespace still has the same access to the HTML document, and CSS, as you would normally in the <strong>global namespace</strong>. Take a look at the next two code samples. They both perform the same functionality, and neither is more beneficial, or more efficient, than the other.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><script type="text/javascript">\n    (function () {\n        document.querySelector(\'body\').style.background = \'blue\';\n    })();\n</script></code></pre>\n      </div>\n<p>is the same as:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><script type="text/javascript">\n    document.querySelector(\'body\').style.background = \'blue\';\n</script></code></pre>\n      </div>\n<p>Keep in mind that this is just one way to use namespaces in JavaScript applications. Adapt your code to what best fits the situation at hand.</p>',fields:{slug:"/javascript/tutorials/using-anonymous-functions-for-private-namespacing-in-your-javascript-apps/"},frontmatter:{title:"Using Anonymous Functions for Private Namespacing in Your JavaScript Apps"}}},pathContext:{slug:"/javascript/tutorials/using-anonymous-functions-for-private-namespacing-in-your-javascript-apps/"}}}});
//# sourceMappingURL=path---javascript-tutorials-using-anonymous-functions-for-private-namespacing-in-your-javascript-apps-c473829eb358318b913f.js.map