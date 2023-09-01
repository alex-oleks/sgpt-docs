"use strict";(self.webpackChunksgpt=self.webpackChunksgpt||[]).push([[3676],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={},o=void 0,l={unversionedId:"Components/Header/Header",id:"Components/Header/Header",title:"Header",description:"The Header component is responsible for rendering the header section of the application, including the logo, search",source:"@site/docs/Components/Header/Header.md",sourceDirName:"Components/Header",slug:"/Components/Header/",permalink:"/sgpt-docs/Components/Header/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Components/Header/Header.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PresetItem",permalink:"/sgpt-docs/Components/EditingImagesPage/PresetItem/"},next:{title:"ListingFilters",permalink:"/sgpt-docs/Components/MainPage/ListingFilters/"}},s={},p=[{value:"Props",id:"props",level:3},{value:"Usage Example",id:"usage-example",level:3},{value:"Component Structure",id:"component-structure",level:3},{value:"Styling and Customization",id:"styling-and-customization",level:3},{value:"Functionality",id:"functionality",level:3},{value:"Logic Explanation",id:"logic-explanation",level:3},{value:"<strong>Effects</strong>",id:"effects",level:4},{value:"1. Fetch User Data on Authentication Change",id:"1-fetch-user-data-on-authentication-change",level:4},{value:"2. Search Logic",id:"2-search-logic",level:4},{value:"Considerations",id:"considerations",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Header")," component is responsible for rendering the header section of the application, including the logo, search\nbar, user profile information, and navigation buttons."),(0,i.kt)("h3",{id:"props"},"Props"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Header")," component doesn't accept any props."),(0,i.kt)("h3",{id:"usage-example"},"Usage Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"import Header from './Header'; // Import the component\n\nconst App = () => {\n    return (\n        <div>\n            <Header />\n            {/* ... other components ... */}\n        </div>\n    );\n};\n")),(0,i.kt)("h3",{id:"component-structure"},"Component Structure"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Header")," component is structured as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"Box")," component containing the entire header."),(0,i.kt)("li",{parentName:"ul"},"Inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"Box")," component:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A clickable logo (",(0,i.kt)("inlineCode",{parentName:"li"},"img"),") displayed on the top-left corner. Clicking the logo navigates to the homepage."),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"ClickAwayListener")," component to handle clicks outside the search results."),(0,i.kt)("li",{parentName:"ul"},"Inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"ClickAwayListener")," component:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A search input field (",(0,i.kt)("inlineCode",{parentName:"li"},"Input"),") with a search icon as the start adornment."),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"isSearching")," is true, a list of search results (",(0,i.kt)("inlineCode",{parentName:"li"},"Box")," elements) is displayed underneath the search input."))),(0,i.kt)("li",{parentName:"ul"},"A right section containing navigation buttons (",(0,i.kt)("inlineCode",{parentName:"li"},"IconButton"),") for the chat and image editor pages, and user profile\ninformation (",(0,i.kt)("inlineCode",{parentName:"li"},"Typography"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Avatar"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"ArrowDropDownIcon"),")."),(0,i.kt)("li",{parentName:"ul"},"A user menu (",(0,i.kt)("inlineCode",{parentName:"li"},"Menu"),") that appears when the user clicks the profile section.")))),(0,i.kt)("h3",{id:"styling-and-customization"},"Styling and Customization"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The styling of the header and its components is customized using the ",(0,i.kt)("inlineCode",{parentName:"li"},"sx")," prop from Material-UI."),(0,i.kt)("li",{parentName:"ul"},"Icons, images, and other UI elements are used to create the header's appearance.")),(0,i.kt)("h3",{id:"functionality"},"Functionality"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Displays the logo on the top-left corner, which is clickable and navigates to the homepage."),(0,i.kt)("li",{parentName:"ul"},"Provides a search bar for users to search for specific listings by address."),(0,i.kt)("li",{parentName:"ul"},"Displays a list of search results underneath the search bar when the user types a search query."),(0,i.kt)("li",{parentName:"ul"},"Navigates to the chat and image editor pages when the respective navigation buttons are clicked."),(0,i.kt)("li",{parentName:"ul"},"Displays user profile information, including the user's display name and avatar."),(0,i.kt)("li",{parentName:"ul"},"Opens a user menu with options like logout when the user clicks on the user profile section.")),(0,i.kt)("h3",{id:"logic-explanation"},"Logic Explanation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"State Declarations"),": Initialize various state variables to manage user data, available rooms, search results,\nsearch input, and menu visibility.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Authenticated User's UID"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"UID")," holds the current user's unique identifier. The ",(0,i.kt)("inlineCode",{parentName:"p"},"open")," variable manages the\nvisibility of the user menu.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Memoized Search State"),": The ",(0,i.kt)("inlineCode",{parentName:"p"},"isSearching")," variable indicates whether the user is actively searching based on\ncertain conditions, such as the search input's length and the ",(0,i.kt)("inlineCode",{parentName:"p"},"isSearchingState"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Event Handlers"),": Define functions to handle room clicks, menu clicks, logout, and clicks outside the search bar.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Fetch Available Rooms Query"),": Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"useQuery")," hook to fetch a list of available rooms. ",(0,i.kt)("inlineCode",{parentName:"p"},"isLoading")," indicates\nwhether the query is loading."))),(0,i.kt)("h4",{id:"effects"},(0,i.kt)("strong",{parentName:"h4"},"Effects")),(0,i.kt)("h4",{id:"1-fetch-user-data-on-authentication-change"},"1. Fetch User Data on Authentication Change"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"useEffect(() => {\n    onAuthStateChanged(auth, (user) => {\n        if (user) {\n            setUserData(user.providerData[0]);\n        }\n    });\n}, []);\n")),(0,i.kt)("p",null,"This ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect")," is responsible for fetching user data when the authentication state changes. It utilizes\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"onAuthStateChanged")," function from Firebase's authentication library. Here's the breakdown:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect")," function runs only once after the initial render. The empty dependency array (",(0,i.kt)("inlineCode",{parentName:"p"},"[]"),") ensures it doesn't\nre-run on subsequent renders.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Within the ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"onAuthStateChanged")," is used to listen for changes in the authentication state. When a user\nlogs in or out, this function is triggered.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the user is logged in (",(0,i.kt)("inlineCode",{parentName:"p"},"user")," is not ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"), the user's data is extracted from ",(0,i.kt)("inlineCode",{parentName:"p"},"user.providerData[0]")," and stored\nin the ",(0,i.kt)("inlineCode",{parentName:"p"},"userData")," state variable using ",(0,i.kt)("inlineCode",{parentName:"p"},"setUserData"),"."))),(0,i.kt)("h4",{id:"2-search-logic"},"2. Search Logic"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"useEffect(() => {\n    if (debouncedSearchValue.trim().length > 0) {\n        const results = (allRooms || []).filter((room) => {\n            return room.UnparsedAddress.toLowerCase().includes(debouncedSearchValue.toLowerCase());\n        });\n        setSearchResults(results);\n    }\n}, [debouncedSearchValue, allRooms]);\n")),(0,i.kt)("p",null,"This ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect")," manages the search functionality within the header. It responds to changes in the debounced search\nvalue and updates the ",(0,i.kt)("inlineCode",{parentName:"p"},"searchResults")," based on the filtered rooms' addresses. Here's the detailed breakdown:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect")," is triggered whenever ",(0,i.kt)("inlineCode",{parentName:"p"},"debouncedSearchValue")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"allRooms")," changes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The condition ",(0,i.kt)("inlineCode",{parentName:"p"},"debouncedSearchValue.trim().length > 0")," checks whether the trimmed search value has a length greater\nthan zero. If not, it doesn't execute the search logic.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the condition is met, it filters ",(0,i.kt)("inlineCode",{parentName:"p"},"allRooms")," array using the ",(0,i.kt)("inlineCode",{parentName:"p"},"filter")," function. For each room, it checks if the\nlowercased ",(0,i.kt)("inlineCode",{parentName:"p"},"UnparsedAddress")," includes the lowercased ",(0,i.kt)("inlineCode",{parentName:"p"},"debouncedSearchValue"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The filtered ",(0,i.kt)("inlineCode",{parentName:"p"},"results")," array is then set to the ",(0,i.kt)("inlineCode",{parentName:"p"},"searchResults")," state using ",(0,i.kt)("inlineCode",{parentName:"p"},"setSearchResults"),"."))),(0,i.kt)("h3",{id:"considerations"},"Considerations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This component relies on Material-UI components and styles for its appearance and functionality."),(0,i.kt)("li",{parentName:"ul"},"Ensure that Firebase authentication is set up properly for user authentication and profile information."),(0,i.kt)("li",{parentName:"ul"},"Make sure that routes for navigation (",(0,i.kt)("inlineCode",{parentName:"li"},"/chat"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"/editing"),", etc.) are defined in your routing setup.")))}d.isMDXComponent=!0}}]);