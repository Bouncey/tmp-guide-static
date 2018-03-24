webpackJsonp([0x92041369040f580],{"./node_modules/json-loader/index.js!./.cache/json/miscellaneous-get-screen-size-in-pixels.json":function(e,o){e.exports={data:{markdownRemark:{html:'<p>There may be times where your JS application needs to know what the size of the screen is to be able to do certain actions.</p>\n<p>Luckily for us, there are built in JavaScript functions that can easily grab different dimensions of the screen on the user’s device in pixels. What to use is dependent on what you’d like to do.</p>\n<h2>Get User’s Resolution</h2>\n<p>You might wish to do something involving the user’s device resolution. In this case, you should use the built-in <code>screen.width</code> and <code>screen.height</code> properties. These give you the size of the screen you’re dealing with. <strong>This is not the area you have to work with on the page; these values represent the entirety of the screen i.e. the user’s display resolution.</strong></p>\n<h2>Get Browser Size</h2>\n<p>There might be an interesting application for dealing with the browser’s current size. If you need to access these dimensions, use the <code>screen.availWidth</code> and <code>screen.availHeight</code> properties to do so. Remember, these are the dimensions of the entire browser window, from the top of the browser window down to where the browser meets a taskbar or the edge of your desktop, depending on your setup.</p>\n<p><strong>An interesting note</strong>: <code>screen.availHeight</code> can also be used to figure out how tall a taskbar is on a computer. If your browser resolution is say <code>1366 x 768</code>, and <code>screen.availHeight</code> reports 728 pixels, then your taskbar is 40 pixels high. You can also calculate taskbar height by subtracting <code>screen.height</code> and <code>screen.availHeight</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>var taskbarHeight = parseInt(screen.height,10) - parseInt(screen.availHeight,10) + " pixels";\n/*\nFor a user that has a screen resolution of 1366 x 768 pixels, their taskbar is likely 40 pixels if using Windows 10 with no added accessibility features.\n*/</code></pre>\n      </div>\n<h2>Get Viewing Window Size</h2>\n<p>These properties are interesting and could be used to create some nifty effects. You can use <code>window.innerHeight</code> and <code>window.innerWidth</code> to get the size of the window for the web page as the user sees it. These values are not static and will change depending upon what is happening with the browser itself. In other words, if the browser itself is small, these values will be smaller, and if the browser is maximized, they’ll be larger.</p>\n<p>If, for example, you are working in Google Chrome and you open the console (must be docked to a side of the window), <code>window.innerHeight</code> will change to reflect the height of the console because part of the window will be blocked. You can test this out by calling <code>window.innerHeight</code>, take note of the value, then increase the size of the console, and call <code>window.innerHeight</code> again.</p>\n<p>These properties will also change if your browser is maximized or resized in any way. At a browser’s maximum size, the property <code>window.innerWidth</code> is the same as both <code>screen.width</code> and <code>screen.availWidth</code> (unless there is a taskbar on the side, in which case <code>screen.availWidth</code> will not be equal). <code>window.innerHeight</code> is equal to the amount of area in the window of the page itself (the area of the web page).</p>\n<h2>Get Height and Width of Web Page</h2>\n<p>If you need to see how tall or wide your web page actually is, there are properties to grab these dimensions: <code>document.body.offsetWidth</code> and <code>document.body.offsetHeight</code>. These properties represent the size of the content in the body of the page itself. A page with no content has a <code>document.body.offsetHeight</code> of close to the same value as <code>window.innerHeight</code> depending on what margins/padding are set on the body of the document. If margins and padding are set to <code>0</code> on the html root element and the body of the document, then <code>document.body.offsetHeight</code> and <code>window.innerHeight</code> will be equal with no content.</p>\n<p>These properties could be used to interact with your page/application depending on what you want to do.</p>\n<h2>Conclusion</h2>\n<p>Which property to use is based solely upon what you wish to do. Read what each of them do, and decide for yourself which properties you need to use for your project.</p>',fields:{slug:"/miscellaneous/get-screen-size-in-pixels/"},frontmatter:{title:"Get Screen Size in Pixels"}}},pathContext:{slug:"/miscellaneous/get-screen-size-in-pixels/"}}}});
//# sourceMappingURL=path---miscellaneous-get-screen-size-in-pixels-306ec9fb20717ae0ec09.js.map