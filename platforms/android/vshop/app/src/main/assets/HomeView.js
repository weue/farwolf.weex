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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _HomeView = __webpack_require__(1);

var _HomeView2 = _interopRequireDefault(_HomeView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import mixins from './mixins.js'
// import router from './router/router.js'
Vue.prototype.$stream = weex.requireModule('stream');
Vue.prototype.$modal = weex.requireModule('modal');
Vue.prototype.$dom = weex.requireModule('dom');
Vue.prototype.$storage = weex.requireModule('storage');

// Vue.mixin(mixins)// register global mixins.设置全局
// import './components'

new Vue({
  el: '#root',
  // router,
  render: function render(h) {
    return h(_HomeView2.default);
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(3)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(4)
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
__vue_options__.__file = "C:\\Users\\MA\\Desktop\\weexjs\\src\\views\\HomeView.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-47c99bcf"
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
/* 2 */
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

var modal = weex.requireModule('modal');
var LOADMORE_COUNT = 4;
var globalEvent = weex.requireModule('globalEvent');

exports.default = {
  data: function data() {
    return {
      lists: [1, 2, 3, 4]
    };
  },

  created: function created() {
    var self = this;
    globalEvent.addEventListener("onPageInit", function (e) {
      var nav = weex.requireModule('navbar');
      //设置top标题
//      nav.setTitle('我的蜂场');
//      nav.setBackgroundColor('#4CAF50');
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
      navigator.setPageId('home');
    });
  },
  methods: {
    fetch: function fetch(event) {
      var _this = this;

      modal.toast({ message: 'loadmore', duration: 1 });

      setTimeout(function () {
        var length = _this.lists.length;
        for (var i = length; i < length + LOADMORE_COUNT; ++i) {
          _this.lists.push(i + 1);
        }
      }, 800);
    },
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
/* 3 */
/***/ (function(module, exports) {

module.exports = {
  "list": {
    "width": 750,
    "height": 100,
    "flex": 1
  },
  "panel": {
    "width": 600,
    "height": 250,
    "marginLeft": 75,
    "marginTop": 35,
    "marginBottom": 35,
    "flexDirection": "column",
    "justifyContent": "center",
    "borderWidth": 2,
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "rgba(162,217,192,0.2)"
  },
  "text": {
    "fontSize": 50,
    "textAlign": "center",
    "color": "#41B883"
  },
  "overlay": {
    "width": 750,
    "height": 2000,
    "position": "fixed",
    "right": 0,
    "top": 90,
    "opacity": 0,
    "backgroundColor": "#8A2BE2"
  },
  "menu": {
    "borderRadius": 5,
    "position": "fixed",
    "right": 15,
    "top": 105,
    "backgroundColor": "#4CAF50",
    "alignItems": "center"
  },
  "menusj": {
    "position": "fixed",
    "right": 22,
    "top": 85,
    "color": "#4CAF50",
    "fontSize": 30
  },
  "menutext1": {
    "paddingTop": 20,
    "paddingBottom": 20,
    "paddingLeft": 20,
    "paddingRight": 20,
    "color": "#FFFFFF",
    "fontSize": 32
  },
  "menutext": {
    "paddingTop": 20,
    "paddingBottom": 20,
    "paddingLeft": 20,
    "paddingRight": 20,
    "borderTopStyle": "dashed",
    "borderTopWidth": 2,
    "borderTopColor": "#dddddd",
    "color": "#FFFFFF",
    "fontSize": 32
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('list', {
    staticClass: ["list"],
    attrs: {
      "loadmoreoffset": "10"
    },
    on: {
      "loadmore": _vm.fetch
    }
  }, _vm._l((_vm.lists), function(num) {
    return _c('cell', {
      staticClass: ["cell"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["panel"]
    }, [_c('text', {
      staticClass: ["text"]
    }, [_vm._v(_vm._s(num))])])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);