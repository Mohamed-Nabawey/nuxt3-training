import{g as m,h as _,i as y,o as p,c as f,a as u,t as d,u as i,F as v,j as C,r as l,k}from"./DnAsYmUB.js";const b="$s";function x(...n){const e=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(e);const[o,t]=n;if(!o||typeof o!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+o);if(t!==void 0&&typeof t!="function")throw new Error("[nuxt] [useState] init must be a function: "+t);const s=b+o,c=m(),a=_(c.payload.state,s);if(a.value===void 0&&t){const r=t();if(y(r))return c.payload.state[s]=r,r;a.value=r}return a}const S=()=>x("counter",()=>0),$=u("div",null," counter component:",-1),B={__name:"Counter",setup(n){const e=S();return(o,t)=>(p(),f(v,null,[$,u("div",null," Counter = "+d(i(e)),1),u("button",{onClick:t[0]||(t[0]=s=>e.value++)}," + "),u("button",{onClick:t[1]||(t[1]=s=>e.value--)}," - ")],64))}},w=C("counter",()=>{const n=l(0),e=l("Eduardo"),o=k(()=>n.value*2);function t(){n.value++}return{count:n,name:e,doubleCount:o,increment:t}}),E=u("div",null," Pinia counter component:",-1),P={__name:"PiniaCounter",setup(n){const e=w();return(o,t)=>(p(),f(v,null,[E,u("div",null," Counter = "+d(i(e).count),1),u("button",{onClick:t[0]||(t[0]=s=>i(e).count++)}," + "),u("button",{onClick:t[1]||(t[1]=s=>i(e).count--)}," - ")],64))}};export{B as _,w as a,P as b,S as u};
