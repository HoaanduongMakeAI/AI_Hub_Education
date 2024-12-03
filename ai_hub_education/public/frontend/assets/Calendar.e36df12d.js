import{g as j,a as A}from"./index.b6e28961.js";import{s as r,B,z as C,x as t,E as h,D as l,y as d,L as b,F as o,v as s,K as f,a1 as O,r as S,k as F,X as J,I as D,J as $}from"./frappe-ui.cf491ab7.js";const q=["onClick"],z={class:"flex flex-col whitespace-nowrap w-fit overflow-hidden"},P={class:"font-medium text-sm text-gray-800 text-ellipsis"},V={key:0,class:"font-normal text-xs text-gray-800 text-ellipsis"},Y={class:"flex flex-col gap-5 pt-5 px-6 pb-6"},E={class:"font-semibold text-xl"},T={class:"flex flex-col gap-4"},I={class:"flex gap-2 items-center"},K={class:"text-sm font-normal"},R={key:0,class:"flex gap-2 items-center"},W={class:"text-sm font-normal"},X={key:1,class:"flex gap-2 items-center"},G={class:"text-sm font-normal"},H={key:2,class:"flex gap-2 items-center"},Q={class:"text-sm font-normal"},U={class:"flex gap-3 relative px-2 items-start"},Z={class:"flex flex-col whitespace-nowrap w-fit overflow-hidden"},ee={class:"font-medium text-sm text-gray-800 text-ellipsis"},te={key:0,class:"font-normal text-xs text-gray-800 text-ellipsis"},oe={__name:"CalendarEvent",props:{event:{type:Object,required:!0},date:{type:Date,required:!0}},setup(e){const w=e;let a={blue:{background_color:"bg-blue-100",border_color:"border-blue-600"},green:{background_color:"bg-green-100",border_color:"border-green-600"},red:{background_color:"bg-red-100",border_color:"border-red-600"},orange:{background_color:"bg-orange-100",border_color:"border-orange-600"},yellow:{background_color:"bg-yellow-100",border_color:"border-yellow-600"},teal:{background_color:"bg-teal-100",border_color:"border-teal-600"},violet:{background_color:"bg-violet-100",border_color:"border-violet-600"},cyan:{background_color:"bg-cyan-100",border_color:"border-cyan-600"},purple:{background_color:"bg-purple-100",border_color:"border-purple-600"},pink:{background_color:"bg-pink-100",border_color:"border-pink-600"},amber:{background_color:"bg-amber-100",border_color:"border-amber-600"}};function m(){let i=w.date.toDateString().split(" ").slice(0,3),g=i[0],u=i[1]+" "+i[2];return`${g}, ${u}`}return(i,g)=>e.event.status?(r(),s("div",{key:1,class:h(["w-full p-2 rounded-md",e.event.background_color||"bg-green-100"]),onClick:g[0]||(g[0]=(...u)=>i.togglePopover&&i.togglePopover(...u))},[t("div",U,[d(l(b),{name:"circle",class:"h-4 text-black"}),t("div",Z,[t("p",ee,o(e.event.title),1),e.event.from_time?(r(),s("p",te,o(e.event.from_time)+" - "+o(e.event.to_time),1)):f("",!0)])])],2)):(r(),B(l(O),{key:0,placement:"right"},{target:C(({togglePopover:u})=>{var _,x,y,p;return[t("div",{class:h(["w-full p-2 rounded-lg",((x=l(a)[(_=e.event)==null?void 0:_.color])==null?void 0:x.background_color)||"bg-green-100"]),onClick:u},[t("div",{class:h(["flex gap-3 relative px-2 items-start",e.event.from_time&&["border-l-2",((p=l(a)[(y=e.event)==null?void 0:y.color])==null?void 0:p.border_color)||"border-green-600"]])},[d(l(b),{name:"circle",class:"h-4 text-black"}),t("div",z,[t("p",P,o(e.event.title),1),e.event.from_time?(r(),s("p",V,o(e.event.from_time)+" - "+o(e.event.to_time),1)):f("",!0)])],2)],10,q)]}),"body-main":C(()=>[t("div",Y,[t("div",E,o(e.event.title),1),t("div",T,[t("div",I,[d(l(b),{name:"calendar",class:"h-4 w-4"}),t("span",K,o(m()),1)]),e.event.with?(r(),s("div",R,[d(l(b),{name:"user",class:"h-4 w-4"}),t("span",W,o(e.event.with),1)])):f("",!0),e.event.from_time&&e.event.to_time?(r(),s("div",X,[d(l(b),{name:"clock",class:"h-4 w-4"}),t("span",G,o(e.event.from_time)+" - "+o(e.event.to_time),1)])):f("",!0),e.event.room?(r(),s("div",H,[d(l(b),{name:"circle",class:"h-4 w-4"}),t("span",Q," Room No: \xA0 "+o(e.event.room),1)])):f("",!0)])])]),_:1}))}},re={class:"p-5 h-full"},le={class:"flex justify-between mb-2"},ne={class:"text-xl font-medium"},se={class:"flex gap-x-1"},ae={class:"h-[92%] min-h-[600px] min-w-[600px]"},ce={class:"grid grid-cols-7 w-full pb-2"},ie={class:"text-center text-gray-600 font-normal text-sm"},de={class:"grid grid-cols-7 border-t-[1px] border-l-[1px] h-full w-full grid-rows-6"},ue={class:"border-r-[1px] border-b-[1px] border-gray-200"},me={key:0,class:"relative flex flex-col items-center w-full overflow-y-auto"},ge={class:"w-full"},be={key:1},he={__name:"Calendar",props:{events:{type:Object,required:!1}},setup(e){const w=e;let a=S(new Date().getMonth()),m=S(new Date().getFullYear()),i=["January","February","March","April","May","June","July","August","September","October","November","December"],g=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],u=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],_=F(()=>j(a.value,m.value)),x=F(()=>A(w.events,c=>c.date));function y(c){let v=c.getDate(),n=c.getMonth()+1,k=c.getFullYear();return v<10&&(v="0"+v),n<10&&(n="0"+n),`${k}-${n}-${v}`}function p(){return i[a.value]}function N(){a.value++,a.value>11&&(a.value=0,m.value++)}function L(){a.value--,a.value<0&&(a.value=11,m.value--)}function M(c){return c.getMonth()===a.value}return(c,v)=>(r(),s("div",re,[t("div",le,[t("span",ne,o(p()+", "+l(m)),1),t("div",se,[d(l(J),{onClick:L,variant:"ghost",class:"h-4 w-4",icon:"chevron-left"}),d(l(J),{onClick:N,variant:"ghost",class:"h-4 w-4",icon:"chevron-right"})])]),t("div",ae,[t("div",ce,[(r(!0),s(D,null,$(l(u),n=>(r(),s("span",ie,o(n),1))),256))]),t("div",de,[(r(!0),s(D,null,$(l(_),n=>(r(),s("div",ue,[t("div",{class:h(["flex justify-center h-full font-normal mx-2",M(n)?"text-gray-500":"text-gray-200"])},[M(n)?(r(),s("div",me,[t("span",{class:h(["py-1 sticky top-0 bg-white w-full text-center z-10",n.toDateString()===new Date().toDateString()&&"font-bold"])},o(n.getDate()),3),t("div",ge,[(r(!0),s(D,null,$(l(x)[y(n)],k=>(r(),B(oe,{event:k,date:n,class:"mb-2 cursor-pointer w-full",draggable:!1,key:k.name},null,8,["event","date"]))),128))])])):(r(),s("span",be,o(l(g)[n.getMonth()]+" "+n.getDate()),1))],2)]))),256))])])]))}};export{he as _};
