import{p as n}from"./index.28014d4a.js";import{r as o}from"./school.668a628c.js";const s=async e=>await o.post("https://api.ps.familyeducation.org.cn/v1/family/role/list",e),i=async e=>await o.post("https://api.ps.familyeducation.org.cn/v1/family/type/list",e),m=n("familyStore",{state:()=>({familyRoleList:{},familyTypeList:{}}),actions:{async reqFamilyRoleListApi(){const e=await s({});console.log("\u5BB6\u5EAD\u6210\u5458\u5217\u8868_res :>> ",e),this.familyRoleList=e},async reqFamilyTypeListApi(){const e=await i({});this.familyTypeList=e}},getters:{getFamilyRoleList:e=>e.familyRoleList,getFamilyTypeList:e=>e.familyTypeList},persist:!0});export{m as u};
