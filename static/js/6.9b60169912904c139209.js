webpackJsonp([6],{Quw4:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("gyMJ"),i={data:function(){return{username:"araxi",password:"araxi",islogined:!1,loginfailed:!1,sessionToken:""}},watch:{},methods:{login:function(){var s=this;Object(a.f)(s.username,s.password,function(t){t&&(s.islogined=!0,s.sessionToken=t.sessionToken,s.$router.push({path:"/admin/dashboard"}))})}},components:{},mounted:function(){}},n={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("section",{staticClass:"hero is-fullheight is-medium is-bold"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns is-centered"},[e("div",{staticClass:"column is-4"},[e("article",{staticClass:"card is-rounded"},[e("div",{staticClass:"card-content"},[s._m(0),s._v(" "),e("div",{staticClass:"field"},[e("p",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.username,expression:"username"}],staticClass:"input",attrs:{type:"email",placeholder:"Email"},domProps:{value:s.username},on:{input:function(t){t.target.composing||(s.username=t.target.value)}}}),s._v(" "),e("i",{staticClass:"fa fa-envelope"})])]),s._v(" "),e("div",{staticClass:"field"},[e("p",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:s.password},on:{input:function(t){t.target.composing||(s.password=t.target.value)}}}),s._v(" "),e("i",{staticClass:"fa fa-lock"})])]),s._v(" "),s._m(1),s._v(" "),e("div",{staticClass:"field"},[e("p",{staticClass:"control"},[e("button",{staticClass:"button is-primary is-medium is-fullwidth",on:{click:s.login}},[e("i",{staticClass:"fa fa-user"}),s._v("\n                      登录\n                    ")]),s.loginfailed?e("span",[s._v("登录失败")]):s._e()])])])])])])])])])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{staticClass:"title"},[t("img",{attrs:{src:"https://placeholdit.imgix.net/~text?txtsize=13&txt=150%C3%9750&w=150&h=50",alt:"logo",width:"200"}})])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"field"},[t("p",{staticClass:"control"},[t("label",{staticClass:"checkbox"},[t("input",{attrs:{type:"checkbox"}}),this._v("\n                      记住我\n                    ")])])])}]},l=e("VU/8")(i,n,!1,null,null,null);t.default=l.exports}});
//# sourceMappingURL=6.9b60169912904c139209.js.map