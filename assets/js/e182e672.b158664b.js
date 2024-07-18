"use strict";(self.webpackChunkdocs_raw=self.webpackChunkdocs_raw||[]).push([[430],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=m;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[c]="string"==typeof e?e:o,i[1]=r;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3974:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const l={},i="3. Back-End",r={unversionedId:"Modules/backend",id:"Modules/backend",title:"3. Back-End",description:"Recommended Stack:",source:"@site/docs/Modules/3-backend.md",sourceDirName:"Modules",slug:"/Modules/backend",permalink:"/handbook/Modules/backend",draft:!1,editUrl:"https://github.com/getcoding-ca/handbook/edit/master/docs/Modules/3-backend.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"2. Front-End",permalink:"/handbook/Modules/frontend"},next:{title:"Check Points",permalink:"/handbook/Modules/checkins"}},p={},s=[{value:"Duration",id:"duration",level:2},{value:"Expected Outcomes:",id:"expected-outcomes",level:2},{value:"Topics",id:"topics",level:2},{value:"Nice to have:",id:"nice-to-have",level:2},{value:"Tips / Common Hiccups",id:"tips--common-hiccups",level:2},{value:"Recommended Pipeline Steps",id:"recommended-pipeline-steps",level:2},{value:"Deploying",id:"deploying",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"3-back-end"},"3. Back-End"),(0,o.kt)("p",null,"Recommended Stack:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Express (deployed to Elastic Beanstalk)"),(0,o.kt)("li",{parentName:"ul"},"MySQL (deployed to Amazon RDS)"),(0,o.kt)("li",{parentName:"ul"},"Jest"),(0,o.kt)("li",{parentName:"ul"},"Github Actions")),(0,o.kt)("h2",{id:"duration"},"Duration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Average for past successful students: 20 sessions"),(0,o.kt)("li",{parentName:"ul"},"90th percentile: 26")),(0,o.kt)("h2",{id:"expected-outcomes"},"Expected Outcomes:"),(0,o.kt)("p",null,"At the end of the module, the student:"),(0,o.kt)("p",null,"\u2705 Is considered hireable as a junior full-stack developer"),(0,o.kt)("p",null,"\u2705 Can create moderately complex back-ends and databases without help"),(0,o.kt)("p",null,"\u2705 Has their project deployed in the cloud, with basic understanding of the AWS resources"),(0,o.kt)("p",null,"\u2705 Has written a few basic automated tests (we recommend unit and integration for their ease)"),(0,o.kt)("p",null,"\u2705 Has a rudementary CI/CD pipeline to test and deploy"),(0,o.kt)("h2",{id:"topics"},"Topics"),(0,o.kt)("p",null,"Below are the high-level topics that we expect students to know by the end of this module:"),(0,o.kt)("p",null,"Back-end Stuff:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"REST API Design"),(0,o.kt)("li",{parentName:"ul"},"Postman"),(0,o.kt)("li",{parentName:"ul"},"Debugging using VSCode"),(0,o.kt)("li",{parentName:"ul"},"SQL/MySQL: insert, select, update, delete, join"),(0,o.kt)("li",{parentName:"ul"},"Using .env or environment variables for secrets (never publish secrets to github)"),(0,o.kt)("li",{parentName:"ul"},"MySQL Workbench (or some other client)"),(0,o.kt)("li",{parentName:"ul"},"Auth: Hashed Passwords in DB + Sessions"),(0,o.kt)("li",{parentName:"ul"},"Jest"),(0,o.kt)("li",{parentName:"ul"},"Testing good practices",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Organized structure (description, expectation)"),(0,o.kt)("li",{parentName:"ul"},"Atomic"),(0,o.kt)("li",{parentName:"ul"},"Independent"))),(0,o.kt)("li",{parentName:"ul"},"Understanding where/why use different tests: unit, integration, endpoint, end-to-end")),(0,o.kt)("p",null,"DevOps stuff:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'What the heck is CI/CD? What is "DevOps"?'),(0,o.kt)("li",{parentName:"ul"},"Basic understanding of the AWS services used in deployment: EB, EC2, RDS, Route53"),(0,o.kt)("li",{parentName:"ul"},"Github actions / pipelines")),(0,o.kt)("h2",{id:"nice-to-have"},"Nice to have:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Understand how a request goes from a client computer to a server and back: HTTP, TCP, DNS"),(0,o.kt)("li",{parentName:"ul"},"TypeScript: highly recommended if you have a strong student")),(0,o.kt)("h2",{id:"tips--common-hiccups"},"Tips / Common Hiccups"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Remember NOT to commit/push secrets on the pipeline files"),(0,o.kt)("li",{parentName:"ul"},"To save time, you can use the live database instance (AWS RDS) for local development too"),(0,o.kt)("li",{parentName:"ul"},"Avoid ORMs unless you know a good one for Node and SQL. They generally suck and are difficult to set up."),(0,o.kt)("li",{parentName:"ul"},"We recommend only trying unit and integration tests. We have found end-point testing (jest) and end-to-end testing (cypress) difficult due to the amount of set up"),(0,o.kt)("li",{parentName:"ul"},"However, you can create a simple ",(0,o.kt)("a",{parentName:"li",href:"https://testfully.io/blog/api-health-check-monitoring/"},"/health endpoint")," and expect it to return 200 as the simplest form of end-point testing - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/marketplace/actions/url-health-check"},"Github Action for URL Health Check")),(0,o.kt)("li",{parentName:"ul"},'There are also "half-automated" endpoint test tools with nice GUIs, e.g. Postman')),(0,o.kt)("h2",{id:"recommended-pipeline-steps"},"Recommended Pipeline Steps"),(0,o.kt)("p",null,"On Pull Request:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Prettier and/or ESLint checks"),(0,o.kt)("li",{parentName:"ul"},"Unit Tests and Integration Tests")),(0,o.kt)("p",null,"On Merge to Main:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deploy - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/marketplace/actions/beanstalk-deploy"},"Github Action for Elastic Beanstalk")),(0,o.kt)("li",{parentName:"ul"},"Health check")),(0,o.kt)("h2",{id:"deploying"},"Deploying"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Under the hood, Elastic Beanstalk (EB) is essentially configuring EC2/load balancers/VPC/Route53/... to run the code with minimum input from you. (load balancers may not be configured in free-tier mode)")),(0,o.kt)("p",null,"In the code:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'The main express file should be named "app.js" or "server.js"'),(0,o.kt)("li",{parentName:"ol"},"The code should listen to port 8080"),(0,o.kt)("li",{parentName:"ol"},"Zip all the files in your project, except: ",(0,o.kt)("inlineCode",{parentName:"li"},"node_module"),", ",(0,o.kt)("inlineCode",{parentName:"li"},".env"),", ",(0,o.kt)("inlineCode",{parentName:"li"},".git")," (EB automatically runs npm install and npm start commands for you.)")),(0,o.kt)("p",null,"In AWS:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create AWS Account (needs credit card and will take hours to verify)"),(0,o.kt)("li",{parentName:"ol"},"Go to Billing -> Budget and create a budget/alert"),(0,o.kt)("li",{parentName:"ol"},"Go to Elastic Beanstalk (use the Old Dashboard)"),(0,o.kt)("li",{parentName:"ol"},'Press the "Create Application"'),(0,o.kt)("li",{parentName:"ol"},'When asked between "Sample application" and your own code, choose to upload your own code (the .zip file).'),(0,o.kt)("li",{parentName:"ol"},"The rest of the defaults work fine"),(0,o.kt)("li",{parentName:"ol"},"Wait for the Application and Environment to be created"),(0,o.kt)("li",{parentName:"ol"},"You will see a URL to your back-end")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Elastic Beanstalk Terminology:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},'Application, e.g. "project1", "project2"'),(0,o.kt)("li",{parentName:"ul"},'Environment, e.g. "production", "staging" belonging to an application (If you follow the process above, you will have 1 default environment for your application)'),(0,o.kt)("li",{parentName:"ul"},"Application Versions, the zipped and uploaded code\n:::")),(0,o.kt)("p",{parentName:"admonition"},"Other things you can do:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Set Environment Variabes on the server: ",(0,o.kt)("inlineCode",{parentName:"li"},"configuration/software/environment variables")),(0,o.kt)("li",{parentName:"ul"},"Upload new code: Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Application versions"),', upload a new .zip, select the new .zip and choose "Deploy" from Actions menu')),(0,o.kt)("h2",{parentName:"admonition",id:"projects"},"Projects"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://divvyitup.ca"},"https://divvyitup.ca")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.chore-bucks.com/"},"https://www.chore-bucks.com/")),(0,o.kt)("li",{parentName:"ul"}))))}d.isMDXComponent=!0}}]);