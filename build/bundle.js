!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.logPlayer=function(){console.log("The current player is "+r+".")},t.setName=function(e){r=e},t.getName=function(){return r};var r=""},function(e,t,n){"use strict";var r=n(0),o=n(2);console.log("webpack babel test"),document.getElementById("startGame").addEventListener("click",function(){(0,r.setName)(document.getElementById("playername").value),(0,o.printGame)()}),document.getElementById("calculate").addEventListener("click",function(){(0,o.calculateScore)()}),document.getElementById("problemCount").value=(0,o.getProblemCount)()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getProblemCount=t.setProblemCount=t.calculateScore=t.printGame=void 0;var r=n(0),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(3));var l=document.getElementById("factor"),u=3;function a(e){u=e}function c(){return u}t.printGame=function(){(0,r.logPlayer)(),a(document.getElementById("problemCount").value);for(var e="",t=1;t<=u;t++)e+='<div class="form-group">',e+='<label for="answer'+t+'" class="col-sm-2 control-label">',e+=l.value+" x "+t+" = </label>",e+='<div class="col-sm-1"><input type="text" class="form-control" id="answer'+t+'" size="5" /></div>',e+="</div>";document.getElementById("game").innerHTML=e,document.getElementById("calculate").removeAttribute("disabled")},t.calculateScore=function(){for(var e=c(),t=0,n=1;n<=e;n++){var u=document.getElementById("answer"+n).value;n*l.value==u&&t++}var a={name:(0,r.getName)(),score:t,problems:e,factor:l.value};o.addResult(a),o.updateScoreboard(),document.getElementById("calculate").setAttribute("disabled","true")},t.setProblemCount=a,t.getProblemCount=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),console.log("Creating a scoreboard...");var r=[];t.addResult=function(e){r.push(e)},t.updateScoreboard=function(){for(var e="<h2>Scoreboard</h2>",t=0;t<r.length;t++){var n=r[t];e+="<h4>",e+=n.name+": "+n.score+"/"+n.problems+" for factor "+n.factor,e+="</h4>"}document.getElementById("scores").innerHTML=e}}]);