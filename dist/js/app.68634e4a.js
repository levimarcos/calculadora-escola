(function(){"use strict";var a={8458:function(a,i,o){var r=o(9963),l=o(6252);const s={id:"alo"};function t(a,i,o,r,t,e){const u=(0,l.up)("Calculadora"),d=(0,l.up)("Documentacao");return(0,l.wg)(),(0,l.iD)("div",s,[(0,l.Wm)(u),(0,l.Wm)(d)])}o(6699);var e=o(3577);const u=a=>((0,l.dD)("data-v-5114c782"),a=a(),(0,l.Cn)(),a),d={id:"main",class:"p-3",style:{"max-width":"500px",margin:"100px 20px 100px 200px",background:"#000"}},c={class:"w-full m-1 p-3 text-end lead rounded font-weight-bold text-white bg-vue-dark"},n=u((()=>(0,l._)("br",null,null,-1))),h={class:"row no-gutters"},p=["onClick"];function v(a,i,o,r,s,t){return(0,l.wg)(),(0,l.iD)("div",d,[(0,l._)("div",c,[(0,l.Uk)((0,e.zw)(s.primeiroValorVisual)+" "+(0,e.zw)(s.operadorVisual)+" "+(0,e.zw)(s.segundoValorVisual)+" ",1),n,(0,l.Uk)(" "+(0,e.zw)(s.valorCalculadoraVisual||s.erroEntrada||0),1)]),(0,l._)("div",h,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.elementosCalculadora,(a=>((0,l.wg)(),(0,l.iD)("div",{class:"col-3",key:a},[(0,l._)("div",{class:(0,e.C_)(["lead text-white text-center m-1 py-3 bg-vue-dark rounded hover-class",{"bg-vue-red":["C"].includes(a),"bg-vue-green":["="].includes(a),"bg-vue-brown":["*","+","-","/","±"].includes(a),"bg-vue-blue":["%","√"].includes(a)}]),onClick:i=>t.action(a)},(0,e.zw)(a),11,p)])))),128))])])}var V={name:"Calculadora",props:{msg:String},data(){return{valorCalculadoraVisual:"",primeiroValorVisual:"",segundoValorVisual:"",primeiroValorRequisicao:"",segundoValorRequisicao:"",elementosCalculadora:["C","%","√","±",7,8,9,"+",4,5,6,"-",1,2,3,"*",0,".","=","/"],operadorRequisicao:null,operadorVisual:null,respostaIgual:"",respostaOperador:"",FlagApertarIgualSemDigitarOValor:!1,FlagDepoisDeUmaOperacao:!1,"FlagLimparDadosApósRetornoalor":!1,erroEntrada:""}},methods:{async action(a){if(isNaN(a)&&"."!==a||(!0===this.FlagDepoisDeUmaOperacao?(this.valorCalculadoraVisual="",this.segundoValorRequisicao="",this.FlagDepoisDeUmaOperacao=!1):!0===this.FlagLimparDadosApósRetornoalor&&(this.limpaDados(),this.FlagLimparDadosApósRetornoalor=!1),""===this.primeiroValorVisual?(this.valorCalculadoraVisual+=a+"",this.primeiroValorRequisicao+=a+""):(this.valorCalculadoraVisual+=a+"",this.segundoValorRequisicao+=a+"")),["+","-","/","*","√","%"].includes(a))if(""!=this.erroEntrada&&(this.erroEntrada=""),""!=this.respostaIgual)this.atualizaOperador(a,a),this.atualizaPrimeiroValorRequisicao(this.valorCalculadoraVisual,this.valorCalculadoraVisual),this.atualizaSegundoValorRequisicao("",""),this.valorCalculadoraVisual="",this.respostaIgual="",this.FlagLimparDadosApósRetornoalor=!1;else if(null!=this.operadorRequisicao)try{this.respostaOperador=await this.chamaApi(this.primeiroValorRequisicao,this.operadorRequisicao,this.segundoValorRequisicao),this.valorCalculadoraVisual=await this.respostaOperador.json(),this.atualizaOperador(a,a),this.atualizaPrimeiroValorRequisicao(this.valorCalculadoraVisual,this.valorCalculadoraVisual),this.FlagApertarIgualSemDigitarOValor=!0,this.FlagDepoisDeUmaOperacao=!0}catch(i){this.erroEntrada="ERRO",console.log(i)}else this.atualizaOperador(a,a),this.primeiroValorVisual=this.primeiroValorRequisicao,this.valorCalculadoraVisual="";if("±"===a&&""!=this.valorCalculadoraVisual&&(this.valorCalculadoraVisual===this.primeiroValorRequisicao?(this.valorCalculadoraVisual=-1*this.valorCalculadoraVisual,this.primeiroValorRequisicao=-1*this.primeiroValorRequisicao):this.valorCalculadoraVisual===this.segundoValorRequisicao&&(this.valorCalculadoraVisual=-1*this.valorCalculadoraVisual,this.segundoValorRequisicao=-1*this.segundoValorRequisicao)),"C"===a&&this.limpaDados(),"="===a){!0===this.FlagApertarIgualSemDigitarOValor&&(this.segundoValorRequisicao=this.valorCalculadoraVisual,this.FlagApertarIgualSemDigitarOValor=!1),""===this.primeiroValorRequisicao?this.primeiroValorRequisicao=0:""===this.segundoValorRequisicao&&(this.segundoValorRequisicao=0);try{this.respostaIgual=await this.chamaApi(this.primeiroValorRequisicao,this.operadorRequisicao,this.segundoValorRequisicao),this.valorCalculadoraVisual=await this.respostaIgual.json(),this.atualizaPrimeiroValorRequisicao(this.valorCalculadoraVisual,this.primeiroValorRequisicao),this.segundoValorVisual=this.segundoValorRequisicao,this.operadorVisual=this.operadorRequisicao,this.FlagLimparDadosApósRetornoalor=!0}catch(i){this.erroEntrada="ERRO",console.log(i)}}},async chamaApi(a,i,o){const r=await fetch("http://localhost:3080/api",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({primeiroValor:a,operador:i,segundoValor:o})});return r},limpaDados(){this.valorCalculadoraVisual="",this.primeiroValorVisual="",this.segundoValorVisual="",this.primeiroValorRequisicao="",this.segundoValorRequisicao="",this.operadorRequisicao=null,this.operadorVisual=null,this.respostaIgual="",this.respostaOperador="",this.erroEntrada=""},atualizaPrimeiroValorRequisicao(a,i){this.primeiroValorRequisicao=a,this.primeiroValorVisual=i},atualizaSegundoValorRequisicao(a,i){this.segundoValorRequisicao=a,this.segundoValorVisual=i},atualizaOperador(a,i){this.operadorRequisicao=a,this.operadorVisual=i}}},g=o(3744);const m=(0,g.Z)(V,[["render",v],["__scopeId","data-v-5114c782"]]);var R=m;const f={id:"a",class:"p-3",style:{"max-width":"500px",margin:"20px auto auto 100px"}},b=(0,l.uE)('<h1 style="color:#000;" data-v-0594dc26>Como usar</h1><br data-v-0594dc26><ul data-v-0594dc26><li id="limpa" data-v-0594dc26><h4 data-v-0594dc26>C : Limpar e reiniciar a calculadora.</h4><br data-v-0594dc26></li><li id="igual" data-v-0594dc26><h4 data-v-0594dc26>= : Resultado</h4></li></ul><br data-v-0594dc26><h2 data-v-0594dc26>Operações básicas</h2><br data-v-0594dc26><ul id="operacoesBasicas" data-v-0594dc26><li data-v-0594dc26><h4 data-v-0594dc26>± : Inverter o sinal do número.</h4> - Exemplo: 5 ± --&gt; -5 <br data-v-0594dc26><br data-v-0594dc26></li><li data-v-0594dc26><h4 data-v-0594dc26>+ : Adição</h4> - Exemplo: 2 + 2 = 4. <br data-v-0594dc26><br data-v-0594dc26></li><li data-v-0594dc26><h4 data-v-0594dc26>- : Subtração</h4> - Exemplo: 4 - 2 = 2. <br data-v-0594dc26><br data-v-0594dc26></li><li data-v-0594dc26><h4 data-v-0594dc26>* : Multiplicação</h4> - Exemplo: 2 * 3 = 6. <br data-v-0594dc26><br data-v-0594dc26></li><li data-v-0594dc26><h4 data-v-0594dc26>/ : Divisão</h4> - Exemplo: 4 / 2 = 2. <br data-v-0594dc26><br data-v-0594dc26></li></ul><h2 style="color:#0c5764;" data-v-0594dc26>Operações avançadas</h2><ul id="operacoesAvançadas" data-v-0594dc26><li data-v-0594dc26><h4 data-v-0594dc26>% : Porcentagem.</h4> - Exemplo: 10 % de 80 = 8. <br data-v-0594dc26><br data-v-0594dc26></li><li data-v-0594dc26><h4 data-v-0594dc26>√ : Raiz.</h4> - Exemplo: 25 √ 2 = 5. Exemplo 2: 64 √ 3 = 4. <br data-v-0594dc26><br data-v-0594dc26></li></ul>',9),q=[b];function C(a,i,o,r,s,t){return(0,l.wg)(),(0,l.iD)("div",f,q)}var O={name:"Documentacao",props:{msg:String}};const w=(0,g.Z)(O,[["render",C],["__scopeId","data-v-0594dc26"]]);var D=w,x={name:"App",components:{Calculadora:R,Documentacao:D}};const y=(0,g.Z)(x,[["render",t]]);var E=y;(0,r.ri)(E).mount("#app")}},i={};function o(r){var l=i[r];if(void 0!==l)return l.exports;var s=i[r]={exports:{}};return a[r](s,s.exports,o),s.exports}o.m=a,function(){var a=[];o.O=function(i,r,l,s){if(!r){var t=1/0;for(c=0;c<a.length;c++){r=a[c][0],l=a[c][1],s=a[c][2];for(var e=!0,u=0;u<r.length;u++)(!1&s||t>=s)&&Object.keys(o.O).every((function(a){return o.O[a](r[u])}))?r.splice(u--,1):(e=!1,s<t&&(t=s));if(e){a.splice(c--,1);var d=l();void 0!==d&&(i=d)}}return i}s=s||0;for(var c=a.length;c>0&&a[c-1][2]>s;c--)a[c]=a[c-1];a[c]=[r,l,s]}}(),function(){o.d=function(a,i){for(var r in i)o.o(i,r)&&!o.o(a,r)&&Object.defineProperty(a,r,{enumerable:!0,get:i[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){o.o=function(a,i){return Object.prototype.hasOwnProperty.call(a,i)}}(),function(){var a={143:0};o.O.j=function(i){return 0===a[i]};var i=function(i,r){var l,s,t=r[0],e=r[1],u=r[2],d=0;if(t.some((function(i){return 0!==a[i]}))){for(l in e)o.o(e,l)&&(o.m[l]=e[l]);if(u)var c=u(o)}for(i&&i(r);d<t.length;d++)s=t[d],o.o(a,s)&&a[s]&&a[s][0](),a[s]=0;return o.O(c)},r=self["webpackChunkvue_calculator_escola"]=self["webpackChunkvue_calculator_escola"]||[];r.forEach(i.bind(null,0)),r.push=i.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(8458)}));r=o.O(r)})();
//# sourceMappingURL=app.68634e4a.js.map