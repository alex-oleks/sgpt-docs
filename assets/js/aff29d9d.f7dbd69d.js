"use strict";(self.webpackChunksgpt=self.webpackChunksgpt||[]).push([[5079],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(t),d=a,u=c["".concat(s,".").concat(d)]||c[d]||g[d]||o;return t?i.createElement(u,r(r({ref:n},m),{},{components:t})):i.createElement(u,r({ref:n},m))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5939:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=t(7462),a=(t(7294),t(3905));const o={},r=void 0,l={unversionedId:"Pages/Main page/MainPage",id:"Pages/Main page/MainPage",title:"MainPage",description:"The MainPage component is responsible for displaying the main listings page. It fetches and displays listings data,",source:"@site/docs/Pages/Main page/MainPage.md",sourceDirName:"Pages/Main page",slug:"/Pages/Main page/MainPage",permalink:"/sgpt-docs/Pages/Main page/MainPage",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Pages/Main page/MainPage.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LoginPage",permalink:"/sgpt-docs/Pages/Login page/LoginPage"},next:{title:"MainPageProvider",permalink:"/sgpt-docs/Pages/Main page/MainPageProvider"}},s={},p=[{value:"Imports",id:"imports",level:3},{value:"MainPage Component",id:"mainpage-component",level:3},{value:"Scroll To Top Handler",id:"scroll-to-top-handler",level:3},{value:"Listing Filters Component",id:"listing-filters-component",level:3},{value:"Conditional Rendering",id:"conditional-rendering",level:3},{value:"Infinite Scrolling",id:"infinite-scrolling",level:3},{value:"ChatGPT Button",id:"chatgpt-button",level:3}],m={toc:p},c="wrapper";function g(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"MainPage")," component is responsible for displaying the main listings page. It fetches and displays listings data,\nhandles pagination, and provides filter options."),(0,a.kt)("h3",{id:"imports"},"Imports"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"import { Box, Button, Typography } from '@mui/material';\nimport RoomMainListItem from '../../components/MainPage/RoomMainListItem/RoomMainListItem';\nimport ChatGPTlogo from '../../assets/logos/ChatGPT_logo.svg';\nimport { sx } from './mainPage.sx';\nimport { useNavigate } from 'react-router-dom';\nimport MainPageListingsSkeleton from '../../components/Skeletons/MainPageListingsSkeleton';\nimport ListingFilters from '../../components/MainPage/ListingFilters/ListingFilters';\nimport { useMainPageProvider } from './MainPageProvider';\nimport { memo } from 'react';\nimport InfiniteScroll from 'react-infinite-scroller';\nimport Loader from '../../components/UI/Loader/Loader';\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Box"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Button"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Typography"),": UI components from MUI (Material-UI) library."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RoomMainListItem"),": A component that represents an individual room listing."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ChatGPTlogo"),": An image asset for the ChatGPT logo."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sx"),": An object containing styles for the component using Emotion CSS."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useNavigate"),": A hook from ",(0,a.kt)("inlineCode",{parentName:"li"},"react-router-dom")," for navigating to different routes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MainPageListingsSkeleton"),": A component that displays skeleton loading UI for listings."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ListingFilters"),": A component for filtering listings based on various criteria."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useMainPageProvider"),": A custom hook for accessing context values from ",(0,a.kt)("inlineCode",{parentName:"li"},"MainPageProvider"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"memo"),": Memoizes the component for performance optimization."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"InfiniteScroll"),": A component for implementing infinite scrolling behavior."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Loader"),": A component that displays a loading spinner.")),(0,a.kt)("h3",{id:"mainpage-component"},"MainPage Component"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"const MainPage = () => {\n    //@@viewOn:hooks\n    const {\n        rooms = [],\n        isFetching,\n        regions,\n        setRegions,\n        totalListings,\n        setCurrentPage,\n        isFilterModalOpen,\n        setIsFilterModalOpen,\n    } = useMainPageProvider();\n\n    const navigate = useNavigate();\n    //@@viewOff:hooks\n\n    //@@viewOn:handlers\n    const scrollToTop = () => {\n        window.scrollTo({ top: 0, behavior: 'smooth' });\n    };\n    //@@viewOff:handlers\n\n    return (\n        <>\n            <ListingFilters\n                isFilterModalOpen={isFilterModalOpen}\n                setIsFilterModalOpen={setIsFilterModalOpen}\n                regions={regions}\n                setRegions={setRegions}\n                isFetching={isFetching}\n                isUsedInMainPage={true}\n            />\n            {isFetching ? (\n                <MainPageListingsSkeleton />\n            ) : (\n                <Box\n                    sx={sx.container}\n                    id=\"scrollableDiv\"\n                >\n                    {/* ... */}\n                </Box>\n            )}\n            <Button\n                onClick={() => navigate('/chat')}\n                sx={sx.chatGPTButton}\n            >\n                <img\n                    src={ChatGPTlogo}\n                    alt=\"ChatGPT\"\n                />\n            </Button>\n        </>\n    );\n};\n\nexport default memo(MainPage);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"MainPage")," component displays the main listings page, including filtering, pagination, and infinite scrolling."),(0,a.kt)("li",{parentName:"ul"},"It uses the ",(0,a.kt)("inlineCode",{parentName:"li"},"useMainPageProvider")," hook to access context values and actions provided by ",(0,a.kt)("inlineCode",{parentName:"li"},"MainPageProvider"),"."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"navigate")," function from ",(0,a.kt)("inlineCode",{parentName:"li"},"useNavigate")," is used to navigate to the chat route when the chat button is clicked.")),(0,a.kt)("h3",{id:"scroll-to-top-handler"},"Scroll To Top Handler"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"const scrollToTop = () => {\n    window.scrollTo({ top: 0, behavior: 'smooth' });\n};\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"scrollToTop"),' is a handler function that scrolls the window to the top when the "Scroll top" button is clicked.')),(0,a.kt)("h3",{id:"listing-filters-component"},"Listing Filters Component"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"<ListingFilters\n    isFilterModalOpen={isFilterModalOpen}\n    setIsFilterModalOpen={setIsFilterModalOpen}\n    regions={regions}\n    setRegions={setRegions}\n    isFetching={isFetching}\n    isUsedInMainPage={true}\n/>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"ListingFilters")," component is rendered, allowing users to filter the displayed listings."),(0,a.kt)("li",{parentName:"ul"},"It receives props such as ",(0,a.kt)("inlineCode",{parentName:"li"},"isFilterModalOpen"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"setIsFilterModalOpen"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"regions"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"setRegions"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"isFetching"),",\nand ",(0,a.kt)("inlineCode",{parentName:"li"},"isUsedInMainPage"),".")),(0,a.kt)("h3",{id:"conditional-rendering"},"Conditional Rendering"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},'{\n    isFetching ? (\n        <MainPageListingsSkeleton />\n    ) : (\n        <Box\n            sx={sx.container}\n            id="scrollableDiv"\n        >\n            {/* ... */}\n        </Box>\n    );\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If data is currently being fetched (",(0,a.kt)("inlineCode",{parentName:"li"},"isFetching")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"), a skeleton loading UI (",(0,a.kt)("inlineCode",{parentName:"li"},"MainPageListingsSkeleton"),") is\ndisplayed."),(0,a.kt)("li",{parentName:"ul"},"Otherwise, the actual listings content is displayed within a ",(0,a.kt)("inlineCode",{parentName:"li"},"Box")," component.")),(0,a.kt)("h3",{id:"infinite-scrolling"},"Infinite Scrolling"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},'<InfiniteScroll\n    key="infinite-scroll-main-page"\n    loadMore={() => setCurrentPage((prev) => prev + 1)}\n    initialLoad={false}\n    hasMore={rooms.length < totalListings}\n    threshold={400}\n    useWindow={true}\n    loader={\n        <Loader\n            key="infinite-scroll-loader"\n            sx={{ height: \'60px\' }}\n        />\n    }\n>\n    <Box sx={sx.roomsList}>\n        {rooms.map((room) => {\n            return (\n                <RoomMainListItem\n                    room={room}\n                    key={room.Id}\n                />\n            );\n        })}\n    </Box>\n</InfiniteScroll>\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"InfiniteScroll")," component wraps the list of room listings to enable infinite scrolling behavior."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"loadMore")," is a function that gets called when more content needs to be loaded (triggered by scrolling)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"initialLoad")," is set to ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," to prevent automatic loading when the component mounts."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hasMore")," determines whether there are more listings to load."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"threshold")," specifies the distance from the bottom at which new content should start loading."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useWindow")," is set to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," to make the infinite scrolling work with the window's scroll."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"loader")," prop specifies a loading spinner to display while loading new content.")),(0,a.kt)("h3",{id:"chatgpt-button"},"ChatGPT Button"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"<Button\n    onClick={() => navigate('/chat')}\n    sx={sx.chatGPTButton}\n>\n    <img\n        src={ChatGPTlogo}\n        alt=\"ChatGPT\"\n    />\n</Button>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'The "ChatGPT" button allows users to navigate to the chat route.'),(0,a.kt)("li",{parentName:"ul"},"It displays the ChatGPT logo image (",(0,a.kt)("inlineCode",{parentName:"li"},"ChatGPTlogo"),") and triggers navigation when clicked.")))}g.isMDXComponent=!0}}]);