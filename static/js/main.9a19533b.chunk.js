(this["webpackJsonpe-invoice"]=this["webpackJsonpe-invoice"]||[]).push([[0],{20:function(e,t,s){"use strict";(function(e){s.d(t,"a",(function(){return r}));s(37);var c=s(21),l=s(24),n=s(22),i=s.n(n),a=s(1);function r(t){function s(t,s){var c=[e.from([t],"utf8"),e.from([s.length],"utf8"),e.from(s,"utf8")];return e.concat(c)}return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{class:"container d-flex justify-content-center mt-50 mb-50",children:Object(a.jsxs)("div",{class:"row",children:[Object(a.jsx)("div",{class:"col-md-12 text-right mb-3",children:Object(a.jsx)("button",{class:"btn btn-primary",id:"download",onClick:function(){l.a(document.getElementById("invoice"),{quality:.95}).then((function(e){document.createElement("a").download="my-image-name.jpeg";var t=new c.a,s=t.getImageProperties(e),l=t.internal.pageSize.getWidth(),n=s.height*l/s.width;t.addImage(e,"PNG",0,0,l,n),t.save("download.pdf")}))},children:" download pdf"})}),Object(a.jsx)("div",{class:"col-md-12",children:Object(a.jsxs)("div",{class:"card",id:"invoice",children:[Object(a.jsx)("div",{class:"card-header bg-transparent header-elements-inline",children:Object(a.jsxs)("div",{class:"invoie-type",children:[Object(a.jsx)("p",{children:"\u0641\u0627\u062a\u0648\u0631\u0629 \u0636\u0631\u064a\u0628\u064a\u0629 \u0645\u0628\u0633\u0637\u0629"}),Object(a.jsx)("p",{children:"Simplified Tax Invoice"})]})}),Object(a.jsx)("div",{class:"card-body",children:Object(a.jsxs)("div",{class:"row info-row",children:[Object(a.jsx)("div",{class:"",children:Object(a.jsxs)("ul",{class:"list list-unstyled mb-0",children:[Object(a.jsx)("b",{class:"text-primary",children:"\u0627\u0633\u0645 \u0627\u0644\u0645\u062d\u0644"}),Object(a.jsx)("li",{children:"\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u062d\u0644"}),Object(a.jsx)("li",{children:"\u062c\u062f\u0629"}),Object(a.jsx)("li",{children:"0546491279 "})]})}),Object(a.jsxs)("div",{className:" barcode-tag",children:[" ",Object(a.jsx)(i.a,{value:function(t){var c=s("1","khalid Salem Alnahdi"),l=s("2","100025906700003"),n=s("3",(new Date).toLocaleString("en-US",{timeZone:"Asia/Riyadh"}));console.log();var i=[c,l,n,s("4",t.amount),s("5",t.vat)];return e.concat(i).toString("base64")}({amount:t.total.toString(),vat:(.15*t.total).toString()}),size:110})]}),Object(a.jsxs)("div",{class:"",children:[Object(a.jsx)("h6",{class:"invoice-color mb-2 ",children:"Invoice #BBB1243"}),Object(a.jsxs)("p",{children:["\u0627\u0644\u062a\u0627\u0631\u064a\u062e: ",Object(a.jsx)("span",{class:"font-weight-semibold",children:(new Date).toISOString().slice(0,10)})]})]})]})}),Object(a.jsx)("div",{class:"table-responsive",children:Object(a.jsxs)("table",{class:"table table-lg main-table",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"\u0627\u0644\u0648\u0635\u0641"}),Object(a.jsx)("th",{children:"\u0627\u0644\u0639\u064a\u0627\u0631"}),Object(a.jsx)("th",{children:"\u0627\u0644\u0648\u0632\u0646"}),Object(a.jsx)("th",{children:"\u0627\u0644\u0643\u0645\u064a\u0629"}),Object(a.jsx)("th",{children:"\u0627\u0644\u0633\u0639\u0631"})]})}),Object(a.jsx)("tbody",{children:t.data.map((function(e){return t=e,Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)("h6",{class:"mb-0",children:t.describtion})}),Object(a.jsx)("td",{children:t.type}),Object(a.jsxs)("td",{children:[t.weight,"g"]}),Object(a.jsx)("td",{children:t.qt}),Object(a.jsx)("td",{children:Object(a.jsxs)("span",{class:"font-weight-semibold",children:[t.price*t.qt," \u0631.\u0633"]})})]});var t}))})]})}),Object(a.jsx)("div",{class:"card-body",children:Object(a.jsx)("div",{class:"total-barcode",children:Object(a.jsxs)("div",{class:"total-tableTitle pt-2 mb-3 wmin-md-400 ml-auto",children:[Object(a.jsx)("h6",{class:"mb-3 text-right",style:{"margin-right":"2em"},children:"\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a"}),Object(a.jsx)("div",{class:"table-responsive",children:Object(a.jsx)("table",{class:"table checkout-table",children:Object(a.jsxs)("tbody",{className:"total_table",children:[Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{class:"text-left",children:[t.total.toLocaleString()," \u0631.\u0633"]}),Object(a.jsxs)("th",{class:"text-right total",style:{direction:"rtl"},children:["\u0627\u0644\u0645\u062c\u0645\u0648\u0639 ",Object(a.jsx)("span",{class:"text-muted without-tax",children:"(\u063a\u064a\u0631 \u0634\u0627\u0645\u0644 \u0636\u0631\u064a\u0628\u0629 \u0627\u0644\u0642\u064a\u0645\u0629 \u0627\u0644\u0645\u0636\u0627\u0641\u0629):"})]})]}),Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{class:"text-left",children:[(.15*t.total).toLocaleString()," \u0631.\u0633"]}),Object(a.jsxs)("th",{class:"text-right",style:{direction:"rtl"},children:["\u0636\u0631\u064a\u0628\u0629 \u0627\u0644\u0642\u064a\u0645\u0629 \u0627\u0644\u0645\u0636\u0627\u0641\u0629 ",Object(a.jsx)("span",{class:"font-weight-normal",children:"(15%):"})]})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{class:"text-left text-primary",children:Object(a.jsxs)("h6",{class:"font-weight-semibold total-include-tax",children:[(t.total+.15*t.total).toLocaleString()," \u0631.\u0633"]})}),Object(a.jsx)("th",{class:"text-right",children:":\u0627\u0644\u0645\u062c\u0645\u0648\u0639"})]})]})})})]})})})]})})]})})})}}).call(this,s(33).Buffer)},29:function(e,t,s){},30:function(e,t,s){},31:function(e,t,s){},37:function(e,t,s){},49:function(e,t,s){"use strict";s.r(t);var c=s(4),l=s.n(c),n=s(18),i=s.n(n),a=(s(29),s(30),s(5)),r=(s(31),s(8)),d=s.n(r),j=s(19),o=s.n(j),b=s(20),h=s(23),x=s(11),m=s(1);function u(){var e=Object(c.useState)(),t=Object(a.a)(e,2),s=t[0],l=t[1],n=Object(c.useState)(!1),i=Object(a.a)(n,2),r=i[0],j=i[1];return d()(document).ready((function(){d()("#myTable").on("click",".delete-rowBtn",(function(){d()(this).closest("tr").remove()}))})),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"input-form",children:[Object(m.jsxs)("table",{class:"table table-sm",id:"myTable",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{class:"teable-cols desc-col",children:"\u0627\u0644\u0648\u0635\u0641"}),Object(m.jsx)("th",{class:"teable-cols",children:"\u0627\u0644\u0639\u064a\u0627\u0631"}),Object(m.jsx)("th",{class:"teable-cols",children:"\u0627\u0644\u0648\u0632\u0646"}),Object(m.jsx)("th",{class:"teable-cols",children:"\u0627\u0644\u0643\u0645\u064a\u0629"}),Object(m.jsx)("th",{class:"teable-cols",children:"\u0627\u0644\u0633\u0639\u0631"})]})}),Object(m.jsx)("tbody",{class:"tableBody",children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{class:"tableBody-cells",children:Object(m.jsxs)("h6",{class:"font-weight-semibold",children:[" ",Object(m.jsx)("input",{class:"input-desc desc-input",type:"text",id:"orderDesc",dir:"rtl",placeholder:"\u0627\u062f\u062e\u0644 \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u0646\u062a\u062c"})," "]})}),Object(m.jsx)("td",{class:"tableBody-cells",children:Object(m.jsxs)("select",{class:"form-control form-control-sm select-input",id:"selectType",children:[Object(m.jsx)("option",{children:"18 \u0642\u064a\u0631\u0627\u0637"}),Object(m.jsx)("option",{children:"21 \u0642\u064a\u0631\u0627\u0637"}),Object(m.jsx)("option",{children:"12 \u0642\u064a\u0631\u0627\u0637"})]})}),Object(m.jsx)("td",{class:"tableBody-cells wight-cell",children:Object(m.jsx)("input",{class:"imput-num wight-input"})}),Object(m.jsx)("td",{class:"tableBody-cells qt-cell",children:Object(m.jsx)("input",{class:"imput-num qt-input",type:"number"})}),Object(m.jsxs)("td",{class:"tableBody-cells",children:[" ",Object(m.jsx)("input",{class:"imput-num price-input"})]}),Object(m.jsxs)("td",{children:[" ",Object(m.jsx)(x.a,{size:23,class:"delete-rowBtn"})," "]})]})})]}),Object(m.jsx)(h.a,{className:"insert-new-itemBtn",size:19,onClick:function(){var e=document.getElementById("myTable");console.log(e);var t=e.insertRow(e.rows.length),s=t.insertCell(0),c=t.insertCell(1),l=t.insertCell(2),n=t.insertCell(3),i=t.insertCell(4),a=t.insertCell(5);s.innerHTML='<h6 class="font-weight-semibold"> <input class="input-desc desc-input" type="text" id="orderDesc" dir="rtl" placeholder="\u0627\u062f\u062e\u0644 \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u0646\u062a\u062c"/> </h6> ',s.className="tableBody-cells",c.innerHTML='\n            <select class="form-control form-control-sm select-input" id="selectType">\n                <option class="option-type">18 \u0642\u064a\u0631\u0627\u0637</option>\n                <option> 21 \u0642\u064a\u0631\u0627\u0637</option>\n                <option>12 \u0642\u064a\u0631\u0627\u0637</option>\n            </select>\n        ',l.innerHTML='<input class="imput-num wight-input"/>',n.innerHTML='<td class="tableBody-cells qt-cell"><input class="imput-num qt-input" type="number" /></td>',i.innerHTML='<span class="font-weight-semibold"><input class="imput-num price-input"/></span>',a.innerHTML=o.a.renderToString(Object(m.jsx)(x.a,{size:23,class:"delete-rowBtn"}))}})]}),Object(m.jsxs)("div",{className:"form-submit",children:[" ",Object(m.jsx)("input",{class:"btn btn-primary form-submitBtb",type:"submit",value:"\u0625\u0635\u062f\u0627\u0631",onClick:function(){for(var e=document.getElementById("myTable"),t=[],s=0,c=document.getElementsByClassName("desc-input"),n=document.getElementsByClassName("select-input"),i=document.getElementsByClassName("wight-input"),a=document.getElementsByClassName("qt-input"),r=document.getElementsByClassName("price-input"),d=0;d<e.rows.length-1;d++)t[d]={describtion:c[d].value,type:n[d].value,weight:i[d].value,qt:a[d].value,price:parseFloat(r[d].value)},s+=t[d].price;t.total=s,l(t),j(!0)}})," "]}),r?Object(m.jsx)(b.a,{data:s,total:s.total}):""]})}var O=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(u,{})})};i.a.render(Object(m.jsx)(l.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root"))}},[[49,1,3]]]);
//# sourceMappingURL=main.9a19533b.chunk.js.map