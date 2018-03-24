webpackJsonp([0xd9e6cbac14377800],{"./node_modules/json-loader/index.js!./.cache/json/miscellaneous-restrict-access-to-authenticated-users-only.json":function(e,t){e.exports={data:{markdownRemark:{html:"<p>Let’s say you have a route that you want to restrict to logged-in users; maybe you have a <code>/profile</code> page that lets your users fill in some information about themselves, but it wouldn’t work if they weren’t logged in. Open <strong>/client/app/profile/profile.js</strong>, and add <code>authenticate: true</code> to the options passed to <em>$routeProvider.when</em> like so:</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>    $routeProvider\n      .when('/profile', {\n        templateUrl: 'app/profile/profile.html',\n        controller: 'ProfileCtrl',\n        authenticate: true // restrict to authenticated users\n      });</code></pre>\n      </div>\n<p>This way, if the user isn’t authenticated when they try to access the <code>/profile</code> page, they’ll be redirected to your login screen to authenticate before continuing to their profile page.</p>",fields:{slug:"/miscellaneous/restrict-access-to-authenticated-users-only/"},frontmatter:{title:"Restrict Access to Authenticated Users Only"}}},pathContext:{slug:"/miscellaneous/restrict-access-to-authenticated-users-only/"}}}});
//# sourceMappingURL=path---miscellaneous-restrict-access-to-authenticated-users-only-3fc49b38dd71c6d7d457.js.map