"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[420],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8927:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return m}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),l=["components"],i={},s="Deploy and run",u={unversionedId:"deployment",id:"version-1.x/deployment",title:"Deploy and run",description:"Seatunnel depends on Java operating environment and Spark. For detailed seatunnel installation steps, please refer to Installing seatunnel",source:"@site/versioned_docs/version-1.x/deployment.md",sourceDirName:".",slug:"/deployment",permalink:"/zh-CN/docs/1.x/deployment",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-1.x/deployment.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docs",previous:{title:"Stdout",permalink:"/zh-CN/docs/1.x/configuration/output-plugins/Stdout"},next:{title:"Plugin development",permalink:"/zh-CN/docs/1.x/developing-plugin"}},c={},p=[{value:"Run seatunnel locally in local mode",id:"run-seatunnel-locally-in-local-mode",level:3},{value:"Running seatunnel on Spark Standalone cluster",id:"running-seatunnel-on-spark-standalone-cluster",level:3},{value:"Running seatunnel on Yarn cluster",id:"running-seatunnel-on-yarn-cluster",level:3},{value:"Running seatunnel on Mesos",id:"running-seatunnel-on-mesos",level:3}],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-and-run"},"Deploy and run"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Seatunnel depends on Java operating environment and Spark. For detailed seatunnel installation steps, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/zh-cn/v1/installation"},"Installing seatunnel"))),(0,a.kt)("p",null,"The following highlights how the different platforms work:"),(0,a.kt)("h3",{id:"run-seatunnel-locally-in-local-mode"},"Run seatunnel locally in local mode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./bin/start-seatunnel.sh --master local[4] --deploy-mode client --config ./config/application.conf\n")),(0,a.kt)("h3",{id:"running-seatunnel-on-spark-standalone-cluster"},"Running seatunnel on Spark Standalone cluster"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# client mode\n./bin/start-seatunnel.sh --master spark://207.184.161.138:7077 --deploy-mode client --config ./config/application.conf\n\n# cluster mode\n./bin/start-seatunnel.sh --master spark://207.184.161.138:7077 --deploy-mode cluster --config ./config/application.conf\n")),(0,a.kt)("h3",{id:"running-seatunnel-on-yarn-cluster"},"Running seatunnel on Yarn cluster"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# client mode\n./bin/start-seatunnel.sh --master yarn --deploy-mode client --config ./config/application.conf\n\n# cluster mode\n./bin/start-seatunnel.sh --master yarn --deploy-mode cluster --config ./config/application.conf\n")),(0,a.kt)("h3",{id:"running-seatunnel-on-mesos"},"Running seatunnel on Mesos"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# cluster mode\n./bin/start-seatunnel.sh --master mesos://207.184.161.138:7077 --deploy-mode cluster --config ./config/application.conf\n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"master"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy-mode")," parameters of start-seatunnel.sh have the same meaning as Spark ",(0,a.kt)("inlineCode",{parentName:"p"},"master"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy-mode"),",\nReference: ",(0,a.kt)("a",{parentName:"p",href:"http://spark.apache.org/docs/latest/submitting-applications.html"},"Spark Submitting Applications")),(0,a.kt)("p",null,"If you want to specify the resource size occupied by seatunnel when running, or other Spark parameters, you can specify it in the configuration file specified by ",(0,a.kt)("inlineCode",{parentName:"p"},"--config"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'spark {\n  spark.executor.instances = 2\n  spark.executor.cores = 1\n  spark.executor.memory = "1g"\n  ...\n}\n...\n\n')),(0,a.kt)("p",null,"For how to configure seatunnel, see ",(0,a.kt)("a",{parentName:"p",href:"/zh-cn/v1/configuration/base"},"seatunnel configuration")))}m.isMDXComponent=!0}}]);