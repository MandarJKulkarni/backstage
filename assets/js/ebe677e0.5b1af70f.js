/*! For license information please see ebe677e0.5b1af70f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[98989],{128943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(824246),o=n(511151);const a={id:"modules",title:"Plugin Modules",sidebar_label:"Modules",description:"Modules for backend plugins"},s=void 0,i={id:"backend-system/architecture/modules",title:"Plugin Modules",description:"Modules for backend plugins",source:"@site/../docs/backend-system/architecture/06-modules.md",sourceDirName:"backend-system/architecture",slug:"/backend-system/architecture/modules",permalink:"/docs/backend-system/architecture/modules",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/backend-system/architecture/06-modules.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"modules",title:"Plugin Modules",sidebar_label:"Modules",description:"Modules for backend plugins"},sidebar:"docs",previous:{title:"Extension Points",permalink:"/docs/backend-system/architecture/extension-points"},next:{title:"Feature Loaders",permalink:"/docs/backend-system/architecture/feature-loaders"}},c={},u=[{value:"A Practical Example",id:"a-practical-example",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Backend modules are used to extend ",(0,r.jsx)(t.a,{href:"/docs/backend-system/architecture/plugins",children:"plugins"})," or sometimes other modules with additional features or change existing behavior. They must always be installed in the same backend instance as the plugin that they extend, and may only extend a single plugin. Modules interact with their target plugin using the ",(0,r.jsx)(t.a,{href:"/docs/backend-system/architecture/extension-points",children:"extension points"})," registered by the plugin, while also being able to depend on the ",(0,r.jsx)(t.a,{href:"/docs/backend-system/architecture/services",children:"services"})," of that plugin."]}),"\n",(0,r.jsxs)(t.p,{children:["Both modules and plugins register an ",(0,r.jsx)(t.code,{children:"init"})," method that is called during startup. In order to ensure that modules have registered all their extensions before the plugin starts up, all modules for each plugin are completely initialized before the plugin itself is initialized. In practice this means that all promises returned by each ",(0,r.jsx)(t.code,{children:"init"})," method of the modules need to resolve before the plugin ",(0,r.jsx)(t.code,{children:"init"})," method is called. This also means that it is not possible to further interact with the extension points once the ",(0,r.jsx)(t.code,{children:"init"})," method has resolved."]}),"\n",(0,r.jsxs)(t.p,{children:["A module depends on the extension points exported by the target plugin's library package, for example ",(0,r.jsx)(t.code,{children:"@backstage/plugin-catalog-node"}),", and does not directly declare a dependency on the plugin package itself. This is to avoid a direct dependency and potentially cause duplicate installations of the plugin package, while duplicate installations of library packages should always be supported."]}),"\n",(0,r.jsx)(t.h2,{id:"a-practical-example",children:"A Practical Example"}),"\n",(0,r.jsxs)(t.p,{children:["The following is an example on how to create a module that adds a new processor using the ",(0,r.jsx)(t.code,{children:"catalogProcessingExtensionPoint"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// plugins/catalog-backend-module-example-processor/src/module.ts\nimport { createBackendModule } from '@backstage/backend-plugin-api';\nimport { catalogProcessingExtensionPoint } from '@backstage/plugin-catalog-node';\nimport { MyCustomProcessor } from './MyCustomProcessor';\n\nexport const catalogModuleExampleCustomProcessor = createBackendModule({\n  pluginId: 'catalog',\n  moduleId: 'example-custom-processor',\n  register(env) {\n    env.registerInit({\n      deps: {\n        catalog: catalogProcessingExtensionPoint,\n        logger: coreServices.logger,\n      },\n      async init({ catalog }) {\n        catalog.addProcessor(new MyCustomProcessor(logger));\n      },\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Notice that we're placing the extension point we want to interact with in the ",(0,r.jsx)(t.code,{children:"deps"})," option, while also depending on the logger service at the same time. When initializing modules we can depend on both extension points and services interchangeably. You can also depend on multiple extension points at once, in case the implementation of the module requires it."]}),"\n",(0,r.jsx)(t.p,{children:"Just like plugins there is a convention that every module package should export its module instance as the default export from the package:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// plugins/catalog-backend-module-example-processor/src/index.ts\nexport { catalogModuleExampleCustomProcessor as default } from './module.ts';\n"})}),"\n",(0,r.jsx)(t.p,{children:"This allows you to install the module in your backend instance by just referencing the package:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"backend.add(\n  import('@internal/backstage-plugin-catalog-backend-module-example-processor'),\n);\n"})}),"\n",(0,r.jsx)(t.p,{children:"Each module package should only contain a single module, but this module may extend multiple extension points. A module may also use configuration to conditionally enable or disable certain extensions. This pattern should only be used for extensions that are related to each other, otherwise it is best to create a separate module package with its own module."})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,a={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:l,props:a,_owner:i.current}}t.Fragment=a,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,y={};function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}function b(){}function x(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var k=x.prototype=new b;k.constructor=x,m(k,g.prototype),k.isPureReactComponent=!0;var v=Array.isArray,_=Object.prototype.hasOwnProperty,w={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var o,a={},s=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)_.call(t,o)&&!j.hasOwnProperty(o)&&(a[o]=t[o]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];a.children=u}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:n,type:e,key:s,ref:i,props:a,_owner:w.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,o,a,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return s=s(c=e),e=""===a?"."+C(c,0):a,v(s)?(o="",null!=e&&(o=e.replace(P,"$&/")+"/"),R(s,t,o,"",(function(e){return e}))):null!=s&&(S(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(P,"$&/")+"/")+e)),t.push(s)),1;if(c=0,a=""===a?".":a+":",v(e))for(var u=0;u<e.length;u++){var l=a+C(i=e[u],u);c+=R(i,t,o,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(i=e.next()).done;)c+=R(i=i.value,t,o,l=a+C(i,u++),s);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function $(e,t,n){if(null==e)return e;var r=[],o=0;return R(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function M(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},I={transition:null},T={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:I,ReactCurrentOwner:w};t.Children={map:$,forEach:function(e,t,n){$(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=o,t.Profiler=s,t.PureComponent=x,t.StrictMode=a,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),a=e.key,s=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,i=w.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)_.call(t,u)&&!j.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){c=Array(u);for(var l=0;l<u;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:n,type:e.type,key:a,ref:s,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:M}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return O.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var r=n(667294);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);