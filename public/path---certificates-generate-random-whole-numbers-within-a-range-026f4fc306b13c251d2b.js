webpackJsonp([0xaba482b29a1fe800],{"./node_modules/json-loader/index.js!./.cache/json/certificates-generate-random-whole-numbers-within-a-range.json":function(e,o){e.exports={data:{markdownRemark:{html:'<blockquote>\n<p>We can use a certain mathematical expression to get a random number between two numbers.</p>\n</blockquote>\n<p><code>Math.floor(Math.random() * (max - min + 1)) + min</code></p>\n<p><strong>See Also:</strong> <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/scroll.png?v=3" title=":scroll:" alt=":scroll:" class="forum-image"> <a><strong>Explanation</strong></a> | <a href=\'https://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range/1527820#1527820\' target=\'_blank\' rel=\'nofollow\'>Explanation in SO</a></p>\n<h2>Explanation</h2>\n<blockquote>\n<p><code>Math.random()</code> creates a floating point number between <code>0</code> (inclusive) and <code>1</code> (exclusive)</p>\n</blockquote>\n<p><strong>Q:</strong> Create a random <strong>whole</strong> number between <code>2</code> (inclusive, min) and <code>6</code> (inclusive, max) i.e. create a random <em>whole</em> number between <code>min</code> (<em>inclusive</em>) and <code>max</code> (<em>inclusive</em>)</p>\n<p><strong>A:</strong> <code>Math.floor(Math.random() * (6 - 2 + 1)) + 2</code></p>\n<p>Let’s write <code>Math.random() * max</code> which creates a floating point number between <code>0</code> (inclusive) and <code>max</code> (<em>exclusive</em>).</p>\n<p>E.g. <code>Math.random() * 6</code> generates a random floating point number between <code>0</code> (inclusive) and <code>6</code> (<em>exclusive</em>).</p>\n<hr>\n<hr>\n<p>But we need to generate a whole number between <code>0</code> (<em>inclusive</em>) and <code>max</code> (<em>inclusive</em>) first. So we do a trick <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/wink.png?v=3" title=":wink:" alt=":wink:" class="forum-image">.</p>\n<p>What if we create a number between <code>0</code> and <code>max + 1</code>. That way, we also include the <code>max</code> number. And then apply the <code>Math.floor</code> method on the result to get a whole number between <strong><code>0</code></strong> (<em>inclusive</em>, min) and <code>max</code> (<em>inclusive</em>).</p>\n<p>We can write it as <code>Math.floor(Math.random() * (max + 1))</code>.</p>\n<p>E.g. <code>Math.floor(Math.random() * (6 + 1))</code> generates a random whole number between <strong><code>0</code></strong> (<em>inclusive</em>, min) and <strong><code>6</code></strong> (<em>inclusive</em>, max).</p>\n<p><strong><code>0 1 2 3 4 5 6</code></strong></p>\n<blockquote>\n<p>The <code>Math.random() * (6 + 1)</code> part generates a floating point number between <code>0</code> (<em>inclusive</em>) and <code>7</code> (<em>exclusive</em>).</p>\n</blockquote>\n<p><strong><code>0..1..2..3..4..5..6..</code></strong></p>\n<p>But that doesn’t solve our given question yet <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/disappointed.png?v=3" title=":disappointed:" alt=":disappointed:" class="forum-image">. We need to generate a random whole number between <strong><code>min</code></strong> (<em>inclusive</em>) and <strong><code>max</code></strong> (<em>inclusive</em>). So we need another trick <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/wink.png?v=3" title=":wink:" alt=":wink:" class="forum-image">.</p>\n<hr>\n<hr>\n<p>What if we write <code>Math.floor(Math.random() * ((max + 1) - min))</code> that will generate a whole number between <code>0</code> and <code>(max + 1) - min</code>.</p>\n<p>E.g. <code>Math.floor(Math.random() * ((6 + 1) - 2))</code> <strong>=</strong> <code>Math.floor(Math.random() * 5)</code> that will generate a whole number between <code>0</code> (inclusive) and <code>4</code> (inclusive).</p>\n<p><strong><code>0 1 2 3 4</code></strong></p>\n<p>But still the question is unsolved <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/disappointed.png?v=3" title=":disappointed:" alt=":disappointed:" class="forum-image">. We need the random number between <code>min</code> (<strong>inclusive</strong>) and <code>max</code> (<strong>inclusive</strong>).</p>\n<p>So we simply write <code>Math.floor(Math.random() * ((max + 1) - min)) + min</code> <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/stuck_out_tongue_winking_eye.png?v=3" title=":stuck_out_tongue_winking_eye:" alt=":stuck_out_tongue_winking_eye:" class="forum-image">.</p>\n<p>E.g. <code>Math.floor(Math.random() * ((6 + 1) - 2)) + 2</code> <strong>=</strong> <code>Math.floor(Math.random() * 5) + 2</code></p>\n<p><strong><code>2 3 4 5 6</code></strong></p>\n<p><strong>Now this answers our given question. <code>Math.floor(Math.random() * (max - min + 1) + min</code> correctly generates a random number between <code>min</code> (<em>inclusive</em>) and <code>max</code> (<em>inclusive</em>) i.e. it generates a random whole number between <code>2</code> (inclusive) and <code>6</code> (inclusive).</strong> <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/smiley.png?v=3" title=":smiley:" alt=":smiley:" class="forum-image"></p>',fields:{slug:"/certificates/generate-random-whole-numbers-within-a-range/"},frontmatter:{title:"Generate Random Whole Numbers Within a Range"}}},pathContext:{slug:"/certificates/generate-random-whole-numbers-within-a-range/"}}}});
//# sourceMappingURL=path---certificates-generate-random-whole-numbers-within-a-range-026f4fc306b13c251d2b.js.map