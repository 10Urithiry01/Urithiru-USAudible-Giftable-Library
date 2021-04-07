(self.webpackChunk=self.webpackChunk||[]).push([[378],{6084:(t,s,r)=>{"use strict";r.d(s,{Z:()=>e}),r(266);const e={mixins:[r(3223).Z],methods:{progressbarWidth:function(t){if(t.progress){if("finished"===t.progress.toLowerCase().trim())return{width:"100%"};if(t.length){var s=this.timeStringToSeconds(t.progress),r=this.timeStringToSeconds(t.length);return{width:(s=r-s)/r*100+"%"}}return{width:0}}return{width:0}}}}},6623:(t,s,r)=>{"use strict";r.d(s,{Z:()=>e}),r(2410),r(3238),r(895);const e={methods:{secondsToTimeString:function(t,s){var r=function(t,r){return s?t:("000"+t).slice(-1*r)},e=parseFloat(t).toFixed(3),i=Math.floor(e/60/60),o=Math.floor(e/60)%60,n=(Math.floor(e-60*o),e.slice(-3),(i.toString().length>1?i:r(i,2))+(s?"h ":".")),a=r(o,2)+(s?"m ":"");return s&&!i&&(n=""),n+a}}}},2410:(t,s,r)=>{"use strict";var e=r(1695),i=r(8759),o=r(6526),n=r(7740),a=r(4005),h=r(4088),l=r(9720),b=r(211),u=r(9955)("slice"),c=b("species"),d=[].slice,v=Math.max;e({target:"Array",proto:!0,forced:!u},{slice:function(t,s){var r,e,b,u=h(this),g=a(u.length),f=n(t,g),m=n(void 0===s?g:s,g);if(o(u)&&("function"!=typeof(r=u.constructor)||r!==Array&&!o(r.prototype)?i(r)&&null===(r=r[c])&&(r=void 0):r=void 0,r===Array||void 0===r))return d.call(u,f,m);for(e=new(void 0===r?Array:r)(v(m-f,0)),b=0;f<m;f++,b++)f in u&&l(e,b,u[f]);return e.length=b,e}})},420:(t,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>a}),r(8010),r(1013),r(2327),r(911),r(266);var e=r(3223),i=r(6623),o=r(6084);const n={name:"sortValues",props:["book"],mixins:[e.Z,i.Z,o.Z],data:function(){return{notAvailable:"&nbsp;"}},methods:{sortContents:function(){var t=this.$store.getters.sortBy;switch(t){case"bookNumbers":if(this.book.series){var s=_.filter(this.book.series,"bookNumbers");return s=_.map(s,"bookNumbers"),s=_.flatten(s),_.isEmpty(s)?s=null:_.isArray(s)&&(s=s.join(", ")),s||"∞"}return"";case"seriesOrder":if(this.book.series){var r=this.$route.params.series,e=_.find(this.book.series,{asin:r});if(e){var i=e.bookNumbers;return i?_.isArray(i)?i.join(", "):i:"∞"}return this.notAvailable}return this.notAvailable;case"authors.name":case"narrators.name":case"publishers.name":return _.get(this.book,t.replace(".name","[0].name"))||this.notAvailable;case"rating":if(this.book.ratings){var o=this.book.ratings?" <small>("+this.book.ratings+")</small>":"";return this.book[t]+o}return this.notAvailable;case"ratings":if(this.book.rating){var n=this.book.rating?" <small>("+this.book.rating+")</small>":"";return this.book[t]+n}return this.notAvailable;case"progress":var a=this.progressbarWidth(this.book);return this.progress(this.book)+'<div class="progress-bar"><div style="width: '+a.width+';"></div></div>';case"title":return this.book.titleShort||this.book.title||this.notAvailable;case"series":return this.book.series?_.map(this.book.series,"name").join(", "):this.notAvailable;case"categories":return this.book.categories?this.book.categories[0].name:this.notAvailable;case"isbn10":case"isbn13":if(!this.book.isbns)return this.notAvailable;if("isbn10"===t){var h=_.find(this.book.isbns,["type","ISBN_10"]);if(h)return h.identifier}else{if("isbn13"!==t)return this.notAvailable;var l=_.find(this.book.isbns,["type","ISBN_13"]);if(l)return l.identifier}break;case"narratorsNumber":return this.book.narrators?this.book.narrators.length:this.notAvailable;default:return this.book[t]?this.book[t]:this.notAvailable}},progress:function(t){if(t.progress&&t.length){if("finished"===t.progress.toLowerCase().trim()){var s=this.timeStringToSeconds(t.length);return"<div>Finished ( "+this.secondsToTimeString(s,!0)+" )</div>"}var r=this.timeStringToSeconds(t.progress),e=this.timeStringToSeconds(t.length),i=e-r;return this.secondsToTimeString(i,!0)+" / "+this.secondsToTimeString(e,!0)}return t.progress?"<div>"+t.progress+" ("+this.notAvailable+")</div>":t.length?"<div>Length: "+t.length+"</div>":"<div>"+t.progress+"</div>"}}},a=(0,r(810).Z)(n,(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"sort-values-container"},["favorite"!==t.$store.getters.sortBy?r("div",{class:"sort-"+t.$store.getters.sortBy,domProps:{innerHTML:t._s(t.sortContents())}}):r("div",{class:"sort-"+t.$store.getters.sortBy},[t.book.favorite?r("font-awesome",{attrs:{icon:["fas","heart"]}}):r("span",[t._v(" ")])],1)])}),[],!1,null,null,null).exports}}]);