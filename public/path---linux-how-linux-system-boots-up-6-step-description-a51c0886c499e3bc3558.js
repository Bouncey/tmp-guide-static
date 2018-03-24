webpackJsonp([0x4b05f21a9bb39800],{"./node_modules/json-loader/index.js!./.cache/json/linux-how-linux-system-boots-up-6-step-description.json":function(e,t){e.exports={data:{markdownRemark:{html:'<h1>Linux Booting Process - 6 Step Descriptive Process</h1>\n<p>Operating system is defined as the low-level software that supports a computer’s basic functions,such as scheduling tasks and controlling peripherals. OS holds down these 6 high level stages of a typical Linux boot process.</p>\n<p><img src="https://raw.githubusercontent.com/Ayushverma8/tech-interview-handbook/master/LinuxBootingProcess.jpg" alt="Steps"></p>\n<h3>1. BIOS</h3>\n<ul>\n<li>BIOS stands for Basic Input/Output System</li>\n<li>Performs some system integrity checks over the HDD</li>\n<li>Searches, loads, and executes the boot loader program , mostly in MBR</li>\n<li>It looks for boot loader in floppy, cd-rom, or hard drive. We can press a    key (typically F12 of F2, but it depends on your system) during the BIOS startup to change the boot sequence.</li>\n<li>Once the boot loader program is detected and loaded into the memory, BIOS gives the control to it.</li>\n<li>So, in simple terms BIOS loads and executes the MBR boot loader</li>\n</ul>\n<h3>2. MBR</h3>\n<ul>\n<li>MBR stands for Master Boot Record.</li>\n<li>It is located in the 1st sector of the bootable disk. Typically /dev/hda, or /dev/sda. Why it’s sda and hda ? refer here for more.</li>\n<li>MBR is less than 512 bytes in size. This has three components 1) primary boot loader info in 1st 446 bytes 2) partition table info in next 64 bytes 3) mbr validation check in last 2 bytes.</li>\n<li>It contains information about GRUB (or LILO in old systems).</li>\n<li>So, in simple terms MBR loads and executes the GRUB boot loader.</li>\n</ul>\n<h3>3. GRUB</h3>\n<ul>\n<li>It is located in the 1st sector of the bootable disk. Typically /dev/hda, or /dev/sda. Why it’s sda and hda ? refer here for more.</li>\n<li>If you have multiple kernel images installed on your system, you can choose which one to be executed, by default only the major one boots up .</li>\n<li>GRUB displays a splash screen, waits for few seconds, if you don’t enter anything, it loads the default kernel image as specified in the grub configuration file.</li>\n<li>GRUB has the knowledge of the filesystem (the older Linux loader LILO didn’t understand filesystem).</li>\n<li>\n<p>Grub configuration file is /boot/grub/grub.conf (/etc/grub.conf is a link to this). The following is sample grub.conf of CentOS.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>#boot=/dev/sda\ndefault=0\ntimeout=5\nsplashimage=(hd0,0)/boot/grub/splash.xpm.gz\nhiddenmenu\ntitle CentOS (2.6.18-194.el5PAE)\n      root (hd0,0)\n      kernel /boot/vmlinuz-2.6.18-194.el5PAE ro root=LABEL=/\n      initrd /boot/initrd-2.6.18-194.el5PAE.img</code></pre>\n      </div>\n</li>\n</ul>\n<h3>4. Kernel</h3>\n<ul>\n<li>Mounts the root file system as specified in the “root=” in grub.conf</li>\n<li>Kernel executes the /sbin/init program</li>\n<li>It is the 1st program to be executed by Linux Kernel, it has the process id (PID) of 1. Do a ‘ps -ef | grep init’ and check the pid. You can also use netstat</li>\n<li>initrd stands for Initial RAM Disk.</li>\n<li>initrd is used by kernel as temporary root file system until kernel is booted and the real root file system is mounted. It also contains necessary drivers compiled inside, which helps it to access the hard drive partitions, and other hardware.</li>\n</ul>\n<h3>5. Init</h3>\n<ul>\n<li>\n<p>Looks at the /etc/inittab file to decide the Linux run level.</p>\n</li>\n<li>\n<p>Following are the available run levels</p>\n</li>\n<li>\n<p>0 — halt</p>\n</li>\n<li>\n<p>1 — Single user mode</p>\n</li>\n<li>\n<p>2 — Multiuser, without NFS</p>\n</li>\n<li>\n<p>3 — Full multiuser mode</p>\n</li>\n<li>\n<p>4 — unused</p>\n</li>\n<li>\n<p>5 — X11</p>\n</li>\n<li>\n<p>6 — reboot</p>\n</li>\n<li>\n<p>Init identifies the default initlevel from /etc/inittab and uses that to load all appropriate program.</p>\n</li>\n<li>\n<p>Execute ‘grep initdefault /etc/inittab’ on your system to identify the default run level</p>\n</li>\n<li>\n<p>If you want to get into trouble, you can set the default run level to 0 or 6. Since you know what 0 and 6 means, probably you might not do that.</p>\n</li>\n<li>\n<p>Typically you would set the default run level to either 3 or 5.</p>\n</li>\n</ul>\n<h3>6. Runlevel programs</h3>\n<ul>\n<li>When the Linux system is booting up, you might see various services getting started. For example, it might say “starting sendmail …. OK”. Those are the runlevel programs, executed from the run level directory as defined by your run level.</li>\n<li>Depending on your default init level setting, the system will execute the programs from one of the following directories.</li>\n<li>Run level 0 — /etc/rc.d/rc0.d/</li>\n<li>Run level 1 — /etc/rc.d/rc1.d/</li>\n<li>Run level 2 — /etc/rc.d/rc2.d/</li>\n<li>Run level 3 — /etc/rc.d/rc3.d/</li>\n<li>Run level 4 — /etc/rc.d/rc4.d/</li>\n<li>Run level 5 — /etc/rc.d/rc5.d/</li>\n<li>Run level 6 — /etc/rc.d/rc6.d/</li>\n<li>Under the /etc/rc.d/rc*.d/ directories, you would see programs that start with S and K.</li>\n<li>Programs starts with S are used during startup. S for startup.</li>\n<li>Programs starts with K are used during shutdown. K for kill.</li>\n<li>There are numbers right next to S and K in the program names. Those are the sequence number in which the programs should be started or killed.</li>\n</ul>',fields:{slug:"/linux/How linux system boots up - 6 step description/"},frontmatter:{title:"Linux Booting Process"}}},pathContext:{slug:"/linux/How linux system boots up - 6 step description/"}}}});
//# sourceMappingURL=path---linux-how-linux-system-boots-up-6-step-description-a51c0886c499e3bc3558.js.map