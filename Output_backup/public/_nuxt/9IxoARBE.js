import{_ as p,o as d,c as r,a as t,t as e,p as u,b as l,e as m,l as h,m as x,d as f,u as b}from"./DnAsYmUB.js";import{u as g}from"./DgSrljMG.js";const n=s=>(u("data-v-4ec4c429"),s=s(),l(),s),v={class:"card"},y={class:"grid grid-cols-2 gap-10"},P={class:"p-7"},w=["src"],I={class:"p-7"},S={class:"text-4xl my-7"},$={class:"text-xl my-7"},k=n(()=>t("h3",{class:"font-bold border-b-2 mb-4 pb-2"},"Product description:",-1)),B={class:"mb-7"},C=n(()=>t("button",{class:"btn flex"},[t("i",{class:"material-icons mr-2"},"add_shopping_cart"),t("span",null,"Add to cart")],-1)),D={__name:"ProductDetails",props:["product"],setup(s){return(c,o)=>(d(),r("div",v,[t("div",y,[t("div",P,[t("img",{src:`${s.product.image}`,class:"mx-auto my-7"},null,8,w)]),t("div",I,[t("h2",S,e(s.product.title),1),t("p",$,"Price - $"+e(s.product.price),1),k,t("p",B,e(s.product.description),1),C])])]))}},A=p(D,[["__scopeId","data-v-4ec4c429"]]),O={__name:"[id]",async setup(s){let c,o;const i="https://fakestoreapi.com/products/"+m().params.id,{data:a}=([c,o]=h(()=>g(i,"$H3OxYP9tuC")),c=await c,o(),c);if(!a.value)throw x({statusCode:404,message:"Product not found"});return(N,V)=>{const _=A;return d(),r("div",null,[f(_,{product:b(a)},null,8,["product"])])}}};export{O as default};
