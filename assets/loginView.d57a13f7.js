import{r as f,u as w,o as V,a as E,l as M,b as k,c as F,d as a,e as y,f as v,g as e,t as I,h as c,w as _,n as H,i as m,j as X,E as G}from"./index.68072692.js";import{u}from"./school.58cd730a.js";import{u as q}from"./user.468073d5.js";import{u as z}from"./area.1ac4493c.js";import{r as P}from"./request.c04241c9.js";import{g as B}from"./ak.7f196e16.js";const W="/images/login-zh-icon.png",$="/images/login-code-icon.png",K=async t=>await P.post("https://api.ps.familyeducation.org.cn/v1/user/auth/phone",t),Y=async t=>await P.post("https://api.ps.familyeducation.org.cn/v1/user/auth/send",t),J=async t=>await P.post("https://api.ps.familyeducation.org.cn/v1/area/admin/me",t),b=f(60),U=f(!1),Q=async t=>{await Y({phone:t})},Z=async t=>{await Q(t),U.value=!0;const i=setInterval(()=>{b.value--,b.value<=0&&(U.value=!1,b.value=0,clearTimeout(i))},1e3)};const oo={class:"container-wrap flex"},eo={class:"logo_name_wrap"},no={class:"title-char"},so=e("h1",{class:"title-char"},"\u4E00\u7AD9\u5F0F\u670D\u52A1\u6570\u667A\u5316\u5E73\u53F0",-1),ro={class:"flex-center login-container-wrap"},to={class:"login-wrap"},co=["src"],io=e("h1",null,"\u767B\u5F55\u7BA1\u7406\u4E2D\u5FC3",-1),lo={class:"flex item-wrap p"},_o=e("div",{class:"icon-wrap flex-center"},[e("img",{class:"login-icon",src:W,alt:""})],-1),po={class:"flex item-wrap"},ao={class:"flex el-input-wrap"},mo=e("div",{class:"icon-wrap flex-center"},[e("img",{class:"login-icon",src:$,alt:""})],-1),uo={key:0,class:"send-code grey"},bo=X("\u767B\u5F55"),xo={__name:"loginView",setup(t){const i=w();console.log("query",i.query);const d=f({});V(async()=>{i.query.domain&&await u().reqSchoolDomainGetAPI(i.query.domain),u().schoolDomainInfo.id&&(d.value=u().schoolDomainInfo)});const x=f({}),h=(r,o,n)=>{o===""?n(new Error("\u8BF7\u8F93\u5165\u624B\u673A\u53F7")):/^1((3[0-9])|(4[1579])|(5[0-9])|(6[6])|(7[0-9])|(8[0-9])|(9[0-9]))\d{8}$/.test(o)?n():n(new Error("\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E"))},A=(r,o,n)=>{o===""?n(new Error("\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801")):n()},s=E({codeRef:"",phoneRef:""}),g=M();k(()=>{g.loginInfo.phone&&(s.phoneRef=g.loginInfo.phone)});const C=E({phoneRef:[{validator:h,trigger:"blur"}],codeRef:[{validator:A,trigger:"blur"}]}),j=r=>{!r||r.validate(o=>{if(o)console.log("submit!",s),R();else return console.log("error submit!"),!1})},R=async()=>{const r={phone:s.phoneRef,code:s.codeRef},o=await K(r);g.getLoginInfo(o.token,o.uid,s.phoneRef),await L()},S=F(),L=async()=>{const o=await J({});!o||o.length<1?G.error("\u65E0\u6743\u9650"):(T(o),S.push({path:"/platformSelection"}))},T=r=>{const o=q(),n=u();n.saveSchoolInfoList();const l=r[0].school_id||6;z().saveAreaInfo(r[0]),n.saveSchoolInfo(l),o.saveSchoolUserInfo()};return(r,o)=>{const n=a("el-input"),l=a("el-form-item"),O=a("el-checkbox"),D=a("el-button"),N=a("el-form");return y(),v("div",{class:"root",style:H(`background-image: url(${d.value.bg_img||m(B)("login_bg.png")})`)},[e("div",oo,[e("div",eo,[e("h1",no,I(d.value.name||"\u8386\u7530\u5E02\u5B66\u6821\u5BB6\u5EAD\u6559\u80B2"),1),so]),e("div",ro,[e("div",to,[e("img",{class:"logo-po",src:d.value.icon||"/images/school_logo.png",alt:""},null,8,co),io,c(N,{ref_key:"ruleFormRef",ref:x,model:s,"status-icon":"",rules:C,"label-width":"120px",class:"demo-ruleForm","label-position":"top",style:{width:"314px"}},{default:_(()=>[c(l,{"label-width":0,prop:"phoneRef",style:{width:"314px"}},{default:_(()=>[e("div",lo,[_o,c(n,{modelValue:s.phoneRef,"onUpdate:modelValue":o[0]||(o[0]=p=>s.phoneRef=p),type:"text",maxlength:11,resize:"none",clearable:"",autocomplete:"off",class:"el-input"},null,8,["modelValue"])])]),_:1}),c(l,{"label-width":0,prop:"codeRef",style:{width:"314px"}},{default:_(()=>[e("div",po,[e("div",ao,[mo,c(n,{resize:"none",class:"el-input code",maxlength:"6",modelValue:s.codeRef,"onUpdate:modelValue":o[1]||(o[1]=p=>s.codeRef=p),type:"codeRefword"},null,8,["modelValue"])]),m(U)?(y(),v("div",uo," \u5DF2\u53D1\u9001("+I(m(b))+"s) ",1)):(y(),v("div",{key:1,class:"send-code",onClick:o[2]||(o[2]=p=>m(Z)(s.phoneRef))}," \u83B7\u53D6\u9A8C\u8BC1\u7801 "))])]),_:1}),c(l,null,{default:_(()=>[c(O,{label:"\u8BB0\u4F4F\u8D26\u53F7",name:"type"})]),_:1}),c(l,null,{default:_(()=>[c(D,{class:"login-btn",type:"primary",onClick:o[3]||(o[3]=p=>j(x.value))},{default:_(()=>[bo]),_:1})]),_:1})]),_:1},8,["model","rules"])])])])],4)}}};export{xo as default};
