"use strict";(self.webpackChunksgpt=self.webpackChunksgpt||[]).push([[1870],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>u});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var o=n.createContext({}),d=function(e){var t=n.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=d(i),m=a,u=c["".concat(o,".").concat(m)]||c[m]||g[m]||s;return i?n.createElement(u,l(l({ref:t},p),{},{components:i})):n.createElement(u,l({ref:t},p))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=i.length,l=new Array(s);l[0]=m;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r[c]="string"==typeof e?e:a,l[1]=r;for(var d=2;d<s;d++)l[d]=i[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},4475:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=i(7462),a=(i(7294),i(3905));const s={},l=void 0,r={unversionedId:"Hooks/useHandleDetailedListingItem",id:"Hooks/useHandleDetailedListingItem",title:"useHandleDetailedListingItem",description:"The useHandleDetailedListingItem custom hook is designed for managing the active detailed listing item in a React application. It takes a listingId as input and uses the useGetDetailedListing hook to fetch detailed listing data. It also considers the list of all listings, the list of favorite listing IDs, and a function to set the active listing.",source:"@site/docs/Hooks/useHandleDetailedListingItem.md",sourceDirName:"Hooks",slug:"/Hooks/useHandleDetailedListingItem",permalink:"/sgpt-docs/Hooks/useHandleDetailedListingItem",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Hooks/useHandleDetailedListingItem.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useGetImagesPresets",permalink:"/sgpt-docs/Hooks/useGetImagesPresets"},next:{title:"useHandleListings",permalink:"/sgpt-docs/Hooks/useHandleListings"}},o={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Functionality",id:"functionality",level:3},{value:"Example Usage",id:"example-usage",level:3}],p={toc:d},c="wrapper";function g(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useHandleDetailedListingItem")," custom hook is designed for managing the active detailed listing item in a React application. It takes a ",(0,a.kt)("inlineCode",{parentName:"p"},"listingId")," as input and uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"useGetDetailedListing")," hook to fetch detailed listing data. It also considers the list of all listings, the list of favorite listing IDs, and a function to set the active listing."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"import useHandleDetailedListingItem from './useHandleDetailedListingItem';\n\n// Inside a functional component\nuseHandleDetailedListingItem({\n  listingId,\n  allListings,\n  favoriteListingsIds,\n  setActiveListing,\n});\n")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"listingId")," (String): A string representing the unique identifier of the listing you want to handle as the active detailed listing."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"allListings")," (Array): An array representing all available listings."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"favoriteListingsIds")," (Array): An array of strings containing the unique identifiers of favorite listings."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"setActiveListing")," (Function): A function used to set the active detailed listing.")),(0,a.kt)("h3",{id:"functionality"},"Functionality"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Importing Dependencies"),": The hook starts by importing necessary dependencies like ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect")," for side effects and the ",(0,a.kt)("inlineCode",{parentName:"p"},"useGetDetailedListing")," hook for fetching detailed listing data.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Using ",(0,a.kt)("inlineCode",{parentName:"strong"},"useGetDetailedListing")),": The ",(0,a.kt)("inlineCode",{parentName:"p"},"useGetDetailedListing")," hook is used to fetch detailed listing data for the specified ",(0,a.kt)("inlineCode",{parentName:"p"},"listingId"),". It retrieves the ",(0,a.kt)("inlineCode",{parentName:"p"},"detailedListingData")," object.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Handling Active Listing"),": Inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect")," hook, the logic for handling the active detailed listing is implemented."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"It first checks if a valid ",(0,a.kt)("inlineCode",{parentName:"p"},"listingId")," exists. If not, it sets the active listing to ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," and returns, effectively clearing the active listing.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"It attempts to find the listing with the given ",(0,a.kt)("inlineCode",{parentName:"p"},"listingId")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"allListings")," array. If it can't find the listing or if there is no detailed listing data available, it sets the active listing to ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," and returns.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"listingId")," matches the ",(0,a.kt)("inlineCode",{parentName:"p"},"Id")," of the found listing, it constructs a new ",(0,a.kt)("inlineCode",{parentName:"p"},"activeListingsWithFilteredMedia")," object:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"It checks if the listing has more than one media item (",(0,a.kt)("inlineCode",{parentName:"p"},"currentActiveListing?.Media?.length > 1"),"). If so, it includes media items from index 1 to 5 in the new object, effectively filtering the media.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"It includes other properties like ",(0,a.kt)("inlineCode",{parentName:"p"},"isLiked"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"description"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"roomsTotal")," from the detailed listing data and the found listing.")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Finally, it sets the ",(0,a.kt)("inlineCode",{parentName:"p"},"activeListing")," using the ",(0,a.kt)("inlineCode",{parentName:"p"},"setActiveListing")," function with the constructed ",(0,a.kt)("inlineCode",{parentName:"p"},"activeListingsWithFilteredMedia")," object."))))),(0,a.kt)("h3",{id:"example-usage"},"Example Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"import React, { useState } from 'react';\nimport useHandleDetailedListingItem from './useHandleDetailedListingItem';\n\nfunction DetailedListing({ listingId, allListings, favoriteListingsIds }) {\n  const [activeListing, setActiveListing] = useState(null);\n\n  useHandleDetailedListingItem({\n    listingId,\n    allListings,\n    favoriteListingsIds,\n    setActiveListing,\n  });\n\n  // Render the active detailed listing\n  return (\n    <div>\n      {activeListing ? (\n        <div>\n          <h2>{activeListing.title}</h2>\n          <p>{activeListing.description}</p>\n          {/* Render other details */}\n        </div>\n      ) : (\n        <div>No active listing selected.</div>\n      )}\n    </div>\n  );\n}\n\nexport default DetailedListing;\n")),(0,a.kt)("p",null,"In this example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"useHandleDetailedListingItem")," hook is used within a React component to manage and display the active detailed listing, considering the provided parameters and detailed listing data fetched using ",(0,a.kt)("inlineCode",{parentName:"p"},"useGetDetailedListing"),"."))}g.isMDXComponent=!0}}]);