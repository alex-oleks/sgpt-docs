"use strict";(self.webpackChunksgpt=self.webpackChunksgpt||[]).push([[1286],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=i(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,u(u({ref:t},l),{},{components:n})):r.createElement(f,u({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,u[1]=s;for(var i=2;i<a;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8446:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const a={},u=void 0,s={unversionedId:"Hooks/useDebounce",id:"Hooks/useDebounce",title:"useDebounce",description:"The useDebounce hook is a custom React hook that assists in debouncing a value. Debouncing is a technique used to",source:"@site/docs/Hooks/useDebounce.md",sourceDirName:"Hooks",slug:"/Hooks/useDebounce",permalink:"/sgpt-docs/Hooks/useDebounce",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Hooks/useDebounce.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Functional Structure and Data Flow Documentation",permalink:"/sgpt-docs/General/structure-and-dataflow"},next:{title:"useFavoriteListings",permalink:"/sgpt-docs/Hooks/useFavoriteListings"}},c={},i=[{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Example",id:"example",level:3}],l={toc:i},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useDebounce")," hook is a custom React hook that assists in debouncing a value. Debouncing is a technique used to\ndelay the execution of a function until after a certain time period has passed since the last invocation. This hook is\nparticularly useful in scenarios where you want to limit the frequency of updates, such as in search input fields."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"value (any): The value that you want to debounce."),(0,o.kt)("p",null,"delay (number): The delay time in milliseconds before the debounced value is updated."),(0,o.kt)("h3",{id:"return-value"},"Return Value"),(0,o.kt)("p",null,"The useDebounce hook returns the debounced value after the specified delay."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"Here's an example of how you might use the useDebounce hook:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"import React, { useState } from 'react';\nimport useDebounce from './useDebounce';\n\nfunction SearchComponent() {\n    const [searchTerm, setSearchTerm] = useState('');\n    const debouncedSearchTerm = useDebounce(searchTerm, 300);\n    // Assume you're using this debounced search term to fetch data or perform other actions\n    // For instance:\n    // fetchData(debouncedSearchTerm);\n    return (\n        <input\n            type=\"text\"\n            value={searchTerm}\n            onChange={(e) => setSearchTerm(e.target.value)}\n            placeholder=\"Search...\"\n        />\n    );\n}\n")))}d.isMDXComponent=!0}}]);