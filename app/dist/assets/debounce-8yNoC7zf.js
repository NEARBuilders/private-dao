import{j as _,a0 as B,b as v,O as P}from"./index-DAGPIPHi.js";function He({title:e="Kutubi"}){return _.jsx(B,{children:_.jsxs("title",{children:[" ",e," "]})})}var H=typeof v=="object"&&v&&v.Object===Object&&v,D=H,U=D,K=typeof self=="object"&&self&&self.Object===Object&&self,X=U||K||Function("return this")(),R=X,q=R,z=q.Symbol,w=z,I=w,W=Object.prototype,J=W.hasOwnProperty,Q=W.toString,l=I?I.toStringTag:void 0;function V(e){var t=J.call(e,l),i=e[l];try{e[l]=void 0;var a=!0}catch{}var s=Q.call(e);return a&&(t?e[l]=i:delete e[l]),s}var Y=V,Z=Object.prototype,ee=Z.toString;function te(e){return ee.call(e)}var re=te,E=w,ne=Y,ie=re,ae="[object Null]",oe="[object Undefined]",k=E?E.toStringTag:void 0;function se(e){return e==null?e===void 0?oe:ae:k&&k in Object(e)?ne(e):ie(e)}var ce=se;function fe(e){return e!=null&&typeof e=="object"}var ue=fe,be=ce,de=ue,me="[object Symbol]";function le(e){return typeof e=="symbol"||de(e)&&be(e)==me}var ge=le;function ve(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var O=ve;const De=P(O);var Te=R,je=function(){return Te.Date.now()},ye=je,Se=/\s/;function Oe(e){for(var t=e.length;t--&&Se.test(e.charAt(t)););return t}var $e=Oe,pe=$e,xe=/^\s+/;function he(e){return e&&e.slice(0,pe(e)+1).replace(xe,"")}var _e=he,Ie=_e,G=O,Ee=ge,L=NaN,ke=/^[-+]0x[0-9a-f]+$/i,Ge=/^0b[01]+$/i,Le=/^0o[0-7]+$/i,Ne=parseInt;function Pe(e){if(typeof e=="number")return e;if(Ee(e))return L;if(G(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=G(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Ie(e);var i=Ge.test(e);return i||Le.test(e)?Ne(e.slice(2),i?2:8):ke.test(e)?L:+e}var Re=Pe,we=O,S=ye,N=Re,We="Expected a function",Ce=Math.max,Ae=Math.min;function Fe(e,t,i){var a,s,u,f,n,c,b=0,$=!1,d=!1,T=!0;if(typeof e!="function")throw new TypeError(We);t=N(t)||0,we(i)&&($=!!i.leading,d="maxWait"in i,u=d?Ce(N(i.maxWait)||0,t):u,T="trailing"in i?!!i.trailing:T);function j(r){var o=a,m=s;return a=s=void 0,b=r,f=e.apply(m,o),f}function C(r){return b=r,n=setTimeout(g,t),$?j(r):f}function A(r){var o=r-c,m=r-b,h=t-o;return d?Ae(h,u-m):h}function p(r){var o=r-c,m=r-b;return c===void 0||o>=t||o<0||d&&m>=u}function g(){var r=S();if(p(r))return x(r);n=setTimeout(g,A(r))}function x(r){return n=void 0,T&&a?j(r):(a=s=void 0,f)}function F(){n!==void 0&&clearTimeout(n),b=0,a=c=s=n=void 0}function M(){return n===void 0?f:x(S())}function y(){var r=S(),o=p(r);if(a=arguments,s=this,c=r,o){if(n===void 0)return C(c);if(d)return clearTimeout(n),n=setTimeout(g,t),j(c)}return n===void 0&&(n=setTimeout(g,t)),f}return y.cancel=F,y.flush=M,y}var Me=Fe;const Ue=P(Me);export{He as P,ce as _,O as a,R as b,w as c,ue as d,De as e,D as f,Me as g,Ue as h,ge as i,Re as t};