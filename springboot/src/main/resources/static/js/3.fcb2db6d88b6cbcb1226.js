webpackJsonp([3],{Cdx3:function(t,s,a){var e=a("sB3e"),i=a("lktj");a("uqUo")("keys",function(){return function(t){return i(e(t))}})},dPZ7:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("fZjL"),i=a.n(e),o=a("Dd8w"),n=a.n(o),c={data:function(){return{dialogVisible:!1,activeName:"0",topicCount:[],score:[],examData:{},topic:{}}},mounted:function(){this.init()},methods:{init:function(){var t=this,s=this.$route.query.examCode;this.$axios("/api/exam/"+s).then(function(s){s.data.data.examDate=s.data.data.examDate.substr(0,10),t.examData=n()({},s.data.data);var a=t.examData.paperId;t.$axios("/api/paper/"+a).then(function(s){t.topic=n()({},s.data),i()(t.topic).forEach(function(s){var a=t.topic[s];t.topicCount.push(a.length);for(var e=0,i=0;i<a.length;i++)e+=a[i].score;t.score.push(e)})})})},toAnswer:function(t){this.$router.push({path:"/answer",query:{examCode:t}})}}},l={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"msg"}},[a("div",{staticClass:"title"},[a("span",[t._v("试卷列表")]),t._v(" "),a("span",[t._v("/  "+t._s(t.examData.source))])]),t._v(" "),a("div",{staticClass:"wrapper"},[a("ul",{staticClass:"top"},[a("li",{staticClass:"example"},[t._v(t._s(t.examData.source))]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),a("li",{staticClass:"right"},[a("div",[a("span",{staticClass:"count"},[t._v("总分")]),t._v(" "),a("span",{staticClass:"score"},[t._v(t._s(t.score[0]+t.score[1]+t.score[2]))])])])]),t._v(" "),a("ul",{staticClass:"bottom"},[a("li",[t._v("更新于"+t._s(t.examData.examDate))]),t._v(" "),a("li",[t._v("来自 "+t._s(t.examData.institute))]),t._v(" "),a("li",{staticClass:"btn"},[t._v(t._s(t.examData.type))]),t._v(" "),a("li",{staticClass:"right"},[a("el-button",{on:{click:function(s){t.toAnswer(t.examData.examCode)}}},[t._v("开始答题")])],1)]),t._v(" "),a("ul",{staticClass:"info"},[a("li",{on:{click:function(s){t.dialogVisible=!0}}},[t._m(2)])])]),t._v(" "),a("div",{staticClass:"content"},[a("el-collapse",{model:{value:t.activeName,callback:function(s){t.activeName=s},expression:"activeName"}},[a("el-collapse-item",{staticClass:"header",attrs:{name:"0"}},[a("template",{staticClass:"stitle",slot:"title"},[a("div",{staticClass:"title"},[a("span",[t._v(t._s(t.examData.source))]),a("i",{staticClass:"header-icon el-icon-info"}),t._v(" "),a("span",{staticClass:"time"},[t._v(t._s(t.examData.totalScore)+"分 / "+t._s(t.examData.totalTime)+"分钟")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small"}},[t._v("点击查看试题详情")])],1)]),t._v(" "),a("el-collapse",{staticClass:"inner"},[a("el-collapse-item",[a("template",{attrs:{name:"1"},slot:"title"},[a("div",{staticClass:"titlei"},[t._v("选择题 (共"+t._s(t.topicCount[0])+"题 共计"+t._s(t.score[0])+"分)")])]),t._v(" "),a("div",{staticClass:"contenti"},t._l(t.topic[1],function(s,e){return a("ul",{key:e,staticClass:"question"},[a("li",[t._v(t._s(e+1)+". "+t._s(s.question)+" "+t._s(s.score)+"分")])])}),0)],2),t._v(" "),a("el-collapse-item",[a("template",{attrs:{name:"2"},slot:"title"},[a("div",{staticClass:"titlei"},[t._v("填空题 (共"+t._s(t.topicCount[1])+"题  共计"+t._s(t.score[1])+"分)")])]),t._v(" "),a("div",{staticClass:"contenti"},t._l(t.topic[2],function(s,e){return a("ul",{key:e,staticClass:"question"},[a("li",[t._v(t._s(t.topicCount[0]+e+1)+"."+t._s(s.question)+"  "+t._s(s.score)+"分")])])}),0)],2),t._v(" "),a("el-collapse-item",[a("template",{attrs:{name:"3"},slot:"title"},[a("div",{staticClass:"titlei"},[t._v("判断题 (共"+t._s(t.topicCount[2])+"题 共计"+t._s(t.score[2])+"分)")])]),t._v(" "),a("div",{staticClass:"contenti"},t._l(t.topic[3],function(s,e){return a("ul",{key:e,staticClass:"question"},[a("li",[t._v(t._s(t.topicCount[0]+t.topicCount[1]+e+1)+". "+t._s(s.question)+" "+t._s(s.score)+"分")])])}),0)],2)],1)],2)],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"考生须知",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(s){t.dialogVisible=s}}},[a("span",[t._v(t._s(t.examData.tips))]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(s){t.dialogVisible=!1}}},[t._v("知道了")])],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("i",{staticClass:"iconfont icon-pen-"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("i",{staticClass:"iconfont icon-share"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{attrs:{href:"javascript:;"}},[s("i",{staticClass:"iconfont icon-info"}),this._v("考生须知")])}]};var r=a("VU/8")(c,l,!1,function(t){a("kpO0")},"data-v-85c61bec",null);s.default=r.exports},fZjL:function(t,s,a){t.exports={default:a("jFbC"),__esModule:!0}},jFbC:function(t,s,a){a("Cdx3"),t.exports=a("FeBl").Object.keys},kpO0:function(t,s){},uqUo:function(t,s,a){var e=a("kM2E"),i=a("FeBl"),o=a("S82l");t.exports=function(t,s){var a=(i.Object||{})[t]||Object[t],n={};n[t]=s(a),e(e.S+e.F*o(function(){a(1)}),"Object",n)}}});
//# sourceMappingURL=3.fcb2db6d88b6cbcb1226.js.map