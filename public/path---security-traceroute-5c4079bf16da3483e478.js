webpackJsonp([0x89aa24ea449b4000],{"./node_modules/json-loader/index.js!./.cache/json/security-traceroute.json":function(e,t){e.exports={data:{markdownRemark:{html:'<p><strong>Table of Contents</strong></p>\n<ul>\n<li><a href="#traceroute">Traceroute</a></li>\n<li><a href="#how-data-travels-across-the-internet">How data travels across the internet</a></li>\n<li><a href="#some-examples-for-usage">Some examples for Usage</a></li>\n<li><a href="#more-information">More Information</a> </li>\n</ul>\n<h2>Traceroute</h2>\n<p>Traceroute is a computer network diagnostic tool for displaying the route (path) and measuring transit delays of packets across an Internet Protocol (IP) network. The history of the route is recorded as the round-trip times of the packets received from each successive host (remote node) in the route (path); the sum of the mean times in each hop is a measure of the total time spent to establish the connection. Traceroute proceeds unless all (three) sent packets are lost more than twice, then the connection is lost and the route cannot be evaluated. Ping, on the other hand, only computes the final round-trip times from the destination point.</p>\n<h4>How data travels across the internet</h4>\n<p>Each computer on the traceroute is identified by its IP address, which is the nine-digit number separated by periods that identifies that computer’s unique network connection. Here are a few details regarding a traceroute:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>- The journey from one computer to another is known as a hop.\n- The amount of time it takes to make a hop is measured in milliseconds.\n- The information that travels along the traceroute is known as a packet.</code></pre>\n      </div>\n<p>A traceroute readout typically will display three separate columns for the hop time, as each traceroute sends out three separate packets of information to each computer. At the very top of the list, the traceroute will give the limit of how many lines of hops it will display—30 hops is often the maximum number. </p>\n<p>When a traceroute has difficulty accessing a computer, it will display the message “Request timed out.” Each of the hop columns will display an asterisk instead of a millisecond count.</p>\n<h4>Some examples for Usage</h4>\n<p>Most implementations include at least options to specify the number of queries to send per hop, time to wait for a response, the hop limit and port to use. Invoking traceroute with no specified options displays the list of available options, while man traceroute presents more details, including the displayed error flags. Simple example on Linux:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>[root@example ~]#  traceroute -w 3 -q 1 -m 16 www.google.com\ntraceroute to www.google.com (216.58.200.36), 16 hops max, 60 byte packets\n 1  192.168.4.2 (192.168.4.2)  0.136 ms\n 2  *\n 3  *\n 4  *\n 5  *\n 6  *\n 7  *\n 8  *\n 9  *\n10  *\n11  *\n12  *\n13  *\n14  *\n15  *\n16  *</code></pre>\n      </div>\n<p>In the example above, selected options are to wait for three seconds (instead of five), send out only one query to each hop (instead of three), limit the maximum number of hops to 16 before giving up (instead of 30), with www.google.com as the final host.</p>\n<p>This can help identify incorrect routing table definitions or firewalls that may be blocking ICMP traffic, or high port UDP in Unix ping, to a site. Note that a firewall may permit ICMP packets but not permit packets of other protocols.</p>\n<p>Traceroute is also used by penetration testers to gather information about network infrastructure and IP ranges around a given host.</p>\n<p>It can also be used when downloading data, and if there are multiple mirrors available for the same piece of data, one can trace each mirror to get a good idea of which mirror would be the fastest to use.</p>\n<h4>More Information</h4>\n<p>Read on more information on Traceroute:</p>\n<ul>\n<li><a href=\'https://support.microsoft.com/en-us/help/314868/how-to-use-tracert-to-troubleshoot-tcp-ip-problems-in-windows\' target=\'_blank\' rel=\'nofollow\'>How to Use TRACERT in Windows</a>\n-<a href=\'https://www.lifewire.com/traceroute-linux-command-4092586\' target=\'_blank\' rel=\'nofollow\'>How to Use TRACERT in Linux</a></li>\n</ul>',fields:{slug:"/security/traceroute/"},frontmatter:{title:"Traceroute"}}},pathContext:{slug:"/security/traceroute/"}}}});
//# sourceMappingURL=path---security-traceroute-5c4079bf16da3483e478.js.map