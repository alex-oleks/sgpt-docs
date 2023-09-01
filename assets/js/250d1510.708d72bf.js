"use strict";(self.webpackChunksgpt=self.webpackChunksgpt||[]).push([[1509],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4802:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={},o=void 0,s={unversionedId:"Hooks/useHandleListings",id:"Hooks/useHandleListings",title:"useHandleListings",description:"The useHandleListings hook is a custom React hook designed to manage and handle the retrieval of listings for display.",source:"@site/docs/Hooks/useHandleListings.md",sourceDirName:"Hooks",slug:"/Hooks/useHandleListings",permalink:"/sgpt-docs/Hooks/useHandleListings",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Hooks/useHandleListings.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useFavoriteListings",permalink:"/sgpt-docs/Hooks/useFavoriteListings"},next:{title:"ChatPage",permalink:"/sgpt-docs/Pages/Chat page/ChatPage"}},l={},u=[{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Details",id:"details",level:3},{value:"Example Usage",id:"example-usage",level:3}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useHandleListings")," hook is a custom React hook designed to manage and handle the retrieval of listings for display.\nIt utilizes the ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," hook from the ",(0,r.kt)("inlineCode",{parentName:"p"},"@tanstack/react-query")," library to fetch and manage the data."),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"regions")," (array): An array of selected regions for filtering listings."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rooms")," (array): An array of rooms retrieved for display."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"currentPage")," (number): The current page number being displayed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"filterOptions")," (object): Options for filtering listings."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setCurrentPage")," (function): A function to set the current page number."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setRooms")," (function): A function to set the retrieved rooms for display.")),(0,r.kt)("h3",{id:"return-value"},"Return Value"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useHandleListings")," hook returns an object containing the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isLoading")," (boolean): Indicates whether the data is currently being loaded."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isFetching")," (boolean): Indicates whether the data is currently being refetched."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data")," (any): The fetched data, which includes room listings."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error")," (Error): An error object if the data fetch encounters an error.")),(0,r.kt)("h3",{id:"details"},"Details"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The hook uses the useQuery hook to fetch room listing data based on the provided parameters."),(0,r.kt)("li",{parentName:"ul"},"It manages pagination by slicing the retrieved data into chunks based on the current page and the specified number of\nlistings per page."),(0,r.kt)("li",{parentName:"ul"},"The hook sets the initial listing data on successful fetch, updates the listing data on each page change, and manages\nloading and error states.")),(0,r.kt)("h3",{id:"example-usage"},"Example Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"import React from 'react';\nimport useHandleListings from './useHandleListings';\n\nfunction ListingsComponent() {\n    const { isLoading, isFetching, data, error } = useHandleListings({\n        regions,\n        rooms,\n        currentPage,\n        filterOptions,\n        setCurrentPage,\n        setRooms,\n    });\n\n    // Display loading, data, or error components based on the hook results\n\n    return <>// Your JSX components here</>;\n}\n")),(0,r.kt)("p",null,"In this example, the useHandleListings hook is used to manage listing data retrieval for a listings component. The hook\nhandles data fetching, pagination, and updates to the rooms state based on user interactions."))}c.isMDXComponent=!0}}]);