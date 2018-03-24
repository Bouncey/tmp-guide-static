webpackJsonp([0xabf35bf8f0d7880],{"./node_modules/json-loader/index.js!./.cache/json/sql-sql-date-functions.json":function(n,s){n.exports={data:{markdownRemark:{html:'<h2>SQL Date Functions</h2>\n<h3>Introduction</h3>\n<p>There are 61 Date Functions defined in MySQL. Don’t worry, we won’t review them all here. This guide will give you an introduction to some of the common ones, and enough exposure for you to comfortably to explore on your own.</p>\n<p>We will cover:</p>\n<ul>\n<li>Getting the current date</li>\n<li>Date Math</li>\n<li>Dates in a where or having clause</li>\n</ul>\n<h3>Getting the current date</h3>\n<p>Getting the date from the system can be very handy for processing data using SQL.</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token comment" spellcheck="true">-- current date</span>\n<span class="token keyword">select</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> sysdate<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">current_date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">current_time</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">-- date and time from the system on execution</span>\ndayofyear<span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">as</span> NumDaysSoFarThisYr<span class="token punctuation">,</span>\nEXTRACT<span class="token punctuation">(</span>YEAR <span class="token keyword">FROM</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">as</span> theYearPart<span class="token punctuation">,</span>\nEXTRACT<span class="token punctuation">(</span>YEAR_MONTH <span class="token keyword">FROM</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">as</span> theYrMonPart<span class="token punctuation">,</span> \ndate_format<span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'%W %M %Y\'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> oneOfManyFormats<span class="token punctuation">;</span> \n<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><img src="https://github.com/SteveChevalier/guide-images/blob/master/date-functions04.JPG" alt="image-1"></p>\n<p>In SQL query, we see the following:</p>\n<ul>\n<li>The first two columns in the result are two ways to get the same information: the date on the system at the time the SQL is executed.</li>\n<li>The next two columns slice out just the Date and Time parts of the system date.</li>\n<li>The next one presents the “day number” of the system date in this year.  You’ll notice that this is one day more than the math shown in the next example.</li>\n<li>The next two extract just the year and then both the year and month</li>\n<li>Last, but not least, there is a single example of one of the many ways to format this dates.</li>\n</ul>\n<h3>Date Math</h3>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">current_date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \ndatediff<span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">\'2017-01-01\'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> daysThisYear<span class="token punctuation">,</span> \nsubdate<span class="token punctuation">(</span><span class="token keyword">current_date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> interval <span class="token number">150</span> day<span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token string">\'150DaysAgo\'</span><span class="token punctuation">,</span> \nadddate<span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> interval <span class="token number">7</span> day<span class="token punctuation">)</span> <span class="token keyword">as</span> dateInA_Week <span class="token comment" spellcheck="true">-- date in a week</span>\n<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><img src="https://github.com/SteveChevalier/guide-images/blob/master/date-functions02.jpg" alt="image-1"></p>\n<p>Here we see:</p>\n<ul>\n<li>The first two columns are just the system date and time for reference.</li>\n<li>The second column is the date difference (datediff) between the first of January 2017 and the system date.</li>\n<li>The last two columns are examples of subtracting and adding dates.</li>\n</ul>\n<h3>In a where or having clause</h3>\n<p>Here are two examples of using date math in a where clause:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> student<span class="token punctuation">;</span> <span class="token operator">-</span> <span class="token keyword">to</span> <span class="token keyword">show</span> the <span class="token keyword">current</span> <span class="token keyword">data</span> being used <span class="token keyword">for</span> the example\n<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> student <span class="token keyword">where</span> recordCreated <span class="token operator">&lt;</span> <span class="token string">\'2017-01-01\'</span><span class="token punctuation">;</span>\n<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> student <span class="token keyword">where</span> recordCreated <span class="token operator">&lt;</span> subdate<span class="token punctuation">(</span><span class="token keyword">current_date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> interval <span class="token number">225</span> day<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><img src="https://github.com/SteveChevalier/guide-images/blob/master/date-functions03.jpg" alt="image-1"></p>\n<p>Regarding the HAVING part: Keep in mind, most of the WHERE clause logic will also work in the HAVING clause of a GROUP BY.  The difference between the two is that the WHERE clause runs against the full data, and the HAVING runs against the data aggregated by the GROUP BY clause.</p>\n<p><em>As with all of these things there is MUCH MORE to them than what’s in this introductory guide.  I hope this at least gives you enough to get started. Please see the manual for your database manager and have fun trying different options yourself.</em></p>',fields:{slug:"/sql/sql-date-functions/"},frontmatter:{title:"SQL Date Functions"}}},pathContext:{slug:"/sql/sql-date-functions/"}}}});
//# sourceMappingURL=path---sql-sql-date-functions-a5a4dbcc3b0e60838e0d.js.map