"use strict";(self.webpackChunksgpt=self.webpackChunksgpt||[]).push([[7683],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7491:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},i=void 0,l={unversionedId:"Pages/Layout/DataResolver",id:"Pages/Layout/DataResolver",title:"DataResolver",description:"The DataResolver component is a utility component that handles the different states of loading data, errors, and",source:"@site/docs/Pages/Layout/DataResolver.md",sourceDirName:"Pages/Layout",slug:"/Pages/Layout/DataResolver",permalink:"/sgpt-docs/Pages/Layout/DataResolver",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Pages/Layout/DataResolver.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Layout",permalink:"/sgpt-docs/Pages/Layout/"},next:{title:"LayoutProvider",permalink:"/sgpt-docs/Pages/Layout/LayoutProvider"}},s={},p=[{value:"Imports",id:"imports",level:3},{value:"DataResolver Component",id:"dataresolver-component",level:3},{value:"Loading State",id:"loading-state",level:4},{value:"Error State",id:"error-state",level:4},{value:"Success State",id:"success-state",level:4},{value:"Export",id:"export",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"DataResolver")," component is a utility component that handles the different states of loading data, errors, and\nsuccessful data retrieval. It's used to conditionally render content based on the state of the data fetching process."),(0,a.kt)("h3",{id:"imports"},"Imports"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"import Loader from '../../components/UI/Loader/Loader';\nimport AppErrorPage from '../AppErrorPage/AppErrorPage';\nimport { memo } from 'react';\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Loader"),": The UI component responsible for rendering a loading indicator."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AppErrorPage"),": A custom error page component for displaying application errors."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"memo"),": A function to memoize a component for performance optimization.")),(0,a.kt)("h3",{id:"dataresolver-component"},"DataResolver Component"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"DataResolver")," component receives several props:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"data"),": The fetched data (if successful)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"error"),": An error object (if an error occurred)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"loading"),": A boolean indicating whether data is currently being loaded."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"children"),": The content to be rendered once the data is resolved.")),(0,a.kt)("h4",{id:"loading-state"},"Loading State"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"if (loading) {\n    return <Loader />;\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"loading")," is true, the component renders the ",(0,a.kt)("inlineCode",{parentName:"li"},"Loader")," component, indicating that data is currently being fetched.")),(0,a.kt)("h4",{id:"error-state"},"Error State"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"if (error) {\n    return <AppErrorPage appError={error} />;\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"error")," is present, the component renders the ",(0,a.kt)("inlineCode",{parentName:"li"},"AppErrorPage")," component and passes the ",(0,a.kt)("inlineCode",{parentName:"li"},"error")," object as a prop to\ndisplay the error information.")),(0,a.kt)("h4",{id:"success-state"},"Success State"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"return <>{typeof children === 'function' ? children(data) : children}</>;\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If neither ",(0,a.kt)("inlineCode",{parentName:"li"},"loading")," nor ",(0,a.kt)("inlineCode",{parentName:"li"},"error")," is true, the component renders its children. If ",(0,a.kt)("inlineCode",{parentName:"li"},"children")," is a function, it's called\nwith the ",(0,a.kt)("inlineCode",{parentName:"li"},"data")," prop as an argument. Otherwise, the ",(0,a.kt)("inlineCode",{parentName:"li"},"children")," are rendered as-is.")),(0,a.kt)("h3",{id:"export"},"Export"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"export default memo(DataResolver);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"DataResolver")," component is exported as a memoized component to optimize rendering performance.")))}u.isMDXComponent=!0}}]);