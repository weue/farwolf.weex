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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _FixedbeeView = __webpack_require__(6);

var _FixedbeeView2 = _interopRequireDefault(_FixedbeeView);

__webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    return h(_FixedbeeView2.default);
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Button = __webpack_require__(3);

var _Button2 = _interopRequireDefault(_Button);

var _Radio = __webpack_require__(5);

var _Radio2 = _interopRequireDefault(_Radio);

var _Checkbox = __webpack_require__(4);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import UCellGroup from './packages/layout/CellGroup.vue'
// import UCell from './packages/layout/Cell.vue'

// Vue.component(UH1.name, UH1)
// Vue.component(UH2.name, UH2)
// Vue.component(UH4.name, UH4)
// Vue.component(UH3.name, UH3)
// Vue.component(UH5.name, UH5)
// Vue.component(UH6.name, UH6)
// Vue.component(UH7.name, UH7)
// Vue.component(UHeader.name, UHeader)
Vue.component(_Button2.default.name, _Button2.default); // import UH1 from './packages/text/H2.vue'
// import UH3 from './packages/text/H3.vue'
// import UH4 from './packages/text/H4.vue'
// import UH5 from './packages/text/H5.vue'
// import UH6 from './packages/text/H6.vue'
// import UH7 from './packages/text/H7.vue'
// import UHeader from './packages/header/Header.vue'

Vue.component(_Radio2.default.name, _Radio2.default);
Vue.component(_Checkbox2.default.name, _Checkbox2.default);
// Vue.component(UCellGroup.name, UCellGroup)
// Vue.component(UCell.name, UCell)

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// weex不能使用本地图片
var DEFAULT_SOURCES = {
  input: {
    name: '1号蜂场',
    number: '001',
    principal: '张三',
    idnumber: '110210198010105678',
    telphone: '13600110011',
    address: '北京市海淀区',
    bpnum: '8',
    YearRoute: '北京--山东--广西--河北'
  },
  radios: {
    BeeNum: {
      title: '蜂场规模(群)',
      type: 'radios',
      checked: '1',
      options: [{
        val: '0',
        msg: '50-80'
      }, {
        val: '1',
        msg: '80-120'
      }, {
        val: '2',
        msg: '>120'
      }]
    },
    IsFixed: {
      title: '蜂场是否转地',
      type: 'radios',
      checked: '0',
      options: [{
        val: '0',
        msg: '定地'
      }, {
        val: '1',
        msg: '转地'
      }]
    },
    IsCoOp: {
      title: '蜂场是否参加合作社或为企业的生产基地',
      type: 'radios',
      checked: '0',
      options: [{
        val: '0',
        msg: '是　'
      }, {
        val: '1',
        msg: '否　'
      }]
    },
    IsContract: {
      title: '是否签订相关购货合同',
      type: 'radios',
      checked: '0',
      options: [{
        val: '0',
        msg: '是　'
      }, {
        val: '1',
        msg: '否　'
      }]
    },
    IsHealth: {
      title: '蜂场工作人员是否有健康证',
      type: 'radios',
      checked: '0',
      options: [{
        val: '0',
        msg: '是　'
      }, {
        val: '1',
        msg: '否　'
      }]
    }

  },

  checkbox: {
    BeeSpecies: {
      title: '饲养蜂种',
      type: 'checkbox',
      checked: ['0', '1'],
      options: [{
        val: '0',
        msg: '意大利蜂'
      }, {
        val: '1',
        msg: '卡尼鄂拉蜂'
      }, {
        val: '2',
        msg: '高加索蜂'
      }, {
        val: '3',
        msg: '浙江浆蜂'
      }, {
        val: '4',
        msg: '本地意蜂'
      }, {
        val: '5',
        msg: '黑蜂'
      }, {
        val: '6',
        msg: '其它蜂种(请注明)'
      }]
    },
    BeeSource: {
      title: '蜂种来源',
      type: 'checkbox',
      checked: ['1', '2'],
      options: [{
        val: '0',
        msg: '购自种蜂场'
      }, {
        val: '1',
        msg: '来自邻近蜂场'
      }, {
        val: '2',
        msg: '自己繁育'
      }, {
        val: '3',
        msg: '其它(请注明)'
      }]
    }

  }

};

exports.DEFAULT_SOURCES = DEFAULT_SOURCES;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(13)
)

/* script */
__vue_exports__ = __webpack_require__(7)

/* template */
var __vue_template__ = __webpack_require__(17)
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
__vue_options__.__file = "C:\\Users\\MA\\Desktop\\weexjs\\src\\packages\\button\\Button.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-54c6442c"
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
__vue_styles__.push(__webpack_require__(14)
)

/* script */
__vue_exports__ = __webpack_require__(8)

/* template */
var __vue_template__ = __webpack_require__(18)
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
__vue_options__.__file = "C:\\Users\\MA\\Desktop\\weexjs\\src\\packages\\form\\Checkbox.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-f63281ae"
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

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(11)
)

/* script */
__vue_exports__ = __webpack_require__(9)

/* template */
var __vue_template__ = __webpack_require__(15)
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
__vue_options__.__file = "C:\\Users\\MA\\Desktop\\weexjs\\src\\packages\\form\\Radio.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-098a9985"
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(12)
)

/* script */
__vue_exports__ = __webpack_require__(10)

/* template */
var __vue_template__ = __webpack_require__(16)
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
__vue_options__.__file = "C:\\Users\\MA\\Desktop\\weexjs\\src\\views\\Home\\FixedbeeView.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-304c5135"
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

exports.default = {
  name: 'u-button',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'dark'
    },
    size: {
      type: String,
      default: 'normal'
    }
  }
};

/***/ }),
/* 8 */
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

exports.default = {
  name: 'u-checkbox',
  props: {
    value: [Array],
    val: [String, Number, Object, Array],
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    checked: function checked() {
      return this.value.indexOf(this.val) > -1;
    }
  },
  methods: {
    change: function change() {
      if (!this.disabled) {
        var copyed = this.value.slice();
        if (this.checked) {
          copyed.splice(this.value.indexOf(this.val), 1);
        } else {
          copyed.push(this.val);
        }
        this.$emit('input', copyed);
        this.$emit('change', copyed);
      }
    }
  }
};

/***/ }),
/* 9 */
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

var modal = weex.requireModule('modal');
exports.default = {
  name: 'u-radio',
  props: {
    value: [String, Number, Object],
    val: [String, Number, Object],
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    clz: function clz() {
      var result = [];
      // modal.toast({
      //   message: this.val + ',' + this.value,
      //   duration: 1
      // })
      var checked = this.val === this.value;
      if (checked) {
        result.push('checked');
      }
      if (this.disabled) {
        result.push(checked ? 'checked-disabled' : 'disabled');
      }
      return result;
    }
  },
  methods: {
    change: function change() {
      if (!this.disabled) {
        this.$emit('input', this.val);
        this.$emit('change', this.val);
      }
    }
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Fixedbee = __webpack_require__(2);

var globalEvent = weex.requireModule('globalEvent'); //
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
//
//
//
//
//


exports.default = {
  data: function data() {
    return {
      sources: _Fixedbee.DEFAULT_SOURCES
    };
  },
  created: function created() {
    var self = this;
    globalEvent.addEventListener("onPageInit", function (e) {
      var nav = weex.requireModule('navbar');
      //设置top标题
      nav.setTitle('蜂场基本信息');
      //设置top左边返回按钮
      nav.setBack(true);
//      nav.setBackgroundColor('#4CAF50');
      //设置右边菜单按钮和事件
      // nav.setRightText('添加',function(res){
      //     modal.alert({message:"ok"})
      // })
      // nav.setRightImage('./nearby.png',function(res){
      //     self.present()
      // });
      var navigator = weex.requireModule('navigator');
      // self.param=navigator.param().a;
      navigator.setPageId('fixedbee');
    });
  },

  methods: {
    test: function test() {
      var a = this.sources.radios.BeeNum.checked;
      var b = this.sources.radios.BeeNum.options[a].msg;
      console.log(b);

      var a = this.sources.checkbox.BeeSpecies.checked;
      console.log(a.length);
      var b = [];
      for (var i = 0; i < a.length; i++) {
        var c = 0;
        var c = this.sources.checkbox.BeeSpecies.options[i].msg;
        b.push(c);
      }
      console.log(b);
      console.log(this.sources.input.name);
    }
  },
  computed: {
    lines: function lines() {
      return {
        BeeSpecies: this.sources.checkbox.BeeSpecies.options.length / 2,
        BeeSource: this.sources.checkbox.BeeSource.options.length / 2
      };
    }
  }
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {
  "icon": {
    "width": 38,
    "height": 38,
    "backgroundColor": "#ffffff",
    "borderRadius": 20,
    "borderStyle": "solid",
    "borderWidth": 2,
    "borderColor": "#98a4b3"
  },
  "checked": {
    "borderWidth": 12,
    "borderColor": "#5db42f"
  },
  "text": {
    "color": "#667180",
    "marginLeft": 10
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {
  "content": {
    "flex": 1,
    "width": 750,
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "center"
  },
  "scroller": {
    "width": 750,
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "center"
  },
  "warnbox": {
    "width": 750,
    "justifyContent": "center",
    "alignItems": "center",
    "marginTop": 10
  },
  "warn": {
    "backgroundColor": "#dddddd",
    "color": "#FF0000",
    "fontSize": 28,
    "paddingLeft": 5,
    "paddingRight": 5,
    "borderRadius": 30
  },
  "a": {
    "width": 750,
    "marginTop": 30,
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "alignItems": "center",
    "paddingLeft": 30
  },
  "b": {
    "width": 750,
    "marginTop": 10,
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "c": {
    "width": 750,
    "flexDirection": "row",
    "justifyContent": "space-around",
    "alignItems": "flex-start",
    "paddingLeft": 50,
    "paddingRight": 50
  },
  "starred": {
    "color": "#FF0000",
    "fontSize": 20,
    "marginRight": 10
  },
  "starwhite": {
    "color": "#FF0000",
    "fontSize": 20,
    "opacity": 0,
    "marginRight": 10
  },
  "text": {
    "color": "#5DB42F",
    "fontSize": 32,
    "lines": 1
  },
  "otherinp": {
    "fontSize": 32,
    "flex": 1,
    "width": 550,
    "marginTop": -15,
    "marginBottom": 20,
    "paddingBottom": 8,
    "paddingTop": 8,
    "paddingLeft": 10,
    "paddingRight": 10,
    "color": "#667180",
    "borderBottomStyle": "solid",
    "borderBottomWidth": 1,
    "borderBottomColor": "#5DB42F"
  },
  "input": {
    "fontSize": 32,
    "flex": 1,
    "width": 100,
    "marginLeft": 20,
    "marginRight": 50,
    "paddingBottom": 8,
    "paddingTop": 8,
    "paddingLeft": 10,
    "paddingRight": 10,
    "color": "#667180",
    "borderBottomStyle": "solid",
    "borderBottomWidth": 1,
    "borderBottomColor": "#5DB42F"
  },
  "radiobox": {
    "marginTop": 25,
    "marginLeft": 25,
    "marginRight": 25,
    "width": 700,
    "alignItems": "center",
    "borderRadius": 20,
    "borderStyle": "dotted",
    "borderColor": "#5DB42F",
    "borderWidth": 3
  },
  "v-radios": {
    "padding": 10
  },
  "radio-block": {
    "width": 700,
    "flexDirection": "row",
    "justifyContent": "space-around",
    "marginTop": 15,
    "marginBottom": 15
  },
  "radio-item": {
    "fontSize": 30
  },
  "v-checkboxs": {
    "marginTop": 25,
    "marginLeft": 25,
    "marginRight": 25,
    "paddingLeft": 25,
    "paddingRight": 25,
    "width": 700,
    "alignItems": "center",
    "borderRadius": 20,
    "borderStyle": "dotted",
    "borderColor": "#5DB42F",
    "borderWidth": 3
  },
  "checkbox-block": {
    "flexDirection": "column",
    "marginTop": 20,
    "marginBottom": 20
  },
  "btnbox": {
    "width": 750,
    "marginTop": 30,
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "button-item": {
    "marginTop": 20,
    "marginBottom": 20,
    "flex": 1
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {
  "btn": {
    "position": "relative",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "btn-text": {
    "width": 340,
    "height": 96,
    "lineHeight": 96,
    "borderRadius": 10,
    "fontSize": 34,
    "fontWeight": "300",
    "textAlign": "center"
  },
  "btn-tp-dark": {
    "backgroundColor": "#23ac38"
  },
  "btn-tp-danger": {
    "backgroundColor": "#fa4535"
  },
  "btn-tp-highlight": {
    "backgroundColor": "#ff8038"
  },
  "btn-tp-minor": {
    "backgroundColor": "#667180"
  },
  "btn-tpd-dark": {
    "backgroundColor": "rgba(35,172,56,0.52)"
  },
  "btn-tpd-danger": {
    "backgroundColor": "rgba(250,69,53,0.52)"
  },
  "btn-tpd-highlight": {
    "backgroundColor": "rgba(255,128,56,0.52)"
  },
  "btn-tpd-minor": {
    "backgroundColor": "rgba(102,113,128,0.52)"
  },
  "btn-text-dark": {
    "color": "#ffffff"
  },
  "btn-text-danger": {
    "color": "#ffffff"
  },
  "btn-text-highlight": {
    "color": "#ffffff"
  },
  "btn-text-minor": {
    "color": "#ffffff"
  }
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {
  "checkbox": {
    "position": "relative",
    "alignItems": "center",
    "flexDirection": "row",
    "marginTop": 15,
    "marginBottom": 15
  },
  "box": {
    "width": 40,
    "height": 40,
    "borderStyle": "solid",
    "borderWidth": 2,
    "borderColor": "#667180",
    "borderRadius": 10
  },
  "checked-box": {
    "borderColor": "#5db42f"
  },
  "icon": {
    "position": "absolute",
    "left": 8,
    "top": 12,
    "width": 24,
    "height": 12,
    "borderLeftStyle": "solid",
    "borderLeftWidth": 3,
    "borderLeftColor": "#5db42f",
    "borderBottomStyle": "solid",
    "borderBottomWidth": 3,
    "borderBottomColor": "#5db42f",
    "borderRadius": 2,
    "transform": "rotate(-45deg)"
  },
  "text": {
    "marginLeft": 15,
    "marginRight": 15,
    "color": "#667180"
  }
}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row"
    },
    on: {
      "click": _vm.change
    }
  }, [_c('div', {
    staticClass: ["icon"],
    class: _vm.clz
  }), (_vm.$slots.default) ? _c('text', {
    staticClass: ["text"],
    class: [_vm.disabled ? 'text-disabled' : '']
  }, [_vm._t("default")], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticClass: ["scroller"]
  }, [_c('div', {
    staticClass: ["warnbox"],
    on: {
      "click": function($event) {
        _vm.test()
      }
    }
  }, [_c('text', {
    staticClass: ["warn"]
  }, [_vm._v("带★的为必填项")])]), _c('div', {
    staticClass: ["a"]
  }, [_c('text', {
    staticClass: ["starred"]
  }, [_vm._v("★")]), _c('text', {
    staticClass: ["text"]
  }, [_vm._v("蜂场名称:")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "autofocus": false,
      "value": "",
      "value": (_vm.sources.input.name)
    },
    on: {
      "input": function($event) {
        _vm.sources.input.name = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticClass: ["a"]
  }, [_c('text', {
    staticClass: ["starred"]
  }, [_vm._v("★")]), _c('text', {
    staticClass: ["text"]
  }, [_vm._v("蜂场编号:")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "value": (_vm.sources.input.number)
    },
    on: {
      "input": function($event) {
        _vm.sources.input.number = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticClass: ["a"]
  }, [_c('text', {
    staticClass: ["starred"]
  }, [_vm._v("★")]), _c('text', {
    staticClass: ["text"]
  }, [_vm._v("负责人:　")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "value": (_vm.sources.input.principal)
    },
    on: {
      "input": function($event) {
        _vm.sources.input.principal = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticClass: ["a"]
  }, [_c('text', {
    staticClass: ["starred"]
  }, [_vm._v("★")]), _c('text', {
    staticClass: ["text"]
  }, [_vm._v("身份证号:")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "value": (_vm.sources.input.idnumber)
    },
    on: {
      "input": function($event) {
        _vm.sources.input.idnumber = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticClass: ["a"]
  }, [_c('text', {
    staticClass: ["starred"]
  }, [_vm._v("★")]), _c('text', {
    staticClass: ["text"]
  }, [_vm._v("联系电话:")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "value": (_vm.sources.input.telphone)
    },
    on: {
      "input": function($event) {
        _vm.sources.input.telphone = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticClass: ["a"]
  }, [_c('text', {
    staticClass: ["starred"]
  }, [_vm._v("★")]), _c('text', {
    staticClass: ["text"]
  }, [_vm._v("蜂场地址:")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "value": (_vm.sources.input.address)
    },
    on: {
      "input": function($event) {
        _vm.sources.input.address = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticClass: ["a"]
  }, [_c('text', {
    staticClass: ["starred"]
  }, [_vm._v("★")]), _c('text', {
    staticClass: ["text"]
  }, [_vm._v("养蜂员数量:")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "value": (_vm.sources.input.bpnum)
    },
    on: {
      "input": function($event) {
        _vm.sources.input.bpnum = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticClass: ["radiobox"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["v-radios"]
  }, [_c('div', {
    staticClass: ["radio-block"]
  }, _vm._l((_vm.sources.radios.BeeNum.options), function(item) {
    return _c('u-radio', {
      key: item.id,
      staticClass: ["radio-item"],
      attrs: {
        "value": _vm.sources.radios.BeeNum.checked,
        "val": item.val
      },
      on: {
        "input": function (v) { return _vm.sources.radios.BeeNum.checked = v; }
      }
    }, [_vm._v(_vm._s(item.msg))])
  }))])]), _c('div', {
    staticClass: ["radiobox"]
  }, [_vm._m(1), _c('div', {
    staticClass: ["v-radios"]
  }, [_c('div', {
    staticClass: ["radio-block"]
  }, _vm._l((_vm.sources.radios.IsFixed.options), function(item) {
    return _c('u-radio', {
      key: item.id,
      staticClass: ["radio-item"],
      attrs: {
        "value": _vm.sources.radios.IsFixed.checked,
        "val": item.val
      },
      on: {
        "input": function (v) { return _vm.sources.radios.IsFixed.checked = v; }
      }
    }, [_vm._v(_vm._s(item.msg))])
  }))])]), _c('div', {
    staticClass: ["a"]
  }, [_c('text', {
    staticClass: ["starred"]
  }, [_vm._v("★")]), _c('text', {
    staticClass: ["text"]
  }, [_vm._v("本年度放蜂路线:")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "value": (_vm.sources.input.YearRoute)
    },
    on: {
      "input": function($event) {
        _vm.sources.input.YearRoute = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticClass: ["v-checkboxs"]
  }, [_vm._m(2), _c('div', {
    staticClass: ["c"]
  }, [_c('div', {
    staticClass: ["checkbox-block"]
  }, _vm._l((Math.ceil(_vm.lines.BeeSpecies)), function(n) {
    return _c('u-checkbox', {
      key: _vm.sources.checkbox.BeeSpecies.options[n * 2 - 2].id,
      staticClass: ["checkbox-item"],
      attrs: {
        "value": _vm.sources.checkbox.BeeSpecies.checked,
        "val": _vm.sources.checkbox.BeeSpecies.options[n * 2 - 2].val
      },
      on: {
        "input": function (v) { return _vm.sources.checkbox.BeeSpecies.checked = v; }
      }
    }, [_vm._v(_vm._s(_vm.sources.checkbox.BeeSpecies.options[n * 2 - 2].msg))])
  })), _c('div', {
    staticClass: ["checkbox-block"]
  }, _vm._l((Math.floor(_vm.lines.BeeSpecies)), function(n) {
    return _c('u-checkbox', {
      key: _vm.sources.checkbox.BeeSpecies.options[n * 2 - 1].id,
      staticClass: ["checkbox-item"],
      attrs: {
        "value": _vm.sources.checkbox.BeeSpecies.checked,
        "val": _vm.sources.checkbox.BeeSpecies.options[n * 2 - 1].val
      },
      on: {
        "input": function (v) { return _vm.sources.checkbox.BeeSpecies.checked = v; }
      }
    }, [_vm._v(_vm._s(_vm.sources.checkbox.BeeSpecies.options[n * 2 - 1].msg))])
  }))]), (_vm.sources.checkbox.BeeSpecies.checked.indexOf('6') > -1) ? _c('input', {
    staticClass: ["otherinp"],
    attrs: {
      "value": (_vm.sources.input.YearRoute)
    },
    on: {
      "input": function($event) {
        _vm.sources.input.YearRoute = $event.target.attr.value
      }
    }
  }) : _vm._e()]), _c('div', {
    staticClass: ["v-checkboxs"]
  }, [_vm._m(3), _c('div', {
    staticClass: ["c"]
  }, [_c('div', {
    staticClass: ["checkbox-block"]
  }, _vm._l((Math.ceil(_vm.lines.BeeSource)), function(n) {
    return _c('u-checkbox', {
      key: _vm.sources.checkbox.BeeSource.options[n * 2 - 2].id,
      staticClass: ["checkbox-item"],
      attrs: {
        "value": _vm.sources.checkbox.BeeSource.checked,
        "val": _vm.sources.checkbox.BeeSource.options[n * 2 - 2].val
      },
      on: {
        "input": function (v) { return _vm.sources.checkbox.BeeSource.checked = v; }
      }
    }, [_vm._v(_vm._s(_vm.sources.checkbox.BeeSource.options[n * 2 - 2].msg))])
  })), _c('div', {
    staticClass: ["checkbox-block"]
  }, _vm._l((Math.floor(_vm.lines.BeeSource)), function(n) {
    return _c('u-checkbox', {
      key: _vm.sources.checkbox.BeeSource.options[n * 2 - 1].id,
      staticClass: ["checkbox-item"],
      attrs: {
        "value": _vm.sources.checkbox.BeeSource.checked,
        "val": _vm.sources.checkbox.BeeSource.options[n * 2 - 1].val
      },
      on: {
        "input": function (v) { return _vm.sources.checkbox.BeeSource.checked = v; }
      }
    }, [_vm._v(_vm._s(_vm.sources.checkbox.BeeSource.options[n * 2 - 1].msg))])
  }))]), (_vm.sources.checkbox.BeeSource.checked.indexOf('3') > -1) ? _c('input', {
    staticClass: ["otherinp"],
    attrs: {
      "value": (_vm.sources.input.YearRoute)
    },
    on: {
      "input": function($event) {
        _vm.sources.input.YearRoute = $event.target.attr.value
      }
    }
  }) : _vm._e()]), _c('div', {
    staticClass: ["radiobox"]
  }, [_vm._m(4), _c('div', {
    staticClass: ["v-radios"]
  }, [_c('div', {
    staticClass: ["radio-block"]
  }, _vm._l((_vm.sources.radios.IsCoOp.options), function(item) {
    return _c('u-radio', {
      key: item.id,
      staticClass: ["radio-item"],
      attrs: {
        "value": _vm.sources.radios.IsCoOp.checked,
        "val": item.val
      },
      on: {
        "input": function (v) { return _vm.sources.radios.IsCoOp.checked = v; }
      }
    }, [_vm._v(_vm._s(item.msg))])
  }))])]), _c('div', {
    staticClass: ["radiobox"]
  }, [_vm._m(5), _c('div', {
    staticClass: ["v-radios"]
  }, [_c('div', {
    staticClass: ["radio-block"]
  }, _vm._l((_vm.sources.radios.IsContract.options), function(item) {
    return _c('u-radio', {
      key: item.id,
      staticClass: ["radio-item"],
      attrs: {
        "value": _vm.sources.radios.IsContract.checked,
        "val": item.val
      },
      on: {
        "input": function (v) { return _vm.sources.radios.IsContract.checked = v; }
      }
    }, [_vm._v(_vm._s(item.msg))])
  }))])]), _c('div', {
    staticClass: ["radiobox"]
  }, [_vm._m(6), _c('div', {
    staticClass: ["v-radios"]
  }, [_c('div', {
    staticClass: ["radio-block"]
  }, _vm._l((_vm.sources.radios.IsHealth.options), function(item) {
    return _c('u-radio', {
      key: item.id,
      staticClass: ["radio-item"],
      attrs: {
        "value": _vm.sources.radios.IsHealth.checked,
        "val": item.val
      },
      on: {
        "input": function (v) { return _vm.sources.radios.IsHealth.checked = v; }
      }
    }, [_vm._v(_vm._s(item.msg))])
  }))])]), _c('div', {
    staticClass: ["btnbox"]
  }, [_c('u-button', {
    staticClass: ["button-item"],
    attrs: {
      "type": "danger"
    }
  }, [_vm._v("取消")]), _c('u-button', {
    staticClass: ["button-item"]
  }, [_vm._v("提交")])], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["b"]
  }, [_c('text', {
    staticClass: ["starred"]
  }, [_vm._v("★")]), _c('text', {
    staticClass: ["text"]
  }, [_vm._v("蜂场规模(群):")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["b"]
  }, [_c('text', {
    staticClass: ["starred"]
  }, [_vm._v("★")]), _c('text', {
    staticClass: ["text"]
  }, [_vm._v("蜂场是否转地:")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["b"]
  }, [_c('text', {
    staticClass: ["starred"]
  }, [_vm._v("★")]), _c('text', {
    staticClass: ["text"]
  }, [_vm._v("饲养蜂种:")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["b"]
  }, [_c('text', {
    staticClass: ["starred"]
  }, [_vm._v("★")]), _c('text', {
    staticClass: ["text"]
  }, [_vm._v("蜂种来源:")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["b"]
  }, [_c('text', {
    staticClass: ["starred"]
  }, [_vm._v("★")]), _c('text', {
    staticClass: ["text"]
  }, [_vm._v("蜂场是否参加合作社或为企业的生产基地:")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["b"]
  }, [_c('text', {
    staticClass: ["starred"]
  }, [_vm._v("★")]), _c('text', {
    staticClass: ["text"]
  }, [_vm._v("是否签订相关购货合同:")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["b"]
  }, [_c('text', {
    staticClass: ["starred"]
  }, [_vm._v("★")]), _c('text', {
    staticClass: ["text"]
  }, [_vm._v("蜂场工作人员是否有健康证:")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["btn"]
  }, [_c('text', {
    staticClass: ["btn-text"],
    class: ['btn-tp-' + _vm.type, 'btn-sz-' + _vm.size, 'btn-text-' + _vm.type, _vm.disabled ? ('btn-tpd-' + _vm.type) : ''],
    on: {
      "click": function (e) { return _vm.$emit('click', e); },
      "longpress": function (e) { return _vm.$emit('longpress', e); }
    }
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["checkbox"],
    on: {
      "click": _vm.change
    }
  }, [_c('text', {
    staticClass: ["box"],
    class: [_vm.checked ? 'checked-box' : '', _vm.disabled ? 'disabled-box' : '']
  }), (_vm.checked) ? _c('text', {
    staticClass: ["icon"],
    class: [_vm.disabled ? 'disabled-icon' : '']
  }) : _vm._e(), (_vm.$slots.default) ? _c('text', {
    staticClass: ["text"],
    class: [_vm.disabled ? 'disabled-text' : '']
  }, [_vm._t("default")], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);