"use strict";(self.webpackChunksgpt=self.webpackChunksgpt||[]).push([[6782],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||a;return n?o.createElement(f,i(i({ref:t},l),{},{components:n})):o.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={},i=void 0,s={unversionedId:"Hooks/useQueryActions",id:"Hooks/useQueryActions",title:"useQueryActions",description:"The UseQueryActions hook is a custom hook that encapsulates mutations using the useMutation hook from",source:"@site/docs/Hooks/useQueryActions.md",sourceDirName:"Hooks",slug:"/Hooks/useQueryActions",permalink:"/sgpt-docs/Hooks/useQueryActions",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Hooks/useQueryActions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useHandleListings",permalink:"/sgpt-docs/Hooks/useHandleListings"},next:{title:"useScreenSize",permalink:"/sgpt-docs/Hooks/useScreenSize"}},u={},c=[{value:"Return Value",id:"return-value",level:3},{value:"Details",id:"details",level:3},{value:"Example Usage",id:"example-usage",level:3}],l={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"UseQueryActions")," hook is a custom hook that encapsulates mutations using the ",(0,r.kt)("inlineCode",{parentName:"p"},"useMutation")," hook from\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"@tanstack/react-query")," library. It provides a centralized location for defining and handling mutation actions."),(0,r.kt)("h3",{id:"return-value"},"Return Value"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"UseQueryActions")," hook returns an object containing the following mutation functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getListingsRooms"),": A mutation for fetching listings' room data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"createSocialPost"),": A mutation for creating social media posts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"makeChatRequest"),": A mutation for sending chat requests.")),(0,r.kt)("h3",{id:"details"},"Details"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The hook uses the useMutation hook to define mutations, including their mutation function, success handling, and error\nhandling."),(0,r.kt)("li",{parentName:"ul"},"Mutation functions are organized within the UseQueryActions hook, making them easily accessible and reusable across\ndifferent components."),(0,r.kt)("li",{parentName:"ul"},"These mutations can be called from your components, allowing you to interact with APIs and manage state updates\nefficiently.")),(0,r.kt)("h3",{id:"example-usage"},"Example Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"import React from 'react';\nimport useQueryActions from './useQueryActions';\n\nfunction MutationsComponent() {\n    const { getListingsRooms, createSocialPost, makeChatRequest } = useQueryActions();\n\n    // Use the mutation functions in your component\n\n    return <>// Your JSX components here</>;\n}\n")),(0,r.kt)("p",null,"In this example, the UseQueryActions hook is used to manage mutation actions in a component. The hook provides access to\nvarious mutation functions, each representing a specific mutation action."))}m.isMDXComponent=!0}}]);