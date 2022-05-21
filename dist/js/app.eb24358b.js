(function(){"use strict";var a={3616:function(a,i,o){var r=o(9963),s=o(6252);function l(a,i,o,r,l,e){const t=(0,s.up)("Calculadora");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(t)])}o(6699);var e=o(3577);const t=a=>((0,s.dD)("data-v-c708cf3c"),a=a(),(0,s.Cn)(),a),u={id:"main",class:"p-3",style:{"max-width":"500px",margin:"100px auto",background:"#000"}},n={class:"w-full m-1 p-3 text-end lead rounded font-weight-bold text-white bg-vue-dark"},c=t((()=>(0,s._)("br",null,null,-1))),d={class:"row no-gutters"},h=["onClick"];function p(a,i,o,r,l,t){return(0,s.wg)(),(0,s.iD)("div",u,[(0,s._)("div",n,[(0,s.Uk)((0,e.zw)(l.primeiroValorVisual)+" "+(0,e.zw)(l.operadorVisual)+" "+(0,e.zw)(l.segundoValorVisual)+" ",1),c,(0,s.Uk)(" "+(0,e.zw)(l.valorCalculadoraVisual||l.erroEntrada||0),1)]),(0,s._)("div",d,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.elementosCalculadora,(a=>((0,s.wg)(),(0,s.iD)("div",{class:"col-3",key:a},[(0,s._)("div",{class:(0,e.C_)(["lead text-white text-center m-1 py-3 bg-vue-dark rounded hover-class",{"bg-vue-red":["C"].includes(a),"bg-vue-green":["="].includes(a),"bg-vue-blue":["*","+","-","/"].includes(a),"bg-vue-yellow":["%","√","±"].includes(a)}]),onClick:i=>t.action(a)},(0,e.zw)(a),11,h)])))),128))])])}var V={name:"Calculadora",props:{msg:String},data(){return{valorCalculadoraVisual:"",primeiroValorVisual:"",segundoValorVisual:"",primeiroValorRequisicao:"",segundoValorRequisicao:"",elementosCalculadora:["C","±","%","√",7,8,9,"+",4,5,6,"-",1,2,3,"*",0,".","=","/"],operadorRequisicao:null,operadorVisual:null,respostaIgual:"",respostaOperador:"",FlagApertarIgualSemDigitarOValor:!1,FlagDepoisDeUmaOperacao:!1,"FlagLimparDadosApósRetornoalor":!1,erroEntrada:""}},methods:{async action(a){if(isNaN(a)&&"."!==a||(!0===this.FlagDepoisDeUmaOperacao?(this.valorCalculadoraVisual="",this.segundoValorRequisicao="",this.FlagDepoisDeUmaOperacao=!1):!0===this.FlagLimparDadosApósRetornoalor&&(this.limpaDados(),this.FlagLimparDadosApósRetornoalor=!1),""===this.primeiroValorVisual?(this.valorCalculadoraVisual+=a+"",this.primeiroValorRequisicao+=a+""):(this.valorCalculadoraVisual+=a+"",this.segundoValorRequisicao+=a+"")),["+","-","/","*","√","%"].includes(a))if(""!=this.erroEntrada&&(this.erroEntrada=""),""!=this.respostaIgual)this.atualizaOperador(a,a),this.atualizaPrimeiroValorRequisicao(this.valorCalculadoraVisual,this.valorCalculadoraVisual),this.atualizaSegundoValorRequisicao("",""),this.valorCalculadoraVisual="",this.respostaIgual="",this.FlagLimparDadosApósRetornoalor=!1;else if(null!=this.operadorRequisicao)try{this.respostaOperador=await this.chamaApi(this.primeiroValorRequisicao,this.operadorRequisicao,this.segundoValorRequisicao),this.valorCalculadoraVisual=await this.respostaOperador.json(),this.atualizaOperador(a,a),this.atualizaPrimeiroValorRequisicao(this.valorCalculadoraVisual,this.valorCalculadoraVisual),this.FlagApertarIgualSemDigitarOValor=!0,this.FlagDepoisDeUmaOperacao=!0}catch(i){this.erroEntrada="ERRO",console.log(i)}else this.atualizaOperador(a,a),this.primeiroValorVisual=this.primeiroValorRequisicao,this.valorCalculadoraVisual="";if("±"===a&&""!=this.valorCalculadoraVisual&&(this.valorCalculadoraVisual===this.primeiroValorRequisicao?(this.valorCalculadoraVisual=-1*this.valorCalculadoraVisual,this.primeiroValorRequisicao=-1*this.primeiroValorRequisicao):this.valorCalculadoraVisual===this.segundoValorRequisicao&&(this.valorCalculadoraVisual=-1*this.valorCalculadoraVisual,this.segundoValorRequisicao=-1*this.segundoValorRequisicao)),"C"===a&&this.limpaDados(),"="===a){!0===this.FlagApertarIgualSemDigitarOValor&&(this.segundoValorRequisicao=this.valorCalculadoraVisual,this.FlagApertarIgualSemDigitarOValor=!1),""===this.primeiroValorRequisicao?this.primeiroValorRequisicao=0:""===this.segundoValorRequisicao&&(this.segundoValorRequisicao=0);try{this.respostaIgual=await this.chamaApi(this.primeiroValorRequisicao,this.operadorRequisicao,this.segundoValorRequisicao),this.valorCalculadoraVisual=await this.respostaIgual.json(),this.atualizaPrimeiroValorRequisicao(this.valorCalculadoraVisual,this.primeiroValorRequisicao),this.segundoValorVisual=this.segundoValorRequisicao,this.operadorVisual=this.operadorRequisicao,this.FlagLimparDadosApósRetornoalor=!0}catch(i){this.erroEntrada="ERRO",console.log(i)}}},async chamaApi(a,i,o){const r=await fetch("http://localhost:3080/api",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({primeiroValor:a,operador:i,segundoValor:o})});return r},limpaDados(){this.valorCalculadoraVisual="",this.primeiroValorVisual="",this.segundoValorVisual="",this.primeiroValorRequisicao="",this.segundoValorRequisicao="",this.operadorRequisicao=null,this.operadorVisual=null,this.respostaIgual="",this.respostaOperador="",this.erroEntrada=""},atualizaPrimeiroValorRequisicao(a,i){this.primeiroValorRequisicao=a,this.primeiroValorVisual=i},atualizaSegundoValorRequisicao(a,i){this.segundoValorRequisicao=a,this.segundoValorVisual=i},atualizaOperador(a,i){this.operadorRequisicao=a,this.operadorVisual=i}}},g=o(3744);const v=(0,g.Z)(V,[["render",p],["__scopeId","data-v-c708cf3c"]]);var m=v,R={name:"App",components:{Calculadora:m}};const f=(0,g.Z)(R,[["render",l]]);var q=f;(0,r.ri)(q).mount("#app")}},i={};function o(r){var s=i[r];if(void 0!==s)return s.exports;var l=i[r]={exports:{}};return a[r](l,l.exports,o),l.exports}o.m=a,function(){var a=[];o.O=function(i,r,s,l){if(!r){var e=1/0;for(c=0;c<a.length;c++){r=a[c][0],s=a[c][1],l=a[c][2];for(var t=!0,u=0;u<r.length;u++)(!1&l||e>=l)&&Object.keys(o.O).every((function(a){return o.O[a](r[u])}))?r.splice(u--,1):(t=!1,l<e&&(e=l));if(t){a.splice(c--,1);var n=s();void 0!==n&&(i=n)}}return i}l=l||0;for(var c=a.length;c>0&&a[c-1][2]>l;c--)a[c]=a[c-1];a[c]=[r,s,l]}}(),function(){o.d=function(a,i){for(var r in i)o.o(i,r)&&!o.o(a,r)&&Object.defineProperty(a,r,{enumerable:!0,get:i[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){o.o=function(a,i){return Object.prototype.hasOwnProperty.call(a,i)}}(),function(){var a={143:0};o.O.j=function(i){return 0===a[i]};var i=function(i,r){var s,l,e=r[0],t=r[1],u=r[2],n=0;if(e.some((function(i){return 0!==a[i]}))){for(s in t)o.o(t,s)&&(o.m[s]=t[s]);if(u)var c=u(o)}for(i&&i(r);n<e.length;n++)l=e[n],o.o(a,l)&&a[l]&&a[l][0](),a[l]=0;return o.O(c)},r=self["webpackChunkvue_calculator_escola"]=self["webpackChunkvue_calculator_escola"]||[];r.forEach(i.bind(null,0)),r.push=i.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(3616)}));r=o.O(r)})();
//# sourceMappingURL=app.eb24358b.js.map