(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{84:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return a})),o.d(t,"metadata",(function(){return u})),o.d(t,"rightToc",(function(){return s})),o.d(t,"default",(function(){return l}));var n=o(2),i=o(6),r=(o(0),o(96)),a={title:"GitHub Actions workflow not triggering at scheduled time",author:"Anand Chowdhary",author_title:"Upptime creator, Koj cofounder/CTO",author_url:"https://github.com/AnandChowdhary",author_image_url:"https://avatars.githubusercontent.com/u/2841780",tags:["uptime-monitor","github-actions"],hide_table_of_contents:!1},u={permalink:"/blog/2021/01/22/github-actions-schedule-not-working",source:"@site/blog/2021-01-22-github-actions-schedule-not-working.md",description:"We've seen many reports of GitHub Actions workflows not triggering at the scheduled time. In fact, in the official upptime/upptime repository, workflows scheduled for every five minutes run as slower as once every hour. This blog post is a quick summary of what we know, and what you can do.",date:"2021-01-22T00:00:00.000Z",tags:[{label:"uptime-monitor",permalink:"/blog/tags/uptime-monitor"},{label:"github-actions",permalink:"/blog/tags/github-actions"}],title:"GitHub Actions workflow not triggering at scheduled time",readingTime:2,truncated:!0},s=[],c={rightToc:s};function l(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"We've seen many reports of GitHub Actions workflows not triggering at the scheduled time. In fact, in the official ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/upptime/upptime"}),"upptime/upptime")," repository, workflows scheduled for every five minutes run as slower as once every hour. This blog post is a quick summary of what we know, and what you can do."),Object(r.b)("p",null,"The first time we saw this was when ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/rouilj"}),"@rouilj")," pointed it out in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/upptime/upptime/discussions/112"}),"#112"),":"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If I look at the GitHub Actions listing and select the \"Uptime CI\", I don't see it being executed every 5 minutes; it looks more like it's running every 18 minutes or so.")),Object(r.b)("p",null,"And my reply:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Hi @rouilj, unfortunately this is out of our control. We request GitHub to run the Uptime CI workflow every 5 minutes. It's added to a queue and run whenever GitHub has a machine available, sometimes this is every 7 minutes, sometimes every 15 minutes. There's really not much we can do, with the exception of manually triggering the workflow using an external scheduler.")),Object(r.b)("p",null,"When you set up a GitHub Actions workflow with a schedule, say for once every 10 minutes, you're essneially requesting GitHub to schedule that workflow for you. ",Object(r.b)("strong",{parentName:"p"},"There is no guarantee that the workflow will run every 10 minutes.")," In a discussion in the GitHub Support Community (",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.community/t/no-assurance-on-scheduled-jobs/133753"}),"No assurance on scheduled jobs?"),"), Github partner ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/brightran"}),"@brightran")," said that many a times, there may be a delay when triggering the scheduled workflow:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Generally, the delay time is about 3 to 10 minutes. Sometimes, it may be more, even dozens of minutes, or more than one hour.")),Object(r.b)("p",null,"He also said that if the delay time is too long, the scheduled workflow may be not triggered at that day. Therefore, it's not recommended to use GitHub Actions scheduled workflows for production tasks that require execution guarantee."),Object(r.b)("p",null,"So, what can you do to guarantee your GitHub Actions scheduled workflow will run? In ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/upptime/upptime/issues/42"}),"#42"),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/belhyun"}),"@belhyun")," proposed triggering it manually:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"In order to execute correctly every 5 minutes, I ran a build job with jenkins and executed a ",Object(r.b)("inlineCode",{parentName:"p"},"POST")," request.")),Object(r.b)("p",null,"GitHub Actions supports the ",Object(r.b)("inlineCode",{parentName:"p"},"workflow_dispatch")," trigger (see ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.github.com/en/actions/reference/events-that-trigger-workflows"}),"Events that trigger workflows")," on GitHub Docs), so if you manually trigger a workflow, it will be queued to run soon-ish. This means that you can use a third-party cron scheduling service like IFTTT, Google Cloud Scheduler, Jenkins, Cronhub, etc., to make a request to the GitHub API to trigger the workflow."))}l.isMDXComponent=!0}}]);