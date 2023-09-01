"use strict";(self.webpackChunksgpt=self.webpackChunksgpt||[]).push([[801],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6216:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},o=void 0,l={unversionedId:"Pages/Profile page/ProfilePage",id:"Pages/Profile page/ProfilePage",title:"ProfilePage",description:"The ProfilePage component is a React functional component designed to display a user's profile page. It serves as a",source:"@site/docs/Pages/Profile page/ProfilePage.md",sourceDirName:"Pages/Profile page",slug:"/Pages/Profile page/ProfilePage",permalink:"/Pages/Profile page/ProfilePage",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Pages/Profile page/ProfilePage.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MainPageProvider",permalink:"/Pages/Main page/MainPageProvider"},next:{title:"ProfilePageProvider",permalink:"/Pages/Profile page/ProfilePageProvider"}},s={},p=[{value:"Props",id:"props",level:3},{value:"Hooks",id:"hooks",level:3},{value:"<code>useProfilePage</code>",id:"useprofilepage",level:4},{value:"Dependencies",id:"dependencies",level:3},{value:"Component Structure",id:"component-structure",level:3},{value:"Usage",id:"usage",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ProfilePage")," component is a React functional component designed to display a user's profile page. It serves as a\ncontainer for various profile-related content, including user information, active views (such as chats, saved filters,\ngenerated images, and listings), and a header displaying the user's profile information."),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ProfilePage")," component does not receive any props directly. Instead, it relies on hooks to fetch and manage data\nrelated to the user's profile and active listings. Here are some of the key hooks and their purposes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"useProfilePage:")," This hook is responsible for fetching and managing the user's profile data, including the user\nobject, active listing, and various profile-related functions and states.")),(0,r.kt)("h3",{id:"hooks"},"Hooks"),(0,r.kt)("h4",{id:"useprofilepage"},(0,r.kt)("inlineCode",{parentName:"h4"},"useProfilePage")),(0,r.kt)("p",null,"This hook, imported from ",(0,r.kt)("inlineCode",{parentName:"p"},"'./ProfilePageProvider'"),", provides the following data and functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"user:")," An object representing the user's profile information."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"activeListing:")," An object representing the currently active listing."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"setActiveListing:")," A function to set the active listing."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"isMobile:")," A boolean indicating whether the page is being viewed on a mobile device."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"handleToggleLikeListingItem:"),' A function for handling the toggling of "like" on a listing item.')),(0,r.kt)("h3",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ProfilePage")," component relies on several external dependencies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"@mui/material:")," This library provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"Box")," component and styling capabilities for building the user interface.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"react:")," This library is the core of the React application, enabling the creation of functional components, hooks,\nand routing.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"react-router-dom:")," Used for routing within the application. It provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"useLocation")," hook for accessing the\ncurrent URL and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Outlet")," component for rendering nested routes."))),(0,r.kt)("h3",{id:"component-structure"},"Component Structure"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ProfilePage")," component is structured as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ProfilePageHeader:")," This is a custom component imported\nfrom ",(0,r.kt)("inlineCode",{parentName:"p"},"'../../components/ProfilePage/ProfilePageHeader/ProfilePageHeader'"),". It displays the user's profile information\nat the top of the profile page.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Active View Container:"),' This container holds the content related to the currently active view. The content changes\nbased on the selected view, such as "Chats," "Saved Filters," "Generated Images," "Listings," or a specific listing.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Label:")," This section displays a label indicating the current active view or the details of the active listing. The\nlabel changes dynamically based on the user's navigation within the profile page.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Outlet:")," The ",(0,r.kt)("inlineCode",{parentName:"p"},"Outlet")," component from ",(0,r.kt)("inlineCode",{parentName:"p"},"react-router-dom"),' is used to render nested routes within this component. It\nreceives context related to the active listing, the ability to set the active listing, toggling "like" on listing\nitems, and the mobile device status.'))),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProfilePage")," component, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProfilePage")," component into your application."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"import ProfilePage from './ProfilePage';\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Place the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProfilePage")," component within your application's routing system to ensure that it is displayed when the\nuser navigates to their profile page."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},'// Example of routing configuration using react-router-dom\n<Route path="/profile" component={ProfilePage} />\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ensure that the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProfilePageProvider")," is correctly set up to provide the necessary data and functions to\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"ProfilePage")," component.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When the user accesses their profile page, the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProfilePage")," component will render with the appropriate user\ninformation and active view content based on the URL and user interactions."))),(0,r.kt)("p",null,"This component provides a flexible and dynamic way to display a user's profile information and related content, adapting\nto different active views and user interactions within the profile page."))}d.isMDXComponent=!0}}]);