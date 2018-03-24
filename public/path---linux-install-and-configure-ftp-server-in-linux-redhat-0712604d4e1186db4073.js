webpackJsonp([0x5a36d2e90b5e8c00],{"./node_modules/json-loader/index.js!./.cache/json/linux-install-and-configure-ftp-server-in-linux-redhat.json":function(e,n){e.exports={data:{markdownRemark:{html:"<h2>Install and configure FTP server in Redhat/Centos Linux</h2>\n<p>FTP stands for File Transfer Protocol. It was written by Abhay Bhushan and published as RFC 114 on 16 April 1971.\nIt is supported by all operating system and browsers. It is built on a client-server architecture.</p>\n<h2>Install and configure FTP server in Redhat/Centos Linux</h2>\n<p>Step 1: We will use localhost for our machine to setup ftp server.<br></p>\n<p>Step 2: Install vsftpd (very secure FTP daemon) package.<br></p>\n<p><code>yum install -y vsftpd</code><br></p>\n<p>Step 3: Start FTP Server when system on.<br></p>\n<p><code>systemctl enable vsftpd.service</code><br></p>\n<p>Step 4:</b> Checking the status of ftp server<br></p>\n<p><code>systemctl status vsftpd.service</code><br></p>\n<p>Step 5: Configure vsftpd package. We will edit<br>\n<code>/etc/vsftpd/vsftpd.conf</code></p>\n<p><code>Change the line which contain anonymous_enable=NO to anonymous_enable=YES</code><br>\n<code>This will give permit any one to access FTP server with authentication.</code><br>\n<code>Change the following to YES</code><br>\n<code>local_enable=YES</code><br>\n<code>write_enable=YES&#x3C;br></code><br></p>\n<p>Step 6: Start FTP Server<br>\n<code>systemctl start vsftpd.service</code></p>\n<p>Step 7: Install FTP Client<br>\n<code>yum install -y lftpd</code><br></p>\n<p>Step 8: Connect ftp to localhost<br>\n<code>lftp localhost</code></p>",fields:{slug:"/linux/install-and-configure-ftp-server-in-linux-redhat/"},frontmatter:{title:"Install and configure FTP server in Redhat/Centos Linux"}}},pathContext:{slug:"/linux/install-and-configure-ftp-server-in-linux-redhat/"}}}});
//# sourceMappingURL=path---linux-install-and-configure-ftp-server-in-linux-redhat-0712604d4e1186db4073.js.map