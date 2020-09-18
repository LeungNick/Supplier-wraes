(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(n);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}
var protocols = {
  previewImage: previewImage,
  getSystemInfo: {
    returnValue: addSafeAreaInsets },

  getSystemInfoSync: {
    returnValue: addSafeAreaInsets } };


var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      var returnValue = wx[options.name || methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          ret.push(handler.apply(handlerCtx, processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName)));

        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (args) {
    this.$vm.$mp.query = args; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', args);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 10:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 109:
/*!******************************************************!*\
  !*** D:/特惠采购/Supplier-wares/static/image/banner.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/image/banner.jpg";

/***/ }),

/***/ 117:
/*!******************************************************!*\
  !*** D:/特惠采购/Supplier-wares/static/image/active.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqsAAAByCAYAAAB0tZg/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzMzMDU5MzVFMTIxMTFFQTgyRThDRTVFMzBFODFBNTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzMzMDU5MzZFMTIxMTFFQTgyRThDRTVFMzBFODFBNTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3MzMwNTkzM0UxMjExMUVBODJFOENFNUUzMEU4MUE1MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3MzMwNTkzNEUxMjExMUVBODJFOENFNUUzMEU4MUE1MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkkFPZQAAGqeSURBVHja7J0HfBzl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"

/***/ }),

/***/ 132:
/*!***************************************************!*\
  !*** D:/特惠采购/Supplier-wares/static/image/pro.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABaAAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMxNTVEOTE0RTM2NzExRUFBQkNDOTVENzEzOTMwQTI0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjMxNTVEOTE1RTM2NzExRUFBQkNDOTVENzEzOTMwQTI0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzE1NUQ5MTJFMzY3MTFFQUFCQ0M5NUQ3MTM5MzBBMjQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzE1NUQ5MTNFMzY3MTFFQUFCQ0M5NUQ3MTM5MzBBMjQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAgEBAQICAgEB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"

/***/ }),

/***/ 140:
/*!************************************************************!*\
  !*** D:/特惠采购/Supplier-wares/components/uni-popup/popup.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _message = _interopRequireDefault(__webpack_require__(/*! ./message.js */ 141));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
// 定义 type 类型:弹出类型：top/bottom/center
var config = {
  // 顶部弹出
  top: 'top',
  // 底部弹出
  bottom: 'bottom',
  // 居中弹出
  center: 'center',
  // 消息提示
  message: 'top',
  // 对话框
  dialog: 'center',
  // 分享
  share: 'bottom' };var _default =


{
  data: function data() {
    return {
      config: config };

  },
  mixins: [_message.default] };exports.default = _default;

/***/ }),

/***/ 141:
/*!**************************************************************!*\
  !*** D:/特惠采购/Supplier-wares/components/uni-popup/message.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _created$created$meth;function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default = (_created$created$meth = {
  created: function created() {
    if (this.type === 'message') {
      // 获取自组件对象
      this.maskShow = false;
      this.children = null;
    }
  } }, _defineProperty(_created$created$meth, "created", function created()
{
  if (this.type === 'message') {
    // 不显示遮罩
    this.maskShow = false;
    // 获取子组件对象
    this.childrenMsg = null;
  }
}), _defineProperty(_created$created$meth, "methods",
{
  customOpen: function customOpen() {
    if (this.childrenMsg) {
      this.childrenMsg.open();
    }
  },
  customClose: function customClose() {
    if (this.childrenMsg) {
      this.childrenMsg.close();
    }
  } }), _created$created$meth);exports.default = _default;

/***/ }),

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var rawBindings = vm.__secret_vfa_state__ && vm.__secret_vfa_state__.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }
  
  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string,number
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 201:
/*!**************************************************!*\
  !*** D:/特惠采购/Supplier-wares/static/image/会员.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/image/会员.png";

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 316:
/*!************************************************************!*\
  !*** D:/特惠采购/Supplier-wares/components/uni-icons/icons.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  "pulldown": "\uE588",
  "refreshempty": "\uE461",
  "back": "\uE471",
  "forward": "\uE470",
  "more": "\uE507",
  "more-filled": "\uE537",
  "scan": "\uE612",
  "qq": "\uE264",
  "weibo": "\uE260",
  "weixin": "\uE261",
  "pengyouquan": "\uE262",
  "loop": "\uE565",
  "refresh": "\uE407",
  "refresh-filled": "\uE437",
  "arrowthindown": "\uE585",
  "arrowthinleft": "\uE586",
  "arrowthinright": "\uE587",
  "arrowthinup": "\uE584",
  "undo-filled": "\uE7D6",
  "undo": "\uE406",
  "redo": "\uE405",
  "redo-filled": "\uE7D9",
  "bars": "\uE563",
  "chatboxes": "\uE203",
  "camera": "\uE301",
  "chatboxes-filled": "\uE233",
  "camera-filled": "\uE7EF",
  "cart-filled": "\uE7F4",
  "cart": "\uE7F5",
  "checkbox-filled": "\uE442",
  "checkbox": "\uE7FA",
  "arrowleft": "\uE582",
  "arrowdown": "\uE581",
  "arrowright": "\uE583",
  "smallcircle-filled": "\uE801",
  "arrowup": "\uE580",
  "circle": "\uE411",
  "eye-filled": "\uE568",
  "eye-slash-filled": "\uE822",
  "eye-slash": "\uE823",
  "eye": "\uE824",
  "flag-filled": "\uE825",
  "flag": "\uE508",
  "gear-filled": "\uE532",
  "reload": "\uE462",
  "gear": "\uE502",
  "hand-thumbsdown-filled": "\uE83B",
  "hand-thumbsdown": "\uE83C",
  "hand-thumbsup-filled": "\uE83D",
  "heart-filled": "\uE83E",
  "hand-thumbsup": "\uE83F",
  "heart": "\uE840",
  "home": "\uE500",
  "info": "\uE504",
  "home-filled": "\uE530",
  "info-filled": "\uE534",
  "circle-filled": "\uE441",
  "chat-filled": "\uE847",
  "chat": "\uE263",
  "mail-open-filled": "\uE84D",
  "email-filled": "\uE231",
  "mail-open": "\uE84E",
  "email": "\uE201",
  "checkmarkempty": "\uE472",
  "list": "\uE562",
  "locked-filled": "\uE856",
  "locked": "\uE506",
  "map-filled": "\uE85C",
  "map-pin": "\uE85E",
  "map-pin-ellipse": "\uE864",
  "map": "\uE364",
  "minus-filled": "\uE440",
  "mic-filled": "\uE332",
  "minus": "\uE410",
  "micoff": "\uE360",
  "mic": "\uE302",
  "clear": "\uE434",
  "smallcircle": "\uE868",
  "close": "\uE404",
  "closeempty": "\uE460",
  "paperclip": "\uE567",
  "paperplane": "\uE503",
  "paperplane-filled": "\uE86E",
  "person-filled": "\uE131",
  "contact-filled": "\uE130",
  "person": "\uE101",
  "contact": "\uE100",
  "images-filled": "\uE87A",
  "phone": "\uE200",
  "images": "\uE87B",
  "image": "\uE363",
  "image-filled": "\uE877",
  "location-filled": "\uE333",
  "location": "\uE303",
  "plus-filled": "\uE439",
  "plus": "\uE409",
  "plusempty": "\uE468",
  "help-filled": "\uE535",
  "help": "\uE505",
  "navigate-filled": "\uE884",
  "navigate": "\uE501",
  "mic-slash-filled": "\uE892",
  "search": "\uE466",
  "settings": "\uE560",
  "sound": "\uE590",
  "sound-filled": "\uE8A1",
  "spinner-cycle": "\uE465",
  "download-filled": "\uE8A4",
  "personadd-filled": "\uE132",
  "videocam-filled": "\uE8AF",
  "personadd": "\uE102",
  "upload": "\uE402",
  "upload-filled": "\uE8B1",
  "starhalf": "\uE463",
  "star-filled": "\uE438",
  "star": "\uE408",
  "trash": "\uE401",
  "phone-filled": "\uE230",
  "compose": "\uE400",
  "videocam": "\uE300",
  "trash-filled": "\uE8DC",
  "download": "\uE403",
  "chatbubble-filled": "\uE232",
  "chatbubble": "\uE202",
  "cloud-download": "\uE8E4",
  "cloud-upload-filled": "\uE8E5",
  "cloud-upload": "\uE8E6",
  "cloud-download-filled": "\uE8E9",
  "headphones": "\uE8BF",
  "shop": "\uE609" };exports.default = _default;

/***/ }),

/***/ 4:
/*!*****************************************!*\
  !*** D:/特惠采购/Supplier-wares/pages.json ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map