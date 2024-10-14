import{r,j as g,a8 as X,a as M,R as b,$ as L,P as $}from"./index-DAGPIPHi.js";function h(e,t,{checkForDefaultPrevented:n=!0}={}){return function(s){if(e==null||e(s),n===!1||!s.defaultPrevented)return t==null?void 0:t(s)}}function we(e,t){const n=r.createContext(t),o=i=>{const{children:a,...l}=i,f=r.useMemo(()=>l,Object.values(l));return g.jsx(n.Provider,{value:f,children:a})};o.displayName=e+"Provider";function s(i){const a=r.useContext(n);if(a)return a;if(t!==void 0)return t;throw new Error(`\`${i}\` must be used within \`${e}\``)}return[o,s]}function Ee(e,t=[]){let n=[];function o(i,a){const l=r.createContext(a),f=n.length;n=[...n,a];const c=p=>{var C;const{scope:d,children:m,...u}=p,v=((C=d==null?void 0:d[e])==null?void 0:C[f])||l,S=r.useMemo(()=>u,Object.values(u));return g.jsx(v.Provider,{value:S,children:m})};c.displayName=i+"Provider";function x(p,d){var v;const m=((v=d==null?void 0:d[e])==null?void 0:v[f])||l,u=r.useContext(m);if(u)return u;if(a!==void 0)return a;throw new Error(`\`${p}\` must be used within \`${i}\``)}return[c,x]}const s=()=>{const i=n.map(a=>r.createContext(a));return function(l){const f=(l==null?void 0:l[e])||i;return r.useMemo(()=>({[`__scope${e}`]:{...l,[e]:f}}),[l,f])}};return s.scopeName=e,[o,Z(s,...t)]}function Z(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const o=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(i){const a=o.reduce((l,{useScope:f,scopeName:c})=>{const p=f(i)[`__scope${c}`];return{...l,...p}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return n.scopeName=t.scopeName,n}function D(e){const t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...n)=>{var o;return(o=t.current)==null?void 0:o.call(t,...n)},[])}var O=globalThis!=null&&globalThis.document?r.useLayoutEffect:()=>{},H=X.useId||(()=>{}),ee=0;function te(e){const[t,n]=r.useState(H());return O(()=>{e||n(o=>o??String(ee++))},[e]),e||(t?`radix-${t}`:"")}function G(e,t=[]){let n=[];function o(i,a){const l=r.createContext(a),f=n.length;n=[...n,a];function c(p){const{scope:d,children:m,...u}=p,v=(d==null?void 0:d[e][f])||l,S=r.useMemo(()=>u,Object.values(u));return g.jsx(v.Provider,{value:S,children:m})}function x(p,d){const m=(d==null?void 0:d[e][f])||l,u=r.useContext(m);if(u)return u;if(a!==void 0)return a;throw new Error(`\`${p}\` must be used within \`${i}\``)}return c.displayName=i+"Provider",[c,x]}const s=()=>{const i=n.map(a=>r.createContext(a));return function(l){const f=(l==null?void 0:l[e])||i;return r.useMemo(()=>({[`__scope${e}`]:{...l,[e]:f}}),[l,f])}};return s.scopeName=e,[o,ne(s,...t)]}function ne(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const o=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(i){const a=o.reduce((l,{useScope:f,scopeName:c})=>{const p=f(i)[`__scope${c}`];return{...l,...p}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return n.scopeName=t.scopeName,n}function oe(e,t){return r.useReducer((n,o)=>t[n][o]??n,e)}var re=e=>{const{present:t,children:n}=e,o=se(t),s=typeof n=="function"?n({present:o.isPresent}):r.Children.only(n),i=M(o.ref,ce(s));return typeof n=="function"||o.isPresent?r.cloneElement(s,{ref:i}):null};re.displayName="Presence";function se(e){const[t,n]=r.useState(),o=r.useRef({}),s=r.useRef(e),i=r.useRef("none"),a=e?"mounted":"unmounted",[l,f]=oe(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return r.useEffect(()=>{const c=T(o.current);i.current=l==="mounted"?c:"none"},[l]),O(()=>{const c=o.current,x=s.current;if(x!==e){const d=i.current,m=T(c);e?f("MOUNT"):m==="none"||(c==null?void 0:c.display)==="none"?f("UNMOUNT"):f(x&&d!==m?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,f]),O(()=>{if(t){let c;const x=t.ownerDocument.defaultView??window,p=m=>{const v=T(o.current).includes(m.animationName);if(m.target===t&&v&&(f("ANIMATION_END"),!s.current)){const S=t.style.animationFillMode;t.style.animationFillMode="forwards",c=x.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=S)})}},d=m=>{m.target===t&&(i.current=T(o.current))};return t.addEventListener("animationstart",d),t.addEventListener("animationcancel",p),t.addEventListener("animationend",p),()=>{x.clearTimeout(c),t.removeEventListener("animationstart",d),t.removeEventListener("animationcancel",p),t.removeEventListener("animationend",p)}}else f("ANIMATION_END")},[t,f]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:r.useCallback(c=>{c&&(o.current=getComputedStyle(c)),n(c)},[])}}function T(e){return(e==null?void 0:e.animationName)||"none"}function ce(e){var o,s;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(s=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:s.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function ue({prop:e,defaultProp:t,onChange:n=()=>{}}){const[o,s]=ie({defaultProp:t,onChange:n}),i=e!==void 0,a=i?e:o,l=D(n),f=r.useCallback(c=>{if(i){const p=typeof c=="function"?c(e):c;p!==e&&l(p)}else s(c)},[i,e,s,l]);return[a,f]}function ie({defaultProp:e,onChange:t}){const n=r.useState(e),[o]=n,s=r.useRef(o),i=D(t);return r.useEffect(()=>{s.current!==o&&(i(o),s.current=o)},[o,s,i]),n}function ae(e){const t=e+"CollectionProvider",[n,o]=G(t),[s,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),a=m=>{const{scope:u,children:v}=m,S=b.useRef(null),C=b.useRef(new Map).current;return g.jsx(s,{scope:u,itemMap:C,collectionRef:S,children:v})};a.displayName=t;const l=e+"CollectionSlot",f=b.forwardRef((m,u)=>{const{scope:v,children:S}=m,C=i(l,v),I=M(u,C.collectionRef);return g.jsx(L,{ref:I,children:S})});f.displayName=l;const c=e+"CollectionItemSlot",x="data-radix-collection-item",p=b.forwardRef((m,u)=>{const{scope:v,children:S,...C}=m,I=b.useRef(null),w=M(u,I),E=i(c,v);return b.useEffect(()=>(E.itemMap.set(I,{ref:I,...C}),()=>void E.itemMap.delete(I))),g.jsx(L,{[x]:"",ref:w,children:S})});p.displayName=c;function d(m){const u=i(e+"CollectionConsumer",m);return b.useCallback(()=>{const S=u.collectionRef.current;if(!S)return[];const C=Array.from(S.querySelectorAll(`[${x}]`));return Array.from(u.itemMap.values()).sort((E,A)=>C.indexOf(E.ref.current)-C.indexOf(A.ref.current))},[u.collectionRef,u.itemMap])}return[{Provider:a,Slot:f,ItemSlot:p},d,o]}var le=r.createContext(void 0);function fe(e){const t=r.useContext(le);return e||t||"ltr"}var _="rovingFocusGroup.onEntryFocus",de={bubbles:!1,cancelable:!0},P="RovingFocusGroup",[y,k,me]=ae(P),[pe,he]=G(P,[me]),[ve,Ce]=pe(P),K=r.forwardRef((e,t)=>g.jsx(y.Provider,{scope:e.__scopeRovingFocusGroup,children:g.jsx(y.Slot,{scope:e.__scopeRovingFocusGroup,children:g.jsx(xe,{...e,ref:t})})}));K.displayName=P;var xe=r.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:o,loop:s=!1,dir:i,currentTabStopId:a,defaultCurrentTabStopId:l,onCurrentTabStopIdChange:f,onEntryFocus:c,preventScrollOnEntryFocus:x=!1,...p}=e,d=r.useRef(null),m=M(t,d),u=fe(i),[v=null,S]=ue({prop:a,defaultProp:l,onChange:f}),[C,I]=r.useState(!1),w=D(c),E=k(n),A=r.useRef(!1),[Y,j]=r.useState(0);return r.useEffect(()=>{const R=d.current;if(R)return R.addEventListener(_,w),()=>R.removeEventListener(_,w)},[w]),g.jsx(ve,{scope:n,orientation:o,dir:u,loop:s,currentTabStopId:v,onItemFocus:r.useCallback(R=>S(R),[S]),onItemShiftTab:r.useCallback(()=>I(!0),[]),onFocusableItemAdd:r.useCallback(()=>j(R=>R+1),[]),onFocusableItemRemove:r.useCallback(()=>j(R=>R-1),[]),children:g.jsx($.div,{tabIndex:C||Y===0?-1:0,"data-orientation":o,...p,ref:m,style:{outline:"none",...e.style},onMouseDown:h(e.onMouseDown,()=>{A.current=!0}),onFocus:h(e.onFocus,R=>{const q=!A.current;if(R.target===R.currentTarget&&q&&!C){const U=new CustomEvent(_,de);if(R.currentTarget.dispatchEvent(U),!U.defaultPrevented){const F=E().filter(N=>N.focusable),z=F.find(N=>N.active),J=F.find(N=>N.id===v),Q=[z,J,...F].filter(Boolean).map(N=>N.ref.current);V(Q,x)}}A.current=!1}),onBlur:h(e.onBlur,()=>I(!1))})})}),B="RovingFocusGroupItem",W=r.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:o=!0,active:s=!1,tabStopId:i,...a}=e,l=te(),f=i||l,c=Ce(B,n),x=c.currentTabStopId===f,p=k(n),{onFocusableItemAdd:d,onFocusableItemRemove:m}=c;return r.useEffect(()=>{if(o)return d(),()=>m()},[o,d,m]),g.jsx(y.ItemSlot,{scope:n,id:f,focusable:o,active:s,children:g.jsx($.span,{tabIndex:x?0:-1,"data-orientation":c.orientation,...a,ref:t,onMouseDown:h(e.onMouseDown,u=>{o?c.onItemFocus(f):u.preventDefault()}),onFocus:h(e.onFocus,()=>c.onItemFocus(f)),onKeyDown:h(e.onKeyDown,u=>{if(u.key==="Tab"&&u.shiftKey){c.onItemShiftTab();return}if(u.target!==u.currentTarget)return;const v=Re(u,c.orientation,c.dir);if(v!==void 0){if(u.metaKey||u.ctrlKey||u.altKey||u.shiftKey)return;u.preventDefault();let C=p().filter(I=>I.focusable).map(I=>I.ref.current);if(v==="last")C.reverse();else if(v==="prev"||v==="next"){v==="prev"&&C.reverse();const I=C.indexOf(u.currentTarget);C=c.loop?ge(C,I+1):C.slice(I+1)}setTimeout(()=>V(C))}})})})});W.displayName=B;var Se={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Ie(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function Re(e,t,n){const o=Ie(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(o))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(o)))return Se[o]}function V(e,t=!1){const n=document.activeElement;for(const o of e)if(o===n||(o.focus({preventScroll:t}),document.activeElement!==n))return}function ge(e,t){return e.map((n,o)=>e[(t+o)%e.length])}var Ae=K,Te=W;export{Te as I,re as P,Ae as R,h as a,ue as b,Ee as c,he as d,fe as e,D as f,O as g,ae as h,G as i,we as j,te as u};