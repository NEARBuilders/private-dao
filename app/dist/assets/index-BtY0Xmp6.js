import{r as n,G as M,j as e,A as w,T as A}from"./index-DAGPIPHi.js";import{F as D,D as N,A as P,a as k,b as T,B as v}from"./fuse-N3s-rkuC.js";import{h as E,P as y}from"./debounce-8yNoC7zf.js";import{A as F,E as U,S as I,C as p,T as R,P as L,D as O}from"./table-search-input-D7TqbQma.js";import{g as B,h as H,i as G,j as K,m as x,T as Q}from"./index-gt7ugLqO.js";import{M as $,u as q}from"./queries-D6ctmNPR.js";import"./skeleton-BBJg0k-N.js";import"./index-Cs3Kk7dZ.js";import"./config-B5Zl_rYi.js";import"./useQuery-BxQCRZWO.js";const z=({data:s})=>{const[a]=n.useState(!1),[r,l]=n.useState(!1),t=M(),c=async()=>{};return e.jsxs(e.Fragment,{children:[e.jsx(F,{isOpen:r,onClose:()=>l(!1),onConfirm:c,loading:a}),e.jsxs(B,{modal:!1,children:[e.jsx(H,{asChild:!0,children:e.jsxs(w,{variant:"ghost",className:"h-8 w-8 p-0",children:[e.jsx("span",{className:"sr-only",children:"Open menu"}),e.jsx(U,{className:"h-4 w-4"})]})}),e.jsxs(G,{align:"end",children:[e.jsx(K,{children:"Actions"}),e.jsxs(x,{onClick:()=>t.push(`/dashboard/user/${s.id}`),children:[e.jsx(I,{className:"mr-2 h-4 w-4"})," Update"]}),e.jsxs(x,{onClick:()=>l(!0),children:[e.jsx(Q,{className:"mr-2 h-4 w-4"})," Delete"]})]})]})]})},J=[{id:"select",header:({table:s})=>e.jsx(p,{checked:s.getIsAllPageRowsSelected(),onCheckedChange:a=>s.toggleAllPageRowsSelected(!!a),"aria-label":"Select all"}),cell:({row:s})=>e.jsx(p,{checked:s.getIsSelected(),onCheckedChange:a=>s.toggleSelected(!!a),"aria-label":"Select row"}),enableSorting:!1,enableHiding:!1},{accessorKey:"id",header:"ID"},{accessorKey:"roles",header:"ROLES"},{id:"actions",cell:({row:s})=>e.jsx(z,{data:s.original})}];function V(){return e.jsxs("div",{className:"flex items-center justify-between gap-2 py-5",children:[e.jsx("div",{className:"flex flex-1 gap-4",children:e.jsx(R,{placeholder:"Search People Here"})}),e.jsx("div",{className:"flex gap-3",children:e.jsx(L,{renderModal:s=>e.jsx($,{modalClose:s})})})]})}function W({users:s,pageCount:a}){return e.jsxs(e.Fragment,{children:[e.jsx(V,{}),s&&e.jsx(O,{columns:J,data:s,pageCount:a})]})}function oe(){const[s]=A(),a=Number(s.get("page")||1),r=Number(s.get("limit")||20),l=s.get("search")||"",{data:t,isLoading:c,isError:g,error:i}=q(),[d,m]=n.useState([]),[j,f]=n.useState([]);if(n.useEffect(()=>{if(t){const o=E(h=>{if(!h){m(t);return}const C=new D(t,{keys:["id","roles"],threshold:.3,includeScore:!0}).search(h);m(C.map(S=>S.item))},300);return o(l),()=>o.cancel()}},[t,l]),n.useEffect(()=>{const o=(a-1)*r;f(d.slice(o,o+r))},[d,a,r]),c)return e.jsx("div",{className:"p-5",children:e.jsx(N,{columnCount:10,filterableColumnCount:2,searchableColumnCount:1})});if(g)return e.jsx("div",{className:"p-4 md:p-8",children:e.jsxs(P,{variant:"destructive",children:[e.jsx(k,{children:"Error"}),e.jsx(T,{children:(i==null?void 0:i.message)||"An error occurred while fetching members."})]})});const u=d.length,b=Math.ceil(u/r);return e.jsxs("div",{className:"p-4 md:p-8",children:[e.jsx(y,{title:"Member Management | App"}),e.jsx(v,{items:[{title:"Dashboard",link:"/"},{title:"Members",link:"/members"}]}),e.jsx(W,{users:j,page:a,totalUsers:u,pageCount:b})]})}export{oe as default};