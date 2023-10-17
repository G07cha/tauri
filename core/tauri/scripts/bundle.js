var __TAURI__=function(e){"use strict";function t(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}var r;function n(e,t=!1){const r=window.crypto.getRandomValues(new Uint32Array(1))[0],n=`_${r}`;return Object.defineProperty(window,n,{value:r=>(t&&Reflect.deleteProperty(window,n),e?.(r)),writable:!1,configurable:!0}),r}"function"==typeof SuppressedError&&SuppressedError;class i{constructor(){this.__TAURI_CHANNEL_MARKER__=!0,r.set(this,(()=>{})),this.id=n((e=>{t(this,r,"f").call(this,e)}))}set onmessage(e){!function(e,t,r,n,i){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");"a"===n?i.call(e,r):i?i.value=r:t.set(e,r)}(this,r,e,"f")}get onmessage(){return t(this,r,"f")}toJSON(){return`__CHANNEL__:${this.id}`}}r=new WeakMap;class o{constructor(e,t,r){this.plugin=e,this.event=t,this.channelId=r}async unregister(){return a(`plugin:${this.plugin}|remove_listener`,{event:this.event,channelId:this.channelId})}}async function a(e,t={},r){return new Promise(((i,o)=>{const a=n((e=>{i(e),Reflect.deleteProperty(window,`_${c}`)}),!0),c=n((e=>{o(e),Reflect.deleteProperty(window,`_${a}`)}),!0);window.__TAURI_IPC__({cmd:e,callback:a,error:c,payload:t,options:r})}))}var c,u=Object.freeze({__proto__:null,Channel:i,PluginListener:o,addPluginListener:async function(e,t,r){const n=new i;return n.onmessage=r,a(`plugin:${e}|register_listener`,{event:t,handler:n}).then((()=>new o(e,t,n.id)))},convertFileSrc:function(e,t="asset"){return window.__TAURI__.convertFileSrc(e,t)},invoke:a,transformCallback:n});async function p(e,t){await a("plugin:event|unlisten",{event:e,eventId:t})}async function s(e,t,r){return a("plugin:event|listen",{event:e,windowLabel:r?.target,handler:n(t)}).then((t=>async()=>p(e,t)))}!function(e){e.WINDOW_RESIZED="tauri://resize",e.WINDOW_MOVED="tauri://move",e.WINDOW_CLOSE_REQUESTED="tauri://close-requested",e.WINDOW_CREATED="tauri://window-created",e.WINDOW_DESTROYED="tauri://destroyed",e.WINDOW_FOCUS="tauri://focus",e.WINDOW_BLUR="tauri://blur",e.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",e.WINDOW_THEME_CHANGED="tauri://theme-changed",e.WINDOW_FILE_DROP="tauri://file-drop",e.WINDOW_FILE_DROP_HOVER="tauri://file-drop-hover",e.WINDOW_FILE_DROP_CANCELLED="tauri://file-drop-cancelled",e.MENU="tauri://menu"}(c||(c={}));var l,d=Object.freeze({__proto__:null,get TauriEvent(){return c},emit:async function(e,t,r){await a("plugin:event|emit",{event:e,windowLabel:r?.target,payload:t})},listen:s,once:async function(e,t,r){return s(e,(r=>{t(r),p(e,r.id).catch((()=>{}))}),r)}});!function(e){e[e.Audio=1]="Audio",e[e.Cache=2]="Cache",e[e.Config=3]="Config",e[e.Data=4]="Data",e[e.LocalData=5]="LocalData",e[e.Document=6]="Document",e[e.Download=7]="Download",e[e.Picture=8]="Picture",e[e.Public=9]="Public",e[e.Video=10]="Video",e[e.Resource=11]="Resource",e[e.Temp=12]="Temp",e[e.AppConfig=13]="AppConfig",e[e.AppData=14]="AppData",e[e.AppLocalData=15]="AppLocalData",e[e.AppCache=16]="AppCache",e[e.AppLog=17]="AppLog",e[e.Desktop=18]="Desktop",e[e.Executable=19]="Executable",e[e.Font=20]="Font",e[e.Home=21]="Home",e[e.Runtime=22]="Runtime",e[e.Template=23]="Template"}(l||(l={}));var y=Object.freeze({__proto__:null,get BaseDirectory(){return l},appCacheDir:async function(){return a("plugin:path|resolve_directory",{directory:l.AppCache})},appConfigDir:async function(){return a("plugin:path|resolve_directory",{directory:l.AppConfig})},appDataDir:async function(){return a("plugin:path|resolve_directory",{directory:l.AppData})},appLocalDataDir:async function(){return a("plugin:path|resolve_directory",{directory:l.AppLocalData})},appLogDir:async function(){return a("plugin:path|resolve_directory",{directory:l.AppLog})},audioDir:async function(){return a("plugin:path|resolve_directory",{directory:l.Audio})},basename:async function(e,t){return a("plugin:path|basename",{path:e,ext:t})},cacheDir:async function(){return a("plugin:path|resolve_directory",{directory:l.Cache})},configDir:async function(){return a("plugin:path|resolve_directory",{directory:l.Config})},dataDir:async function(){return a("plugin:path|resolve_directory",{directory:l.Data})},delimiter:function(){return window.__TAURI__.path.__delimiter},desktopDir:async function(){return a("plugin:path|resolve_directory",{directory:l.Desktop})},dirname:async function(e){return a("plugin:path|dirname",{path:e})},documentDir:async function(){return a("plugin:path|resolve_directory",{directory:l.Document})},downloadDir:async function(){return a("plugin:path|resolve_directory",{directory:l.Download})},executableDir:async function(){return a("plugin:path|resolve_directory",{directory:l.Executable})},extname:async function(e){return a("plugin:path|extname",{path:e})},fontDir:async function(){return a("plugin:path|resolve_directory",{directory:l.Font})},homeDir:async function(){return a("plugin:path|resolve_directory",{directory:l.Home})},isAbsolute:async function(e){return a("plugin:path|isAbsolute",{path:e})},join:async function(...e){return a("plugin:path|join",{paths:e})},localDataDir:async function(){return a("plugin:path|resolve_directory",{directory:l.LocalData})},normalize:async function(e){return a("plugin:path|normalize",{path:e})},pictureDir:async function(){return a("plugin:path|resolve_directory",{directory:l.Picture})},publicDir:async function(){return a("plugin:path|resolve_directory",{directory:l.Public})},resolve:async function(...e){return a("plugin:path|resolve",{paths:e})},resolveResource:async function(e){return a("plugin:path|resolve_directory",{directory:l.Resource,path:e})},resourceDir:async function(){return a("plugin:path|resolve_directory",{directory:l.Resource})},runtimeDir:async function(){return a("plugin:path|resolve_directory",{directory:l.Runtime})},sep:function(){return window.__TAURI__.path.__sep},tempDir:async function(e){return a("plugin:path|resolve_directory",{directory:l.Temp})},templateDir:async function(){return a("plugin:path|resolve_directory",{directory:l.Template})},videoDir:async function(){return a("plugin:path|resolve_directory",{directory:l.Video})}});const _=a;return e.event=d,e.invoke=_,e.path=y,e.tauri=u,e}({});
