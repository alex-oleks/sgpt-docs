"use strict";(self.webpackChunksgpt=self.webpackChunksgpt||[]).push([[1542],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9133:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},o="Application Folder Structure",s={unversionedId:"General/project-structure",id:"General/project-structure",title:"Application Folder Structure",description:"Project-structure",source:"@site/docs/General/project-structure.md",sourceDirName:"General",slug:"/General/project-structure",permalink:"/General/project-structure",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/General/project-structure.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ListingsMapContainer",permalink:"/Components/common/ListingsMap/ListingsMapContainer"},next:{title:"Setting up the Project",permalink:"/General/setting-up"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Root Directory",id:"root-directory",level:2},{value:"<code>src</code> Directory",id:"src-directory",level:2},{value:"Subdirectories in <code>src</code>",id:"subdirectories-in-src",level:3},{value:"Summary",id:"summary",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"application-folder-structure"},"Application Folder Structure"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Project-structure",src:n(7152).Z,width:"330",height:"689"})),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This documentation provides an overview of the folder structure of our React application, which is designed for maintaining a clean and modular codebase. This organization promotes code reusability and maintainability, making it easier for developers to work on the project."),(0,a.kt)("h2",{id:"root-directory"},"Root Directory"),(0,a.kt)("p",null,"In the root directory of our project, you'll find essential configuration files and documentation:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".env"),": Contains necessary data configurations for the application."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".eslintignore"),", ",(0,a.kt)("inlineCode",{parentName:"li"},".eslintrc.js"),": Configuration files for ESLint for code linting."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".gitignore"),": Specifies which files should be ignored by Git."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".prettierrc"),": Configuration for Prettier, which helps maintain consistent code formatting."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"package.json"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn.lock"),": Files related to package management."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"styleguide.config.js"),": Configuration for React Styleguidist."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"README.md"),": Project documentation and overview.")),(0,a.kt)("h2",{id:"src-directory"},(0,a.kt)("inlineCode",{parentName:"h2"},"src")," Directory"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," directory serves as the root of our codebase and contains various subdirectories and files."),(0,a.kt)("h3",{id:"subdirectories-in-src"},"Subdirectories in ",(0,a.kt)("inlineCode",{parentName:"h3"},"src")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"assets")),": Contains static visual data, such as images, videos, and other media files.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"azure")),": Holds configuration files specific to Microsoft Azure services for integration.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"firebase")),": Includes configuration files required for integrating the application with Firebase services.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"fonts")),": Manages custom fonts used within the application.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"hooks")),": Stores reusable React hooks that can be used in any component.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"iconsComponents")),": Contains manually created Icon components for consistent and reusable icons.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"pages")),": Houses different page components, each with its dedicated folder structure:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<name of file>Provider.jsx"),": Manages the page's state and handles related business logic."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<name of file>.jsx"),": Represents the visual part of the page, displaying UI elements and rendering data."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<name of the file>.sx.js"),": Stores specific styles (CSS) for the component.")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Project-structure",src:n(2315).Z,width:"299",height:"291"})),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"components")),": Holds reusable components used across multiple pages, with each component having its dedicated folder:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<Component name>.jsx"),": Contains the component's main implementation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<component camelCased name of file>.sx.js")," (optional): Stores specific styles for the component.")),(0,a.kt)("p",{parentName:"li"},"Inside some component folders, you might find nested sub-component folders for components used exclusively by the parent component."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Project-structure",src:n(500).Z,width:"340",height:"275"})),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"styles")),": Contains basic CSS files for implementing fonts, general styles for the entire application, and ",(0,a.kt)("inlineCode",{parentName:"p"},"theme.js")," for configuring the Material-UI theme.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"services")),": Contains files for API functions and the Axios instance.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"utils")),": Contains additional helper functions and constants, organized into folders based on the pages they are used in. There are also common utils that can be used throughout the application."))),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"This structured organization enhances code maintainability and reusability. It helps developers navigate the codebase more efficiently and understand the purpose of each directory and file. By adhering to these conventions, we ensure a clean and organized codebase for our React application."))}u.isMDXComponent=!0},500:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/components-proj-68f0a5e2ad8d9c0ab95d98b85e775005.jpg"},2315:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pages-proj-b528f21218efb1a8a67ca1f8850bd5ca.jpg"},7152:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/project-structure-0ae884f8430d32ae200059256087aace.jpg"}}]);