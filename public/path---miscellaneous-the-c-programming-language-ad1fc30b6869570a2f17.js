webpackJsonp([0x24f33292ed463e00],{"./node_modules/json-loader/index.js!./.cache/json/miscellaneous-the-c-programming-language.json":function(e,n){e.exports={data:{markdownRemark:{html:"<h2>Basics</h2>\n<ul>\n<li>Setup</li>\n<li>Your First C# Program</li>\n<li>Types and Variables</li>\n<li>Flow Control Statements</li>\n<li>Operators</li>\n<li>Strings</li>\n<li>Classes, Objects, Interface and Main Methods</li>\n<li>Fields and Properties</li>\n<li>Scope and Accessibility Modifiers</li>\n<li>Handling Exceptions</li>\n</ul>\n<h2>Intermediate</h2>\n<ul>\n<li>Generics</li>\n<li>Events, Delegates and Lambda Expressions</li>\n<li>Collection Framework</li>\n<li>LINQ</li>\n</ul>\n<h2>Advanced</h2>\n<ul>\n<li>Asynchronous Programming (Async and Await)</li>\n<li>Task Parallel Library</li>\n</ul>\n<h2>What’s New in C# 6</h2>\n<ul>\n<li>Null-Conditional Operator</li>\n<li>Auto-Property Initializers</li>\n<li>Nameof Expressions</li>\n<li>Expression Bodied Functions and Properties</li>\n<li>Other Features</li>\n</ul>\n<h2>Object-Oriented principles (OOP)</h2>\n<ul>\n<li>Encapsulation</li>\n<li>Abstraction</li>\n<li>Inheritance</li>\n<li>Polymorphism</li>\n</ul>\n<h2>Solid principles</h2>\n<ul>\n<li>Single Responsibility Principle</li>\n<li>Open Closed Principle</li>\n<li>Liskov Substitution Principle</li>\n<li>Interface Segregation Principle</li>\n<li>Dependency Inversion Principle</li>\n</ul>\n<h2>C# Best practices, Design Patterns &#x26; Test Driven Development (TDD)</h2>\n<h2>Setup</h2>\n<p><a href='http://www.linqpad.net/' target='_blank' rel='nofollow'>LinqPad</a> is an .NET scratchpad to quickly test your C# code snippets.The standard edition is free and a perfect tool for beginners to execute language statements, expressions and programs.</p>\n<p>Alternatively, you could also download <a href='https://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx' target='_blank' rel='nofollow'>Visual Studio Community 2015</a> which is an extensible <a href='https://en.wikipedia.org/wiki/Integrated_development_environment' target='_blank' rel='nofollow'>IDE</a> used by most professionals for creating enterprise applications.</p>\n<h2>Your First C# Program</h2>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>//this is the single line comment\n\n/** This is multiline comment,\ncompiler ignores any code inside comment blocks.\n**/\n\n//This is the namespace, part of the standard .NET Framework Class Library\nusing System;\n// namespace defines the scope of related objects into packages\nnamespace Learning.CSharp\n{  \n  // name of the class, should be same as of .cs file\n  public class Program\n  {\n    //entry point method for console applications\n   public static void Main()\n    {\n      //print lines on console\n      Console.WriteLine(\"Hello, World!\");\n      //Reads the next line of characters from the standard input stream.Most common use is to pause program execution before clearing the console.\n      Console.ReadLine();\n    }\n  }\n}</code></pre>\n      </div>\n<p>Every C# console application must have a <a href='https://msdn.microsoft.com/en-gb/library/acy3edy3.aspx' target='_blank' rel='nofollow'>Main method</a> which is the entry point of the program.</p>\n<p>Edit <a href='https://dotnetfiddle.net/kY7QRm' target='_blank' rel='nofollow'>HelloWorld</a> in .NET Fiddle, a tool inspired by <a href='http://jsfiddle.net' target='_blank' rel='nofollow'>JSFiddle</a> where you can alter the code snippets and check the output for yourself. Note, this is just to share and test the code snippets, not to be used for developing applications.</p>\n<p>If you are using visual Studio, follow this <a href='https://msdn.microsoft.com/en-us/library/k1sx6ed2.aspx' target='_blank' rel='nofollow'>tutorial</a> to create console application and understand your first C# program.</p>\n<h2>Types and Variables</h2>\n<p>C# is a strongly typed language. Every variable has a type. Every expression or statement evaluates to a value. There are two kinds of types in C#</p>\n<ul>\n<li>Value types</li>\n<li>Reference types.</li>\n</ul>\n<p><strong>Value Types</strong> : Variables that are value types directly contain values. Assigning one value type variable to another copies the contained value.</p>\n<p><a href='https://dotnetfiddle.net/JCkTxb' target='_blank' rel='nofollow'>Edit in .NET Fiddle</a></p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>int a = 10;\nint b = 20;\na=b;\nConsole.WriteLine(a); //prints 20\nConsole.WriteLine(b); //prints 20</code></pre>\n      </div>\n<p>Note that in other dynamic languages this could be different, but in C# this is always a value copy. When value type is created, a single space most likely in <a href='http://gribblelab.org/CBootcamp/7_Memory_Stack_vs_Heap.html#orgheadline2' target='_blank' rel='nofollow'>stack</a> is created, which is a “LIFO” (last in, first out) data structure. The stack has size limits and memory operations are efficient. Few examples of built-in data types are <code>int, float, double, decimal, char and string</code>.</p>\n<table>\n<thead>\n<tr>\n<th>Type</th>\n<th>Example</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><em>Integer</em></td>\n<td><code>int fooInt = 7;</code></td>\n<td><strong>Signed 32-bit</strong>\n Integer</td>\n</tr>\n<tr>\n<td><em>Long</em></td>\n<td><code>long fooLong = 3000L;</code></td>\n<td><strong>Signed 64-bit</strong>\n integer.\n<strong>L is used to specify that this variable value is of type long/ulong</strong></td>\n</tr>\n<tr>\n<td><em>Double</em></td>\n<td><code>double fooDouble = 20.99;</code></td>\n<td>Precision: \n<strong>15-16 digits</strong></td>\n</tr>\n<tr>\n<td><em>Float</em></td>\n<td><code>float fooFloat = 314.5f;</code></td>\n<td>Precision: \n<strong>7 digits</strong>\n.\n<strong>F is used to specify that this variable value is of type float</strong></td>\n</tr>\n<tr>\n<td><em>Decimal</em></td>\n<td><code>decimal fooDecimal = 23.3m;</code></td>\n<td>Precision: \n<strong>28-29 digits</strong>\n.Its more precision and smaller range makes it appropriate for \n<strong>financial and monetary calculations</strong></td>\n</tr>\n<tr>\n<td><em>Char</em></td>\n<td><code>char fooChar = 'Z';</code></td>\n<td>A single \n<strong>16-bit Unicode character</strong></td>\n</tr>\n<tr>\n<td><em>Boolean</em></td>\n<td><code>bool fooBoolean = false;</code></td>\n<td>Boolean - \n<strong>true &#x26; false</strong></td>\n</tr>\n<tr>\n<td><em>String</em></td>\n<td><code>string fooString = \"\\\"escape\\\" quotes and add \\n (new lines) and \\t (tabs);</code></td>\n<td><strong>A string of Unicode characters.</strong></td>\n</tr>\n</tbody>\n</table>\n<p>For complete list of all built-in data types see <a href='https://msdn.microsoft.com/en-us/library/ms228360' target='_blank' rel='nofollow'>here</a></p>\n<p><a href='https://msdn.microsoft.com/en-us/library/490f96s2.aspx' target='_blank' rel='nofollow'><strong>Reference types</strong></a> : Variables of reference types store references to their objects, which means they store the address to the location of data on the <a href='http://gribblelab.org/CBootcamp/7_Memory_Stack_vs_Heap.html#orgheadline2' target='_blank' rel='nofollow'>stack</a>, also known as pointers. Actual data is stored on the <a href='http://gribblelab.org/CBootcamp/7_Memory_Stack_vs_Heap.html#orgheadline3' target='_blank' rel='nofollow'>heap</a> memory. Assigning reference type to another doesn’t copy the data, instead it creates the second copy of reference which points to the same location on the heap.</p>\n<p>In heap, objects are allocated and deallocated in random order that is why this requires the overhead of memory management and <a href='https://msdn.microsoft.com/en-us/library/hh156531(v=vs.110' target='_blank' rel='nofollow'>garbage collection</a>.aspx).</p>\n<p>Unless you are writing <a href='https://msdn.microsoft.com/en-us/library/t2yzs44b.aspx' target='_blank' rel='nofollow'>unsafe code</a> or dealing with <a href='https://msdn.microsoft.com/en-us/library/sd10k43k(v=vs.100' target='_blank' rel='nofollow'>unmanaged code</a>.aspx), you don’t need to worry about the lifetime of your memory locations. .NET compiler and CLR will take care of this, but it’s still good to keep this mind in order to optimize performance of your applications.</p>\n<p>More information <a href='http://www.c-sharpcorner.com/UploadFile/rmcochran/csharp_memory01122006130034PM/csharp_memory.aspx?ArticleID=9adb0e3c-b3f6-40b5-98b5-413b6d348b91' target='_blank' rel='nofollow'>here</a></p>\n<h2>Flow Control Statements</h2>\n<ul>\n<li>\n<p><a href='https://msdn.microsoft.com/en-us/library/5011f09h.aspx' target='_blank' rel='nofollow'>If else</a> statement : <a href='https://dotnetfiddle.net/IFVB33' target='_blank' rel='nofollow'>Edit in .NET Fiddle</a></p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>        int myScore = 700;\n        if (myScore == 700)\n        {\n            Console.WriteLine(\"I get printed on the console\");\n        }\n        else if (myScore > 10)\n        {\n            Console.WriteLine(\"I don't\");\n        }\n        else\n        {\n            Console.WriteLine(\"I also don't\");\n        }\n\n        /** Ternary operators\n         A simple if/else can also be written as follows\n         <condition> ? <true> : <false> **/\n        int myNumber = 10;\n        string isTrue = myNumber == 10 ? \"Yes\" : \"No\";</code></pre>\n      </div>\n</li>\n<li>\n<p><a href='https://msdn.microsoft.com/en-GB/library/06tc147t.aspx' target='_blank' rel='nofollow'>Switch</a> statement : <a href='https://dotnetfiddle.net/lPZftO' target='_blank' rel='nofollow'>Edit in .NET Fiddle</a></p>\n<p>using System;</p>\n<p>public class Program\n{\npublic static void Main()\n{\nint myNumber = 0;\nswitch (myNumber)\n{\n// A switch section can have more than one case label.\ncase 0:\ncase 1:\n{\nConsole.WriteLine(“Case 0 or 1”);\nbreak;\n}</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>        // Most switch sections contain a jump statement, such as a break, goto, or return.;\n        case 2:\n            Console.WriteLine(\"Case 2\");\n            break;\n        // 7 - 4 in the following line evaluates to 3.\n        case 7 - 4:\n            Console.WriteLine(\"Case 3\");\n            break;\n        // If the value of myNumber is not 0, 1, 2, or 3 the\n        //default case is executed.*\n        default:\n            Console.WriteLine(\"Default case. This is also optional\");\n            break; // could also throw new Exception() instead\n    }\n}</code></pre>\n      </div>\n<p>}</p>\n</li>\n<li>\n<p><a href='https://msdn.microsoft.com/en-us/library/ch45axte.aspx' target='_blank' rel='nofollow'>For</a> &#x26; <a href='https://msdn.microsoft.com/en-gb/library/ttw7t8t6.aspx' target='_blank' rel='nofollow'>Foreach</a> : <a href='https://dotnetfiddle.net/edxtvq' target='_blank' rel='nofollow'>Edit in .NET Fiddle</a></p>\n<p>for (int i = 0; i &#x3C; 10; i++)\n{\nConsole.WriteLine(i); //prints  0-9\n}</p>\n<p>Console.WriteLine(Environment.NewLine);\nfor (int i = 0; i &#x3C;= 10; i++)\n{\nConsole.WriteLine(i); //prints  0-10\n}</p>\n<p>Console.WriteLine(Environment.NewLine);\nfor (int i = 10 - 1; i >= 0; i—) //decrement loop\n{\nConsole.WriteLine(i); //prints 9-0\n}</p>\n<p>Console.WriteLine(Environment.NewLine);\n//for (; ; )\n{\n// All of the expressions are optional. This statement\n//creates an infinite loop.*\n//<br>\n}</p>\n</li>\n<li>\n<p><a href='https://msdn.microsoft.com/en-us/library/2aeyhxcd.aspx' target='_blank' rel='nofollow'>While</a> &#x26; <a href='https://msdn.microsoft.com/en-us/library/370s1zax.aspx' target='_blank' rel='nofollow'>do-while</a> : <a href='https://dotnetfiddle.net/O5hOF1' target='_blank' rel='nofollow'>Edit in .NET Fiddle</a></p>\n<p>// Continue the while-loop until index is equal to 10.\nint i = 0;\nwhile (i &#x3C; 10)\n{\nConsole.Write(“While statement ”);\nConsole.WriteLine(i);// Write the index to the screen.\ni++;// Increment the variable.\n}</p>\n<p>  int number = 0;\n// do work first, until condition is satisfied i.e Terminates when number equals 4.\ndo\n{\nConsole.WriteLine(number);//prints the value from 0-4\nnumber++; // Add one to number.\n} while (number &#x3C;= 4);</p>\n</li>\n</ul>",fields:{slug:"/miscellaneous/the-c-programming-language/"},frontmatter:{title:"The C Programming Language"}}},pathContext:{slug:"/miscellaneous/the-c-programming-language/"}}}});
//# sourceMappingURL=path---miscellaneous-the-c-programming-language-ad1fc30b6869570a2f17.js.map