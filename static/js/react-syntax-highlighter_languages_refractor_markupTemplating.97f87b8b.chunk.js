(this["webpackJsonpkolcrooks-com"]=this["webpackJsonpkolcrooks-com"]||[]).push([[81],{243:function(e,n,t){"use strict";function a(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var c=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"===typeof r&&!r(e))return e;for(var o,i=c.length;-1!==t.code.indexOf(o=n(a,i));)++i;return c[i]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function c(i){for(var s=0;s<i.length&&!(o>=r.length);s++){var u=i[s];if("string"===typeof u||u.content&&"string"===typeof u.content){var p=r[o],l=t.tokenStack[p],g="string"===typeof u?u:u.content,f=n(a,p),k=g.indexOf(f);if(k>-1){++o;var m=g.substring(0,k),h=new e.Token(a,e.tokenize(l,t.grammar),"language-"+a,l),d=g.substring(k+f.length),y=[];m&&y.push.apply(y,c([m])),y.push(h),d&&y.push.apply(y,c([d])),"string"===typeof u?i.splice.apply(i,[s,1].concat(y)):u.content=y}}else u.content&&c(u.content)}return i}(t.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.97f87b8b.chunk.js.map