(this.webpackJsonpv2=this.webpackJsonpv2||[]).push([[0],{70:function(e,t,n){e.exports=n(90)},75:function(e,t,n){},76:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var o,r=n(0),i=n.n(r),a=n(6),l=n.n(a),c=(n(75),n(76),n(21)),s=n.n(c),u=n(38),f=n(16),d=n(26),h=n(23),m=n(33);function g(e){var t=(e&o.Right)===o.Right,n=(e&o.Left)===o.Left,r=(e&o.Down)===o.Down,i=(e&o.Up)===o.Up;return{isRight:t,isLeft:n,isDown:r,isUp:i,isDiagonal:(i||r)&&(t||n),isHorizontal:(t||n)&&!(i||r),isVertical:(i||r)&&!(t||n)}}function p(e){var t=g(e);return(t.isUp?"up":"")+(t.isDown?"down":"")+(t.isRight?"right":"")+(t.isLeft?"left":"")}function v(e){var t=function(e){return"(".concat(e.x,", ").concat(e.y,")")};return Array.isArray(e)?"[".concat(e.map(t).join(", "),"]"):t(e)}!function(e){e[e.None=0]="None",e[e.Right=1]="Right",e[e.Left=2]="Left",e[e.Down=4]="Down",e[e.Up=8]="Up"}(o||(o={}));var y;!function(e){e[e.None=0]="None",e[e.Verbose=1]="Verbose",e[e.Debug=2]="Debug",e[e.Info=3]="Info",e[e.Warning=4]="Warning",e[e.Error=5]="Error"}(y||(y={}));var b=new(function(){function e(){Object(f.a)(this,e),this.MIN_LEVEL=y.Debug}return Object(h.a)(e,[{key:"group",value:function(e){console.groupCollapsed(e)}},{key:"groupEnd",value:function(){console.groupEnd()}},{key:"v",value:function(e){if(this.MIN_LEVEL==y.Verbose){for(var t,n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];(t=console).debug.apply(t,[e].concat(o))}}},{key:"d",value:function(e){if(this.MIN_LEVEL!==y.None&&this.MIN_LEVEL<=y.Debug){for(var t,n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];(t=console).debug.apply(t,[e].concat(o))}}},{key:"i",value:function(e){for(var t,n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];this.MIN_LEVEL!==y.None&&this.MIN_LEVEL<=y.Info&&(t=console).info.apply(t,[e].concat(o))}},{key:"w",value:function(e){for(var t,n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];this.MIN_LEVEL!==y.None&&this.MIN_LEVEL<=y.Warning&&(t=console).warn.apply(t,[e].concat(o))}},{key:"e",value:function(e){for(var t,n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];this.MIN_LEVEL!==y.None&&(t=console).error.apply(t,[e].concat(o))}},{key:"minLevel",get:function(){return y[this.MIN_LEVEL]}}]),e}());function w(e){b.MIN_LEVEL=e}var E=b,x=function(){var e=Array(),t=Array().concat(Array(3).fill(o.Right),Array(3).fill(o.Down),Array(3).fill(o.Right),Array(3).fill(o.Down),Array(3).fill(o.Left),Array(3).fill(o.Down),Array(3).fill(o.Left),Array(3).fill(o.Up),Array(3).fill(o.Left),Array(3).fill(o.Up),Array(3).fill(o.Right),Array(3).fill(o.Up)),n=-2,r=-5;return t.forEach((function(t){e.push({x:n,y:r});var o=g(t),i=o.isLeft,a=o.isRight,l=o.isDown,c=o.isUp;n=a?n+1===0?1:n+1:i?n-1===0?-1:n-1:n,r=l?r+1===0?1:r+1:c?r-1===0?-1:r-1:r})),e}();function O(e){var t=g(e);return t.isHorizontal&&t.isRight?0:t.isRight&&t.isDown?45:t.isVertical&&t.isDown?90:t.isLeft&&t.isDown?135:t.isHorizontal&&t.isLeft?180:t.isLeft&&t.isUp?225:t.isVertical&&t.isUp?270:t.isRight&&t.isUp?315:NaN}function L(e,t){if(e===t)return!0;var n=[g(e),g(t)],o=n[0],r=n[1];return!(!o.isVertical||!r.isVertical)||(!(!o.isHorizontal||!r.isHorizontal)||(!!(o.isRight&&o.isUp&&r.isLeft&&r.isDown)||(!!(r.isRight&&r.isUp&&o.isLeft&&o.isDown)||(!!(o.isLeft&&o.isUp&&r.isRight&&r.isDown)||!!(r.isLeft&&r.isUp&&o.isRight&&o.isDown)))))}function k(e,t){var n=g(t),o=e.x,r=e.y;return n.isUp&&(r=C(r,1)),n.isDown&&(r=C(r,-1)),n.isRight&&(o=C(o,1)),n.isLeft&&(o=C(o,-1)),{x:o,y:r}}function C(e,t){return e+t===0?C(e+t,t):e+t}!function(){var e=Object(m.a)(x),t=e.map((function(e){var t=e.x;e.y;return t})),n=e.map((function(e){e.x;return e.y})),o=Math.min.apply(Math,Object(m.a)(t))-5,r=Math.max.apply(Math,Object(m.a)(t))+5,i=Math.min.apply(Math,Object(m.a)(n))-5,a=Math.max.apply(Math,Object(m.a)(n))+5;console.debug("Creating a matrix from [%o, %o] to [%o, %o]",o,i,r,a);for(var l=function(t){for(var n=function(n){e.some((function(e){var o=e.x,r=e.y;return o===t&&r===n}))||e.push({x:t,y:n})},o=i;o<a;o++)n(o)},c=o;c<r;c++)l(c)}();var j=n(2),A=function e(t){Object(f.a)(this,e),this.coords=t,this.isOpened=!1,this.tdRef=void 0,this.lineDirections=Array()};A.prototype.toString=function(){return"".concat(this.isOpened?"Opened":"Closed"," cell ").concat(v(this.coords)," (dir=").concat(this.lineDirections.map((function(e){return p(e)})).join(", "),")")},Object(j.j)(A,{isOpened:j.o,lineDirections:j.o,tdRef:j.o});var D=A,R=n(13),M=n(18),N=n(66),S=function(e){return Object(N.a)({palette:{primary:{main:e.darkest},action:{active:e.lightest,disabled:e.color2},secondary:{main:e.color3},success:{main:e.lightest},info:{main:e.color2},warning:{main:e.color3},background:{default:e.darkest,paper:e.color3},text:{primary:e.lightest,secondary:e.lightest},divider:e.lightest},typography:{allVariants:{color:e.lightest,fontFamily:'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace'},button:{textTransform:"none"},body1:{color:e.lightest}}})},I={Default:S({lightest:"#e7dfd5",color2:"#84a9ac",color3:"#3b6978",darkest:"#204051"}),"Green Desert":S({lightest:"#e5e4cc",color2:"#bac7a7",color3:"#889e81",darkest:"#698474"}),Bumblebee:S({lightest:"#f4f4f4",color2:"#f0a500",color3:"#cf7500",darkest:"#000000"}),Watermelon:S({lightest:"#bbf1c8",color2:"#80bdab",color3:"#342b38",darkest:"#ff9595"}),Limestone:S({lightest:"#e1ffc2",color2:"#c7e2b2",color3:"#89c9b8",darkest:"#092532"})},U=n(67),V={theme:I[Object.keys(I)[0]],setTheme:function(){}};var z=Object(U.a)(V,(function(){var e=i.a.useState(V.theme),t=Object(M.a)(e,2),n=t[0],o=t[1];return i.a.useEffect((function(){console.log("[useThemeSetter]: Theme was changed to",Object.keys(I)[Object.values(I).indexOf(n)])}),[n]),{theme:n,setTheme:o}})),T=Object(R.a)((function(e){var t=e.model,n=t.dimensions,o=z().theme;return i.a.createElement(i.a.Fragment,null,!n&&i.a.createElement(i.a.Fragment,null),n&&i.a.createElement("div",{style:{left:null===n||void 0===n?void 0:n.offsetX,width:null===n||void 0===n?void 0:n.lengthPx,height:3,top:null===n||void 0===n?void 0:n.offsetY,transformOrigin:t.transformOrigin,transform:"rotate(".concat(null===n||void 0===n?void 0:n.rotationDeg,"deg)"),position:"absolute"}},i.a.createElement("div",{style:{animationName:"grow",opacity:.75,animationDuration:"1s",animationTimingFunction:"cubiz-bezier(0, 20, 50, 90)",background:o.palette.background.paper,height:3}})))})),F=function(){function e(t,n){Object(f.a)(this,e),this.coords=t,this.game=n,this.direction=void 0,this.firstCell=void 0,this.lastCell=void 0,this.direction=function(e,t){var n=o.None;return e.x<t.x?n|=o.Right:e.x>t.x&&(n|=o.Left),e.y<t.y?n|=o.Up:e.y>t.y&&(n|=o.Down),n}(t[0],t[1]),this.firstCell=this.game.cellAt(this.coords[0].x,this.coords[0].y),this.lastCell=this.game.cellAt(this.coords[this.coords.length-1].x,this.coords[this.coords.length-1].y)}return Object(h.a)(e,[{key:"transformOrigin",get:function(){var e=g(this.direction);return e.isDiagonal||e.isHorizontal?"0 50%":e.isVertical?"0 100%":void 0}},{key:"dimensions",get:function(){var e,t;if((null===(e=this.firstCell)||void 0===e?void 0:e.tdRef)&&(null===(t=this.lastCell)||void 0===t?void 0:t.tdRef)){var n=g(this.direction),o=this.firstCell.tdRef.current,r=this.lastCell.tdRef.current,i=o.offsetWidth,a=o.offsetHeight,l=0,c=0,s=0;if(n.isHorizontal)c=o.offsetTop+a/2-1.5,n.isRight?(s=Math.abs(o.offsetLeft-r.offsetLeft)+.5*i,l=o.offsetLeft+.25*i):(s=Math.abs(r.offsetLeft-o.offsetLeft)+.5*i,l=o.offsetLeft+.75*i);else if(n.isVertical){l=o.offsetLeft+i/2+3/(n.isUp?2:-2),c=o.offsetTop+a*(n.isDown?.2:.8)-3;var u=r.offsetTop+a*(n.isUp?.2:.8)-3;s=Math.abs(u-c)}else{if(!n.isDiagonal)throw new Error("Invalid direction");var f=r.offsetLeft+(n.isLeft?0:i),d=r.offsetTop+(n.isUp?0:a);l=o.offsetLeft+(n.isRight?0:i),c=o.offsetTop+(n.isDown?0:a),s=Math.floor(Math.sqrt(Math.pow(Math.floor(f-l),2)+Math.pow(Math.ceil(d-c),2)))}return{offsetX:l,offsetY:c,lengthPx:s,rotationDeg:O(this.direction)}}}}]),e}();Object(j.j)(F,{firstCell:j.o,lastCell:j.o,direction:j.o,dimensions:j.g,transformOrigin:j.g});var _,H=function(){function e(){var t=this;Object(f.a)(this,e),this.lines=Array(),this.selectedCellCoords=void 0,this.cells=Array();for(var n=9;n>=-9;n=C(n,-1))for(var o=-9;o<=9;o=C(o,1))this.cells.push(new D({x:o,y:n}));this.initiateBoardAsync().then((function(){var e=0;Object(j.f)((function(){e>t.lines.length&&(t.cells.forEach((function(e){return e.isOpened=!1})),t.initiateBoard()),t.lines.forEach((function(e){var n=e.coords,o=e.direction;n.forEach((function(e){var n=e.x,r=e.y,i=t.cellAt(n,r);i.isOpened||(i.isOpened=!0),i.lineDirections.some((function(e){return e===o}))||(i.lineDirections.push(o),E.d("Added direction (%o) to cell at %o",p(o),v(i.coords)))}))})),e=t.lines.length}))}))}return Object(h.a)(e,[{key:"highlightedCoords",get:function(){return this.selectedCellCoords?this.possibleLines.map((function(e){return e.coords})).reduce((function(e,t){return e.concat(t)}),[]):[]}},{key:"lineCount",get:function(){var e;return(null===(e=this.lines)||void 0===e?void 0:e.length)||0}},{key:"endOfLineCoords",get:function(){return this.selectedCellCoords?this.possibleLines.map((function(e){return e.coords[e.coords.length-1]})):[]}},{key:"rows",get:function(){var e=this,t=Array();return this.cells.slice().sort((function(e,t){return e.coords.x-t.coords.x})).slice().sort((function(e,t){return t.coords.y-e.coords.y})).forEach((function(n){var o=n.coords.y,r=t.find((function(e){return e.yIndex===o}));r?r.cells.push(n):t.push({yIndex:o,cells:[n],game:e})})),t}}]),Object(h.a)(e,[{key:"initiateBoard",value:function(){var e,t=Object(d.a)(x);try{for(t.s();!(e=t.n()).done;){var n=e.value;this.cellAt(n.x,n.y).isOpened=!0}}catch(o){t.e(o)}finally{t.f()}}},{key:"initiateBoardAsync",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t,n,o,r,i=this,a=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=a.length>0&&void 0!==a[0]?a[0]:8,n=Object(d.a)(x),e.prev=2,r=s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.value,e.next=3,new Promise((function(e){return setTimeout((function(){i.cellAt(n.x,n.y).isOpened=!0,e(!0)}),t)}));case 3:case"end":return e.stop()}}),e)})),n.s();case 5:if((o=n.n()).done){e.next=9;break}return e.delegateYield(r(),"t0",7);case 7:e.next=5;break;case 9:e.next=14;break;case 11:e.prev=11,e.t1=e.catch(2),n.e(e.t1);case 14:return e.prev=14,n.f(),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,11,14,17]])})));return function(){return e.apply(this,arguments)}}()},{key:"cellAt",value:function(e,t){return this.cells.find((function(n){return n.coords.x===e&&n.coords.y===t}))}},{key:"tryCompleteLine",value:function(e){var t=this.selectedCellCoords;if(t){E.i("Attempting to complete line from %o to %o",v(t),v(e));var n,o=this.getLineForCoords(t,e),r=Object(d.a)(o.coords);try{for(r.s();!(n=r.n()).done;){var i=n.value,a=i.x,l=i.y,c=this.cellAt(a,l);c.isOpened||(c.isOpened=!0,E.i("Opened cell at ",v(c.coords)))}}catch(s){r.e(s)}finally{r.f()}this.lines.push(o),E.d("Added line at %s. Line count: %o.",v(o.coords),this.lineCount),this.selectedCellCoords=void 0,E.d("Reset selected cell coords.")}else E.w("Could not complete line due to selected coords being falsy.")}},{key:"getLineForCoords",value:function(e,t){return this.possibleLines.find((function(e){return e.coords.some((function(e){return o=t,(n=e).x===o.x&&n.y===o.y;var n,o}))}))}},{key:"possibleLines",get:function(){var e=this,t=E.MIN_LEVEL;t<y.Info&&w(y.Info);var n,r=Array(),i=Object(d.a)([o.Up,o.Down,o.Left,o.Right,o.Up|o.Left,o.Up|o.Right,o.Down|o.Left,o.Down|o.Right]);try{var a=function(){for(var t=n.value,o=e.selectedCellCoords,i=o.x,a=o.y,l=0,c=0,s=Array(),u=0;u<5;u++){var f;s.push({x:i,y:a});var d=e.cellAt(i,a);(null===d||void 0===d?void 0:d.isOpened)||c++,(null===d||void 0===d||null===(f=d.lineDirections)||void 0===f?void 0:f.some((function(e){return e===t||L(e,t)})))||l++;var h=k({x:i,y:a},t);i=h.x,a=h.y}if(5===l&&c<=1){var m=new F(s,e);E.i("Possible line from coords %s to direction %s: %s",v({x:i,y:a}),p(t),v(s)),r.push(m)}};for(i.s();!(n=i.n()).done;)a()}catch(l){i.e(l)}finally{i.f()}return w(t),r}}]),e}();H.origo={x:0,y:0},function(e){e[e.NotStarted=0]="NotStarted",e[e.Started=1]="Started",e[e.Finished=2]="Finished"}(_||(_={})),Object(j.j)(H,{selectedCellCoords:j.o,highlightedCoords:j.g,endOfLineCoords:j.g,lines:j.o,rows:j.g,cells:j.o,lineCount:j.g});var W=H,B=n(46),G=n.n(B);function P(e){var t,n=null===(t=e.game)||void 0===t?void 0:t.selectedCellCoords;return(null===n||void 0===n?void 0:n.x)===e.coords.x&&(null===n||void 0===n?void 0:n.y)===e.coords.y}var J=function(e,t,n,o,r){return{width:24,height:24,fontSize:t||e?14:12,textAlign:"center",color:n?G()(r.palette.primary.dark).darken(.2).hex():G()(r.palette.primary.main).darken(.2).hex(),backgroundColor:o?r.palette.primary.light:e&&!n?r.palette.error.light:e&&n?r.palette.info.main:n?r.palette.secondary.light:"#f9f9f9",backgroundSize:"50%"}},Y=Object(R.a)((function(e){var t=i.a.useRef(null),n=e.game,o=e.coords,r=e.coords,a=r.x,l=r.y,c=e.game.cellAt(a,l),s=e.game.highlightedCoords.some((function(e){return e.x===a&&e.y===l})),u=s&&n.endOfLineCoords.some((function(e){return e.x===a&&e.y===l})),f=z().theme;return i.a.useEffect((function(){c&&(c.tdRef=t)}),[n,o,a,l,c]),i.a.createElement("td",{ref:t,className:"noselect cell",style:J(P(e),c.isOpened,s,u,f),onClick:function(){var t,n;(null===(t=e.game.selectedCellCoords)||void 0===t?void 0:t.x)===a&&(null===(n=e.game.selectedCellCoords)||void 0===n?void 0:n.y)===l?e.game.selectedCellCoords=void 0:s?e.game.tryCompleteLine(e.coords):e.game.selectedCellCoords=e.coords},"data-coords":"[".concat(a,", ").concat(l,"]")},c.isOpened||P(e)?i.a.createElement(i.a.Fragment,null,"\u25cb"):i.a.createElement(i.a.Fragment,null,"\u2022"))})),X=function(e){return i.a.createElement("tr",null,e.cells.map((function(t){return i.a.createElement(Y,Object.assign({game:e.game,key:t.coords.x},t))})))},q=n(124),$=n(25),K=function(e){var t=z().theme;return i.a.createElement("div",Object.assign({},e,{style:Object($.a)({display:"flex",color:t.palette.text.primary},e.style)}),e.children)},Q=n(118),Z=n(60),ee=n.n(Z),te=n(61),ne=n.n(te),oe=function(e){var t=z().theme,n=e.isMenuOpen,o=e.setIsMenuOpen;return i.a.createElement(i.a.Fragment,null,i.a.createElement(K,{style:{padding:"10px 25px"}},i.a.createElement(K,{style:{flexGrow:1}},i.a.createElement("h1",{style:{color:t.palette.text.primary,paddingBottom:5}},"Linegame")),i.a.createElement(K,null,i.a.createElement(Q.a,{onClick:function(){return o(!n)}},!n&&i.a.createElement(ee.a,{color:"action"}),n&&i.a.createElement(ne.a,null)))))},re=n(126),ie=n(125),ae={fontSize:"140%",cursor:"pointer",margin:"-2px 2px 0 2px",display:"flex",flexGrow:1},le=function(){var e=z(),t=e.theme,n=e.setTheme,o=Object.values(I).indexOf(t),r=Object.keys(I);return i.a.createElement(K,{style:{flexFlow:"column",flexGrow:1},onClick:function(e){e.stopPropagation()}},i.a.createElement("span",{style:{display:"flex",flexGrow:1,fontSize:"70%",opacity:.8,paddingTop:5,textAlign:"center",flexFlow:"column",textIndent:-10}},"Theme"),i.a.createElement(K,{style:{flexGrow:1}},i.a.createElement("a",{style:ae,className:"noselect",onClick:function(){return function(){var e=r[o>0?o-1:r.length-1];n(I[e])}()}},"\xab"),i.a.createElement("span",{style:{flexGrow:0,textAlign:"center"}},Object.keys(I)[Object.values(I).indexOf(t)]),i.a.createElement("a",{style:Object($.a)(Object($.a)({},ae),{},{flexDirection:"row-reverse"}),className:"noselect",onClick:function(){return function(){var e=r[o+1<r.length?o+1:0];n(I[e])}()}},"\xbb")))},ce=n(63),se=n.n(ce),ue=n(62),fe=n.n(ue),de=n(64),he=n.n(de),me=n(65),ge=n.n(me),pe=n(121),ve=n(120),ye=n(122),be=function(e){var t=e.icon,n=e.onClick,o=e.text,r=e.fontSize;return i.a.createElement(ie.a,{onClick:n,style:{cursor:"pointer"}},i.a.createElement(ve.a,{fullWidth:!0},i.a.createElement(K,{style:{width:"70%"}},i.a.createElement("span",{style:{width:40,marginRight:"100%"===r?5:15}},t&&t),i.a.createElement(pe.a,{color:"textPrimary",style:{fontSize:r||"130%",marginTop:3}},o))))},we=Object(R.a)((function(e){var t=i.a.useState(!1),n=Object(M.a)(t,2),o=n[0],r=n[1],a=z().theme;return i.a.createElement(i.a.Fragment,null,i.a.createElement(oe,{isMenuOpen:o,setIsMenuOpen:r}),i.a.createElement(pe.a,null,"Points: ",e.game.lineCount),i.a.createElement(q.a,{anchor:"left",open:o,onClose:function(){return r(!1)}},i.a.createElement(K,{style:{flexFlow:"column",alignItems:"center",overflow:"hidden",height:"100vh",backgroundColor:a.palette.background.paper}},i.a.createElement(re.a,{style:{marginTop:"auto",marginBottom:"auto",width:300,height:550,backgroundColor:a.palette.background.paper,color:"#fff",textAlign:"center"}},i.a.createElement(ie.a,null,i.a.createElement(le,null)),i.a.createElement(ye.a,{style:{margin:"2px 10px"}}),i.a.createElement(be,{text:"New game",icon:i.a.createElement(fe.a,{fontSize:"large"}),onClick:function(){console.log("newGame()"),Ce.game=new W,r(!1)}}),i.a.createElement(be,{text:"Save game",icon:i.a.createElement(se.a,{fontSize:"large"}),onClick:function(){!function(){var e=JSON.stringify(Ce.game.lines.map((function(e){return e.coords})));localStorage.setItem("game_lines",e)}(),r(!1)}}),i.a.createElement(be,{text:"Load game",icon:i.a.createElement(he.a,{fontSize:"large"}),onClick:function(){(function(){return je.apply(this,arguments)})().then((function(e){r(!1)}))}}),i.a.createElement(ye.a,{style:{margin:"2px 10px"}}),i.a.createElement(be,{text:"How to play?",fontSize:"100%",icon:i.a.createElement(ge.a,{fontSize:"default",onClick:function(){}})})))))}));var Ee=Object(R.a)((function(e){var t=e.game,n=e.tableRef,o=t.lines,a=i.a.useState({}),l=Object(M.a)(a,2),c=l[0],s=l[1],u=function(){var e="object"===typeof window;function t(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}}var n=Object(r.useState)(t),o=Object(M.a)(n,2),i=o[0],a=o[1];return Object(r.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){a(t())}}),[]),i}(),f=i.a.useState(0),d=Object(M.a)(f,2),h=d[0],m=d[1];return function(){return m(h+1)},i.a.useEffect((function(){var e,t,o,r;s({width:null===n||void 0===n||null===(e=n.current)||void 0===e?void 0:e.offsetWidth,height:null===n||void 0===n||null===(t=n.current)||void 0===t?void 0:t.clientHeight,left:null===n||void 0===n||null===(o=n.current)||void 0===o?void 0:o.offsetLeft,top:null===n||void 0===n||null===(r=n.current)||void 0===r?void 0:r.offsetTop}),console.log("set style")}),[n,n.current,u,h]),i.a.createElement("div",{style:Object($.a)({position:"absolute",background:"rgba(45,91,0,0.15)",top:0,left:0,pointerEvents:"none"},c)},Array.isArray(o)&&o.map((function(e,n){return i.a.createElement(T,{key:"line-".concat(n),model:e,game:t})})))})),xe={width:480,margin:"auto"},Oe=Object(R.a)((function(e){var t=e.game,n=i.a.useRef(null),o=z().theme;return i.a.createElement(K,{style:{background:o.palette.background.default,margin:"auto",justifyContent:"center",flexFlow:"column",border:"1px solid ".concat(o.palette.primary.main)}},i.a.createElement(K,{style:{flexFlow:"column",margin:"auto",padding:5,borderRadius:o.spacing(1),background:o.palette.background.paper}},i.a.createElement(we,{game:t}),i.a.createElement("table",{ref:n,cellSpacing:1,style:xe},i.a.createElement("tbody",null,t.rows.map((function(e){return i.a.createElement(X,Object.assign({game:t,key:e.yIndex},e))})))),i.a.createElement(Ee,{game:t,tableRef:n})))})),Le=n(123),ke=function e(){Object(f.a)(this,e),this.game=new W};Object(j.j)(ke,{game:j.o});var Ce=new ke;function je(){return(je=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var t=localStorage.getItem("game_lines");if(t)try{Ce.game=new W,JSON.parse(t).map((function(e){return new F(e,Ce.game)})).forEach((function(e){e=new F(e.coords,Ce.game),Ce.game.lines.push(e)})),e(!0)}catch(n){e(!1)}e(!1)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ae=Object(R.a)((function(){var e=z().theme;return i.a.useEffect((function(){console.log("Theme was changed to",Object.keys(I)[Object.values(I).indexOf(e)])}),[e]),i.a.createElement(Le.a,{theme:e},i.a.createElement(Oe,{game:Ce.game}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[70,1,2]]]);
//# sourceMappingURL=main.ccae261b.chunk.js.map