"use strict";(self.webpackChunksgpt=self.webpackChunksgpt||[]).push([[9412],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8615:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={},o=void 0,s={unversionedId:"Pages/Main page/MainPageProvider",id:"Pages/Main page/MainPageProvider",title:"MainPageProvider",description:"The MainPageProvider component is responsible for providing context and data to the MainPage component. It",source:"@site/docs/Pages/Main page/MainPageProvider.md",sourceDirName:"Pages/Main page",slug:"/Pages/Main page/MainPageProvider",permalink:"/sgpt-docs/Pages/Main page/MainPageProvider",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Pages/Main page/MainPageProvider.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MainPage",permalink:"/sgpt-docs/Pages/Main page/MainPage"},next:{title:"ProfilePage",permalink:"/sgpt-docs/Pages/Profile page/ProfilePage"}},l={},p=[{value:"Imports",id:"imports",level:3},{value:"MainPageContext",id:"mainpagecontext",level:3},{value:"MainPageProvider Component",id:"mainpageprovider-component",level:3},{value:"useMainPageProvider Hook",id:"usemainpageprovider-hook",level:3},{value:"Export",id:"export",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"MainPageProvider")," component is responsible for providing context and data to the ",(0,i.kt)("inlineCode",{parentName:"p"},"MainPage")," component. It\nencapsulates the logic for fetching and handling listings data, managing filters, and handling pagination."),(0,i.kt)("h3",{id:"imports"},"Imports"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"import React, { createContext, memo, useCallback, useContext, useMemo } from 'react';\nimport useHandleListings from '../../hooks/useHandleListings/useHandleListings';\nimport { useAppProvider } from '../Layout/LayoutProvider';\nimport { makeFilterChipsList } from '../../utils/listing/makeFilterChipsList';\nimport useFavoriteListings from '../../hooks/useFavoriteListings/useFavoriteListings';\nimport { useDocumentTitle } from 'usehooks-ts';\nimport { useAuthorization } from '../AuthorizationLayer/AuthorizationLayer';\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useHandleListings"),": A custom hook for fetching and handling listings data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useAppProvider"),": A custom hook for accessing application-level context from ",(0,i.kt)("inlineCode",{parentName:"li"},"LayoutProvider"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useDocumentTitle"),": Changes document title when component is rendered."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useAuthorization"),": Get auth data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useFavoriteListings"),": Get user's favorite listings.")),(0,i.kt)("h3",{id:"mainpagecontext"},"MainPageContext"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"const MainPageContext = createContext(null);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MainPageContext")," is a context object created using the ",(0,i.kt)("inlineCode",{parentName:"li"},"createContext")," function. It will hold the data shared across\ncomponents within the ",(0,i.kt)("inlineCode",{parentName:"li"},"MainPageProvider"),".")),(0,i.kt)("h3",{id:"mainpageprovider-component"},"MainPageProvider Component"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"const MainPageProvider = () => {\n    //@@viewOn:hooks\n    const {\n        currentPage,\n        rooms,\n        setCurrentPage,\n        setRooms,\n        isFilterModalOpen,\n        setIsFilterModalOpen,\n        regions,\n        setRegions,\n        filterOptions,\n    } = useAppProvider();\n\n    const { data, isLoading, isFetching, error } = useHandleListings({\n        filterOptions,\n        currentPage,\n        regions,\n        rooms,\n        setCurrentPage,\n        setRooms,\n    });\n    //@@viewOff:hooks\n\n    //@@viewOn:context\n    const contextValue = useMemo(\n        () => ({\n            error,\n            rooms,\n            regions,\n            setRegions,\n            currentPage,\n            setCurrentPage,\n            isFilterModalOpen,\n            setIsFilterModalOpen,\n            isFetching: isLoading || isFetching,\n            totalListings: data?.length || 0,\n        }),\n        [\n            error,\n            rooms,\n            regions,\n            setRegions,\n            currentPage,\n            setCurrentPage,\n            isFilterModalOpen,\n            setIsFilterModalOpen,\n            isFetching,\n            data,\n        ],\n    );\n    //@@viewOff:context\n\n    return <MainPageContext.Provider value={contextValue}>{children}</MainPageContext.Provider>;\n\n};\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"MainPageProvider")," component encapsulates the logic for fetching and managing listings data and provides it to\nthe ",(0,i.kt)("inlineCode",{parentName:"li"},"children")," component through context."),(0,i.kt)("li",{parentName:"ul"},"The component uses the ",(0,i.kt)("inlineCode",{parentName:"li"},"useAppProvider")," hook to access context values and actions from the ",(0,i.kt)("inlineCode",{parentName:"li"},"LayoutProvider"),"."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"useHandleListings")," hook is used to fetch and handle listings data based on filter options, current page, regions,\nrooms, and various actions."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"contextValue")," object holds the data and actions that will be available to components consuming\nthe ",(0,i.kt)("inlineCode",{parentName:"li"},"MainPageContext"),"."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"useMemo")," hook memoizes the ",(0,i.kt)("inlineCode",{parentName:"li"},"contextValue")," to prevent unnecessary re-rendering."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"children")," component is wrapped in the ",(0,i.kt)("inlineCode",{parentName:"li"},"MainPageContext.Provider")," to provide the context data to its child\ncomponents.")),(0,i.kt)("h3",{id:"usemainpageprovider-hook"},"useMainPageProvider Hook"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"const useMainPageProvider = () => {\n    const context = useContext(MainPageContext);\n    if (!context) {\n        throw new Error('useMainPageProvider must be used within a MainPageProvider');\n    }\n    return context;\n};\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"useMainPageProvider")," hook is used to access the context values provided by ",(0,i.kt)("inlineCode",{parentName:"li"},"MainPageProvider"),"."),(0,i.kt)("li",{parentName:"ul"},"It uses the ",(0,i.kt)("inlineCode",{parentName:"li"},"useContext")," hook to retrieve the context values from the nearest ",(0,i.kt)("inlineCode",{parentName:"li"},"MainPageContext.Provider")," ancestor."),(0,i.kt)("li",{parentName:"ul"},"If the hook is used outside the context provider, it throws an error.")),(0,i.kt)("h3",{id:"export"},"Export"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"export default memo(MainPageProvider);\nexport { useMainPageProvider };\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"MainPageProvider")," component is exported as a memoized component for performance optimization."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"useMainPageProvider")," hook is also exported for components that need to access the context values\nfrom ",(0,i.kt)("inlineCode",{parentName:"li"},"MainPageProvider"),".")))}u.isMDXComponent=!0}}]);