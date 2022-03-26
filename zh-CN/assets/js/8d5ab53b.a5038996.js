"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[2660],{3905:function(t,n,e){e.d(n,{Zo:function(){return u},kt:function(){return m}});var r=e(7294);function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){i(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function l(t,n){if(null==t)return{};var e,r,i=function(t,n){if(null==t)return{};var e,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}var p=r.createContext({}),s=function(t){var n=r.useContext(p),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},u=function(t){var n=s(t.components);return r.createElement(p.Provider,{value:n},t.children)},c={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(t,n){var e=t.components,i=t.mdxType,a=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=s(e),m=i,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return e?r.createElement(k,o(o({ref:n},u),{},{components:e})):r.createElement(k,o({ref:n},u))}));function m(t,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof t||i){var a=e.length,o=new Array(a);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var s=2;s<a;s++)o[s]=e[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,e)}d.displayName="MDXCreateElement"},9622:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return u},toc:function(){return c},default:function(){return m}});var r=e(7462),i=e(3366),a=(e(7294),e(3905)),o=["components"],l={},p="Phoenix",s={unversionedId:"spark/configuration/sink-plugins/Phoenix",id:"spark/configuration/sink-plugins/Phoenix",title:"Phoenix",description:"Sink plugin : Phoenix [Spark]",source:"@site/docs/spark/configuration/sink-plugins/Phoenix.md",sourceDirName:"spark/configuration/sink-plugins",slug:"/spark/configuration/sink-plugins/Phoenix",permalink:"/zh-CN/docs/spark/configuration/sink-plugins/Phoenix",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/spark/configuration/sink-plugins/Phoenix.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"MongoDB",permalink:"/zh-CN/docs/spark/configuration/sink-plugins/MongoDB"},next:{title:"Redis",permalink:"/zh-CN/docs/spark/configuration/sink-plugins/Redis"}},u={},c=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"zk-connect string",id:"zk-connect-string",level:3},{value:"table string",id:"table-string",level:3},{value:"tenantId string",id:"tenantid-string",level:5},{value:"skipNormalizingIdentifier boolean",id:"skipnormalizingidentifier-boolean",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Examples",id:"examples",level:2}],d={toc:c};function m(t){var n=t.components,e=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"phoenix"},"Phoenix"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Sink plugin : Phoenix ","[Spark]")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Export data to ",(0,a.kt)("inlineCode",{parentName:"p"},"Phoenix")," , compatible with ",(0,a.kt)("inlineCode",{parentName:"p"},"Kerberos")," authentication"),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"required"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"zk-connect"),(0,a.kt)("td",{parentName:"tr",align:null},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"table"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tenantId"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"skipNormalizingIdentifier"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"common-options"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("h3",{id:"zk-connect-string"},"zk-connect ","[string]"),(0,a.kt)("p",null,"Connection string, configuration example: ",(0,a.kt)("inlineCode",{parentName:"p"},"host1:2181,host2:2181,host3:2181 [/znode]")),(0,a.kt)("h3",{id:"table-string"},"table ","[string]"),(0,a.kt)("p",null,"Target table name"),(0,a.kt)("h5",{id:"tenantid-string"},"tenantId ","[string]"),(0,a.kt)("p",null,"Tenant ID, optional configuration item"),(0,a.kt)("h3",{id:"skipnormalizingidentifier-boolean"},"skipNormalizingIdentifier ","[boolean]"),(0,a.kt)("p",null,"Whether to skip the normalized identifier, if the column name is surrounded by double quotes, it is used as is, otherwise the name is uppercase. Optional configuration items, the default is ",(0,a.kt)("inlineCode",{parentName:"p"},"false")),(0,a.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,a.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/spark/configuration/sink-plugins/sink-plugin"},"Sink Plugin")," for details"),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'  Phoenix {\n    zk-connect = "host1:2181,host2:2181,host3:2181"\n    table = "tableName"\n  }\n')))}m.isMDXComponent=!0}}]);