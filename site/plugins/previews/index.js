(function () {var a={props:{value:[Object,String]},computed:{locationString:function(){return(this.value.number?this.value.number+" ":"")+(this.value.address?this.value.address+", ":"")+(this.value.postcode?this.value.postcode+" ":"")+(this.value.city?this.value.city+", ":"")+(this.value.country?this.value.country:"")},latLonString:function(){if(this.value.lat&&this.value.lon){var t="string"==typeof this.value.lat?parseFloat(this.value.lat):this.value.lat;t=t.toFixed(5);var a="string"==typeof this.value.lon?parseFloat(this.value.lon):this.value.lon;return t+", "+(a=a.toFixed(5))}return!1},location:function(){return""!=this.locationString?this.locationString:this.latLonString?"<span class=\"locator-latlon-preview\">"+this.latLonString+"</span>":""}}};if(typeof a==="function"){a=a.options}Object.assign(a,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"k-locator-field-preview"},[_c("figure",{staticClass:"locator-preview"},[_c("k-icon",{staticClass:"k-pages-field-preview-image",attrs:{"type":"marker","back":"pattern"}}),_vm._v(" "),_c("figcaption",{domProps:{"innerHTML":_vm._s(_vm.location)}})],1)])};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:null,functional:undefined}}());var b={props:{value:String}};if(typeof b==="function"){b=b.options}Object.assign(b,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"k-color-field-preview"},[_c("div",{staticClass:"color-preview",style:"background-color:"+_vm.value})])};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:null,functional:undefined}}());var c={props:{value:String}};if(typeof c==="function"){c=c.options}Object.assign(c,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"k-colors-field-preview"},[_c("div",{staticClass:"color-preview",style:"background-color:"+_vm.value})])};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:null,functional:undefined}}());function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var d={props:{value:String},computed:{convertedValue:function(){var t=this;return null!==this.value&&"object"==h(this.value)?Object.keys(this.value).map(function(e){return t.value[e]}):[this.value]}}};if(typeof d==="function"){d=d.options}Object.assign(d,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"k-color-palette-field-preview"},_vm._l(_vm.convertedValue,function(color){return _c("div",{staticClass:"color-preview",style:"background-color:"+color})}),0)};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:null,functional:undefined}}());var e={props:{value:String},computed:{entriesCount:function(){return Object.keys(this.value).length},entriesString:function(){return this.entriesCount>0?this.entriesCount+this.entryString(this.entriesCount):""}},methods:{entryString:function(t){return 1==t?" entry":" entries"}}};if(typeof e==="function"){e=e.options}Object.assign(e,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"k-structure-field-preview"},[_c("div",{staticClass:"structure-entries-preview"},[_vm._v(_vm._s(_vm.entriesString))])])};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:null,functional:undefined}}());var f={props:{value:[Array,Object,String]}};if(typeof f==="function"){f=f.options}Object.assign(f,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"k-tags-field-preview",attrs:{"value":_vm.value}},[_c("div",{staticClass:"tags-preview"},_vm._l(_vm.value,function(tag){return _c("div",{staticClass:"tag"},[_vm._v(_vm._s(tag.text))])}),0)])};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:null,functional:undefined}}());var g={props:{value:[Array,Object,String]}};if(typeof g==="function"){g=g.options}Object.assign(g,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"k-multiselect-field-preview"},[_c("div",{staticClass:"multiselect-entries"},_vm._l(_vm.value,function(entry){return _c("span",{staticClass:"multiselect-entry"},[_vm._v(_vm._s(entry.text))])}),0)])};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:null,functional:undefined}}());document.querySelector("svg defs").innerHTML+="\n    <symbol id=\"icon-marker\" viewbox=\"0 0 64 64\">\n        <circle cx=\"32\" cy=\"27.98\" r=\"7.99\"/>\n\t\t<path d=\"M29.2,62.75c-.4-.4-16.79-14.79-16.79-15.19C6.82,42.76,4,35.57,4,28A27.8,27.8,0,0,1,32,0,27.8,27.8,0,0,1,60,28a26.86,26.86,0,0,1-8.39,20c-.4.4-16.39,14.79-16.79,15.19A4.28,4.28,0,0,1,29.2,62.75Zm-10.79-20L32,54.75l13.59-12h0c4-4,6.39-8.79,6.39-14.39a19.79,19.79,0,0,0-20-20C20.81,8.39,12,16.79,12,28a20.91,20.91,0,0,0,6.39,14.79Z\"/>\n    </symbol>\n";panel.plugin("sylvainjule/previews",{components:{"k-locator-field-preview":a,"k-color-field-preview":b,"k-colors-field-preview":c,"k-color-palette-field-preview":d,"k-structure-field-preview":e,"k-tags-field-preview":f,"k-multiselect-field-preview":g}});})();