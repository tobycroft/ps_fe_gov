import{p as a}from"./index.28014d4a.js";import{r}from"./datacenter.a6085fcb.js";const i=a("teacher",{state:()=>({teacherList:{}}),getters:{getTeacherList:e=>e.teacherList},actions:{async reqDatasourceTeacherAPI(e){const t=await r({school_id:e});this.teacherList=t}},persist:!0});export{i as u};
