import{k as a}from"./index.e383fb1c.js";import{r}from"./datacenter.73d0ee95.js";const i=a("teacher",{state:()=>({teacherList:{}}),getters:{getTeacherList:e=>e.teacherList},actions:{async reqDatasourceTeacherAPI(e){const t=await r({school_id:e});this.teacherList=t}},persist:!0});export{i as u};
