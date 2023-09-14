"use strict";(self.webpackChunksgpt=self.webpackChunksgpt||[]).push([[912],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):h(h({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=d(a),g=r,u=c["".concat(i,".").concat(g)]||c[g]||p[g]||o;return a?n.createElement(u,h(h({ref:t},l),{},{components:a})):n.createElement(u,h({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,h=new Array(o);h[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:r,h[1]=s;for(var d=2;d<o;d++)h[d]=a[d];return n.createElement.apply(null,h)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},793:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>h,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={},h=void 0,s={unversionedId:"Pages/Chat page/ChatPageProvider",id:"Pages/Chat page/ChatPageProvider",title:"ChatPageProvider",description:"ChatPageContext (Context)",source:"@site/docs/Pages/Chat page/ChatPageProvider.md",sourceDirName:"Pages/Chat page",slug:"/Pages/Chat page/ChatPageProvider",permalink:"/sgpt-docs/Pages/Chat page/ChatPageProvider",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Pages/Chat page/ChatPageProvider.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ChatPage",permalink:"/sgpt-docs/Pages/Chat page/ChatPage"},next:{title:"CreateContentPage",permalink:"/sgpt-docs/Pages/Create content page/CreateContentPage"}},i={},d=[{value:"ChatPageContext (Context)",id:"chatpagecontext-context",level:3},{value:"ChatPageProvider (Component)",id:"chatpageprovider-component",level:3},{value:"Hooks",id:"hooks",level:4},{value:"<strong>Methods</strong>",id:"methods",level:4},{value:"<code>scrollChatToBottom()</code>",id:"scrollchattobottom",level:4},{value:"<code>handleToggleChatThreads(value: boolean)</code>",id:"handletogglechatthreadsvalue-boolean",level:4},{value:"<code>handleChooseChatThread(chatThreadId: string)</code>",id:"handlechoosechatthreadchatthreadid-string",level:4},{value:"<code>handleCreateNewChatThread()</code>",id:"handlecreatenewchatthread",level:4},{value:"<code>handleDeleteAllChatThreads()</code>",id:"handledeleteallchatthreads",level:4},{value:"<code>handleUpdateChat(chatThreadForUpdate: object)</code>",id:"handleupdatechatchatthreadforupdate-object",level:4},{value:"<code>createNameForChatThread(chatThread: object, messages: array)</code>",id:"createnameforchatthreadchatthread-object-messages-array",level:4},{value:"<code>handleSendMessage(prompt: string)</code>",id:"handlesendmessageprompt-string",level:4},{value:"<code>handleRegenerateMessage()</code>",id:"handleregeneratemessage",level:4},{value:"<strong>useChatPage()</strong>",id:"usechatpage",level:3},{value:"<strong>ChatPage (Component)</strong>",id:"chatpage-component",level:3},{value:"<strong>useQueryActions (Custom hook)</strong>",id:"usequeryactions-custom-hook",level:3},{value:"<strong>Detailed Explanation of Effects</strong>",id:"detailed-explanation-of-effects",level:3},{value:"Loading Active Chat Thread and Initial Data Fetch",id:"loading-active-chat-thread-and-initial-data-fetch",level:3},{value:"Description:",id:"description",level:4},{value:"Auto-scrolling Chat Messages",id:"auto-scrolling-chat-messages",level:3},{value:"Description:",id:"description-1",level:4}],l={toc:d},c="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"chatpagecontext-context"},"ChatPageContext (Context)"),(0,r.kt)("p",null,"A context used to provide data and functions related to the chat page to its child components."),(0,r.kt)("h3",{id:"chatpageprovider-component"},"ChatPageProvider (Component)"),(0,r.kt)("p",null,"A provider component that wraps the ChatPage component and provides context data and functions related to the chat\nfunctionality."),(0,r.kt)("h4",{id:"hooks"},"Hooks"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"useAuthorization()")," - get authorization data of a user"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"static",static:!0},"const { photoURL: profilePhoto, UID } = useAuthorization();\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"useGetChatThreads()")," - fetch and real-time update chat threads "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"useGetChatThreads({\n    chatThreads,\n    setChatThreads,\n    setChatThreadsIsLoading,\n    UID,\n    depsList: [id, UID, activeChatThread?.chatString?.length],\n});\n")),(0,r.kt)("h4",{id:"methods"},(0,r.kt)("strong",{parentName:"h4"},"Methods")),(0,r.kt)("h4",{id:"scrollchattobottom"},(0,r.kt)("inlineCode",{parentName:"h4"},"scrollChatToBottom()")),(0,r.kt)("p",null,"Scrolls the chat messages to the bottom, ensuring the latest messages are visible."),(0,r.kt)("h4",{id:"handletogglechatthreadsvalue-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"handleToggleChatThreads(value: boolean)")),(0,r.kt)("p",null,"Toggles the display of chat threads in the sidebar."),(0,r.kt)("h4",{id:"handlechoosechatthreadchatthreadid-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"handleChooseChatThread(chatThreadId: string)")),(0,r.kt)("p",null,"Navigates to a specific chat thread by its ID and closes the chat thread sidebar."),(0,r.kt)("h4",{id:"handlecreatenewchatthread"},(0,r.kt)("inlineCode",{parentName:"h4"},"handleCreateNewChatThread()")),(0,r.kt)("p",null,"Navigates to the chat page for creating a new chat thread."),(0,r.kt)("h4",{id:"handledeleteallchatthreads"},(0,r.kt)("inlineCode",{parentName:"h4"},"handleDeleteAllChatThreads()")),(0,r.kt)("p",null,"Deletes all chat threads associated with the user."),(0,r.kt)("h4",{id:"handleupdatechatchatthreadforupdate-object"},(0,r.kt)("inlineCode",{parentName:"h4"},"handleUpdateChat(chatThreadForUpdate: object)")),(0,r.kt)("p",null,"Updates the chat thread with new messages and scrolls to the bottom."),(0,r.kt)("h4",{id:"createnameforchatthreadchatthread-object-messages-array"},(0,r.kt)("inlineCode",{parentName:"h4"},"createNameForChatThread(chatThread: object, messages: array)")),(0,r.kt)("p",null,"Creates a name for the chat thread using existing messages and updates the chat thread."),(0,r.kt)("h4",{id:"handlesendmessageprompt-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"handleSendMessage(prompt: string)")),(0,r.kt)("p",null,"Handles sending a user message in the chat, triggers AI response, and updates the chat thread."),(0,r.kt)("h4",{id:"handleregeneratemessage"},(0,r.kt)("inlineCode",{parentName:"h4"},"handleRegenerateMessage()")),(0,r.kt)("p",null,"Generates an AI response based on the current chat context and updates the chat thread."),(0,r.kt)("h3",{id:"usechatpage"},(0,r.kt)("strong",{parentName:"h3"},"useChatPage()")),(0,r.kt)("p",null,"A custom hook that allows components to access the context data and functions related to the chat page."),(0,r.kt)("h3",{id:"chatpage-component"},(0,r.kt)("strong",{parentName:"h3"},"ChatPage (Component)")),(0,r.kt)("p",null,"A component that displays the chat page interface."),(0,r.kt)("h3",{id:"usequeryactions-custom-hook"},(0,r.kt)("strong",{parentName:"h3"},"useQueryActions (Custom hook)")),(0,r.kt)("p",null,"A utility custom hook that provides mutation functions for various API requests."),(0,r.kt)("h3",{id:"detailed-explanation-of-effects"},(0,r.kt)("strong",{parentName:"h3"},"Detailed Explanation of Effects")),(0,r.kt)("h3",{id:"loading-active-chat-thread-and-initial-data-fetch"},"Loading Active Chat Thread and Initial Data Fetch"),(0,r.kt)("p",null,"This effect is triggered whenever the id parameter changes. It is responsible for fetching the active chat thread based\non the provided id and setting the corresponding state variables."),(0,r.kt)("h4",{id:"description"},"Description:"),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," parameter is present, the effect begins by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"isLoadingChatThread")," state to true to indicate that\nthe chat thread is being loaded.\nIt then calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"ChatAPI.getChatById")," function with the user's ",(0,r.kt)("inlineCode",{parentName:"p"},"UID")," and the provided id to fetch the chat thread\ndata."),(0,r.kt)("p",null,"After fetching the chat thread data, it checks whether the chat thread exists or not.\nIf the chat thread does not exist, it navigates the user to the chat page (/chat/) to ensure they have an active chat\nthread.\nIf the chat thread exists, it updates the activeChatThread state with the fetched chat thread data."),(0,r.kt)("p",null,"Finally, the effect sets the ",(0,r.kt)("inlineCode",{parentName:"p"},"isLoadingChatThread")," state to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", indicating that the chat thread loading is\ncomplete."),(0,r.kt)("h3",{id:"auto-scrolling-chat-messages"},"Auto-scrolling Chat Messages"),(0,r.kt)("p",null,"This effect is responsible for automatically scrolling the chat messages container to the bottom, ensuring that new\nmessages are always visible to the user."),(0,r.kt)("h4",{id:"description-1"},"Description:"),(0,r.kt)("p",null,"Whenever the ",(0,r.kt)("inlineCode",{parentName:"p"},"activeChatThread")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"chatMessagesRef")," changes, the effect is triggered."),(0,r.kt)("p",null,"It first checks if the ",(0,r.kt)("inlineCode",{parentName:"p"},"chatMessagesRef.current")," container exists."),(0,r.kt)("p",null,"If the container exists, the effect sets the scrollTop property of the container to scrollHeight, effectively scrolling\nto the bottom.\nThis ensures that new messages are always ",(0,r.kt)("inlineCode",{parentName:"p"},"visible")," to the user as they are added to the chat messages."),(0,r.kt)("p",null,"These effects work together to manage the chat functionality, loading chat threads, and ensuring a smooth user\nexperience by automatically scrolling chat messages."))}p.isMDXComponent=!0}}]);