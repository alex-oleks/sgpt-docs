"use strict";(self.webpackChunksgpt=self.webpackChunksgpt||[]).push([[8305],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>u});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(i),c=a,u=m["".concat(l,".").concat(c)]||m[c]||g[c]||s;return i?n.createElement(u,r(r({ref:t},d),{},{components:i})):n.createElement(u,r({ref:t},d))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=i.length,r=new Array(s);r[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:a,r[1]=o;for(var p=2;p<s;p++)r[p]=i[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},7009:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=i(7462),a=(i(7294),i(3905));const s={},r=void 0,o={unversionedId:"Pages/Listing item page/ListingItemPageProvider",id:"Pages/Listing item page/ListingItemPageProvider",title:"ListingItemPageProvider",description:"The ListingItemPageProvider component serves as a data provider for the ListingItemPage component, which displays",source:"@site/docs/Pages/Listing item page/ListingItemPageProvider.md",sourceDirName:"Pages/Listing item page",slug:"/Pages/Listing item page/ListingItemPageProvider",permalink:"/sgpt-docs/Pages/Listing item page/ListingItemPageProvider",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Pages/Listing item page/ListingItemPageProvider.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ListingItemPage",permalink:"/sgpt-docs/Pages/Listing item page/ListingItemPage"},next:{title:"ListingItemPageRouteProvider",permalink:"/sgpt-docs/Pages/Listing item page/ListingItemPageRouteProvider"}},l={},p=[{value:"Hooks",id:"hooks",level:3},{value:"1. <code>useFavoriteListings</code> Custom Hook:",id:"1-usefavoritelistings-custom-hook",level:3},{value:"2. <code>useQuery</code> (React Query):",id:"2-usequery-react-query",level:3},{value:"3. <code>useScreenSize</code> Custom Hook:",id:"3-usescreensize-custom-hook",level:3},{value:"4. <code>useEffect</code>:",id:"4-useeffect",level:3},{value:"5. <code>useGetAllListings</code> Custom Hook:",id:"5-usegetalllistings-custom-hook",level:3},{value:"6. <code>useHandleDetailedListingItem</code> Custom Hook:",id:"6-usehandledetailedlistingitem-custom-hook",level:3},{value:"Data Flow",id:"data-flow",level:3},{value:"Component Structure",id:"component-structure",level:3},{value:"Usage",id:"usage",level:3}],d={toc:p},m="wrapper";function g(e){let{components:t,...i}=e;return(0,a.kt)(m,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ListingItemPageProvider")," component serves as a data provider for the ",(0,a.kt)("inlineCode",{parentName:"p"},"ListingItemPage")," component, which displays\ndetailed information about a real estate listing. This provider component manages data fetching, state management, and\nuser interactions related to the listing details."),(0,a.kt)("h3",{id:"hooks"},"Hooks"),(0,a.kt)("p",null,'"Certainly, here are code examples from your component that demonstrate the usage of each:'),(0,a.kt)("h3",{id:"1-usefavoritelistings-custom-hook"},"1. ",(0,a.kt)("inlineCode",{parentName:"h3"},"useFavoriteListings")," Custom Hook:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"static",static:!0},"const { favoriteListingsIds } = useFavoriteListings({ UID });\n")),(0,a.kt)("p",null,"In this line, you're using ",(0,a.kt)("inlineCode",{parentName:"p"},"useFavoriteListings")," to retrieve the user's favorite listings' IDs. ",(0,a.kt)("inlineCode",{parentName:"p"},"favoriteListingsIds"),"\nwill contain an array of these IDs."),(0,a.kt)("h3",{id:"2-usequery-react-query"},"2. ",(0,a.kt)("inlineCode",{parentName:"h3"},"useQuery")," (React Query):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"static",static:!0},"const { isLoading: listingsIsLoading, data: allListings } = useQuery({\n  queryKey: ['getListingsRooms', { filterOptions: null, regions: null, showOnlyAgentsListings: false }],\n  // ...\n});\n")),(0,a.kt)("p",null,"Here, you're using ",(0,a.kt)("inlineCode",{parentName:"p"},"useQuery")," to fetch all listings. ",(0,a.kt)("inlineCode",{parentName:"p"},"isLoading")," indicates whether the data is still loading, and ",(0,a.kt)("inlineCode",{parentName:"p"},"data"),"\nwill contain the fetched listings once they're available."),(0,a.kt)("h3",{id:"3-usescreensize-custom-hook"},"3. ",(0,a.kt)("inlineCode",{parentName:"h3"},"useScreenSize")," Custom Hook:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"static",static:!0},"const screenSize = useScreenSize();\nconst isMobile = screenSize === 'xs' || screenSize === 's';\n")),(0,a.kt)("p",null,"This code snippet uses ",(0,a.kt)("inlineCode",{parentName:"p"},"useScreenSize")," to determine the screen size. It then sets ",(0,a.kt)("inlineCode",{parentName:"p"},"isMobile")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if the screen\nsize is extra-small or small."),(0,a.kt)("h3",{id:"4-useeffect"},"4. ",(0,a.kt)("inlineCode",{parentName:"h3"},"useEffect"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"static",static:!0},"useEffect(() => {\n  if (id) {\n    const currentActiveListing = allListings?.find((listing) => listing.Id === id);\n    // ...\n    setActiveListing(activeListingsWithFilteredMedia);\n  }\n}, [id, allListings, favoriteListingsIds]);\n")),(0,a.kt)("h3",{id:"5-usegetalllistings-custom-hook"},"5. ",(0,a.kt)("inlineCode",{parentName:"h3"},"useGetAllListings")," Custom Hook:"),(0,a.kt)("p",null,"Get all listings and handle loading"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"static",static:!0},"const { listingsIsLoading, allListings } = useGetAllListings();\n")),(0,a.kt)("h3",{id:"6-usehandledetailedlistingitem-custom-hook"},"6. ",(0,a.kt)("inlineCode",{parentName:"h3"},"useHandleDetailedListingItem")," Custom Hook:"),(0,a.kt)("p",null,"Get detailed listing property and merge with other data about this property. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"static",static:!0},"useHandleDetailedListingItem({ listingId: id, allListings, favoriteListingsIds, setActiveListing });\n")),(0,a.kt)("h3",{id:"data-flow"},"Data Flow"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ListingItemPageProvider")," component orchestrates the data flow and interactions as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Initialization (",(0,a.kt)("inlineCode",{parentName:"strong"},"UID"),"):")," It retrieves the current user's UID from Firebase authentication, which is used for\nfetching and updating user-specific data.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Screen Size (",(0,a.kt)("inlineCode",{parentName:"strong"},"screenSize"),"):")," It uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"useScreenSize")," hook to determine the screen size, which influences the\ncomponent's responsiveness. The component adapts its behavior for mobile screens.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"URL Parameters (",(0,a.kt)("inlineCode",{parentName:"strong"},"id"),"):")," It extracts the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," parameter from the URL using the ",(0,a.kt)("inlineCode",{parentName:"p"},"useParams")," hook. This parameter\ncorresponds to the specific listing's unique identifier.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Favorite Listings (",(0,a.kt)("inlineCode",{parentName:"strong"},"useFavoriteListings"),"):")," It utilizes the ",(0,a.kt)("inlineCode",{parentName:"p"},"useFavoriteListings")," hook to fetch the user's\nfavorite listings' IDs based on their UID. This data is used to determine whether a listing is liked by the user.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"All Listings (",(0,a.kt)("inlineCode",{parentName:"strong"},"useQuery"),"):")," It employs the ",(0,a.kt)("inlineCode",{parentName:"p"},"useQuery")," hook from ",(0,a.kt)("inlineCode",{parentName:"p"},"react-query")," to fetch all available listings or\nrooms. This query retrieves a list of listings with filter options specified by ",(0,a.kt)("inlineCode",{parentName:"p"},"getFilterOptionsBody"),". It also\nhandles potential errors, displaying a toast notification if the data retrieval fails.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Toggle Like Listing (",(0,a.kt)("inlineCode",{parentName:"strong"},"handleToggleLikeListingItem"),"):")," This callback function is used to toggle the liked status of\na listing. It interacts with the ",(0,a.kt)("inlineCode",{parentName:"p"},"ProfileAPI")," service to update the user's liked listings.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Active Listing (",(0,a.kt)("inlineCode",{parentName:"strong"},"activeListing"),"):")," An effect (",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect"),") is used to manage the active listing based on the ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),"\nparameter. It checks if the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," matches a valid listing and updates the ",(0,a.kt)("inlineCode",{parentName:"p"},"activeListing")," state accordingly. If the\nlisting has multiple media items, it filters and displays up to five media items.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Document Title (",(0,a.kt)("inlineCode",{parentName:"strong"},"useDocumentTitle"),"):")," The component uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"useDocumentTitle")," hook to set the document title\ndynamically based on the ",(0,a.kt)("inlineCode",{parentName:"p"},"activeListing"),", displaying the listing's address.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Rendering (",(0,a.kt)("inlineCode",{parentName:"strong"},"ListingItemPage"),"):")," Finally, the ",(0,a.kt)("inlineCode",{parentName:"p"},"ListingItemPageProvider")," component renders the ",(0,a.kt)("inlineCode",{parentName:"p"},"ListingItemPage"),"\ncomponent, passing it the necessary props,\nincluding ",(0,a.kt)("inlineCode",{parentName:"p"},"listingsIsLoading"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"handleToggleLikeListingItem"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"activeListing"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"isMobile"),"."))),(0,a.kt)("h3",{id:"component-structure"},"Component Structure"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ListingItemPageProvider")," component renders any ",(0,a.kt)("inlineCode",{parentName:"p"},"children")," element and serves as a data orchestrator and\nstate manager for the ",(0,a.kt)("inlineCode",{parentName:"p"},"ListingItemPage")," component."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("p",null,"To use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ListingItemPageProvider")," component, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Import the ",(0,a.kt)("inlineCode",{parentName:"p"},"ListingItemPageProvider")," component into your application."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"static",static:!0},"import ListingItemPageProvider from './ListingItemPageProvider';\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Include the ",(0,a.kt)("inlineCode",{parentName:"p"},"ListingItemPageProvider")," component within your application's routing system or wherever you want to\ndisplay the detailed information of a real estate listing."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"static",static:!0},"<ListingItemPageProvider />\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ensure that the ",(0,a.kt)("inlineCode",{parentName:"p"},"ListingItemPage")," component is appropriately styled and structured to display listing details."))))}g.isMDXComponent=!0}}]);