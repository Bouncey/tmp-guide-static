webpackJsonp([0x5d9668d133adb000],{"./node_modules/json-loader/index.js!./.cache/json/miscellaneous-understand-how-to-use-git-merge.json":function(e,t){e.exports={data:{markdownRemark:{html:'<p>Let us say that you are working on an application that is similar to Reddit, but specifically for code snippets. In such an application, you would likely have a <code>master</code> branch which contains all the released features, a <code>dev</code> branch which might contain features that have been coded, but not implemented yet. Every developer in the team will create his own branches off the <code>dev</code> branch for individual features. The repository structure would look something like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>                                  --- Commit 3 --------- dev branch \n                                /\n --- Commit 1 ---- Commit 2 ---------------------------- master branch</code></pre>\n      </div>\n<p>If you decided to merge the 3rd commit (<code>Commit 3</code>) into the <code>master</code> branch from the <code>dev</code> branch, then it would be as simple as running a <code>git merge</code> command because the <code>dev</code> branch is <em>up-to-date</em> with the <code>master</code> branch: all of the commits in the <code>master</code> branch exist in the <code>dev</code> branch. You can merge the branches by running the following commands:  </p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>git checkout dev\ngit merge master</code></pre>\n      </div>\n<p>The result would be something like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>                                               --------- dev branch \n                                             /\n --- Commit 1 ---- Commit 2 ---- Commit 3 -------------- master branch</code></pre>\n      </div>\n<p>Now you decide to work on the authentication feature. To work on the authentication feature, you create another branch based on the <code>dev</code> branch and decide to call it <code>auth</code>. This is what the repo structure looks like:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>                                                  ------ auth branch\n                                                /\n                                               --------- dev branch \n                                             /\n --- Commit 1 ---- Commit 2 ---- Commit 3 -------------- master branch</code></pre>\n      </div>\n<p>If you were to commit any changes to the <code>auth</code> branch, merging them with the <code>dev</code> branch would be trivial because it is up-to-date with the <code>dev</code> branch. Now while you were working away on the authentication feature, one of the developers finished coding the syntax-highlighting feature, and decided to merge it with the <code>dev</code> branch. The repo looks like this now:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>                                                  --- Commit 5 --- auth branch\n                                                /\n                                               --- Commit 4 ------ dev branch \n                                             /\n --- Commit 1 ---- Commit 2 ---- Commit 3 ------------------------ master branch</code></pre>\n      </div>\n<p>Your branch, in Git terminology, is now a commit behind the <code>dev</code> branch. This means that you cannot simply merge the two branches: you must bring your <code>auth</code> branch up-to-date with the <code>dev</code> branch. This can be done with <code>git merge</code>!</p>\n<p>Merging the <code>auth</code> branch with the <code>dev</code> branch, or the <code>dev</code> branch with the <code>master</code> branch is straightforward and does what you expect, but merging the other way around has its own idiosyncrasies that are not intuitive at first blush. I can babble about it, or I can show you another great diagram of what would happen if you merged the <code>dev</code> branch with the <code>auth</code> branch at this moment:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>                                                  --- Commit 5 ----------- auth branch\n                                                /               /\n                                               --- Commit 4 -------------- dev branch \n                                             /\n --- Commit 1 ---- Commit 2 ---- Commit 3 -------------------------------- master branch</code></pre>\n      </div>\n<p>See what I did there? Look at the diagram for a second and try to understand what is happening here before you move on. You essentially made another commit to the <code>auth</code> branch with the commits in the <code>dev</code> branch included. But that’s all right, right? After all, at the end of the day I wanted to bring my <code>auth</code> branch up-to-date with the <code>dev</code> branch, and now it <em>is</em> up-to-date? Yep. But let me show you a diagram to explicitly illustrate what the other diagram implies: Your <code>auth</code> branch now looks like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>    --- Commit 5 ------- Commit 4 ------- auth branch\n  /                /\n------ Commit 4 --- --------------------- dev branch</code></pre>\n      </div>\n<p>See it now? You <em>copied</em> the commit over. If you were to merge to the <code>dev</code> branch now, it would look something like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>    --- Commit 5 ------- Commit 4 -------------------------------------- auth branch\n  /                /                  \\\n------- Commit 4 ----------------------- Commit 5 ---- Commit 4 -------- dev branch</code></pre>\n      </div>\n<p>You merged the same commit twice! This will of course have no repercussions for your code itself, but if you one fine day decide to look at your <code>git logs</code>, you will immediately realize how dirty your git history is, with some commits being made over and over. If you wanted to revert to a commit, it would be very difficult to decide which commit to revert to.</p>\n<p>It is preferred that to you use <a href=\'http://forum.freecodecamp.com/t/how-to-use-git-rebase/13226\' target=\'_blank\' rel=\'nofollow\'>Git-Rebase</a>.</p>',fields:{slug:"/miscellaneous/understand-how-to-use-git-merge/"},frontmatter:{title:"Understand How to Use Git Merge"}}},pathContext:{slug:"/miscellaneous/understand-how-to-use-git-merge/"}}}});
//# sourceMappingURL=path---miscellaneous-understand-how-to-use-git-merge-c2f33d61e8939338164b.js.map