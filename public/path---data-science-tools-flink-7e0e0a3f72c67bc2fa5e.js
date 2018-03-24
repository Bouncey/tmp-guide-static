webpackJsonp([0x285657fa20685c00],{"./node_modules/json-loader/index.js!./.cache/json/data-science-tools-flink.json":function(e,n){e.exports={data:{markdownRemark:{html:"<h2>Flink</h2>\n<p>Apache Flink is an open source stream processing framework with powerful stream- and batch-processing capabilities.</p>\n<p>The core of Apache Flink is a distributed streaming dataflow engine written in Java and Scala. Flink executes arbitrary dataflow programs in a data-parallel and pipelined manner.\nFlink’s pipelined runtime system enables the execution of bulk/batch and stream processing programs. Furthermore, Flink’s runtime supports the execution of iterative algorithms natively.\nFlink provides a high-throughput, low-latency streaming engine as well as support for event-time processing and state management. Flink applications are fault-tolerant in the event of machine failure and support exactly-once semantics.\nPrograms can be written in Java, Scala, Python, and SQL and are automatically compiled and optimized into dataflow programs that are executed in a cluster or cloud environment.</p>\n<p>Flink does not provide its own data storage system and provides data source and sink connectors to systems such as Amazon Kinesis, Apache Kafka, HDFS, Apache Cassandra, and ElasticSearch.</p>\n<p><img src=\"https://flink.apache.org/img/flink-home-graphic-update.svg\" alt=\"Flink workflow\"></p>\n<p><strong>What Is New in Apache Flink?</strong></p>\n<ul>\n<li>Flink implements actual streaming processing and not imitates it with micro-batch processing. In Spark streaming is a special case of batching, while in Flink batching is a special case of streaming (stream of a finite size)</li>\n<li>Flink has better support for cyclical and iterative processing </li>\n<li>Flink has lower latency and higher throughput</li>\n<li>Flink has more powerful windows operators</li>\n<li>Flink implements lightweight distributed snapshots that has low overhead and only-once processing guarantees in stream processing, without using micro batching as Spark does</li>\n<li>Flink supports mutable state in stream processing</li>\n</ul>\n<h3>Features</h3>\n<ul>\n<li>A streaming-first runtime that supports both batch processing and data streaming programs</li>\n<li>Elegant and fluent APIs in Java and Scala</li>\n<li>A runtime that supports very high throughput and low event latency at the same time</li>\n<li>Support for <em>event time</em> and <em>out-of-order</em> processing in the DataStream API, based on the <em>Dataflow Model</em></li>\n<li>Flexible windowing (time, count, sessions, custom triggers) accross different time semantics (event time, processing time)</li>\n<li>Fault-tolerance with <em>exactly-once</em> processing guarantees</li>\n<li>Natural back-pressure in streaming programs</li>\n<li>Libraries for Graph processing (batch), Machine Learning (batch), and Complex Event Processing (streaming)</li>\n<li>Built-in support for iterative programs (BSP) in the DataSet (batch) API</li>\n<li>Custom memory management for efficient and robust switching between in-memory and out-of-core data processing algorithms</li>\n<li>Compatibility layers for Apache Hadoop MapReduce and Apache Storm</li>\n<li>Integration with YARN, HDFS, HBase, and other components of the Apache Hadoop ecosystem</li>\n</ul>\n<h3>Flink Usage</h3>\n<p>Prerequisites for building Flink:</p>\n<ul>\n<li>Unix-like environment (We use Linux, Mac OS X, Cygwin)</li>\n<li>git</li>\n<li>Maven (we recommend version 3.0.4)</li>\n<li>Java 7 or 8</li>\n</ul>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>git clone https://github.com/apache/flink.git\ncd flink\nmvn clean package -DskipTests # this will take up to 10 minutes</code></pre>\n      </div>\n<h2>Developing Flink</h2>\n<p>The Flink committers use IntelliJ IDEA to develop the Flink codebase.\nWe recommend IntelliJ IDEA for developing projects that involve Scala code.</p>\n<p>Minimal requirements for an IDE are:</p>\n<ul>\n<li>Support for Java and Scala (also mixed projects)</li>\n<li>Support for Maven with Java and Scala</li>\n</ul>\n<h4>More Information:</h4>\n<ul>\n<li>Flink website: <a href='https://flink.apache.org/' target='_blank' rel='nofollow'>Apache Flink</a></li>\n<li>Flink documentation: <a href='https://ci.apache.org/projects/flink/flink-docs-release-1.3/' target='_blank' rel='nofollow'>flinkdocs</a></li>\n<li>Quick flink tutorial: <a href='https://www.linkedin.com/pulse/introduction-apache-flink-quickstart-tutorial-malini-shukla/' target='_blank' rel='nofollow'>quick start</a></li>\n<li>How to guide: <a href='https://data-artisans.com/blog/kafka-flink-a-practical-how-to' target='_blank' rel='nofollow'>howto</a></li>\n<li>Flink vs Spark: <a href='http://www.developintelligence.com/blog/2017/02/comparing-contrasting-apache-flink-vs-spark/' target='_blank' rel='nofollow'>comparison</a></li>\n</ul>",fields:{slug:"/data-science-tools/flink/"},frontmatter:{title:"Flink"}}},pathContext:{slug:"/data-science-tools/flink/"}}}});
//# sourceMappingURL=path---data-science-tools-flink-7e0e0a3f72c67bc2fa5e.js.map