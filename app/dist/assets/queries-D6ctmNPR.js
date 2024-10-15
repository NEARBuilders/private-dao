import{U as a,H as h,j as s,V as p,W as l,X as i,Y as t,Z as c,_ as m,A as x,K as u,z as j}from"./index-DAGPIPHi.js";import{H as y}from"./index-gt7ugLqO.js";import{D as g}from"./config-B5Zl_rYi.js";import{u as w}from"./useQuery-BxQCRZWO.js";const f=a.object({firstname:a.string({required_error:"First name is required"}).min(1,{message:"firstname is should be at least 1 character"}),lastname:a.string().min(1,{message:"lastname is required"}),username:a.string().min(1,{message:"username is required"}),school:a.string().min(1,{message:"school is required"}),email:a.string().email({message:"Enter a valid email address"}),phone:a.string().min(1,{message:"Enter a valid phone number"}),password:a.string().min(1,{message:"Password is required"}),confirmPassword:a.string().min(1,{message:"Confirm Password is required"})}).refine(o=>o.password===o.confirmPassword,{message:"Passwords must match",path:["confirmPassword"]}),P=({modalClose:o})=>{const e=h({resolver:u(f),defaultValues:{}}),n=r=>{console.log(r)};return s.jsxs("div",{className:"px-2",children:[s.jsx(y,{title:"Create New Member",description:"",className:"space-y-2 py-4 text-center"}),s.jsx(p,{...e,children:s.jsxs("form",{onSubmit:e.handleSubmit(n),className:"space-y-4",autoComplete:"off",children:[s.jsxs("div",{className:"grid grid-cols-2 gap-x-8 gap-y-4",children:[s.jsx(l,{control:e.control,name:"firstname",render:({field:r})=>s.jsxs(i,{children:[s.jsx(t,{children:s.jsx(c,{placeholder:"Enter your firstname",...r,className:" px-4 py-6 shadow-inner drop-shadow-xl"})}),s.jsx(m,{})]})}),s.jsx(l,{control:e.control,name:"lastname",render:({field:r})=>s.jsxs(i,{children:[s.jsx(t,{children:s.jsx(c,{placeholder:"Enter your lastname",...r,className:" px-4 py-6 shadow-inner drop-shadow-xl"})}),s.jsx(m,{})]})}),s.jsx(l,{control:e.control,name:"username",render:({field:r})=>s.jsxs(i,{children:[s.jsx(t,{children:s.jsx(c,{placeholder:"Enter your username",...r,className:" px-4 py-6 shadow-inner drop-shadow-xl"})}),s.jsx(m,{})]})}),s.jsx(l,{control:e.control,name:"school",render:({field:r})=>s.jsxs(i,{children:[s.jsx(t,{children:s.jsx(c,{placeholder:"Enter your school",...r,className:" px-4 py-6 shadow-inner drop-shadow-xl"})}),s.jsx(m,{})]})}),s.jsx(l,{control:e.control,name:"email",render:({field:r})=>s.jsxs(i,{children:[s.jsx(t,{children:s.jsx(c,{placeholder:"Enter your email",...r,className:" px-4 py-6 shadow-inner drop-shadow-xl"})}),s.jsx(m,{})]})}),s.jsx(l,{control:e.control,name:"phone",render:({field:r})=>s.jsxs(i,{children:[s.jsx(t,{children:s.jsx(c,{placeholder:"Enter your phone",...r,className:" px-4 py-6 shadow-inner drop-shadow-xl"})}),s.jsx(m,{})]})})]}),s.jsxs("div",{className:"grid grid-cols-1 gap-x-8 gap-y-4",children:[s.jsx(l,{control:e.control,name:"password",render:({field:r})=>s.jsxs(i,{children:[s.jsx(t,{children:s.jsx(c,{placeholder:"Enter your password",...r,className:" px-4 py-6 shadow-inner drop-shadow-xl"})}),s.jsx(m,{})]})}),s.jsx(l,{control:e.control,name:"confirmPassword",render:({field:r})=>s.jsxs(i,{children:[s.jsx(t,{children:s.jsx(c,{placeholder:"Enter your confirmPassword",...r,className:" px-4 py-6 shadow-inner drop-shadow-xl"})}),s.jsx(m,{})]})})]}),s.jsxs("div",{className:"flex items-center justify-center gap-4",children:[s.jsx(x,{type:"button",variant:"secondary",className:"rounded-full ",size:"lg",onClick:o,children:"Cancel"}),s.jsx(x,{type:"submit",className:"rounded-full",size:"lg",children:"Create Member"})]})]})})]})},b=o=>{const e={policy:o,users:{},roles:{},everyone:{}};return o.roles.forEach(n=>{n.kind==="Everyone"&&(e.everyone=n),n.kind.Group&&(e.roles[n.name]||(e.roles[n.name]=n),n.kind.Group.forEach(r=>{e.users[r]||(e.users[r]=[]),e.users[r].push(n.name)}))}),e};async function N(o){try{const e=await o.viewMethod({contractId:g,method:"get_policy"}),n=b(e);return Object.keys((n==null?void 0:n.users)??{}).map(d=>({id:d,roles:n.users[d]}))}catch(e){throw console.log(e),e}}const C=()=>{const{wallet:o}=j();return w({queryKey:["members"],queryFn:async()=>N(o),retry:3})};export{P as M,C as u};
