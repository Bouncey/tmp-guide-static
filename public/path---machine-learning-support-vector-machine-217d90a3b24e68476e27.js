webpackJsonp([0xc136cefc43c12000],{"./node_modules/json-loader/index.js!./.cache/json/machine-learning-support-vector-machine.json":function(n,s){n.exports={data:{markdownRemark:{html:'<h2>Support Vector Machine</h2>\n<p><img src="https://i.imgur.com/KUeOSK3.png" alt="SVM vs logistic regression"></p>\n<p>A SVM cost function seeks to approximate the logistic function with a piecewise linear. This ML algorithm is used for classification problems and is part of the subset of supervised learning algorithms.</p>\n<h3>The Cost Function</h3>\n<p><img src="https://i.imgur.com/SOhv2jZ.png" alt="SVM Cost Function"></p>\n<p>The Cost Function is used to train the SVM. By minimizing the value of J(theta), we can ensure that the SVM is as accurate as possible. In the equation, the functions cost1 and cost0 refer to the cost for an example where y=1 and the cost for an example where y=0. Cost, for SVMs, is determined by kernel (similarity) functions.</p>\n<h3>Kernels</h3>\n<p>Polynomial features are possibly computationally expensive and may slow down runtime with large datasets.\nRather than adding more polynomial features, add “landmarks” against which you test the proximity of other datapoints.\nEach member of the training set is a landmark.\nA kernel is the “similarity function” that measures how close an input is to a certain marker.</p>\n<h3>Large Margin Classifier</h3>\n<p>An SVM will find the line (or hyperplane in the more general case) that splits the data with the largest margin.\nWhile outliers may sway the line to one direction, a small enough C value will enforce regularization.\nThis new regularizing works the same with 1/\\lambda, as seen in linear and logistic regression, but here we modify the cost component.</p>\n<h4>More Information:</h4>\n<p><a href="https://www.coursera.org/learn/machine-learning/">Andrew Ng’s ML Course</a>\n<a href="https://www.youtube.com/watch?v=1NxnPkZM9bc">Standalone Video Lecture</a>\n<a href="https://en.wikipedia.org/wiki/Support_vector_machine">SVM on Wikipedia</a>\n=======\nA Support Vector Machine (SVM) is a discriminative classifier formally defined by a separating hyperplane. In other words, given labeled training data (supervised learning), the algorithm outputs an optimal hyperplane which categorizes new examples.</p>\n<p>The following is the code written for training, predicting and finding accuracy for SVM in python. This is done using Numpy, however, we can also write using scikit-learn in just a function call.</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np\n\n\n<span class="token keyword">class</span> <span class="token class-name">Svm</span> <span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token triple-quoted-string string">"""" Svm classifier """</span>\n\n    <span class="token keyword">def</span> __init__ <span class="token punctuation">(</span>self<span class="token punctuation">,</span> inputDim<span class="token punctuation">,</span> outputDim<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        self<span class="token punctuation">.</span>W <span class="token operator">=</span> None\n       \n        <span class="token comment" spellcheck="true"># - Generate a random svm weight matrix to compute loss                 #</span>\n        <span class="token comment" spellcheck="true">#   with standard normal distribution and Standard deviation = 0.01.    #</span>\n       \n        sigma <span class="token operator">=</span><span class="token number">0.01</span>\n        self<span class="token punctuation">.</span>W <span class="token operator">=</span> sigma <span class="token operator">*</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>randn<span class="token punctuation">(</span>inputDim<span class="token punctuation">,</span>outputDim<span class="token punctuation">)</span>\n   \n  \n\n    <span class="token keyword">def</span> calLoss <span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> reg<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token triple-quoted-string string">"""\n        Svm loss function\n        D: Input dimension.\n        C: Number of Classes.\n        N: Number of example.\n        Inputs:\n        - x: A numpy array of shape (batchSize, D).\n        - y: A numpy array of shape (N,) where value &lt; C.\n        - reg: (float) regularization strength.\n        Returns a tuple of:\n        - loss as single float.\n        - gradient with respect to weights self.W (dW) with the same shape of self.W.\n        """</span>\n        loss <span class="token operator">=</span> <span class="token number">0.0</span>\n        dW <span class="token operator">=</span> np<span class="token punctuation">.</span>zeros_like<span class="token punctuation">(</span>self<span class="token punctuation">.</span>W<span class="token punctuation">)</span>\n        \n        <span class="token comment" spellcheck="true"># - Compute the svm loss and store to loss variable.                        #</span>\n        <span class="token comment" spellcheck="true"># - Compute gradient and store to dW variable.                              #</span>\n        <span class="token comment" spellcheck="true"># - Use L2 regularization                                                  #</span>\n       \n        <span class="token comment" spellcheck="true">#Calculating score matrix</span>\n        s <span class="token operator">=</span> x<span class="token punctuation">.</span>dot<span class="token punctuation">(</span>self<span class="token punctuation">.</span>W<span class="token punctuation">)</span>\n        <span class="token comment" spellcheck="true">#Score with yi</span>\n        s_yi <span class="token operator">=</span> s<span class="token punctuation">[</span>np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span>x<span class="token punctuation">.</span>shape<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>y<span class="token punctuation">]</span>\n        <span class="token comment" spellcheck="true">#finding the delta</span>\n        delta <span class="token operator">=</span> s<span class="token operator">-</span> s_yi<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span>np<span class="token punctuation">.</span>newaxis<span class="token punctuation">]</span><span class="token operator">+</span><span class="token number">1</span>\n        <span class="token comment" spellcheck="true">#loss for samples</span>\n        loss_i <span class="token operator">=</span> np<span class="token punctuation">.</span>maximum<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>delta<span class="token punctuation">)</span>\n        loss_i<span class="token punctuation">[</span>np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span>x<span class="token punctuation">.</span>shape<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>y<span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">0</span>\n        loss <span class="token operator">=</span> np<span class="token punctuation">.</span>sum<span class="token punctuation">(</span>loss_i<span class="token punctuation">)</span><span class="token operator">/</span>x<span class="token punctuation">.</span>shape<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>\n        <span class="token comment" spellcheck="true">#Loss with regularization</span>\n        loss <span class="token operator">+=</span> reg<span class="token operator">*</span>np<span class="token punctuation">.</span>sum<span class="token punctuation">(</span>self<span class="token punctuation">.</span>W<span class="token operator">*</span>self<span class="token punctuation">.</span>W<span class="token punctuation">)</span>\n        <span class="token comment" spellcheck="true">#Calculating ds</span>\n        ds <span class="token operator">=</span> np<span class="token punctuation">.</span>zeros_like<span class="token punctuation">(</span>delta<span class="token punctuation">)</span>\n        ds<span class="token punctuation">[</span>delta <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>\n        ds<span class="token punctuation">[</span>np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span>x<span class="token punctuation">.</span>shape<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>y<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>\n        ds<span class="token punctuation">[</span>np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span>x<span class="token punctuation">.</span>shape<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>y<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span>np<span class="token punctuation">.</span>sum<span class="token punctuation">(</span>ds<span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>\n\n        dW <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">/</span>x<span class="token punctuation">.</span>shape<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>x<span class="token punctuation">.</span>T<span class="token punctuation">)</span><span class="token punctuation">.</span>dot<span class="token punctuation">(</span>ds<span class="token punctuation">)</span>\n        dW <span class="token operator">=</span> dW <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">*</span> reg<span class="token operator">*</span> self<span class="token punctuation">.</span>W<span class="token punctuation">)</span>\n        \n\n        <span class="token keyword">return</span> loss<span class="token punctuation">,</span> dW\n\n    <span class="token keyword">def</span> train <span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> lr<span class="token operator">=</span><span class="token number">1e</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">,</span> reg<span class="token operator">=</span><span class="token number">1e</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span> iter<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">,</span> batchSize<span class="token operator">=</span><span class="token number">200</span><span class="token punctuation">,</span> verbose<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token triple-quoted-string string">"""\n        Train this Svm classifier using stochastic gradient descent.\n        D: Input dimension.\n        C: Number of Classes.\n        N: Number of example.\n        Inputs:\n        - x: training data of shape (N, D)\n        - y: output data of shape (N, ) where value &lt; C\n        - lr: (float) learning rate for optimization.\n        - reg: (float) regularization strength.\n        - iter: (integer) total number of iterations.\n        - batchSize: (integer) number of example in each batch running.\n        - verbose: (boolean) Print log of loss and training accuracy.\n        Outputs:\n        A list containing the value of the loss at each training iteration.\n        """</span>\n\n        <span class="token comment" spellcheck="true"># Run stochastic gradient descent to optimize W.</span>\n        lossHistory <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n        <span class="token keyword">for</span> i <span class="token keyword">in</span> range<span class="token punctuation">(</span>iter<span class="token punctuation">)</span><span class="token punctuation">:</span>\n            xBatch <span class="token operator">=</span> None\n            yBatch <span class="token operator">=</span> None\n            \n            <span class="token comment" spellcheck="true"># - Sample batchSize from training data and save to xBatch and yBatch   #</span>\n            <span class="token comment" spellcheck="true"># - After sampling xBatch should have shape (batchSize, D)              #</span>\n            <span class="token comment" spellcheck="true">#                  yBatch (batchSize, )                                 #</span>\n            <span class="token comment" spellcheck="true"># - Use that sample for gradient decent optimization.                   #</span>\n            <span class="token comment" spellcheck="true"># - Update the weights using the gradient and the learning rate.        #</span>\n            \n            <span class="token comment" spellcheck="true">#creating batch</span>\n            num_train <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>choice<span class="token punctuation">(</span>x<span class="token punctuation">.</span>shape<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> batchSize<span class="token punctuation">)</span>\n            xBatch <span class="token operator">=</span> x<span class="token punctuation">[</span>num_train<span class="token punctuation">]</span>\n            yBatch <span class="token operator">=</span> y<span class="token punctuation">[</span>num_train<span class="token punctuation">]</span>\n            loss<span class="token punctuation">,</span> dW <span class="token operator">=</span> self<span class="token punctuation">.</span>calLoss<span class="token punctuation">(</span>xBatch<span class="token punctuation">,</span>yBatch<span class="token punctuation">,</span>reg<span class="token punctuation">)</span>\n            self<span class="token punctuation">.</span>W<span class="token operator">=</span> self<span class="token punctuation">.</span>W <span class="token operator">-</span> lr <span class="token operator">*</span> dW\n            lossHistory<span class="token punctuation">.</span>append<span class="token punctuation">(</span>loss<span class="token punctuation">)</span>\n\n            <span class="token comment" spellcheck="true"># Print loss for every 100 iterations</span>\n            <span class="token keyword">if</span> verbose <span class="token operator">and</span> i <span class="token operator">%</span> <span class="token number">100</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">and</span> len<span class="token punctuation">(</span>lossHistory<span class="token punctuation">)</span> <span class="token keyword">is</span> <span class="token operator">not</span> <span class="token number">0</span><span class="token punctuation">:</span>\n                <span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">\'Loop {0} loss {1}\'</span><span class="token punctuation">.</span>format<span class="token punctuation">(</span>i<span class="token punctuation">,</span> lossHistory<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n        <span class="token keyword">return</span> lossHistory\n\n    <span class="token keyword">def</span> predict <span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token triple-quoted-string string">"""\n        Predict the y output.\n        Inputs:\n        - x: training data of shape (N, D)\n        Returns:\n        - yPred: output data of shape (N, ) where value &lt; C\n        """</span>\n        yPred <span class="token operator">=</span> np<span class="token punctuation">.</span>zeros<span class="token punctuation">(</span>x<span class="token punctuation">.</span>shape<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n       \n        <span class="token comment" spellcheck="true"># -  Store the predict output in yPred                                    #</span>\n        \n        s <span class="token operator">=</span> x<span class="token punctuation">.</span>dot<span class="token punctuation">(</span>self<span class="token punctuation">.</span>W<span class="token punctuation">)</span>\n        yPred <span class="token operator">=</span> np<span class="token punctuation">.</span>argmax<span class="token punctuation">(</span>s<span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>\n        <span class="token keyword">return</span> yPred\n\n\n    <span class="token keyword">def</span> calAccuracy <span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        acc <span class="token operator">=</span> <span class="token number">0</span>\n        \n        <span class="token comment" spellcheck="true"># -  Calculate accuracy of the predict value and store to acc variable    </span>\n        yPred <span class="token operator">=</span> self<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>x<span class="token punctuation">)</span>\n        acc <span class="token operator">=</span> np<span class="token punctuation">.</span>mean<span class="token punctuation">(</span>y <span class="token operator">==</span> yPred<span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">100</span>\n        <span class="token keyword">return</span> acc\n</code></pre>\n      </div>\n<h4>More Information:</h4>\n<!-- Please add any articles you think might be helpful to read before writing the article -->\n<p><a href=\'http://scikit-learn.org/stable/modules/svm.html\' target=\'_blank\' rel=\'nofollow\'>Scikit-learn SVM</a></p>',fields:{slug:"/machine-learning/support-vector-machine/"},frontmatter:{title:"Support Vector Machine"}}},pathContext:{slug:"/machine-learning/support-vector-machine/"}}}});
//# sourceMappingURL=path---machine-learning-support-vector-machine-217d90a3b24e68476e27.js.map