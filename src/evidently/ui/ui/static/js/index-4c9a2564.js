import{h as U,k as W,d as p,l as lt,_ as mt,m as yt,j as d,B as K,n as Mt,L as X,o as pt,p as gt,q as Tt,s as Dt,t as Yt,v as xt,T as Lt,w as Ot,x as wt,y as jt,z as _t,E as St,H as vt,O as bt}from"./vendor-22c0ce7a.js";import{r as kt,i as At}from"./createSvgIcon-6a7b5fca.js";var st={exports:{}};(function(r,f){(function(i,h){r.exports=h()})(U,function(){var i="week",h="year";return function(y,t,e){var s=t.prototype;s.week=function(o){if(o===void 0&&(o=null),o!==null)return this.add(7*(o-this.week()),"day");var a=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var c=e(this).startOf(h).add(1,h).date(a),M=e(this).endOf(i);if(c.isBefore(M))return 1}var g=e(this).startOf(h).date(a).startOf(i).subtract(1,"millisecond"),H=this.diff(g,i,!0);return H<0?e(this).startOf("week").week():Math.ceil(H)},s.weeks=function(o){return o===void 0&&(o=null),this.week(o)}}})})(st);var Ct=st.exports;const zt=W(Ct);var rt={exports:{}};(function(r,f){(function(i,h){r.exports=h()})(U,function(){var i={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},h=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,y=/\d\d/,t=/\d\d?/,e=/\d*[^-_:/,()\s\d]+/,s={},o=function(n){return(n=+n)+(n>68?1900:2e3)},a=function(n){return function(u){this[n]=+u}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(n){(this.zone||(this.zone={})).offset=function(u){if(!u||u==="Z")return 0;var m=u.match(/([+-]|\d\d)/g),l=60*m[1]+(+m[2]||0);return l===0?0:m[0]==="+"?-l:l}(n)}],M=function(n){var u=s[n];return u&&(u.indexOf?u:u.s.concat(u.f))},g=function(n,u){var m,l=s.meridiem;if(l){for(var T=1;T<=24;T+=1)if(n.indexOf(l(T,0,u))>-1){m=T>12;break}}else m=n===(u?"pm":"PM");return m},H={A:[e,function(n){this.afternoon=g(n,!1)}],a:[e,function(n){this.afternoon=g(n,!0)}],S:[/\d/,function(n){this.milliseconds=100*+n}],SS:[y,function(n){this.milliseconds=10*+n}],SSS:[/\d{3}/,function(n){this.milliseconds=+n}],s:[t,a("seconds")],ss:[t,a("seconds")],m:[t,a("minutes")],mm:[t,a("minutes")],H:[t,a("hours")],h:[t,a("hours")],HH:[t,a("hours")],hh:[t,a("hours")],D:[t,a("day")],DD:[y,a("day")],Do:[e,function(n){var u=s.ordinal,m=n.match(/\d+/);if(this.day=m[0],u)for(var l=1;l<=31;l+=1)u(l).replace(/\[|\]/g,"")===n&&(this.day=l)}],M:[t,a("month")],MM:[y,a("month")],MMM:[e,function(n){var u=M("months"),m=(M("monthsShort")||u.map(function(l){return l.slice(0,3)})).indexOf(n)+1;if(m<1)throw new Error;this.month=m%12||m}],MMMM:[e,function(n){var u=M("months").indexOf(n)+1;if(u<1)throw new Error;this.month=u%12||u}],Y:[/[+-]?\d+/,a("year")],YY:[y,function(n){this.year=o(n)}],YYYY:[/\d{4}/,a("year")],Z:c,ZZ:c};function E(n){var u,m;u=n,m=s&&s.formats;for(var l=(n=u.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(b,j,x){var D=x&&x.toUpperCase();return j||m[x]||i[x]||m[D].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(_,S,k){return S||k.slice(1)})})).match(h),T=l.length,L=0;L<T;L+=1){var P=l[L],v=H[P],O=v&&v[0],w=v&&v[1];l[L]=w?{regex:O,parser:w}:P.replace(/^\[|\]$/g,"")}return function(b){for(var j={},x=0,D=0;x<T;x+=1){var _=l[x];if(typeof _=="string")D+=_.length;else{var S=_.regex,k=_.parser,F=b.slice(D),C=S.exec(F)[0];k.call(j,C),b=b.replace(C,"")}}return function(A){var Y=A.afternoon;if(Y!==void 0){var z=A.hours;Y?z<12&&(A.hours+=12):z===12&&(A.hours=0),delete A.afternoon}}(j),j}}return function(n,u,m){m.p.customParseFormat=!0,n&&n.parseTwoDigitYear&&(o=n.parseTwoDigitYear);var l=u.prototype,T=l.parse;l.parse=function(L){var P=L.date,v=L.utc,O=L.args;this.$u=v;var w=O[1];if(typeof w=="string"){var b=O[2]===!0,j=O[3]===!0,x=b||j,D=O[2];j&&(D=O[2]),s=this.$locale(),!b&&D&&(s=m.Ls[D]),this.$d=function(F,C,A){try{if(["x","X"].indexOf(C)>-1)return new Date((C==="X"?1e3:1)*F);var Y=E(C)(F),z=Y.year,B=Y.month,ht=Y.day,ut=Y.hours,dt=Y.minutes,ct=Y.seconds,ft=Y.milliseconds,tt=Y.zone,N=new Date,$=ht||(z||B?1:N.getDate()),J=z||N.getFullYear(),I=0;z&&!B||(I=B>0?B-1:N.getMonth());var Z=ut||0,G=dt||0,R=ct||0,q=ft||0;return tt?new Date(Date.UTC(J,I,$,Z,G,R,q+60*tt.offset*1e3)):A?new Date(Date.UTC(J,I,$,Z,G,R,q)):new Date(J,I,$,Z,G,R,q)}catch{return new Date("")}}(P,w,v),this.init(),D&&D!==!0&&(this.$L=this.locale(D).$L),x&&P!=this.format(w)&&(this.$d=new Date("")),s={}}else if(w instanceof Array)for(var _=w.length,S=1;S<=_;S+=1){O[1]=w[S-1];var k=m.apply(this,O);if(k.isValid()){this.$d=k.$d,this.$L=k.$L,this.init();break}S===_&&(this.$d=new Date(""))}else T.call(this,L)}}})})(rt);var Ht=rt.exports;const Pt=W(Ht);var nt={exports:{}};(function(r,f){(function(i,h){r.exports=h()})(U,function(){var i={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(h,y,t){var e=y.prototype,s=e.format;t.en.formats=i,e.format=function(o){o===void 0&&(o="YYYY-MM-DDTHH:mm:ssZ");var a=this.$locale().formats,c=function(M,g){return M.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(H,E,n){var u=n&&n.toUpperCase();return E||g[n]||i[n]||g[u].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(m,l,T){return l||T.slice(1)})})}(o,a===void 0?{}:a);return s.call(this,c)}}})})(nt);var Ut=nt.exports;const Ft=W(Ut);var it={exports:{}};(function(r,f){(function(i,h){r.exports=h()})(U,function(){return function(i,h,y){h.prototype.isBetween=function(t,e,s,o){var a=y(t),c=y(e),M=(o=o||"()")[0]==="(",g=o[1]===")";return(M?this.isAfter(a,s):!this.isBefore(a,s))&&(g?this.isBefore(c,s):!this.isAfter(c,s))||(M?this.isBefore(a,s):!this.isAfter(a,s))&&(g?this.isAfter(c,s):!this.isBefore(c,s))}}})})(it);var Bt=it.exports;const It=W(Bt);p.extend(Pt);p.extend(Ft);p.extend(It);const Wt=lt(["Your locale has not been found.","Either the locale key is not a supported one. Locales supported by dayjs are available here: https://github.com/iamkun/dayjs/tree/dev/src/locale","Or you forget to import the locale from 'dayjs/locale/{localeUsed}'","fallback on English locale"]),Et={YY:"year",YYYY:{sectionType:"year",contentType:"digit",maxLength:4},M:{sectionType:"month",contentType:"digit",maxLength:2},MM:"month",MMM:{sectionType:"month",contentType:"letter"},MMMM:{sectionType:"month",contentType:"letter"},D:{sectionType:"day",contentType:"digit",maxLength:2},DD:"day",Do:{sectionType:"day",contentType:"digit-with-letter"},d:{sectionType:"weekDay",contentType:"digit",maxLength:2},dd:{sectionType:"weekDay",contentType:"letter"},ddd:{sectionType:"weekDay",contentType:"letter"},dddd:{sectionType:"weekDay",contentType:"letter"},A:"meridiem",a:"meridiem",H:{sectionType:"hours",contentType:"digit",maxLength:2},HH:"hours",h:{sectionType:"hours",contentType:"digit",maxLength:2},hh:"hours",m:{sectionType:"minutes",contentType:"digit",maxLength:2},mm:"minutes",s:{sectionType:"seconds",contentType:"digit",maxLength:2},ss:"seconds"},Nt={year:"YYYY",month:"MMMM",monthShort:"MMM",dayOfMonth:"D",weekday:"dddd",weekdayShort:"ddd",hours24h:"HH",hours12h:"hh",meridiem:"A",minutes:"mm",seconds:"ss",fullDate:"ll",fullDateWithWeekday:"dddd, LL",keyboardDate:"L",shortDate:"MMM D",normalDate:"D MMMM",normalDateWithWeekday:"ddd, MMM D",monthAndYear:"MMMM YYYY",monthAndDate:"MMMM D",fullTime:"LT",fullTime12h:"hh:mm A",fullTime24h:"HH:mm",fullDateTime:"lll",fullDateTime12h:"ll hh:mm A",fullDateTime24h:"ll HH:mm",keyboardDateTime:"L LT",keyboardDateTime12h:"L hh:mm A",keyboardDateTime24h:"L HH:mm"},V=["Missing UTC plugin","To be able to use UTC or timezones, you have to enable the `utc` plugin","Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-utc"].join(`
`),et=["Missing timezone plugin","To be able to use timezones, you have to enable both the `utc` and the `timezone` plugin","Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-timezone"].join(`
`),$t=(r,f)=>f?(...i)=>r(...i).locale(f):r;class Jt{constructor({locale:f,formats:i,instance:h}={}){var y;this.isMUIAdapter=!0,this.isTimezoneCompatible=!0,this.lib="dayjs",this.rawDayJsInstance=void 0,this.dayjs=void 0,this.locale=void 0,this.formats=void 0,this.escapedCharacters={start:"[",end:"]"},this.formatTokenMap=Et,this.setLocaleToValue=t=>{const e=this.getCurrentLocaleCode();return e===t.locale()?t:t.locale(e)},this.hasUTCPlugin=()=>typeof p.utc<"u",this.hasTimezonePlugin=()=>typeof p.tz<"u",this.isSame=(t,e,s)=>{const o=this.setTimezone(e,this.getTimezone(t));return t.format(s)===o.format(s)},this.cleanTimezone=t=>{switch(t){case"default":return;case"system":return p.tz.guess();default:return t}},this.createSystemDate=t=>{if(this.rawDayJsInstance)return this.rawDayJsInstance(t);if(this.hasUTCPlugin()&&this.hasTimezonePlugin()){const e=p.tz.guess();return e!=="UTC"?p.tz(t,e):p(t)}return p(t)},this.createUTCDate=t=>{if(!this.hasUTCPlugin())throw new Error(V);return p.utc(t)},this.createTZDate=(t,e)=>{if(!this.hasUTCPlugin())throw new Error(V);if(!this.hasTimezonePlugin())throw new Error(et);const s=t!==void 0&&!t.endsWith("Z");return p(t).tz(this.cleanTimezone(e),s)},this.getLocaleFormats=()=>{const t=p.Ls,e=this.locale||"en";let s=t[e];return s===void 0&&(Wt(),s=t.en),s.formats},this.adjustOffset=t=>{if(!this.hasTimezonePlugin())return t;const e=this.getTimezone(t);if(e!=="UTC"){var s,o;const a=t.tz(this.cleanTimezone(e),!0);return((s=a.$offset)!=null?s:0)===((o=t.$offset)!=null?o:0)?t:a}return t},this.date=t=>t===null?null:this.dayjs(t),this.dateWithTimezone=(t,e)=>{if(t===null)return null;let s;return e==="UTC"?s=this.createUTCDate(t):e==="system"||e==="default"&&!this.hasTimezonePlugin()?s=this.createSystemDate(t):s=this.createTZDate(t,e),this.locale===void 0?s:s.locale(this.locale)},this.getTimezone=t=>{if(this.hasTimezonePlugin()){var e;const s=(e=t.$x)==null?void 0:e.$timezone;if(s)return s}return this.hasUTCPlugin()&&t.isUTC()?"UTC":"system"},this.setTimezone=(t,e)=>{if(this.getTimezone(t)===e)return t;if(e==="UTC"){if(!this.hasUTCPlugin())throw new Error(V);return t.utc()}if(e==="system")return t.local();if(!this.hasTimezonePlugin()){if(e==="default")return t;throw new Error(et)}return p.tz(t,this.cleanTimezone(e))},this.toJsDate=t=>t.toDate(),this.parseISO=t=>this.dayjs(t),this.toISO=t=>t.toISOString(),this.parse=(t,e)=>t===""?null:this.dayjs(t,e,this.locale,!0),this.getCurrentLocaleCode=()=>this.locale||"en",this.is12HourCycleInCurrentLocale=()=>/A|a/.test(this.getLocaleFormats().LT||""),this.expandFormat=t=>{const e=this.getLocaleFormats(),s=o=>o.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(a,c,M)=>c||M.slice(1));return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(o,a,c)=>{const M=c&&c.toUpperCase();return a||e[c]||s(e[M])})},this.getFormatHelperText=t=>this.expandFormat(t).replace(/a/gi,"(a|p)m").toLocaleLowerCase(),this.isNull=t=>t===null,this.isValid=t=>this.dayjs(t).isValid(),this.format=(t,e)=>this.formatByString(t,this.formats[e]),this.formatByString=(t,e)=>this.dayjs(t).format(e),this.formatNumber=t=>t,this.getDiff=(t,e,s)=>t.diff(e,s),this.isEqual=(t,e)=>t===null&&e===null?!0:this.dayjs(t).toDate().getTime()===this.dayjs(e).toDate().getTime(),this.isSameYear=(t,e)=>this.isSame(t,e,"YYYY"),this.isSameMonth=(t,e)=>this.isSame(t,e,"YYYY-MM"),this.isSameDay=(t,e)=>this.isSame(t,e,"YYYY-MM-DD"),this.isSameHour=(t,e)=>t.isSame(e,"hour"),this.isAfter=(t,e)=>t>e,this.isAfterYear=(t,e)=>this.hasUTCPlugin()?!this.isSameYear(t,e)&&t.utc()>e.utc():t.isAfter(e,"year"),this.isAfterDay=(t,e)=>this.hasUTCPlugin()?!this.isSameDay(t,e)&&t.utc()>e.utc():t.isAfter(e,"day"),this.isBefore=(t,e)=>t<e,this.isBeforeYear=(t,e)=>this.hasUTCPlugin()?!this.isSameYear(t,e)&&t.utc()<e.utc():t.isBefore(e,"year"),this.isBeforeDay=(t,e)=>this.hasUTCPlugin()?!this.isSameDay(t,e)&&t.utc()<e.utc():t.isBefore(e,"day"),this.isWithinRange=(t,[e,s])=>t>=e&&t<=s,this.startOfYear=t=>this.adjustOffset(t.startOf("year")),this.startOfMonth=t=>this.adjustOffset(t.startOf("month")),this.startOfWeek=t=>this.adjustOffset(t.startOf("week")),this.startOfDay=t=>this.adjustOffset(t.startOf("day")),this.endOfYear=t=>this.adjustOffset(t.endOf("year")),this.endOfMonth=t=>this.adjustOffset(t.endOf("month")),this.endOfWeek=t=>this.adjustOffset(t.endOf("week")),this.endOfDay=t=>this.adjustOffset(t.endOf("day")),this.addYears=(t,e)=>this.adjustOffset(e<0?t.subtract(Math.abs(e),"year"):t.add(e,"year")),this.addMonths=(t,e)=>this.adjustOffset(e<0?t.subtract(Math.abs(e),"month"):t.add(e,"month")),this.addWeeks=(t,e)=>this.adjustOffset(e<0?t.subtract(Math.abs(e),"week"):t.add(e,"week")),this.addDays=(t,e)=>this.adjustOffset(e<0?t.subtract(Math.abs(e),"day"):t.add(e,"day")),this.addHours=(t,e)=>this.adjustOffset(e<0?t.subtract(Math.abs(e),"hour"):t.add(e,"hour")),this.addMinutes=(t,e)=>this.adjustOffset(e<0?t.subtract(Math.abs(e),"minute"):t.add(e,"minute")),this.addSeconds=(t,e)=>this.adjustOffset(e<0?t.subtract(Math.abs(e),"second"):t.add(e,"second")),this.getYear=t=>t.year(),this.getMonth=t=>t.month(),this.getDate=t=>t.date(),this.getHours=t=>t.hour(),this.getMinutes=t=>t.minute(),this.getSeconds=t=>t.second(),this.getMilliseconds=t=>t.millisecond(),this.setYear=(t,e)=>this.adjustOffset(t.set("year",e)),this.setMonth=(t,e)=>this.adjustOffset(t.set("month",e)),this.setDate=(t,e)=>this.adjustOffset(t.set("date",e)),this.setHours=(t,e)=>this.adjustOffset(t.set("hour",e)),this.setMinutes=(t,e)=>this.adjustOffset(t.set("minute",e)),this.setSeconds=(t,e)=>this.adjustOffset(t.set("second",e)),this.setMilliseconds=(t,e)=>this.adjustOffset(t.set("millisecond",e)),this.getDaysInMonth=t=>t.daysInMonth(),this.getNextMonth=t=>this.addMonths(t,1),this.getPreviousMonth=t=>this.addMonths(t,-1),this.getMonthArray=t=>{const s=[t.startOf("year")];for(;s.length<12;){const o=s[s.length-1];s.push(this.addMonths(o,1))}return s},this.mergeDateAndTime=(t,e)=>t.hour(e.hour()).minute(e.minute()).second(e.second()),this.getWeekdays=()=>{const t=this.dayjs().startOf("week");return[0,1,2,3,4,5,6].map(e=>this.formatByString(this.addDays(t,e),"dd"))},this.getWeekArray=t=>{const e=this.setLocaleToValue(t),s=e.startOf("month").startOf("week"),o=e.endOf("month").endOf("week");let a=0,c=s;const M=[];for(;c<o;){const g=Math.floor(a/7);M[g]=M[g]||[],M[g].push(c),c=this.addDays(c,1),a+=1}return M},this.getWeekNumber=t=>t.week(),this.getYearRange=(t,e)=>{const s=t.startOf("year"),o=e.endOf("year"),a=[];let c=s;for(;c<o;)a.push(c),c=this.addYears(c,1);return a},this.getMeridiemText=t=>t==="am"?"AM":"PM",this.rawDayJsInstance=h,this.dayjs=$t((y=this.rawDayJsInstance)!=null?y:p,f),this.locale=f,this.formats=mt({},Nt,i),p.extend(zt)}}const Zt=r=>{var f;return typeof((f=r==null?void 0:r.handle)==null?void 0:f.crumb)=="function"},Gt=()=>{const f=yt().filter(Zt).map(({handle:i,data:h,id:y,pathname:t,params:e})=>i.crumb(h,{id:y,pathname:t,params:e}));return d.jsx(K,{children:d.jsx(Mt,{"aria-label":"breadcrumb",children:f.map(i=>d.jsx(X,{component:pt,color:"inherit",to:i.to,children:i.linkText},i.to))})})},Rt=()=>gt().state!=="idle"?d.jsx(Tt,{sx:{height:4}}):d.jsx(K,{sx:{height:4}});var Q={},qt=At;Object.defineProperty(Q,"__esModule",{value:!0});var at=Q.default=void 0;Kt(Dt);var Vt=qt(kt()),Xt=d;function ot(r){if(typeof WeakMap!="function")return null;var f=new WeakMap,i=new WeakMap;return(ot=function(h){return h?i:f})(r)}function Kt(r,f){if(!f&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var i=ot(f);if(i&&i.has(r))return i.get(r);var h={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var t in r)if(t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)){var e=y?Object.getOwnPropertyDescriptor(r,t):null;e&&(e.get||e.set)?Object.defineProperty(h,t,e):h[t]=r[t]}return h.default=r,i&&i.set(r,h),h}var Qt=(0,Vt.default)((0,Xt.jsx)("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub");at=Q.default=Qt;function te({version:r,authComponent:f,logoSrc:i}){return d.jsx(d.Fragment,{children:d.jsx(Yt,{position:"static",color:"transparent",children:d.jsxs(xt,{children:[d.jsxs(Lt,{variant:"h6",sx:{flexGrow:1},children:[d.jsx("img",{src:i,height:"55px"}),d.jsx("span",{style:{verticalAlign:"super",fontSize:"0.75rem"},children:r})]}),f,d.jsx(X,{href:"https://github.com/evidentlyai/evidently",children:d.jsx(Ot,{children:d.jsx(at,{})})}),d.jsx(X,{href:"https://docs.evidentlyai.com/",children:d.jsx(wt,{children:"Docs"})})]})})})}function ee(r){return d.jsx(d.Fragment,{children:d.jsxs(K,{p:3,children:[d.jsx(Gt,{}),r.children]})})}var se={exports:{}};(function(r,f){(function(i,h){r.exports=h(jt())})(U,function(i){function h(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var y=h(i),t={name:"en-gb",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekStart:1,yearStart:4,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},ordinal:function(e){var s=["th","st","nd","rd"],o=e%100;return"["+e+(s[(o-20)%10]||s[o]||s[0])+"]"}};return y.default.locale(t,null,!0),t})})(se);const ae=({logoSrc:r,authComponent:f})=>{const{version:i}=_t();return d.jsxs(St,{dateAdapter:Jt,adapterLocale:"en-gb",children:[d.jsx(te,{authComponent:f,version:i,logoSrc:r}),d.jsx(Rt,{}),d.jsx(vt,{}),d.jsx(ee,{children:d.jsx(bt,{})})]})},oe={crumb:()=>({to:"/",linkText:"Home"})};export{ae as HomeComponentTemplate,oe as handle};
