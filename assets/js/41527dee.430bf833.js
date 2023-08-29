"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[1659],{3905:(n,e,t)=>{t.d(e,{Zo:()=>m,kt:()=>k});var a=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,a,o=function(n,e){if(null==n)return{};var t,a,o={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l=a.createContext({}),p=function(n){var e=a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},m=function(n){var e=p(n.components);return a.createElement(l.Provider,{value:e},n.children)},s="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,o=n.mdxType,i=n.originalType,l=n.parentName,m=c(n,["components","mdxType","originalType","parentName"]),s=p(t),d=o,k=s["".concat(l,".").concat(d)]||s[d]||u[d]||i;return t?a.createElement(k,r(r({ref:e},m),{},{components:t})):a.createElement(k,r({ref:e},m))}));function k(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=t.length,r=new Array(i);r[0]=d;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=n,c[s]="string"==typeof n?n:o,r[1]=c;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6720:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=t(7462),o=(t(7294),t(3905));const i={},r="\u83b7\u53d6\u7a0b\u5e8f\u5e10\u6237",c={unversionedId:"guides/get-program-accounts",id:"guides/get-program-accounts",title:"\u83b7\u53d6\u7a0b\u5e8f\u5e10\u6237",description:"\u4e00\u4e2a\u8fd4\u56de\u7a0b\u5e8f\u6240\u62e5\u6709\u7684\u8d26\u6237\u7684RPC\u65b9\u6cd5\u3002\u76ee\u524d\u4e0d\u652f\u6301\u5206\u9875\u3002\u8bf7\u6c42getProgramAccounts\u5e94\u8be5\u5305\u62ecdataSlice\u548c/\u6216filters\u53c2\u6570\uff0c\u4ee5\u63d0\u9ad8\u54cd\u5e94\u65f6\u95f4\u5e76\u8fd4\u56de\u53ea\u6709\u9884\u671f\u7ed3\u679c\u7684\u5185\u5bb9\u3002",source:"@site/docs/cookbook-zh/guides/get-program-accounts.md",sourceDirName:"guides",slug:"/guides/get-program-accounts",permalink:"/all-in-one-solana/cookbook-zh/guides/get-program-accounts",draft:!1,editUrl:"https://github.com/CreatorsDAO/all-in-one-solana/edit/main/docs/cookbook-zh/guides/get-program-accounts.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u529f\u80fd\u76f8\u7b49\u6d4b\u8bd5",permalink:"/all-in-one-solana/cookbook-zh/guides/feature-parity-testing"},next:{title:"\u91cd\u8bd5\u4ea4\u6613",permalink:"/all-in-one-solana/cookbook-zh/guides/retrying-transactions"}},l={},p=[{value:"\u6df1\u5165",id:"\u6df1\u5165",level:2},{value:"<code>filters</code>",id:"filters",level:3},{value:"<code>dataSize</code>",id:"datasize",level:4},{value:"<code>memcmp</code>",id:"memcmp",level:4},{value:"Rust",id:"rust",level:4},{value:"typescript",id:"typescript",level:4},{value:"curl",id:"curl",level:4},{value:"<code>dataSlice</code>",id:"dataslice",level:3},{value:"JavaScript",id:"javascript",level:4},{value:"rust",id:"rust-1",level:4},{value:"curl",id:"curl-1",level:3},{value:"\u5176\u4ed6\u8d44\u6599",id:"\u5176\u4ed6\u8d44\u6599",level:2}],m={toc:p},s="wrapper";function u(n){let{components:e,...i}=n;return(0,o.kt)(s,(0,a.Z)({},m,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u83b7\u53d6\u7a0b\u5e8f\u5e10\u6237"},"\u83b7\u53d6\u7a0b\u5e8f\u5e10\u6237"),(0,o.kt)("p",null,"\u4e00\u4e2a\u8fd4\u56de\u7a0b\u5e8f\u6240\u62e5\u6709\u7684\u8d26\u6237\u7684RPC\u65b9\u6cd5\u3002\u76ee\u524d\u4e0d\u652f\u6301\u5206\u9875\u3002\u8bf7\u6c42",(0,o.kt)("inlineCode",{parentName:"p"},"getProgramAccounts"),"\u5e94\u8be5\u5305\u62ec",(0,o.kt)("inlineCode",{parentName:"p"},"dataSlice"),"\u548c/\u6216",(0,o.kt)("inlineCode",{parentName:"p"},"filters"),"\u53c2\u6570\uff0c\u4ee5\u63d0\u9ad8\u54cd\u5e94\u65f6\u95f4\u5e76\u8fd4\u56de\u53ea\u6709\u9884\u671f\u7ed3\u679c\u7684\u5185\u5bb9\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"tip \u53c2\u6570")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"programId"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - \u8981\u67e5\u8be2\u7684\u7a0b\u5e8f\u7684\u516c\u94a5\uff0c\u4ee5base58\u7f16\u7801\u7684\u5b57\u7b26\u4e32\u5f62\u5f0f\u63d0\u4f9b\u3002"),(0,o.kt)("li",{parentName:"ul"},"(\u53ef\u9009) ",(0,o.kt)("inlineCode",{parentName:"li"},"configOrCommitment"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"object")," - \u5305\u542b\u4ee5\u4e0b\u53ef\u9009\u5b57\u6bb5\u7684\u914d\u7f6e\u53c2\u6570\uff1a",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"(\u53ef\u9009) ",(0,o.kt)("inlineCode",{parentName:"li"},"commitment"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - ",(0,o.kt)("a",{parentName:"li",href:"https://docs.solana.com/developing/clients/jsonrpc-api#configuring-state-commitment"},"\u72b6\u6001\u627f\u8bfa/State commitment")),(0,o.kt)("li",{parentName:"ul"},"(\u53ef\u9009) ",(0,o.kt)("inlineCode",{parentName:"li"},"encoding"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - \u8d26\u6237\u6570\u636e\u7684\u7f16\u7801\u65b9\u5f0f\uff0c\u53ef\u4ee5\u662f\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},"base58"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"base64"),", \u6216 ",(0,o.kt)("inlineCode",{parentName:"li"},"jsonParsed"),". \u8bf7\u6ce8\u610f web3js \u7528\u6237\u5e94\u6539\u7528 ",(0,o.kt)("a",{parentName:"li",href:"https://solana-labs.github.io/solana-web3.js/classes/Connection.html#getParsedProgramAccounts"},"getParsedProgramAccounts")),(0,o.kt)("li",{parentName:"ul"},"(\u53ef\u9009) ",(0,o.kt)("inlineCode",{parentName:"li"},"dataSlice"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"object")," - \u6839\u636e\u4ee5\u4e0b\u5185\u5bb9\u9650\u5236\u8fd4\u56de\u7684\u8d26\u6237\u6570\u636e\uff1a",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"offset"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"number")," - \u5f00\u59cb\u8fd4\u56de\u8d26\u6237\u6570\u636e\u7684\u5b57\u8282\u6570"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"length"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"number")," - \u8981\u8fd4\u56de\u7684\u8d26\u6237\u6570\u636e\u7684\u5b57\u8282\u6570"))),(0,o.kt)("li",{parentName:"ul"},"(\u53ef\u9009) ",(0,o.kt)("inlineCode",{parentName:"li"},"filters"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"array")," - \u4f7f\u7528\u4ee5\u4e0b\u8fc7\u6ee4\u5668\u5bf9\u8c61\u5bf9\u7ed3\u679c\u8fdb\u884c\u8fc7\u6ee4\uff1a",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"memcmp"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"object")," - \u5c06\u4e00\u7cfb\u5217\u5b57\u8282\u4e0e\u8d26\u6237\u6570\u636e\u5339\u914d\uff1a",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"offset"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"number")," - \u5f00\u59cb\u6bd4\u8f83\u7684\u8d26\u6237\u6570\u636e\u5b57\u8282\u504f\u79fb\u91cf"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bytes"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - \u8981\u5339\u914d\u7684\u6570\u636e\uff0c\u4ee5base58\u7f16\u7801\u7684\u5b57\u7b26\u4e32\u5f62\u5f0f\uff0c\u9650\u5236\u4e3a129\u4e2a\u5b57\u8282"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dataSize"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"number")," - \u5c06\u8d26\u6237\u6570\u636e\u7684\u957f\u5ea6\u4e0e\u63d0\u4f9b\u7684\u6570\u636e\u5927\u5c0f\u8fdb\u884c\u6bd4\u8f83"))),(0,o.kt)("li",{parentName:"ul"},"(\u53ef\u9009) ",(0,o.kt)("inlineCode",{parentName:"li"},"withContext"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")," - \u5c06\u7ed3\u679c\u5305\u88c5\u5728\u4e00\u4e2a ",(0,o.kt)("a",{parentName:"li",href:"https://docs.solana.com/developing/clients/jsonrpc-api#rpcresponse-structure"},"RpcResponse JSON object"))))),(0,o.kt)("h5",{parentName:"blockquote",id:"\u54cd\u5e94"},"\u54cd\u5e94"),(0,o.kt)("p",{parentName:"blockquote"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"getProgramAccounts"),"\u5c06\u8fd4\u56de\u4e00\u4e2a\u5177\u6709\u4ee5\u4e0b\u7ed3\u6784\u7684 JSON \u5bf9\u8c61\u6570\u7ec4\uff1a"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pubkey"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - \u8d26\u6237\u516c\u94a5\uff0c\u4ee5 base58 \u7f16\u7801\u7684\u5b57\u7b26\u4e32\u5f62\u5f0f"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"account"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"object")," - \u4e00\u4e2a\u5305\u542b\u4ee5\u4e0b\u5b50\u5b57\u6bb5\u7684 JSON \u5bf9\u8c61\uff1a",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lamports"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),", \u5206\u914d\u7ed9\u8d26\u6237\u7684 lamports \u6570\u91cf"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"owner"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),", \u8d26\u6237\u6240\u5206\u914d\u7684\u7a0b\u5e8f\u7684 base58 \u7f16\u7801\u7684\u516c\u94a5"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"data"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object")," - \u4e0e\u8d26\u6237\u5173\u8054\u7684\u6570\u636e\uff0c\u6839\u636e\u63d0\u4f9b\u7684\u7f16\u7801\u53c2\u6570\uff0c\u53ef\u4ee5\u662f\u7f16\u7801\u7684\u4e8c\u8fdb\u5236\u6570\u636e\u6216 JSON \u683c\u5f0f parameter"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"executable"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),", \u6307\u793a\u8d26\u6237\u662f\u5426\u5305\u542b\u7740\u7a0b\u5e8f"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rentEpoch"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),", \u8be5\u8d26\u6237\u4e0b\u6b21\u9700\u8981\u652f\u4ed8\u79df\u91d1\u7684\u7eaa\u5143\uff08epoch\uff09"))))),(0,o.kt)("h2",{id:"\u6df1\u5165"},"\u6df1\u5165"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"getProgramAccounts")," \u662f\u4e00\u4e2a\u591a\u529f\u80fd\u7684RPC\u65b9\u6cd5\uff0c\u7528\u4e8e\u8fd4\u56de\u7531\u7a0b\u5e8f\u62e5\u6709\u7684\u6240\u6709\u8d26\u6237\u3002\u6211\u4eec\u53ef\u4ee5\u5229\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"getProgramAccounts"),"\u8fdb\u884c\u8bb8\u591a\u6709\u7528\u7684\u67e5\u8be2\uff0c\u4f8b\u5982\u67e5\u627e\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7279\u5b9a\u94b1\u5305\u7684\u6240\u6709\u4ee3\u5e01\u8d26\u6237"),(0,o.kt)("li",{parentName:"ul"},"\u7279\u5b9a\u4ee3\u5e01\u53d1\u884c\u7684\u6240\u6709\u4ee3\u5e01\u8d26\u6237\uff08\u5373\u6240\u6709",(0,o.kt)("a",{parentName:"li",href:"https://www.projectserum.com/"},"SRM"),"\u6301\u6709\u4eba)"),(0,o.kt)("li",{parentName:"ul"},"\u7279\u5b9a\u7a0b\u5e8f\u7684\u6240\u6709\u81ea\u5b9a\u4e49\u8d26\u6237\uff08\u5373\u6240\u6709",(0,o.kt)("a",{parentName:"li",href:"https://mango.markets/"},"Mango"),"\u7528\u6237)")),(0,o.kt)("p",null,"\u5c3d\u7ba1",(0,o.kt)("inlineCode",{parentName:"p"},"getProgramAccounts"),"\u975e\u5e38\u6709\u7528\uff0c\u4f46\u7531\u4e8e\u76ee\u524d\u7684\u9650\u5236\uff0c\u5b83\u7ecf\u5e38\u88ab\u8bef\u89e3\u3002\u8bb8\u591a\u7531",(0,o.kt)("inlineCode",{parentName:"p"},"getProgramAccounts"),"\u652f\u6301\u7684\u67e5\u8be2\u9700\u8981RPC\u8282\u70b9\u626b\u63cf\u5927\u91cf\u6570\u636e\u3002\u8fd9\u4e9b\u626b\u63cf\u9700\u8981\u5927\u91cf\u7684\u5185\u5b58\u548c\u8d44\u6e90\u3002\u56e0\u6b64\uff0c\u8c03\u7528\u8fc7\u4e8e\u9891\u7e41\u6216\u8303\u56f4\u8fc7\u5927\u53ef\u80fd\u5bfc\u81f4\u8fde\u63a5\u8d85\u65f6\u3002\u6b64\u5916\uff0c\u5728\u64b0\u5199\u672c\u6587\u65f6\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"getProgramAccounts"),"\u7aef\u70b9\u4e0d\u652f\u6301\u5206\u9875\u3002\u5982\u679c\u67e5\u8be2\u7ed3\u679c\u592a\u5927\uff0c\u54cd\u5e94\u5c06\u88ab\u622a\u65ad\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u5f53\u524d\u7684\u9650\u5236\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"getProgramAccounts"),"\u63d0\u4f9b\u4e86\u4e00\u4e9b\u6709\u7528\u7684\u53c2\u6570\uff0c\u5305\u62ec",(0,o.kt)("inlineCode",{parentName:"p"},"dataSlice"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"filters"),"\u9009\u9879\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"memcmp"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"dataSize"),"\u3002\u901a\u8fc7\u63d0\u4f9b\u8fd9\u4e9b\u53c2\u6570\u7684\u7ec4\u5408\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u67e5\u8be2\u8303\u56f4\u7f29\u5c0f\u5230\u53ef\u7ba1\u7406\u548c\u53ef\u9884\u6d4b\u7684\u5927\u5c0f\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"getProgramAccounts"),"\u7684\u4e00\u4e2a\u5e38\u89c1\u793a\u4f8b\u6d89\u53ca\u4e0e",(0,o.kt)("a",{parentName:"p",href:"https://spl.solana.com/token"},"SPL-Token Program")," \u7a0b\u5e8f\u4ea4\u4e92\u3002\u4ec5\u4f7f\u7528\u57fa\u672c\u8c03\u7528\u8bf7\u6c42\u7531Token\u7a0b\u5e8f\u62e5\u6709\u7684\u6240\u6709\u8d26\u6237\u5c06\u6d89\u53ca\u5927\u91cf\u7684\u6570\u636e\u3002\u7136\u800c\uff0c\u901a\u8fc7\u63d0\u4f9b\u53c2\u6570\uff0c\u6211\u4eec\u53ef\u4ee5\u9ad8\u6548\u5730\u8bf7\u6c42\u6211\u4eec\u8981\u4f7f\u7528\u7684\u6570\u636e\u3002"),(0,o.kt)("h3",{id:"filters"},(0,o.kt)("inlineCode",{parentName:"h3"},"filters")),(0,o.kt)("p",null,"\u4e0e",(0,o.kt)("inlineCode",{parentName:"p"},"getProgramAccounts"),"\u4e00\u8d77\u4f7f\u7528\u7684\u6700\u5e38\u89c1\u53c2\u6570\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"filters"),"\u6570\u7ec4\u3002\u8be5\u6570\u7ec4\u63a5\u53d7\u4e24\u79cd\u7c7b\u578b\u7684\u8fc7\u6ee4\u5668\uff0c\u5373",(0,o.kt)("inlineCode",{parentName:"p"},"dataSize"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"memcmp"),"\u3002\u5728\u4f7f\u7528\u8fd9\u4e9b\u8fc7\u6ee4\u5668\u4e4b\u524d\uff0c\u6211\u4eec\u5e94\u8be5\u719f\u6089\u6211\u4eec\u8bf7\u6c42\u7684\u6570\u636e\u7684\u5e03\u5c40\u548c\u5e8f\u5217\u5316\u65b9\u5f0f\u3002"),(0,o.kt)("h4",{id:"datasize"},(0,o.kt)("inlineCode",{parentName:"h4"},"dataSize")),(0,o.kt)("p",null,"\u5728Token\u7a0b\u5e8f\u7684\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230",(0,o.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana-program-library/blob/08d9999f997a8bf38719679be9d572f119d0d960/token/program/src/state.rs#L86-L106"},"\u4ee3\u5e01\u8d26\u6237\u7684\u957f\u5ea6\u4e3a165\u4e2a\u5b57\u8282"),"\u3002 \u5177\u4f53\u800c\u8a00\uff0c\u4e00\u4e2a\u4ee3\u5e01\u8d26\u6237\u6709\u516b\u4e2a\u4e0d\u540c\u7684\u5b57\u6bb5\uff0c\u6bcf\u4e2a\u5b57\u6bb5\u9700\u8981\u4e00\u5b9a\u6570\u91cf\u7684\u5b57\u8282\u3002\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u793a\u4f8b\u56fe\u6765\u53ef\u89c6\u5316\u8fd9\u4e9b\u6570\u636e\u7684\u5e03\u5c40\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Account Size",src:t(5672).Z,width:"3222",height:"2516"})),(0,o.kt)("p",null,"\u5982\u679c\u6211\u4eec\u60f3\u627e\u5230\u7531\u6211\u4eec\u7684\u94b1\u5305\u5730\u5740\u62e5\u6709\u7684\u6240\u6709\u4ee3\u5e01\u8d26\u6237\uff0c\u6211\u4eec\u53ef\u4ee5\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"filters"),"\u6570\u7ec4\u4e2d\u6dfb\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},"{ dataSize: 165 }"),"\u6765\u5c06\u67e5\u8be2\u8303\u56f4\u7f29\u5c0f\u4e3a\u4ec5\u9650\u957f\u5ea6\u4e3a165\u4e2a\u5b57\u8282\u7684\u8d26\u6237\u3002\u7136\u800c\uff0c\u4ec5\u6b64\u8fd8\u4e0d\u591f\u3002\u6211\u4eec\u8fd8\u9700\u8981\u6dfb\u52a0\u4e00\u4e2a\u8fc7\u6ee4\u5668\u6765\u67e5\u627e\u7531\u6211\u4eec\u7684\u5730\u5740\u62e5\u6709\u7684\u8d26\u6237\u3002\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"memcmp"),"\u8fc7\u6ee4\u5668\u5b9e\u73b0\u8fd9\u4e00\u70b9\u3002"),(0,o.kt)("h4",{id:"memcmp"},(0,o.kt)("inlineCode",{parentName:"h4"},"memcmp")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"memcmp"),'\u8fc7\u6ee4\u5668\uff0c\u4e5f\u53eb"\u5185\u5b58\u6bd4\u8f83"\u8fc7\u6ee4\u5668\uff0c\u5141\u8bb8\u6211\u4eec\u6bd4\u8f83\u5b58\u50a8\u5728\u8d26\u6237\u4e0a\u7684\u4efb\u4f55\u5b57\u6bb5\u7684\u6570\u636e\u3002\u5177\u4f53\u800c\u8a00\uff0c\u6211\u4eec\u53ef\u4ee5\u67e5\u8be2\u4ec5\u4e0e\u7279\u5b9a\u4f4d\u7f6e\u4e0a\u7684\u7279\u5b9a\u4e00\u7ec4\u5b57\u8282\u5339\u914d\u7684\u8d26\u6237\u3002',(0,o.kt)("inlineCode",{parentName:"p"},"memcmp"),"\u9700\u8981\u4e24\u4e2a\u53c2\u6570\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"offset"),": \u5f00\u59cb\u6bd4\u8f83\u6570\u636e\u7684\u4f4d\u7f6e\u3002\u8fd9\u4e2a\u4f4d\u7f6e\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff0c\u8868\u793a\u4e3a\u4e00\u4e2a\u6574\u6570\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bytes"),": \u6570\u636e\u5e94\u8be5\u4e0e\u8d26\u6237\u7684\u6570\u636e\u5339\u914d\u3002\u8fd9\u8868\u793a\u4e3a\u4e00\u4e2abase58\u7f16\u7801\u7684\u5b57\u7b26\u4e32\uff0c\u5e94\u8be5\u9650\u5236\u5728129\u4e2a\u5b57\u8282\u4ee5\u4e0b\u3002")),(0,o.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"memcmp"),"\u53ea\u4f1a\u8fd4\u56de\u4e0e\u63d0\u4f9b\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"bytes"),"\u5b8c\u5168\u5339\u914d\u7684\u7ed3\u679c\u3002\u76ee\u524d\uff0c\u5b83\u4e0d\u652f\u6301\u4e0e\u63d0\u4f9b\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"bytes"),"\u76f8\u6bd4\u5c0f\u4e8e\u6216\u5927\u4e8e\u7684\u6bd4\u8f83\u3002"),(0,o.kt)("p",null,"\u7ee7\u7eed\u4f7f\u7528\u6211\u4eec\u7684Token\u7a0b\u5e8f\u793a\u4f8b\uff0c\u6211\u4eec\u53ef\u4ee5\u4fee\u6539\u67e5\u8be2\uff0c\u53ea\u8fd4\u56de\u7531\u6211\u4eec\u7684\u94b1\u5305\u5730\u5740\u62e5\u6709\u7684\u4ee3\u5e01\u8d26\u6237\u3002\u89c2\u5bdf\u4ee3\u5e01\u8d26\u6237\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u5b58\u50a8\u5728\u4ee3\u5e01\u8d26\u6237\u4e0a\u7684\u524d\u4e24\u4e2a\u5b57\u6bb5\u90fd\u662f\u516c\u94a5\uff0c\u800c\u4e14\u6bcf\u4e2a\u516c\u94a5\u7684\u957f\u5ea6\u4e3a32\u4e2a\u5b57\u8282\u3002\u9274\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"owner"),"\u662f\u7b2c\u4e8c\u4e2a\u5b57\u6bb5\uff0c\u6211\u4eec\u5e94\u8be5\u4ece",(0,o.kt)("inlineCode",{parentName:"p"},"offset"),"\u4e3a32\u5b57\u8282\u7684\u4f4d\u7f6e\u5f00\u59cb\u8fdb\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"memcmp"),"\u3002\u4ece\u8fd9\u91cc\u5f00\u59cb\uff0c\u6211\u4eec\u5c06\u5bfb\u627eowner\u5b57\u6bb5\u4e0e\u6211\u4eec\u7684\u94b1\u5305\u5730\u5740\u5339\u914d\u7684\u8d26\u6237\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Account Size",src:t(6366).Z,width:"3787",height:"2516"})),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u5b9e\u4f8b\u6765\u8c03\u7528\u6b64\u67e5\u8be2\uff1a"),(0,o.kt)("h4",{id:"rust"},"Rust"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use solana_client::{\n  rpc_client::RpcClient,\n  rpc_filter::{RpcFilterType, Memcmp, MemcmpEncodedBytes, MemcmpEncoding},\n  rpc_config::{RpcProgramAccountsConfig, RpcAccountInfoConfig},\n};\nuse solana_sdk::{commitment_config::CommitmentConfig, program_pack::Pack};\nuse spl_token::{state::{Mint, Account}};\nuse solana_account_decoder::{UiAccountEncoding};\n\nfn main() {\n  const MY_WALLET_ADDRESS: &str = "FriELggez2Dy3phZeHHAdpcoEXkKQVkv6tx3zDtCVP8T";\n\n  let rpc_url = String::from("http://api.devnet.solana.com");\n  let connection = RpcClient::new_with_commitment(rpc_url, CommitmentConfig::confirmed());\n\n  let filters = Some(vec![\n      RpcFilterType::Memcmp(Memcmp {\n          offset: 32,\n          bytes: MemcmpEncodedBytes::Base58(MY_WALLET_ADDRESS.to_string()),\n          encoding: Some(MemcmpEncoding::Binary),\n      }),\n      RpcFilterType::DataSize(165),\n  ]);\n\n  let accounts = connection.get_program_accounts_with_config(\n      &spl_token::ID,\n      RpcProgramAccountsConfig {\n          filters,\n          account_config: RpcAccountInfoConfig {\n              encoding: Some(UiAccountEncoding::Base64),\n              commitment: Some(connection.commitment()),\n              ..RpcAccountInfoConfig::default()\n          },\n          ..RpcProgramAccountsConfig::default()\n      },\n  ).unwrap();\n\n  println!("Found {:?} token account(s) for wallet {MY_WALLET_ADDRESS}: ", accounts.len());\n\n  for (i, account) in accounts.iter().enumerate() {\n      println!("-- Token Account Address {:?}:  {:?} --", i, account.0);\n\n      let mint_token_account = Account::unpack_from_slice(account.1.data.as_slice()).unwrap();\n      println!("Mint: {:?}", mint_token_account.mint);\n\n      let mint_account_data = connection.get_account_data(&mint_token_account.mint).unwrap();\n      let mint = Mint::unpack_from_slice(mint_account_data.as_slice()).unwrap();\n      println!("Amount: {:?}", mint_token_account.amount as f64 /10usize.pow(mint.decimals as u32) as f64);\n  }\n}\n\n/*\n// Output\n\nFound 2 token account(s) for wallet FriELggez2Dy3phZeHHAdpcoEXkKQVkv6tx3zDtCVP8T:\n-- Token Account Address 0:  H12yCcKLHFJFfohkeKiN8v3zgaLnUMwRcnJTyB4igAsy --\nMint: CKKDsBT6KiT4GDKs3e39Ue9tDkhuGUKM3cC2a7pmV9YK\nAmount: 1.0\n-- Token Account Address 1:  Et3bNDxe2wP1yE5ao6mMvUByQUHg8nZTndpJNvfKLdCb --\nMint: BUGuuhPsHpk8YZrL2GctsCtXGneL1gmT5zYb7eMHZDWf\nAmount: 3.0\n*/\n')),(0,o.kt)("h4",{id:"typescript"},"typescript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { TOKEN_PROGRAM_ID } from "@solana/spl-token";\nimport { clusterApiUrl, Connection } from "@solana/web3.js";\n\n(async () => {\n  const MY_WALLET_ADDRESS = "FriELggez2Dy3phZeHHAdpcoEXkKQVkv6tx3zDtCVP8T";\n  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");\n\n  const accounts = await connection.getParsedProgramAccounts(\n    TOKEN_PROGRAM_ID, // new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")\n    {\n      filters: [\n        {\n          dataSize: 165, // number of bytes\n        },\n        {\n          memcmp: {\n            offset: 32, // number of bytes\n            bytes: MY_WALLET_ADDRESS, // base58 encoded string\n          },\n        },\n      ],\n    }\n  );\n\n  console.log(\n    `Found ${accounts.length} token account(s) for wallet ${MY_WALLET_ADDRESS}: `\n  );\n  accounts.forEach((account, i) => {\n    console.log(\n      `-- Token Account Address ${i + 1}: ${account.pubkey.toString()} --`\n    );\n    console.log(`Mint: ${account.account.data["parsed"]["info"]["mint"]}`);\n    console.log(\n      `Amount: ${account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"]}`\n    );\n  });\n  /*\n    // Output\n\n    Found 2 token account(s) for wallet FriELggez2Dy3phZeHHAdpcoEXkKQVkv6tx3zDtCVP8T:\n    -- Token Account Address 0:  H12yCcKLHFJFfohkeKiN8v3zgaLnUMwRcnJTyB4igAsy --\n    Mint: CKKDsBT6KiT4GDKs3e39Ue9tDkhuGUKM3cC2a7pmV9YK\n    Amount: 1\n    -- Token Account Address 1:  Et3bNDxe2wP1yE5ao6mMvUByQUHg8nZTndpJNvfKLdCb --\n    Mint: BUGuuhPsHpk8YZrL2GctsCtXGneL1gmT5zYb7eMHZDWf\n    Amount: 3\n  */\n})();\n')),(0,o.kt)("h4",{id:"curl"},"curl"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d \'\n  {\n    "jsonrpc": "2.0",\n    "id": 1,\n    "method": "getProgramAccounts",\n    "params": [\n      "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",\n      {\n        "encoding": "jsonParsed",\n        "filters": [\n          {\n            "dataSize": 165\n          },\n          {\n            "memcmp": {\n              "offset": 32,\n              "bytes": "FriELggez2Dy3phZeHHAdpcoEXkKQVkv6tx3zDtCVP8T"\n            }\n          }\n        ]\n      }\n    ]\n  }\n\'\n\n# Output:\n# {\n#   "jsonrpc": "2.0",\n#   "result": [\n#     {\n#       "account": {\n#         "data": {\n#           "parsed": {\n#             "info": {\n#               "isNative": false,\n#               "mint": "BUGuuhPsHpk8YZrL2GctsCtXGneL1gmT5zYb7eMHZDWf",\n#               "owner": "FriELggez2Dy3phZeHHAdpcoEXkKQVkv6tx3zDtCVP8T",\n#               "state": "initialized",\n#               "tokenAmount": {\n#                 "amount": "998999999000000000",\n#                 "decimals": 9,\n#                 "uiAmount": 998999999,\n#                 "uiAmountString": "998999999"\n#               }\n#             },\n#             "type": "account"\n#           },\n#           "program": "spl-token",\n#           "space": 165\n#         },\n#         "executable": false,\n#         "lamports": 2039280,\n#         "owner": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",\n#         "rentEpoch": 313\n#       },\n#       "pubkey": "Et3bNDxe2wP1yE5ao6mMvUByQUHg8nZTndpJNvfKLdCb"\n#     }\n#   ],\n#   "id": 1\n# }\n')),(0,o.kt)("h3",{id:"dataslice"},(0,o.kt)("inlineCode",{parentName:"h3"},"dataSlice")),(0,o.kt)("p",null,"\u9664\u4e86\u4e0a\u9762\u63d0\u5230\u7684\u4e24\u4e2a\u8fc7\u6ee4\u5668\u53c2\u6570\u4ee5\u5916\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"getProgramAccounts"),"\u7684\u7b2c\u4e09\u4e2a\u6700\u5e38\u89c1\u53c2\u6570\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"dataSlice"),"\u3002\u4e0e",(0,o.kt)("inlineCode",{parentName:"p"},"filters"),"\u53c2\u6570\u4e0d\u540c\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"dataSlice"),"\u4e0d\u4f1a\u51cf\u5c11\u67e5\u8be2\u8fd4\u56de\u7684\u8d26\u6237\u6570\u91cf\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"dataSlice"),"\u5c06\u9650\u5236\u7684\u662f\u6bcf\u4e2a\u8d26\u6237\u7684\u6570\u636e\u91cf\u3002"),(0,o.kt)("p",null,"\u4e0e",(0,o.kt)("inlineCode",{parentName:"p"},"memcmp"),"\u7c7b\u4f3c\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"dataSlice"),"\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"offset"),": \u5f00\u59cb\u8fd4\u56de\u8d26\u6237\u6570\u636e\u7684\u4f4d\u7f6e\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"length"),": \u5e94\u8be5\u8fd4\u56de\u7684\u5b57\u8282\u6570")),(0,o.kt)("p",null,"\u5728\u5904\u7406\u5927\u578b\u6570\u636e\u96c6\u4f46\u5b9e\u9645\u4e0a\u4e0d\u5173\u5fc3\u8d26\u6237\u6570\u636e\u672c\u8eab\u65f6\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"dataSlice"),"\u7279\u522b\u6709\u7528\u3002\u4f8b\u5982\uff0c\u5982\u679c\u6211\u4eec\u60f3\u627e\u5230\u7279\u5b9a\u4ee3\u5e01\u53d1\u884c\u7684\u4ee3\u5e01\u8d26\u6237\u6570\u91cf\uff08\u5373\u4ee3\u5e01\u6301\u6709\u8005\u6570\u91cf\uff09\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"dataSlice"),"\u3002"),(0,o.kt)("h4",{id:"javascript"},"JavaScript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { TOKEN_PROGRAM_ID } from "@solana/spl-token";\nimport { clusterApiUrl, Connection } from "@solana/web3.js";\n\n(async () => {\n  const MY_TOKEN_MINT_ADDRESS = "BUGuuhPsHpk8YZrL2GctsCtXGneL1gmT5zYb7eMHZDWf";\n  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");\n\n  const accounts = await connection.getProgramAccounts(\n    TOKEN_PROGRAM_ID, // new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")\n    {\n      dataSlice: {\n        offset: 0, // number of bytes\n        length: 0, // number of bytes\n      },\n      filters: [\n        {\n          dataSize: 165, // number of bytes\n        },\n        {\n          memcmp: {\n            offset: 0, // number of bytes\n            bytes: MY_TOKEN_MINT_ADDRESS, // base58 encoded string\n          },\n        },\n      ],\n    }\n  );\n  console.log(\n    `Found ${accounts.length} token account(s) for mint ${MY_TOKEN_MINT_ADDRESS}`\n  );\n  console.log(accounts);\n\n  /*\n  // Output (notice the empty <Buffer > at acccount.data)\n\n  Found 3 token account(s) for mint BUGuuhPsHpk8YZrL2GctsCtXGneL1gmT5zYb7eMHZDWf\n  [\n    {\n      account: {\n        data: <Buffer >,\n        executable: false,\n        lamports: 2039280,\n        owner: [PublicKey],\n        rentEpoch: 228\n      },\n      pubkey: PublicKey {\n        _bn: <BN: a8aca7a3132e74db2ca37bfcd66f4450f4631a5464b62fffbd83c48ef814d8d7>\n      }\n    },\n    {\n      account: {\n        data: <Buffer >,\n        executable: false,\n        lamports: 2039280,\n        owner: [PublicKey],\n        rentEpoch: 228\n      },\n      pubkey: PublicKey {\n        _bn: <BN: ce3b7b906c2ff6c6b62dc4798136ec017611078443918b2fad1cadff3c2e0448>\n      }\n    },\n    {\n      account: {\n        data: <Buffer >,\n        executable: false,\n        lamports: 2039280,\n        owner: [PublicKey],\n        rentEpoch: 228\n      },\n      pubkey: PublicKey {\n        _bn: <BN: d4560e42cb24472b0e1203ff4b0079d6452b19367b701643fa4ac33e0501cb1>\n      }\n    }\n  ]\n  */\n})();\n')),(0,o.kt)("h4",{id:"rust-1"},"rust"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use solana_client::{\n  rpc_client::RpcClient,\n  rpc_filter::{RpcFilterType, Memcmp, MemcmpEncodedBytes, MemcmpEncoding},\n  rpc_config::{RpcProgramAccountsConfig, RpcAccountInfoConfig},\n};\nuse solana_sdk::{commitment_config::CommitmentConfig};\nuse solana_account_decoder::{UiAccountEncoding, UiDataSliceConfig};\n\npub fn main() {\n  const MY_TOKEN_MINT_ADDRESS: &str = "BUGuuhPsHpk8YZrL2GctsCtXGneL1gmT5zYb7eMHZDWf";\n\n  let rpc_url = String::from("http://api.devnet.solana.com");\n  let connection = RpcClient::new_with_commitment(rpc_url, CommitmentConfig::confirmed());\n\n  let filters = Some(vec![\n      RpcFilterType::Memcmp(Memcmp {\n          offset: 0, // number of bytes\n          bytes: MemcmpEncodedBytes::Base58(MY_TOKEN_MINT_ADDRESS.to_string()),\n          encoding: Some(MemcmpEncoding::Binary),\n      }),\n      RpcFilterType::DataSize(165), // number of bytes\n  ]);\n\n  let accounts = connection.get_program_accounts_with_config(\n      &spl_token::ID,\n      RpcProgramAccountsConfig {\n          filters,\n          account_config: RpcAccountInfoConfig {\n              data_slice: Some(UiDataSliceConfig {\n                  offset: 0, // number of bytes\n                  length: 0, // number of bytes\n              }),\n              encoding: Some(UiAccountEncoding::Base64),\n              commitment: Some(connection.commitment()),\n              ..RpcAccountInfoConfig::default()\n          },\n          ..RpcProgramAccountsConfig::default()\n      },\n  ).unwrap();\n\n  println!("Found {:?} token account(s) for mint {MY_TOKEN_MINT_ADDRESS}: ", accounts.len());\n  println!("{:#?}", accounts);\n}\n\n/*\n// Output (notice the empty <Buffer > at acccount.data)\n\nFound 3 token account(s) for mint BUGuuhPsHpk8YZrL2GctsCtXGneL1gmT5zYb7eMHZDWf:\n[\n  (\n      tofD3NzLfZ5pWG91JcnbfsAbfMcFF2SRRp3ChnjeTcL,\n      Account {\n          lamports: 2039280,\n          data.len: 0,\n          owner: TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA,\n          executable: false,\n          rent_epoch: 319,\n      },\n  ),\n  (\n      CMSC2GeWDsTPjfnhzCZHEqGRjKseBhrWaC2zNcfQQuGS,\n      Account {\n          lamports: 2039280,\n          data.len: 0,\n          owner: TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA,\n          executable: false,\n          rent_epoch: 318,\n      },\n  ),\n  (\n      Et3bNDxe2wP1yE5ao6mMvUByQUHg8nZTndpJNvfKLdCb,\n      Account {\n          lamports: 2039280,\n          data.len: 0,\n          owner: TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA,\n          executable: false,\n          rent_epoch: 318,\n      },\n  ),\n]\n*/\n')),(0,o.kt)("h3",{id:"curl-1"},"curl"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Note: encoding only available for "base58", "base64" or "base64+zstd"\ncurl http://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d \'\n  {\n    "jsonrpc": "2.0",\n    "id": 1,\n    "method": "getProgramAccounts",\n    "params": [\n      "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",\n      {\n        "encoding": "base64",\n        "dataSlice": {\n          "offset": 0,\n          "length": 0\n        },\n        "filters": [\n          {\n            "dataSize": 165\n          },\n          {\n            "memcmp": {\n              "offset": 0,\n              "bytes": "BUGuuhPsHpk8YZrL2GctsCtXGneL1gmT5zYb7eMHZDWf"\n            }\n          }\n        ]\n      }\n    ]\n  }\n\'\n\n# Output:\n# {\n#   "jsonrpc": "2.0",\n#   "result": [\n#     {\n#       "account": {\n#         "data": [\n#           "",\n#           "base64"\n#         ],\n#         "executable": false,\n#         "lamports": 2039280,\n#         "owner": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",\n#         "rentEpoch": 313\n#       },\n#       "pubkey": "FqWyVSLQgyRWyG1FuUGtHdTQHrEaBzXh1y9K6uPVTRZ4"\n#     },\n#     {\n#       "account": {\n#         "data": [\n#           "",\n#           "base64"\n#         ],\n#         "executable": false,\n#         "lamports": 2039280,\n#         "owner": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",\n#         "rentEpoch": 314\n#       },\n#       "pubkey": "CMSC2GeWDsTPjfnhzCZHEqGRjKseBhrWaC2zNcfQQuGS"\n#     },\n#     {\n#       "account": {\n#         "data": [\n#           "",\n#           "base64"\n#         ],\n#         "executable": false,\n#         "lamports": 2039280,\n#         "owner": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",\n#         "rentEpoch": 314\n#       },\n#       "pubkey": "61NfACb21WvuEzxyiJoxBrivpiLQ79gLBxzFo85BiJ2U"\n#     },\n#     {\n#       "account": {\n#         "data": [\n#           "",\n#           "base64"\n#         ],\n#         "executable": false,\n#         "lamports": 2039280,\n#         "owner": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",\n#         "rentEpoch": 313\n#       },\n#       "pubkey": "Et3bNDxe2wP1yE5ao6mMvUByQUHg8nZTndpJNvfKLdCb"\n#     }\n#   ],\n#   "id": 1\n# }\n')),(0,o.kt)("p",null,"\u901a\u8fc7\u7ec4\u5408\u8fd9\u4e09\u4e2a\u53c2\u6570\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"dataSlice"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"dataSize"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"memcmp"),"\uff09\uff0c\u6211\u4eec\u53ef\u4ee5\u9650\u5236\u67e5\u8be2\u7684\u8303\u56f4\uff0c\u5e76\u9ad8\u6548\u5730\u8fd4\u56de\u6211\u4eec\u60f3\u8981\u7684\u6570\u636e\u3002"),(0,o.kt)("h2",{id:"\u5176\u4ed6\u8d44\u6599"},"\u5176\u4ed6\u8d44\u6599"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.solana.com/developing/clients/jsonrpc-api#getprogramaccounts"},"RPC API Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://solana-labs.github.io/solana-web3.js/classes/Connection.html#getProgramAccounts"},"Web3js Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://solana-labs.github.io/solana-web3.js/classes/Connection.html#getParsedProgramAccounts"},"JSON-parsed Web3js Documentation"))))}u.isMDXComponent=!0},5672:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/account-size-e58cfee8f6b591bff767b9717a60e64b.png"},6366:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/memcmp-8dc508e59db01538b365ce8be8dd8755.png"}}]);