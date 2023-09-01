"use strict";(self.webpackChunksgpt=self.webpackChunksgpt||[]).push([[6425],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,g=c["".concat(s,".").concat(d)]||c[d]||u[d]||a;return n?i.createElement(g,l(l({ref:t},m),{},{components:n})):i.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const a={},l=void 0,o={unversionedId:"Components/EditingImagesPage/BasicFilterItem/BasicFilterItem",id:"Components/EditingImagesPage/BasicFilterItem/BasicFilterItem",title:"BasicFilterItem",description:"The BasicFilterItem component represents an individual basic image filter. It displays an image associated with the",source:"@site/docs/Components/EditingImagesPage/BasicFilterItem/BasicFilterItem.md",sourceDirName:"Components/EditingImagesPage/BasicFilterItem",slug:"/Components/EditingImagesPage/BasicFilterItem/",permalink:"/sgpt-docs/Components/EditingImagesPage/BasicFilterItem/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Components/EditingImagesPage/BasicFilterItem/BasicFilterItem.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AdvancedFiltersFormFields",permalink:"/sgpt-docs/Components/EditingImagesPage/AdvancedFiltersFormFields/"},next:{title:"BasicFilters",permalink:"/sgpt-docs/Components/EditingImagesPage/BasicFilters/"}},s={},p=[{value:"Props",id:"props",level:3},{value:"Usage Example",id:"usage-example",level:3},{value:"Component Structure",id:"component-structure",level:3},{value:"Functionality",id:"functionality",level:3},{value:"Memoization",id:"memoization",level:3}],m={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"BasicFilterItem")," component represents an individual basic image filter. It displays an image associated with the\nfilter and its title, allowing users to click on it to apply the filter."),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"filter (",(0,r.kt)("inlineCode",{parentName:"strong"},"object"),"):")," An object representing the filter."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type"),": The type of the filter."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prompt"),": The positive prompt associated with the filter."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"image"),": The image URL representing the filter."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"title"),": The title of the filter."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"handleImageClick (",(0,r.kt)("inlineCode",{parentName:"strong"},"function"),"):")," A function to handle the click event when the user clicks on the filter. It applies\nthe selected filter by generating an image using the associated positive prompt."))),(0,r.kt)("h3",{id:"usage-example"},"Usage Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"import BasicFilterItem from './BasicFilterItem'; // Import the component\nimport { filterBuildingsTypes } from './filterBuildingTypes';\n\nconst BasicFiltersSection = () => {\n    // ... other code ...\n\n    return (\n        <div>\n            {/* ... other components ... */}\n            {filterBuildingsTypes.map((filter) => (\n                <BasicFilterItem\n                    key={filter.type}\n                    filter={filter}\n                    handleImageClick={handleImageClick}\n                />\n            ))}\n        </div>\n    );\n};\n")),(0,r.kt)("h3",{id:"component-structure"},"Component Structure"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"BasicFilterItem")," component is structured as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Filter Item (",(0,r.kt)("inlineCode",{parentName:"strong"},"<Box>"),"):")," Contains the image and title of the filter.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Image (",(0,r.kt)("inlineCode",{parentName:"strong"},"<ProgressiveImage>"),"):")," Displays the filter image and handles the click event."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Title (",(0,r.kt)("inlineCode",{parentName:"strong"},"<Typography>"),"):")," Displays the title of the filter.")))),(0,r.kt)("h3",{id:"functionality"},"Functionality"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The component displays the image associated with the filter and its title."),(0,r.kt)("li",{parentName:"ul"},"When the user clicks on the filter image, the ",(0,r.kt)("inlineCode",{parentName:"li"},"handleImageClick")," function is triggered, which generates an image using\nthe positive prompt associated with the filter.")),(0,r.kt)("h3",{id:"memoization"},"Memoization"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"BasicFilterItem")," component is not explicitly memoized. Consider using ",(0,r.kt)("inlineCode",{parentName:"p"},"memo")," or other optimizations based on your\nspecific use case and performance needs."))}u.isMDXComponent=!0}}]);