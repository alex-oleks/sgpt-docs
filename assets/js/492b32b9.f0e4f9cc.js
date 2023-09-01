"use strict";(self.webpackChunksgpt=self.webpackChunksgpt||[]).push([[8200],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2152:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},o="Setting up the Project",l={unversionedId:"General/setting-up",id:"General/setting-up",title:"Setting up the Project",description:"Step 1: Clone the Repository",source:"@site/docs/General/setting-up.md",sourceDirName:"General",slug:"/General/setting-up",permalink:"/General/setting-up",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/General/setting-up.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Application Folder Structure",permalink:"/General/project-structure"},next:{title:"Functional Structure and Data Flow Documentation",permalink:"/General/structure-and-dataflow"}},s={},p=[{value:"Step 1: Clone the Repository",id:"step-1-clone-the-repository",level:3},{value:"Step 2: Install Dependencies",id:"step-2-install-dependencies",level:3},{value:"Step 3: Add .env File",id:"step-3-add-env-file",level:3},{value:"Step 4: Starting the Development Server",id:"step-4-starting-the-development-server",level:3},{value:"Other Useful Commands",id:"other-useful-commands",level:3},{value:"Linting and Formatting",id:"linting-and-formatting",level:3},{value:"Pre-Commit Hooks",id:"pre-commit-hooks",level:3},{value:"Deployment",id:"deployment",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-up-the-project"},"Setting up the Project"),(0,a.kt)("h3",{id:"step-1-clone-the-repository"},"Step 1: Clone the Repository"),(0,a.kt)("p",null,"Clone the Git repository of the project using the repository URL:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/akcserhant/serhant-gpt.git\n")),(0,a.kt)("h3",{id:"step-2-install-dependencies"},"Step 2: Install Dependencies"),(0,a.kt)("p",null,"Install all the necessary tools, such as Node.js and Yarn, and verify their installation by running these commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"node -v\nnpm -v\nyarn -v\n")),(0,a.kt)("p",null,"Next, navigate to the root directory of the project using the terminal."),(0,a.kt)("p",null,"Run the following command to install project dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn install\n")),(0,a.kt)("h3",{id:"step-3-add-env-file"},"Step 3: Add .env File"),(0,a.kt)("p",null,"Create an ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file in the root of the project folder. This file should contain all the necessary configuration data required for the application to work correctly."),(0,a.kt)("h3",{id:"step-4-starting-the-development-server"},"Step 4: Starting the Development Server"),(0,a.kt)("p",null,"Start the development server with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn start\n")),(0,a.kt)("p",null,"The application will be available at ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," in your web browser."),(0,a.kt)("h3",{id:"other-useful-commands"},"Other Useful Commands"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"yarn test"),": Runs the test suite using Jest and React Testing Library."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"yarn run build"),": Builds the production-ready version of the application."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"yarn run lint"),": Lints the codebase using ESLint to identify and enforce coding standards."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"yarn run lint:fix"),": Automatically fixes ESLint issues when possible."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"yarn run styleguide"),": Launches the React Styleguidist server to generate component documentation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"yarn run styleguide:build"),": Builds the documentation for deployment.")),(0,a.kt)("h3",{id:"linting-and-formatting"},"Linting and Formatting"),(0,a.kt)("p",null,"The project uses ESLint and Prettier for code linting and formatting. It is essential to run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run lint")," regularly to ensure adherence to coding standards and maintain consistent code formatting."),(0,a.kt)("h3",{id:"pre-commit-hooks"},"Pre-Commit Hooks"),(0,a.kt)("p",null,"Husky is configured to execute ",(0,a.kt)("inlineCode",{parentName:"p"},"lint-staged")," before committing changes. This ensures that only linted and formatted code is committed to the repository. So, make sure to follow the linting and formatting guidelines before making a commit."),(0,a.kt)("h3",{id:"deployment"},"Deployment"),(0,a.kt)("p",null,"For deployment, the project is ready to be deployed using the build command (",(0,a.kt)("inlineCode",{parentName:"p"},"yarn run build"),"). The generated build files can then be deployed to a web server or hosting service."))}d.isMDXComponent=!0}}]);