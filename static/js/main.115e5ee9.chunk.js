(this["webpackJsonpe-invoice"]=this["webpackJsonpe-invoice"]||[]).push([[0],{24:function(e,t,c){"use strict";(function(e){c.d(t,"a",(function(){return u}));var s=c(3),n=c.n(s),r=c(25),a=c(5),i=(c(50),c(33)),l=c(26),o=c(27),d=c.n(o),m=c(1),j=c(32),b=c(2);function u(t){var c=t.data,s=t.total,o=t.sellerInfo,u=Object(m.useState)(""),h=Object(a.a)(u,2),x=h[0],p=h[1],O=Object(m.useState)(!1),v=Object(a.a)(O,2),N=v[0],f=v[1],y=o.sellerName,_=o.VATnumber;function g(t,c){var s=[e.from([t],"utf8"),e.from([c.length],"utf8"),e.from(c,"utf8")];return e.concat(s)}function w(e,t,c,s){if(s)return e.setProperty("--s1vw_4em","min(1vw, 4em)"),e.setProperty("--s1_3vw_0_8em","min(1.3vw, .8em)"),e.setProperty("--s2_2vw_1em","min(2vw, 1em)"),e.setProperty("--s2vw_1_1em","min(2vw, 1.1em)"),e.setProperty("--s2_2vw_1_em","min(2.2vw, 1em)"),e.setProperty("--s2_2vw_1_1em","min(2.2vw, 1.1em)"),e.setProperty("--s2vw_0_9em","min(2vw, .9em)"),e.setProperty("--s2_5vw_1_1em","min(2.5vw, 1.1em)"),e.setProperty("--s2_4vw_1_2em","min(2.4vw, 1.2em)"),t.style="min(80vw, 55em);",void(c.style="width: 90vw;");e.setProperty("--s1vw_4em","4em"),e.setProperty("--s1_3vw_0_8em","0.8em"),e.setProperty("--s2_2vw_1em","1em"),e.setProperty("--s2vw_1_1em","1.1em"),e.setProperty("--s2_2vw_1_em","1em"),e.setProperty("--s2_2vw_1_1em","1.1em"),e.setProperty("--s2vw_0_9em","0.9em"),e.setProperty("--s2_5vw_1_1em","1.1em"),e.setProperty("--s2_4vw_1_2em","1.2em"),t.style="width: 55em;",c.style="width: 100%;"}function S(){return(S=Object(r.a)(n.a.mark((function e(){var t,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementsByClassName("row")[0],c=document.getElementById("invoice"),w(s=document.documentElement.style,t,c,!1),e.next=6,i.a(c,{quality:.95}).then((function(e){var t=new l.a("p","mm","a4"),c=t.getImageProperties(e),s=210*c.height/c.width,n=s,r=0;for(t.addImage(e,"PNG",0,r,210,s,"","MEDIUM"),n-=295;n>=0;)r=n-s,t.addPage(),t.addImage(e,"PNG",0,r,210,s,"","MEDIUM"),n-=295;t.save(x+".pdf")})).then((function(){w(s,t,c,!0)})).catch((function(e){return w(s,t,c,!0),console.error(e),e}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(m.useEffect)((function(){p(("#B"+Math.floor(1e5+9e5*Math.random())).toString())}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"container d-flex justify-content-center mt-50 mb-50",children:[N?Object(b.jsxs)("div",{className:"blurBG",children:[Object(b.jsx)("div",{className:"loader",children:Object(b.jsx)(j.a,{color:"#00BFFF",height:80,width:80})}),Object(b.jsx)("b",{className:"loader_text",children:"... \u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644"})]}):"",Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-md-12 text-right mb-3",children:[Object(b.jsx)("button",{className:"btn btn-primary",id:"download",onClick:function(){f(!0),setTimeout((function(){(function(){return S.apply(this,arguments)})().then((function(){f(!1)}))}),500)},children:"pdf \u062a\u062d\u0645\u064a\u0644"}),Object(b.jsx)("button",{className:"btn btn-primary",id:"print",onClick:function(){window.print()},children:"\u0637\u0628\u0627\u0639\u0629"})]}),Object(b.jsxs)("div",{className:"card",id:"invoice",children:[Object(b.jsxs)("div",{className:"card-header",children:[Object(b.jsx)("p",{children:"\u0641\u0627\u062a\u0648\u0631\u0629 \u0636\u0631\u064a\u0628\u064a\u0629 \u0645\u0628\u0633\u0637\u0629"}),Object(b.jsx)("p",{children:"Simplified Tax Invoice"})]}),Object(b.jsxs)("div",{className:"info-row",children:[Object(b.jsx)("div",{className:"store_info_invoice invoice_info",children:Object(b.jsxs)("ul",{className:"list-unstyled",children:[Object(b.jsx)("b",{className:"text-primary",children:o.storeName?o.storeName:"\u0627\u0633\u0645 \u0627\u0644\u0645\u062d\u0644"}),Object(b.jsx)("li",{children:o.storeAddress?o.storeAddress:"\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u062d\u0644"},"1"),Object(b.jsx)("li",{children:o.storeCity?o.storeCity:"\u0627\u0644\u0645\u062f\u064a\u0646\u0629"},"2"),Object(b.jsx)("li",{children:o.storePhone?o.storePhone:"\u0647\u0627\u062a\u0641 \u0627\u0644\u0645\u062d\u0644"},"3")]})}),Object(b.jsxs)("div",{id:"qr_code",className:"barcode-tag invoice_info",children:[" ",Object(b.jsx)(d.a,{value:function(t){var c=g("1",y),s=g("2",_),n=g("3",(new Date).toLocaleString("en-US",{timeZone:"Asia/Riyadh"}));console.log();var r=[c,s,n,g("4",t.amount),g("5",t.vat)];return e.concat(r).toString("base64")}({amount:s.toString(),vat:(.15*s).toString()}),size:parseInt(document.documentElement.clientWidth/6)<100?parseInt(document.documentElement.clientWidth/6):100})]}),Object(b.jsxs)("div",{className:"invoice_date_number invoice_info",children:[Object(b.jsxs)("h6",{className:"invoice-color",children:["Invoice ",x]}),Object(b.jsxs)("p",{children:["\u0627\u0644\u062a\u0627\u0631\u064a\u062e: ",Object(b.jsx)("span",{className:"font-weight-semibold invoice_text",children:(new Date).toISOString().slice(0,10)})]})]})]}),Object(b.jsx)("div",{className:"table-responsive",children:Object(b.jsxs)("table",{className:"table print_table",children:[Object(b.jsx)("thead",{className:"print_table_head",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{className:"desc_section",children:"\u0627\u0644\u0648\u0635\u0641"}),Object(b.jsx)("th",{style:{textAlign:"center"},children:"\u0627\u0644\u0643\u0645\u064a\u0629"}),Object(b.jsx)("th",{style:{textAlign:"center"},children:"\u0627\u0644\u0633\u0639\u0631"})]})}),Object(b.jsx)("tbody",{className:"print_table_body",children:c.map((function(e,t){return function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("h6",{className:"desc_section",children:e.describtion})}),Object(b.jsx)("td",{style:{textAlign:"center"},children:e.qt}),Object(b.jsx)("td",{style:{textAlign:"center"},children:Object(b.jsxs)("span",{className:"font-weight-semibold",children:[e.price," \u0631.\u0633"]})})]},t)}(e,t)}))})]})}),Object(b.jsxs)("div",{className:"total_body",children:[Object(b.jsx)("div",{className:"total-title",children:Object(b.jsx)("h6",{className:"total-tableTitle",children:"\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a"})}),Object(b.jsx)("div",{className:"checkout-table table",children:Object(b.jsx)("table",{className:"total_table",children:Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsxs)("th",{className:"text-right total",children:["\u0627\u0644\u0645\u062c\u0645\u0648\u0639 ",Object(b.jsx)("span",{className:"text-muted",children:"(\u063a\u064a\u0631 \u0634\u0627\u0645\u0644 \u0627\u0644\u0642\u064a\u0645\u0629 \u0627\u0644\u0645\u0636\u0627\u0641\u0629):"})]}),Object(b.jsxs)("td",{className:"text-left",children:[s.toLocaleString()," \u0631.\u0633"]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsxs)("th",{className:"text-right",children:["\u0636\u0631\u064a\u0628\u0629 \u0627\u0644\u0642\u064a\u0645\u0629 \u0627\u0644\u0645\u0636\u0627\u0641\u0629 ",Object(b.jsx)("span",{className:"text-muted",children:"(15%):"})]}),Object(b.jsxs)("td",{className:"text-left",children:[(.15*s).toLocaleString()," \u0631.\u0633"]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{className:"text-right",children:"\u0627\u0644\u0645\u062c\u0645\u0648\u0639:"}),Object(b.jsxs)("td",{className:"text-primary text-left",children:[(s+.15*s).toLocaleString()," \u0631.\u0633"]})]})]})})})]})]})]})]})})}}).call(this,c(45).Buffer)},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},43:function(e,t,c){},50:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),r=c(23),a=c.n(r),i=(c(39),c(5)),l=(c(40),c(41),c(2));function o(e){var t=e.validation,c=e.sellerInfo,n=Object(s.useState)(!1),r=Object(i.a)(n,2),a=r[0],o=r[1],d=Object(s.useState)(!1),m=Object(i.a)(d,2),j=m[0],b=m[1],u=Object(s.useState)(""),h=Object(i.a)(u,2),x=h[0],p=h[1],O=Object(s.useState)(""),v=Object(i.a)(O,2),N=v[0],f=v[1],y=Object(s.useState)(""),_=Object(i.a)(y,2),g=_[0],w=_[1],S=Object(s.useState)(""),E=Object(i.a)(S,2),I=E[0],P=E[1],F=Object(s.useState)(""),L=Object(i.a)(F,2),q=L[0],B=L[1],T=Object(s.useState)(),C=Object(i.a)(T,2),A=C[0],M=C[1];function k(e,t){var c=e.parentElement,s=c.querySelector(".error"),n=c.querySelector(".placeholder");s.innerText=t,n.classList.add("fail"),n.classList.remove("success")}function U(e){var t=e.parentElement,c=t.querySelector(".error"),s=t.querySelector(".placeholder");c.innerText="",s.classList.add("success"),s.classList.remove("fail")}Object(s.useEffect)((function(){a&&j?(c({sellerName:x,VATnumber:N,storeName:g,storeCity:I,storeAddress:q,storePhone:A}),t(!0)):t(!1)}),[g,I,q,A,x,N,a,j]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"title",children:"\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0636\u0631\u064a\u0628\u064a\u0629"}),Object(l.jsxs)("div",{className:"form",children:[Object(l.jsxs)("div",{className:"input-container ic1",children:[Object(l.jsx)("input",{id:"seller-fullname",className:"input",type:"text",minLength:"0",maxLength:"20",placeholder:" ",onKeyUp:function(){var e=document.getElementById("seller-fullname"),t=new RegExp("^[a-zA-Z ]*$"),c=e.value.trim();return!t.test(c)||""===c||c.length<6?(k(e,"\u0627\u0644\u0627\u0633\u0645 \u064a\u062c\u0628 \u0627\u0646 \u064a\u0643\u0648\u0646 \u0628\u0627\u0644\u0627\u0646\u062c\u0644\u064a\u0632\u064a \u0648\u0628\u062f\u0648\u0646 \u0641\u0648\u0627\u0635\u0644 \u0627\u0648 \u0631\u0645\u0648\u0632"),o(!1)):(U(e),o(!0),p(c))}}),Object(l.jsx)("div",{className:"error"}),Object(l.jsx)("div",{className:"cut cut-short"}),Object(l.jsxs)("label",{htmlFor:"seller-fullname",className:"placeholder",children:["\u0627\u0633\u0645 \u0627\u0644\u0628\u0627\u0626\u0639  ",Object(l.jsx)("b",{style:{color:"red",fontSize:" 15px"},children:"*"})]})]}),Object(l.jsxs)("div",{className:"input-container ic1",children:[Object(l.jsx)("input",{id:"vatnumber",className:"input",type:"text",minLength:"0",maxLength:"15",placeholder:" ",onKeyUp:function(){var e=document.getElementById("vatnumber"),t=new RegExp("^[0-9]+$"),c=e.value.trim();return t.test(c)&&15===c.length?(U(e),b(!0),f(c)):(k(e,"\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0636\u0631\u064a\u0628\u064a \u064a\u062a\u0643\u0648\u0646 \u0645\u0646 15 \u0631\u0642\u0645"),b(!1))}}),Object(l.jsx)("div",{className:"error"}),Object(l.jsx)("div",{className:"cut"}),Object(l.jsxs)("label",{htmlFor:"vatnumber",className:"placeholder",children:["\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0636\u0631\u064a\u0628\u064a ",Object(l.jsx)("b",{style:{color:"red",fontSize:" 15px"},children:"*"})]}),Object(l.jsx)("div",{className:"error"})]})]}),Object(l.jsx)("div",{className:"subtitle",children:"\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0628\u0627\u0626\u0639"}),Object(l.jsxs)("div",{className:"form",children:[Object(l.jsxs)("div",{className:"input-container ic1",children:[Object(l.jsx)("input",{id:"store_name",className:"input",type:"text",placeholder:" ",onKeyUp:function(){var e=document.getElementById("store_name").value.trim();return w(e)}}),Object(l.jsx)("div",{className:"cut cut-short"}),Object(l.jsx)("label",{htmlFor:"store_name",className:"placeholder",children:"\u0627\u0633\u0645 \u0627\u0644\u0645\u062d\u0644"})]}),Object(l.jsxs)("div",{className:"input-container ic1",children:[Object(l.jsx)("input",{id:"store_city",className:"input",type:"text",minLength:"0",maxLength:"15",placeholder:" ",onKeyUp:function(){var e=document.getElementById("store_city").value.trim();if(!(e<2))return P(e)}}),Object(l.jsx)("div",{className:"error"}),Object(l.jsx)("div",{className:"cut cut-very-short"}),Object(l.jsx)("label",{htmlFor:"store_city",className:"placeholder",children:"\u0627\u0644\u0645\u062f\u064a\u0646\u0629"}),Object(l.jsx)("div",{className:"error"})]}),Object(l.jsxs)("div",{className:"input-container ic1",children:[Object(l.jsx)("textarea",{id:"store_address",className:"input",type:"text",placeholder:" ",onKeyUp:function(){var e=document.getElementById("store_address").value.trim();if(!(e<3))return B(e)}}),Object(l.jsx)("div",{className:"error"}),Object(l.jsx)("div",{className:"cut cut-short"}),Object(l.jsx)("label",{htmlFor:"store_address",className:"placeholder",children:"\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u062d\u0644"})]}),Object(l.jsxs)("div",{className:"input-container ic1",children:[Object(l.jsx)("input",{id:"store_phone",className:"input",type:"text",minLength:"0",maxLength:"10",placeholder:" ",onKeyUp:function(){var e=document.getElementById("store_phone").value.trim();if(!(e<6))return M(e)}}),Object(l.jsx)("div",{className:"error"}),Object(l.jsx)("div",{className:"cut cut-short"}),Object(l.jsx)("label",{htmlFor:"store_phone",className:"placeholder",children:"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641"}),Object(l.jsx)("div",{className:"error"})]})]})]})}c(43);var d=c(10),m=c.n(d),j=c(7),b=c.n(j),u=c(24),h=c(31),x=c(15);function p(e){var t=e.sellerInfo,c=Object(s.useState)(),n=Object(i.a)(c,2),r=n[0],a=n[1],o=Object(s.useState)(!1),d=Object(i.a)(o,2),j=d[0],p=d[1];return m()(document).ready((function(){m()("#invoice-input-form").on("click",".delete-btn",(function(){document.getElementById("invoice-input-form").childElementCount>1&&m()(this).closest("#row").remove()}))})),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"title",children:"\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0641\u0627\u062a\u0648\u0631\u0629"}),Object(l.jsx)("div",{id:"invoice-input-form",children:Object(l.jsxs)("div",{id:"row",className:"form-nowrap",children:[Object(l.jsxs)("div",{className:"input-nowrap flx-3 ic1",children:[Object(l.jsx)("textarea",{id:"item-description",className:"input",type:"text",placeholder:" "}),Object(l.jsx)("div",{className:"cut cut-very-short"}),Object(l.jsx)("label",{htmlFor:"item-description",className:"placeholder",children:"\u0627\u0644\u0648\u0635\u0641"})]}),Object(l.jsxs)("div",{className:"input-nowrap flx-1 ic1",children:[Object(l.jsx)("input",{id:"item-quantity",className:"input",type:"text",placeholder:" "}),Object(l.jsx)("div",{className:"cut cut-very-short"}),Object(l.jsx)("label",{htmlFor:"item-quantity",className:"placeholder",children:"\u0627\u0644\u0643\u0645\u064a\u0629"})]}),Object(l.jsxs)("div",{className:"input-nowrap ic1",children:[Object(l.jsx)("input",{id:"item-price",className:"input",type:"text",placeholder:" "}),Object(l.jsx)("div",{className:"cut cut-very-short"}),Object(l.jsx)("label",{htmlFor:"tem-price",className:"placeholder",children:"\u0627\u0644\u0633\u0639\u0631"})]}),Object(l.jsxs)("div",{className:"buttons-control",children:[Object(l.jsx)(x.a,{size:23,className:"delete-btn"}),Object(l.jsx)(h.a,{className:"insert-btn",size:19,onClick:function(){var e=document.getElementById("invoice-input-form"),t=document.createElement("div"),c=document.createElement("div"),s=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div");t.className="form-nowrap",t.id="row",c.className="input-nowrap flx-3 ic1",s.className="input-nowrap flx-1 ic1",n.className="input-nowrap ic1",r.className="buttons-control",c.innerHTML=b.a.renderToString(Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("textarea",{id:"item-description",className:"input",type:"text",placeholder:" "}),Object(l.jsx)("div",{className:"cut cut-very-short"}),Object(l.jsx)("label",{htmlFor:"item-description",className:"placeholder",children:"\u0627\u0644\u0648\u0635\u0641"})]})),s.innerHTML=b.a.renderToString(Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",{id:"item-quantity",className:"input",type:"text",placeholder:" "}),Object(l.jsx)("div",{className:"cut cut-very-short"}),Object(l.jsx)("label",{htmlFor:"item-quantity",className:"placeholder",children:"\u0627\u0644\u0643\u0645\u064a\u0629"})]})),n.innerHTML=b.a.renderToString(Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",{id:"item-price",className:"input",type:"text",placeholder:" "}),Object(l.jsx)("div",{className:"cut cut-very-short"}),Object(l.jsx)("label",{htmlFor:"tem-price",className:"placeholder",children:"\u0627\u0644\u0633\u0639\u0631"})]})),r.innerHTML=b.a.renderToString(Object(l.jsx)(x.a,{size:23,className:"delete-btn"})),t.appendChild(c),t.appendChild(s),t.appendChild(n),t.appendChild(r),e.appendChild(t)}})]})]})}),Object(l.jsxs)("div",{className:"form-submit",children:[" ",Object(l.jsx)("input",{className:"btn btn-primary form-submitBtb",type:"submit",value:"\u0625\u0635\u062f\u0627\u0631",onClick:function(){for(var e=document.getElementById("invoice-input-form").children,t=[],c=0,s="#item-quantity",n="#item-price",r=0;r<e.length;r++)t[r]={describtion:e[r].querySelector("#item-description").value,qt:e[r].querySelector(s).value,price:parseFloat(e[r].querySelector(n).value)},c+=e[r].querySelector(n).value*e[r].querySelector(s).value;t.total=c,a(t),p(!0),window.scrollTo(0,document.body.scrollHeight||document.documentElement.scrollHeight)}})," "]}),j?Object(l.jsx)(u.a,{data:r,total:r.total,sellerInfo:t}):""]})}var O=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(),a=Object(i.a)(r,2),d=a[0],m=a[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{validation:n,sellerInfo:m}),c?Object(l.jsx)(p,{sellerInfo:d}):null]})};a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}},[[63,1,3]]]);
//# sourceMappingURL=main.115e5ee9.chunk.js.map