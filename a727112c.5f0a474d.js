(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{79:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return d})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return r}));var a=t(2),i=t(6),o=(t(0),t(96)),d={title:"Scheduled maintenance"},s={unversionedId:"scheduled-maintenance",id:"scheduled-maintenance",isDocsHomePage:!1,title:"Scheduled maintenance",description:"Upptime helps you set up scheduled maintenance times by opening issues manually. To create a new scheduled maintenance, create a new issue in your Upptime repository and add the label maintenance to it. The issue body should include an HTML comment, like so:",source:"@site/docs/scheduled-maintenance.md",slug:"/scheduled-maintenance",permalink:"/docs/scheduled-maintenance",editUrl:"https://github.com/upptime/upptime.js.org/blob/master/docs/scheduled-maintenance.md",version:"current",sidebar:"sidebar",previous:{title:"Configuration",permalink:"/docs/configuration"},next:{title:"Triggers",permalink:"/docs/triggers"}},c=[],l={rightToc:c};function r(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Upptime helps you set up scheduled maintenance times by opening issues manually. To create a new scheduled maintenance, create a new issue in your Upptime repository and add the label ",Object(o.b)("inlineCode",{parentName:"p"},"maintenance")," to it. The issue body should include an HTML comment, like so:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"\x3c!--\nstart: 2021-02-24T13:00:00+00:00\nend: 2021-02-24T14:00:00+00:00\nexpectedDown: google, hacker-news\n--\x3e\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"start")," and ",Object(o.b)("inlineCode",{parentName:"p"},"end")," keys are mandatory and should contain an ISO datetime with the start and ending time for the scheduled maintenance respectively."),Object(o.b)("p",null,"If you expect that an endpoint will go down during this time, you can add it to ",Object(o.b)("inlineCode",{parentName:"p"},"expectedDown")," and Upptime will not open an issue if it goes down within this time period. Similarly, you can add ",Object(o.b)("inlineCode",{parentName:"p"},"expectedDegraded")," if you expect degraded performance. Both these keys should have comma-separated list of slugs."),Object(o.b)("p",null,"Upptime will automatically close the issue when the ",Object(o.b)("inlineCode",{parentName:"p"},"end")," time happens, and it shows both currently ongoing and past scheduled maintenance events on the static website."))}r.isMDXComponent=!0}}]);