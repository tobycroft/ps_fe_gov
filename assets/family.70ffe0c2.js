import{k as s}from"./index.68072692.js";import{r as e}from"./request.c04241c9.js";const n=async o=>await e.post("https://api.ps.familyeducation.org.cn/v1/family/role/list",o),r=async o=>await e.post("https://api.ps.familyeducation.org.cn/v1/family/type/list",o),_=s("familyStore",{state:()=>({familyRoleList:{},familyTypeList:{}}),actions:{async reqFamilyRoleListApi(){const o=await n({});console.log("\u5BB6\u5EAD\u6210\u5458\u5217\u8868_res :>> ",o),this.familyRoleList=o},async reqFamilyTypeListApi(){const o=await r({});this.familyTypeList=o}},getters:{getFamilyRoleList:o=>o.familyRoleList,getFamilyTypeList:o=>o.familyTypeList},persist:!0});export{_ as u};
