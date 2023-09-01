"use strict";(self.webpackChunksgpt=self.webpackChunksgpt||[]).push([[8694],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),g=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=g(e.components);return o.createElement(s.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),h=g(n),d=a,u=h["".concat(s,".").concat(d)]||h[d]||c[d]||l;return n?o.createElement(u,i(i({ref:t},p),{},{components:n})):o.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[h]="string"==typeof e?e:a,i[1]=r;for(var g=2;g<l;g++)i[g]=n[g];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2471:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>g});var o=n(7462),a=(n(7294),n(3905));const l={},i=void 0,r={unversionedId:"Components/Modals/ChangelogDialog/ChangelogDialog",id:"Components/Modals/ChangelogDialog/ChangelogDialog",title:"ChangelogDialog",description:"The ChangelogDialog component is a dialog box that prompts the user to view the changelog or release notes for a new",source:"@site/docs/Components/Modals/ChangelogDialog/ChangelogDialog.md",sourceDirName:"Components/Modals/ChangelogDialog",slug:"/Components/Modals/ChangelogDialog/",permalink:"/sgpt-docs/Components/Modals/ChangelogDialog/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Components/Modals/ChangelogDialog/ChangelogDialog.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AddingListingsModal",permalink:"/sgpt-docs/Components/Modals/AddingListingsModal/"},next:{title:"ChangelogModal",permalink:"/sgpt-docs/Components/Modals/ChangelogModal/"}},s={},g=[{value:"Props:",id:"props",level:3},{value:"Usage:",id:"usage",level:3},{value:"Dialog Content:",id:"dialog-content",level:3},{value:"Overall Purpose:",id:"overall-purpose",level:3}],p={toc:g},h="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ChangelogDialog")," component is a dialog box that prompts the user to view the changelog or release notes for a new\nversion of the application. It provides options to either view the changelog or choose not to view it again in the\nfuture."),(0,a.kt)("h3",{id:"props"},"Props:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"showChangelogDialog")," (boolean): Indicates whether the dialog should be visible or hidden."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"setShowChangelogDialog")," (function): A function to toggle the visibility of the dialog."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"setShowChangelogModal")," (function): A function to open the changelog modal when the user agrees to view the changelog.")),(0,a.kt)("h3",{id:"usage"},"Usage:"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ChangelogDialog")," component as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"static",static:!0},"<ChangelogDialog\n  showChangelogDialog={isChangelogDialogVisible}\n  setShowChangelogDialog={setIsChangelogDialogVisible}\n  setShowChangelogModal={setIsChangelogModalVisible}\n/>\n")),(0,a.kt)("p",null,"In this example, ",(0,a.kt)("inlineCode",{parentName:"p"},"isChangelogDialogVisible")," is a boolean variable that controls whether the dialog is\ndisplayed, ",(0,a.kt)("inlineCode",{parentName:"p"},"setIsChangelogDialogVisible")," is a function to toggle the dialog's visibility,\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"setIsChangelogModalVisible")," is a function to open the changelog modal."),(0,a.kt)("h3",{id:"dialog-content"},"Dialog Content:"),(0,a.kt)("p",null,"The dialog contains the following sections:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Title Section:"),' Displays the title "Show new update changelog?" and includes a close button to dismiss the dialog.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Content Section:")," Provides a brief message informing the user about the availability of a new update and the\noption to check the changelog to see what has changed.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Actions Section:")," Includes two buttons:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'"Don\'t Show Again": Clicking this button will hide the dialog and set a local storage flag to prevent the dialog\nfrom appearing again in the future.'),(0,a.kt)("li",{parentName:"ul"},'"Show": Clicking this button will hide the dialog and open the changelog modal to display the detailed changelog\ncontent.')))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transition:")),(0,a.kt)("p",null,"The dialog uses a custom transition effect provided by the ",(0,a.kt)("inlineCode",{parentName:"p"},"Transition")," component from Material-UI. It slides in from\nthe bottom when it is opened and slides out when closed."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Closing the Dialog:")),(0,a.kt)("p",null,'The dialog can be closed by clicking the close button in the title section. It can also be closed by clicking the "Don\'t\nShow Again" or "Show" buttons in the actions section. These buttons trigger the respective ',(0,a.kt)("inlineCode",{parentName:"p"},"handleDisagree"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"handleAgree")," functions to hide the dialog and perform the necessary actions."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Local Storage:")),(0,a.kt)("p",null,"The component uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"localStorage")," API to store a flag (",(0,a.kt)("inlineCode",{parentName:"p"},"showUpdateDialog"),') that determines whether the dialog should\nbe displayed again in the future. If the user chooses "Don\'t Show Again," this flag is set to ',(0,a.kt)("inlineCode",{parentName:"p"},"'false'"),", preventing the\ndialog from reappearing."),(0,a.kt)("h3",{id:"overall-purpose"},"Overall Purpose:"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ChangelogDialog")," component serves as a user-friendly way to inform users about updates and changes in the\napplication. It provides a choice to view the changelog and the option to avoid future reminders about updates."))}c.isMDXComponent=!0}}]);