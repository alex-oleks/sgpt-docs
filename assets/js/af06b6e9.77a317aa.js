"use strict";(self.webpackChunksgpt=self.webpackChunksgpt||[]).push([[6093],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={},a=void 0,s={unversionedId:"Hooks/UseScreenSize",id:"Hooks/UseScreenSize",title:"UseScreenSize",description:"The useScreenSize hook is a custom React hook designed to track and provide information about the current screen size",source:"@site/docs/Hooks/UseScreenSize.md",sourceDirName:"Hooks",slug:"/Hooks/UseScreenSize",permalink:"/Hooks/UseScreenSize",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Hooks/UseScreenSize.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UseQueryActions",permalink:"/Hooks/UseQueryActions"},next:{title:"useFavoriteListings",permalink:"/Hooks/useFavoriteListings"}},c={},l=[{value:"Return Value",id:"return-value",level:3},{value:"Details",id:"details",level:3},{value:"Example Usage",id:"example-usage",level:3}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useScreenSize")," hook is a custom React hook designed to track and provide information about the current screen size\ncategory based on the window width."),(0,o.kt)("h3",{id:"return-value"},"Return Value"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useScreenSize")," hook returns a string indicating the current screen size category:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'xl'"),": Extra Large screen"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'l'"),": Large screen"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'m'"),": Medium screen"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'s'"),": Small screen"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'xs'"),": Extra small screen")),(0,o.kt)("h3",{id:"details"},"Details"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The hook calculates the screen size category based on the window width and returns the corresponding string value."),(0,o.kt)("li",{parentName:"ul"},"It uses the window.innerWidth property to determine the width of the window and map it to screen size categories."),(0,o.kt)("li",{parentName:"ul"},"The hook also listens for the resize event to update the screen size when the window is resized, ensuring accurate\ntracking of the screen size.")),(0,o.kt)("h3",{id:"example-usage"},"Example Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"import React from 'react';\nimport useScreenSize from './useScreenSize';\n\nfunction ScreenSizeComponent() {\n    const screenSize = useScreenSize();\n\n    // Use the screenSize to conditionally render components\n    // based on the detected screen size\n\n    return <>// Your JSX components here</>;\n}\n")),(0,o.kt)("p",null,"In this example, the useScreenSize hook is used to detect the current screen size and conditionally render components\nbased on the detected screen size category."))}d.isMDXComponent=!0}}]);