"use strict";(self.webpackChunksgpt=self.webpackChunksgpt||[]).push([[8050],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?i.createElement(h,o(o({ref:t},u),{},{components:n})):i.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const r={},o=void 0,s={unversionedId:"Hooks/useFavoriteListings",id:"Hooks/useFavoriteListings",title:"useFavoriteListings",description:"The useFavoriteListings hook is a custom React hook designed to simplify the process of managing a list of favorite",source:"@site/docs/Hooks/useFavoriteListings.md",sourceDirName:"Hooks",slug:"/Hooks/useFavoriteListings",permalink:"/sgpt-docs/Hooks/useFavoriteListings",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Hooks/useFavoriteListings.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UseScreenSize",permalink:"/sgpt-docs/Hooks/UseScreenSize"},next:{title:"useHandleListings",permalink:"/sgpt-docs/Hooks/useHandleListings"}},l={},p=[{value:"Usage",id:"usage",level:3},{value:"Importing the Hook",id:"importing-the-hook",level:4},{value:"Initializing the Hook",id:"initializing-the-hook",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Return Value",id:"return-value",level:4},{value:"Implementation Details",id:"implementation-details",level:3},{value:"Example Usage",id:"example-usage",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Note",id:"note",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useFavoriteListings")," hook is a custom React hook designed to simplify the process of managing a list of favorite\nlistings associated with a user. It handles fetching the initial list of favorite listings from a Firebase Realtime\nDatabase and keeps it in sync with any changes made to the user's favorite listings in real-time."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("h4",{id:"importing-the-hook"},"Importing the Hook"),(0,a.kt)("p",null,"To use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useFavoriteListings")," hook, you need to import it into your React component file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"import useFavoriteListings from 'path-to-useFavoriteListings';\n")),(0,a.kt)("h4",{id:"initializing-the-hook"},"Initializing the Hook"),(0,a.kt)("p",null,"You can initialize the hook by calling it within a functional component and passing an object with the ",(0,a.kt)("inlineCode",{parentName:"p"},"UID")," (User ID)\nas a parameter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"const { favoriteListingsIds } = useFavoriteListings({ UID });\n")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useFavoriteListings")," hook accepts a single parameter as an object:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UID")," (string, required): The User ID for which you want to fetch and manage favorite listings.")),(0,a.kt)("h4",{id:"return-value"},"Return Value"),(0,a.kt)("p",null,"The hook returns an object with the following property:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"favoriteListingsIds")," (array): An array containing the IDs of the user's favorite listings. Initially, it's an empty\narray and will be updated when data is fetched from Firebase or when there are real-time updates.")),(0,a.kt)("h3",{id:"implementation-details"},"Implementation Details"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useFavoriteListings")," hook performs the following tasks:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Fetching Initial Data"),": It fetches the initial list of favorite listings associated with the provided ",(0,a.kt)("inlineCode",{parentName:"p"},"UID")," using\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"ProfileAPI.getFavoriteListings")," method. The fetched data is then stored in the ",(0,a.kt)("inlineCode",{parentName:"p"},"favoriteListingsIds")," state.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Real-time Updates"),": It sets up a real-time listener on the Firebase Realtime Database to listen for changes to the\nuser's favorite listings. When there are updates, such as additions or deletions, the ",(0,a.kt)("inlineCode",{parentName:"p"},"favoriteListingsIds")," state is\nupdated to reflect the changes.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Cleanup"),": When the component unmounts or when the ",(0,a.kt)("inlineCode",{parentName:"p"},"UID")," changes, it cleans up the real-time listener to avoid\nmemory leaks."))),(0,a.kt)("h3",{id:"example-usage"},"Example Usage"),(0,a.kt)("p",null,"Here's an example of how you might use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useFavoriteListings")," hook in a React component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"import React from 'react';\nimport useFavoriteListings from 'path-to-useFavoriteListings';\n\nfunction UserProfile({ UID }) {\n  const { favoriteListingsIds } = useFavoriteListings({ UID });\n\n  return (\n    <div>\n      <h1>User Profile</h1>\n      <p>Favorite Listings:</p>\n      <ul>\n        {favoriteListingsIds.map((listingId) => (\n          <li key={listingId}>{listingId}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n")),(0,a.kt)("p",null,"In this example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"UserProfile")," component uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"useFavoriteListings")," hook to fetch and display the user's\nfavorite listings in real-time."),(0,a.kt)("h3",{id:"dependencies"},"Dependencies"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useFavoriteListings")," hook relies on the following dependencies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"React: This hook is designed to work with React functional components."),(0,a.kt)("li",{parentName:"ul"},"Firebase Realtime Database: It assumes you have a Firebase project set up with a Realtime Database and the necessary\nconfiguration.")),(0,a.kt)("h3",{id:"note"},"Note"),(0,a.kt)("p",null,"Make sure to handle Firebase authentication and provide the correct ",(0,a.kt)("inlineCode",{parentName:"p"},"UID")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"useFavoriteListings")," hook for the\ndesired user's data to be fetched and synchronized. Additionally, you should ensure proper error handling and security\nrules in your Firebase setup to protect user data."))}d.isMDXComponent=!0}}]);