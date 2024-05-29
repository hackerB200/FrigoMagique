import{s,g as c,$ as H,D as r,a as n,f as b,n as V,bd as U,R as y,U as x,a6 as p,aF as h,a7 as P,aD as C,m as Y,h as $,i as G,bA as J,j as K,k as Q,l as W,au as X,q as Z,ar as ee,a0 as ae,t as te,x as ne,ax as de,aa as le,y as ie,z as se,bB as ce,A as re,B as ue,C as oe,aA as ve,Y as S,a4 as me,a5 as ye,b5 as be,bC as ge,aB as ke}from"./index-CevbNeDL.js";const _e=(e,d)=>{const a=e.__vccOpts||e;for(const[t,i]of d)a[t]=i;return a},fe=s()({name:"VCardActions",props:c(),setup(e,d){let{slots:a}=d;return H({VBtn:{slim:!0,variant:"text"}}),r(()=>{var t;return n("div",{class:["v-card-actions",e.class],style:e.style},[(t=a.default)==null?void 0:t.call(a)])}),{}}}),Ce=b({opacity:[Number,String],...c(),...V()},"VCardSubtitle"),Ve=s()({name:"VCardSubtitle",props:Ce(),setup(e,d){let{slots:a}=d;return r(()=>n(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},a)),{}}}),Ie=U("v-card-title"),Ae=b({appendAvatar:String,appendIcon:y,prependAvatar:String,prependIcon:y,subtitle:[String,Number],title:[String,Number],...c(),...x()},"VCardItem"),pe=s()({name:"VCardItem",props:Ae(),setup(e,d){let{slots:a}=d;return r(()=>{var o;const t=!!(e.prependAvatar||e.prependIcon),i=!!(t||a.prepend),u=!!(e.appendAvatar||e.appendIcon),g=!!(u||a.append),k=!!(e.title!=null||a.title),f=!!(e.subtitle!=null||a.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[i&&n("div",{key:"prepend",class:"v-card-item__prepend"},[a.prepend?n(C,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},a.prepend):n(p,null,[e.prependAvatar&&n(h,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(P,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[k&&n(Ie,{key:"title"},{default:()=>{var l;return[((l=a.title)==null?void 0:l.call(a))??e.title]}}),f&&n(Ve,{key:"subtitle"},{default:()=>{var l;return[((l=a.subtitle)==null?void 0:l.call(a))??e.subtitle]}}),(o=a.default)==null?void 0:o.call(a)]),g&&n("div",{key:"append",class:"v-card-item__append"},[a.append?n(C,{key:"append-defaults",disabled:!u,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},a.append):n(p,null,[e.appendIcon&&n(P,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(h,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),he=b({opacity:[Number,String],...c(),...V()},"VCardText"),Pe=s()({name:"VCardText",props:he(),setup(e,d){let{slots:a}=d;return r(()=>n(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},a)),{}}}),Se=b({appendAvatar:String,appendIcon:y,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:y,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...Y(),...c(),...x(),...$(),...G(),...J(),...K(),...Q(),...W(),...X(),...V(),...Z(),...ee({variant:"elevated"})},"VCard"),Te=s()({name:"VCard",directives:{Ripple:ae},props:Se(),setup(e,d){let{attrs:a,slots:t}=d;const{themeClasses:i}=te(e),{borderClasses:u}=ne(e),{colorClasses:g,colorStyles:k,variantClasses:f}=de(e),{densityClasses:o}=le(e),{dimensionStyles:l}=ie(e),{elevationClasses:_}=se(e),{loaderClasses:T}=ce(e),{locationStyles:B}=re(e),{positionClasses:D}=ue(e),{roundedClasses:L}=oe(e),v=ve(e,a),N=S(()=>e.link!==!1&&v.isLink.value),m=S(()=>!e.disabled&&e.link!==!1&&(e.link||v.isClickable.value));return r(()=>{const R=N.value?"a":e.tag,F=!!(t.title||e.title!=null),O=!!(t.subtitle||e.subtitle!=null),j=F||O,E=!!(t.append||e.appendAvatar||e.appendIcon),M=!!(t.prepend||e.prependAvatar||e.prependIcon),q=!!(t.image||e.image),w=j||M||E,z=!!(t.text||e.text!=null);return me(n(R,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":m.value},i.value,u.value,g.value,o.value,_.value,T.value,D.value,L.value,f.value,e.class],style:[k.value,l.value,B.value,e.style],href:v.href.value,onClick:m.value&&v.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var I;return[q&&n("div",{key:"image",class:"v-card__image"},[t.image?n(C,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):n(be,{key:"image-img",cover:!0,src:e.image},null)]),n(ge,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:t.loader}),w&&n(pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),z&&n(Pe,{key:"text"},{default:()=>{var A;return[((A=t.text)==null?void 0:A.call(t))??e.text]}}),(I=t.default)==null?void 0:I.call(t),t.actions&&n(fe,null,{default:t.actions}),ke(m.value,"v-card")]}}),[[ye("ripple"),m.value&&e.ripple]])}),{}}});export{Te as V,_e as _,Ie as a,Pe as b,Ve as c,fe as d};
