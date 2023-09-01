"use strict";(self.webpackChunksgpt=self.webpackChunksgpt||[]).push([[3281],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,u=c["".concat(p,".").concat(d)]||c[d]||h[d]||o;return n?a.createElement(u,i(i({ref:t},m),{},{components:n})):a.createElement(u,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"Components/ProfilePage/ProfileChats/ProfileChats",id:"Components/ProfilePage/ProfileChats/ProfileChats",title:"ProfileChats",description:"The ProfileChats component is a React functional component responsible for rendering a list of chat threads associated",source:"@site/docs/Components/ProfilePage/ProfileChats/ProfileChats.md",sourceDirName:"Components/ProfilePage/ProfileChats",slug:"/Components/ProfilePage/ProfileChats/",permalink:"/sgpt-docs/Components/ProfilePage/ProfileChats/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Components/ProfilePage/ProfileChats/ProfileChats.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GeneratedImageItem",permalink:"/sgpt-docs/Components/ProfilePage/GeneratedImageItem/"},next:{title:"ProfileEmptyView",permalink:"/sgpt-docs/Components/ProfilePage/ProfileEmptyView/"}},p={},s=[{value:"Dependencies",id:"dependencies",level:3},{value:"Props",id:"props",level:3},{value:"Component Structure",id:"component-structure",level:3},{value:"Usage",id:"usage",level:3}],m={toc:s},c="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ProfileChats")," component is a React functional component responsible for rendering a list of chat threads associated\nwith a user's profile. It displays information about each chat thread, including the initial prompt, a link to view the\nconversation, and the number of responses. If no chat threads exist, it also displays an empty view with a message and\nan icon."),(0,r.kt)("h3",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ProfileChats")," component relies on the following dependencies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Material-UI:")," It utilizes Material-UI components such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Box"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Link"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Typography"),", and icons.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"useProfilePage"),":")," It imports the ",(0,r.kt)("inlineCode",{parentName:"p"},"useProfilePage")," hook from the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProfilePageProvider")," to access chat thread data.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ProfileEmptyView")," Component:")," It uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProfileEmptyView")," component to display a message and icon when no chat\nthreads are found.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"useDocumentTitle")," Hook:")," It uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"useDocumentTitle")," hook from the ",(0,r.kt)("inlineCode",{parentName:"p"},"usehooks-ts")," library to dynamically set the\ndocument title."))),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ProfileChats")," component does not accept any props directly. Instead, it relies on the ",(0,r.kt)("inlineCode",{parentName:"p"},"chatThreads")," data obtained\nfrom the ",(0,r.kt)("inlineCode",{parentName:"p"},"useProfilePage")," hook to render the list of chat threads."),(0,r.kt)("h3",{id:"component-structure"},"Component Structure"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ProfileChats")," component is structured as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Document Title (",(0,r.kt)("inlineCode",{parentName:"strong"},"useDocumentTitle"),"):")," It uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"useDocumentTitle"),' hook to dynamically set the document title\nto "Profile Chats | S.GPT" to provide users with a clear page title.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Chats List (",(0,r.kt)("inlineCode",{parentName:"strong"},"chatsList"),"):")," This section displays the list of chat threads."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Chat List Item (",(0,r.kt)("inlineCode",{parentName:"strong"},"chatListItem"),"):")," Each chat thread is rendered as a separate list item within the chats list."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Chat Label (",(0,r.kt)("inlineCode",{parentName:"strong"},"chatLabel"),"):"),' A label indicating "INITIAL PROMPT" to denote the start of the conversation.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Initial Prompt (",(0,r.kt)("inlineCode",{parentName:"strong"},"initialPrompt"),"):")," The initial message or prompt that initiated the chat thread.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Chat Link (",(0,r.kt)("inlineCode",{parentName:"strong"},"chatLink"),"):")," A link to view the full conversation. Clicking on this link redirects the user to\nthe chat thread page.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Chat Length (",(0,r.kt)("inlineCode",{parentName:"strong"},"chatLength"),"):")," Displays the number of responses in the chat thread, excluding the initial\nprompt.")))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Profile Empty View (",(0,r.kt)("inlineCode",{parentName:"strong"},"ProfileEmptyView"),"):")," If there are no chat threads (",(0,r.kt)("inlineCode",{parentName:"p"},"chatThreads.length")," is zero),\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"ProfileEmptyView"),' component is rendered with a message ("No existing chats found") and an\nicon (',(0,r.kt)("inlineCode",{parentName:"p"},"SpeakerNotesOff"),") indicating that no chats are available."))),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProfileChats")," component, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProfileChats")," component into your application."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"import ProfileChats from './ProfileChats';\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Include the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProfileChats")," component within your application's UI, typically within the user's profile page or any\nroute where chat threads should be displayed."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"<ProfileChats />\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ProfileChats")," component will render a list of chat threads, each displaying the initial prompt, a link to view\nthe full conversation, and the number of responses. If no chat threads exist, it will display a message and icon\nindicating that no chats are available."))))}h.isMDXComponent=!0}}]);