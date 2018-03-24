webpackJsonp([0x7932f27547eed000],{"./node_modules/json-loader/index.js!./.cache/json/sql-sql-select-statement.json":function(e,a){e.exports={data:{markdownRemark:{html:'<h2>SQL Select Statement</h2>\n<h2>Select and From clauses</h2>\n<p>The SELECT part of a query is normally to determine which columns of the data to show in the results. There are also options you can apply to show data that is not a table column.</p>\n<p>This example shows three columns selected from the “student” table and one calculated column. The database stores the studentID, FirstName, and LastName of the student. We can combine the First and the Last name columns to create the FullName calculated column. </p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">select</span> studentID<span class="token punctuation">,</span> FirstName<span class="token punctuation">,</span> LastName<span class="token punctuation">,</span> FirstName <span class="token operator">+</span> <span class="token string">\' \'</span> <span class="token operator">+</span> LastName <span class="token keyword">as</span> FullName\n<span class="token keyword">from</span> student<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code>+-----------+-------------------+------------+------------------------+\n| studentID | FirstName         | LastName   | FullName               |\n+-----------+-------------------+------------+------------------------+\n|         1 | Monique           | Davis      | Monique Davis          |\n|         2 | Teri              | Gutierrez  | Teri Gutierrez         |\n|         3 | Spencer           | Pautier    | Spencer Pautier        |\n|         4 | Louis             | Ramsey     | Louis Ramsey           |\n|         5 | Alvin             | Greene     | Alvin Greene           |\n|         6 | Sophie            | Freeman    | Sophie Freeman         |\n|         7 | Edgar Frank "Ted" | Codd       | Edgar Frank "Ted" Codd |\n|         8 | Donald D.         | Chamberlin | Donald D. Chamberlin   |\n|         9 | Raymond F.        | Boyce      | Raymond F. Boyce       |\n+-----------+-------------------+------------+------------------------+\n9 rows in set (0.00 sec)</code></pre>\n      </div>\n<p>*As with all of these SQL things there is MUCH MORE to them than what’s in this introductory guide.  </p>\n<p>I hope this at least gives you enough to get started.  </p>\n<p>Please see the manual for your database manager and have fun trying different options yourself.</p>',fields:{slug:"/sql/sql-select-statement/"},frontmatter:{title:"SQL Select Statement"}}},pathContext:{slug:"/sql/sql-select-statement/"}}}});
//# sourceMappingURL=path---sql-sql-select-statement-470f255438968d1a3b9c.js.map