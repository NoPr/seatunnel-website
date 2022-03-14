"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[690],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2410:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={},p="Iceberg",u={unversionedId:"spark/configuration/source-plugins/Iceberg",id:"spark/configuration/source-plugins/Iceberg",title:"Iceberg",description:"Source plugin: Iceberg [Spark]",source:"@site/docs/spark/configuration/source-plugins/Iceberg.md",sourceDirName:"spark/configuration/source-plugins",slug:"/spark/configuration/source-plugins/Iceberg",permalink:"/zh-CN/docs/spark/configuration/source-plugins/Iceberg",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/spark/configuration/source-plugins/Iceberg.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hudi",permalink:"/zh-CN/docs/spark/configuration/source-plugins/Hudi"},next:{title:"Jdbc",permalink:"/zh-CN/docs/spark/configuration/source-plugins/Jdbc"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"common-options",id:"common-options",level:3},{value:"path",id:"path",level:3},{value:"pre_sql",id:"pre_sql",level:3},{value:"snapshot-id",id:"snapshot-id",level:3},{value:"as-of-timestamp",id:"as-of-timestamp",level:3},{value:"Example",id:"example",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"iceberg"},"Iceberg"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Source plugin: Iceberg ","[Spark]")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Read data from Iceberg."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#path"},"path")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#pre_sql"},"pre_sql")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#snapshot-id"},"snapshot-id")),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#as-of-timestamp"},"as-of-timestamp")),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("p",null,"Refer to ",(0,l.kt)("a",{parentName:"p",href:"https://iceberg.apache.org/docs/latest/spark-configuration/"},"iceberg read options")," for more configurations."),(0,l.kt)("h3",{id:"common-options"},"common-options"),(0,l.kt)("p",null,"Source plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/spark/configuration/source-plugins/source-plugin"},"Source Plugin")," for details"),(0,l.kt)("h3",{id:"path"},"path"),(0,l.kt)("p",null,"Iceberg table location."),(0,l.kt)("h3",{id:"pre_sql"},"pre_sql"),(0,l.kt)("p",null,"SQL statements queried from iceberg table. Note that the table name is ",(0,l.kt)("inlineCode",{parentName:"p"},"result_table_name")," configuration"),(0,l.kt)("h3",{id:"snapshot-id"},"snapshot-id"),(0,l.kt)("p",null,"Snapshot ID of the table snapshot to read"),(0,l.kt)("h3",{id:"as-of-timestamp"},"as-of-timestamp"),(0,l.kt)("p",null,"A timestamp in milliseconds; the snapshot used will be the snapshot current at this time."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'iceberg {\n    path = "hdfs://localhost:9000/iceberg/warehouse/db/table"\n    result_table_name = "my_source"\n    pre_sql="select * from my_source where dt = \'2019-01-01\'"\n}\n')))}d.isMDXComponent=!0}}]);