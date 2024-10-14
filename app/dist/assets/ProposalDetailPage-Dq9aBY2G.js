import{r as m,G as j,j as e,A as c,T as f}from"./index-DAGPIPHi.js";import{g as b,h as N,i as _,j as C,m as h,T as w,H as k,C as v}from"./index-gt7ugLqO.js";import{D as y,S,B as D}from"./badge-C9WKr7yM.js";import{C as r,a as t,d as n}from"./card-QbIj8NEr.js";import{A as M,E as A,S as P,C as p,T,P as L,D as E}from"./table-search-input-D7TqbQma.js";import{M as I,u as B}from"./queries-ClyOZLvp.js";import"./index-Cs3Kk7dZ.js";import"./config-B5Zl_rYi.js";import"./useQuery-BxQCRZWO.js";const F=({data:s})=>{const[a]=m.useState(!1),[d,l]=m.useState(!1),o=j(),i=async()=>{};return e.jsxs(e.Fragment,{children:[e.jsx(M,{isOpen:d,onClose:()=>l(!1),onConfirm:i,loading:a}),e.jsxs(b,{modal:!1,children:[e.jsx(N,{asChild:!0,children:e.jsxs(c,{variant:"ghost",className:"h-8 w-8 p-0",children:[e.jsx("span",{className:"sr-only",children:"Open menu"}),e.jsx(A,{className:"h-4 w-4"})]})}),e.jsxs(_,{align:"end",children:[e.jsx(C,{children:"Actions"}),e.jsxs(h,{onClick:()=>o.push(`/dashboard/user/${s.id}`),children:[e.jsx(P,{className:"mr-2 h-4 w-4"})," Update"]}),e.jsxs(h,{onClick:()=>l(!0),children:[e.jsx(w,{className:"mr-2 h-4 w-4"})," Delete"]})]})]})]})},H=[{id:"select",header:({table:s})=>e.jsx(p,{checked:s.getIsAllPageRowsSelected(),onCheckedChange:a=>s.toggleAllPageRowsSelected(!!a),"aria-label":"Select all"}),cell:({row:s})=>e.jsx(p,{checked:s.getIsSelected(),onCheckedChange:a=>s.toggleSelected(!!a),"aria-label":"Select row"}),enableSorting:!1,enableHiding:!1},{accessorKey:"id",header:"ID"},{accessorKey:"roles",header:"ROLES"},{id:"actions",cell:({row:s})=>e.jsx(F,{data:s.original})}];function K(){return e.jsxs("div",{className:"flex items-center justify-between py-5",children:[e.jsx("div",{className:"flex flex-1 gap-4",children:e.jsx(T,{placeholder:"Search People Here"})}),e.jsxs("div",{className:"flex gap-3",children:[e.jsxs(c,{children:[e.jsx(y,{className:"h-6 w-6"}),"Download CSV"]}),e.jsx(L,{renderModal:s=>e.jsx(I,{modalClose:s})})]})]})}function R({users:s,pageCount:a}){return e.jsxs(e.Fragment,{children:[e.jsx(K,{}),s&&e.jsx(E,{columns:H,data:s,pageCount:a})]})}function X(){const[s]=f(),a=Number(s.get("page")||1),d=Number(s.get("limit")||10);s.get("search");const{data:l,isLoading:o}=B(),i=l==null?void 0:l.users,x=l==null?void 0:l.total_users,u=Math.ceil(x/d),g=j();return o?e.jsx("h1",{children:"Loading!!!"}):e.jsxs("div",{className:"p-10",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(k,{title:"Personal Details"}),e.jsxs("div",{className:"flex justify-end gap-3",children:[e.jsxs(c,{children:[e.jsx(S,{className:"h-4 w-4"}),"Share"]}),e.jsxs(c,{onClick:()=>g.back(),children:[e.jsx(v,{className:"h-4 w-4"}),"Back"]})]})]}),e.jsxs("div",{className:"grid  grid-cols-1 gap-6 py-6 lg:grid-cols-4",children:[e.jsxs("div",{className:" col-span-1 flex flex-col gap-6 lg:col-span-1",children:[e.jsxs(r,{className:"bg-secondary  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] drop-shadow-sm",children:[e.jsxs(t,{className:"flex flex-row items-center justify-between font-bold",children:[e.jsx("p",{className:"text-xl",children:" Profile"}),e.jsx(D,{className:"bg-green-600",children:"Active"})]}),e.jsx(n,{className:"flex items-center justify-center",children:e.jsx("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrmY1DyC4CYWTK_Bhn6qQygwQJW0UQgXn-ew&usqp=CAU",className:"rounded-l-[40%] rounded-r-[40%] "})})]}),e.jsxs(r,{className:"bg-secondary shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] drop-shadow-sm",children:[e.jsx(t,{className:"pb-2 text-center font-bold",children:"About Me"}),e.jsx(n,{className:"text-sm",children:"Hello! I'm Srikkath, your dedicated admin at Kutubi, ensuring a seamless and enriching experience for teachers, Proposals, and parents. Feel free to reach out for any assistance or feedback"})]}),e.jsxs(r,{className:"bg-secondary shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] drop-shadow-sm",children:[e.jsx(t,{className:"pb-2 text-center font-bold",children:"Last Login"}),e.jsx(n,{className:"text-center text-sm",children:"12 Aug 2022 9:30 AM"})]})]}),e.jsxs(r,{className:" col-span-1 bg-secondary shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] drop-shadow-sm lg:col-span-3",children:[e.jsx(t,{className:"text-xl font-bold",children:"Contact Information"}),e.jsx(n,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-black",children:"First Name"}),e.jsx("p",{className:"text-muted-foreground",children:"John"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-black",children:"Last Name"}),e.jsx("p",{className:"text-muted-foreground",children:"Doe"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-black",children:"User Name"}),e.jsx("p",{className:"text-muted-foreground",children:"John"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-black",children:"Sex"}),e.jsx("p",{className:"text-muted-foreground",children:"Male"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-black",children:"Position"}),e.jsx("p",{className:"text-muted-foreground",children:"Super Admin"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-black",children:"Department"}),e.jsx("p",{className:"text-muted-foreground",children:"Kutubi"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-black",children:"Contact Email"}),e.jsx("p",{className:"text-muted-foreground",children:"ElonMusk@x.com"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-black",children:"Contact Number"}),e.jsx("p",{className:"text-muted-foreground",children:"Nil"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-black",children:"City"}),e.jsx("p",{className:"text-muted-foreground",children:"Dubai"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-black",children:"Language"}),e.jsx("p",{className:"text-muted-foreground",children:"English"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-black",children:"Date of Birth"}),e.jsx("p",{className:"text-muted-foreground",children:"26/4/1989"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-black",children:"Social Media"}),e.jsx("p",{className:"text-muted-foreground",children:"x"})]})]})})]})]}),e.jsx("div",{className:"flex items-center justify-center"}),e.jsx(R,{users:i,page:a,totalUsers:x,pageCount:u})]})}export{X as default};