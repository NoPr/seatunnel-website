"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[62301],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),c=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(k,s(s({ref:e},p),{},{components:n})):a.createElement(k,s({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,s[1]=i;for(var c=2;c<l;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66652:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),s=["components"],i={},o="Elasticsearch",c={unversionedId:"connector-v2/source/Elasticsearch",id:"connector-v2/source/Elasticsearch",title:"Elasticsearch",description:"Elasticsearch source connector",source:"@site/docs/connector-v2/source/Elasticsearch.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Elasticsearch",permalink:"/zh-CN/docs/connector-v2/source/Elasticsearch",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/Elasticsearch.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Clickhouse",permalink:"/zh-CN/docs/connector-v2/source/Clickhouse"},next:{title:"FakeSource",permalink:"/zh-CN/docs/connector-v2/source/FakeSource"}},p={},u=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"hosts array",id:"hosts-array",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"index string",id:"index-string",level:3},{value:"source array",id:"source-array",level:3},{value:"query json",id:"query-json",level:3},{value:"scroll_time String",id:"scroll_time-string",level:3},{value:"scroll_size int",id:"scroll_size-int",level:3},{value:"schema",id:"schema",level:3},{value:"tls_verify_certificate boolean",id:"tls_verify_certificate-boolean",level:3},{value:"tls_verify_hostname boolean",id:"tls_verify_hostname-boolean",level:3},{value:"tls_keystore_path string",id:"tls_keystore_path-string",level:3},{value:"tls_keystore_password string",id:"tls_keystore_password-string",level:3},{value:"tls_truststore_path string",id:"tls_truststore_path-string",level:3},{value:"tls_truststore_password string",id:"tls_truststore_password-string",level:3},{value:"common options",id:"common-options",level:3},{value:"Examples",id:"examples",level:2},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],d={toc:u};function m(t){var e=t.components,n=(0,r.Z)(t,s);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"elasticsearch"},"Elasticsearch"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Elasticsearch source connector")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Used to read data from Elasticsearch."),(0,l.kt)("p",null,"support version >= 2.x and < 8.x."),(0,l.kt)("h2",{id:"key-features"},"Key features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"batch")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"stream")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"exactly-once")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"column projection")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"parallelism")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"support user-defined split"))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hosts"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"index"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"json"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},'{"match_all": {}}')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scroll_time"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"1m")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scroll_size"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schema"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tls_verify_certificate"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tls_verify_hostnames"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tls_keystore_path"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tls_keystore_password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tls_truststore_path"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tls_truststore_password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"hosts-array"},"hosts ","[array]"),(0,l.kt)("p",null,"Elasticsearch cluster http address, the format is ",(0,l.kt)("inlineCode",{parentName:"p"},"host:port"),", allowing multiple hosts to be specified. Such as ",(0,l.kt)("inlineCode",{parentName:"p"},'["host1:9200", "host2:9200"]'),"."),(0,l.kt)("h3",{id:"username-string"},"username ","[string]"),(0,l.kt)("p",null,"x-pack username."),(0,l.kt)("h3",{id:"password-string"},"password ","[string]"),(0,l.kt)("p",null,"x-pack password."),(0,l.kt)("h3",{id:"index-string"},"index ","[string]"),(0,l.kt)("p",null,"Elasticsearch index name, support * fuzzy matching."),(0,l.kt)("h3",{id:"source-array"},"source ","[array]"),(0,l.kt)("p",null,"The fields of index.\nYou can get the document id by specifying the field ",(0,l.kt)("inlineCode",{parentName:"p"},"_id"),".If sink _id to other index,you need specify an alias for _id due to the Elasticsearch limit.\nIf you don't config source, you must config ",(0,l.kt)("inlineCode",{parentName:"p"},"schema"),"."),(0,l.kt)("h3",{id:"query-json"},"query ","[json]"),(0,l.kt)("p",null,"Elasticsearch DSL.\nYou can control the range of data read."),(0,l.kt)("h3",{id:"scroll_time-string"},"scroll_time ","[String]"),(0,l.kt)("p",null,"Amount of time Elasticsearch will keep the search context alive for scroll requests."),(0,l.kt)("h3",{id:"scroll_size-int"},"scroll_size ","[int]"),(0,l.kt)("p",null,"Maximum number of hits to be returned with each Elasticsearch scroll request."),(0,l.kt)("h3",{id:"schema"},"schema"),(0,l.kt)("p",null,"The structure of the data, including field names and field types.\nIf you don't config schema, you must config ",(0,l.kt)("inlineCode",{parentName:"p"},"source"),"."),(0,l.kt)("h3",{id:"tls_verify_certificate-boolean"},"tls_verify_certificate ","[boolean]"),(0,l.kt)("p",null,"Enable certificates validation for HTTPS endpoints"),(0,l.kt)("h3",{id:"tls_verify_hostname-boolean"},"tls_verify_hostname ","[boolean]"),(0,l.kt)("p",null,"Enable hostname validation for HTTPS endpoints"),(0,l.kt)("h3",{id:"tls_keystore_path-string"},"tls_keystore_path ","[string]"),(0,l.kt)("p",null,"The path to the PEM or JKS key store. This file must be readable by the operating system user running SeaTunnel."),(0,l.kt)("h3",{id:"tls_keystore_password-string"},"tls_keystore_password ","[string]"),(0,l.kt)("p",null,"The key password for the key store specified"),(0,l.kt)("h3",{id:"tls_truststore_path-string"},"tls_truststore_path ","[string]"),(0,l.kt)("p",null,"The path to PEM or JKS trust store. This file must be readable by the operating system user running SeaTunnel."),(0,l.kt)("h3",{id:"tls_truststore_password-string"},"tls_truststore_password ","[string]"),(0,l.kt)("p",null,"The key password for the trust store specified"),(0,l.kt)("h3",{id:"common-options"},"common options"),(0,l.kt)("p",null,"Source plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/connector-v2/source/common-options"},"Source Common Options")," for details"),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"simple"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'Elasticsearch {\n    hosts = ["localhost:9200"]\n    index = "seatunnel-*"\n    source = ["_id","name","age"]\n    query = {"range":{"firstPacket":{"gte":1669225429990,"lte":1669225429990}}}\n}\n')),(0,l.kt)("p",null,"complex"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'Elasticsearch {\n    hosts = ["elasticsearch:9200"]\n    index = "st_index"\n    schema = {\n        fields {\n            c_map = "map<string, tinyint>"\n            c_array = "array<tinyint>"\n            c_string = string\n            c_boolean = boolean\n            c_tinyint = tinyint\n            c_smallint = smallint\n            c_int = int\n            c_bigint = bigint\n            c_float = float\n            c_double = double\n            c_decimal = "decimal(2, 1)"\n            c_bytes = bytes\n            c_date = date\n            c_timestamp = timestamp\n        }\n    }\n    query = {"range":{"firstPacket":{"gte":1669225429990,"lte":1669225429990}}}\n}\n')),(0,l.kt)("p",null,"SSL (Disable certificates validation)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'source {\n    Elasticsearch {\n        hosts = ["https://localhost:9200"]\n        username = "elastic"\n        password = "elasticsearch"\n        \n        tls_verify_certificate = false\n    }\n}\n')),(0,l.kt)("p",null,"SSL (Disable hostname validation)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'source {\n    Elasticsearch {\n        hosts = ["https://localhost:9200"]\n        username = "elastic"\n        password = "elasticsearch"\n        \n        tls_verify_hostname = false\n    }\n}\n')),(0,l.kt)("p",null,"SSL (Enable certificates validation)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'source {\n    Elasticsearch {\n        hosts = ["https://localhost:9200"]\n        username = "elastic"\n        password = "elasticsearch"\n        \n        tls_keystore_path = "${your elasticsearch home}/config/certs/http.p12"\n        tls_keystore_password = "${your password}"\n    }\n}\n')),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("h3",{id:"next-version"},"next version"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add Elasticsearch Source Connector"),(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support https protocol & compatible with opensearch (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3997"},"3997"),")"),(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support DSL")))}m.isMDXComponent=!0}}]);