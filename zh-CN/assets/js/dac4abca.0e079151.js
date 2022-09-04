"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[67492],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),k=r,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||i;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20485:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return k}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={},s="Clickhouse",p={unversionedId:"connector-v2/sink/Clickhouse",id:"connector-v2/sink/Clickhouse",title:"Clickhouse",description:"Clickhouse sink connector",source:"@site/docs/connector-v2/sink/Clickhouse.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Clickhouse",permalink:"/zh-CN/docs/connector-v2/sink/Clickhouse",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Clickhouse.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Assert",permalink:"/zh-CN/docs/connector-v2/sink/Assert"},next:{title:"ClickhouseFile",permalink:"/zh-CN/docs/connector-v2/sink/ClickhouseFile"}},c={},u=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"host string",id:"host-string",level:3},{value:"database string",id:"database-string",level:3},{value:"table string",id:"table-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"clickhouse string",id:"clickhouse-string",level:3},{value:"bulk_size number",id:"bulk_size-number",level:3},{value:"split_mode boolean",id:"split_mode-boolean",level:3},{value:"sharding_key string",id:"sharding_key-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Examples",id:"examples",level:2}],d={toc:u};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"clickhouse"},"Clickhouse"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Clickhouse sink connector")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Used to write data to Clickhouse."),(0,i.kt)("h2",{id:"key-features"},"Key features"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"exactly-once"))),(0,i.kt)("p",null,"The Clickhouse sink plug-in can achieve accuracy once by implementing idempotent writing, and needs to cooperate with aggregatingmergetree and other engines that support deduplication."),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"schema projection"))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Write data to Clickhouse can also be done using JDBC"))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"host"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"database"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"table"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"username"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"password"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"clickhouse.*"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bulk_size"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"20000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"split_mode"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sharding_key"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"common-options"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h3",{id:"host-string"},"host ","[string]"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ClickHouse")," cluster address, the format is ",(0,i.kt)("inlineCode",{parentName:"p"},"host:port")," , allowing multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"hosts")," to be specified. Such as ",(0,i.kt)("inlineCode",{parentName:"p"},'"host1:8123,host2:8123"')," ."),(0,i.kt)("h3",{id:"database-string"},"database ","[string]"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ClickHouse")," database"),(0,i.kt)("h3",{id:"table-string"},"table ","[string]"),(0,i.kt)("p",null,"The table name"),(0,i.kt)("h3",{id:"username-string"},"username ","[string]"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ClickHouse")," user username"),(0,i.kt)("h3",{id:"password-string"},"password ","[string]"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ClickHouse")," user password"),(0,i.kt)("h3",{id:"clickhouse-string"},"clickhouse ","[string]"),(0,i.kt)("p",null,"In addition to the above mandatory parameters that must be specified by ",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse-jdbc")," , users can also specify multiple optional parameters, which cover all the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/clickhouse-jdbc/tree/master/clickhouse-client#configuration"},"parameters")," provided by ",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse-jdbc")," ."),(0,i.kt)("p",null,"The way to specify the parameter is to add the prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse.")," to the original parameter name. For example, the way to specify ",(0,i.kt)("inlineCode",{parentName:"p"},"socket_timeout")," is: ",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse.socket_timeout = 50000")," . If these non-essential parameters are not specified, they will use the default values given by ",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse-jdbc"),"."),(0,i.kt)("h3",{id:"bulk_size-number"},"bulk_size ","[number]"),(0,i.kt)("p",null,"The number of rows written through ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/clickhouse-jdbc"},"Clickhouse-jdbc")," each time, the ",(0,i.kt)("inlineCode",{parentName:"p"},"default is 20000")," ."),(0,i.kt)("h3",{id:"split_mode-boolean"},"split_mode ","[boolean]"),(0,i.kt)("p",null,"This mode only support clickhouse table which engine is 'Distributed'.And ",(0,i.kt)("inlineCode",{parentName:"p"},"internal_replication")," option\nshould be ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". They will split distributed table data in seatunnel and perform write directly on each shard. The shard weight define is clickhouse will be\ncounted."),(0,i.kt)("h3",{id:"sharding_key-string"},"sharding_key ","[string]"),(0,i.kt)("p",null,"When use split_mode, which node to send data to is a problem, the default is random selection, but the\n'sharding_key' parameter can be used to specify the field for the sharding algorithm. This option only\nworked when 'split_mode' is true."),(0,i.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,i.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'sink {\n\n  Clickhouse {\n    host = "localhost:8123"\n    database = "default"\n    table = "fake_all"\n    username = "default"\n    password = ""\n    split_mode = true\n    sharding_key = "age"\n  }\n  \n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'sink {\n\n  Clickhouse {\n    host = "localhost:8123"\n    database = "default"\n    table = "fake_all"\n    username = "default"\n    password = ""\n  }\n  \n}\n')))}k.isMDXComponent=!0}}]);