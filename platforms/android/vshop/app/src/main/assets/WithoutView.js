// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _WithoutView = __webpack_require__(4);

var _WithoutView2 = _interopRequireDefault(_WithoutView);

__webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import App from './login.vue'
// import mixins from './mixins.js'
// import router from './router/router.js'
Vue.prototype.$stream = weex.requireModule('stream');
Vue.prototype.$modal = weex.requireModule('modal');
Vue.prototype.$dom = weex.requireModule('dom');
Vue.prototype.$storage = weex.requireModule('storage');

// Vue.mixin(mixins)// register global mixins.设置全局


new Vue({
  el: '#root',
  // router,
  render: function render(h) {
    return h(_WithoutView2.default);
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CellGroup = __webpack_require__(3);

var _CellGroup2 = _interopRequireDefault(_CellGroup);

var _Cell = __webpack_require__(2);

var _Cell2 = _interopRequireDefault(_Cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Vue.component(UH1.name, UH1)
// Vue.component(UH2.name, UH2)
// Vue.component(UH4.name, UH4)
// Vue.component(UH3.name, UH3)
// Vue.component(UH5.name, UH5)
// Vue.component(UH6.name, UH6)
// Vue.component(UH7.name, UH7)
// Vue.component(UHeader.name, UHeader)
// Vue.component(UButton.name, UButton)
// Vue.component(URadio.name, URadio)
// Vue.component(UCheckbox.name, UCheckbox)
// import UH1 from './packages/text/H2.vue'
// import UH3 from './packages/text/H3.vue'
// import UH4 from './packages/text/H4.vue'
// import UH5 from './packages/text/H5.vue'
// import UH6 from './packages/text/H6.vue'
// import UH7 from './packages/text/H7.vue'
// import UHeader from './packages/header/Header.vue'
// import UButton from './packages/button/Button.vue'
// import URadio from './packages/form/Radio.vue'
// import UCheckbox from './packages/form/Checkbox.vue'
Vue.component(_CellGroup2.default.name, _CellGroup2.default);
Vue.component(_Cell2.default.name, _Cell2.default);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(10)
)

/* script */
__vue_exports__ = __webpack_require__(5)

/* template */
var __vue_template__ = __webpack_require__(13)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\MA\\Desktop\\weexjs\\src\\packages\\layout\\Cell.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5b0f9322"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(8)
)

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(11)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\MA\\Desktop\\weexjs\\src\\packages\\layout\\CellGroup.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-080c572d"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(9)
)

/* script */
__vue_exports__ = __webpack_require__(7)

/* template */
var __vue_template__ = __webpack_require__(12)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\MA\\Desktop\\weexjs\\src\\views\\WithoutView.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1cdc189c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'u-cell',
  props: {
    text: String,
    value: {
      type: [String, Number, Boolean],
      default: ''
    },
    showArrow: {
      type: Boolean,
      default: false
    }
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'u-cell-group',
  props: {
    title: String
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//

var globalEvent = weex.requireModule('globalEvent');

exports.default = {
  data: function data() {
    return {};
  },

  created: function created() {
    var self = this;
    globalEvent.addEventListener("onPageInit", function (e) {
      var nav = weex.requireModule('navbar');
      //设置top标题
//      nav.setTitle('我的蜂场');
      //设置top左边返回按钮
      //nav.setBack(true);
      //设置右边菜单按钮和事件
      // nav.setRightText('添加',function(res){
      //     modal.alert({message:"ok"})
      // })
      nav.setRightImage('img/add.png', function (res) {
        self.present();
      });
      var navigator = weex.requireModule('navigator');
      // self.param=navigator.param().a;
      navigator.setPageId('without');
    });
  },
  methods: {
    present: function present() {
      var self = this;
      var nav = weex.requireModule('navigator');
      nav.presentFull('http://192.168.1.100:2222/app.weex.js', { a: 'okoko' }, true, function (e) {
        self.callbackdata = e.ok;
      }, true);
    }
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {
  "cell-group": {
    "backgroundColor": "#ffffff"
  },
  "header": {
    "paddingTop": 16,
    "paddingBottom": 16,
    "paddingLeft": 20,
    "paddingRight": 20,
    "backgroundColor": "#f9fafc"
  },
  "title": {
    "color": "#98a4b3",
    "fontSize": 28
  },
  "text": {
    "color": "#233040"
  }
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {
  "v-cells": {
    "width": 750
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {
  "cell": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "paddingTop": 32,
    "paddingBottom": 32,
    "paddingLeft": 20,
    "paddingRight": 20,
    "backgroundColor": "#ffffff",
    "borderBottomStyle": "solid",
    "borderBottomWidth": 1,
    "borderBottomColor": "#e6ecf2"
  },
  "left": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "right": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "text": {
    "color": "#233040",
    "fontSize": 32
  },
  "value": {
    "marginRight": 20,
    "color": "#667180",
    "fontSize": 32
  },
  "arrow": {
    "width": 20,
    "height": 20,
    "marginTop": 0,
    "marginRight": 10,
    "borderRightStyle": "solid",
    "borderRightWidth": 2,
    "borderRightColor": "#667180",
    "borderBottomStyle": "solid",
    "borderBottomWidth": 2,
    "borderBottomColor": "#667180",
    "transform": "rotate(-45deg)"
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["cell-group"]
  }, [_c('div', {
    staticClass: ["header"]
  }, [(!_vm.$slots.left && _vm.title) ? _c('text', {
    staticClass: ["title"]
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._t("left"), _vm._t("right")], 2), _vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: ["v-cells"]
  }, [_c('u-cell-group', {
    attrs: {
      "title": "蜂蜜采收及贮运信息"
    }
  }, [_c('u-cell', {
    attrs: {
      "text": "北京",
      "value": "2017-06-03",
      "showArrow": ""
    }
  }), _c('u-cell', {
    attrs: {
      "text": "河北",
      "value": "2017-03-01",
      "showArrow": ""
    }
  })], 1)], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["cell"]
  }, [_c('div', {
    staticClass: ["left"]
  }, [_vm._t("icon"), _c('text', {
    staticClass: ["text"],
    style: [_vm.$slots.icon ? {
      'margin-left': '20px'
    } : {}]
  }, [_vm._v(_vm._s(_vm.text))])], 2), _c('div', {
    staticClass: ["right"]
  }, [_c('text', {
    staticClass: ["value"],
    style: [_vm.$slots.right ? {
      'margin-right': '20px'
    } : {}]
  }, [_vm._v(_vm._s(_vm.value))]), _vm._t("right"), (_vm.showArrow) ? _c('div', {
    staticClass: ["arrow"]
  }) : _vm._e()], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);