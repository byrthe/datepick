(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2,3],{275:function(e,t,n){var content=n(279);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(37).default)("5f55f12c",content,!0,{sourceMap:!1})},276:function(e,t,n){"use strict";n.r(t);var l={data:function(){return{showWeekNumber:!1,enableSeconds:!1,submitdate:null}},computed:{datetime:{get:function(){return this.$store.state.datetime},set:function(e){this.$store.commit("updateDate",e)}}},methods:{}},c=n(46),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",[n("b-datetimepicker",{attrs:{inline:"",rounded:"",placeholder:"Click to select...",datepicker:{showWeekNumber:e.showWeekNumber},timepicker:{enableSeconds:e.enableSeconds},"horizontal-time-picker":""},model:{value:e.datetime,callback:function(t){e.datetime=t},expression:"datetime"}})],1)])}),[],!1,null,null,null);t.default=component.exports},277:function(e,t,n){"use strict";n.r(t);n(23);var l={computed:{name:{get:function(){return this.$store.state.name},set:function(e){this.$store.commit("updateName",e)}},email:{get:function(){return this.$store.state.email},set:function(e){this.$store.commit("updateEmail",e)}}}},c=(n(278),n(46)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"columns is-centered test"},[n("div",{staticClass:"column"},[n("b-field",[n("b-input",{staticClass:"inputfield",attrs:{placeholder:"Your Name",type:"name","icon-pack":"fas",icon:"signature"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),n("b-field",[n("b-input",{staticClass:"inputfield",attrs:{placeholder:"Email",type:"email","icon-pack":"fas",icon:"at"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1)])}),[],!1,null,null,null);t.default=component.exports},278:function(e,t,n){"use strict";n(275)},279:function(e,t,n){var l=n(36)(!1);l.push([e.i,".inputfield{max-width:400px;margin:auto}",""]),e.exports=l},290:function(e,t,n){"use strict";n.r(t);var l=n(276),c=n(277),o={name:"HomePage",components:{Calendar:l.default,Credentials:c.default},data:function(){return{isActive:!0}},methods:{show:function(){this.isActive=!this.isActive}}},r=n(46),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"columns is-centered"},[n("div",{staticClass:"column is-7"},[n("h1",[e._v("Try out")]),e._v(" "),n("b-button",{class:{active:e.isActive},on:{click:e.show}},[e._v("Calendar")]),e._v(" "),n("b-button",{class:{active:e.isActive},on:{click:e.show}},[e._v("Name + Email")]),e._v(" "),n("div",{staticStyle:{border:"1px solid grey",width:"600px",height:"600px"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}]},[n("Calendar")],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isActive,expression:"!isActive"}]},[n("Credentials")],1)])],1)])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Calendar:n(276).default,Credentials:n(277).default})}}]);