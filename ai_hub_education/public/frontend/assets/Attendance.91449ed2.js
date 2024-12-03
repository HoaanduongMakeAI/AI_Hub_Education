import{s as ve,a as pe,l as $e}from"./index.a58cfeb7.js";import{ad as _e,r as G,s as C,v as B,I as se,J as oe,x as F,E as ge,F as he,B as W,D as v,a6 as ae,y as N,a7 as ue,K as ie,a5 as ye,f as De,l as le,z as X,L as be,P as Me,b as Se,N as we,R as xe}from"./frappe-ui.cf491ab7.js";import{_ as ce}from"./Calendar.e36df12d.js";import{c as de}from"./index.b6e28961.js";var me={exports:{}};(function(P,Z){(function(d,L){P.exports=L()})(_e,function(){var d=1e3,L=6e4,V=36e5,S="millisecond",b="second",_="minute",w="hour",m="day",c="week",g="month",u="quarter",h="year",T="date",D="Invalid Date",x=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,k=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,A={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var a=["th","st","nd","rd"],e=r%100;return"["+r+(a[(e-20)%10]||a[e]||a[0])+"]"}},I=function(r,a,e){var n=String(r);return!n||n.length>=a?r:""+Array(a+1-n.length).join(e)+r},ee={s:I,z:function(r){var a=-r.utcOffset(),e=Math.abs(a),n=Math.floor(e/60),t=e%60;return(a<=0?"+":"-")+I(n,2,"0")+":"+I(t,2,"0")},m:function r(a,e){if(a.date()<e.date())return-r(e,a);var n=12*(e.year()-a.year())+(e.month()-a.month()),t=a.clone().add(n,g),s=e-t<0,o=a.clone().add(n+(s?-1:1),g);return+(-(n+(e-t)/(s?t-o:o-t))||0)},a:function(r){return r<0?Math.ceil(r)||0:Math.floor(r)},p:function(r){return{M:g,y:h,w:c,d:m,D:T,h:w,m:_,s:b,ms:S,Q:u}[r]||String(r||"").toLowerCase().replace(/s$/,"")},u:function(r){return r===void 0}},z="en",Y={};Y[z]=A;var ne="$isDayjsObject",te=function(r){return r instanceof K||!(!r||!r[ne])},q=function r(a,e,n){var t;if(!a)return z;if(typeof a=="string"){var s=a.toLowerCase();Y[s]&&(t=s),e&&(Y[s]=e,t=s);var o=a.split("-");if(!t&&o.length>1)return r(o[0])}else{var l=a.name;Y[l]=a,t=l}return!n&&t&&(z=t),t||!n&&z},p=function(r,a){if(te(r))return r.clone();var e=typeof a=="object"?a:{};return e.date=r,e.args=arguments,new K(e)},i=ee;i.l=q,i.i=te,i.w=function(r,a){return p(r,{locale:a.$L,utc:a.$u,x:a.$x,$offset:a.$offset})};var K=function(){function r(e){this.$L=q(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[ne]=!0}var a=r.prototype;return a.parse=function(e){this.$d=function(n){var t=n.date,s=n.utc;if(t===null)return new Date(NaN);if(i.u(t))return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){var o=t.match(x);if(o){var l=o[2]-1||0,f=(o[7]||"0").substring(0,3);return s?new Date(Date.UTC(o[1],l,o[3]||1,o[4]||0,o[5]||0,o[6]||0,f)):new Date(o[1],l,o[3]||1,o[4]||0,o[5]||0,o[6]||0,f)}}return new Date(t)}(e),this.init()},a.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},a.$utils=function(){return i},a.isValid=function(){return this.$d.toString()!==D},a.isSame=function(e,n){var t=p(e);return this.startOf(n)<=t&&t<=this.endOf(n)},a.isAfter=function(e,n){return p(e)<this.startOf(n)},a.isBefore=function(e,n){return this.endOf(n)<p(e)},a.$g=function(e,n,t){return i.u(e)?this[n]:this.set(t,e)},a.unix=function(){return Math.floor(this.valueOf()/1e3)},a.valueOf=function(){return this.$d.getTime()},a.startOf=function(e,n){var t=this,s=!!i.u(n)||n,o=i.p(e),l=function(U,M){var E=i.w(t.$u?Date.UTC(t.$y,M,U):new Date(t.$y,M,U),t);return s?E:E.endOf(m)},f=function(U,M){return i.w(t.toDate()[U].apply(t.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(M)),t)},$=this.$W,y=this.$M,O=this.$D,j="set"+(this.$u?"UTC":"");switch(o){case h:return s?l(1,0):l(31,11);case g:return s?l(1,y):l(0,y+1);case c:var H=this.$locale().weekStart||0,R=($<H?$+7:$)-H;return l(s?O-R:O+(6-R),y);case m:case T:return f(j+"Hours",0);case w:return f(j+"Minutes",1);case _:return f(j+"Seconds",2);case b:return f(j+"Milliseconds",3);default:return this.clone()}},a.endOf=function(e){return this.startOf(e,!1)},a.$set=function(e,n){var t,s=i.p(e),o="set"+(this.$u?"UTC":""),l=(t={},t[m]=o+"Date",t[T]=o+"Date",t[g]=o+"Month",t[h]=o+"FullYear",t[w]=o+"Hours",t[_]=o+"Minutes",t[b]=o+"Seconds",t[S]=o+"Milliseconds",t)[s],f=s===m?this.$D+(n-this.$W):n;if(s===g||s===h){var $=this.clone().set(T,1);$.$d[l](f),$.init(),this.$d=$.set(T,Math.min(this.$D,$.daysInMonth())).$d}else l&&this.$d[l](f);return this.init(),this},a.set=function(e,n){return this.clone().$set(e,n)},a.get=function(e){return this[i.p(e)]()},a.add=function(e,n){var t,s=this;e=Number(e);var o=i.p(n),l=function(y){var O=p(s);return i.w(O.date(O.date()+Math.round(y*e)),s)};if(o===g)return this.set(g,this.$M+e);if(o===h)return this.set(h,this.$y+e);if(o===m)return l(1);if(o===c)return l(7);var f=(t={},t[_]=L,t[w]=V,t[b]=d,t)[o]||1,$=this.$d.getTime()+e*f;return i.w($,this)},a.subtract=function(e,n){return this.add(-1*e,n)},a.format=function(e){var n=this,t=this.$locale();if(!this.isValid())return t.invalidDate||D;var s=e||"YYYY-MM-DDTHH:mm:ssZ",o=i.z(this),l=this.$H,f=this.$m,$=this.$M,y=t.weekdays,O=t.months,j=t.meridiem,H=function(M,E,J,Q){return M&&(M[E]||M(n,s))||J[E].slice(0,Q)},R=function(M){return i.s(l%12||12,M,"0")},U=j||function(M,E,J){var Q=M<12?"AM":"PM";return J?Q.toLowerCase():Q};return s.replace(k,function(M,E){return E||function(J){switch(J){case"YY":return String(n.$y).slice(-2);case"YYYY":return i.s(n.$y,4,"0");case"M":return $+1;case"MM":return i.s($+1,2,"0");case"MMM":return H(t.monthsShort,$,O,3);case"MMMM":return H(O,$);case"D":return n.$D;case"DD":return i.s(n.$D,2,"0");case"d":return String(n.$W);case"dd":return H(t.weekdaysMin,n.$W,y,2);case"ddd":return H(t.weekdaysShort,n.$W,y,3);case"dddd":return y[n.$W];case"H":return String(l);case"HH":return i.s(l,2,"0");case"h":return R(1);case"hh":return R(2);case"a":return U(l,f,!0);case"A":return U(l,f,!1);case"m":return String(f);case"mm":return i.s(f,2,"0");case"s":return String(n.$s);case"ss":return i.s(n.$s,2,"0");case"SSS":return i.s(n.$ms,3,"0");case"Z":return o}return null}(M)||o.replace(":","")})},a.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},a.diff=function(e,n,t){var s,o=this,l=i.p(n),f=p(e),$=(f.utcOffset()-this.utcOffset())*L,y=this-f,O=function(){return i.m(o,f)};switch(l){case h:s=O()/12;break;case g:s=O();break;case u:s=O()/3;break;case c:s=(y-$)/6048e5;break;case m:s=(y-$)/864e5;break;case w:s=y/V;break;case _:s=y/L;break;case b:s=y/d;break;default:s=y}return t?s:i.a(s)},a.daysInMonth=function(){return this.endOf(g).$D},a.$locale=function(){return Y[this.$L]},a.locale=function(e,n){if(!e)return this.$L;var t=this.clone(),s=q(e,n,!0);return s&&(t.$L=s),t},a.clone=function(){return i.w(this.$d,this)},a.toDate=function(){return new Date(this.valueOf())},a.toJSON=function(){return this.isValid()?this.toISOString():null},a.toISOString=function(){return this.$d.toISOString()},a.toString=function(){return this.$d.toUTCString()},r}(),re=K.prototype;return p.prototype=re,[["$ms",S],["$s",b],["$m",_],["$H",w],["$W",m],["$M",g],["$y",h],["$D",T]].forEach(function(r){re[r[1]]=function(a){return this.$g(a,r[0],r[1])}}),p.extend=function(r,a){return r.$i||(r(a,K,p),r.$i=!0),p},p.locale=q,p.isDayjs=te,p.unix=function(r){return p(1e3*r)},p.en=Y[z],p.Ls=Y,p.p={},p})})(me);var fe=me.exports;const ke={class:"flex flex-col gap-4"},Oe={class:"grid grid-cols-1 gap-4"},Ce={class:"mb-2 text-sm text-gray-600"},Le={key:1},Ve={__name:"NewLeave",props:{newLeave:{type:Object,required:!0}},setup(P){const Z=P,{newLeave:d}=Z,L=G(!1),V=G(!1),S=G("");function b(m,c){return c=fe(d.to_date),m=fe(d.from_date),c.diff(m,"d")||0}function _(m=0,c){m<0?c==="from_date"?(V.value=!0,S.value="From Date must be before To Date",d.total_days=0):c==="to_date"&&(L.value=!0,S.value="To Date must be after From Date",d.total_days=0):(V.value=!1,L.value=!1,d.total_days=m+1)}const w=[{section:"Leave Details",fields:[{label:"Student",name:"student",type:"data",readonly:!0}]},{section:"Date Details",fields:[{label:"From Date",name:"from_date",type:"date",change:m=>{let c=b(d.from_date,d.to_date);_(c,"from_date")}},{label:"To Date",name:"to_date",type:"date",change:m=>{let c=b(d.from_date,d.to_date);_(c,"to_date")}},{label:"Total Days",name:"total_days",type:"number",readonly:!0},{label:"Reason",name:"reason",type:"textarea"}]}];return(m,c)=>(C(),B("div",ke,[(C(),B(se,null,oe(w,g=>F("div",{key:g.section},[F("div",Oe,[(C(!0),B(se,null,oe(g.fields,u=>(C(),B("div",{key:u.name,class:ge(u.hidden&&"hidden")},[F("div",Ce,he(u.label),1),u.type==="select"?(C(),W(v(ae),{key:0,type:"select",options:u.options,modelValue:v(d)[u.name],"onUpdate:modelValue":h=>v(d)[u.name]=h,default:u.default,onChange:h=>u.change(h.target.value)},null,8,["options","modelValue","onUpdate:modelValue","default","onChange"])):u.type==="date"?(C(),B("div",Le,[N(v(ae),{type:"date",modelValue:v(d)[u.name],"onUpdate:modelValue":h=>v(d)[u.name]=h,onChange:h=>u.change(h.target.value)},null,8,["modelValue","onUpdate:modelValue","onChange"]),V.value&&u.name==="from_date"?(C(),W(v(ue),{key:0,message:S.value,class:"pt-2"},null,8,["message"])):ie("",!0),L.value&&u.name==="to_date"?(C(),W(v(ue),{key:1,message:S.value,class:"pt-2"},null,8,["message"])):ie("",!0)])):(C(),W(v(ae),{key:2,type:u.type,modelValue:v(d)[u.name],"onUpdate:modelValue":h=>v(d)[u.name]=h,placeholder:u.placeholder,disabled:u.readonly},null,8,["type","modelValue","onUpdate:modelValue","placeholder","disabled"]))],2))),128))])])),64))]))}},Te={class:"py-4 flex flex-col"},Ae={class:"px-5 flex items-center gap-2"},Ee={class:"font-semibold text-2xl"},Ye={class:"h-full"},He={class:"flex flex-row-reverse gap-2"},je={__name:"Attendance",setup(P){var T;const{getCurrentProgram:Z,getStudentInfo:d,getStudentGroups:L}=ve(),V=G((T=Z().value)==null?void 0:T.program);let S=d().value;const{isAttendancePage:b}=pe($e());ye(()=>{m()});const _=G("Select Student Group"),w=G();function m(){w.value=L().value,w.value.forEach(D=>D.onClick=()=>{D.label!==_.value&&(_.value=D.label,u.reload())}),_.value=w.value[0].label||"Select Student Group",u.update({params:{student_group:_.value,student:S.name}}),u.reload()}const c=De({student:S.name,student_name:S.student_name,from_date:"",to_date:"",reason:"",total_days:""}),g={Present:"bg-green-100",Absent:"bg-red-200",Leave:"bg-orange-100"},u=le({url:"ai_hub_education.education.api.get_student_attendance",params:{student_group:_.value,student:S.name},transform:D=>{D=D.filter((k,A,I)=>A===I.findIndex(ee=>ee.date===k.date));let x=[];return D.forEach(k=>{x.push({name:k.name,title:k.status,background_color:g[k.status],date:k.date,status:k.status})}),x},onError:D=>{console.log("Error",D)}}),h=le({url:"ai_hub_education.education.api.apply_leave",params:{leave_data:c,program_name:V.value},onSuccess:()=>{b.value=!1,u.reload(),de({title:"Attendance Applied Successful",icon:"check",iconClasses:"text-green-600"})},onError:D=>{var x;de({title:(x=D.messages[0])!=null?x:"Error Occured",icon:"x",iconClasses:"text-red-600"})}});return(D,x)=>{const k=xe("Button");return C(),B("div",Te,[F("div",Ae,[F("h2",Ee,he(V.value),1),N(v(Me),{options:w.value},{default:X(({open:A})=>[N(k,{label:_.value},{suffix:X(()=>[N(v(be),{name:A?"chevron-up":"chevron-down",class:"h-4 text-gray-600"},null,8,["name"])]),_:2},1032,["label"])]),_:1},8,["options"])]),F("div",Ye,[!v(u).loading&&v(u).data?(C(),W(ce,{key:0,events:v(u).data},null,8,["events"])):(C(),W(ce,{key:1,events:[]}))]),N(v(we),{modelValue:v(b),"onUpdate:modelValue":x[1]||(x[1]=A=>Se(b)?b.value=A:null),options:{size:"2xl",title:"Apply Leave",actions:[{label:"Save",variant:"solid"}]}},{"body-content":X(()=>[N(Ve,{newLeave:c},null,8,["newLeave"])]),actions:X(({close:A})=>[F("div",He,[N(k,{disabled:!c.from_date||!c.to_date||!c.total_days||!c.reason,variant:"solid",label:"Save",onClick:x[0]||(x[0]=I=>v(h).submit())},null,8,["disabled"])])]),_:1},8,["modelValue"])])}}};export{je as default};