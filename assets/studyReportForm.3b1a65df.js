import{_ as $,c as H,r as v,b as O,e as c,f as i,g as t,t as s,A as M,B as E,q as J,s as Q,d as P,F as Y,v as S,h as C,x as m,y as _,z as U,n as x,C as k,i as N,D as X}from"./index.2ceb787b.js";import{a as Z,b as ee}from"./datacenter.8d25c185.js";import{u as L}from"./area.b273bee5.js";import{s as te,a as ae}from"./study.d895c658.js";import{u as B}from"./school.3781ac49.js";import{h as g}from"./moment.9709ab41.js";import{g as se}from"./ak.7f196e16.js";import{_ as A}from"./fire_icon.1ae85428.js";import"./request.380669af.js";const j=e=>(M("data-v-ffb22690"),e=e(),E(),e),oe={class:"all-complete-box flex"},le={class:"left-box"},ne={class:"num"},ce=j(()=>t("span",{class:"per-char"},"%",-1)),ie=j(()=>t("span",{class:"per-char"},"\u5E73\u53F0\u7D2F\u8BA1\u5B8C\u6210\u6CE8\u518C\u7387",-1)),de={__name:"PerAllComplete",setup(e){const o=H(),a=()=>{o.push({path:"/CompletionRate"})},l=v(0),n=async()=>{const d={area_id:L().areaInfo.area_id||0},u=await Z(d);if(u){const r=u.parent_count||0,y=u.student_should_count||0;y?l.value=Math.ceil(r/y*100):l.value=100}};return O(()=>{n()}),(d,u)=>(c(),i("div",oe,[t("div",le,[t("span",ne,s(l.value),1),ce,ie]),t("div",{class:"look-char",onClick:a},"\u67E5\u770B\u8BE6\u60C5")]))}},ue=$(de,[["__scopeId","data-v-ffb22690"]]);function re(){const e=v({}),o=v({}),a=async()=>{const d={school_id:B().getSchoolInfo.id,type:"term"},u=await te(d);e.value=u},l=async()=>{const d={school_id:B().getSchoolInfo.id},u=await ae(d);o.value=u};return a(),l(),{studyDashboardCompleteCountRef:e,studyDashboardCompleteDailyRef:o}}const me=J({name:"CompletedAmountOverview",props:{dataSource:{type:Object,default:()=>({})},dataSourceAvg:{type:Object,default:()=>({})}},setup(e){const o=v({total:{title:"\u603B\u8BBF\u95EE\u91CF",icon:"overview_total_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u8BBF\u95EE\u91CF",num:0}},daily:{title:"\u6BCF\u65E5\u4E00\u5B66\u603B\u5B66\u4E60\u91CF",icon:"overview_daily_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B66\u4E60\u91CF",num:0}},weekly:{title:"\u6BCF\u5468\u4E00\u505A\u603B\u5B8C\u6210\u91CF",icon:"overview_weekly_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B8C\u6210\u91CF",num:0}},monthy:{title:"\u6BCF\u6708\u4E00\u8BFE\u603B\u5B66\u4E60\u91CF",icon:"overview_monthly_icon_img",num:0,tag:{title:"\u4ECA\u65E5\u65B0\u589E",num:0},averageDaily:{title:"\u65E5\u5747\u5B66\u4E60\u91CF",num:0}}}),a=v(e.dataSource),l=v(e.dataSourceAvg);return Q(()=>{a.value=e.dataSource,l.value=e.dataSourceAvg,Object.keys(a.value).length>0&&(o.value.total.num=a.value.total_all,o.value.total.tag.num=a.value.all_today,o.value.total.averageDaily.num=Math.ceil(l.value.all_num/l.value.day_num),o.value.daily.num=a.value.total_daily,o.value.daily.tag.num=a.value.daily,o.value.daily.averageDaily.num=Math.ceil(l.value.daily/l.value.day_num),o.value.weekly.num=a.value.total_weekly,o.value.weekly.tag.num=a.value.weekly_today,o.value.weekly.averageDaily.num=Math.ceil(l.value.weekly/l.value.day_num),o.value.monthy.num=a.value.total_monthy,o.value.monthy.tag.num=a.value.monthy_today,o.value.monthy.averageDaily.num=Math.ceil(l.value.monthy/l.value.day_num))}),{overviewListRef:o,getImageUrl:se}}});const _e={class:"completed-amount-overview-container"},ve={class:"completed-amount-overview-ul flex"},he={class:"el-card-style","body-style":{padding:"0px"}},ye={class:"flex"},pe={class:"title-style"},ge={class:"flex-start align-end"},fe={class:"total-num-style"},ke={class:"tag-box flex-center"},Ie={class:"flex-start"},we={class:"average-daily-title-style"},Ce={class:"average-daily-num-style"};function $e(e,o,a,l,n,d){const u=P("el-image");return c(),i("div",_e,[t("ul",ve,[(c(!0),i(Y,null,S(e.overviewListRef,(r,y)=>(c(),i("li",{key:y,class:"completed-amount-overview-li"},[t("div",he,[t("header",ye,[t("p",pe,s(r.title),1),C(u,{class:"header-icon-style",src:e.getImageUrl(r.icon+".png")},null,8,["src"])]),t("article",ge,[t("p",fe,s(r.num),1),t("div",ke,[t("p",null,s(r.tag.title),1),t("p",null,s(r.tag.num),1)])]),t("footer",Ie,[t("p",we,s(r.averageDaily.title),1),t("p",Ce,s(r.averageDaily.num),1)])])]))),128))])])}const be=$(me,[["render",$e],["__scopeId","data-v-3cea65a7"]]),De="/images/rank1.png",xe="/images/rank2.png",Ye="/images/rank3.png",Se="/images/six_border.png";const w=e=>(M("data-v-3224bc8b"),e=e(),E(),e),Me={class:"grade-class-rank-container"},Ee={class:"rank-left"},Ae={class:"rank-img",src:De,alt:""},Be={class:"rank-img",src:xe,alt:""},Fe={class:"rank-img",src:Ye,alt:""},Re={class:"rank-cic"},Te=w(()=>t("img",{class:"six-img",src:Se,alt:""},null,-1)),Ve={class:"rank-num"},Ne={class:"right-data-wrap"},Oe={class:"progress-complete"},Pe={class:"progress-box"},Ue={class:"flex"},Le={class:"gc-char"},je={class:"cp-char"},qe={key:0,class:"progress"},Ke={class:"fire-icon",src:A,alt:"fire"},ze={key:1,class:"progress"},We={class:"fire-icon",src:A,alt:"fire"},Ge={class:"progress"},He={class:"fire-icon",src:A,alt:"fire"},Je={class:"progress"},Qe={class:"fire-icon",src:A,alt:"fire"},Xe={key:0,class:"per-char"},Ze={key:1,class:"per-char"},et={key:2,class:"per-char"},tt={key:3,class:"per-char"},at={class:"data-box flex"},st={class:"data-detail-wrap"},ot=w(()=>t("span",{class:"data-char"},"\u6570\u636E\u6982\u89C8",-1)),lt={class:"data-item"},nt=w(()=>t("div",{class:"char"},"\u5B66\u4E60\u4EBA\u6B21",-1)),ct={class:"data-item"},it={class:"num-char"},dt=w(()=>t("div",{class:"char"},"\u5B66\u6821\u5B9E\u9645\u4EBA\u6570",-1)),ut={class:"data-item"},rt={class:"num-char"},mt={class:"char"},_t={class:"data-item"},vt={class:"num-char"},ht=w(()=>t("div",{class:"char"},"\u6BCF\u65E5\u4E00\u5B66",-1)),yt={class:"data-item"},pt={class:"num-char"},gt=w(()=>t("div",{class:"char"},"\u6BCF\u5468\u4E00\u505A",-1)),ft={class:"data-item"},kt={class:"num-char"},It=w(()=>t("div",{class:"char nomar"},"\u6BCF\u6708\u4E00\u8BFE",-1)),wt={__name:"ClassRankForComplete",props:{completeItem:{type:Object},completeIndex:{type:Number,default:0},rankMode:{type:Number,default:1},studyType:{type:String,default:""}},setup(e){const o=n=>{const d=B().schoolInfoList;let u="";return d.forEach(r=>{r.id==n&&(u=r.name)}),u},a=n=>Math.ceil(Number(n)*100),l=(n,d)=>({isUp:n-d>0,isShow:n-d!=0,numAbs:Math.abs(n-d)});return(n,d)=>(c(),i("div",Me,[t("div",Ee,[m(t("img",Ae,null,512),[[_,e.completeIndex==0]]),m(t("img",Be,null,512),[[_,e.completeIndex==1]]),m(t("img",Fe,null,512),[[_,e.completeIndex==2]]),m(t("div",Re,[Te,t("span",Ve,s(e.completeIndex+1),1)],512),[[_,e.completeIndex>2]]),m(t("div",{class:U(["ranked-tag",l(e.completeItem.rank_index_last,e.completeItem.rank_index).isUp?"":"green"])}," \u8F83\u4E0A"+s(e.rankMode==1?"\u5468":"\u6708")+s(l(e.completeItem.rank_index_last,e.completeItem.rank_index).isUp?"\u4E0A\u5347":"\u4E0B\u964D")+s(l(e.completeItem.rank_index_last,e.completeItem.rank_index).numAbs)+"\u540D ",3),[[_,l(e.completeItem.rank_index_last,e.completeItem.rank_index).isShow]])]),t("div",Ne,[t("div",Oe,[t("div",Pe,[t("div",Ue,[t("span",Le,s(o(e.completeItem.school_id)),1),t("span",je,"\u672C"+s(e.rankMode==1?"\u5468":"\u6708")+"\u5B66\u4E60\u5B8C\u6210\u7387",1)]),e.studyType=="all"?(c(),i("div",qe,[t("div",{class:"progress-active",style:x(`width: ${a(e.completeItem.parent_student_ratio)>=100?100:a(e.completeItem.parent_student_ratio)}%`)},null,4),m(t("img",Ke,null,512),[[_,a(e.completeItem.parent_student_ratio)>=100]])])):k("",!0),e.studyType=="daily"?(c(),i("div",ze,[t("div",{class:"progress-active",style:x(`width: ${a(e.completeItem.daily_parent_ratio)>=100?100:a(e.completeItem.daily_parent_ratio)}%`)},null,4),m(t("img",We,null,512),[[_,a(e.completeItem.daily_parent_ratio)>=100]])])):k("",!0),m(t("div",Ge,[t("div",{class:"progress-active",style:x(`width: ${a(e.completeItem.weekly_parent_ratio)>=100?100:a(e.completeItem.weekly_parent_ratio)}%`)},null,4),m(t("img",He,null,512),[[_,a(e.completeItem.weekly_parent_ratio)>=100]])],512),[[_,e.studyType=="weekly"]]),m(t("div",Je,[t("div",{class:"progress-active",style:x(`width: ${a(e.completeItem.monthy_parent_ratio)>=100?100:a(e.completeItem.monthy_parent_ratio)}%`)},null,4),m(t("img",Qe,null,512),[[_,a(e.completeItem.monthy_parent_ratio)>=100]])],512),[[_,e.studyType=="monthy"]])]),e.studyType=="all"?(c(),i("span",Xe,s(a(e.completeItem.parent_student_ratio))+"%",1)):k("",!0),e.studyType=="daily"?(c(),i("span",Ze,s(a(e.completeItem.daily_parent_ratio))+"%",1)):k("",!0),e.studyType=="weekly"?(c(),i("span",et,s(a(e.completeItem.weekly_parent_ratio))+"%",1)):k("",!0),e.studyType=="monthy"?(c(),i("span",tt,s(a(e.completeItem.monthy_parent_ratio))+"%",1)):k("",!0)]),t("div",at,[t("div",st,[ot,t("div",lt,[m(t("div",{class:"num-char"},s(e.completeItem.complete_parent),513),[[_,e.studyType=="all"]]),m(t("div",{class:"num-char"},s(e.completeItem.daily_parent_num),513),[[_,e.studyType=="daily"]]),m(t("div",{class:"num-char"},s(e.completeItem.weekly_parent_num),513),[[_,e.studyType=="weekly"]]),m(t("div",{class:"num-char"},s(e.completeItem.monthy_parent_num),513),[[_,e.studyType=="monthy"]]),nt]),t("div",ct,[t("div",it,s(e.completeItem.student_num),1),dt]),t("div",ut,[t("div",rt,s(e.completeItem.rank_index_last),1),t("div",mt,s(e.rankMode==1?"\u4E0A\u5468\u6392\u540D":"\u4E0A\u6708\u6392\u540D"),1)]),t("div",_t,[t("div",vt,s(a(e.completeItem.daily_parent_ratio))+"% ",1),ht]),t("div",yt,[t("div",pt,s(a(e.completeItem.weekly_parent_ratio))+"% ",1),gt]),t("div",ft,[t("div",kt,s(a(e.completeItem.monthy_parent_ratio))+"% ",1),It])])])])]))}},Ct=$(wt,[["__scopeId","data-v-3224bc8b"]]),$t="/images/nodata_status.png";const bt={},q=e=>(M("data-v-fb2d8b4c"),e=e(),E(),e),Dt={class:"nodata-status-container"},xt=q(()=>t("img",{class:"nodata-img",src:$t,alt:""},null,-1)),Yt=q(()=>t("span",{class:"nodata-char"},"\u6682\u65E0\u6570\u636E\u5185\u5BB9\uFF0C\u770B\u770B\u5176\u4ED6\u7684\u5427~",-1)),St=[xt,Yt];function Mt(e,o){return c(),i("div",Dt,St)}const Et=$(bt,[["render",Mt],["__scopeId","data-v-fb2d8b4c"]]);const K=e=>(M("data-v-184b256e"),e=e(),E(),e),At={class:"study-report-container"},Bt={class:"all-wrap"},Ft={class:"sort-wrap"},Rt={class:"title-time"},Tt=K(()=>t("span",{class:"study-tit"},"\u5B66\u4E60\u5B8C\u6210\u699C",-1)),Vt={class:"time-char"},Nt=K(()=>t("span",{class:"o-char"},"\u5206\u7C7B\uFF1A",-1)),Ot=["onClick"],Pt={key:0,class:"date-picker-wrap"},Ut={key:1,class:"date-picker-wrap"},Lt={key:0,class:"data-wrap"},jt={__name:"studyReportForm",setup(e){const{studyDashboardCompleteCountRef:o,studyDashboardCompleteDailyRef:a}=re(),l=[{sortKey:1,sortItem:[{id:"all",name:"\u7EFC\u5408"},{id:"daily",name:"\u6BCF\u65E5\u4E00\u5B66"},{id:"weekly",name:"\u6BCF\u5468\u4E00\u505A"},{id:"monthy",name:"\u6BCF\u6708\u4E00\u8BFE"}]},{sortKey:2,sortItem:[{id:2,name:"\u6708\u699C"},{id:1,name:"\u5468\u699C"}]}],n=v(["school","all",2]),d=v(""),u=v(""),r=v(""),y=v(""),z=(p,f)=>{n.value[p]=f,D()},F=v(""),R=v(""),W=p=>{r.value=g(p).add(1,"day").format("YYYY-MM-DD"),y.value=g(p).add(7,"day").format("YYYY-MM-DD"),D()},G=p=>{d.value=g(p).format("YYYY-MM-01"),u.value=g(d.value).add(1,"month").format("YYYY-MM-DD"),D()},b=v([]),D=async()=>{const p={area_id:L().areaInfo.area_id||0,limit:30,page:1,rank_mode:"school",start_date:n.value[2]==2?d.value:r.value,end_date:n.value[2]==2?u.value:y.value,study_type:n.value[1]},f=await ee(p);b.value=f},T=v("");return O(()=>{T.value=g().format("YYYY\u5E74MM\u6708DD\u65E5"),u.value=g().format("YYYY-MM-01"),d.value=g(u.value).subtract(1,"month").format("YYYY-MM-DD"),y.value=g().isoWeekday(0).format("YYYY-MM-DD"),r.value=g(y.value).subtract(6,"day").format("YYYY-MM-DD"),D()}),(p,f)=>{const V=P("el-date-picker");return c(),i("div",At,[t("div",null,[C(be,{dataSource:N(o),dataSourceAvg:N(a)},null,8,["dataSource","dataSourceAvg"]),t("div",Bt,[C(ue)]),t("div",Ft,[t("div",Rt,[Tt,t("span",Vt,"\u66F4\u65B0\u65F6\u95F4\uFF1A"+s(T.value),1)]),(c(),i(Y,null,S(l,h=>t("div",{class:"sort-sec",key:h.sortKey},[Nt,(c(!0),i(Y,null,S(h.sortItem,I=>(c(),i("div",{class:U(["lab-item",n.value[h.sortKey]==I.id?"active":""]),onClick:qt=>z(h.sortKey,I.id),key:I.id},s(I.name),11,Ot))),128))])),64)),n.value[2]==1?(c(),i("div",Pt,[C(V,{modelValue:F.value,"onUpdate:modelValue":f[0]||(f[0]=h=>F.value=h),onChange:W,type:"week",format:"YYYY \u7B2C ww \u5468",placeholder:"\u9009\u62E9\u5468"},null,8,["modelValue"])])):k("",!0),n.value[2]==2?(c(),i("div",Ut,[C(V,{modelValue:R.value,"onUpdate:modelValue":f[1]||(f[1]=h=>R.value=h),type:"month",placeholder:"\u9009\u62E9\u6708",onChange:G},null,8,["modelValue"])])):k("",!0)]),b.value&&b.value.length?(c(),i("div",Lt,[t("div",null,[(c(!0),i(Y,null,S(b.value,(h,I)=>(c(),i("div",{class:"mar-wrap",key:I},[C(Ct,{completeItem:h,completeIndex:I,rankMode:n.value[2],studyType:n.value[1]},null,8,["completeItem","completeIndex","rankMode","studyType"])]))),128))])])):(c(),X(Et,{key:1}))])])}}},ea=$(jt,[["__scopeId","data-v-184b256e"]]);export{ea as default};
