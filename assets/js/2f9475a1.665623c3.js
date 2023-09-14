"use strict";(self.webpackChunksgpt=self.webpackChunksgpt||[]).push([[5212],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),g=a,d=p["".concat(l,".").concat(g)]||p[g]||m[g]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={},o=void 0,s={unversionedId:"Hooks/useGenerateImage",id:"Hooks/useGenerateImage",title:"useGenerateImage",description:"The useGenerateImage hook is a custom React hook that facilitates the process of generating images through an API",source:"@site/docs/Hooks/useGenerateImage.md",sourceDirName:"Hooks",slug:"/Hooks/useGenerateImage",permalink:"/sgpt-docs/Hooks/useGenerateImage",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Hooks/useGenerateImage.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useFavoriteListings",permalink:"/sgpt-docs/Hooks/useFavoriteListings"},next:{title:"useGetAllListings",permalink:"/sgpt-docs/Hooks/useGetAllListings"}},l={},u=[{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Details",id:"details",level:3},{value:"Example Usage",id:"example-usage",level:3}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useGenerateImage")," hook is a custom React hook that facilitates the process of generating images through an API\nservice. It manages the image generation, progress tracking, and related state updates."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"setItemForEditing")," (function): A function to set the item that will be edited."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"setIsItemGenerated")," (function): A function to set the flag indicating whether an item has been generated."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"setGeneratedItemsList")," (function): A function to set the list of generated item URLs.")),(0,a.kt)("h3",{id:"return-value"},"Return Value"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useGenerateImage")," hook returns an object containing the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"isGeneratingImage")," (boolean): Indicates whether image generation is in progress."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"progress")," (number|string): Tracks the progress of image generation (0 to 100) or 'incomplete'."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"startImageGeneration")," (function): Initiates the image generation process.")),(0,a.kt)("h3",{id:"details"},"Details"),(0,a.kt)("p",null,"The hook handles the image generation process, including the following steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Initiates image generation through the API."),(0,a.kt)("li",{parentName:"ul"},"Periodically checks the generation progress and updates state accordingly."),(0,a.kt)("li",{parentName:"ul"},"Updates the component's state once the image is fully generated."),(0,a.kt)("li",{parentName:"ul"},"Handles errors and updates UI accordingly.")),(0,a.kt)("h3",{id:"example-usage"},"Example Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"import React from 'react';\nimport useGenerateImage from './useGenerateImage';\n\nfunction ImageGenerationComponent() {\n    const { isGeneratingImage, progress, startImageGeneration } = useGenerateImage({\n        setItemForEditing,\n        setIsItemGenerated,\n        setGeneratedItemsList,\n    });\n\n    return (\n        <div>\n            <button\n                onClick={() => startImageGeneration('Your message here')}\n                disabled={isGeneratingImage}\n            >\n                Generate Image\n            </button>\n            {isGeneratingImage && <p>Generating...</p>}\n            {progress !== 'incomplete' && <p>Progress: {progress}%</p>}\n        </div>\n    );\n}\n")))}m.isMDXComponent=!0}}]);