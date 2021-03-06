/*! Soundcloud API */
(function(){var requirejs,require,define,__inflate;(function(e){function a(e,t){var n=t&&t.split("/"),i=r.map,s=i&&i["*"]||{},o,u,a,f,l,c,h;if(e&&e.charAt(0)==="."&&t){n=n.slice(0,n.length-1),e=n.concat(e.split("/"));for(l=0;h=e[l];l++)if(h===".")e.splice(l,1),l-=1;else if(h===".."){if(l===1&&(e[2]===".."||e[0]===".."))return!0;l>0&&(e.splice(l-1,2),l-=2)}e=e.join("/")}if((n||s)&&i){o=e.split("/");for(l=o.length;l>0;l-=1){u=o.slice(0,l).join("/");if(n)for(c=n.length;c>0;c-=1){a=i[n.slice(0,c).join("/")];if(a){a=a[u];if(a){f=a;break}}}f=f||s[u];if(f){o.splice(0,l,f),e=o.join("/");break}}}return e}function f(t,n){return function(){return u.apply(e,s.call(arguments,0).concat([t,n]))}}function l(e){return function(t){return a(t,e)}}function c(e){return function(n){t[e]=n}}function h(r){if(n.hasOwnProperty(r)){var s=n[r];delete n[r],i[r]=!0,o.apply(e,s)}if(!t.hasOwnProperty(r))throw new Error("No "+r);return t[r]}function p(e,t){var n,r,i=e.indexOf("!");return i!==-1?(n=a(e.slice(0,i),t),e=e.slice(i+1),r=h(n),r&&r.normalize?e=r.normalize(e,l(t)):e=a(e,t)):e=a(e,t),{f:n?n+"!"+e:e,n:e,p:r}}function d(e){return function(){return r&&r.config&&r.config[e]||{}}}var t={},n={},r={},i={},s=[].slice,o,u;o=function(r,s,o,u){var a=[],l,v,m,g,y,b;u=u||r,typeof o=="string"&&(o=__inflate(r,o));if(typeof o=="function"){s=!s.length&&o.length?["require","exports","module"]:s;for(b=0;b<s.length;b++){y=p(s[b],u),m=y.f;if(m==="require")a[b]=f(r);else if(m==="exports")a[b]=t[r]={},l=!0;else if(m==="module")v=a[b]={id:r,uri:"",exports:t[r],config:d(r)};else if(t.hasOwnProperty(m)||n.hasOwnProperty(m))a[b]=h(m);else if(y.p)y.p.load(y.n,f(u,!0),c(m),{}),a[b]=t[m];else if(!i[m])throw new Error(r+" missing "+m)}g=o.apply(t[r],a);if(r)if(v&&v.exports!==e&&v.exports!==t[r])t[r]=v.exports;else if(g!==e||!l)t[r]=g}else r&&(t[r]=o)},requirejs=require=u=function(t,n,i,s){return typeof t=="string"?h(p(t,n).f):(t.splice||(r=t,n.splice?(t=n,n=i,i=null):t=e),n=n||function(){},s?o(e,t,n,i):setTimeout(function(){o(e,t,n,i)},15),u)},u.config=function(e){return r=e,u},define=function(e,t,r){t.splice||(r=t,t=[]),n[e]=[e,t,r]},define.amd={jQuery:!0}})(),__inflate=function(name,src){var r;return eval(["r = function(a,b,c){","\n};\n//@ sourceURL="+name+"\n"].join(src)),r},define("lib/api/events",["require","exports","module"],function(e,t,n){t.api={LOAD_PROGRESS:"loadProgress",PLAY_PROGRESS:"playProgress",PLAY:"play",PAUSE:"pause",FINISH:"finish",SEEK:"seek",READY:"ready",OPEN_SHARE_PANEL:"sharePanelOpened",CLICK_DOWNLOAD:"downloadClicked",CLICK_BUY:"buyClicked",ERROR:"error"},t.bridge={REMOVE_LISTENER:"removeEventListener",ADD_LISTENER:"addEventListener"}}),define("lib/api/getters",["require","exports","module"],function(e,t,n){n.exports={GET_VOLUME:"getVolume",GET_DURATION:"getDuration",GET_POSITION:"getPosition",GET_SOUNDS:"getSounds",GET_CURRENT_SOUND:"getCurrentSound",GET_CURRENT_SOUND_INDEX:"getCurrentSoundIndex",IS_PAUSED:"isPaused"}}),define("lib/api/setters",["require","exports","module"],function(e,t,n){n.exports={PLAY:"play",PAUSE:"pause",TOGGLE:"toggle",SEEK_TO:"seekTo",SET_VOLUME:"setVolume",NEXT:"next",PREV:"prev",SKIP:"skip"}}),define("lib/api/api",["require","exports","module","lib/api/events","lib/api/getters","lib/api/setters"],function(e,t,n){function m(e){return!!(e===""||e&&e.charCodeAt&&e.substr)}function g(e){return!!(e&&e.constructor&&e.call&&e.apply)}function y(e){return!!e&&e.nodeType===1&&e.nodeName.toUpperCase()==="IFRAME"}function b(e){var t=!1,n;for(n in i)if(i.hasOwnProperty(n)&&i[n]===e){t=!0;break}return t}function w(e){var t,n,r;for(t=0,n=f.length;t<n;t++){r=e(f[t]);if(r===!1)break}}function E(e){var t="",n,r,i;e.substr(0,2)==="//"&&(e=window.location.protocol+e),i=e.split("/");for(n=0,r=i.length;n<r;n++){if(!(n<3))break;t+=i[n],n<2&&(t+="/")}return t}function S(e){return e.contentWindow?e.contentWindow:e.contentDocument&&"parentWindow"in e.contentDocument?e.contentDocument.parentWindow:null}function x(e){var t=[],n;for(n in e)e.hasOwnProperty(n)&&t.push(e[n]);return t}function T(e,t,n){n.callbacks[e]=n.callbacks[e]||[],n.callbacks[e].push(t)}function N(e,t){var n=!0,r;return t.callbacks[e]=[],w(function(t){r=t.callbacks[e]||[];if(r.length)return n=!1,!1}),n}function C(e,t,n){var r=S(n),i,s;if(!r.postMessage)return!1;i=n.getAttribute("src").split("?")[0],s=JSON.stringify({method:e,value:t}),i.substr(0,2)==="//"&&(i=window.location.protocol+i),i=i.replace(/http:\/\/(w|wt).soundcloud.com/,"https://$1.soundcloud.com"),r.postMessage(s,i)}function k(e){var t;return w(function(n){if(n.instance===e)return t=n,!1}),t}function L(e){var t;return w(function(n){if(S(n.element)===e)return t=n,!1}),t}function A(e,t){return function(n){var r=g(n),i=k(this),s=!r&&t?n:null,o=r&&!t?n:null;return o&&T(e,o,i),C(e,s,i.element),this}}function O(e,t,n){var r,i,s;for(r=0,i=t.length;r<i;r++)s=t[r],e[s]=A(s,n)}function M(e,t,n){return e+"?url="+t+"&"+_(n)}function _(e){var t,n,r=[];for(t in e)e.hasOwnProperty(t)&&(n=e[t],r.push(t+"="+(t==="start_track"?parseInt(n,10):n?"true":"false")));return r.join("&")}function D(e,t,n){var r=e.callbacks[t]||[],i,s;for(i=0,s=r.length;i<s;i++)r[i].apply(e.instance,n);if(b(t)||t===o.READY)e.callbacks[t]=[]}function P(e){var t,n,r,i,s;try{n=JSON.parse(e.data)}catch(u){return!1}t=L(e.source),r=n.method,i=n.value;if(t&&H(e.origin)!==H(t.domain))return!1;if(!t)return r===o.READY&&a.push(e.source),!1;r===o.READY&&(t.isReady=!0,D(t,l),N(l,t)),r===o.PLAY&&!t.playEventFired&&(t.playEventFired=!0),r===o.PLAY_PROGRESS&&!t.playEventFired&&(t.playEventFired=!0,D(t,o.PLAY,[i])),s=[],i!==undefined&&s.push(i),D(t,r,s)}function H(e){return e.replace(h,"")}var r=e("lib/api/events"),i=e("lib/api/getters"),s=e("lib/api/setters"),o=r.api,u=r.bridge,a=[],f=[],l="__LATE_BINDING__",c="http://wt.soundcloud.dev:9200/",h=/^http(?:s?)/,p,d,v;window.addEventListener?window.addEventListener("message",P,!1):window.attachEvent("onmessage",P),n.exports=v=function(e,t,n){m(e)&&(e=document.getElementById(e));if(!y(e))throw new Error("SC.Widget function should be given either iframe element or a string specifying id attribute of iframe element.");t&&(n=n||{},e.src=M(c,t,n));var r=L(S(e)),i,s;return r&&r.instance?r.instance:(i=a.indexOf(S(e))>-1,s=new p(e),f.push(new d(s,e,i)),s)},v.Events=o,window.SC=window.SC||{},window.SC.Widget=v,d=function(e,t,n){this.instance=e,this.element=t,this.domain=E(t.getAttribute("src")),this.isReady=!!n,this.callbacks={}},p=function(){},p.prototype={constructor:p,load:function(e,t){if(!e)return;t=t||{};var n=this,r=k(this),i=r.element,s=i.src,a=s.substr(0,s.indexOf("?"));r.isReady=!1,r.playEventFired=!1,i.onload=function(){n.bind(o.READY,function(){var e,n=r.callbacks;for(e in n)n.hasOwnProperty(e)&&e!==o.READY&&C(u.ADD_LISTENER,e,r.element);t.callback&&t.callback()})},i.src=M(a,e,t)},bind:function(e,t){var n=this,r=k(this);return r&&r.element&&(e===o.READY&&r.isReady?setTimeout(t,1):r.isReady?(T(e,t,r),C(u.ADD_LISTENER,e,r.element)):T(l,function(){n.bind(e,t)},r)),this},unbind:function(e){var t=k(this),n;t&&t.element&&(n=N(e,t),e!==o.READY&&n&&C(u.REMOVE_LISTENER,e,t.element))}},O(p.prototype,x(i)),O(p.prototype,x(s),!0)}),window.SC=window.SC||{},window.SC.Widget=require("lib/api/api")})()	

/*! JAVA SDK 2.0.0 */
var Recorder={swfObject:null,_callbacks:{},_events:{},_initialized:false,options:{},initialize:function(options){this.options=options||{};if(!this.options.flashContainer){this._setupFlashContainer()}this.bind("initialized",function(){Recorder._initialized=true;options.initialized()});this.bind("showFlash",this.options.onFlashSecurity||this._defaultOnShowFlash);this._loadFlash()},clear:function(){Recorder._events={}},record:function(options){options=options||{};this.clearBindings("recordingStart");this.clearBindings("recordingProgress");this.clearBindings("recordingCancel");this.bind("recordingStart",this._defaultOnHideFlash);this.bind("recordingCancel",this._defaultOnHideFlash);this.bind("recordingCancel",this._loadFlash);this.bind("recordingStart",options["start"]);this.bind("recordingProgress",options["progress"]);this.bind("recordingCancel",options["cancel"]);this.flashInterface().record()},stop:function(){return this.flashInterface()._stop()},play:function(options){options=options||{};this.clearBindings("playingProgress");this.bind("playingProgress",options["progress"]);this.bind("playingStop",options["finished"]);this.flashInterface()._play()},upload:function(options){options.audioParam=options.audioParam||"audio";options.params=options.params||{};this.clearBindings("uploadSuccess");this.bind("uploadSuccess",function(responseText){options.success(Recorder._externalInterfaceDecode(responseText))});this.flashInterface().upload(options.url,options.audioParam,options.params)},audioData:function(){return this.flashInterface().audioData().split(";")},request:function(method,uri,contentType,data,callback){var callbackName=this.registerCallback(callback);this.flashInterface().request(method,uri,contentType,data,callbackName)},clearBindings:function(eventName){Recorder._events[eventName]=[]},bind:function(eventName,fn){if(!Recorder._events[eventName]){Recorder._events[eventName]=[]}Recorder._events[eventName].push(fn)},triggerEvent:function(eventName,arg0,arg1){Recorder._executeInWindowContext(function(){for(var cb in Recorder._events[eventName]){if(Recorder._events[eventName][cb]){Recorder._events[eventName][cb].apply(Recorder,[arg0,arg1])}}})},triggerCallback:function(name,args){Recorder._executeInWindowContext(function(){Recorder._callbacks[name].apply(null,args)})},registerCallback:function(fn){var name="CB"+parseInt(Math.random()*999999,10);Recorder._callbacks[name]=fn;return name},flashInterface:function(){if(!this.swfObject){return null}else if(this.swfObject.record){return this.swfObject}else if(this.swfObject.children[3].record){return this.swfObject.children[3]}},_executeInWindowContext:function(fn){window.setTimeout(fn,1)},_setupFlashContainer:function(){this.options.flashContainer=document.createElement("div");this.options.flashContainer.setAttribute("id","recorderFlashContainer");this.options.flashContainer.setAttribute("style","position: fixed; left: -9999px; top: -9999px; width: 230px; height: 140px; margin-left: 10px; border-top: 6px solid rgba(128, 128, 128, 0.6); border-bottom: 6px solid rgba(128, 128, 128, 0.6); border-radius: 5px 5px; padding-bottom: 1px; padding-right: 1px;");document.body.appendChild(this.options.flashContainer)},_clearFlash:function(){var flashElement=this.options.flashContainer.children[0];if(flashElement){this.options.flashContainer.removeChild(flashElement)}},_loadFlash:function(){this._clearFlash();var flashElement=document.createElement("div");flashElement.setAttribute("id","recorderFlashObject");this.options.flashContainer.appendChild(flashElement);swfobject.embedSWF(this.options.swfSrc,"recorderFlashObject","231","141","10.1.0",undefined,undefined,{allowscriptaccess:"always"},undefined,function(e){if(e.success){Recorder.swfObject=e.ref;Recorder._checkForFlashBlock()}else{Recorder._showFlashRequiredDialog()}})},_defaultOnShowFlash:function(){var flashContainer=Recorder.options.flashContainer;flashContainer.style.left=(window.innerWidth||document.body.offsetWidth)/2-115+"px";flashContainer.style.top=(window.innerHeight||document.body.offsetHeight)/2-70+"px"},_defaultOnHideFlash:function(){var flashContainer=Recorder.options.flashContainer;flashContainer.style.left="-9999px";flashContainer.style.top="-9999px"},_checkForFlashBlock:function(){window.setTimeout(function(){if(!Recorder._initialized){Recorder.triggerEvent("showFlash")}},500)},_showFlashRequiredDialog:function(){Recorder.options.flashContainer.innerHTML="<p>Adobe Flash Player 10.1 or newer is required to use this feature.</p><p><a href='http://get.adobe.com/flashplayer' target='_top'>Get it on Adobe.com.</a></p>";Recorder.options.flashContainer.style.color="white";Recorder.options.flashContainer.style.backgroundColor="#777";Recorder.options.flashContainer.style.textAlign="center";Recorder.triggerEvent("showFlash")},_externalInterfaceDecode:function(data){return data.replace(/%22/g,'"').replace(/%5c/g,"\\").replace(/%26/g,"&").replace(/%25/g,"%")}};if(swfobject==undefined){var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if(typeof j.readyState!=D&&j.readyState=="complete"||typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body)){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){!function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()}()}}if(M.wk){!function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()}()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;!function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()}()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return!a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||!/%$/.test(aa.width)&&parseInt(aa.width,10)<310){aa.width="310"}if(typeof aa.height==D||!/%$/.test(aa.height)&&parseInt(aa.height,10)<137){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+encodeURI(O.location).toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";!function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}}()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";!function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}}()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";!function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}}()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return Y[0]>X[0]||Y[0]==X[0]&&Y[1]>X[1]||Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=ad&&typeof ad=="string"?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring(Y[X].indexOf("=")+1))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}()}var __hasProp=Object.prototype.hasOwnProperty;window.SC=window.SC||{};window.SC.URI=function(uri,options){var AUTHORITY_REGEXP,URI_REGEXP;if(uri==null){uri=""}if(options==null){options={}}URI_REGEXP=/^(?:([^:\/?\#]+):)?(?:\/\/([^\/?\#]*))?([^?\#]*)(?:\?([^\#]*))?(?:\#(.*))?/;AUTHORITY_REGEXP=/^(?:([^@]*)@)?([^:]*)(?::(\d*))?/;this.scheme=this.user=this.password=this.host=this.port=this.path=this.query=this.fragment=null;this.toString=function(){var str;str="";if(this.isAbsolute()){str+=this.scheme;str+="://";if(this.user!=null){str+=this.user+":"+this.password+"@"}str+=this.host;if(this.port!=null){str+=":"+this.port}}str+=this.path;if(this.path===""&&(this.query!=null||this.fragment!=null)){str+="/"}if(this.query!=null){str+=this.encodeParamsWithPrepend(this.query,"?")}if(this.fragment!=null){str+=this.encodeParamsWithPrepend(this.fragment,"#")}return str};this.isRelative=function(){return!this.isAbsolute()};this.isAbsolute=function(){return this.host!=null};this.decodeParams=function(string){var key,params,part,splitted,value,_i,_len,_ref;if(string==null){string=""}params={};_ref=string.split("&");for(_i=0,_len=_ref.length;_i<_len;_i++){part=_ref[_i];if(part!==""){splitted=part.split("=");key=decodeURIComponent(splitted[0]);value=decodeURIComponent(splitted[1]||"").replace(/\+/g," ");this.normalizeParams(params,key,value)}}return params};this.normalizeParams=function(params,name,v){var after,child_key,k,lastP,result,result_i;if(v==null){v=NULL}result=name.match(/^[\[\]]*([^\[\]]+)\]*(.*)/);k=result[1]||"";after=result[2]||"";if(after===""){params[k]=v}else if(after==="[]"){params[k]||(params[k]=[]);params[k].push(v)}else if(result_i=after.match(/^\[\]\[([^\[\]]+)\]$/)||(result_i=after.match(/^\[\](.+)$/))){child_key=result_i[1];params[k]||(params[k]=[]);lastP=params[k][params[k].length-1];if(lastP!=null&&lastP.constructor===Object&&!(lastP[child_key]!=null)){this.normalizeParams(lastP,child_key,v)}else{params[k].push(this.normalizeParams({},child_key,v))}}else{params[k]||(params[k]={});params[k]=this.normalizeParams(params[k],after,v)}return params};this.encodeParamsWithPrepend=function(params,prepend){var encoded;encoded=this.encodeParams(params);if(encoded!==""){return prepend+encoded}else{return""}};this.encodeParams=function(params){var flattened,key,keyValueStrings,kv,paramString,value,_i,_len;paramString="";if(params.constructor===String){return paramString=params}else{flattened=this.flattenParams(params);keyValueStrings=[];for(_i=0,_len=flattened.length;_i<_len;_i++){kv=flattened[_i];key=kv[0];value=kv[1];if(value===null){keyValueStrings.push(key)}else{keyValueStrings.push(key+"="+encodeURIComponent(value))}}return paramString=keyValueStrings.join("&")}};this.flattenParams=function(params,prefix,paramsArray){var key,prefixedKey,value,_i,_len;if(prefix==null){prefix=""}if(paramsArray==null){paramsArray=[]}if(!(params!=null)){if(prefix!=null){paramsArray.push([prefix,null])}}else if(params.constructor===Object){for(key in params){if(!__hasProp.call(params,key))continue;value=params[key];if(prefix!==""){prefixedKey=prefix+"["+key+"]"}else{prefixedKey=key}this.flattenParams(value,prefixedKey,paramsArray)}}else if(params.constructor===Array){for(_i=0,_len=params.length;_i<_len;_i++){value=params[_i];this.flattenParams(value,prefix+"[]",paramsArray)}}else if(prefix!==""){paramsArray.push([prefix,params])}return paramsArray};this.parse=function(uri,options){var authority,authority_result,nullIfBlank,result,userinfo;if(uri==null){uri=""}if(options==null){options={}}nullIfBlank=function(str){if(str===""){return null}else{return str}};result=uri.match(URI_REGEXP);this.scheme=nullIfBlank(result[1]);authority=result[2];if(authority!=null){authority_result=authority.match(AUTHORITY_REGEXP);userinfo=nullIfBlank(authority_result[1]);if(userinfo!=null){this.user=userinfo.split(":")[0];this.password=userinfo.split(":")[1]}this.host=nullIfBlank(authority_result[2]);this.port=parseInt(authority_result[3],10)||null}this.path=result[3];this.query=nullIfBlank(result[4]);if(options.decodeQuery){this.query=this.decodeParams(this.query)}this.fragment=nullIfBlank(result[5]);if(options.decodeFragment){return this.fragment=this.decodeParams(this.fragment)}};this.parse(uri.toString(),options);return this};!function(){var AbstractDialog,ConnectDialog,EchoDialog,PickerDialog,Player,_ref,_ref1,_ref2,__hasProp={}.hasOwnProperty,__extends=function(child,parent){for(var key in parent){if(__hasProp.call(parent,key))child[key]=parent[key]}function ctor(){this.constructor=child}ctor.prototype=parent.prototype;child.prototype=new ctor;child.__super__=parent.prototype;return child};window.SC||(window.SC={});SC.Helper={merge:function(a,b){var k,newObj,v,_i,_len;if(a.constructor===Array){newObj=Array.apply(null,a);for(_i=0,_len=b.length;_i<_len;_i++){v=b[_i];newObj.push(v)}return newObj}else{newObj={};for(k in a){if(!__hasProp.call(a,k))continue;v=a[k];newObj[k]=v}for(k in b){if(!__hasProp.call(b,k))continue;v=b[k];newObj[k]=v}return newObj}},groupBy:function(collection,attribute){var group,object,value,_i,_len,_name;group={};for(_i=0,_len=collection.length;_i<_len;_i++){object=collection[_i];if(value=object[attribute]){group[_name=object[attribute]]||(group[_name]=[]);group[object[attribute]].push(object)}}return group},loadJavascript:function(src,callback){var elem;elem=document.createElement("script");elem.async=true;elem.src=src;SC.Helper.attachLoadEvent(elem,callback);document.body.appendChild(elem);return elem},extractOptionsAndCallbackArguments:function(optionsOrCallback,callback){var args;args={};if(callback!=null){args.callback=callback;args.options=optionsOrCallback}else if(typeof optionsOrCallback==="function"){args.callback=optionsOrCallback;args.options={}}else{args.options=optionsOrCallback||{}}return args},openCenteredPopup:function(url,width,height){var options;options={};if(height!=null){options.width=width;options.height=height}else{options=width}options=SC.Helper.merge(options,{location:1,left:window.screenX+(window.outerWidth-options.width)/2,top:window.screenY+(window.outerHeight-options.height)/2,toolbar:"no",scrollbars:"yes"});return window.open(url,options.name,this._optionsToString(options))},_optionsToString:function(options){var k,optionsArray,v;optionsArray=[];for(k in options){if(!__hasProp.call(options,k))continue;v=options[k];optionsArray.push(k+"="+v)}return optionsArray.join(", ")},attachLoadEvent:function(element,func){if(element.addEventListener){return element.addEventListener("load",func,false)}else{return element.onreadystatechange=function(){if(this.readyState==="complete"){return func()}}}},millisecondsToHMS:function(ms){var hms,m,mPrefix,sPrefix,tc;hms={h:Math.floor(ms/(60*60*1e3)),m:Math.floor(ms/6e4%60),s:Math.floor(ms/1e3%60)};tc=[];if(hms.h>0){tc.push(hms.h)}m=hms.m;mPrefix="";sPrefix="";if(hms.m<10&&hms.h>0){mPrefix="0"}if(hms.s<10){sPrefix="0"}tc.push(mPrefix+hms.m);tc.push(sPrefix+hms.s);return tc.join(".")},setFlashStatusCodeMaps:function(query){query["_status_code_map[400]"]=200;query["_status_code_map[401]"]=200;query["_status_code_map[403]"]=200;query["_status_code_map[404]"]=200;query["_status_code_map[422]"]=200;query["_status_code_map[500]"]=200;query["_status_code_map[503]"]=200;return query["_status_code_map[504]"]=200},responseHandler:function(responseText,xhr){var error,json;json=SC.Helper.JSON.parse(responseText);error=null;if(!json){if(xhr){error={message:"HTTP Error: "+xhr.status}}else{error={message:"Unknown error"}}}else if(json.errors){error={message:json.errors&&json.errors[0].error_message}}return{json:json,error:error}},FakeStorage:function(){return{_store:{},getItem:function(key){return this._store[key]||null},setItem:function(key,value){return this._store[key]=value.toString()},removeItem:function(key){return delete this._store[key]}}},JSON:{parse:function(string){if(string[0]!=="{"&&string[0]!=="["){return null}else if(window.JSON!=null){return window.JSON.parse(string)}else{return eval(string)}}}};window.SC=SC.Helper.merge(SC||{},{_version:"2.0.0",_baseUrl:"//connect.soundcloud.com",options:{site:"soundcloud.com",baseUrl:"//connect.soundcloud.com"},connectCallbacks:{},_popupWindow:void 0,initialize:function(options){var key,value,_base;if(options==null){options={}}this.accessToken(options["access_token"]);for(key in options){if(!__hasProp.call(options,key))continue;value=options[key];this.options[key]=value}(_base=this.options).flashXHR||(_base.flashXHR=(new XMLHttpRequest).withCredentials===void 0);return this},hostname:function(subdomain){var str;str="";if(subdomain!=null){str+=subdomain+"."}str+=this.options.site;return str}});window.SC=SC.Helper.merge(SC||{},{_apiRequest:function(method,path,query,callback){var data,uri;if(callback==null){callback=query;query=void 0}query||(query={});uri=SC.prepareRequestURI(path,query);uri.query.format="json";if(SC.options.flashXHR){SC.Helper.setFlashStatusCodeMaps(uri.query)}else{uri.query["_status_code_map[302]"]=200}if(method==="PUT"||method==="DELETE"){uri.query._method=method;method="POST"}if(method!=="GET"){data=uri.encodeParams(uri.query);uri.query={}}return this._request(method,uri,"application/x-www-form-urlencoded",data,function(responseText,xhr){var response;response=SC.Helper.responseHandler(responseText,xhr);if(response.json&&response.json.status==="302 - Found"){return SC._apiRequest("GET",response.json.location,callback)}else{return callback(response.json,response.error)}})},_request:function(method,uri,contentType,data,callback){if(SC.options.flashXHR){return this._flashRequest(method,uri,contentType,data,callback)}else{return this._xhrRequest(method,uri,contentType,data,callback)}},_xhrRequest:function(method,uri,contentType,data,callback){var request;request=new XMLHttpRequest;request.open(method,uri.toString(),true);request.setRequestHeader("Content-Type",contentType);request.onreadystatechange=function(e){if(e.target.readyState===4){return callback(e.target.responseText,e.target)}};return request.send(data)},_flashRequest:function(method,uri,contentType,data,callback){return this.whenRecordingReady(function(){return Recorder.request(method,uri.toString(),contentType,data,function(data,xhr){return callback(Recorder._externalInterfaceDecode(data),xhr)})})},post:function(path,query,callback){return this._apiRequest("POST",path,query,callback)},put:function(path,query,callback){return this._apiRequest("PUT",path,query,callback)},get:function(path,query,callback){return this._apiRequest("GET",path,query,callback)},"delete":function(path,callback){return this._apiRequest("DELETE",path,{},callback)},prepareRequestURI:function(path,query){var k,uri,v;if(query==null){query={}}uri=new SC.URI(path,{decodeQuery:true});for(k in query){if(!__hasProp.call(query,k))continue;v=query[k];uri.query[k]=v}if(uri.isRelative()){uri.host=this.hostname("api");uri.scheme=window.location.protocol.slice(0,-1)}if(this.accessToken()!=null){uri.query.oauth_token=this.accessToken();uri.scheme="https"}else{uri.query.client_id=this.options.client_id}return uri},_getAll:function(path,query,callback,collection){if(collection==null){collection=[]}if(callback==null){callback=query;query=void 0}query||(query={});query.offset||(query.offset=0);query.limit||(query.limit=50);return this.get(path,query,function(objects,error){if(objects.constructor===Array&&objects.length>0){collection=SC.Helper.merge(collection,objects);query.offset+=query.limit;return SC._getAll(path,query,callback,collection)}else{return callback(collection,null)}})}});window.SC=SC.Helper.merge(SC||{},{_connectWindow:null,connect:function(optionsOrCallback){var dialog,dialogOptions,options;if(typeof optionsOrCallback==="function"){options={connected:optionsOrCallback}}else{options=optionsOrCallback}dialogOptions={client_id:options.client_id||SC.options.client_id,redirect_uri:options.redirect_uri||SC.options.redirect_uri,response_type:"code_and_token",scope:options.scope||"non-expiring",display:"popup",window:options.window,retainWindow:options.retainWindow};if(dialogOptions.client_id&&dialogOptions.redirect_uri){dialog=SC.dialog(SC.Dialog.CONNECT,dialogOptions,function(params){if(params.error!=null){throw new Error("SC OAuth2 Error: "+params.error_description)}else{SC.accessToken(params.access_token);if(options.connected!=null){options.connected()}}if(options.callback!=null){return options.callback()}});this._connectWindow=dialog.options.window;return dialog}else{throw"Options client_id and redirect_uri must be passed"}},connectCallback:function(){return SC.Dialog._handleDialogReturn(SC._connectWindow)},disconnect:function(){return this.accessToken(null)},_trigger:function(eventName,argument){if(this.connectCallbacks[eventName]!=null){return this.connectCallbacks[eventName](argument)}},accessToken:function(value){var storage,storageKey;storageKey="SC.accessToken";storage=this.storage();if(value===void 0){return storage.getItem(storageKey)}else if(value===null){return storage.removeItem(storageKey)}else{return storage.setItem(storageKey,value)}},isConnected:function(){return this.accessToken()!=null}});window.SC=SC.Helper.merge(SC||{},{_dialogsPath:"/dialogs",dialog:function(dialogName,optionsOrCallback,callback){var a,dialog,options;a=SC.Helper.extractOptionsAndCallbackArguments(optionsOrCallback,callback);options=a.options;callback=a.callback;options.callback=callback;options.redirect_uri=this.options.redirect_uri;dialog=new SC.Dialog[dialogName+"Dialog"](options);SC.Dialog._dialogs[dialog.id]=dialog;dialog.open();return dialog},Dialog:{ECHO:"Echo",CONNECT:"Connect",PICKER:"Picker",ID_PREFIX:"SoundCloud_Dialog",_dialogs:{},_isDialogId:function(id){return(id||"").match(new RegExp("^"+this.ID_PREFIX))},_getDialogIdFromWindow:function(window){var id,loc;loc=new SC.URI(window.location,{decodeQuery:true,decodeFragment:true});id=loc.query.state||loc.fragment.state;if(this._isDialogId(id)){return id}else{return null}},_handleDialogReturn:function(window){var dialog,dialogId;dialogId=this._getDialogIdFromWindow(window);dialog=this._dialogs[dialogId];if(dialog!=null){if(dialog.handleReturn()){return delete this._dialogs[dialogId]}}},_handleInPopupContext:function(){var isiOS5;if(this._getDialogIdFromWindow(window)&&!window.location.pathname.match(/\/dialogs\//)){isiOS5=navigator.userAgent.match(/OS 5(_\d)+ like Mac OS X/i);if(isiOS5){return window.opener.SC.Dialog._handleDialogReturn(window)}else if(window.opener){return window.opener.setTimeout(function(){return window.opener.SC.Dialog._handleDialogReturn(window)},1)}else if(window.top){return window.top.setTimeout(function(){return window.top.SC.Dialog._handleDialogReturn(window)},1)}}},AbstractDialog:AbstractDialog=function(){AbstractDialog.prototype.WIDTH=456;AbstractDialog.prototype.HEIGHT=510;AbstractDialog.prototype.ID_PREFIX="SoundCloud_Dialog";AbstractDialog.prototype.PARAM_KEYS=["redirect_uri"];AbstractDialog.prototype.requiresAuthentication=false;AbstractDialog.prototype.generateId=function(){return[this.ID_PREFIX,Math.ceil(Math.random()*1e6).toString(16)].join("_")};function AbstractDialog(options){this.options=options!=null?options:{};this.id=this.generateId()}AbstractDialog.prototype.buildURI=function(uri){var paramKey,_i,_len,_ref;if(uri==null){uri=new SC.URI(SC._baseUrl)}uri.scheme=window.location.protocol.slice(0,-1);uri.path+=SC._dialogsPath+"/"+this.name+"/";uri.fragment={state:this.id};if(this.requiresAuthentication){uri.fragment.access_token=SC.accessToken()}_ref=this.PARAM_KEYS;for(_i=0,_len=_ref.length;_i<_len;_i++){paramKey=_ref[_i];if(this.options[paramKey]!=null){uri.fragment[paramKey]=this.options[paramKey]}}uri.port=null;return uri};AbstractDialog.prototype.open=function(){var url;if(this.requiresAuthentication&&SC.accessToken()==null){return this.authenticateAndOpen()}else{url=this.buildURI();if(this.options.window!=null){return this.options.window.location=url}else{return this.options.window=SC.Helper.openCenteredPopup(url,{width:this.WIDTH,height:this.HEIGHT})}}};AbstractDialog.prototype.authenticateAndOpen=function(){var connectDialog,_this=this;return connectDialog=SC.connect({retainWindow:true,window:this.options.window,connected:function(){_this.options.window=connectDialog.options.window;return _this.open()}})};AbstractDialog.prototype.paramsFromWindow=function(){var params,url;url=new SC.URI(this.options.window.location,{decodeFragment:true,decodeQuery:true});return params=SC.Helper.merge(url.query,url.fragment)};AbstractDialog.prototype.handleReturn=function(){var params;params=this.paramsFromWindow();if(!this.options.retainWindow){this.options.window.close()}return this.options.callback(params)};return AbstractDialog}(),EchoDialog:EchoDialog=function(_super){__extends(EchoDialog,_super);function EchoDialog(){_ref=EchoDialog.__super__.constructor.apply(this,arguments);return _ref}EchoDialog.prototype.PARAM_KEYS=["client_id","redirect_uri","hello"];EchoDialog.prototype.name="echo";return EchoDialog}(AbstractDialog),PickerDialog:PickerDialog=function(_super){__extends(PickerDialog,_super);
function PickerDialog(){_ref1=PickerDialog.__super__.constructor.apply(this,arguments);return _ref1}PickerDialog.prototype.PARAM_KEYS=["client_id","redirect_uri"];PickerDialog.prototype.name="picker";PickerDialog.prototype.requiresAuthentication=true;PickerDialog.prototype.handleReturn=function(){var params,_this=this;params=this.paramsFromWindow();if(params.action==="logout"){SC.accessToken(null);this.open();return false}else if(params.track_uri!=null){if(!this.options.retainWindow){this.options.window.close()}SC.get(params.track_uri,function(track){return _this.options.callback({track:track})});return true}};return PickerDialog}(AbstractDialog),ConnectDialog:ConnectDialog=function(_super){__extends(ConnectDialog,_super);function ConnectDialog(){_ref2=ConnectDialog.__super__.constructor.apply(this,arguments);return _ref2}ConnectDialog.prototype.PARAM_KEYS=["client_id","redirect_uri","client_secret","response_type","scope","display"];ConnectDialog.prototype.name="connect";ConnectDialog.prototype.buildURI=function(){var uri;uri=ConnectDialog.__super__.buildURI.apply(this,arguments);uri.scheme="https";uri.host="soundcloud.com";uri.path="/connect";uri.query=uri.fragment;uri.fragment={};return uri};return ConnectDialog}(AbstractDialog)}});SC.Dialog._handleInPopupContext();window.SC=SC.Helper.merge(SC||{},{Loader:{States:{UNLOADED:1,LOADING:2,READY:3},Package:function(name,loadFunction){return{name:name,callbacks:[],loadFunction:loadFunction,state:SC.Loader.States.UNLOADED,addCallback:function(fn){return this.callbacks.push(fn)},runCallbacks:function(){var callback,_i,_len,_ref3;_ref3=this.callbacks;for(_i=0,_len=_ref3.length;_i<_len;_i++){callback=_ref3[_i];callback.apply(this)}return this.callbacks=[]},setReady:function(){this.state=SC.Loader.States.READY;return this.runCallbacks()},load:function(){this.state=SC.Loader.States.LOADING;return this.loadFunction.apply(this)},whenReady:function(callback){switch(this.state){case SC.Loader.States.UNLOADED:this.addCallback(callback);return this.load();case SC.Loader.States.LOADING:return this.addCallback(callback);case SC.Loader.States.READY:return callback()}}}},packages:{},registerPackage:function(pkg){return this.packages[pkg.name]=pkg}}});window.SC=SC.Helper.merge(SC||{},{oEmbed:function(trackUrl,query,callback){var element,uri,_this=this;if(callback==null){callback=query;query=void 0}query||(query={});query.url=trackUrl;uri=new SC.URI(window.location.protocol+"//"+SC.hostname()+"/oembed.json");uri.query=query;if(callback.nodeType!==void 0&&callback.nodeType===1){element=callback;callback=function(oembed){return element.innerHTML=oembed.html}}return this._request("GET",uri.toString(),null,null,function(responseText,xhr){var response;response=SC.Helper.responseHandler(responseText,xhr);return callback(response.json,response.error)})}});window.SC=SC.Helper.merge(SC||{},{_recorderSwfPath:"/recorder.js/recorder-0.9.0.swf",whenRecordingReady:function(callback){return SC.Loader.packages.recording.whenReady(callback)},record:function(options){if(options==null){options={}}return this.whenRecordingReady(function(){return Recorder.record(options)})},recordStop:function(options){if(options==null){options={}}return Recorder.stop()},recordPlay:function(options){if(options==null){options={}}return Recorder.play(options)},recordUpload:function(query,callback){var flattenedParams,uri;if(query==null){query={}}uri=SC.prepareRequestURI("/tracks",query);uri.query.format="json";SC.Helper.setFlashStatusCodeMaps(uri.query);flattenedParams=uri.flattenParams(uri.query);return Recorder.upload({method:"POST",url:"https://"+this.hostname("api")+"/tracks",audioParam:"track[asset_data]",params:flattenedParams,success:function(responseText){var response;response=SC.Helper.responseHandler(responseText);return callback(response.json,response.error)}})}});SC.Loader.registerPackage(new SC.Loader.Package("recording",function(){if(Recorder.flashInterface()){return SC.Loader.packages.recording.setReady()}else{return Recorder.initialize({swfSrc:SC._baseUrl+SC._recorderSwfPath+"?"+SC._version,initialized:function(){return SC.Loader.packages.recording.setReady()}})}}));window.SC=SC.Helper.merge(SC||{},{storage:function(){return this._fakeStorage||(this._fakeStorage=new SC.Helper.FakeStorage)}});Player=function(){function Player(_player){this._player=_player}Player.prototype.play=function(position){if(this._player.getState()==="loading"||this._player.getState()==="initialize"){return this._player.on("stateChange",function(state){if(state==="idle"){return this.play()}})}else{return this._player.play()}};Player.prototype.stop=function(){this._player.pause();return this._player.seek(0)};Player.prototype.pause=function(){return this._player.pause()};Player.prototype.seek=function(ms){return this._player.seek(ms)};Player.prototype.setVolume=function(volume){return this._player.setVolume(volume)};Player.prototype.getVolume=function(){return this._player.getVolume()};Player.prototype.getType=function(){return this._player.getType()};Player.prototype.getCurrentPosition=function(){return this._player.getCurrentPosition()};Player.prototype.getLoadedPosition=function(){return this._player.getLoadedPosition()};Player.prototype.getDuration=function(){return this._player.getDuration()};Player.prototype.getState=function(){return this._player.getState()};return Player}();window.SC=SC.Helper.merge(SC||{},{whenStreamingReady:function(callback){return SC.Loader.packages.streaming.whenReady(callback)},_isNumeric:function(idOrUrl){return idOrUrl.toString().match(/^\d.*$/)},_prepareTrackUrl:function(idOrUrl){var preparedUrl,url;url=this._isNumeric(idOrUrl)?"/tracks/"+idOrUrl:idOrUrl;preparedUrl=SC.prepareRequestURI(url);return preparedUrl.toString()},_prepareStreamUrl:function(idOrUrl){var preparedUrl,url;url=this._isNumeric(idOrUrl)?"/tracks/"+idOrUrl:idOrUrl;preparedUrl=SC.prepareRequestURI(url);if(!preparedUrl.path.match(/\/stream/)){preparedUrl.path+="/streams"}return preparedUrl.toString()},_setOnPositionListenersForComments:function(player,comments,callback){var group;group=SC.Helper.groupBy(comments,"timestamp");return player._player.on("positionChange",function(current,loaded,duration){var collection,key,_i,_len,_ref3;collection=[];_ref3=Object.keys(group);for(_i=0,_len=_ref3.length;_i<_len;_i++){key=_ref3[_i];if(key>parseInt(current,10)){break}collection.push(group[key]);delete group[key]}collection=[].concat.apply([],collection);return callback(collection)})},stream:function(idOrUrl,optionsOrCallback,callback){var a,options,stream_url,track_url;a=SC.Helper.extractOptionsAndCallbackArguments(optionsOrCallback,callback);options=a.options;callback=a.callback;options.id="T"+idOrUrl+"-"+Math.random();track_url=this._prepareTrackUrl(idOrUrl);stream_url=this._prepareStreamUrl(idOrUrl);return SC.whenStreamingReady(function(){return SC.get(track_url,function(track){options.duration=track.duration;return SC.get(stream_url,function(streams){var createAndCallback,ontimedcommentsCallback,_this=this;options.src=streams.http_mp3_128_url||streams.rtmp_mp3_128_url;createAndCallback=function(options){var player;player=new Player(audioManager.createAudioPlayer(options));if(callback!=null){callback(player)}return player};if(ontimedcommentsCallback=options.ontimedcomments){delete options.ontimedcomments;return SC._getAll(track_url+"/comments",function(comments){var player;player=createAndCallback(options);return SC._setOnPositionListenersForComments(player,comments,ontimedcommentsCallback)})}else{return createAndCallback(options)}})})})},streamStopAll:function(){var player,_i,_len,_ref3,_results;if(window.audioManager!=null){_ref3=window.audioManager._players;_results=[];for(_i=0,_len=_ref3.length;_i<_len;_i++){player=_ref3[_i];player.pause();_results.push(player.seek(0))}return _results}}});SC.Loader.registerPackage(new SC.Loader.Package("streaming",function(){var audioManagerURL;if(window.audioManager!=null){return SC.Loader.packages.streaming.setReady()}else{audioManagerURL=SC._baseUrl+"/audiomanager";return SC.Helper.loadJavascript(audioManagerURL+"/audiomanager.js",function(){window.audioManager=new AudioManager({flashAudioPath:SC._baseUrl+"/audiomanager/flashAudio.swf"});return SC.Loader.packages.streaming.setReady()})}}))}.call(this);

/*! Audio Manager */
(function(root,factory){if(typeof module!=="undefined"&&module.exports){module.exports=factory()}else{root.AudioManager=factory()}})(this,function(){var requirejs,require,define;(function(undef){var main,req,makeMap,handlers,defined={},waiting={},config={},defining={},hasOwn=Object.prototype.hasOwnProperty,aps=[].slice;function hasProp(obj,prop){return hasOwn.call(obj,prop)}function normalize(name,baseName){var nameParts,nameSegment,mapValue,foundMap,foundI,foundStarMap,starI,i,j,part,baseParts=baseName&&baseName.split("/"),map=config.map,starMap=map&&map["*"]||{};if(name&&name.charAt(0)==="."){if(baseName){baseParts=baseParts.slice(0,baseParts.length-1);name=baseParts.concat(name.split("/"));for(i=0;i<name.length;i+=1){part=name[i];if(part==="."){name.splice(i,1);i-=1}else if(part===".."){if(i===1&&(name[2]===".."||name[0]==="..")){break}else if(i>0){name.splice(i-1,2);i-=2}}}name=name.join("/")}else if(name.indexOf("./")===0){name=name.substring(2)}}if((baseParts||starMap)&&map){nameParts=name.split("/");for(i=nameParts.length;i>0;i-=1){nameSegment=nameParts.slice(0,i).join("/");if(baseParts){for(j=baseParts.length;j>0;j-=1){mapValue=map[baseParts.slice(0,j).join("/")];if(mapValue){mapValue=mapValue[nameSegment];if(mapValue){foundMap=mapValue;foundI=i;break}}}}if(foundMap){break}if(!foundStarMap&&starMap&&starMap[nameSegment]){foundStarMap=starMap[nameSegment];starI=i}}if(!foundMap&&foundStarMap){foundMap=foundStarMap;foundI=starI}if(foundMap){nameParts.splice(0,foundI,foundMap);name=nameParts.join("/")}}return name}function makeRequire(relName,forceSync){return function(){return req.apply(undef,aps.call(arguments,0).concat([relName,forceSync]))}}function makeNormalize(relName){return function(name){return normalize(name,relName)}}function makeLoad(depName){return function(value){defined[depName]=value}}function callDep(name){if(hasProp(waiting,name)){var args=waiting[name];delete waiting[name];defining[name]=true;main.apply(undef,args)}if(!hasProp(defined,name)&&!hasProp(defining,name)){throw new Error("No "+name)}return defined[name]}function splitPrefix(name){var prefix,index=name?name.indexOf("!"):-1;if(index>-1){prefix=name.substring(0,index);name=name.substring(index+1,name.length)}return[prefix,name]}makeMap=function(name,relName){var plugin,parts=splitPrefix(name),prefix=parts[0];name=parts[1];if(prefix){prefix=normalize(prefix,relName);plugin=callDep(prefix)}if(prefix){if(plugin&&plugin.normalize){name=plugin.normalize(name,makeNormalize(relName))}else{name=normalize(name,relName)}}else{name=normalize(name,relName);parts=splitPrefix(name);prefix=parts[0];name=parts[1];if(prefix){plugin=callDep(prefix)}}return{f:prefix?prefix+"!"+name:name,n:name,pr:prefix,p:plugin}};function makeConfig(name){return function(){return config&&config.config&&config.config[name]||{}}}handlers={require:function(name){return makeRequire(name)},exports:function(name){var e=defined[name];if(typeof e!=="undefined"){return e}else{return defined[name]={}}},module:function(name){return{id:name,uri:"",exports:defined[name],config:makeConfig(name)}}};main=function(name,deps,callback,relName){var cjsModule,depName,ret,map,i,args=[],usingExports;relName=relName||name;if(typeof callback==="function"){deps=!deps.length&&callback.length?["require","exports","module"]:deps;for(i=0;i<deps.length;i+=1){map=makeMap(deps[i],relName);depName=map.f;if(depName==="require"){args[i]=handlers.require(name)}else if(depName==="exports"){args[i]=handlers.exports(name);usingExports=true}else if(depName==="module"){cjsModule=args[i]=handlers.module(name)}else if(hasProp(defined,depName)||hasProp(waiting,depName)||hasProp(defining,depName)){args[i]=callDep(depName)}else if(map.p){map.p.load(map.n,makeRequire(relName,true),makeLoad(depName),{});args[i]=defined[depName]}else{throw new Error(name+" missing "+depName)}}ret=callback.apply(defined[name],args);if(name){if(cjsModule&&cjsModule.exports!==undef&&cjsModule.exports!==defined[name]){defined[name]=cjsModule.exports}else if(ret!==undef||!usingExports){defined[name]=ret}}}else if(name){defined[name]=callback}};requirejs=require=req=function(deps,callback,relName,forceSync,alt){if(typeof deps==="string"){if(handlers[deps]){return handlers[deps](callback)}return callDep(makeMap(deps,callback).f)}else if(!deps.splice){config=deps;if(callback.splice){deps=callback;callback=relName;relName=null}else{deps=undef}}callback=callback||function(){};if(typeof relName==="function"){relName=forceSync;forceSync=alt}if(forceSync){main(undef,deps,callback,relName)}else{setTimeout(function(){main(undef,deps,callback,relName)},4)}return req};req.config=function(cfg){config=cfg;if(config.deps){req(config.deps,config.callback)}return req};define=function(name,deps,callback){if(!deps.splice){callback=deps;deps=[]}if(!hasProp(defined,name)&&!hasProp(waiting,name)){waiting[name]=[name,deps,callback]}};define.amd={jQuery:true}})();define("vendor/almond",function(){});!function(n){function t(n){return typeof n.toString!="function"&&typeof(n+"")=="string"}function r(){}function e(n){n.length=0,v.length<O&&v.push(n)}function o(n){var t=n.k;t&&o(t),n.b=n.k=n.object=n.number=n.string=null,d.length<O&&d.push(n)}function u(){}function a(n,t,r){function e(){var f=arguments,l=u?this:t;return o||(n=t[a]),r.length&&(f=f.length?(f=W.call(f),c?f.concat(r):r.concat(f)):r),this instanceof e?(l=i(n.prototype),f=n.apply(l,f),g(f)?f:l):n.apply(l,f)}var o=p(n),u=!r,a=t;if(u){var c=void 0;r=t}else if(!o)throw new TypeError;return e}function c(){var n=d.pop()||{a:"",b:null,c:"",k:null,"false":!1,d:"",e:"",f:"","null":!1,number:null,object:null,push:null,g:null,string:null,h:"","true":!1,undefined:!1,i:!1,j:!1};n.g=w,n.b=n.c=n.f=n.h="",n.e="r",n.i=!0,n.j=!!et;for(var t,r=0;t=arguments[r];r++)for(var e in t)n[e]=t[e];r=n.a,n.d=/^[^,]+/.exec(r)[0],t=Function,r="return function("+r+"){",e="var m,r="+n.d+",C="+n.e+";if(!r)return C;"+n.h+";",n.b?(e+="var s=r.length;m=-1;if("+n.b+"){",Z.unindexedChars&&(e+="if(q(r)){r=r.split('')}"),e+="while(++m<s){"+n.f+";}}else{"):Z.nonEnumArgs&&(e+="var s=r.length;m=-1;if(s&&n(r)){while(++m<s){m+='';"+n.f+";}}else{"),Z.enumPrototypes&&(e+="var E=typeof r=='function';"),Z.enumErrorProps&&(e+="var D=r===j||r instanceof Error;");var a=[];if(Z.enumPrototypes&&a.push('!(E&&m=="prototype")'),Z.enumErrorProps&&a.push('!(D&&(m=="message"||m=="name"))'),n.i&&n.j)e+="var A=-1,B=z[typeof r]&&t(r),s=B?B.length:0;while(++A<s){m=B[A];",a.length&&(e+="if("+a.join("&&")+"){"),e+=n.f+";",a.length&&(e+="}"),e+="}";else if(e+="for(m in r){",n.i&&a.push("l.call(r, m)"),a.length&&(e+="if("+a.join("&&")+"){"),e+=n.f+";",a.length&&(e+="}"),e+="}",Z.nonEnumShadows){for(e+="if(r!==y){var h=r.constructor,p=r===(h&&h.prototype),e=r===H?G:r===j?i:J.call(r),v=w[e];",k=0;7>k;k++)e+="m='"+n.g[k]+"';if((!(p&&v[m])&&l.call(r,m))",n.i||(e+="||(!v[m]&&r[m]!==y[m])"),e+="){"+n.f+"}";e+="}"}return(n.b||Z.nonEnumArgs)&&(e+="}"),e+=n.c+";return C",t=t("i,j,l,n,o,q,t,u,y,z,w,G,H,J",r+e+"}"),o(n),t(P,$,L,f,tt,h,et,u,N,q,Y,z,G,T)}function i(n){return g(n)?K(n):{}}function f(n){return T.call(n)==A}function l(n){var t=[];return ut(n,function(n,r){p(n)&&t.push(r)}),t.sort()}function s(n,r,o,a,c,i){var l=o===E;if(typeof o=="function"&&!l){o=u.createCallback(o,a,2);var g=o(n,r);if(typeof g!="undefined")return!!g}if(n===r)return 0!==n||1/n==1/r;var h=typeof n,m=typeof r;if(n===n&&(!n||"function"!=h&&"object"!=h)&&(!r||"function"!=m&&"object"!=m))return!1;if(null==n||null==r)return n===r;if(m=T.call(n),h=T.call(r),m==A&&(m=B),h==A&&(h=B),m!=h)return!1;switch(m){case S:case x:return+n==+r;case I:return n!=+n?r!=+r:0==n?1/n==1/r:n==+r;case F:case z:return n==r+""}if(h=m==_,!h){if(L.call(n,"__wrapped__")||L.call(r,"__wrapped__"))return s(n.__wrapped__||n,r.__wrapped__||r,o,a,c,i);if(m!=B||!Z.nodeClass&&(t(n)||t(r)))return!1;var m=!Z.argsObject&&f(n)?Object:n.constructor,y=!Z.argsObject&&f(r)?Object:r.constructor;if(m!=y&&!(p(m)&&m instanceof m&&p(y)&&y instanceof y))return!1}for(y=!c,c||(c=v.pop()||[]),i||(i=v.pop()||[]),m=c.length;m--;)if(c[m]==n)return i[m]==r;var b=0,g=!0;if(c.push(n),i.push(r),h){if(m=n.length,b=r.length,g=b==n.length,!g&&!l)return g;for(;b--;)if(h=m,y=r[b],l)for(;h--&&!(g=s(n[h],y,o,a,c,i)););else if(!(g=s(n[b],y,o,a,c,i)))break;return g}return ut(r,function(t,r,e){return L.call(e,r)?(b++,g=L.call(n,r)&&s(n[r],t,o,a,c,i)):void 0}),g&&!l&&ut(n,function(n,t,r){return L.call(r,t)?g=-1<--b:void 0}),y&&(e(c),e(i)),g}function p(n){return typeof n=="function"}function g(n){return!(!n||!q[typeof n])}function h(n){return typeof n=="string"||T.call(n)==z}function m(n,t,r){if(t&&typeof r=="undefined"&&tt(n)){r=-1;for(var e=n.length;++r<e&&false!==t(n[r],r,n););}else ot(n,t,r);return n}function y(n,t){return Z.fastBind||V&&2<arguments.length?V.call.apply(V,arguments):a(n,t,W.call(arguments,2))}function b(n){return n}var v=[],d=[],j=0,E={},O=40,C=(C=/\bthis\b/)&&C.test(function(){return this})&&C,w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),A="[object Arguments]",_="[object Array]",S="[object Boolean]",x="[object Date]",P="[object Error]",I="[object Number]",B="[object Object]",F="[object RegExp]",z="[object String]",q={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},D=q[typeof global]&&global;!D||D.global!==D&&D.window!==D||(n=D);var R=[],$=Error.prototype,N=Object.prototype,G=String.prototype,D=RegExp("^"+(N.valueOf+"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),H=R.concat,J=Function.prototype.toString,L=N.hasOwnProperty,M=N.propertyIsEnumerable,T=N.toString,V=D.test(V=T.bind)&&V,K=D.test(K=Object.create)&&K,Q=D.test(Q=Array.isArray)&&Q,U=D.test(U=Object.keys)&&U,W=R.slice;n=D.test(n.attachEvent);var X=V&&!/\n|true/.test(V+n),Y={};Y[_]=Y[x]=Y[I]={constructor:!0,toLocaleString:!0,toString:!0,valueOf:!0},Y[S]=Y[z]={constructor:!0,toString:!0,valueOf:!0},Y[P]=Y["[object Function]"]=Y[F]={constructor:!0,toString:!0},Y[B]={constructor:!0},function(){for(var n=w.length;n--;){var t,r=w[n];for(t in Y)L.call(Y,t)&&!L.call(Y[t],r)&&(Y[t][r]=!1)}}();var Z=u.support={};!function(){function n(){this.x=1}var t=[];n.prototype={valueOf:1};for(var r in new n)t.push(r);for(r in arguments);Z.argsObject=arguments.constructor==Object&&!(arguments instanceof Array),Z.argsClass=f(arguments),Z.enumErrorProps=M.call($,"message")||M.call($,"name"),Z.enumPrototypes=M.call(n,"prototype"),Z.fastBind=V&&!X,Z.nonEnumArgs=0!=r,Z.nonEnumShadows=!/valueOf/.test(t),Z.unindexedChars="xx"!="x"[0]+Object("x")[0];try{Z.nodeClass=!(T.call(document)==B&&!({toString:0}+""))}catch(e){Z.nodeClass=!0}}(1);var nt={a:"x,F,k",h:"var a=arguments,b=0,c=typeof k=='number'?2:a.length;while(++b<c){r=a[b];if(r&&z[typeof r]){",f:"if(typeof C[m]=='undefined')C[m]=r[m]",c:"}}"};n={a:"f,d,I",h:"d=d&&typeof I=='undefined'?d:u.createCallback(d,I)",b:"typeof s=='number'",f:"if(d(r[m],m,f)===false)return C"},D={h:"if(!z[typeof r])return C;"+n.h,b:!1},K||(i=function(n){if(g(n)){r.prototype=n;var t=new r;r.prototype=null}return t||{}}),Z.argsClass||(f=function(n){return n?L.call(n,"callee"):!1});var tt=Q||function(n){return n?typeof n=="object"&&T.call(n)==_:!1},rt=c({a:"x",e:"[]",h:"if(!(z[typeof x]))return C",f:"C.push(m)"}),et=U?function(n){return g(n)?Z.enumPrototypes&&typeof n=="function"||Z.nonEnumArgs&&n.length&&f(n)?rt(n):U(n):[]}:rt,ot=c(n),Q=c(nt,{h:nt.h.replace(";",";if(c>3&&typeof a[c-2]=='function'){var d=u.createCallback(a[--c-1],a[c--],2)}else if(c>2&&typeof a[c-1]=='function'){d=a[--c]}"),f:"C[m]=d?d(C[m],r[m]):r[m]"}),nt=c(nt),ut=c(n,D,{i:!1});p(/x/)&&(p=function(n){return typeof n=="function"&&"[object Function]"==T.call(n)}),u.assign=Q,u.bind=y,u.bindAll=function(n){for(var t=1<arguments.length?H.apply(R,W.call(arguments,1)):l(n),r=-1,e=t.length;++r<e;){var o=t[r];n[o]=y(n[o],n)}return n},u.createCallback=function(n,t,r){if(null==n)return b;var e=typeof n;if("function"!=e){if("object"!=e)return function(t){return t[n]};var o=et(n);return function(t){for(var r=o.length,e=!1;r--&&(e=s(t[o[r]],n[o[r]],E)););return e}}return typeof t=="undefined"||C&&!C.test(J.call(n))?n:1===r?function(r){return n.call(t,r)}:2===r?function(r,e){return n.call(t,r,e)}:4===r?function(r,e,o,u){return n.call(t,r,e,o,u)}:function(r,e,o){return n.call(t,r,e,o)}},u.defaults=nt,u.forEach=m,u.forIn=ut,u.functions=l,u.invoke=function(n,t){var r=W.call(arguments,2),e=-1,o=typeof t=="function",u=n?n.length:0,a=Array(typeof u=="number"?u:0);return m(n,function(n){a[++e]=(o?t:n[t]).apply(n,r)}),a},u.keys=et,u.once=function(n){var t,r;return function(){return t?r:(t=!0,r=n.apply(this,arguments),n=null,r)}},u.values=function(n){for(var t=-1,r=et(n),e=r.length,o=Array(e);++t<e;)o[t]=n[r[t]];return o},u.each=m,u.extend=Q,u.methods=l,u.identity=b,u.isArguments=f,u.isArray=tt,u.isEqual=s,u.isFunction=p,u.isObject=g,u.isString=h,u.uniqueId=function(n){var t=++j;return(null==n?"":n)+""+t},u.VERSION="1.3.1",typeof define=="function"&&typeof define.amd=="object"&&define.amd&&define("underscore",[],function(){return u})}(this);define("browserutils",{supportHTML5Audio:function(){var testAudio;try{if(window.HTMLAudioElement&&typeof Audio!=="undefined"){testAudio=new Audio;return true}}catch(e){return false}},supportSourceSwappingWithPreload:function(){return/Firefox/i.test(navigator.userAgent)},isMobile:function(type){var uA=window.navigator.userAgent,devices=["mobile","iPhone","iPad","iPod","Android","Skyfire"];return devices.some(function(device){device=new RegExp(device,"i");return device.test(uA)})},canPlayType:function(type){var audio=document.createElement("audio");if(!audio||!audio.canPlayType){return false}else{return audio.canPlayType(type).match(/maybe|probably/i)?true:false}},isNativeHlsSupported:function(){var ua=navigator.userAgent,devices=["iPhone","iPad","iPod"],check,desktopSafari,iOS;check=function(r){return r.test(ua)};desktopSafari=!check(/chrome/i)&&!check(/opera/i)&&check(/safari/i);iOS=devices.some(function(device){return check(new RegExp(device,"i"))});return iOS||desktopSafari}});define("errors",{FLASH_HLS_PLAYLIST_NOT_FOUND:"HLS_PLAYLIST_NOT_FOUND",FLASH_HLS_PLAYLIST_SECURITY_ERROR:"HLS_SECURITY_ERROR",FLASH_HLS_NOT_VALID_PLAYLIST:"HLS_NOT_VALID_PLAYLIST",FLASH_HLS_NO_TS_IN_PLAYLIST:"HLS_NO_TS_IN_PLAYLIST",FLASH_HLS_NO_PLAYLIST_IN_MANIFEST:"HLS_NO_PLAYLIST_IN_MANIFEST",FLASH_HLS_TS_IS_CORRUPT:"HLS_TS_IS_CORRUPT",FLASH_HLS_FLV_TAG_CORRUPT:"HLS_FLV_TAG_CORRUPT",FLASH_HTTP_FILE_NOT_FOUND:"HTTP_FILE_NOT_FOUND",FLASH_RTMP_CONNECT_FAILED:"RTMP_CONNECT_FAILED",FLASH_RTMP_CONNECT_CLOSED:"RTMP_CONNECT_CLOSED",FLASH_RTMP_CANNOT_PLAY_STREAM:"RTMP_CANNOT_PLAY_STREAM",FLASH_PROXY_CANT_LOAD_FLASH:"CANT_LOAD_FLASH",FLASH_PROXY_FLASH_BLOCKED:"FLASH_PROXY_FLASH_BLOCKED",HTML5_AUDIO_ABORTED:"HTML5_AUDIO_ABORTED",HTML5_AUDIO_NETWORK:"HTML5_AUDIO_NETWORK",HTML5_AUDIO_DECODE:"HTML5_AUDIO_DECODE",HTML5_AUDIO_SRC_NOT_SUPPORTED:"HTML5_AUDIO_SRC_NOT_SUPPORTED"});define("vendor/events",["require","exports","module","underscore"],function(require,exports,module){var _=require("underscore");var array=[];var push=array.push;var slice=array.slice;var splice=array.splice;var eventSplitter=/\s+/;var eventsApi=function(obj,action,name,rest){if(!name)return true;if(typeof name==="object"){for(var key in name){obj[action].apply(obj,[key,name[key]].concat(rest))}}else if(eventSplitter.test(name)){var names=name.split(eventSplitter);for(var i=0,l=names.length;i<l;i++){obj[action].apply(obj,[names[i]].concat(rest))}}else{return true}};var triggerEvents=function(events,args){var ev,i=-1,l=events.length;switch(args.length){case 0:while(++i<l){ev=events[i];ev.callback.call(ev.ctx)}return;case 1:while(++i<l)(ev=events[i]).callback.call(ev.ctx,args[0]);return;case 2:while(++i<l)(ev=events[i]).callback.call(ev.ctx,args[0],args[1]);return;case 3:while(++i<l)(ev=events[i]).callback.call(ev.ctx,args[0],args[1],args[2]);return;default:while(++i<l)(ev=events[i]).callback.apply(ev.ctx,args)}};var Events={on:function(name,callback,context){if(!eventsApi(this,"on",name,[callback,context])||!callback)return this;this._events||(this._events={});var events=this._events[name]||(this._events[name]=[]);events.push({callback:callback,context:context,ctx:context||this});return this},once:function(name,callback,context){if(!eventsApi(this,"once",name,[callback,context])||!callback)return this;var self=this;var once=_.once(function(){self.off(name,once);callback.apply(this,arguments)});once._callback=callback;return this.on(name,once,context)},off:function(name,callback,context){var retain,ev,events,names,i,l,j,k;if(!this._events||!eventsApi(this,"off",name,[callback,context]))return this;if(!name&&!callback&&!context){this._events={};return this}names=name?[name]:_.keys(this._events);for(i=0,l=names.length;i<l;i++){name=names[i];if(events=this._events[name]){this._events[name]=retain=[];if(callback||context){for(j=0,k=events.length;j<k;j++){ev=events[j];if(callback&&callback!==ev.callback&&callback!==ev.callback._callback||context&&context!==ev.context){retain.push(ev)}}}if(!retain.length)delete this._events[name]}}return this},trigger:function(name,args){if(!this._events)return this;var args=slice.call(arguments,1);if(!eventsApi(this,"trigger",name,args))return this;var events=this._events[name];var allEvents=this._events.all;if(events)triggerEvents(events,args);if(allEvents)triggerEvents(allEvents,arguments);return this},stopListening:function(obj,name,callback){var listeners=this._listeners;if(!listeners)return this;var deleteListener=!name&&!callback;if(typeof name==="object")callback=this;if(obj)(listeners={})[obj._listenerId]=obj;for(var id in listeners){listeners[id].off(name,callback,this);if(deleteListener)delete this._listeners[id]}return this}};var listenMethods={listenTo:"on",listenToOnce:"once"};_.each(listenMethods,function(implementation,method){Events[method]=function(obj,name,callback){var listeners=this._listeners||(this._listeners={});var id=obj._listenerId||(obj._listenerId=_.uniqueId("l"));listeners[id]=obj;if(typeof name==="object")callback=this;obj[implementation](name,callback,this);return this}});Events.bind=Events.on;Events.unbind=Events.off;module.exports=Events});define("logger",["require","exports","module"],function(require,exports,module){var Logger;module.exports=Logger=function(type,id,settings){this.enabled=settings.debug;this.type=type;this.id=id};Logger.prototype.log=function(message){if(!this.enabled){return}window.console.log("#"+this.type+" "+this.id+"# "+message)}});define("states",{PLAYING:"playing",LOADING:"loading",SEEKING:"seeking",PAUSED:"paused",ERROR:"error",IDLE:"idle",INITIALIZE:"initialize",ENDED:"ended",DEAD:"dead"});define("vendor/swfobject",[],function(){var UNDEF="undefined",OBJECT="object",SHOCKWAVE_FLASH="Shockwave Flash",SHOCKWAVE_FLASH_AX="ShockwaveFlash.ShockwaveFlash",FLASH_MIME_TYPE="application/x-shockwave-flash",EXPRESS_INSTALL_ID="SWFObjectExprInst",ON_READY_STATE_CHANGE="onreadystatechange",win=window,doc=document,nav=navigator,swfobject,plugin=false,domLoadFnArr=[],regObjArr=[],objIdArr=[],listenersArr=[],storedFbContent,storedFbContentId,storedCallbackFn,storedCallbackObj,isDomLoaded=false,isExpressInstallActive=false,dynamicStylesheet,dynamicStylesheetMedia,autoHideShow=true,encodeURI_enabled=false,ua=function(){var w3cdom=typeof doc.getElementById!=UNDEF&&typeof doc.getElementsByTagName!=UNDEF&&typeof doc.createElement!=UNDEF,u=nav.userAgent.toLowerCase(),p=nav.platform.toLowerCase(),windows=p?/win/.test(p):/win/.test(u),mac=p?/mac/.test(p):/mac/.test(u),webkit=/webkit/.test(u)?parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,ie=nav.appName==="Microsoft Internet Explorer",playerVersion=[0,0,0],d=null;if(typeof nav.plugins!=UNDEF&&typeof nav.plugins[SHOCKWAVE_FLASH]==OBJECT){d=nav.plugins[SHOCKWAVE_FLASH].description;if(d&&(typeof nav.mimeTypes!=UNDEF&&nav.mimeTypes[FLASH_MIME_TYPE]&&nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin)){plugin=true;ie=false;d=d.replace(/^.*\s+(\S+\s+\S+$)/,"$1");playerVersion[0]=toInt(d.replace(/^(.*)\..*$/,"$1"));playerVersion[1]=toInt(d.replace(/^.*\.(.*)\s.*$/,"$1"));playerVersion[2]=/[a-zA-Z]/.test(d)?toInt(d.replace(/^.*[a-zA-Z]+(.*)$/,"$1")):0}}else if(typeof win.ActiveXObject!=UNDEF){try{var a=new ActiveXObject(SHOCKWAVE_FLASH_AX);if(a){d=a.GetVariable("$version");if(d){ie=true;d=d.split(" ")[1].split(",");playerVersion=[toInt(d[0]),toInt(d[1]),toInt(d[2])]}}}catch(e){}}return{w3:w3cdom,pv:playerVersion,wk:webkit,ie:ie,win:windows,mac:mac}}(),onDomLoad=function(){if(!ua.w3){return}if(typeof doc.readyState!=UNDEF&&(doc.readyState==="complete"||doc.readyState==="interactive")||typeof doc.readyState==UNDEF&&(doc.getElementsByTagName("body")[0]||doc.body)){callDomLoadFunctions()}if(!isDomLoaded){if(typeof doc.addEventListener!=UNDEF){doc.addEventListener("DOMContentLoaded",callDomLoadFunctions,false)}if(ua.ie){doc.attachEvent(ON_READY_STATE_CHANGE,function detach(){if(doc.readyState=="complete"){doc.detachEvent(ON_READY_STATE_CHANGE,detach);callDomLoadFunctions()}});if(win==top){(function checkDomLoadedIE(){if(isDomLoaded){return}try{doc.documentElement.doScroll("left")}catch(e){setTimeout(checkDomLoadedIE,0);return}callDomLoadFunctions()})()}}if(ua.wk){(function checkDomLoadedWK(){if(isDomLoaded){return}if(!/loaded|complete/.test(doc.readyState)){setTimeout(checkDomLoadedWK,0);return}callDomLoadFunctions()})()}}}();function callDomLoadFunctions(){if(isDomLoaded||!document.getElementsByTagName("body")[0]){return}try{var t,span=createElement("span");span.style.display="none";t=doc.getElementsByTagName("body")[0].appendChild(span);t.parentNode.removeChild(t);t=null;span=null}catch(e){return}isDomLoaded=true;var dl=domLoadFnArr.length;for(var i=0;i<dl;i++){domLoadFnArr[i]()}}function addDomLoadEvent(fn){if(isDomLoaded){fn()}else{domLoadFnArr[domLoadFnArr.length]=fn}}function addLoadEvent(fn){if(typeof win.addEventListener!=UNDEF){win.addEventListener("load",fn,false)}else if(typeof doc.addEventListener!=UNDEF){doc.addEventListener("load",fn,false)}else if(typeof win.attachEvent!=UNDEF){addListener(win,"onload",fn)}else if(typeof win.onload=="function"){var fnOld=win.onload;win.onload=function(){fnOld();fn()}}else{win.onload=fn}}function testPlayerVersion(){var b=doc.getElementsByTagName("body")[0];var o=createElement(OBJECT);o.setAttribute("style","visibility: hidden;");o.setAttribute("type",FLASH_MIME_TYPE);var t=b.appendChild(o);if(t){var counter=0;(function checkGetVariable(){if(typeof t.GetVariable!=UNDEF){try{var d=t.GetVariable("$version");if(d){d=d.split(" ")[1].split(",");ua.pv=[toInt(d[0]),toInt(d[1]),toInt(d[2])]}}catch(e){ua.pv=[8,0,0]}}else if(counter<10){counter++;setTimeout(checkGetVariable,10);return}b.removeChild(o);t=null;matchVersions()})()}else{matchVersions()}}function matchVersions(){var rl=regObjArr.length;if(rl>0){for(var i=0;i<rl;i++){var id=regObjArr[i].id;var cb=regObjArr[i].callbackFn;var cbObj={success:false,id:id};if(ua.pv[0]>0){var obj=getElementById(id);if(obj){if(hasPlayerVersion(regObjArr[i].swfVersion)&&!(ua.wk&&ua.wk<312)){setVisibility(id,true);if(cb){cbObj.success=true;cbObj.ref=getObjectById(id);cbObj.id=id;cb(cbObj)}}else if(regObjArr[i].expressInstall&&canExpressInstall()){var att={};att.data=regObjArr[i].expressInstall;att.width=obj.getAttribute("width")||"0";att.height=obj.getAttribute("height")||"0";if(obj.getAttribute("class")){att.styleclass=obj.getAttribute("class")}if(obj.getAttribute("align")){att.align=obj.getAttribute("align")}var par={};var p=obj.getElementsByTagName("param");var pl=p.length;for(var j=0;j<pl;j++){if(p[j].getAttribute("name").toLowerCase()!="movie"){par[p[j].getAttribute("name")]=p[j].getAttribute("value")}}showExpressInstall(att,par,id,cb)}else{displayFbContent(obj);if(cb){cb(cbObj)}}}}else{setVisibility(id,true);if(cb){var o=getObjectById(id);if(o&&typeof o.SetVariable!=UNDEF){cbObj.success=true;cbObj.ref=o;cbObj.id=o.id}cb(cbObj)}}}}}domLoadFnArr[0]=function(){if(plugin){testPlayerVersion()}else{matchVersions()}};function getObjectById(objectIdStr){var r=null,o=getElementById(objectIdStr);if(o&&o.nodeName.toUpperCase()==="OBJECT"){if(typeof o.SetVariable!==UNDEF){r=o}else{r=o.getElementsByTagName(OBJECT)[0]||o}}return r}function canExpressInstall(){return!isExpressInstallActive&&hasPlayerVersion("6.0.65")&&(ua.win||ua.mac)&&!(ua.wk&&ua.wk<312)}function showExpressInstall(att,par,replaceElemIdStr,callbackFn){var obj=getElementById(replaceElemIdStr);replaceElemIdStr=getId(replaceElemIdStr);isExpressInstallActive=true;storedCallbackFn=callbackFn||null;storedCallbackObj={success:false,id:replaceElemIdStr};if(obj){if(obj.nodeName.toUpperCase()=="OBJECT"){storedFbContent=abstractFbContent(obj);storedFbContentId=null}else{storedFbContent=obj;storedFbContentId=replaceElemIdStr}att.id=EXPRESS_INSTALL_ID;if(typeof att.width==UNDEF||!/%$/.test(att.width)&&toInt(att.width)<310){att.width="310"}if(typeof att.height==UNDEF||!/%$/.test(att.height)&&toInt(att.height)<137){att.height="137"}var pt=ua.ie?"ActiveX":"PlugIn",fv="MMredirectURL="+encodeURIComponent(win.location.toString().replace(/&/g,"%26"))+"&MMplayerType="+pt+"&MMdoctitle="+encodeURIComponent(doc.title.slice(0,47)+" - Flash Player Installation");if(typeof par.flashvars!=UNDEF){par.flashvars+="&"+fv}else{par.flashvars=fv}if(ua.ie&&obj.readyState!=4){var newObj=createElement("div");replaceElemIdStr+="SWFObjectNew";newObj.setAttribute("id",replaceElemIdStr);obj.parentNode.insertBefore(newObj,obj);obj.style.display="none";removeSWF(obj)}createSWF(att,par,replaceElemIdStr)}}function displayFbContent(obj){if(ua.ie&&obj.readyState!=4){obj.style.display="none";var el=createElement("div");obj.parentNode.insertBefore(el,obj);el.parentNode.replaceChild(abstractFbContent(obj),el);removeSWF(obj)}else{obj.parentNode.replaceChild(abstractFbContent(obj),obj)}}function abstractFbContent(obj){var ac=createElement("div");if(ua.win&&ua.ie){ac.innerHTML=obj.innerHTML}else{var nestedObj=obj.getElementsByTagName(OBJECT)[0];if(nestedObj){var c=nestedObj.childNodes;if(c){var cl=c.length;for(var i=0;i<cl;i++){if(!(c[i].nodeType==1&&c[i].nodeName=="PARAM")&&!(c[i].nodeType==8)){ac.appendChild(c[i].cloneNode(true))}}}}}return ac}function createIeObject(url,param_str){var div=createElement("div");div.innerHTML="<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='"+url+"'>"+param_str+"</object>";return div.firstChild}function createSWF(attObj,parObj,id){var r,el=getElementById(id);id=getId(id);if(ua.wk&&ua.wk<312){return r}if(el){var o=ua.ie?createElement("div"):createElement(OBJECT),attr,attr_lower,param;if(typeof attObj.id==UNDEF){attObj.id=id}for(param in parObj){if(parObj.hasOwnProperty(param)&&param.toLowerCase()!=="movie"){createObjParam(o,param,parObj[param])}}if(ua.ie){o=createIeObject(attObj.data,o.innerHTML)}for(attr in attObj){if(attObj.hasOwnProperty(attr)){attr_lower=attr.toLowerCase();if(attr_lower==="styleclass"){o.setAttribute("class",attObj[attr])}else if(attr_lower!=="classid"&&attr_lower!=="data"){o.setAttribute(attr,attObj[attr])}}}if(ua.ie){objIdArr[objIdArr.length]=attObj.id}else{o.setAttribute("type",FLASH_MIME_TYPE);o.setAttribute("data",attObj.data)}el.parentNode.replaceChild(o,el);r=o}return r}function createObjParam(el,pName,pValue){var p=createElement("param");p.setAttribute("name",pName);p.setAttribute("value",pValue);el.appendChild(p)}function removeSWF(id){var obj=getElementById(id);if(obj&&obj.nodeName.toUpperCase()=="OBJECT"){if(ua.ie){obj.style.display="none";(function removeSWFInIE(){if(obj.readyState==4){for(var i in obj){if(typeof obj[i]=="function"){obj[i]=null}}obj.parentNode.removeChild(obj)}else{setTimeout(removeSWFInIE,10)}})()}else{obj.parentNode.removeChild(obj)}}}function isElement(id){return id&&id.nodeType&&id.nodeType===1}function getId(thing){return isElement(thing)?thing.id:thing}function getElementById(id){if(isElement(id)){return id}var el=null;try{el=doc.getElementById(id)}catch(e){}return el}function createElement(el){return doc.createElement(el)}function toInt(str){return parseInt(str,10)}function addListener(target,eventType,fn){target.attachEvent(eventType,fn);listenersArr[listenersArr.length]=[target,eventType,fn]}function hasPlayerVersion(rv){rv+="";var pv=ua.pv,v=rv.split(".");v[0]=toInt(v[0]);v[1]=toInt(v[1])||0;v[2]=toInt(v[2])||0;return pv[0]>v[0]||pv[0]==v[0]&&pv[1]>v[1]||pv[0]==v[0]&&pv[1]==v[1]&&pv[2]>=v[2]?true:false}function createCSS(sel,decl,media,newStyle){var h=doc.getElementsByTagName("head")[0];if(!h){return}var m=typeof media=="string"?media:"screen";if(newStyle){dynamicStylesheet=null;dynamicStylesheetMedia=null}if(!dynamicStylesheet||dynamicStylesheetMedia!=m){var s=createElement("style");s.setAttribute("type","text/css");s.setAttribute("media",m);dynamicStylesheet=h.appendChild(s);if(ua.ie&&typeof doc.styleSheets!=UNDEF&&doc.styleSheets.length>0){dynamicStylesheet=doc.styleSheets[doc.styleSheets.length-1]}dynamicStylesheetMedia=m}if(dynamicStylesheet){if(typeof dynamicStylesheet.addRule!=UNDEF){dynamicStylesheet.addRule(sel,decl)}else if(typeof doc.createTextNode!=UNDEF){dynamicStylesheet.appendChild(doc.createTextNode(sel+" {"+decl+"}"))}}}function setVisibility(id,isVisible){if(!autoHideShow){return}var v=isVisible?"visible":"hidden",el=getElementById(id);if(isDomLoaded&&el){el.style.visibility=v}else if(typeof id==="string"){createCSS("#"+id,"visibility:"+v)}}function urlEncodeIfNecessary(s){var regex=/[\\\"<>\.;]/;var hasBadChars=regex.exec(s)!=null;return hasBadChars&&typeof encodeURIComponent!=UNDEF?encodeURIComponent(s):s}var cleanup=function(){if(ua.ie){window.attachEvent("onunload",function(){var ll=listenersArr.length;for(var i=0;i<ll;i++){listenersArr[i][0].detachEvent(listenersArr[i][1],listenersArr[i][2])}var il=objIdArr.length;for(var j=0;j<il;j++){removeSWF(objIdArr[j])}for(var k in ua){ua[k]=null}ua=null;for(var l in swfobject){swfobject[l]=null}swfobject=null})}}();return swfobject={registerObject:function(objectIdStr,swfVersionStr,xiSwfUrlStr,callbackFn){if(ua.w3&&objectIdStr&&swfVersionStr){var regObj={};regObj.id=objectIdStr;regObj.swfVersion=swfVersionStr;regObj.expressInstall=xiSwfUrlStr;regObj.callbackFn=callbackFn;regObjArr[regObjArr.length]=regObj;setVisibility(objectIdStr,false)}else if(callbackFn){callbackFn({success:false,id:objectIdStr})}},getObjectById:function(objectIdStr){if(ua.w3){return getObjectById(objectIdStr)}},embedSWF:function(swfUrlStr,replaceElemIdStr,widthStr,heightStr,swfVersionStr,xiSwfUrlStr,flashvarsObj,parObj,attObj,callbackFn){var id=getId(replaceElemIdStr),callbackObj={success:false,id:id};if(ua.w3&&!(ua.wk&&ua.wk<312)&&swfUrlStr&&replaceElemIdStr&&widthStr&&heightStr&&swfVersionStr){setVisibility(id,false);addDomLoadEvent(function(){widthStr+="";heightStr+="";var att={};if(attObj&&typeof attObj===OBJECT){for(var i in attObj){att[i]=attObj[i]}}att.data=swfUrlStr;att.width=widthStr;att.height=heightStr;var par={};if(parObj&&typeof parObj===OBJECT){for(var j in parObj){par[j]=parObj[j]}}if(flashvarsObj&&typeof flashvarsObj===OBJECT){for(var k in flashvarsObj){if(flashvarsObj.hasOwnProperty(k)){var key=encodeURI_enabled?encodeURIComponent(k):k,value=encodeURI_enabled?encodeURIComponent(flashvarsObj[k]):flashvarsObj[k];if(typeof par.flashvars!=UNDEF){par.flashvars+="&"+key+"="+value}else{par.flashvars=key+"="+value}}}}if(hasPlayerVersion(swfVersionStr)){var obj=createSWF(att,par,replaceElemIdStr);if(att.id==id){setVisibility(id,true)}callbackObj.success=true;callbackObj.ref=obj;callbackObj.id=obj.id}else if(xiSwfUrlStr&&canExpressInstall()){att.data=xiSwfUrlStr;showExpressInstall(att,par,replaceElemIdStr,callbackFn);return}else{setVisibility(id,true)}if(callbackFn){callbackFn(callbackObj)}})}else if(callbackFn){callbackFn(callbackObj)}},switchOffAutoHideShow:function(){autoHideShow=false},enableUriEncoding:function(bool){encodeURI_enabled=typeof bool===UNDEF?true:bool},ua:ua,getFlashPlayerVersion:function(){return{major:ua.pv[0],minor:ua.pv[1],release:ua.pv[2]}},hasFlashPlayerVersion:hasPlayerVersion,createSWF:function(attObj,parObj,replaceElemIdStr){if(ua.w3){return createSWF(attObj,parObj,replaceElemIdStr)
}else{return undefined}},showExpressInstall:function(att,par,replaceElemIdStr,callbackFn){if(ua.w3&&canExpressInstall()){showExpressInstall(att,par,replaceElemIdStr,callbackFn)}},removeSWF:function(objElemIdStr){if(ua.w3){removeSWF(objElemIdStr)}},createCSS:function(selStr,declStr,mediaStr,newStyleBoolean){if(ua.w3){createCSS(selStr,declStr,mediaStr,newStyleBoolean)}},addDomLoadEvent:addDomLoadEvent,addLoadEvent:addLoadEvent,getQueryParamValue:function(param){var q=doc.location.search||doc.location.hash;if(q){if(/\?/.test(q)){q=q.split("?")[1]}if(param==null){return urlEncodeIfNecessary(q)}var pairs=q.split("&");for(var i=0;i<pairs.length;i++){if(pairs[i].substring(0,pairs[i].indexOf("="))==param){return urlEncodeIfNecessary(pairs[i].substring(pairs[i].indexOf("=")+1))}}}return""},expressInstallCallback:function(){if(isExpressInstallActive){var obj=getElementById(EXPRESS_INSTALL_ID);if(obj&&storedFbContent){obj.parentNode.replaceChild(storedFbContent,obj);if(storedFbContentId){setVisibility(storedFbContentId,true);if(ua.ie){storedFbContent.style.display="block"}}if(storedCallbackFn){storedCallbackFn(storedCallbackObj)}}isExpressInstallActive=false}},version:"2.3"}});define("flashaudioproxy",["require","exports","module","underscore","errors","vendor/events","logger","states","vendor/swfobject"],function(require,exports,module){var FlashAudioProxy,_=require("underscore"),Errors=require("errors"),Events=require("vendor/events"),Logger=require("logger"),States=require("states"),swfobject=require("vendor/swfobject");module.exports=FlashAudioProxy=function(descriptor,settings){this._descriptor=descriptor;this._id=descriptor.id;this._autoPlay=descriptor.autoPlay||false;FlashAudioProxy.players[descriptor.id]=this;this._errorMessage=null;this._errorID=null;this._state=States.INITIALIZE;this._settings=settings;this._volume=1;this._muted=false;this._logger=new Logger(this.getType(),this._id,settings);if(!FlashAudioProxy.creatingFlashAudio){if(FlashAudioProxy.flashAudio){this._createFlashAudio()}else{FlashAudioProxy.createFlashObject(settings)}}};FlashAudioProxy.createFlashObject=function(settings){FlashAudioProxy.creatingFlashAudio=true;FlashAudioProxy.containerElement=document.createElement("div");FlashAudioProxy.containerElement.setAttribute("id",settings.flashObjectID+"-container");FlashAudioProxy.flashElementTarget=document.createElement("div");FlashAudioProxy.flashElementTarget.setAttribute("id",settings.flashObjectID+"-target");FlashAudioProxy.containerElement.appendChild(FlashAudioProxy.flashElementTarget);document.body.appendChild(FlashAudioProxy.containerElement);var onFlashObjectCreated=function(respond){if(!respond.success){for(var i in FlashAudioProxy.players){if(FlashAudioProxy.players.hasOwnProperty(i)){FlashAudioProxy.players[i]._errorID=Errors.FLASH_PROXY_CANT_LOAD_FLASH;FlashAudioProxy.players[i]._errorMessage="Cannot create flash object";FlashAudioProxy.players[i]._setState(States.ERROR)}}return}FlashAudioProxy.flashAudio=document.getElementById(settings.flashObjectID);setTimeout(function(){if(FlashAudioProxy.flashAudio&&!("PercentLoaded"in FlashAudioProxy.flashAudio)){for(var i in FlashAudioProxy.players){if(FlashAudioProxy.players.hasOwnProperty(i)){FlashAudioProxy.players[i]._errorID=Errors.FLASH_PROXY_FLASH_BLOCKED;FlashAudioProxy.players[i]._errorMessage="Flash object blocked";FlashAudioProxy.players[i]._setState(States.ERROR);FlashAudioProxy.players[i]._logger.type=FlashAudioProxy.players[i].getType();FlashAudioProxy.players[i]._logger.log(FlashAudioProxy.players[i]._errorMessage)}}}},settings.flashLoadTimeout);FlashAudioProxy.flashAudio.onPositionChange=function(id,currentPosition,loadedPosition,duration){FlashAudioProxy.players[id]._onPositionChange(currentPosition,loadedPosition,duration)};FlashAudioProxy.flashAudio.onDebug=function(id,type,message){FlashAudioProxy.players[id]._logger.type=type;FlashAudioProxy.players[id]._logger.log(message)};FlashAudioProxy.flashAudio.onStateChange=function(id,state){FlashAudioProxy.players[id]._setState(state);if(state===States.DEAD){delete FlashAudioProxy.players[id]}};FlashAudioProxy.flashAudio.onInit=function(id){FlashAudioProxy.creatingFlashAudio=false;_.invoke(_.values(FlashAudioProxy.players),"_createFlashAudio")}};if(!document.getElementById(settings.flashObjectID)){swfobject.embedSWF(settings.flashAudioPath,settings.flashObjectID+"-target","1","1","9.0.24","",{json:encodeURIComponent(JSON.stringify(settings))},{allowscriptaccess:"always"},{id:settings.flashObjectID},onFlashObjectCreated)}};FlashAudioProxy._ready=function(){return FlashAudioProxy.flashAudio&&!FlashAudioProxy.creatingFlashAudio};_.extend(FlashAudioProxy.prototype,Events);FlashAudioProxy.players={};FlashAudioProxy.prototype._createFlashAudio=function(){FlashAudioProxy.flashAudio.createAudio(this._descriptor);this._state=FlashAudioProxy.flashAudio.getState(this._id);this.setVolume(this._volume);this.setMute(this._muted);if(this._autoPlay){this.play()}};FlashAudioProxy.prototype._setState=function(state){if(this._state===state){return}this._state=state;this.trigger("stateChange",state,this)};FlashAudioProxy.prototype._onPositionChange=function(currentPosition,loadedPosition,duration){this.trigger("positionChange",currentPosition,loadedPosition,duration,this)};FlashAudioProxy.prototype.getId=function(){return this._id};FlashAudioProxy.prototype.getType=function(){if(!FlashAudioProxy._ready()){return"Flash ..."}return FlashAudioProxy.flashAudio.getType(this._id)};FlashAudioProxy.prototype.getContainerElement=function(){return FlashAudioProxy.containerElement};FlashAudioProxy.prototype.play=function(position){if(!FlashAudioProxy._ready()){return}if(this.getState()===States.PAUSED||this.getState()===States.ENDED){this.resume();return}position=position===undefined?0:position;FlashAudioProxy.flashAudio.playAudio(this._id,position)};FlashAudioProxy.prototype.pause=function(){if(!FlashAudioProxy._ready()){return}FlashAudioProxy.flashAudio.pauseAudio(this._id)};FlashAudioProxy.prototype.seek=function(position){if(!FlashAudioProxy._ready()){return}FlashAudioProxy.flashAudio.seekAudio(this._id,position)};FlashAudioProxy.prototype.resume=function(){if(!FlashAudioProxy._ready()){return}FlashAudioProxy.flashAudio.resumeAudio(this._id)};FlashAudioProxy.prototype.setVolume=function(value){this._volume=value;if(!FlashAudioProxy._ready()){return}FlashAudioProxy.flashAudio.setVolume(this._id,value)};FlashAudioProxy.prototype.getVolume=function(){if(!FlashAudioProxy._ready()){return this._volume}return FlashAudioProxy.flashAudio.getVolume(this._id)};FlashAudioProxy.prototype.setMute=function(value){this._muted=value;if(!FlashAudioProxy._ready()){return}FlashAudioProxy.flashAudio.setMute(this._id,value)};FlashAudioProxy.prototype.getMute=function(){if(!FlashAudioProxy._ready()){return this._muted}return FlashAudioProxy.flashAudio.getMute(this._id)};FlashAudioProxy.prototype.getState=function(){return this._state};FlashAudioProxy.prototype.getCurrentPosition=function(){if(!FlashAudioProxy._ready()){return 0}return FlashAudioProxy.flashAudio.getCurrentPosition(this._id)};FlashAudioProxy.prototype.getLoadedPosition=function(){if(!FlashAudioProxy._ready()){return 0}return FlashAudioProxy.flashAudio.getLoadedPosition(this._id)};FlashAudioProxy.prototype.getDuration=function(){if(!FlashAudioProxy._ready()){return 0}return FlashAudioProxy.flashAudio.getDuration(this._id)};FlashAudioProxy.prototype.kill=function(){if(!FlashAudioProxy._ready()){return 0}FlashAudioProxy.flashAudio.killAudio(this._id)};FlashAudioProxy.prototype.getErrorMessage=function(){if(this._errorMessage){return this._errorMessage}return FlashAudioProxy.flashAudio.getErrorMessage(this._id)};FlashAudioProxy.prototype.getErrorID=function(){if(this._errorID){return this._errorID}return FlashAudioProxy.flashAudio.getErrorID(this._id)};FlashAudioProxy.prototype.getLevelNum=function(){if(!FlashAudioProxy._ready()){return 0}return FlashAudioProxy.flashAudio.getLevelNum(this._id)};FlashAudioProxy.prototype.getLevel=function(){if(!FlashAudioProxy._ready()){return 0}return FlashAudioProxy.flashAudio.getLevel(this._id)};FlashAudioProxy.prototype.setLevel=function(level){if(!FlashAudioProxy._ready()){return 0}return FlashAudioProxy.flashAudio.setLevel(this._id,level)};FlashAudioProxy.prototype.preload=function(){return false}});define("html5audioplayer",["require","exports","module","underscore","vendor/events","states","errors","logger"],function(require,exports,module){var HTML5AudioPlayer,_=require("underscore"),Events=require("vendor/events"),States=require("states"),Errors=require("errors"),Logger=require("logger");module.exports=HTML5AudioPlayer=function(descriptor,settings){this._id=descriptor.id;this._descriptor=descriptor;this._isLoaded=false;this._settings=settings;this._bufferingTimeout=null;this._currentPosition=0;this._loadedPosition=0;this._prevCurrentPosition=0;this._prevCheckTime=0;this._prevComparison=0;this._positionUpdateTimer=0;this._playRequested=false;if(descriptor.duration){this._duration=descriptor.duration}_.bindAll(this,"_onPositionChange","_onStateChange","_onLoaded","_onBuffering");this._init();this.toggleEventListeners(true);if(this._descriptor.preload){this.preload()}if(descriptor.autoPlay){this.play()}else{this._setState(States.IDLE)}};_.extend(HTML5AudioPlayer.prototype,Events);HTML5AudioPlayer.prototype._init=function(){this._html5Audio=new Audio;this._html5Audio.id=this._settings.audioObjectID+"_"+this._descriptor.id;this._html5Audio.preload="none";this._logger=new Logger(this.getType(),this._id,this._settings)};HTML5AudioPlayer.prototype.getId=function(){return this._id};HTML5AudioPlayer.prototype.getType=function(){return"HTML5 audio"};HTML5AudioPlayer.prototype.play=function(position){if(this.isInOneOfStates(States.ERROR,States.DEAD)){return}if(this.isInOneOfStates(States.PAUSED,States.ENDED)){this.resume();return}this._logger.log("play");position=position||0;this._setState(States.LOADING);this._playRequested=true;var playAfterLoaded=function(){if(!this._playRequested){return}this._logger.log("play after loaded");if(position>0){this._html5Audio.currentTime=position/1e3}this._html5Audio.play();clearInterval(this._positionUpdateTimer);this._positionUpdateTimer=setInterval(this._onPositionChange,this._settings.updateInterval)};if(this._isLoaded){playAfterLoaded.apply(this)}else{this.preload();this.once("loaded",playAfterLoaded)}};HTML5AudioPlayer.prototype.pause=function(){this._playRequested=false;if(this.isInOneOfStates(States.ERROR,States.DEAD)){return}this._logger.log("pause");this._html5Audio.pause();clearTimeout(this._bufferingTimeout);clearInterval(this._positionUpdateTimer)};HTML5AudioPlayer.prototype.seek=function(position){var canSeek=false,positionSec,seekable=this._html5Audio.seekable,i;if(this.isInOneOfStates(States.ERROR,States.DEAD)){return}if(!this._isLoaded){this.once("loaded",function(){this.seek(position)});return}positionSec=position/1e3;for(i=0;i<seekable.length;i++){if(positionSec<=seekable.end(i)&&positionSec>=seekable.start(i)){canSeek=true;break}}if(!canSeek){return}this._logger.log("seek");this._setState(States.SEEKING);this._html5Audio.currentTime=position/1e3;clearTimeout(this._bufferingTimeout)};HTML5AudioPlayer.prototype.resume=function(){if(this.isInOneOfStates(States.ERROR,States.DEAD)){return}this._logger.log("resume");if(this.getState()===States.PAUSED){this._setState(States.LOADING);this._html5Audio.play(this._html5Audio.currentTime)}else if(this.getState()===States.ENDED){this._setState(States.LOADING);this._html5Audio.play(0)}clearInterval(this._positionUpdateTimer);this._positionUpdateTimer=setInterval(this._onPositionChange,this._settings.updateInterval)};HTML5AudioPlayer.prototype.setVolume=function(value){if(!this._html5Audio){return}this._html5Audio.volume=value};HTML5AudioPlayer.prototype.getVolume=function(){if(!this._html5Audio){return 1}return this._html5Audio.volume};HTML5AudioPlayer.prototype.setMute=function(value){if(!this._html5Audio){return}this._html5Audio.muted=value};HTML5AudioPlayer.prototype.getMute=function(){if(!this._html5Audio){return false}return this._html5Audio.muted};HTML5AudioPlayer.prototype.getState=function(){return this._state};HTML5AudioPlayer.prototype.getCurrentPosition=function(){return this._currentPosition};HTML5AudioPlayer.prototype.getLoadedPosition=function(){return this._loadedPosition};HTML5AudioPlayer.prototype.getDuration=function(){return this._duration};HTML5AudioPlayer.prototype.kill=function(){if(this._state===States.DEAD){return}clearInterval(this._positionUpdateTimer);clearTimeout(this._bufferingTimeout);this._playRequested=false;this.toggleEventListeners(false);this._html5Audio.pause();this._html5Audio.src=null;delete this._html5Audio;this._setState(States.DEAD)};HTML5AudioPlayer.prototype.getErrorMessage=function(){return this._errorMessage};HTML5AudioPlayer.prototype.getErrorID=function(){return this._errorID};HTML5AudioPlayer.prototype.preload=function(){var audio=this._html5Audio;if(audio.preload!=="auto"){this._logger.log("preload");audio.preload="auto";audio.type=this._descriptor.mimeType;audio.src=this._descriptor.src;audio.load()}};HTML5AudioPlayer.prototype._setState=function(state){if(this._state===state){return}this._logger.log('state changed "'+state+'"');this._state=state;this.trigger("stateChange",state,this)};HTML5AudioPlayer.prototype.toggleEventListeners=function(on){if(!this._html5Audio){return}var dosmthEventListener=on?"addEventListener":"removeEventListener";["ended","play","playing","pause","seeking","waiting","seeked","error"].forEach(function(eventType){this._html5Audio[dosmthEventListener](eventType,this._onStateChange)},this);this._html5Audio[dosmthEventListener]("loadedmetadata",this._onLoaded)};HTML5AudioPlayer.prototype.isInOneOfStates=function(){for(var i in arguments){if(arguments[i]===this._state){return true}}return false};HTML5AudioPlayer.prototype.updatePositions=function(){this._currentPosition=this._html5Audio.currentTime*1e3;if(this._html5Audio.seekable.length>0){this._loadedPosition=this._html5Audio.seekable.end(0)*1e3}if(this._duration===0){this._duration=this._html5Audio.duration*1e3}};HTML5AudioPlayer.prototype._onBuffering=function(){this._setState(States.LOADING)};HTML5AudioPlayer.prototype._onLoaded=function(){this._isLoaded=true;this._logger.log("loaded");this.trigger("loaded",this)};HTML5AudioPlayer.prototype._onPositionChange=function(event){this.updatePositions();this.trigger("positionChange",this._currentPosition,this._loadedPosition,this._duration,this);if(!this.isInOneOfStates(States.PLAYING,States.LOADING)){return}var now=(new Date).valueOf(),positionDelta=this._currentPosition-this._prevCurrentPosition,realTimeDelta=now-this._prevCheckTime,comparison;if(realTimeDelta===0){return}comparison=positionDelta/realTimeDelta;if(comparison>.7){clearTimeout(this._bufferingTimeout);this._setState(States.PLAYING);this._bufferingTimeout=null}else if(this._state===States.PLAYING&&this._bufferingTimeout==null){this._bufferingTimeout=setTimeout(this._onBuffering,this._settings.bufferingDelay)}this._prevCurrentPosition=this._currentPosition;this._prevCheckTime=now};HTML5AudioPlayer.prototype._onStateChange=function(event){this._logger.log('html5 audio event "'+event.type+'"');clearTimeout(this._bufferingTimeout);switch(event.type){case"playing":this.updatePositions();this._setState(States.PLAYING);break;case"pause":this._setState(States.PAUSED);break;case"ended":this._currentPosition=this._loadedPosition=this._duration;this.trigger("positionChange",this._currentPosition,this._loadedPosition,this._duration,this);this._setState(States.ENDED);clearInterval(this._positionUpdateTimer);break;case"waiting":this._setState(States.LOADING);break;case"seeking":this._setState(States.SEEKING);break;case"seeked":this.updatePositions();if(this._html5Audio.paused){this._setState(States.PAUSED)}else{this._setState(States.PLAYING)}break;case"error":this._errorID={1:Errors.HTML5_AUDIO_ABORTED,2:Errors.HTML5_AUDIO_NETWORK,3:Errors.HTML5_AUDIO_DECODE,4:Errors.HTML5_AUDIO_SRC_NOT_SUPPORTED}[this._html5Audio.error.code];this._errorMessage=this._getErrorMessage(this._errorID);this._logger.log("html5 audio error: "+this._errorID+" "+this._errorMessage);this._setState(States.ERROR);this.toggleEventListeners(false);break}};HTML5AudioPlayer.prototype._getErrorMessage=function(errorID){var messages={};messages[Errors.HTML5_AUDIO_ABORTED]="The fetching process was aborted by the user.";messages[Errors.HTML5_AUDIO_NETWORK]="A network connection lost.";messages[Errors.HTML5_AUDIO_DECODE]="An error occurred while decoding the media resource.";messages[Errors.HTML5_AUDIO_SRC_NOT_SUPPORTED]="The media resource is not suitable.";return messages[errorID]}});define("hlsaudioplayer",["require","exports","module","underscore","errors","vendor/events","html5audioplayer","logger","states"],function(require,exports,module){var HLSAudioPlayer,_=require("underscore"),Errors=require("errors"),Events=require("vendor/events"),HTML5AudioPlayer=require("html5audioplayer"),Logger=require("logger"),States=require("states");module.exports=HLSAudioPlayer=function(descriptor,settings){HTML5AudioPlayer.apply(this,arguments);this._seekPosition=0};_.extend(HLSAudioPlayer.prototype,HTML5AudioPlayer.prototype);HLSAudioPlayer.prototype.getType=function(){return"HTML5 HLS audio"};HLSAudioPlayer.prototype.seek=function(position){HTML5AudioPlayer.prototype.seek.apply(this,arguments);if(this.isInOneOfStates(States.LOADING)){this._seekPosition=position}};HLSAudioPlayer.prototype.getCurrentPosition=function(){if(this.isInOneOfStates(States.LOADING)&&this._seekPosition>0){return this._seekPosition}return HTML5AudioPlayer.prototype.getCurrentPosition.apply(this,arguments)};HLSAudioPlayer.prototype._onStateChange=function(event){this._logger.log('hls html5 audio event "'+event.type+'"');clearTimeout(this._bufferingTimeout);switch(event.type){case"playing":this.updatePositions();this._seekPosition=0;this._setState(States.PLAYING);break;case"pause":this._setState(States.PAUSED);break;case"ended":this._currentPosition=this._loadedPosition=this._duration;this.trigger("positionChange",this._currentPosition,this._loadedPosition,this._duration,this);this._setState(States.ENDED);clearInterval(this._positionUpdateTimer);break;case"waiting":this._setState(States.LOADING);break;case"seeking":this._setState(States.SEEKING);break;case"seeked":this.updatePositions();if(this._html5Audio.paused){this._setState(States.PAUSED)}break;case"error":this._errorID={1:Errors.HTML5_AUDIO_ABORTED,2:Errors.HTML5_AUDIO_NETWORK,3:Errors.HTML5_AUDIO_DECODE,4:Errors.HTML5_AUDIO_SRC_NOT_SUPPORTED}[this._html5Audio.error.code];this._errorMessage=this._getErrorMessage(this._errorID);this._logger.log("html5 audio error: "+this._errorID+" "+this._errorMessage);this._setState(States.ERROR);this.toggleEventListeners(false);break}}});define("singleaudioplayer",["require","exports","module","underscore","browserutils","errors","vendor/events","html5audioplayer","logger","states"],function(require,exports,module){var SingleAudioPlayer,_=require("underscore"),BrowserUtils=require("browserutils"),Errors=require("errors"),Events=require("vendor/events"),HTML5AudioPlayer=require("html5audioplayer"),Logger=require("logger"),States=require("states");module.exports=SingleAudioPlayer=function(descriptor,settings){HTML5AudioPlayer.apply(this,arguments)};_.extend(SingleAudioPlayer.prototype,HTML5AudioPlayer.prototype);SingleAudioPlayer.prototype._init=function(){if(!SingleAudioPlayer._html5Audio){var audioObj=new Audio;audioObj.id=this._settings.audioObjectID+"_Single";audioObj.preload="none";SingleAudioPlayer._html5Audio=audioObj;this._preloadAudio=audioObj}this._html5Audio=SingleAudioPlayer._html5Audio;this._playRequested=false;this._logger=new Logger(this.getType(),this._id,this._settings)};SingleAudioPlayer.prototype.getType=function(){return"HTML5 single audio"};SingleAudioPlayer.prototype.play=function(position){this._playRequested=true;if(this._html5Audio._playerId===this._descriptor.id){HTML5AudioPlayer.prototype.resume.apply(this,arguments);return}if(this.isInOneOfStates(States.PAUSED)){position=this._currentPosition}this._html5Audio._playerId=this._descriptor.id;this.toggleEventListeners(true);this._setState(States.LOADING);var playAfterLoaded=function(){if(!this._playRequested){return}this._logger.log("play after loaded");if(position>0){this._html5Audio.currentTime=position/1e3}this._html5Audio.play();clearInterval(this._positionUpdateTimer);this._positionUpdateTimer=setInterval(this._onPositionChange,this._settings.updateInterval)};if(this._html5Audio.readyState>0&&this._descriptor.src===this._html5Audio.src){playAfterLoaded.apply(this)}else{this.once("loaded",playAfterLoaded);this._html5Audio.type=this._descriptor.mimeType;this._html5Audio.src=this._descriptor.src;this._html5Audio.preload="auto";this._html5Audio.load()}};SingleAudioPlayer.prototype.pause=function(){this._playRequested=false;if(this.isInOneOfStates(States.ERROR,States.DEAD)){return}this._logger.log("pause");if(this._html5Audio._playerId===this._descriptor.id){this._html5Audio.pause()}else{this.toggleEventListeners(false);this._setState(States.PAUSED)}};SingleAudioPlayer.prototype.seek=function(position){if(this._html5Audio._playerId!==this._descriptor.id){this._currentPosition=position;this.trigger("positionChange",this._currentPosition,this._loadedPosition,this._duration,this);return}HTML5AudioPlayer.prototype.seek.apply(this,arguments)};SingleAudioPlayer.prototype.kill=function(){if(this._state===States.DEAD){return}this._playRequested=false;clearInterval(this._positionUpdateTimer);clearTimeout(this._bufferingTimeout);this.toggleEventListeners(false);this._setState(States.DEAD)};SingleAudioPlayer.prototype.resume=function(){if(this.isInOneOfStates(States.ERROR,States.DEAD)){return}if(this._html5Audio._playerId!==this._descriptor.id){this.play(this._currentPosition);return}HTML5AudioPlayer.prototype.resume.apply(this,arguments)};SingleAudioPlayer.prototype._onLoaded=function(){if(this.preventDefaultHandler()){return}HTML5AudioPlayer.prototype._onLoaded.apply(this,arguments)};SingleAudioPlayer.prototype._onStateChange=function(event){if(this.preventDefaultHandler()){return}HTML5AudioPlayer.prototype._onStateChange.apply(this,arguments)};SingleAudioPlayer.prototype._onPositionChange=function(event){if(this.preventDefaultHandler()){return}HTML5AudioPlayer.prototype._onPositionChange.apply(this,arguments)};SingleAudioPlayer.prototype.preventDefaultHandler=function(){if(this._html5Audio._playerId!==this._descriptor.id){if(this.isInOneOfStates(States.PLAYING,States.LOADING)){this.pause()}return true}return false};SingleAudioPlayer.prototype.preload=function(){if(!this._preloadAudio&&BrowserUtils.supportSourceSwappingWithPreload()){this._preloadAudio=new Audio;this._preloadAudio.preload="none"}var audio=this._preloadAudio;if(audio&&audio.preload!=="auto"){this._logger.log("preload");audio.preload="auto";audio.type=this._descriptor.mimeType;audio.src=this._descriptor.src;audio.load()}}});define("hlssingleaudioplayer",["require","exports","module","underscore","errors","vendor/events","hlsaudioplayer","logger","singleaudioplayer","states"],function(require,exports,module){var HLSSingleAudioPlayer,_=require("underscore"),Errors=require("errors"),Events=require("vendor/events"),HLSAudioPlayer=require("hlsaudioplayer"),Logger=require("logger"),SingleAudioPlayer=require("singleaudioplayer"),States=require("states");module.exports=HLSSingleAudioPlayer=function(descriptor,settings){SingleAudioPlayer.apply(this,arguments)};_.extend(HLSSingleAudioPlayer.prototype,SingleAudioPlayer.prototype);HLSSingleAudioPlayer.prototype.getType=function(){return"HTML5 HLS single audio"}});define("mimetypes",{AAC:"audio/aac",M3U8:"application/x-mpegURL",MP4:"audio/mp4",MPEG:"audio/mpeg",OGG:"audio/ogg",WAV:"audio/wav",WEBM:"audio/webm",getTypeByExtension:function(extension){var types={mp1:this.MPEG,mp2:this.MPEG,mp3:this.MPEG,mpeg:this.MPEG,mpg:this.MPEG,aac:this.AAC,mp4:this.MP4,ogg:this.OGG,oga:this.OGG,opus:this.OGG,webm:this.WEBM,wav:this.WAV,m3u8:this.M3U8};return types[extension]||null}});define("factory",["require","exports","module","underscore","browserutils","flashaudioproxy","hlsaudioplayer","hlssingleaudioplayer","html5audioplayer","mimetypes","singleaudioplayer","vendor/swfobject"],function(require,exports,module){var DesktopFactory,_=require("underscore"),BrowserUtils=require("browserutils"),FlashAudioProxy=require("flashaudioproxy"),HLSAudioPlayer=require("hlsaudioplayer"),HLSSingleAudioPlayer=require("hlssingleaudioplayer"),HTML5AudioPlayer=require("html5audioplayer"),MimeTypes=require("mimetypes"),SingleAudioPlayer=require("singleaudioplayer"),swfobject=require("vendor/swfobject");module.exports=DesktopFactory=function(){};DesktopFactory.createAudioPlayer=function(descriptor,settings){var protocol,extension,player;protocol=descriptor.src.split(":")[0];if((protocol==="rtmp"||protocol==="rtmpt"||descriptor.forceFlash)&&!descriptor.forceHTML5){player=new FlashAudioProxy(descriptor,settings)}else{descriptor.mimeType=DesktopFactory.getMimeType(descriptor);if(descriptor.mimeType===MimeTypes.M3U8){if(BrowserUtils.isNativeHlsSupported()){if(BrowserUtils.isMobile()||descriptor.forceSingle){player=new HLSSingleAudioPlayer(descriptor,settings)}else{player=new HLSAudioPlayer(descriptor,settings)}}else{player=new FlashAudioProxy(descriptor,settings)}}else if(BrowserUtils.supportHTML5Audio()&&BrowserUtils.canPlayType(descriptor.mimeType)||descriptor.forceHTML5){if(BrowserUtils.isMobile()||descriptor.forceSingle){player=new SingleAudioPlayer(descriptor,settings)}else{player=new HTML5AudioPlayer(descriptor,settings)}}else{if(descriptor.mimeType===MimeTypes.MPEG){player=new FlashAudioProxy(descriptor,settings)}else{return null}}}return player};DesktopFactory.getMimeType=function(descriptor){if(descriptor.mimeType){return descriptor.mimeType}var extension=descriptor.src.split("?")[0];extension=extension.substring(extension.lastIndexOf(".")+1,extension.length);return MimeTypes.getTypeByExtension(extension)}});define("audiomanager",["require","exports","module","underscore","factory","states","errors","browserutils"],function(require,exports,module){var AudioManager,_=require("underscore"),PlayerFactory=require("factory"),States=require("states"),Errors=require("errors"),BrowserUtils=require("browserutils");module.exports=AudioManager=function(settings){settings=settings||{};this._players={};this._volume=1;this._mute=false;this._settings=_.defaults(settings,AudioManager.defaults)};AudioManager.States=States;AudioManager.Errors=Errors;AudioManager.BrowserUtils=BrowserUtils;AudioManager.defaults={flashAudioPath:"flashAudio.swf",flashLoadTimeout:2e3,flashObjectID:"flashAudioObject",audioObjectID:"html5AudioObject",updateInterval:300,bufferTime:8e3,bufferingDelay:800,debug:false};AudioManager.prototype.getAudioPlayer=function(id){return this._players[id]};AudioManager.prototype.hasAudioPlayer=function(id){return this._players[id]!==undefined};AudioManager.prototype.removeAudioPlayer=function(id){if(this.hasAudioPlayer(id)){delete this._players[id]}};AudioManager.prototype.setVolume=function(volume){volume=Math.min(1,volume);this._volume=Math.max(0,volume);for(var id in this._players){if(this._players.hasOwnProperty(id)){this._players[id].setVolume(this._volume)}}};AudioManager.prototype.getVolume=function(){return this._volume};AudioManager.prototype.setMute=function(value){this._muted=value;for(var id in this._players){if(this._players.hasOwnProperty(id)){this._players[id].setMute(this._muted)}}};AudioManager.prototype.getMute=function(){return this._muted};AudioManager.prototype.createAudioPlayer=function(descriptor){var audioType,protocol,extension;if(!descriptor.id){descriptor.id=Math.floor(Math.random()*1e10).toString()+(new Date).getTime().toString()}if(!descriptor.src){throw new Error("AudioManager: You need to pass a valid src")}if(!this._players[descriptor.id]){this._players[descriptor.id]=PlayerFactory.createAudioPlayer(descriptor,this._settings)}this._players[descriptor.id].setVolume(this._volume);this._players[descriptor.id].setMute(this._muted);this._players[descriptor.id].on("stateChange",this._onStateChange,this);return this._players[descriptor.id]};AudioManager.prototype._onStateChange=function(state,player){if(player.getState()===States.DEAD){this.removeAudioPlayer(player.getId())}}});require(["audiomanager"]);return require("audiomanager")});



/*! PLAYER CODE */

			function checkText()

			{
				var txt = $("#trackTitle");
	
				var delta = txt.parent().width() - txt.width();
	
				if (currentTrack.tooLong) 
						{txt.addClass("marquee");} 
			
				else 
						{txt.removeClass("marquee");}
			}
	
			var getDuration = function(millis)
	
			{
				var dur = {};
				var units = [
					{label:"millis",    mod:1000},
					{label:"seconds",   mod:60},
					{label:"minutes",   mod:60},
					{label:"hours",     mod:24},
					{label:"days",      mod:31}
				];
		
				// calculate the individual unit values...
				units.forEach(function(u){
					millis = (millis - (dur[u.label] = (millis % u.mod))) / u.mod;
				});
		
				// convert object to a string representation...
				dur.toString = function(){
					return units.reverse().map(function(u){
						return dur[u.label] + " " + (dur[u.label]==1?u.label.slice(0,-1):u.label);
					}).join(', ');
				};
				return dur;
			};
	
			var renderer;
			var duration; // Duration of audio clip
			var pButton = document.getElementById('pButton'); // play button

			var audioplayer = document.getElementById('audioplayer'); // playhead
			var playhead = document.getElementById('playhead'); // playhead

			var timeline = document.getElementById('timeline'); // timeline
			var timer = document.getElementById('timer'); // timeline

			var icons = document.getElementById('icons'); // timeline
			var volume = document.getElementById('volume'); // timeline
			var volumeContainer = document.getElementById('volumeContainer'); // timeline
			var half = document.getElementById('half'); // timeline
			var mute = document.getElementById('mute'); // timeline
			var volumeBar = document.getElementById('volumeBar'); // timeline
			var innerVolume = document.getElementById('innerVolume'); // timeline
			var download = document.getElementsByClassName('download'); // timeline
			// timeline width adjusted for playhead
			var timelineWidth = window.innerWidth - (volumeContainer.offsetWidth + 60);
			var timelineHeight = 60;
			var counter = 0;
			var volumeBarHeight = 120;
			var volumeAmt = 1.0;
			var trackTitle = document.getElementById("trackTitle");
			var mix = document.getElementById("mix");
			var song;
			var updater;
	
			SC.initialize({
			  client_id: "cd406b735309b14551e8af7a54c8e6f3"
			});
			//220575924
			SC.stream("/tracks/219210929", {
			  autoPlay: true, 
			  useHTML5Audio: true,
			  preferFlash: false
			}, function(sound) {

			  song = sound;
			  sound._player.on("positionChange", function(state){
					update();
			  })
			  pButton.style.display = "block";
			});

			var currentDuration;
			var currentTime;
			var relativePosition;
			var volumeCounter = 0;
			var currentTrack;
	
			volume.addEventListener("click", function(event){
				volume.parentElement.style.display = "none";
				half.parentElement.style.display = "block";
				mute.parentElement.style.display = "none";
				song.setVolume(0.5);
			})
			half.addEventListener("click", function(event){
				volume.parentElement.style.display = "none";
				half.parentElement.style.display = "none";
				mute.parentElement.style.display = "block";
				song.setVolume(0.0);
			})		
			mute.addEventListener("click", function(event){
				volume.parentElement.style.display = "block";
				half.parentElement.style.display = "none";
				mute.parentElement.style.display = "none";
				song.setVolume(1.0);
			})		
			download[0].addEventListener("click", function(event){
				console.log('download');
			})	
			download[1].addEventListener("click", function(event){
				console.log('download');
			})	
			download[2].addEventListener("click", function(event){
				console.log('download');
			})						
			var onvolume = false;

			pButton.addEventListener("click", play, true);

			audioplayer.addEventListener("touchstart", function(e){
				e.preventDefault();
				moveplayhead(e);
				onplayhead = true;
				window.addEventListener('touchmove', moveplayhead, true);

			})
			window.addEventListener('touchcancel', function(){
				window.removeEventListener('touchmove', moveplayhead, true);
				onplayhead = false;
			}, false);
			window.addEventListener('touchend', function(){
				window.removeEventListener('touchmove', moveplayhead, true);
				onplayhead = false;
			}, false);
			function clickPercent(e) {
				return (e.pageX - timeline.offsetLeft) / timelineWidth;
			}

			function volumeClickPercent(e) {
				return (((window.innerHeight - e.pageY) - timelineHeight)/volumeBarHeight);
			}

			timeline.addEventListener('mousedown', mouseDown, false);
			window.addEventListener('mouseup', mouseUp, false);

			var onplayhead = false;
			function mouseDown(event) {
				onplayhead = true;
				moveplayhead(event);
				window.addEventListener('mousemove', moveplayhead, true);
				window.addEventListener('touchmove', moveplayhead, true);
			}
			function mouseUp(e) {
				if (onplayhead == true) {
					moveplayhead(e);
					window.removeEventListener('mousemove', moveplayhead, true);
					window.removeEventListener('touchmove', moveplayhead, true);

				}
				onplayhead = false;
			}
			function moveplayhead(e) {
				if(e.touches){
					console.log("touch event")
					var newMargLeft = e.touches[0].pageX - timeline.offsetLeft;
				} else {
					console.log("mouse event")
					var newMargLeft = e.pageX - timeline.offsetLeft;
				}
				if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
					playhead.style.marginLeft = newMargLeft + "px";
				}
				if (newMargLeft < 0) {
					playhead.style.marginLeft = "0px";
				}
				if (newMargLeft > timelineWidth) {
					playhead.style.marginLeft = timelineWidth + "px";
				}
				var newTime = (1 - ((timelineWidth - newMargLeft)/timelineWidth))*currentDuration;
				currentTime = newTime;
				song.seek(currentTime);
			}

			function movevolumehead(e) {
				var newMargTop = ((window.innerHeight - e.pageY) - timelineHeight);
				if (newMargTop >= 0 && newMargTop <= window.innerHeight) {
					innerVolume.style.marginTop = (120 - newMargTop) + "px";
				}
				if (newMargTop < 0) {
					innerVolume.style.marginTop = "120px";
				}
				if (newMargTop > timelineWidth) {
					innerVolume.style.marginTop = "0px";
				}
			}

			// timeUpdate 
			// Synchronizes playhead position with current point in audio 
			function timeUpdate() {
			}

			//Play and Pause
			var counter = 0;
			function play() {
					if(song.getState() !== "playing"){
						song.play();
						song.seek(currentTime);
						pButton.className = "";
						pButton.className = "pause";
					} else {
						song.pause();
						pButton.className = "";
						pButton.className = "play";	
					}

			}
			function update(){
				// updater = requestAnimationFrame(update);
				currentDuration = song.getDuration();
				var dur = getDuration(currentDuration);
				var str = dur.minutes + ":" + dur.seconds;
				currentTime = song.getCurrentPosition();
				// currentTime = song._player._prevCurrentPosition;
				var time = getDuration(currentTime);
				if(time.seconds < 10){
					time.seconds = "0" + time.seconds;
				}
				var str = time.minutes + ":" + time.seconds;
				timer.innerHTML = str;
				relativePosition = currentTime/currentDuration;
				playhead.style.marginLeft = (timelineWidth*relativePosition) + "px";
				updateTitle();
				checkText();
				checkPlayPause();

			}
			function updateTitle(){
				for(var i = 0; i < tracklist.length; i++){
					if(currentTime>(tracklist[i].time)*1000){
						currentTrack = tracklist[i];
						trackTitle.innerHTML = tracklist[i].title
					}
				}
			}
function checkPlayPause(){
switch(song.getState()){
case "seeking":
pButton.className = "";
pButton.className = "loading";
break;
case "playing":
pButton.className = "";
pButton.className = "pause";
break;
case "paused":
pButton.className = "";
pButton.className = "play";
break;

}
} 

			window.addEventListener( 'resize', onWindowResize, false );
				function onWindowResize(){
					if(renderer){
						renderer.setSize(window.innerWidth, window.innerHeight);
						camera.aspect = window.innerWidth/window.innerHeight;
						camera.updateProjectionMatrix();
					}
					timelineWidth = window.innerWidth - (volumeContainer.offsetWidth + 60);
					console.log(timelineWidth);
				}

//ZERO CLIPBOARD .JS//	

var ZeroClipboard = {
	
	version: "1.0.7",
	clients: {}, // registered upload clients on page, indexed by id
	moviePath: 'ZeroClipboard.swf', // URL to movie
	nextId: 1, // ID of next movie
	
	$: function(thingy) {
		// simple DOM lookup utility function
		if (typeof(thingy) == 'string') thingy = document.getElementById(thingy);
		if (!thingy.addClass) {
			// extend element with a few useful methods
			thingy.hide = function() { this.style.display = 'none'; };
			thingy.show = function() { this.style.display = ''; };
			thingy.addClass = function(name) { this.removeClass(name); this.className += ' ' + name; };
			thingy.removeClass = function(name) {
				var classes = this.className.split(/\s+/);
				var idx = -1;
				for (var k = 0; k < classes.length; k++) {
					if (classes[k] == name) { idx = k; k = classes.length; }
				}
				if (idx > -1) {
					classes.splice( idx, 1 );
					this.className = classes.join(' ');
				}
				return this;
			};
			thingy.hasClass = function(name) {
				return !!this.className.match( new RegExp("\\s*" + name + "\\s*") );
			};
		}
		return thingy;
	},
	
	setMoviePath: function(path) {
		// set path to ZeroClipboard.swf
		this.moviePath = path;
	},
	
	dispatch: function(id, eventName, args) {
		// receive event from flash movie, send to client		
		var client = this.clients[id];
		if (client) {
			client.receiveEvent(eventName, args);
		}
	},
	
	register: function(id, client) {
		// register new client to receive events
		this.clients[id] = client;
	},
	
	getDOMObjectPosition: function(obj, stopObj) {
		// get absolute coordinates for dom element
		var info = {
			left: 0, 
			top: 0, 
			width: obj.width ? obj.width : obj.offsetWidth, 
			height: obj.height ? obj.height : obj.offsetHeight
		};

		while (obj && (obj != stopObj)) {
			info.left += obj.offsetLeft;
			info.top += obj.offsetTop;
			obj = obj.offsetParent;
		}

		return info;
	},
	
	Client: function(elem) {
		// constructor for new simple upload client
		this.handlers = {};
		
		// unique ID
		this.id = ZeroClipboard.nextId++;
		this.movieId = 'ZeroClipboardMovie_' + this.id;
		
		// register client with singleton to receive flash events
		ZeroClipboard.register(this.id, this);
		
		// create movie
		if (elem) this.glue(elem);
	}
};

ZeroClipboard.Client.prototype = {
	
	id: 0, // unique ID for us
	ready: false, // whether movie is ready to receive events or not
	movie: null, // reference to movie object
	clipText: '', // text to copy to clipboard
	handCursorEnabled: true, // whether to show hand cursor, or default pointer cursor
	cssEffects: true, // enable CSS mouse effects on dom container
	handlers: null, // user event handlers
	
	glue: function(elem, appendElem, stylesToAdd) {
		// glue to DOM element
		// elem can be ID or actual DOM element object
		this.domElement = ZeroClipboard.$(elem);
		
		// float just above object, or zIndex 99 if dom element isn't set
		var zIndex = 99;
		if (this.domElement.style.zIndex) {
			zIndex = parseInt(this.domElement.style.zIndex, 10) + 1;
		}
		
		if (typeof(appendElem) == 'string') {
			appendElem = ZeroClipboard.$(appendElem);
		}
		else if (typeof(appendElem) == 'undefined') {
			appendElem = document.getElementsByTagName('body')[0];
		}
		
		// find X/Y position of domElement
		var box = ZeroClipboard.getDOMObjectPosition(this.domElement, appendElem);
		
		// create floating DIV above element
		this.div = document.createElement('div');
		var style = this.div.style;
		style.position = 'absolute';
		style.left = '' + box.left + 'px';
		style.top = '' + box.top + 'px';
		style.width = '' + box.width + 'px';
		style.height = '' + box.height + 'px';
		style.zIndex = zIndex;
		
		if (typeof(stylesToAdd) == 'object') {
			for (addedStyle in stylesToAdd) {
				style[addedStyle] = stylesToAdd[addedStyle];
			}
		}
		
		// style.backgroundColor = '#f00'; // debug
		
		appendElem.appendChild(this.div);
		
		this.div.innerHTML = this.getHTML( box.width, box.height );
	},
	
	getHTML: function(width, height) {
		// return HTML for movie
		var html = '';
		var flashvars = 'id=' + this.id + 
			'&width=' + width + 
			'&height=' + height;
			
		if (navigator.userAgent.match(/MSIE/)) {
			// IE gets an OBJECT tag
			var protocol = location.href.match(/^https/i) ? 'https://' : 'http://';
			html += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+protocol+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+width+'" height="'+height+'" id="'+this.movieId+'" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+ZeroClipboard.moviePath+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+flashvars+'"/><param name="wmode" value="transparent"/></object>';
		}
		else {
			// all other browsers get an EMBED tag
			html += '<embed id="'+this.movieId+'" src="'+ZeroClipboard.moviePath+'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+width+'" height="'+height+'" name="'+this.movieId+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+flashvars+'" wmode="transparent" />';
		}
		return html;
	},
	
	hide: function() {
		// temporarily hide floater offscreen
		if (this.div) {
			this.div.style.left = '-2000px';
		}
	},
	
	show: function() {
		// show ourselves after a call to hide()
		this.reposition();
	},
	
	destroy: function() {
		// destroy control and floater
		if (this.domElement && this.div) {
			this.hide();
			this.div.innerHTML = '';
			
			var body = document.getElementsByTagName('body')[0];
			try { body.removeChild( this.div ); } catch(e) {;}
			
			this.domElement = null;
			this.div = null;
		}
	},
	
	reposition: function(elem) {
		// reposition our floating div, optionally to new container
		// warning: container CANNOT change size, only position
		if (elem) {
			this.domElement = ZeroClipboard.$(elem);
			if (!this.domElement) this.hide();
		}
		
		if (this.domElement && this.div) {
			var box = ZeroClipboard.getDOMObjectPosition(this.domElement);
			var style = this.div.style;
			style.left = '' + box.left + 'px';
			style.top = '' + box.top + 'px';
		}
	},
	
	setText: function(newText) {
		// set text to be copied to clipboard
		this.clipText = newText;
		if (this.ready) this.movie.setText(newText);
	},
	
	addEventListener: function(eventName, func) {
		// add user event listener for event
		// event types: load, queueStart, fileStart, fileComplete, queueComplete, progress, error, cancel
		eventName = eventName.toString().toLowerCase().replace(/^on/, '');
		if (!this.handlers[eventName]) this.handlers[eventName] = [];
		this.handlers[eventName].push(func);
	},
	
	setHandCursor: function(enabled) {
		// enable hand cursor (true), or default arrow cursor (false)
		this.handCursorEnabled = enabled;
		if (this.ready) this.movie.setHandCursor(enabled);
	},
	
	setCSSEffects: function(enabled) {
		// enable or disable CSS effects on DOM container
		this.cssEffects = !!enabled;
	},
	
	receiveEvent: function(eventName, args) {
		// receive event from flash
		eventName = eventName.toString().toLowerCase().replace(/^on/, '');
				
		// special behavior for certain events
		switch (eventName) {
			case 'load':
				// movie claims it is ready, but in IE this isn't always the case...
				// bug fix: Cannot extend EMBED DOM elements in Firefox, must use traditional function
				this.movie = document.getElementById(this.movieId);
				if (!this.movie) {
					var self = this;
					setTimeout( function() { self.receiveEvent('load', null); }, 1 );
					return;
				}
				
				// firefox on pc needs a "kick" in order to set these in certain cases
				if (!this.ready && navigator.userAgent.match(/Firefox/) && navigator.userAgent.match(/Windows/)) {
					var self = this;
					setTimeout( function() { self.receiveEvent('load', null); }, 100 );
					this.ready = true;
					return;
				}
				
				this.ready = true;
				this.movie.setText( this.clipText );
				this.movie.setHandCursor( this.handCursorEnabled );
				break;
			
			case 'mouseover':
				if (this.domElement && this.cssEffects) {
					this.domElement.addClass('hover');
					if (this.recoverActive) this.domElement.addClass('active');
				}
				break;
			
			case 'mouseout':
				if (this.domElement && this.cssEffects) {
					this.recoverActive = false;
					if (this.domElement.hasClass('active')) {
						this.domElement.removeClass('active');
						this.recoverActive = true;
					}
					this.domElement.removeClass('hover');
				}
				break;
			
			case 'mousedown':
				if (this.domElement && this.cssEffects) {
					this.domElement.addClass('active');
				}
				break;
			
			case 'mouseup':
				if (this.domElement && this.cssEffects) {
					this.domElement.removeClass('active');
					this.recoverActive = false;
				}
				break;
		} // switch eventName
		
		if (this.handlers[eventName]) {
			for (var idx = 0, len = this.handlers[eventName].length; idx < len; idx++) {
				var func = this.handlers[eventName][idx];
			
				if (typeof(func) == 'function') {
					// actual function reference
					func(this, args);
				}
				else if ((typeof(func) == 'object') && (func.length == 2)) {
					// PHP style object + method, i.e. [myObject, 'myMethod']
					func[0][ func[1] ](this, args);
				}
				else if (typeof(func) == 'string') {
					// name of function
					window[func](this, args);
				}
			} // foreach event handler defined
		} // user defined handler for event
	}
	
};
	
//STARTS HERE//	


	var clip = null;
		
		function findById(id) { return document.getElementById(id); }
		
		function init() {
			clip = new ZeroClipboard.Client();
			
			
			
			clip.setHandCursor( true );
			
			clip.addEventListener('load', function (client) {
				debugstr("");
      });
			
			clip.addEventListener('mouseOver', function (client) {
				// update the text on mouse over
				clip.setText( findById('fe_text').value );
			});
			
			clip.addEventListener('complete', function (client, text) {
				debugstr("EMBED <br> COPIED");
			});
			
			clip.glue( 'embed');
		}
		
		function debugstr(msg) {
			var p = document.createElement('p');
			p.innerHTML = msg;
			findById('d_debug').appendChild(p);
		}
		
