import{_ as d}from"./Calendar.e36df12d.js";import{r as o,l as f,s as m,v,D as _,B as g,K as h}from"./frappe-ui.cf491ab7.js";import{s as k}from"./index.a58cfeb7.js";import"./index.b6e28961.js";const B={class:"w-full h-full"},N={__name:"Schedule",setup(w){var s,n;const{getCurrentProgram:c,getStudentGroups:i}=k(),l=o((n=(s=c())==null?void 0:s.value)==null?void 0:n.program),p=o(i().value),r=o([]),a=f({url:"ai_hub_education.education.api.get_course_schedule_for_student",params:{program_name:l.value,student_groups:p.value},onSuccess:u=>{let t=[];u.forEach(e=>{t.push({title:e.title,with:e.instructor,name:e.name,room:e.room,date:e.schedule_date,from_time:e.from_time.split(".")[0],to_time:e.to_time.split(".")[0],color:e.class_schedule_color})}),r.value=t},auto:!0});return(u,t)=>(m(),v("div",B,[!_(a).loading&&_(a).data?(m(),g(d,{key:0,events:r.value},null,8,["events"])):h("",!0)]))}};export{N as default};