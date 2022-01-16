(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{452:function(t,a,s){"use strict";s.r(a);var n=s(29),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"minimap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#minimap"}},[t._v("#")]),t._v(" MiniMap")]),t._v(" "),s("h2",{attrs:{id:"启用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启用"}},[t._v("#")]),t._v(" 启用")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" LogicFlow "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@logicflow/core'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" MiniMap "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@logicflow/extension'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@logicflow/extension/lib/style/index.css'")]),t._v("\n\nLogicFlow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MiniMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"显示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#显示"}},[t._v("#")]),t._v(" 显示")]),t._v(" "),s("p",[t._v("引入 mini-map 后默认不展示，需要手动开启显示。")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[t._v("MiniMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("leftPosition"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" topPosition"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("code",[t._v("show()")]),t._v(" 支持传入样式属性 left 和 top 的值，用来确定 mini-map 在画布中的位置。")]),t._v(" "),s("p",[t._v("只提供 left 和 top 这两个值是因为可以与"),s("code",[t._v("lf.getPointByClient")]),t._v(" API 配合使用，如果想实现更加灵活的样式，可以直接通过类名设置样式。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("lf-mini-map")]),t._v(" - mini-map 根元素")]),t._v(" "),s("li",[s("code",[t._v("lf-mini-map-header")]),t._v(" - mini-map 头部元素")]),t._v(" "),s("li",[s("code",[t._v("lf-mini-map-graph")]),t._v(" - mini-map 画布元素")]),t._v(" "),s("li",[s("code",[t._v("lf-mini-map-close")]),t._v(" - mini-map 关闭图标元素")])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("MiniMap.show()")]),t._v("必须在"),s("code",[t._v("lf.render()")]),t._v("后调用。")])]),t._v(" "),s("h2",{attrs:{id:"隐藏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#隐藏"}},[t._v("#")]),t._v(" 隐藏")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[t._v("MiniMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hide")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"禁用插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#禁用插件"}},[t._v("#")]),t._v(" 禁用插件")]),t._v(" "),s("p",[t._v("MiniMap和正常的画布共享LogicFlow，可以在MiniMap中不显示某些插件，例如不显示工具栏。")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[t._v("MiniMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  disabledPlugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Control"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Snapshot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SelectionSelect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("example",{attrs:{href:"/examples/#/extension/components/mini-map",height:350}})],1)])}),[],!1,null,null,null);a.default=e.exports}}]);