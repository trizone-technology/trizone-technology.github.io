(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/sr0":function(e,n,t){"use strict";var a=t("8Y7J");t("ZuBe"),t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return i}));var r=a.tb({encapsulation:2,styles:[[".vex-page-layout{display:block}.vex-page-layout-simple .vex-page-layout-content{padding-bottom:var(--padding-gutter);padding-top:var(--padding-gutter)}.vex-page-layout-card{padding-bottom:var(--padding)}.vex-page-layout-card .vex-page-layout-header{margin-bottom:calc(var(--page-layout-toolbar-height) * -1);padding-bottom:var(--page-layout-toolbar-height)}.vex-page-layout-card .vex-page-layout-content>*>.mat-tab-group .mat-tab-label,.vex-page-layout-card .vex-page-layout-content>.mat-tab-group .mat-tab-label{height:var(--page-layout-toolbar-height)}.vex-page-layout-card .vex-page-layout-content>*>.mat-tab-group .mat-tab-label.mat-tab-label-active,.vex-page-layout-card .vex-page-layout-content>.mat-tab-group .mat-tab-label.mat-tab-label-active{opacity:1}.vex-page-layout-header{align-items:center;background-color:#5c77ff;color:#fff;box-sizing:content-box!important;display:flex;flex-direction:row;height:calc(var(--page-layout-header-height) - var(--page-layout-toolbar-height));padding-left:var(--padding);padding-right:var(--padding);place-content:center flex-start}.vex-page-layout-header .vex-breadcrumb{color:#fff;opacity:.5}.vex-page-layout-header .vex-breadcrumb:hover{color:#fff;opacity:1}.vex-page-layout-content{box-sizing:border-box;display:block;padding-left:var(--padding-gutter);padding-right:var(--padding-gutter)}"]],data:{}});function i(e){return a.Rb(0,[a.Gb(null,0)],null,null)}},"7lCJ":function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));class a{}},"9s5c":function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t("YpUO");var a=t("pw5m"),r=t.n(a);class i{constructor(e){if(e&&(e.languages().map(e=>this.registerLanguage(e.name,e.func)),e.config&&this.configure(e.config)),this.listLanguages().length<1)throw new Error("[HighlightJS]: No languages were registered!")}highlight(e,n,t,a){return r.a.highlight(e,n,t,a)}highlightAuto(e,n){return r.a.highlightAuto(e,n)}fixMarkup(e){return r.a.fixMarkup(e)}highlightBlock(e){r.a.highlightBlock(e)}configure(e){r.a.configure(e)}initHighlighting(){r.a.initHighlighting()}registerLanguage(e,n){r.a.registerLanguage(e,n)}listLanguages(){return r.a.listLanguages()}getLanguage(e){return r.a.getLanguage(e)}}},Abzj:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));class a{}},B1UH:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t("8Y7J");class r{constructor(e,n){this._highlightService=e,this._zone=n,this.highlighted=new a.m}ngOnChanges(e){e.code&&e.code.currentValue!==e.code.previousValue&&this.highlightElement(this.code,this.languages)}highlightElement(e,n){this._zone.runOutsideAngular(()=>{const t=this._highlightService.highlightAuto(e,n);this.highlightedCode=t.value,this.highlighted.emit(t)})}}},C0s9:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));class a{constructor(){}}},CwgZ:function(e,n){n.__esModule=!0,n.default={body:'<path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z" fill="currentColor"/><path opacity=".3" d="M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z" fill="currentColor"/>',width:24,height:24}},J0XA:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));class a{}},KNdO:function(e,n,t){"use strict";var a=t("8Y7J");class r{constructor(){}ngOnInit(){}}var i=a.tb({encapsulation:2,styles:[],data:{}});function l(e){return a.Rb(0,[a.Gb(null,0)],null,null)}var o=t("iInd"),s=t("SVse"),c=t("l+Q0"),u=t("cUpR");t("Z998"),t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var d=a.tb({encapsulation:2,styles:[],data:{}});function g(e){return a.Rb(0,[(e()(),a.vb(0,0,null,null,6,null,null,null,null,null,null,null)),(e()(),a.vb(1,0,null,null,0,"div",[["class","w-1 h-1 bg-gray-300 rounded-full ltr:mr-2 rtl:ml-2"]],null,null,null,null,null)),(e()(),a.vb(2,0,null,null,4,"vex-breadcrumb",[["class","vex-breadcrumb body-2 text-hint leading-none hover:text-primary-500 no-underline trans-ease-out ltr:mr-2 rtl:ml-2"]],null,null,null,l,i)),a.ub(3,114688,null,0,r,[],null,null),(e()(),a.vb(4,0,null,0,2,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(e,n,t){var r=!0;return"click"===n&&(r=!1!==a.Hb(e,5).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&r),r}),null,null)),a.ub(5,671744,null,0,o.r,[o.o,o.a,s.i],{routerLink:[0,"routerLink"]},null),(e()(),a.Pb(6,null,["",""]))],(function(e,n){e(n,3,0),e(n,5,0,a.db)}),(function(e,n){e(n,4,0,a.Hb(n,5).target,a.Hb(n,5).href),e(n,6,0,n.context.$implicit)}))}function b(e){return a.Rb(0,[(e()(),a.vb(0,0,null,null,9,"div",[["class","flex items-center"]],null,null,null,null,null)),(e()(),a.vb(1,0,null,null,6,"vex-breadcrumb",[["class","vex-breadcrumb body-2 text-hint leading-none hover:text-primary-500 no-underline trans-ease-out ltr:mr-2 rtl:ml-2"]],null,null,null,l,i)),a.ub(2,114688,null,0,r,[],null,null),(e()(),a.vb(3,0,null,0,4,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(e,n,t){var r=!0;return"click"===n&&(r=!1!==a.Hb(e,4).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&r),r}),null,null)),a.ub(4,671744,null,0,o.r,[o.o,o.a,s.i],{routerLink:[0,"routerLink"]},null),a.Ib(5,1),(e()(),a.vb(6,0,null,null,1,"ic-icon",[["inline","true"],["size","20px"]],[[2,"ic-inline",null],[4,"font-size",null],[8,"innerHTML",1]],null,null,null,null)),a.ub(7,606208,null,0,c.a,[u.b],{icon:[0,"icon"],inline:[1,"inline"],size:[2,"size"]},null),(e()(),a.kb(16777216,null,null,1,null,g)),a.ub(9,278528,null,0,s.l,[a.O,a.L,a.r],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null)],(function(e,n){var t=n.component;e(n,2,0);var a=e(n,5,0,"/");e(n,4,0,a),e(n,7,0,t.icHome,"true","20px"),e(n,9,0,t.crumbs,t.trackByValue)}),(function(e,n){e(n,3,0,a.Hb(n,4).target,a.Hb(n,4).href),e(n,6,0,a.Hb(n,7).inline,a.Hb(n,7).size,a.Hb(n,7).iconHTML)}))}},YROV:function(e,n){e.exports=function(e){var n={className:"variable",begin:"(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b"},t={className:"number",begin:"#[0-9A-Fa-f]+"};return{case_insensitive:!0,illegal:"[=/|']",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"selector-id",begin:"\\#[A-Za-z0-9_-]+",relevance:0},{className:"selector-class",begin:"\\.[A-Za-z0-9_-]+",relevance:0},{className:"selector-attr",begin:"\\[",end:"\\]",illegal:"$"},{className:"selector-tag",begin:"\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",relevance:0},{begin:":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"},{begin:"::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"},n,{className:"attribute",begin:"\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",illegal:"[^\\s]"},{begin:"\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"},{begin:":",end:";",contains:[n,t,e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{className:"meta",begin:"!important"}]},{begin:"@",end:"[{;]",keywords:"mixin include extend for if else each while charset import debug media page content font-face namespace warn",contains:[n,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,t,e.CSS_NUMBER_MODE,{begin:"\\s[A-Za-z0-9_.-]+",relevance:0}]}]}}},YpUO:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));const a=new(t("8Y7J").p)("HIGHLIGHT_OPTIONS")},Z998:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var a=t("CwgZ"),r=t.n(a),i=t("zK3P");class l{constructor(){this.crumbs=[],this.trackByValue=i.c,this.icHome=r.a}ngOnInit(){}}},ZuBe:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));class a{constructor(){this.mode="simple"}get isCard(){return"card"===this.mode}get isSimple(){return"simple"===this.mode}}},jctj:function(e,n){e.exports=function(e){var n={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],case_insensitive:!0,contains:[{className:"meta",begin:"<!DOCTYPE",end:">",relevance:10,contains:[{begin:"\\[",end:"\\]"}]},e.COMMENT("\x3c!--","--\x3e",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{begin:/<\?(php)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0},{begin:'b"',end:'"',skip:!0},{begin:"b'",end:"'",skip:!0},e.inherit(e.APOS_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0})]},{className:"tag",begin:"<style(?=\\s|>|$)",end:">",keywords:{name:"style"},contains:[n],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>|$)",end:">",keywords:{name:"script"},contains:[n],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["actionscript","javascript","handlebars","xml"]}},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},n]}]}}},l6p3:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return c})),t("YpUO");var a=t("jctj"),r=t.n(a),i=t("YROV"),l=t.n(i),o=t("r0Rl"),s=t.n(o);const c={languages:function(){return[{name:"typescript",func:s.a},{name:"scss",func:l.a},{name:"xml",func:r.a}]}};class u{}},pw5m:function(e,n,t){"object"==typeof window&&window||"object"==typeof self&&self,function(e){var n,t=[],a=Object.keys,r={},i={},l=/^(no-?highlight|plain|text)$/i,o=/\blang(?:uage)?-([\w-]+)\b/i,s=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,c="</span>",u={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};function d(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function g(e){return e.nodeName.toLowerCase()}function b(e,n){var t=e&&e.exec(n);return t&&0===t.index}function f(e){return l.test(e)}function p(e){var n,t={},a=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return a.forEach((function(e){for(n in e)t[n]=e[n]})),t}function m(e){var n=[];return function e(t,a){for(var r=t.firstChild;r;r=r.nextSibling)3===r.nodeType?a+=r.nodeValue.length:1===r.nodeType&&(n.push({event:"start",offset:a,node:r}),a=e(r,a),g(r).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:r}));return a}(e,0),n}function h(e){if(n&&!e.langApiRestored){for(var t in e.langApiRestored=!0,n)e[t]&&(e[n[t]]=e[t]);(e.contains||[]).concat(e.variants||[]).forEach(h)}}function v(e,n,t,i){function l(e){return new RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")}function o(e,n){var t=h.case_insensitive?n[0].toLowerCase():n[0];return e.keywords.hasOwnProperty(t)&&e.keywords[t]}function s(e,n,t,a){var r='<span class="'+(a?"":u.classPrefix);return e?(r+=e+'">')+n+(t?"":c):n}function g(){N+=null!=_.subLanguage?function(){var e="string"==typeof _.subLanguage;if(e&&!r[_.subLanguage])return d(R);var n=e?v(_.subLanguage,R,!0,x[_.subLanguage]):E(R,_.subLanguage.length?_.subLanguage:void 0);return _.relevance>0&&(O+=n.relevance),e&&(x[_.subLanguage]=n.top),s(n.language,n.value,!1,!0)}():function(){var e,n,t,a;if(!_.keywords)return d(R);for(a="",n=0,_.lexemesRe.lastIndex=0,t=_.lexemesRe.exec(R);t;)a+=d(R.substring(n,t.index)),(e=o(_,t))?(O+=e[1],a+=s(e[0],d(t[0]))):a+=d(t[0]),n=_.lexemesRe.lastIndex,t=_.lexemesRe.exec(R);return a+d(R.substr(n))}(),R=""}function f(e){N+=e.className?s(e.className,"",!0):"",_=Object.create(e,{parent:{value:_}})}function m(e,n){if(R+=e,null==n)return g(),0;var a=function(e,n){var t,a;for(t=0,a=n.contains.length;t<a;t++)if(b(n.contains[t].beginRe,e))return n.contains[t].endSameAsBegin&&(n.contains[t].endRe=l(n.contains[t].beginRe.exec(e)[0])),n.contains[t]}(n,_);if(a)return a.skip?R+=n:(a.excludeBegin&&(R+=n),g(),a.returnBegin||a.excludeBegin||(R=n)),f(a),a.returnBegin?0:n.length;var r=function e(n,t){if(b(n.endRe,t)){for(;n.endsParent&&n.parent;)n=n.parent;return n}if(n.endsWithParent)return e(n.parent,t)}(_,n);if(r){var i=_;i.skip?R+=n:(i.returnEnd||i.excludeEnd||(R+=n),g(),i.excludeEnd&&(R=n));do{_.className&&(N+=c),_.skip||_.subLanguage||(O+=_.relevance),_=_.parent}while(_!==r.parent);return r.starts&&(r.endSameAsBegin&&(r.starts.endRe=r.endRe),f(r.starts)),i.returnEnd?0:n.length}if(function(e,n){return!t&&b(_.illegalRe,e)}(n))throw new Error('Illegal lexeme "'+n+'" for mode "'+(_.className||"<unnamed>")+'"');return R+=n,n.length||1}var h=w(e);if(!h)throw new Error('Unknown language: "'+e+'"');!function(e){function n(e){return e&&e.source||e}function t(t,a){return new RegExp(n(t),"m"+(e.case_insensitive?"i":"")+(a?"g":""))}!function r(i,l){if(!i.compiled){if(i.compiled=!0,i.keywords=i.keywords||i.beginKeywords,i.keywords){var o={},s=function(n,t){e.case_insensitive&&(t=t.toLowerCase()),t.split(" ").forEach((function(e){var t=e.split("|");o[t[0]]=[n,t[1]?Number(t[1]):1]}))};"string"==typeof i.keywords?s("keyword",i.keywords):a(i.keywords).forEach((function(e){s(e,i.keywords[e])})),i.keywords=o}i.lexemesRe=t(i.lexemes||/\w+/,!0),l&&(i.beginKeywords&&(i.begin="\\b("+i.beginKeywords.split(" ").join("|")+")\\b"),i.begin||(i.begin=/\B|\b/),i.beginRe=t(i.begin),i.endSameAsBegin&&(i.end=i.begin),i.end||i.endsWithParent||(i.end=/\B|\b/),i.end&&(i.endRe=t(i.end)),i.terminator_end=n(i.end)||"",i.endsWithParent&&l.terminator_end&&(i.terminator_end+=(i.end?"|":"")+l.terminator_end)),i.illegal&&(i.illegalRe=t(i.illegal)),null==i.relevance&&(i.relevance=1),i.contains||(i.contains=[]),i.contains=Array.prototype.concat.apply([],i.contains.map((function(e){return function(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map((function(n){return p(e,{variants:null},n)}))),e.cached_variants||e.endsWithParent&&[p(e)]||[e]}("self"===e?i:e)}))),i.contains.forEach((function(e){r(e,i)})),i.starts&&r(i.starts,l);var c=i.contains.map((function(e){return e.beginKeywords?"\\.?(?:"+e.begin+")\\.?":e.begin})).concat([i.terminator_end,i.illegal]).map(n).filter(Boolean);i.terminators=c.length?t(function(e,t){for(var a=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,r=0,i="",l=0;l<e.length;l++){var o=r,s=n(e[l]);for(l>0&&(i+="|");s.length>0;){var c=a.exec(s);if(null==c){i+=s;break}i+=s.substring(0,c.index),s=s.substring(c.index+c[0].length),"\\"==c[0][0]&&c[1]?i+="\\"+String(Number(c[1])+o):(i+=c[0],"("==c[0]&&r++)}}return i}(c),!0):{exec:function(){return null}}}}(e)}(h);var y,_=i||h,x={},N="";for(y=_;y!==h;y=y.parent)y.className&&(N=s(y.className,"",!0)+N);var R="",O=0;try{for(var M,k,C=0;_.terminators.lastIndex=C,M=_.terminators.exec(n);)k=m(n.substring(C,M.index),M[0]),C=M.index+k;for(m(n.substr(C)),y=_;y.parent;y=y.parent)y.className&&(N+=c);return{relevance:O,value:N,language:e,top:_}}catch(A){if(A.message&&-1!==A.message.indexOf("Illegal"))return{relevance:0,value:d(n)};throw A}}function E(e,n){n=n||u.languages||a(r);var t={relevance:0,value:d(e)},i=t;return n.filter(w).filter(N).forEach((function(n){var a=v(n,e,!1);a.language=n,a.relevance>i.relevance&&(i=a),a.relevance>t.relevance&&(i=t,t=a)})),i.language&&(t.second_best=i),t}function y(e){return u.tabReplace||u.useBR?e.replace(s,(function(e,n){return u.useBR&&"\n"===e?"<br>":u.tabReplace?n.replace(/\t/g,u.tabReplace):""})):e}function _(e){var n,a,r,l,s,c=function(e){var n,t,a,r,i=e.className+" ";if(t=o.exec(i+=e.parentNode?e.parentNode.className:""))return w(t[1])?t[1]:"no-highlight";for(n=0,a=(i=i.split(/\s+/)).length;n<a;n++)if(f(r=i[n])||w(r))return r}(e);f(c)||(u.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):n=e,s=n.textContent,r=c?v(c,s,!0):E(s),(a=m(n)).length&&((l=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=r.value,r.value=function(e,n,a){var r=0,i="",l=[];function o(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function s(e){i+="<"+g(e)+t.map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+d(e.value).replace('"',"&quot;")+'"'})).join("")+">"}function c(e){i+="</"+g(e)+">"}function u(e){("start"===e.event?s:c)(e.node)}for(;e.length||n.length;){var b=o();if(i+=d(a.substring(r,b[0].offset)),r=b[0].offset,b===e){l.reverse().forEach(c);do{u(b.splice(0,1)[0]),b=o()}while(b===e&&b.length&&b[0].offset===r);l.reverse().forEach(s)}else"start"===b[0].event?l.push(b[0].node):l.pop(),u(b.splice(0,1)[0])}return i+d(a.substr(r))}(a,m(l),s)),r.value=y(r.value),e.innerHTML=r.value,e.className=function(e,n,t){var a=n?i[n]:t,r=[e.trim()];return e.match(/\bhljs\b/)||r.push("hljs"),-1===e.indexOf(a)&&r.push(a),r.join(" ").trim()}(e.className,c,r.language),e.result={language:r.language,re:r.relevance},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.relevance}))}function x(){if(!x.called){x.called=!0;var e=document.querySelectorAll("pre code");t.forEach.call(e,_)}}function w(e){return e=(e||"").toLowerCase(),r[e]||r[i[e]]}function N(e){var n=w(e);return n&&!n.disableAutodetect}e.highlight=v,e.highlightAuto=E,e.fixMarkup=y,e.highlightBlock=_,e.configure=function(e){u=p(u,e)},e.initHighlighting=x,e.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",x,!1),addEventListener("load",x,!1)},e.registerLanguage=function(n,t){var a=r[n]=t(e);h(a),a.aliases&&a.aliases.forEach((function(e){i[e]=n}))},e.listLanguages=function(){return a(r)},e.getLanguage=w,e.autoDetection=N,e.inherit=p,e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.COMMENT=function(n,t,a){var r=e.inherit({className:"comment",begin:n,end:t,contains:[]},a||{});return r.contains.push(e.PHRASAL_WORDS_MODE),r.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),r},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0}}(n)},r0Rl:function(e,n){e.exports=function(e){var n={keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class public private protected get set super static implements enum export import declare type namespace abstract as from extends async await",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document any number boolean string void Promise"},t={className:"meta",begin:"@[A-Za-z$_][0-9A-Za-z$_]*"},a={begin:"\\(",end:/\)/,keywords:n,contains:["self",e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.NUMBER_MODE]},r={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,t,a]};return{aliases:["ts"],keywords:n,contains:[{className:"meta",begin:/^\s*['"]use strict['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,{className:"subst",begin:"\\$\\{",end:"\\}"}]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+e.IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.IDENT_RE},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,contains:["self",e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]}]}]}],relevance:0},{className:"function",begin:"function",end:/[\{;]/,excludeEnd:!0,keywords:n,contains:["self",e.inherit(e.TITLE_MODE,{begin:"[A-Za-z$_][0-9A-Za-z$_]*"}),r],illegal:/%/,relevance:0},{beginKeywords:"constructor",end:/\{/,excludeEnd:!0,contains:["self",r]},{begin:/module\./,keywords:{built_in:"module"},relevance:0},{beginKeywords:"module",end:/\{/,excludeEnd:!0},{beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:"interface extends"},{begin:/\$[(.]/},{begin:"\\."+e.IDENT_RE,relevance:0},t,a]}}}}]);