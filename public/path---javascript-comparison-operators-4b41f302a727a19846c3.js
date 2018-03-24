webpackJsonp([0xa6e9c93467d12800],{"./node_modules/json-loader/index.js!./.cache/json/javascript-comparison-operators.json":function(e,n){e.exports={data:{markdownRemark:{html:'<p>JavaScript has both <strong>strict</strong> and <strong>type–converting</strong> comparisons.</p>\n<ul>\n<li>\n<p>A strict comparison (e.g. ===) is only true if the operands are of the same type.</p>\n</li>\n<li>\n<p>The more commonly used abstract comparison (e.g. ==) converts the operands to the same Type before making the comparison.</p>\n</li>\n<li>\n<p>For relational abstract comparisons (e.g., &#x3C;=), the operands are first converted to primitives, then to the same type, before comparison.</p>\n</li>\n<li>\n<p>Strings are compared based on standard lexicographical ordering, using Unicode values.</p>\n</li>\n</ul>\n<h2>Features of comparisons:</h2>\n<ul>\n<li>\n<p>Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions.</p>\n</li>\n<li>\n<p>Two numbers are strictly equal when they are numerically equal (have the same number value). NaN is not equal to anything, including NaN. Positive and negative zeros are equal to one another.</p>\n</li>\n<li>\n<p>Two Boolean operands are strictly equal if both are true or both are false.</p>\n</li>\n<li>\n<p>Two distinct objects are never equal for either strict or abstract comparisons.</p>\n</li>\n<li>\n<p>An expression comparing Objects is only true if the operands reference the same Object.</p>\n</li>\n<li>\n<p>Null and Undefined Types are strictly equal to themselves and abstractly equal to each other.</p>\n</li>\n</ul>\n<h2>Equality operators</h2>\n<h3>Equality (==)</h3>\n<p>The equality operator converts the operands if they are <strong>not of the same type</strong>, then applies strict comparison. If <strong>both operands are objects</strong>, then JavaScript compares internal references which are equal when operands refer to the same object in memory.</p>\n<h4>Syntax</h4>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code> x == y</code></pre>\n      </div>\n<h4>Examples</h4>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code> 1   ==  1        // true\n"1"  ==  1        // true\n 1   == \'1\'       // true\n 0   == false     // true\n 0   == null      // false\n\n   0   == undefined   // false\n null  == undefined   // true</code></pre>\n      </div>\n<h3>Inequality (!=)</h3>\n<p>The inequality operator returns true if the operands are not equal. If the two operands are <strong>not of the same type</strong>, JavaScript attempts to convert the operands to an appropriate type for the comparison. If <strong>both operands are objects</strong>, then JavaScript compares internal references which are not equal when operands refer to different objects in memory.</p>\n<h4>Syntax</h4>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>x != y</code></pre>\n      </div>\n<h4>Examples</h4>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>1 !=   2     // true\n1 !=  "1"    // false\n1 !=  \'1\'    // false\n1 !=  true   // false\n0 !=  false  // false</code></pre>\n      </div>\n<h3>Identity / strict equality (===)</h3>\n<p>The identity operator returns true if the operands are strictly equal <strong>with no type conversion</strong>.</p>\n<h4>Syntax</h4>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>x === y</code></pre>\n      </div>\n<h4>Examples</h4>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>3 === 3   // true\n3 === \'3\' // false</code></pre>\n      </div>\n<h3>Non-identity / strict inequality (!==)</h3>\n<p>The non-identity operator returns true if the operands <strong>are not equal and/or not of the same type</strong>.</p>\n<h4>Syntax</h4>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>x !== y</code></pre>\n      </div>\n<h4>Examples</h4>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>3 !== \'3\' // true\n4 !== 3   // true</code></pre>\n      </div>\n<h2>Relational operators</h2>\n<h3>Greater than operator (>)</h3>\n<p>The greater than operator returns true if the left operand is greater than the right operand.</p>\n<h4>Syntax</h4>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>x > y</code></pre>\n      </div>\n<h4>Examples</h4>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>4 > 3 // true</code></pre>\n      </div>\n<h3>Greater than or equal operator (>=)</h3>\n<p>The greater than or equal operator returns true if the left operand is greater than or equal to the right operand.</p>\n<h4>Syntax</h4>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>x >= y</code></pre>\n      </div>\n<h4>Examples</h4>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>4 >= 3 // true\n3 >= 3 // true</code></pre>\n      </div>\n<h3>Less than operator (&#x3C;)</h3>\n<p>The less than operator returns true if the left operand is less than the right operand.</p>\n<h4>Syntax</h4>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>x < y</code></pre>\n      </div>\n<h4>Examples</h4>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>3 < 4 // true</code></pre>\n      </div>\n<h3>Less than or equal operator (&#x3C;=)</h3>\n<p>The less than or equal operator returns true if the left operand is less than or equal to the right operand.</p>\n<h4>Syntax</h4>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>x <= y</code></pre>\n      </div>\n<h4>Examples</h4>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>3 <= 4 // true</code></pre>\n      </div>\n<p><em>You can find more information at &#x3C;a href=’<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison</a></em>Operators’ target=’<em>blank’ rel=‘nofollow’>MDN</a>.</em></p>',fields:{slug:"/javascript/comparison-operators/"},frontmatter:{title:"Comparison Operators"}}},pathContext:{slug:"/javascript/comparison-operators/"}}}});
//# sourceMappingURL=path---javascript-comparison-operators-4b41f302a727a19846c3.js.map