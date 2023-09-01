"use strict";(self.webpackChunksgpt=self.webpackChunksgpt||[]).push([[4802],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,g=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6436:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},o=void 0,s={unversionedId:"Components/Modals/GenerationContentModal/GenerationContentModal",id:"Components/Modals/GenerationContentModal/GenerationContentModal",title:"GenerationContentModal",description:"The GenerationContentModal component displays a modal with a loading animation and progress bar. It is used to show",source:"@site/docs/Components/Modals/GenerationContentModal/GenerationContentModal.md",sourceDirName:"Components/Modals/GenerationContentModal",slug:"/Components/Modals/GenerationContentModal/",permalink:"/Components/Modals/GenerationContentModal/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Components/Modals/GenerationContentModal/GenerationContentModal.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FilterModal",permalink:"/Components/Modals/FilterModal/"},next:{title:"SavePresetModal",permalink:"/Components/Modals/SavePresetModal/"}},l={},p=[{value:"Props",id:"props",level:3},{value:"How to Use",id:"how-to-use",level:3},{value:"Component Structure",id:"component-structure",level:3},{value:"Hooks and State Management",id:"hooks-and-state-management",level:3},{value:"Effects",id:"effects",level:3},{value:"First <code>useEffect</code> Block",id:"first-useeffect-block",level:4},{value:"Second <code>useEffect</code> Block",id:"second-useeffect-block",level:4},{value:"Third <code>useEffect</code> Block",id:"third-useeffect-block",level:4},{value:"Static Variables",id:"static-variables",level:3},{value:"Example Usage",id:"example-usage",level:3},{value:"Notes",id:"notes",level:3}],d={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"GenerationContentModal")," component displays a modal with a loading animation and progress bar. It is used to show\nthe progress of content generation, especially when generating images using AI. The modal contains a Lottie animation,\nprogress bar, and a percentage indicator."),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isOpen"),": A boolean indicating whether the modal is open. Default is ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"progress"),": Progress value (number or 'incomplete') for the content generation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isImageGenerating"),": A boolean indicating whether image generation is in progress.")),(0,r.kt)("h3",{id:"how-to-use"},"How to Use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"import GenerationContentModal from './GenerationContentModal';\n\n// Inside your component\n<GenerationContentModal\n    isOpen={isModalOpen}\n    progress={generationProgress}\n    isImageGenerating={isGeneratingImage}\n/>;\n")),(0,r.kt)("h3",{id:"component-structure"},"Component Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Modal"),": The outermost wrapper for creating the generation content modal.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Box sx={...}"),": Container for the modal content.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Lottie"),": Animation component displaying the AI generation animation."),(0,r.kt)("li",{parentName:"ul"},"Progress bar and percentage indicator are conditionally rendered based on the ",(0,r.kt)("inlineCode",{parentName:"li"},"isImageGenerating")," prop.")))))),(0,r.kt)("h3",{id:"hooks-and-state-management"},"Hooks and State Management"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useState"),": To manage the width percentage of the progress bar.")),(0,r.kt)("h3",{id:"effects"},"Effects"),(0,r.kt)("h4",{id:"first-useeffect-block"},"First ",(0,r.kt)("inlineCode",{parentName:"h4"},"useEffect")," Block"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"useEffect(() => {\n    if (!isOpen || widthPercentage >= 100 || !isImageGenerating) return;\n\n    let interval = setInterval(() => {\n        const shouldIncreaseWidth = !(\n            (progress && progress < widthPercentage - 6) ||\n            (!progress && widthPercentage === 50)\n        );\n\n        if (shouldIncreaseWidth && widthPercentage < 100) {\n            setWidthPercentage((prev) => (progress > widthPercentage ? progress : prev + 1));\n        }\n    }, 800);\n\n    return () => {\n        if (interval) clearInterval(interval);\n    };\n}, [isOpen, setWidthPercentage, progress, widthPercentage]);\n")),(0,r.kt)("p",null,"This ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," block is responsible for updating the progress bar during content generation. Here's a breakdown of its\nfunctionality:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The effect is triggered whenever the values in the dependency\narray ",(0,r.kt)("inlineCode",{parentName:"li"},"[isOpen, setWidthPercentage, progress, widthPercentage]")," change."),(0,r.kt)("li",{parentName:"ol"},"The effect checks several conditions before proceeding:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the modal is not open (",(0,r.kt)("inlineCode",{parentName:"li"},"isOpen")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"), or if the widthPercentage of the progress bar has reached\n100 (",(0,r.kt)("inlineCode",{parentName:"li"},"widthPercentage >= 100"),"), or if image generation is not in progress (",(0,r.kt)("inlineCode",{parentName:"li"},"!isImageGenerating"),"), then it returns\nearly without performing any action."))),(0,r.kt)("li",{parentName:"ol"},"Inside the effect, an interval is created using ",(0,r.kt)("inlineCode",{parentName:"li"},"setInterval"),". This interval function updates the width percentage of\nthe progress bar over time."),(0,r.kt)("li",{parentName:"ol"},"It checks whether the width should be increased based on the conditions:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"progress")," is defined and the progress is less than the current ",(0,r.kt)("inlineCode",{parentName:"li"},"widthPercentage - 6"),", or if ",(0,r.kt)("inlineCode",{parentName:"li"},"progress")," is not\ndefined and the current ",(0,r.kt)("inlineCode",{parentName:"li"},"widthPercentage")," is less than 50."))),(0,r.kt)("li",{parentName:"ol"},"If the width should be increased (",(0,r.kt)("inlineCode",{parentName:"li"},"shouldIncreaseWidth")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),") and the ",(0,r.kt)("inlineCode",{parentName:"li"},"widthPercentage")," is less than 100,\nthe ",(0,r.kt)("inlineCode",{parentName:"li"},"setWidthPercentage")," function is called to increment the width."),(0,r.kt)("li",{parentName:"ol"},"The interval runs every 800 milliseconds."),(0,r.kt)("li",{parentName:"ol"},"A cleanup function is returned, which clears the interval when the component unmounts.")),(0,r.kt)("h4",{id:"second-useeffect-block"},"Second ",(0,r.kt)("inlineCode",{parentName:"h4"},"useEffect")," Block"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"useEffect(() => {\n    if (!isOpen || !isImageGenerating || progress === 'incomplete') return;\n\n    if (progress && typeof progress === 'number') {\n        const newValue = progress > widthPercentage ? progress : widthPercentage;\n        setWidthPercentage(newValue);\n    }\n}, [progress, widthPercentage, isOpen, isImageGenerating]);\n")),(0,r.kt)("p",null,"This ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," block updates the progress bar value when the progress value changes. Here's how it works:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The effect is triggered whenever the values in the dependency\narray ",(0,r.kt)("inlineCode",{parentName:"li"},"[progress, widthPercentage, isOpen, isImageGenerating]")," change."),(0,r.kt)("li",{parentName:"ol"},"It checks several conditions before proceeding:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the modal is not open (",(0,r.kt)("inlineCode",{parentName:"li"},"isOpen")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"), or if image generation is not in progress (",(0,r.kt)("inlineCode",{parentName:"li"},"!isImageGenerating"),"),\nor if the progress is 'incomplete', then it returns early without performing any action."))),(0,r.kt)("li",{parentName:"ol"},"Inside the effect, it checks whether ",(0,r.kt)("inlineCode",{parentName:"li"},"progress")," is defined and its type is a number."),(0,r.kt)("li",{parentName:"ol"},"If the conditions are met, it calculates a new value based on whether ",(0,r.kt)("inlineCode",{parentName:"li"},"progress")," is greater than the\ncurrent ",(0,r.kt)("inlineCode",{parentName:"li"},"widthPercentage")," or not."),(0,r.kt)("li",{parentName:"ol"},"The new value is set as the ",(0,r.kt)("inlineCode",{parentName:"li"},"widthPercentage")," using the ",(0,r.kt)("inlineCode",{parentName:"li"},"setWidthPercentage")," function.")),(0,r.kt)("h4",{id:"third-useeffect-block"},"Third ",(0,r.kt)("inlineCode",{parentName:"h4"},"useEffect")," Block"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"useEffect(() => {\n    return () => {\n        setWidthPercentage(0);\n    };\n}, [isOpen]);\n")),(0,r.kt)("p",null,"This ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," block resets the ",(0,r.kt)("inlineCode",{parentName:"p"},"widthPercentage")," to 0 when the modal is closed. Here's the breakdown:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The effect is triggered whenever the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"isOpen")," changes."),(0,r.kt)("li",{parentName:"ol"},"Inside the effect, a cleanup function is returned."),(0,r.kt)("li",{parentName:"ol"},"The cleanup function sets the ",(0,r.kt)("inlineCode",{parentName:"li"},"widthPercentage")," to 0 using the ",(0,r.kt)("inlineCode",{parentName:"li"},"setWidthPercentage")," function. This ensures that the\nprogress bar is reset to 0 when the modal is closed.")),(0,r.kt)("p",null,"These ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," blocks work together to manage and update the progress bar's width based on different conditions and\nuser interactions. They help provide a smooth and informative experience to users during content generation.\""),(0,r.kt)("h3",{id:"static-variables"},"Static Variables"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaultOptions"),": Default configuration for the Lottie animation.")),(0,r.kt)("h3",{id:"example-usage"},"Example Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"import { memo, useState } from 'react';\nimport GenerationContentModal from './GenerationContentModal';\n\nconst ParentComponent = () => {\n    const [isModalOpen, setIsModalOpen] = useState(false);\n    const [generationProgress, setGenerationProgress] = useState(0);\n    const [isGeneratingImage, setIsGeneratingImage] = useState(false);\n\n    // ... other logic ...\n\n    return (\n        // ... other JSX ...\n\n        // Rendering the GenerationContentModal component\n        <GenerationContentModal\n            isOpen={isModalOpen}\n            progress={generationProgress}\n            isImageGenerating={isGeneratingImage}\n        />\n\n        // ... other JSX ...\n    );\n};\n\nexport default memo(ParentComponent);\n")),(0,r.kt)("h3",{id:"notes"},"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"GenerationContentModal")," component utilizes the ",(0,r.kt)("inlineCode",{parentName:"li"},"Lottie")," library for animations."),(0,r.kt)("li",{parentName:"ul"},"The progress bar is rendered when ",(0,r.kt)("inlineCode",{parentName:"li"},"isImageGenerating")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),". It shows the progress based on the ",(0,r.kt)("inlineCode",{parentName:"li"},"widthPercentage"),"\nstate."),(0,r.kt)("li",{parentName:"ul"},"The component provides a visual representation of content generation progress, making it more informative for users.")))}m.isMDXComponent=!0}}]);