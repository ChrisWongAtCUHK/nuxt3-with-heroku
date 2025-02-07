import{_ as h}from"./CW5Knlg5.js";import{S as i,d as _,a as b}from"./gk5See73.js";import{_ as x,c as l,a as e,b as a,w as d,F as p,p as w,o as u,d as c,t as C}from"./420qfjFl.js";const B={data(){return{quotes:[]}},created(){this.fetchQuoteList()},methods:{fetchQuoteList(){b().then(o=>(this.quotes=o.data,o)).catch(o=>o)},handleDelete(o){i.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(t=>{t.isConfirmed&&_(o).then(n=>(i.fire({icon:"success",title:"Quote deleted successfully!",showConfirmButton:!1,timer:1500}),this.fetchQuoteList(),n)).catch(n=>(i.fire({icon:"error",title:"An Error Occured!",showConfirmButton:!1,timer:1500}),n))})}}},Q={class:"container"},y={class:"card"},k={class:"card-header"},v={class:"card-body"},N={class:"table table-bordered"},g=["onClick"];function L(o,t,n,$,f,m){const r=h;return u(),l("div",Q,[t[4]||(t[4]=e("h2",{class:"text-center mt-5 mb-3"},"Quotes",-1)),e("div",y,[e("div",k,[a(r,{to:"/create",class:"btn btn-outline-primary"},{default:d(()=>t[0]||(t[0]=[c("Create New Quote ")])),_:1})]),e("div",v,[e("table",N,[t[3]||(t[3]=e("thead",null,[e("tr",null,[e("th",null,"Quote")])],-1)),e("tbody",null,[(u(!0),l(p,null,w(f.quotes,s=>(u(),l("tr",{key:s.id},[e("td",null,C(s.quote),1),e("td",null,[a(r,{to:`/show/${s.id}`,class:"btn btn-outline-info mx-1"},{default:d(()=>t[1]||(t[1]=[c("Show")])),_:2},1032,["to"]),a(r,{to:`/edit/${s.id}`,class:"btn btn-outline-success mx-1"},{default:d(()=>t[2]||(t[2]=[c("Edit")])),_:2},1032,["to"]),e("button",{onClick:D=>m.handleDelete(s.id),className:"btn btn-outline-danger mx-1"}," Delete ",8,g)])]))),128))])])])])])}const A=x(B,[["render",L]]);export{A as default};
