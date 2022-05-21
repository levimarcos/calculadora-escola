(function(){"use strict";var a={8849:function(a,i,o){var r=o(9963),e=o(6252);const l={id:"alo"};function s(a,i,o,r,s,t){const u=(0,e.up)("Calculadora"),d=(0,e.up)("Documentacao");return(0,e.wg)(),(0,e.iD)("div",l,[(0,e.Wm)(u),(0,e.Wm)(d)])}o(6699);var t=o(3577);const u=a=>((0,e.dD)("data-v-15287d6a"),a=a(),(0,e.Cn)(),a),d={id:"main",class:"p-3",style:{"max-width":"500px",margin:"100px 20px 100px 200px",background:"#000"}},n={class:"w-full m-1 p-3 text-end lead rounded font-weight-bold text-white bg-vue-dark"},c=u((()=>(0,e._)("br",null,null,-1))),h={class:"row no-gutters"},p=["onClick"];function v(a,i,o,r,l,s){return(0,e.wg)(),(0,e.iD)("div",d,[(0,e._)("div",n,[(0,e.Uk)((0,t.zw)(l.primeiroValorVisual)+" "+(0,t.zw)(l.operadorVisual)+" "+(0,t.zw)(l.segundoValorVisual)+" ",1),c,(0,e.Uk)(" "+(0,t.zw)(l.valorCalculadoraVisual||l.erroEntrada||0),1)]),(0,e._)("div",h,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(l.elementosCalculadora,(a=>((0,e.wg)(),(0,e.iD)("div",{class:"col-3",key:a},[(0,e._)("div",{class:(0,t.C_)(["lead text-white text-center m-1 py-3 bg-vue-dark rounded hover-class",{"bg-vue-red":["C"].includes(a),"bg-vue-green":["="].includes(a),"bg-vue-brown":["*","+","-","/","±"].includes(a),"bg-vue-blue":["%","√"].includes(a)}]),onClick:i=>s.action(a)},(0,t.zw)(a),11,p)])))),128))])])}var V={name:"Calculadora",props:{msg:String},data(){return{valorCalculadoraVisual:"",primeiroValorVisual:"",segundoValorVisual:"",primeiroValorRequisicao:"",segundoValorRequisicao:"",elementosCalculadora:["C","%","√","±",7,8,9,"+",4,5,6,"-",1,2,3,"*",0,".","=","/"],operadorRequisicao:null,operadorVisual:null,respostaIgual:"",respostaOperador:"",FlagApertarIgualSemDigitarOValor:!1,FlagDepoisDeUmaOperacao:!1,"FlagLimparDadosApósRetornoalor":!1,erroEntrada:""}},methods:{async action(a){if(isNaN(a)&&"."!==a||(!0===this.FlagDepoisDeUmaOperacao?(this.valorCalculadoraVisual="",this.segundoValorRequisicao="",this.FlagDepoisDeUmaOperacao=!1):!0===this.FlagLimparDadosApósRetornoalor&&(this.limpaDados(),this.FlagLimparDadosApósRetornoalor=!1),""===this.primeiroValorVisual?(this.valorCalculadoraVisual+=a+"",this.primeiroValorRequisicao+=a+""):(this.valorCalculadoraVisual+=a+"",this.segundoValorRequisicao+=a+"")),["+","-","/","*","√","%"].includes(a))if(""!=this.erroEntrada&&(this.erroEntrada=""),""!=this.respostaIgual)this.atualizaOperador(a,a),this.atualizaPrimeiroValorRequisicao(this.valorCalculadoraVisual,this.valorCalculadoraVisual),this.atualizaSegundoValorRequisicao("",""),this.valorCalculadoraVisual="",this.respostaIgual="",this.FlagLimparDadosApósRetornoalor=!1;else if(null!=this.operadorRequisicao)if(""===this.segundoValorRequisicao)this.atualizaOperador(a,a);else try{this.respostaOperador=await this.chamaApi(this.primeiroValorRequisicao,this.operadorRequisicao,this.segundoValorRequisicao),this.valorCalculadoraVisual=await this.respostaOperador.json(),this.atualizaOperador(a,a),this.atualizaPrimeiroValorRequisicao(this.valorCalculadoraVisual,this.valorCalculadoraVisual),this.FlagApertarIgualSemDigitarOValor=!0,this.FlagDepoisDeUmaOperacao=!0}catch(i){this.erroEntrada="ERRO",console.log(i)}else this.atualizaOperador(a,a),this.primeiroValorVisual=this.primeiroValorRequisicao,this.valorCalculadoraVisual="";if("±"===a&&""!=this.valorCalculadoraVisual&&(this.valorCalculadoraVisual===this.primeiroValorRequisicao?(this.valorCalculadoraVisual=-1*this.valorCalculadoraVisual,this.primeiroValorRequisicao=-1*this.primeiroValorRequisicao):this.valorCalculadoraVisual===this.segundoValorRequisicao&&(this.valorCalculadoraVisual=-1*this.valorCalculadoraVisual,this.segundoValorRequisicao=-1*this.segundoValorRequisicao)),"C"===a&&this.limpaDados(),"="===a){!0===this.FlagApertarIgualSemDigitarOValor&&(this.segundoValorRequisicao=this.valorCalculadoraVisual,this.FlagApertarIgualSemDigitarOValor=!1),""===this.primeiroValorRequisicao?this.primeiroValorRequisicao=0:""===this.segundoValorRequisicao&&(this.segundoValorRequisicao=0);try{this.respostaIgual=await this.chamaApi(this.primeiroValorRequisicao,this.operadorRequisicao,this.segundoValorRequisicao),this.valorCalculadoraVisual=await this.respostaIgual.json(),this.atualizaPrimeiroValorRequisicao(this.valorCalculadoraVisual,this.primeiroValorRequisicao),this.segundoValorVisual=this.segundoValorRequisicao,this.operadorVisual=this.operadorRequisicao,this.FlagLimparDadosApósRetornoalor=!0}catch(i){this.erroEntrada="ERRO",console.log(i)}}},async chamaApi(a,i,o){const r=await fetch("http://localhost:3080/api",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({primeiroValor:a,operador:i,segundoValor:o})});return r},limpaDados(){this.valorCalculadoraVisual="",this.primeiroValorVisual="",this.segundoValorVisual="",this.primeiroValorRequisicao="",this.segundoValorRequisicao="",this.operadorRequisicao=null,this.operadorVisual=null,this.respostaIgual="",this.respostaOperador="",this.erroEntrada=""},atualizaPrimeiroValorRequisicao(a,i){this.primeiroValorRequisicao=a,this.primeiroValorVisual=i},atualizaSegundoValorRequisicao(a,i){this.segundoValorRequisicao=a,this.segundoValorVisual=i},atualizaOperador(a,i){this.operadorRequisicao=a,this.operadorVisual=i}}},b=o(3744);const g=(0,b.Z)(V,[["render",v],["__scopeId","data-v-15287d6a"]]);var m=g;const R={id:"a",class:"p-3",style:{"max-width":"500px",margin:"20px auto auto 100px"}},f=(0,e.uE)('<h1 style="color:white;" data-v-73eba935>Como usar</h1><br data-v-73eba935><ul data-v-73eba935><li id="limpa" data-v-73eba935><h4 data-v-73eba935>C : Limpar e reiniciar a calculadora.</h4><br data-v-73eba935></li><li id="igual" data-v-73eba935><h4 data-v-73eba935>= : Resultado</h4></li></ul><br data-v-73eba935><h2 data-v-73eba935>Operações básicas</h2><br data-v-73eba935><ul id="operacoesBasicas" data-v-73eba935><li data-v-73eba935><h4 data-v-73eba935>± : Inverter o sinal do número.</h4> - Exemplo: 5 ± --&gt; -5 <br data-v-73eba935><br data-v-73eba935></li><li data-v-73eba935><h4 data-v-73eba935>+ : Adição</h4> - Exemplo: 2 + 2 = 4. <br data-v-73eba935><br data-v-73eba935></li><li data-v-73eba935><h4 data-v-73eba935>- : Subtração</h4> - Exemplo: 4 - 2 = 2. <br data-v-73eba935><br data-v-73eba935></li><li data-v-73eba935><h4 data-v-73eba935>* : Multiplicação</h4> - Exemplo: 2 * 3 = 6. <br data-v-73eba935><br data-v-73eba935></li><li data-v-73eba935><h4 data-v-73eba935>/ : Divisão</h4> - Exemplo: 4 / 2 = 2. <br data-v-73eba935><br data-v-73eba935></li></ul><h2 style="color:#18bad6;" data-v-73eba935>Operações avançadas</h2><ul id="operacoesAvançadas" data-v-73eba935><li data-v-73eba935><h4 data-v-73eba935>% : Porcentagem.</h4> - Exemplo: 10 % de 80 = 8. <br data-v-73eba935><br data-v-73eba935></li><li data-v-73eba935><h4 data-v-73eba935>√ : Raiz.</h4> - Exemplo: 25 √ 2 = 5. Exemplo 2: 64 √ 3 = 4. <br data-v-73eba935><br data-v-73eba935></li></ul>',9),q=[f];function C(a,i,o,r,l,s){return(0,e.wg)(),(0,e.iD)("div",R,q)}var O={name:"Documentacao",props:{msg:String}};const w=(0,b.Z)(O,[["render",C],["__scopeId","data-v-73eba935"]]);var D=w,x={name:"App",components:{Calculadora:m,Documentacao:D}};const y=(0,b.Z)(x,[["render",s]]);var E=y;(0,r.ri)(E).mount("#app")}},i={};function o(r){var e=i[r];if(void 0!==e)return e.exports;var l=i[r]={exports:{}};return a[r](l,l.exports,o),l.exports}o.m=a,function(){var a=[];o.O=function(i,r,e,l){if(!r){var s=1/0;for(n=0;n<a.length;n++){r=a[n][0],e=a[n][1],l=a[n][2];for(var t=!0,u=0;u<r.length;u++)(!1&l||s>=l)&&Object.keys(o.O).every((function(a){return o.O[a](r[u])}))?r.splice(u--,1):(t=!1,l<s&&(s=l));if(t){a.splice(n--,1);var d=e();void 0!==d&&(i=d)}}return i}l=l||0;for(var n=a.length;n>0&&a[n-1][2]>l;n--)a[n]=a[n-1];a[n]=[r,e,l]}}(),function(){o.d=function(a,i){for(var r in i)o.o(i,r)&&!o.o(a,r)&&Object.defineProperty(a,r,{enumerable:!0,get:i[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){o.o=function(a,i){return Object.prototype.hasOwnProperty.call(a,i)}}(),function(){var a={143:0};o.O.j=function(i){return 0===a[i]};var i=function(i,r){var e,l,s=r[0],t=r[1],u=r[2],d=0;if(s.some((function(i){return 0!==a[i]}))){for(e in t)o.o(t,e)&&(o.m[e]=t[e]);if(u)var n=u(o)}for(i&&i(r);d<s.length;d++)l=s[d],o.o(a,l)&&a[l]&&a[l][0](),a[l]=0;return o.O(n)},r=self["webpackChunkvue_calculator_escola"]=self["webpackChunkvue_calculator_escola"]||[];r.forEach(i.bind(null,0)),r.push=i.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(8849)}));r=o.O(r)})();
//# sourceMappingURL=app.9b6a7be5.js.map