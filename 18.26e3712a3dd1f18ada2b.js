(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"1I5t":function(n,t,e){"use strict";e.d(t,"a",function(){return u});var o=e("F/XL"),a=e("67Y/"),r=e("X+KH"),l=e("CcnG"),i=e("t/Na"),u=function(){function n(n,t){this.http=n,this.user=t,console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx2")}return n.prototype.load=function(){return this.data?Object(o.a)(this.data):this.http.get("assets/data/data.json").pipe(Object(a.a)(this.processData,this))},n.prototype.processData=function(n){var t=this;return this.data=n,this.data.tracks=[],this.data.schedule.forEach(function(n){n.groups.forEach(function(n){n.sessions.forEach(function(n){n.speakers=[],n.speakerNames&&n.speakerNames.forEach(function(e){var o=t.data.speakers.find(function(n){return n.name===e});o&&(n.speakers.push(o),o.sessions=o.sessions||[],o.sessions.push(n))}),n.tracks&&n.tracks.forEach(function(n){t.data.tracks.indexOf(n)<0&&t.data.tracks.push(n)})})})}),this.data},n.prototype.getTimeline=function(n,t,e,o){var r=this;return void 0===t&&(t=""),void 0===e&&(e=[]),void 0===o&&(o="all"),this.load().pipe(Object(a.a)(function(a){var l=a.schedule[n];l.shownSessions=0;var i=(t=t.toLowerCase().replace(/,|\.|-/g," ")).split(" ").filter(function(n){return!!n.trim().length});return l.groups.forEach(function(n){n.hide=!0,n.sessions.forEach(function(t){r.filterSession(t,i,e,o),t.hide||(n.hide=!1,l.shownSessions++)})}),l}))},n.prototype.filterSession=function(n,t,e,o){var a=!1;t.length?t.forEach(function(t){n.name.toLowerCase().indexOf(t)>-1&&(a=!0)}):a=!0;var r=!1;n.tracks.forEach(function(n){-1===e.indexOf(n)&&(r=!0)});var l=!1;"favorites"===o?this.user.hasFavorite(n.name)&&(l=!0):l=!0,n.hide=!(a&&r&&l)},n.prototype.getSpeakers=function(){return this.load().pipe(Object(a.a)(function(n){return n.speakers.sort(function(n,t){var e=n.name.split(" ").pop(),o=t.name.split(" ").pop();return e.localeCompare(o)})}))},n.prototype.getTracks=function(){return this.load().pipe(Object(a.a)(function(n){return n.tracks.sort()}))},n.prototype.getMap=function(){return this.load().pipe(Object(a.a)(function(n){return n.map}))},n.ngInjectableDef=l.defineInjectable({factory:function(){return new n(l.inject(i.c),l.inject(r.a))},token:n,providedIn:"root"}),n}()},"862v":function(n,t,e){"use strict";e.d(t,"a",function(){return o});var o=function(){return function(){}}()},Cjxi:function(n,t,e){"use strict";var o=e("CcnG"),a=e("oBZk"),r=e("ZZ/e"),l=e("nbk5"),i=e("1I5t");e.d(t,"a",function(){return p});var u=o["\u0275crt"]({encapsulation:0,styles:[[".map-canvas[_ngcontent-%COMP%]{position:absolute;height:100%;width:100%;background-color:transparent;opacity:0;transition:opacity 150ms ease-in}.show-map[_ngcontent-%COMP%]{opacity:1}"]],data:{}});function c(n){return o["\u0275vid"](0,[o["\u0275qud"](402653184,1,{mapElement:0}),(n()(),o["\u0275eld"](1,0,null,null,10,"ion-header",[],null,null,null,a.gc,a.cb)),o["\u0275did"](2,49152,null,0,r.Sb,[o.ChangeDetectorRef,o.ElementRef],null,null),(n()(),o["\u0275eld"](3,0,null,0,8,"ion-toolbar",[],null,null,null,a.Nb,a.J)),o["\u0275did"](4,49152,null,0,r.jb,[o.ChangeDetectorRef,o.ElementRef],null,null),(n()(),o["\u0275eld"](5,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,a.Rb,a.N)),o["\u0275did"](6,49152,null,0,r.Cb,[o.ChangeDetectorRef,o.ElementRef],null,null),(n()(),o["\u0275eld"](7,0,null,0,1,"ion-menu-button",[],null,null,null,a.rb,a.n)),o["\u0275did"](8,49152,null,0,r.A,[o.ChangeDetectorRef,o.ElementRef],null,null),(n()(),o["\u0275eld"](9,0,null,0,2,"ion-title",[],null,null,null,a.Lb,a.H)),o["\u0275did"](10,49152,null,0,r.hb,[o.ChangeDetectorRef,o.ElementRef],null,null),(n()(),o["\u0275ted"](-1,0,["Map"])),(n()(),o["\u0275eld"](12,0,null,null,2,"ion-content",[],null,null,null,a.ac,a.W)),o["\u0275did"](13,49152,null,0,r.Lb,[o.ChangeDetectorRef,o.ElementRef],null,null),(n()(),o["\u0275eld"](14,0,[[1,0],["mapCanvas",1]],0,0,"div",[["class","map-canvas"]],null,null,null,null,null))],null,null)}function s(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"page-map",[],null,null,null,c,u)),o["\u0275did"](1,4243456,null,0,l.a,[i.a,r.j],null,null)],null,null)}var p=o["\u0275ccf"]("page-map",l.a,s,{},{},[])},lz9Z:function(n,t,e){"use strict";e.r(t),e.d(t,"MapModuleNgFactory",function(){return f});var o=e("CcnG"),a=e("862v"),r=e("pMnS"),l=e("Cjxi"),i=e("Ip0R"),u=e("ZZ/e"),c=e("ZYCi"),s=e("oLE7"),p=e("nbk5"),f=o["\u0275cmf"](a.a,[],function(n){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,l.a]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,i.NgLocalization,i.NgLocaleLocalization,[o.LOCALE_ID,[2,i["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,u.ub,u.ub,[o.NgZone,o.ApplicationRef]),o["\u0275mpd"](4608,u.xb,u.xb,[u.ub,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](4608,u.yb,u.yb,[u.ub,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](1073742336,i.CommonModule,i.CommonModule,[]),o["\u0275mpd"](1073742336,u.d,u.d,[]),o["\u0275mpd"](1073742336,c.p,c.p,[[2,c.v],[2,c.n]]),o["\u0275mpd"](1073742336,s.a,s.a,[]),o["\u0275mpd"](1073742336,a.a,a.a,[]),o["\u0275mpd"](1024,c.l,function(){return[[{path:"",component:p.a}]]},[])])})},nbk5:function(n,t,e){"use strict";e.d(t,"a",function(){return o}),e("1I5t"),e("ZZ/e");var o=function(){function n(n,t){this.confData=n,this.platform=t}return n.prototype.ngAfterViewInit=function(){return n=this,void 0,e=function(){var n,t=this;return function(n,t){var e,o,a,r,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function i(r){return function(i){return function(r){if(e)throw new TypeError("Generator is already executing.");for(;l;)try{if(e=1,o&&(a=2&r[0]?o.return:r[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,r[1])).done)return a;switch(o=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return l.label++,{value:r[1],done:!1};case 5:l.label++,o=r[1],r=[0];continue;case 7:r=l.ops.pop(),l.trys.pop();continue;default:if(!(a=(a=l.trys).length>0&&a[a.length-1])&&(6===r[0]||2===r[0])){l=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){l.label=r[1];break}if(6===r[0]&&l.label<a[1]){l.label=a[1],a=r;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(r);break}a[2]&&l.ops.pop(),l.trys.pop();continue}r=t.call(n,l)}catch(i){r=[6,i],o=0}finally{e=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,i])}}}(this,function(e){switch(e.label){case 0:return[4,("AIzaSyB8pf6ZdFQj5qw7rc_HSGrhUwQKfIe9ICw",o=window,a=o.google,a&&a.maps?Promise.resolve(a.maps):new Promise(function(n,t){var e=document.createElement("script");e.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB8pf6ZdFQj5qw7rc_HSGrhUwQKfIe9ICw&v=3.31",e.async=!0,e.defer=!0,document.body.appendChild(e),e.onload=function(){var e=o.google;e&&e.maps?n(e.maps):t("google maps not available")}}))];case 1:return n=e.sent(),this.confData.getMap().subscribe(function(e){var o=t.mapElement.nativeElement,a=new n.Map(o,{center:e.find(function(n){return n.center}),zoom:16});e.forEach(function(t){var e=new n.InfoWindow({content:"<h5>"+t.name+"</h5>"}),o=new n.Marker({position:t,map:a,title:t.name});o.addListener("click",function(){e.open(a,o)})}),n.event.addListenerOnce(a,"idle",function(){o.classList.add("show-map")})}),[2]}var o,a})},new((t=void 0)||(t=Promise))(function(o,a){function r(n){try{i(e.next(n))}catch(t){a(t)}}function l(n){try{i(e.throw(n))}catch(t){a(t)}}function i(n){n.done?o(n.value):new t(function(t){t(n.value)}).then(r,l)}i((e=e.apply(n,[])).next())});var n,t,e},n}()},oLE7:function(n,t,e){"use strict";e.d(t,"a",function(){return o}),e("nbk5");var o=function(){return function(){}}()}}]);