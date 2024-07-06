import{d as w,j as e,n as p,i as h,r as c,M as j,u as f,A as k,k as g,o as y,l as C,m as _,p as F,q as S,I as m,b as M}from"./index-808c41f7.js";const O=s=>s.filters.language,L=s=>s.filters.level,Y=s=>s.filters.price,E=({onClose:s})=>{const{register:r,handleSubmit:l,formState:{errors:a}}=w(),t=o=>{console.log(o),s()};return e.jsxs("form",{onSubmit:l(t),className:"sm:mt-10 mt-2 w-full",children:[e.jsx(p,{placeholder:"Full Name",register:r("name",{required:"Name is required"}),error:a.name}),e.jsx(p,{placeholder:"Email",type:"email",register:r("email",{required:"Email is required"}),error:a.email}),e.jsx(p,{placeholder:"Phone number",register:r("phone",{required:"Phone number is required"}),error:a.phone}),e.jsx(h,{type:"submit",className:"py-4 sm:mt-10 ",children:"Book"})]})},x=({label:s,value:r,selectedValue:l,onChange:a})=>{const t=()=>{l!==r&&a(r)};return e.jsxs("label",{className:"flex items-center mb-2 cursor-pointer",children:[e.jsx("input",{type:"radio",className:"opacity-0 absolute",value:r,checked:l===r,onChange:t}),e.jsxs("div",{className:"relative flex items-center",children:[e.jsx("div",{className:`w-6 h-6 flex justify-center items-center rounded-full border-2 ${l===r?"border-btnColorY bg-white":"border-gray-300"}`,children:l===r&&e.jsx("div",{className:"w-3 h-3 rounded-full bg-btnColorY"})}),e.jsx("span",{className:"ml-2",children:s})]})]})},R=()=>{const[s,r]=c.useState(""),l=a=>{r(a)};return e.jsxs("div",{className:"mt-10 mob-radio-box",children:[e.jsx("h3",{className:"mb-5 sm:text-2xl font-medium text-xl",children:"What is your main reason for learning English?"}),e.jsxs("div",{className:"flex flex-col max-w-sm bg-white",children:[e.jsx(x,{label:"Career and business",value:"career_and_business",selectedValue:s,onChange:l}),e.jsx(x,{label:"Lesson for kids",value:"lesson_for_kids",selectedValue:s,onChange:l}),e.jsx(x,{label:"Living abroad",value:"living_abroad",selectedValue:s,onChange:l}),e.jsx(x,{label:"Exams and coursework",value:"exams_and_coursework",selectedValue:s,onChange:l}),e.jsx(x,{label:"Culture, travel or hobby",value:"culture_travel_or_hobby",selectedValue:s,onChange:l})]})]})},$=({onClose:s,teacher:r,className:l})=>e.jsx(j,{onClose:s,className:`modal-content ${l}`,children:e.jsxs("div",{className:"text-start",children:[e.jsx("h3",{className:"text-40px font-medium mob-trial-title",children:"Book trial lesson"}),e.jsx("p",{className:"mt-2 text-sm sm:text-base",children:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."}),e.jsxs("div",{className:"flex justify-start mt-4 space-x-2",children:[e.jsx("img",{src:r.avatar_url,alt:`${r.name} ${r.surname}`,className:"w-[49px] h-[49px] rounded-full"}),e.jsxs("div",{className:"flex flex-col justify-center items-start",children:[e.jsx("p",{className:"text-xs",children:"Your teacher"}),e.jsx("p",{className:"font-medium",children:`${r.name} ${r.surname}`})]})]}),e.jsx(R,{}),e.jsx(E,{onClose:s})]})}),I=({teacher:s})=>{const{hover:r}=f();return e.jsx("div",{className:"flex items-start mr-12",children:e.jsxs("div",{className:"relative avatar-mob-box flex items-center justify-center w-[120px] h-[120px] border rounded-full",style:{borderColor:r,transition:"background-color 0.3s"},children:[e.jsx("img",{src:s.avatar_url,alt:`${s.name} ${s.surname}`,className:"avatar-mob-img w-24 h-24 rounded-full"}),e.jsx("div",{className:"absolute dot-mob top-5 right-5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"})]})})},B=({onClose:s})=>{const{hover:r}=f(),[l,a]=c.useState(null),t=n=>{a(n)},o=()=>{a(null),s()};return e.jsx("div",{children:l!==null?e.jsx(j,{onClose:o,children:e.jsx(k,{isLogin:l,onClose:o})}):e.jsx(j,{onClose:s,className:" px-[36px]",children:e.jsx("div",{className:"flex flex-col items-center w-full rounded-30 p-4",style:{backgroundColor:r,transition:"background-color 1.3s"},children:e.jsxs("div",{className:"flex flex-col justify-around items-center rounded-30 text-xl md:text-2xl font-semibold w-full max-w-96 text-center",style:{backgroundColor:r,transition:"background-color 1.3s"},children:[e.jsxs("p",{children:["Only authorized users!!!",e.jsx("br",{})," ",e.jsx("span",{className:"text-borderGrey font-normal text-base md:text-2xl",children:"can add to favorites"})]}),e.jsxs("div",{className:"flex flex-wrap items-center  border-top  justify-center mt-4",children:[e.jsx("p",{children:"You can"}),e.jsx(h,{type:"button",className:"mx-1 max-w-14",onClick:()=>t(!0),children:"Login"}),e.jsx("p",{children:"or"}),e.jsx(h,{type:"button",className:"mx-1 max-w-20",onClick:()=>t(!1),children:"Register"}),e.jsx("p",{className:" text-borderGrey font-normal text-base md:text-2xl",children:"to access this feature."})]})]})})})})},G=s=>{const[r,l]=c.useState(!1),[a,t]=c.useState(!1);c.useEffect(()=>{const i=g.currentUser;if(i){const d=b(i.uid,s.id),v=y(d,N=>{l(N.exists())});return()=>{v()}}},[s.id]);const o=()=>{const i=g.currentUser;if(!i){t(!0);return}const d=b(i.uid,s.id);r?F(d).then(()=>{l(!1)}).catch(u=>{console.error("Error when deleting from favorites",u)}):S(d,s).then(()=>{l(!0)}).catch(u=>{console.error("Error when adding to favorites:",u)})},n=()=>{t(!1)},b=(i,d)=>C(_,`users/${i}/favorites/${d}`);return{isFavorite:r,isModalVisible:a,toggleFavorite:o,handleCloseModal:n}},q=({teacher:s})=>{const{bg:r}=f(),{isFavorite:l,toggleFavorite:a,isModalVisible:t,handleCloseModal:o}=G(s),n=()=>{a()};return e.jsxs("div",{className:"relative flex items-start font-medium w-full max-w-968 justify-between",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("p",{className:"text-mobile text-borderGrey mr-8",children:"Languages"}),e.jsxs("h2",{className:"text-2xl font-medium mt-2",children:[s.name," ",s.surname]})]}),e.jsx("div",{className:"flex-wrapper flex w-full flex-wrap max-w-[697px] pr-4 items-center justify-between",children:e.jsxs("div",{className:"flex w-full flex-wrap max-w-[607px]  mr-6",children:[e.jsxs("div",{className:"flex gap-2 items-center relative pr-4 with-line",children:[e.jsx(m,{id:"icon-book",width:"w-4",height:"h-4",strokeColor:"stroke-black"}),e.jsx("p",{children:"Lessons online"})]}),e.jsx("div",{className:"flex relative px-4 with-line",children:e.jsxs("p",{children:["Lessons done: ",s.lessons_done]})}),e.jsxs("div",{className:"reverse flex items-center relative px-4 with-line",children:[e.jsx(m,{className:"mr-2",id:"icon-star",width:"w-4",height:"h-4",strokeColor:"stroke-yellowStar",color:"fill-yellowStar"}),e.jsxs("p",{className:"pr-1",children:["Rating: ",s.rating]})]}),e.jsx("div",{className:"flex pl-4",children:e.jsxs("p",{children:["Price/1 hour: ",e.jsxs("span",{className:"text-green-500",children:[s.price_per_hour,"$"]})]})})]})}),e.jsxs("div",{className:"absolute top-0 right-0 cursor-pointer mobile-like",onClick:n,children:[l?e.jsx(m,{id:"icon-like-on",width:"w-[26px]",height:"h-[26px]",style:{fill:r,stroke:r,transition:"background-color 0.3s"}}):e.jsx(m,{id:"icon-like-off",width:"w-[26px]",height:"h-[26px]",strokeColor:"stroke-black"}),t&&e.jsx(B,{onClose:o})]})]})},P=({teacher:s})=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mt-8 text-mob-size font-medium flex flex-col gap-2",children:[e.jsxs("p",{children:[e.jsx("span",{className:"text-borderGrey",children:"Speaks:"})," ",s.languages.map((r,l)=>e.jsxs("span",{className:"custom-underline",children:[r,l!==s.languages.length-1&&","," "]},l))]}),e.jsxs("p",{children:[e.jsx("span",{className:"text-borderGrey",children:"Lesson Info:"})," ",s.lesson_info]}),e.jsxs("p",{children:[e.jsx("span",{className:"text-borderGrey",children:"Conditions:"})," ",s.conditions]})]})}),T=({teacher:s})=>e.jsx(e.Fragment,{children:s.reviews.map((r,l)=>e.jsxs("div",{className:"flex text-mob-size flex-col mb-8 font-medium",children:[e.jsxs("div",{className:"flex mb-4 gap-3",children:[e.jsx("img",{src:r.reviewer_avatar_url,alt:r.reviewer_name,className:"w-12 h-12 rounded-full"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-borderGrey",children:r.reviewer_name}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(m,{id:"icon-star",width:"w-4",height:"h-4",color:"fill-yellowStar",strokeColor:"stroke-yellowStar"}),e.jsx("p",{className:"text-sm",children:r.reviewer_rating.toFixed(1)})]})]})]}),e.jsxs("p",{children:[r.comment," "]})]},l))}),z=({teacher:s})=>{const{bg:r}=f(),l=M(L);return e.jsx("div",{className:"flex flex-wrap gap-2",children:s.levels.map((a,t)=>e.jsx("div",{style:{padding:"8px 12px",borderRadius:"35px",border:"1px solid rgba(18, 20, 23, 0.2)",backgroundColor:a===l?r:"transparent",borderColor:a===l?r:"rgba(18, 20, 23, 0.2)",transition:"background-color 0.9s"},children:e.jsxs("p",{className:"font-medium text-sm",children:["#",a]})},t))})},U=({teacher:s})=>{const[r,l]=c.useState(!1),[a,t]=c.useState(!1),o=()=>{l(!r)},n=()=>{t(!a)};return e.jsxs("div",{className:"relative bg-white w-full max-w-1184 flex mobile-flex rounded-3xl p-6",children:[e.jsx(I,{teacher:s}),e.jsxs("div",{className:"max-w-968 w-full",children:[e.jsx(q,{teacher:s}),e.jsx(P,{teacher:s}),e.jsxs("div",{className:"reviews",children:[e.jsx("button",{onClick:o,className:"text-mainBlack my-8",children:e.jsx("span",{className:"font-medium custom-underline",children:r?"Show Less":"Read More"})}),r&&e.jsxs("div",{children:[e.jsx("p",{className:"text-mob-size mb-8",children:s.experience}),e.jsx(T,{teacher:s})]}),e.jsx(z,{teacher:s}),r&&e.jsx(h,{type:"button",onClick:n,className:"text-mainBlack py-4 max-w-232 px-12 mx-auto mt-8",children:"Book trial lesson"})]})]}),a&&e.jsx($,{onClose:n,teacher:s})]})};export{U as T,L as a,Y as b,O as s};
