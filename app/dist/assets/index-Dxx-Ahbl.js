import{r as n,G as S,j as e,A as M,T as v}from"./index-DAGPIPHi.js";import{F as k,D as w,A as N,a as y,b as D,B as T}from"./fuse-N3s-rkuC.js";import{h as F,P as E}from"./debounce-8yNoC7zf.js";import{A as K,E as $,S as R,C as h,T as I,P as O,D as _}from"./table-search-input-D7TqbQma.js";import{g as B,h as H,i as L,j as G,m as x,T as U}from"./index-gt7ugLqO.js";import{M as V,u as Q}from"./queries-ClyOZLvp.js";import"./skeleton-BBJg0k-N.js";import"./index-Cs3Kk7dZ.js";import"./config-B5Zl_rYi.js";import"./useQuery-BxQCRZWO.js";const Y=({data:s})=>{const[a]=n.useState(!1),[r,o]=n.useState(!1),c=S(),t=async()=>{};return e.jsxs(e.Fragment,{children:[e.jsx(K,{isOpen:r,onClose:()=>o(!1),onConfirm:t,loading:a}),e.jsxs(B,{modal:!1,children:[e.jsx(H,{asChild:!0,children:e.jsxs(M,{variant:"ghost",className:"h-8 w-8 p-0",children:[e.jsx("span",{className:"sr-only",children:"Open menu"}),e.jsx($,{className:"h-4 w-4"})]})}),e.jsxs(L,{align:"end",children:[e.jsx(G,{children:"Actions"}),e.jsxs(x,{onClick:()=>c.push(`/dashboard/proposal/${s.id}`),children:[e.jsx(R,{className:"mr-2 h-4 w-4"})," Update"]}),e.jsxs(x,{onClick:()=>o(!0),children:[e.jsx(U,{className:"mr-2 h-4 w-4"})," Delete"]})]})]})]})},q=[{id:"select",header:({table:s})=>e.jsx(h,{checked:s.getIsAllPageRowsSelected(),onCheckedChange:a=>s.toggleAllPageRowsSelected(!!a),"aria-label":"Select all"}),cell:({row:s})=>e.jsx(h,{checked:s.getIsSelected(),onCheckedChange:a=>s.toggleSelected(!!a),"aria-label":"Select row"}),enableSorting:!1,enableHiding:!1},{accessorKey:"id",header:"ID"},{accessorKey:"proposer",header:"Proposer"},{accessorKey:"description",header:"Description"},{accessorKey:"kind",header:"Kind",cell:({row:s})=>{const a=s.original.kind;return"AddMemberToRole"in a?`Add Member: ${a.AddMemberToRole.member_id}`:"FunctionCall"in a?`Function Call: ${a.FunctionCall.receiver_id}`:"Unknown"}},{accessorKey:"status",header:"Status"},{accessorKey:"votes",header:"Votes",cell:({row:s})=>{const a=s.original.votes;return Object.entries(a).map(([r,o])=>`${r}: ${o}`).join(", ")}},{accessorKey:"vote_counts",header:"Vote Counts",cell:({row:s})=>{const a=s.original.vote_counts.council;return Array.isArray(a)?`Yes: ${a[0]}, No: ${a[1]}, Abstain: ${a[2]}`:"N/A"}},{id:"actions",cell:({row:s})=>e.jsx(Y,{data:s.original})}];function z(){return e.jsxs("div",{className:"flex items-center justify-between gap-2 py-5",children:[e.jsx("div",{className:"flex flex-1 gap-4",children:e.jsx(I,{placeholder:"Search People Here"})}),e.jsx("div",{className:"flex gap-3",children:e.jsx(O,{renderModal:s=>e.jsx(V,{modalClose:s})})})]})}function J({proposals:s,pageCount:a}){return e.jsxs(e.Fragment,{children:[e.jsx(z,{}),s&&e.jsx(_,{columns:q,data:s,pageCount:a})]})}function ce(){const[s]=v(),a=Number(s.get("page")||1),r=Number(s.get("limit")||20),o=s.get("search")||"",c=(a-1)*r,{data:t,isLoading:g,isError:f,error:i}=Q(c,r),[d,u]=n.useState([]),[j,b]=n.useState([]);if(n.useEffect(()=>{if(t){const l=F(m=>{if(!m){u(t);return}const A=new k(t,{keys:["id","roles"],threshold:.3,includeScore:!0}).search(m);u(A.map(P=>P.item))},300);return l(o),()=>l.cancel()}},[t,o]),n.useEffect(()=>{const l=(a-1)*r;b(d.slice(l,l+r))},[d,a,r]),g)return e.jsx("div",{className:"p-5",children:e.jsx(w,{columnCount:10,filterableColumnCount:2,searchableColumnCount:1})});if(f)return e.jsx("div",{className:"p-4 md:p-8",children:e.jsxs(N,{variant:"destructive",children:[e.jsx(y,{children:"Error"}),e.jsx(D,{children:(i==null?void 0:i.message)||"An error occurred while fetching proposals."})]})});const p=d.length,C=Math.ceil(p/r);return e.jsxs("div",{className:"p-4 md:p-8",children:[e.jsx(E,{title:"Member Management | App"}),e.jsx(T,{items:[{title:"Dashboard",link:"/"},{title:"proposals",link:"/proposals"}]}),e.jsx(J,{proposals:j,page:a,totalProposals:p,pageCount:C})]})}export{ce as default};