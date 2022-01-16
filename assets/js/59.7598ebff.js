(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{463:function(t,e,i){"use strict";i.r(e);var a=i(29),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"_0-3-0"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_0-3-0"}},[t._v("#")]),t._v(" 0.3.0")]),t._v(" "),i("h2",{attrs:{id:"功能"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[t._v("#")]),t._v(" 功能")]),t._v(" "),i("h3",{attrs:{id:"logicflow-core"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#logicflow-core"}},[t._v("#")]),t._v(" @logicflow/core")]),t._v(" "),i("ul",[i("li",[t._v("支持 mini-map 能力")]),t._v(" "),i("li",[t._v("支持框选能力")]),t._v(" "),i("li",[t._v("支持动态修改画布的"),i("RouterLink",{attrs:{to:"/api/logicFlowApi.html#updateeditconfig"}},[t._v("编辑类配置")])],1),t._v(" "),i("li",[t._v("支持设置节点的"),i("RouterLink",{attrs:{to:"/guide/advance/customNode.html#设置锚点的数量和位置"}},[t._v("锚点数量和位置")])],1),t._v(" "),i("li",[t._v("支持设置边文本背景的 hover 样式 - "),i("RouterLink",{attrs:{to:"/guide/advance/theme.html#边文本"}},[t._v("hoverBackground")])],1),t._v(" "),i("li",[t._v("支持设置边的虚线样式 - "),i("RouterLink",{attrs:{to:"/guide/advance/theme.html#直线"}},[t._v("strokeDashArray")])],1),t._v(" "),i("li",[t._v("新增节点和画布的拖拽相关事件")]),t._v(" "),i("li",[t._v("优化自定义元素的开发体验")])]),t._v(" "),i("h3",{attrs:{id:"logicflow-extension"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#logicflow-extension"}},[t._v("#")]),t._v(" @logicflow/extension")]),t._v(" "),i("ul",[i("li",[t._v("新增 "),i("RouterLink",{attrs:{to:"/guide/extension/component-minimap.html"}},[t._v("mini-map 组件")])],1),t._v(" "),i("li",[t._v("新增"),i("RouterLink",{attrs:{to:"/guide/extension/component-selection.html"}},[t._v("框选组件")])],1),t._v(" "),i("li",[t._v("新增 Turbo 数据转换器")])]),t._v(" "),i("h2",{attrs:{id:"api"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),i("h3",{attrs:{id:"新增"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#新增"}},[t._v("#")]),t._v(" 新增")]),t._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/api/logicFlowApi.html#updateeditconfig"}},[t._v("updateEditConfig")]),t._v(" - 更新画布的编辑类配置")],1),t._v(" "),i("li",[i("RouterLink",{attrs:{to:"/api/logicFlowApi.html#geteditconfig"}},[t._v("getEditConfig")]),t._v(" - 获取画布的编辑类配置")],1),t._v(" "),i("li",[i("RouterLink",{attrs:{to:"/api/logicFlowApi.html#getselectelements"}},[t._v("getSelectElements")]),t._v(" - 获取选中的所有元素")],1),t._v(" "),i("li",[i("RouterLink",{attrs:{to:"/api/logicFlowApi.html#clearselectelements"}},[t._v("clearSelectElements")]),t._v(" - 取消所有元素的选中状态")],1),t._v(" "),i("li",[i("RouterLink",{attrs:{to:"/api/logicFlowApi.html#updatetext"}},[t._v("updateText")]),t._v(" - 更新元素的文本内容")],1),t._v(" "),i("li",[i("RouterLink",{attrs:{to:"/api/customNodeApi.html#model"}},[t._v("setAttributes")]),t._v(" - 设置元素 Model 中的数据")],1),t._v(" "),i("li",[i("RouterLink",{attrs:{to:"/api/nodeApi.html#附加属性"}},[t._v("anchorsOffset")]),t._v(" - 元素锚点相对于元素中心的偏移量")],1),t._v(" "),i("li",[i("RouterLink",{attrs:{to:"/api/nodeApi.html#附加属性"}},[t._v("sourceRules")]),t._v(" - 边时，元素作为起始节点的校验规则")],1),t._v(" "),i("li",[i("RouterLink",{attrs:{to:"/api/nodeApi.html#附加属性"}},[t._v("targetRules")]),t._v(" - 边时，元素作为目标节点的校验规则")],1)]),t._v(" "),i("h3",{attrs:{id:"变更"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#变更"}},[t._v("#")]),t._v(" 变更")]),t._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/api/logicFlowApi.html#focuson"}},[t._v("focusOn")]),t._v(" - 删除 type 参数，LogicFlow 可以直接通过 id 区分元素类型")],1)]),t._v(" "),i("h3",{attrs:{id:"兼容性"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#兼容性"}},[t._v("#")]),t._v(" 兼容性")]),t._v(" "),i("p",[t._v("无")]),t._v(" "),i("h2",{attrs:{id:"bug"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#bug"}},[t._v("#")]),t._v(" Bug")]),t._v(" "),i("ul",[i("li",[t._v("修复当 textEdit 为 false 时，不能触发双击事件的问题")]),t._v(" "),i("li",[t._v("修复节点被选中时，画布容器出现边框的问题")]),t._v(" "),i("li",[t._v("修复"),i("code",[t._v("ctrl+v")]),t._v("不能触发 beforeClone guard 的问题")]),t._v(" "),i("li",[t._v("修复 extension 重复加载的问题")]),t._v(" "),i("li",[t._v("修复 vue2 的兼容性问题")])]),t._v(" "),i("h2",{attrs:{id:"文档"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#文档"}},[t._v("#")]),t._v(" 文档")]),t._v(" "),i("ul",[i("li",[t._v("规范节点和边的自定义方式，"),i("RouterLink",{attrs:{to:"/guide/advance/customNode.html"}},[t._v("点击")]),t._v("查看详情")],1),t._v(" "),i("li",[t._v("修改若干错误")])]),t._v(" "),i("h2",{attrs:{id:"致谢"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#致谢"}},[t._v("#")]),t._v(" 致谢")]),t._v(" "),i("p",[t._v("感谢为"),i("code",[t._v("LogicFlow docs")]),t._v("做出贡献的同学：")]),t._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://github.com/Serendipity96",target:"_blank",rel:"noopener noreferrer"}},[t._v("@Serendipity96(Serendipity96)"),i("OutboundLink")],1)]),t._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/juzhiyuan",target:"_blank",rel:"noopener noreferrer"}},[t._v("@juzhiyuan(琚致远)"),i("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=o.exports}}]);