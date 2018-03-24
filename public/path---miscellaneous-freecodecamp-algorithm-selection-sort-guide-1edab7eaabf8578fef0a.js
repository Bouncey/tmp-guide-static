webpackJsonp([0x1f29b440205ecd00],{"./node_modules/json-loader/index.js!./.cache/json/miscellaneous-freecodecamp-algorithm-selection-sort-guide.json":function(n,e){n.exports={data:{markdownRemark:{html:"<p>The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from the unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.<br>\n1. The subarray which is already sorted.<br>\n2. Remaining subarray which is unsorted.</p>\n<p>In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.</p>\n<h2>Example</h2>\n<p><a href='http://www.sorting-algorithms.com/selection-sort' target='_blank' rel='nofollow'>Animation of SelectionSort</a></p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>arr<a href='https://repl.it/CZa0' target='_blank' rel='nofollow'>] = 64 25 12 22 11\n\n# Placing the minimum element in arr[0...4] in the beginning\n11 25 12 22 64\n\n# Placing the minimum element in arr[1...4] in the beginning\n11 12 25 22 64\n\n# Placing the minimum element in arr[2...4] in the beginning\n11 12 22 25 64\n\n# Placing the minimum element in arr[3...4] in the beginning\n11 12 22 25 64</code></pre>\n      </div>\n<h4>C++ Implementation</h4>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>void selection_sort(int array[], int n)\n{\n    // Contains index of minimum element in unsorted subarray\n    int min_index;\n\n    // Move boundary of unsorted subarray\nfor(int i = 0; i < n-1; i++)\n{\n    // Find the minimum element in unsorted subarray\n    min_index = i;\n    for(int j = i+1; j < n; j++)\n    {\n        // If present element is less than element at min_index\n        // Then change min_index to present index\n        if(array[j] < array[min_index])\n        {\n            min_index = j;\n        }\n    }\n\n    // Swap the element at min_index with the first element\n    int temp;\n    temp = array[min_index];\n    array[min_index] = array[i];\n    array[i] = temp;\n}\n}</code></pre>\n      </div>\n<p>:rocket: [Run Code</a> #### Python Implementation  </p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>def selection_sort(arr):\n    for i in range(len(arr)):\n        min_x = i\n        for j in range(i+1,len(arr)):\n            if arr<a href='https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 \":rocket:\"' target='_blank' rel='nofollow'>j] < arr[min_x]:\n                min_x = j\n        arr[min_x], arr[i] = arr[i], arr[min_x]\n\narr = [64, 25, 12, 22, 11]\nselection_sort(arr)\nprint(arr) # Prints [11, 12, 22, 25, 64]</code></pre>\n      </div>\n<p><img src=\"https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3\" title=\":rocket:\" alt=\":rocket:\" class=\"forum-image\"> <a href='https://repl.it/CXwQ' target='_blank' rel='nofollow'>Run Code</a></p>\n<h4><a href='https://www.freecodecamp.com/videos/big-o-notation-what-it-is-and-why-you-should-care' target='_blank' rel='nofollow'>Complexity of Algorithm</a></h4>\n<p><strong>Time Complexity:</strong> O(n*n) Due to the two nested loops.</p>",fields:{slug:"/miscellaneous/freecodecamp-algorithm-selection-sort-guide/"},frontmatter:{title:"Freecodecamp Algorithm Selection Sort Guide"}}},pathContext:{slug:"/miscellaneous/freecodecamp-algorithm-selection-sort-guide/"}}}});
//# sourceMappingURL=path---miscellaneous-freecodecamp-algorithm-selection-sort-guide-1edab7eaabf8578fef0a.js.map