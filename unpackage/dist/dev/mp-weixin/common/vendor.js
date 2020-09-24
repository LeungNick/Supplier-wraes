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

/***/ 133:
/*!**************************************************!*\
  !*** D:/特惠采购/Supplier-wares/static/image/ts.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABaAAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE1QzQ5MEJBRjI4NTExRUE5NjBBRDhGM0IzQ0RFMTg2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE1QzQ5MEJCRjI4NTExRUE5NjBBRDhGM0IzQ0RFMTg2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTVDNDkwQjhGMjg1MTFFQTk2MEFEOEYzQjNDREUxODYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTVDNDkwQjlGMjg1MTFFQTk2MEFEOEYzQjNDREUxODYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAgEBAQICAgEBAgICAgICAgICAwIDAwMDAgMDBAQEBAQDBQUFBQUFBwcHBwcICAgICAgICAgIAQEBAQICAgUDAwUHBQQFBwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAj/wAARCADIAMgDAREAAhEBAxEB/8QAqgABAAIBBAMBAAAAAAAAAAAAAAgJCgEFBgcCAwQLAQEAAQUBAQEAAAAAAAAAAAAABQECAwQGBwgJEAABAwMDAwIFAgUCBQUBAAABAgMEBQYHABEIIRIJMRNBUSIUFWEKcTJCIxaBF5FSMyQlsdFiQ0QYEQACAQMCBAQDBgQGAwAAAAAAAQIRAwQhBTFBEgZRYRMHcSIUgZGh4TII8CMVFrHB0fFCUkNTCf/aAAwDAQACEQMRAD8Az+NANANANANANANANANANANANANANANANANANANANANANANANANANANANANANANANANANANANANANANANANANANANANANANANANANANANANANANANANANANANANAabj56A10A0A0A0A0A0A0A0A0A0A0A0A0A0A0A0A0A0A0BoegOhRvQ9anCB0G6vgn46NpFIyr8SuHk75b/H1xG+/hZi5I0Nu56fuJNjUBbtz1ttYUpPa7FoaJJYO6CD75QAfjrX+qt+JIY+15FzhEqfyD+50w3V5dUt/iDw9yfyouenuIZUzGgCBF73EgglNJarUrbqBsphJ1Sd9pcDflsUoazkkcSp3md8y9dkJl0nwXXfHt+YQuG5JXcyHi0r0JLtLY67fNCf4awRy5t/pMLwcf/v8Ah+ZbraFe5e8vsT4Cv5MWu8AMi2jc0aqZlxNU4EWtfnqTEB9ymiRJaZWGH9xuS2lXU77FKTrdUn4EbkW1B6OpzXI90+ROy6nVqxY2NMf5TtMve5TrcaqlSplVRFHcVJ75CEoccA7e3bb0O+r2Vs24yerocVoHlCwPbE+k2dyjYm8S8kVIEiiXiyuJS3D3lAU1Uwn2ezp1U72AHpv8TYpme5gz/wCGqLEbbui37wo8G4bWrkK5KBU099MrtOlsToUlHp3NPxlLbWNweqTq6qNSUXHib/qpaNANANANANANANANANANANANANANAaKOySdt9h6aqkNCMXK7lrhPhvierZezpdjduW1DPsUmmNdr9VrNRUkqbhU6L3BTz6vXp9KU7qWUpBIx3LqhqzPi4s78+mPDxMbSpSPLV5voyzZFzr8e/Aavu+1+cjrlC47np6Fq3LbrCo0ycFgjq25GidNu53Y76M7U7+q0RPXI42GqP55fdQtA4s+BLx08bqRQX6niJrP190lLK5V9Xx2VVL8tsbqeTSwEU9sqV16sqV81E9dZIYEIupHXt3vSqk6JllUG5sDYZuCk4pttFDsWt1ltUmFYtFprEQlloAe64xSmUpbT9QCS4Bv6J1upxRHNuXGrO9nXUNtKfcKUtoBUpxWwASBuSSfQbfPVOlFvwPVCnQ6hGZlwZLUyJIAUxKZUlxpaT6KStBII/UHVU0ymp9awSN9+g9R89G9CyUG3xIXZ5t/hJyplS+Mmdptk5KuSc28GcWT6rATcbWwKXHITbT7U1pYA+pTJB6ddYFrozbt3LkP0v4lPVe8XvIPxm3FVc++LTJ1auXHdPbXLv3hTcct+p06qx2yH3VU9XcA67shQSkoEgbkocWrZJwzrDVPQksTMs3X0XOfPwLT+C3kbwbzitVabTm/4bmO22U/7mYPqqlR63RpCVey8ttt9Da5MUOJIS8hA26BxKFfTrLZyY3P0mlm4crMvFcmWEJUFDcdR89bBpHloBoBoBoBoBoBoBoBoBoBoBoBoDaLgrVJtyh1iv16otUmi0SLJmViqPrDbMaJFZU+884o+iEISVKPwA1SToqlVBydFxZiZ8abJrPnJ585B5V5qjyZ/ATjDPVROPuNZLT7NOuKaCXQH21LT3KWEolzztupK2I5+kHUbZrdnrojqc25HDxoxi/nlx8jLRp9PiUuLGgwY7UKFCQ2zChstpaZZZaSEIbbQjZKUpSAEgAAD01KJJKiOT1cqydT71lJbX8Rsd/8AhqlS6lTFP80Gem+CnJCNyl4zc3KXjblTUaNQ2cmcMKzCNYp19W83MEViUG0tqTFW2hCi53rQtTaSptxCgArQyHHrTTJraMR36xaovEu1uzJ99568Zt55etK1pNp5Hy3herV637PKXFyoNXq9nPS24zYWErUpLrgDe4BPT4nW31ViaNqEYZKi9Unx+0w9eHnMvO/P29/Dfwh4q31e1szOKcJit8wsg02ZOptNWiDWkSJDcwRnAh+O1BhmOgv/AEuuyvbSk9qta0eqqJW7ahbc5VrXgZn/AD45Y0XhDxEzdydrcBFYTjGmJeo9Bcc9oVCqTpjNNgxO4enuvyEJJ+A3Pw1uOXTr4ELi2+udDF755XbyY8oOWuPmGcBeOW6MBZytKrWzelF50zXEUmLEpLtMjTHZ0eVGjtIXCQ9LQ6kqkuu9zaQhsLUQI67KVyS0oTmJatWVKcnWqehma0tmWxSYTc+SJlQYZaTNn9nt++822Erc7R/L3KBO3w1IQhTzOdaTemlT88rkdZ+fse+SfmyxamSajZPKLjVfar0wleIlhg1q0rq2qsCLLdQNlAtvIZ3c7kKSotuAp6jzbfN3e15Kk/0yZ9ie1nYmH3f2/OzZVMq1F6ca0X2GVh4lvK1b/Pyx6nYGSqQ1i/l5idIj5fxcvdhE0xlCO7U6Y279RZLgIeZ3UphRAJKFIUe523dLeVb6oany/wB39p5W1ZjsXk1KPkXOA7gEfHUkc0a6AaAaAaAaAaAaAaAaAaAaA0PQE6Cpj7fuBeR19W9gDHfCjAqlTeQXOmuQrWokGM72Ps26ioxm55UpKklCZbjzUUknYoU78tYLzqunxJTa7DcvU5Q1+NC1Hh9xdoHDjirjTjzYZjzJNg0gt1SuqaKG6tcMkKlTp7oSO8pflOKUAd1BHanc7DWWEEkl4GjmZDu3eqRUpxK4MeXi2uF+e8U5q56mz+S+Q8lM3DjrKDUiXfKbdtRqRFem05l+qBh1tE0pcLbKSUsp2SNu5W1wlOHJGQvBQ4iI226suupSA44oAFagkAqIHQbnrtoYSJOZuAPDHkRkqg5izjxms7KeULZRGbot61qjsTZrTcJwvR0KU50cS0o7pDgUBrBOynyMkMq7DSLomS2aitsRkRWUpZZaSEtIQkJShCU9oCUp2AAA6AauhGSMUpLidY47wXhnEc+7KnivFdt43qd/T1VO+KhQaFTaQ/WJ6yVGRNXAZaL7hKie5e53JPqTrKki13W3xONcl+MGFOXuJ6vhHkDZjV/Y0rkiDMqFvOPSYxMqmykTIzqHojjTiFIWgHdKuo3B6HR6me1ccHVHQHJLglTs6ZV4jZhtDLNZwXdnEqutz6N+BaaXFrlvqZRHkUOWy64hsMOto7AopV2pUsdp7txZ0F8L9E09ak+ko7W1ADt332Hrt021ea7MLLzYWBNx75jcCZHoTDdOZ5H4dqdJqspaNk1Cp2nUJDvtjoElxtgx9iTv6a8v90sNXMBT5p/wz7R/ZHvjxe6naXCcdf8AYipke2Lqw5duP+dPH9CqTn7j2tqoTqc0ytz8/THUmPIbdbb2Lv8AZKmnt9+5gqHqlJ1wftz3HOxd9OX6fifS37rfaO1uNl5WPGk0m20uNFUzRuEvL7GHN7jxY+fcXykog3G37F02wX235dArsdCPvaZKLXQOMKWNj/WgpWOihr6ItXYzj1R1Pyj3DEnjXnbmqNEt9ZDVGgGgGgGgGgGgGgGgGgGgPRKebjx3nnnEtMtJUp55RAShAG6lEnoAB1OqN0RVKuhS7x54+I5R89Lx8iWSFGoULEomWZxZonvB6G1DYL0WVUggqcCV/wB50pKdu5bpV17UHWGK6nUksi76dtRjp4l04SAAB0A9NbFSLkqnlqhUgV5LuZcfgTw3y3yVECLWbhtNmFCsS3pq1ojT67V5zVPitOFopV2JLinVgEEpQeo1hvXHFGzh47u3FFFYGXvNzZmOMG4kvqs5nsbHWWL8tmgVq48bVuj3dKjUyVV4DE1bSpVLgSRsA7ug923oDv664LfO5NyxbkVas+om+Naf5MlcbaYzuOMnShWnRvOzz4ylWH4WIuQXE6UWO77Wm1WtVWiuvo6FJ9y5X6WgKPxHcNtQ2V7k38fS9j3E/JVX2s3nsVh8G2TFtPy6eXWz6Db145I8ZtF5D2I+k/lLuxJchrYeCEEB6OaFIuNtSVkbgbdAdiRrNg+7G1TfTcbhJ8KrSvm+S8dDDkbFZivlbr8CROHP3H3DC6rjgWNyJx9fvDa9nyluoxb4oK/xsF9QOzciTALjzPp/M7GQn4kgddd1t3ceHl6WJq4+fTql9pG3toux4al8VjX/AGZky16Ne2Prqpt7WfcLQeod00mbHqFPltHp3MvxVLQsA7g7HoRsdjqai3zI65Bw0lozl59Dt6/DVZOiqWUqY3fn4xQ/dFy+P7LNGHfXsM3ncS6jGGw+4odZpLMeWg7DcnvZbIHp6768+9yMu3DbfTlxlw+J9Y/s77dys7uf17ekbVK/Cv5FfdtXTMU67IXboi0uoRmnWakpI/tELU0puQNlb9Ou3Qa+dsW87OqP1t3jAt5EHGTqqcD0ePjP9B8cfkYOFH6yKVxa5wzY7cCM46lunW9ey/ojKHeQhrvdcRGV2kAtutb7+2CPoXsLfPqbfTxofkx+5v2yntec8qMaWp8NOfgZpTS90n9DsR8jr0c+R5Oh7tUKjQDQDQDQDQDQDQDQDQFT3m1z9cHHPxscjb0tOpqot0XPCgWpQ6uh9cdcRV0VFmkyH0OtlKkrbjOuqSQQQdjrWybvTBkhtNqM78a8E6kgPG7Y7mNeBnEi030qM5qw7dm1MqUpbipdVgIqrylqWSoqK5J3JJPz1W05dKdOJrZ008iSXA8M9+SPhFxqcmQsu8krZoNfhBXu2bDnJrVbKkq7Cj7CjplPpVudtlJGrp5EI8WZsbbb939MSqnLX7nrx7Y3YP4C3b/yNLKnEtIi0OnUlhXtjcq9yuT4yu3ofRBP6a1r2424JvqjpyrR/YiU/tjJp81EUJ+WPzw4f8lXHan8aLRwPdeMIj9x0yvi8J9ao7xdRT40yOGXokNtwJQv7nuSsPbgpG41C5/cOJ0/qpX4f6kptewzsPqrqSRvj9w9w/vzAdD4vTcOZEwHV7Up1rU+i5Ns+RZFdqDMa3hFAaCa2YoU2+1G9p1Cx1Qojf5yGLn2btmtflS46fwjUnsl9XepS1bOF8sOefiP5yYTfsWysCyeO+XVVCiiu51qOKLPl1SZT4agqaht21Ki26HngArvT06FJ2SrVsL9pxfS6rzddDcwdozse450T8qnIa3hDwT5XoOMoPG/lBP49ZFbqVJh3rVa/e1fxov7GMyGJs2OmqQpMYSXS33BMdwISrYbdp1G5ezbbkaStpuWnD/Ex3M3cOp9a8SxKn46wjZ11WvxSr+Tqv5g8SZVt2sVxqDWJFCverWpEo6G48YQqpAeekpdcSHR9DqFHp2BJ15L7g+1NyVuF/apys3IzVYx4NJ89eHkY8XcJpfOqM7r8TFB484zzBkzH3DrI950KwJpXOyLxSv+k1Onz7Vme4jZ6GqclPcdlAFxS1LUgJCu/cKHqvZVrMtYyhlOslzIvcb0LmrWpkTkqDaj6nY7f8NdjJaEJWiMaLzBZgy7UeUWIsHwsQrZw7SbbmVmuZllrdbYclSlK72IZQewlv2WkEH6itR6do3PkXutODsxT4o+9/2LXcq1uF2VqNYSVG/AhFGuNl6JbtsLAhGY2pLiVILbzmw2S4pW2yUkJJO53+GvCVdXNaH6WfQyhcd1uq8CGHkUsyhXJiCuNocei3PjB6m3HatWjoX9w05GdDD3Y4oEABlwqJJHVIPTbXadl588PcFGLqpHzx7/APaP9W7Ouzk9YNtacKambtw4zCrkBxV485oeWXJuSbQoNUq6ioq2qD1PaTLG59dn0rG+vpyzc6odXifjRkWXGbT5MkvrIYxoBoBoBoBoBoBoBoDQnYb6FG6IrR8r/DZvnhxBuTj+/dz1kMzq1QKuuuMJSt5KaTNL6kIQvYKUoH6Ukgb/ABGo7JzLNu253ZKMU9a8PtfJG9gS6Z+NSoPyI0LI9DwlbluZu5iV/j/x1j06nWphbjXYUZtF+3qqmQWYUZgOB9pTrixGQt1x4llsLPc2PpB+eoe9i3bdXhbdBz9N/NKtFSurWmp0uBtcY9UpLj+B1l41vBPbL1GvTMvLLFf+PQL1p4aw9hG5Jbtbq1IU8lLgq9dMUU5CpR2ATE9tIG6u8JOwHsUcuULaldWr/AvzNzjRW7eh2bkfx189cK3RUahxFw7xjyDYNP8AbcotsVawaFTKy+Gz2FCnZsJPaogbhQm7bk9debdy9j4G6XOqVycG/B0Mtq/GOs6tnqhXL57mWGqJSvGbgehNk+0isN1WiIjtp/pPsIrwT2jrvtv/AA15hlftx2+5Pr+rv/Cv5mW5uMeTOb4T4NeSvIt7ybu54UzAMvHzSC+rHVDxxaNerUjuCT7SHpdJc7T6jcyiSPmddXn+0VjE22X09676sYvp+bRyppVfE0457lLnQ7xyvinxEWhHqH+7/E+1LTmMd7dRcOPHIDgWyhX170VhHZuEkpKSNfPcsbvixc6bMn1cvjy5knCfNMpzzXw+8NXIebcNvcesGZgnX3F9xEH/AG6NV/HtSWgke2GbmVUG9ld4UQlonbr89ene31j3Hu36Zkoq3XV+XOnnQyX83qhq6tEfbU/btZtkSpd4Yt5IyOL2Rmw0uwrKuuSmLcbgQ2Chtc+0HY7kdYPckqDClHbfsG+ug7q/crh7Lm+i4SbgqSpq35pU4+VftLrfpSt6qrZ21b0P9x94+L/dyXdFElctqUiK3SZVxuMw8kh2jR1e+GnFwxErrKAUglxQH/yJ6a7ftP372Tc5xjGbjKS0U10uvJU11ZGXNrsz04FnPD39y3g7ItwU7GPM3HrnGK+JSxHF/wAZyZULQMxLpZcbmiS0mZTOxY2JdS4hPUrWgDXt+Julu7Dq5Midx7blCkoS6kuOnI5x5WcrWhd2T8YM2tc0W4qO7Z6apCrkF5uZTpDFSqSlxH2JUZS2nUOoBKVNqIPQ768N93cmP1ELdeVfyP0l/wDn1tFyOzZV+SpW5RfAq6CJ8hf3tSUqI47IYiIlNK9xLaGgexKAUjb6iUqO4+evJqt8j9AHGMXqtDY8hW6m6ce5OpV5T3gLmoNYZp0l9tsLSw3T3g2oBzoSlSe7qPTbU3sF5/Xwl4NL8TzP3GsQudtZNqOkemb/AAZkleESbV5XjI4xR6y8qS9RYtdp8OUppLIciwbmnx2SlKOnaEJCU7fAa+t8B1so/BnfYKOVNL/sWxa2iJPAODcA9CfT9dUqWdaPPVS8aAaAaAaAaAaA0I3BGhRqqNhuKlKq1JmQm1NofdQr7R5xsuIbeA3QsoBT3AHqRuNcv3Z2xY3XbrmJdr0XE06aOj4mxjXvTmpeBWnZPAi3ms3UnkFyUvRPIPN1qPuyMXOzoyI9Itlr3lLQ5ToSlKSl1tKkjvCRsrdW2531wfbfYOJ27a6MZKj8tftfMn/6nO5BrgmWAyHnUp9xxfcHASfjsDv8dSWRdlOL6nUss2o8fArc8lvP+3fHFxtVnOrWNKyfdVw1aHbOMMbRZH2f5ev1Bt59pD8pLTxZZQ1HcWpSW1KUQEJBKtxp4eMpTVfEk4fzNCOXja8sOR+W+bb14s8oeINc4o8g7RowuSk0N5urPU6VRyWd/f8AycWM7Ge2fSpCldyHBukELT2no7uHbUW+ZG5FuNrh8xdqorUNh2rkNKA6HYAeutSU24peBZC51I2+psQJyS3U4Ueent/6brTbyQCNiP7iVDVuTPrhShmtJ1pU2unxmqfGTFpUdqDHT/8AjYQllA/gloBP+muftXbqufI2mvOpvyhGKr4FBXmUj868gXBAx3xQ4tQb3szHlrO3lfGapjbcmoSpDTzyfxNHZEuMpT7KGgtSAlxxwr2QEhO6tW/2FtWbJ3bttO6+MjHgZMFKrf2EWfH3wrvHyOcZ6PlW8eX2csJtUi4Z9EvzDLs+oNQ2pVNcbkPIpcmY+yVRHEOtpQXGFe3stpQUQVG3+xtot5Ebvoxco8G1V18U/EzZO59DolUsAyz+368d+R8RVrHrNo162L3mh16hZ3TXJk65YEtSFBJKH1CK+wVHdyOpkBQ9FJOyh1t3MjbhRKiRgxs+7GXVWq8DEY5D8RvIt4ZbohRryhjN3EtEmXHs/IUNMmRbbsaY97yGVd4deoM1S9lew4fZUvfsU53E60t+2/D3WClSkkqLnqe++zPvzuPbEpRr1WG6uPCi5661LMeLueMJ8kbIj3BbVQ/8/byGXK5Z05tJqcCZIBQlTjQJDiAvftfRujf4g9NeO7xsssGf8xPo5OnPkj9LO0PdfD7jsQeLJVonJN6pcz6+RNxUe38TXhGvGVGVUFykU2jSmytTyHKiolLYSgE9/YlXRPcCB+upHtbbfWzoxXxIP307kht/bV2dadUZJLx0ZmL8OcTQsG8XcGYrgJCG7Pt2ntykhDje8yUyJ8o9jpKk7vvrOyuvz66+nsSHTBRPxKy7zuXZSfNkiajUIVMgzahUpbUCnwGnH6hPfcS0www0grW444shKEJSklSidgBvrJcbppxNZpvRGB3xy8vmb+P3M/nBysZXdfI3x5Xllf8AA3RXJsmdUk0OJMnVAUORRFOulmMoRm/pZSkNOshtCilam1a5e93HjWcxY8pLrfKv4HZXtlhPFjTSZm04K5DYb5K2BRsm4OyHS8k2XWmmXWatTZbT6mFPNhwMymUn3Iz6QdlsvJStJBBGuphKpyd+xO06SVGd1auMI0A0A0A0A0A0APpq2fAFYnKvkNTcM83eDti1p5uLFz8u5Ldprqm0uLdlpZbWhoHYFALjrR7gr9O0+ogN/nS1WhK7fDri/InQp5cr6UtEFHT5jr0J/X01xNucprgSEJRjo2cJvvDthZINpv39YcC+RZNVYrtpx6lBbms06sREqSxNYQ8lSUutBR7Fbbg9R1A1t2oyj/xZf9TFJo7HjMrD7slVP7XFtpC5vZ9fYn6ggqI37QeoBOs7vTpqmalxxS1Z7nvYR3udu4VsdvmfXWu7sUiuK01ozbvcMhxWzRbCSVFfzP6611lNulDc6KHkYao499JKTuCWht2pOxPTVIWumTkWeofSqWiGyuZNcRAp7Y73Zzqw0y3+q1ubJA/UnW9alXVGpdhGunE65qmc8JUxTzNRzNaMF5pXtraeuaiMLS4f6SHZI2PX09dXXbM3qI1fFP7jmVNq9MuKnt1WgVCNV6TISVRqtDkMy4rvadj2ux1KQrY/JR1H3ayWq0M0Lqi6Ef8AmI6ii8V8+180ePccajWpVp8615jUd+HPjwIqpT8d1qUhxtSHG0KBC0kdfTWlmYt2zZc7OkqNr48i61kNzS8zEDyN4k79nWRibyIeLGM5FZvaiU24qlxydWiPPp8h1JbnN0ZySrskQlFKkqpz6wQno2pY2bT86dr+/VmF+9tm9UVJVU/D7PzPUO1+5snbMuN61JpqnB0TLK+OvB66OT1+8cLqz/gaqWlQ7RqsO478oUl324sWqQGFSAw6UrCilTyUAtEBSUrKSAdzr2z2/sLLzvq8d1scKn0T7t+8e17v2UoSuUyq06OL8K1MqFtvtQRvuV7kn9Tr6AhGh8COWpTN5lvG/n/yLYms+y8G8qZuB02n+VcuvGrxnIta+kTG2Pt49WXS3UOpDC2D2FTbyNlq3b366tu2+tUNvbsqNi51OPUY12P5XLiHYdmeAC1OOFA4k5vvmsync45Pq0+LOpN5Wo4gTHqtDXL7zJkOpilZTGUoraYDbAb2WlvwXF9rH/cX11ybaXCPhTzr/kdhc3OKteqtfLwMsvx8eL7jx45KdkFGD51erFbyyaQ7kau1uoJlCZKpMZbKXI8dlttthK1uuLKfqI7u0K7UgD3uEaHHZ+bLIlWRZLq80xoBoBoBoBoAfTQHEb2vu0Mb2xXb2v8AuWn2XZtsRlzLiuqqzGIFPgxm/wCZ1+RJUhttI323UfXYepGrZySVStuMpy6UtTFs8s/MXjPnTIHjOzXx2zrQsmNYUzbTId7z6JM+4XS2Kq/AkdspJ9tbKHkQFlC1JAUAQCdRm6dFy2Tu0404dSlo6GnITO3kc5y+RHk1wY4iZsgcWbT4xQ0qlpclv0qqXOlxEH3pxqMOBMkBINRR7bLXYkJHcSSekVY2+KlRMlMW9jW8b1birKvAjxeH7d3ydZV7nMieRuF7kl1BccVcGRawvsUNlg++5FBJ9f8ATUh/SmWf3Hjf+v8AH8jHHyHdvIfihn66sXY95YXLHuvD1fqNEYvym124KK5Ol0WU7HMhpp2W6UsrVHJCXlHfcAjWhO3GL1Okw/pci3qqVM47wW84Myc3+Ld9Sc9TW7nyLhW6E229f7cVMVyuwXqRHqcd6SltKGlSkB1Tbq20pCwEqIBJJhNxhCtUjm90x4Y92kOBd3EgJ3O6fQj5/wDvrWsQ6nwI+5lVRW95euUeTuFfArMnIDDUCK/kG2naHBokyaz91HgCr1hinOyyyfpWtpDh9sK+nuIJ3HQy2JjepKlDFjw6poq2j+E6b5Fsc4x5IZr8i2Q7nh5vtugXHPtimCK/R47lUpMeUuNGVLkPNe0ytRQNmE9R1G++uhs7PbSMs92VqdFHVfx4FWvll8F3FLgphK0L7su+L2v67rlm1FkP1d6hiEFQYCXG2+2JTGuwuKX1UpzqBsNY7+AookcLfL2RLpaWpXz4fuWGauGXJvHv+D3fUW8RZEuGk29f+H5sh40irxqnUWICpLcfuDKJTIfK2ZDaQe4EK3BUnUNdtJaE9ue2Q+nrSjSP0VeUFIhVbjfyFoUz6IdRsi748lXqUtuW/LQVD9R661rkWpKNODOIsXPmT80Ug+F+/M85t4JY8sa0ZUCwKNj+jrpVMvipxnKjNcmuVmYorbbCvbUgNbkAndKtugG2vHt+9kdlzsyWTfj1Sl5UJ2/lyhWnE5hnzCnmpwIzWstcdOXFJ5JxKCh6VUuO9Xt9hqVU4aStxTEFTiQFugElIS+0507UqWdhr1ftu1j7ZjRx7EaQXmaE4Y951nFp+NefiSo8Ynlixpz3h1uwarRV4y5CWGypV646kue41I+2WGZD0B1SUFxDSyO9BAUnuG46K27vGylcIjLwJWvNeJcEDuNx6H0Ots0SPmUOLWDsxZPw3ma/rGjVfJ2Apzs/Ft4grZm0518D3GytopLjKiAr217pCuoAO++Gdtt1qZI3WlQkGkbDbWYxmugGgGgGgGgGgND6HVG6BGLl5f6TcPOHyd8BPFtULqqNu8fa5TKhk3kNSaZJMV6sxqQuc7GjOON7nYN011tvfolT5WB3JSRB7zedujJ/acfosu9zrRHy+cXirx/wT466UcGYYtnD/wCMyLYy25tEpUWnvyUR0zWkCRJbT7r6kg7kuqUSeu5Ud9QFi5OdW+DN/DlKdxpuuhyXnJwm5x2Jy6tryd+NiHRrpyldVqRIOVsQVR2O0me/+JbhKkttTXorUtD8ZtlK2vebcStpK0kknbchf9KaaMVq7YlZdm5o68SNcby1/uFIDMigVPxEM1C5oqO0Vlq2bzTEU6B2Bfa1U3GiCfgl/b9duupH+tJ6MxR2aytXNUKnbb8J3lh5z5fvLJ+ZMSW/xQYyZcc6t3fddxy2mn4zlRdVJdbg02G/UJy2k+4oIbUpCf8AmX6nWrdvW261JR51q3CkNaGZlwr4k4Y8YnEs4xg3o7LtWyEVO6MsZfroZiPVOoOshydUZKWd0MtIbjpQ00kqKG0JTupW5VB5UuuSoRN/Jd2XDVknrH5H4OyThV7kNYGVKNdGEG4FQqcrJsWWlVLjwaShxya68tYSpr7cNL91K0hSCCCNZ4KiojUao6S0ZEXDfJfg95euN2YLbsGsM5uwlU5Mu0cq2rPhzaXLbc+mS0pbD/tPNB1KUSYjw2J2ChsQQNeF29ZbfE2o2XHnqU9v+Dvn9xsqtWo3jg8pFw4fwxcLvuysdXW7UFuUxSVBaURzTGZURwq2+p5MdhZ/q7t9SFjebiRuuVmSSnCr8TqDLHhW8yee6G/aXIXyrUXJFrzXCqNblSfuhyGjbcIcEZuAy2pafmRv+vprM92c3RuhsYMoQk3btt6E1uA/gAxfxmyXaGdM9Zue5K5KslbE62bYbpv4y2YFZiqCo81aJD8mRKXGUnuZSsoQFDuKCQNqZElq0Uzt0vXkoyTimX135Sv8vse9LTlp95m6aTU6c8AopKhUILsNQ3+G4c9f9dc5HKnK5q9Ea30qX2EAIWSONHiU4Z41pedb3iWLQqJtTaY2wj7mp3BWZkl2UWIMZIQ5IdQHfrVsEpQCpZSNbFZ3ZeCLLjcpaak6sQZCbyzYduZGjUCp2vTbrjplUSn1dhMaofauDuaccaHVHekhSQTvsdYXGSkjBdj1cNDCV8nDGSuGvl+zJlDi4pVq3/AoNNypbcCI0Uw5CVwEmtNuR0DtebdW3IceZTt3tqc6hR1PrcVjyXVza/E7ztTt+7u+LO1BfNBPXjolxMyTgDzMx7z14sYy5KY7WiPHvCOuPeFtJcS47Qrjp5EapU53Yq/6LwJbJ6raUhf9WutsXlcVVwPKMqw7U3F8U6E0NZjANANANANANANANAaEbgj56NAxkOadStjjr+4P4I5/yXOboFh5qxzVcf0S6ZP0RGK8+/UYLaFuKISge5UIqVKV0AdG+w6653e6tpUOh26fqYcra4rUrd/cIcX+a9k1jMfJZm9IVU4j3/XbWYrOO2q9JUIM6jNoFLmvwKn2pbkKfW8lJiqIAK+7ZKwNRUJUVKE3tGValHolpLxMn+byUgY14+YkuK446Y9fq9nW7Nk0tbhPsvyKJFfW2VnckhSiOvrrmN63ONt04s7b239rb2/5FUqQ66N/FkUseeQifclZjR5tNitxkhRmUpLqfuAkq2SEgbjfY/PXI42+N3KPkfT3dn7VFi4HqRVXSv5lslq12n3XQ6dWIR9xiUhK2xuOilDoN9d9jKNyKa0qfEe/7TcwcmVmWlDwu21Levq1rjsi86JGue17ohyadctvy2w7FmwJrKo77DqD0UhaFEEf6jrrOpdGnEg1Jp18CPeIOGnG3j5gK5uM2McZR6JhG9E1lN22VJkzKk3Uk16OYs8SXZzzrq/eZ2bP1DZIAHz1iyMzpi6LU2lcVzWXE+Tinw747cK8aqxNxfxbCxXYb8x2p1qlxXJkuRPqLzTbC5UuVUHpD7zhQyhIK1nYABIA6ai1eu3Xrojakkkm+ZIy4a3GoNAl1aSgJEFB7Ar/AJiNSHUoo2dvwpZGUrUVUx8eSvkMplt5fs7DtxVz3sp3rUXV46t2MZQaXHjq7gZDzI7WVHbtQFnZR6a5DJ3G5dhKUP8Aiz787N9ttixJ2ca//wCWNa9PB/ed4cVOcz99T2ahGuWJcNBlS3ok1cWWmZHhutuKaUyp5pJHehaSFA7f+msWHvV+nTLmaPuf7NbfPDlcxafLXWnhz4lzdOkImw4khlO7cpvuS3tt/OAoanIqU4pLQ+Fdxtux1qXGOhiJ847oszkh513sf5wuanW9iLgZjqoXHakO5A2aB+ehWr/lqJj8d5baHwqfLiFSOvuJjpRsQdtdnhQirSj5cSuNbksfqSr1fhXQs48CnO3kzzt44ZhuTk47Dui6sTXkii2/kaJAYpf5eLLpbNVLEiPEQ2wH4fvJSpTaQChSO4FQJODLt6N8yIzLUbWjdFRlR3kkvZF1+b2+l0x5mXTcP4uptLuWR7pUy1Mk04vrjOlofSs/kEpKTuTsR01xvuLuCx8KElx0PsD9mWxTzd/kmq2nCSapxrU+D9vrnGqcQ/ITljgnVn3WsQcqoki7cR095xIbp1wU2M9N9tsEkAPRGX2FAbblhonfXbdi7usrBi+Z5P8AuX9vVsHcVyEf0zdVpSn4mcyOoB+eu4PnQaAaAaAaAaAaAaAaAhDz04GYT8gmF5OIsyRHojlOeM+wL8ge2ir23Vg2ptMqItwFK0qB7XmF/Q6nodiEqGC/jq4qM28HKdmfUY3vNLxZeXqBxKvjFFU5b07mJgLEzEGuWZiV2nutXrVUUJ5QQwl+ZGdccUzFcccDS5jpc7Q22O7t1HXNrpF61JzH3PG9Srjqzkl48mKD5bOHt10vjnc6sP5giUKJSckWmtx9dUsyqoLUZSVtxw26uE+GVJZkNAbJUQe1xJTrzLfcWUbyl0aLifWPs/uluO13Ma3dVuc00pU4N8Oa/wATovjrwD5T4eylha76pl9V12BaFrJo98Y+Q1KW9Wq+02f/ACKHZO5KVEI2Kz3AJ22PcdczexYSbcY0bPoL+6r0emV3IUoQhRrx048TLZwnSqlRrGpMaoRjFdfaQr2VfzJPYN0n9RrsNot3fTXUqUPgP3L3K1l7rOVvVHbj62EIXt/L3DvHxPT01t5GRBanndm31to43XqwqmUasVWPSpVZepMSTLaosJKVTJyo7CnQwwhZSFOulPYgEgEkbnWK1J3WtKG3Cx0ooZwXjjyVc4OZeL+XXJyn1/glxP48SX5uHOIEarpTcN31OSw4x9zcyqe4EqZ7FAuNvJ7dh7bbYBW6qRnbUFSgk4yj08y9q7aO5cluz6YUEfetbA7AgdD6+mtGMtdUTWw5/wBHmxvLlQo75BcMKPLu5V5zbAj1+v0dahS7kXEQ5PhF5P1GM+pKlNhe+yuwjXF7jiXLNYw4N1Pv7sb3V2nLtQ+qaUo8zn/EbiOLYkiPDxuzj+kNTHKjVA1HjxkTZjq0rccU3HSlBK9iVdOp66ybViSuv5lShAe7Hupt2NjO3i3OrqLjKg9SLPov5es1ONQKPT2UmXUZshmHEaQhHVanZKkITtt13I6a7Kxjya4HwVmZbv3ZV1q6lL/O3wr8YfIpmCick38vVTGt112l0qLd9YtxNFq1OuWlwEgQ30mWFBp0NH20voUpCkBO6SUg6k7c5JJU4F+Pl3rScY8Dcs0cveAXhL4tw8G4ekU2vX7QkyE48wJTakir3JXLiqC0lUytvQ0vONe86pKnXnkhSkgNtIOyUjcjZdx+Bou3O+6y+8qYo/ih8jU/ilU+XFp0qmVDntyJuubeOacY3NIjsznbclJK4UDeWr7ZMvvUp92Op1soStDaVBbWxx772xbzbPTPkese2fvjndsZnVj0SSp4Gz8FPHp5CMneQzh/yJzdxcc4sWXxgl1OffdZn1OO8Ky85FcYQxAjtvvOn3lrA+kqbCStSl+iTt9rbA8G30rgX+9Hu7kd03Y3ptVSo+f4mbejbtTsd9htrqjwY8tANANANANANANANANAeCkFSSArtJHRXxGq1FEUQcy/DTTLuzTJ5ocGb5//AJj5ctGVKuARSuNbN4S5CQXFT2WApLLr5H99XtONPHYutlW69RuZgK4mT+zb7cxXRN0ZGSreTvlpwvZZpnkA8b9ekQqfu05m3HSGJlLmFhpPe+phfuxASN1fRLQfkgDoOdltEUv0UJ+7ut29+i6/gzvSy/3FXjCueXT6RWr7u3G8+awlxmPXrMqrSQnt6Arpn3qR0Hrvt8N9+mrFjSUaEOsO+pN6a+ZIGjeZvxyXldVKsa2M8uV25Kr7X42HHtu49lLc33QpbsNCUqSNioKI231G3sCqrQWcO7bbk0vvLRqQmNPixZ7a++NLbQ9GcKSkqQ4kLT0VsR0PodXYltLVmO9ktaUOuc85ksDjxiDIebcnVCRSMeYwpz9Wu+pRYr02Q1EYA7lNsMAqWrcgAD/XpranaUuZrxlJyouLMaXIv7qzjo9VIFqccuK985eueoPKahtVeTTreYWw2kkvBmn/AJiSoKCeiS2nb4kemslnArqTVjY7sk3NqKOka/5x/LTnmuO25xO8YykNOpb+xrUu1L5ucha0qV9b5RSIiE7f1L6f8dZrm1KelC+3as2nR3H/AIG+2Zir9zzyjQHsh3y3xltCtOqKKdGl2pZbsNPdsnuFvNzqqGxufpKyo/HW5DZWopJU8yzI3HBivmrN8tf9zumj/tvst54r9Kr/AD+5+3PlylxHkuT7LosqsTnH2kp3LaKpdEl4MhSuquyESfgR6iQtbVGPMjMjerbjSEOl/H8i3DNXh74q5lwxi7BaateeMrLxDSWqLacm27jWzUFU5rchuS/U2Zvuq3JPfsFdSN9tgNt4UCMt7hcjKp83Efwr8B+HV4x8nWHjOTf2V4LqX6Rk285xuCp055CA2HISXUNx2HQB0dQ17g+C9ZLWPGIvbhcn8C19LYA2J3/XWdGhKKZr2AbbbbD0G2qNsJU+B56qVGgGgGgGgGgGgGgGgGgGgNCN9CjR61NBSVJOxChsoEdCNttjqlC6OiodW3ZhHDF7x0MXtiO17xjoUFNxqpb9JqCO4DYEJlx3OoHptqx2o8CrlLlUr15PZn4g4j475zkYNunGNrZfTTK5SsdRKG1aq5rt6NQXURoSWYaNlSS4gJKFdR6HbWrlW4xg9DPi1lkxtturJG8KLqydevEfj9dWZ4j0HK1VtmEb6YksmO8aix3xlrW2QOwuBsL2/XXI5ElXwJG7D+Y15kc/LDf2SLF8enJC5sWU5+qXzFp9Lj0iHDjKmvKRIr8Jh8pZQhZOzS1bntIA6kba0bOQuv4G1DE+ZakiOIdw4jujFWILmpdBte3MlXFbNKkV6nwKbTaZUkzkQ22agj2m2WntmpSXGzsNumu1264px8CHza9bSb0JqgdyfXcHUq0aUlU0DYG22qVl4lqtxPZqpeNANANANANANANANANANANANANANANANAet09raz8hqqDko6sxffMP5C75yPldrxecO7rVRMi3U203yey1AW4tVr0eUgKXTGn4qkqZeLTiVy3EkKSlaGUkKcV26a6rtzoWnmby6MPHlfu80+leLpoV33NwqtCs8VJvF62osQ1yypCXrcvbvWZbFUS594J01SUFQWtQKXWwe3sUUp2Gw10V7AUrPRzR5pidzTW5LIl+nTT8ztriF59alwrsGk8ZfJ5i26KfceOo/2ePc02/EZrLdYoEZIZhJmfdSIxkOIbASiUytQcR2+4lK+4q843faLyloj1jGvWcj+Zbkqvkd4XT+5qwFedVoti8OuOV858v6vpUhSK1Hh21ToI+pPc6ll2oPLA27iSEJ2/q+Go3B7fvSuVfBmfNyVZg5NqqVeJwBnH4vjG0GnVK/a5Zt9QS7Ntq/oU2WmsUurVR5chLsd9DqPcQh1ZGylEAAbFKtiPUrGFbjaVtLVczxWHcty1mu5LWPNeRJ/wAcXlqy1aWcGeAvkfq0B7KTj6I+C+TcUoYpl5MyHf8AtodUGyEMzlBaWm3AAFr2bcAcKVORl2fRPploepWFDLsq7Z4eHgZMzbveD9PbsdiNXxdUakXV0PdoVGgGgGgGgGgGgGgGgGgGgGgGgGgGgGgNCdgT8tUbogVGeZbyQQvHFxRqd62021Vs/wCU3Xbd4+WutsP+5WHWCp6ousk7rYp7ag4U7HvcLbf/ANmte/f6UqKtTe2/HjOdZ6QXH4GNv488Q17CdvXBfmU6Y9Xs1Z3bZuTI2SZqw++25LkKkOQJTzg3DiHSXnjuO90nfcJTtNbZidC6nzPPu9d8+qu+lF/JHgWCX7WrEtWnXBU5T4HuLbaq8lDxQ9/cAc7CobgAgbK+QPTb11KuVNTiJcCMr94WxktNYtw2O225SVfdTZEyExLjrce9sBa2VodQEuJ67IA2336b607s+riX2sy7jRcoy0fI+Y4ZpmNnIl62yyiJSqq+l2t2jDixosUPMQyFuR/aQlxYdKEnsO+x3+G+rYNJFbmY5x6nJt/E71sy/ZUqeZb1sfjaFV4EeZBq6u3tSCS243J2Tuggp7kgEb/LVE3y4kdGSTblqjpbnLgnE2eMRXZbtaks0i7qWpMuy7+Qv2ZdIq/thbe62TuGHdkoeA9E7KT9aU6w52K70eGvidZ2l3F9Fd0dYN8PIsn8DflNr/LWxLs4k8lZS6dzH4wNpiXCqaptMm7LbjrTDZqqSNg7IYPY1LUAO8Kae6+6doO0pRl0s9VvR6o+qv0vgZE4IIBB3B9DrbNU10A0A0A0A0A0A0A0A0A0A0A0A0A0A0B88p1tiO6664lppCVF15RCUoSEklRJ+AA3OlaFHDq08TBYzVe1Q8nfkAyPycqS1Pcb+LUr/GeO9PeUpMefJhPLUuahDgTstxRVOX06/wDboO4TtrWwbLuXavRIxd95KwsCNuD+eej+04ryD8nWMMBZYtTAFYsOpVqWmNC/3EuKM6xFXTfvmkLbUll9G8gpZ2eWN0+oAO4OpvI3OMaRSOM2PtJ5WE77nRrlT8yUvIW8KRbjQiUeMipVdBgyqepxEhSVx5LTraluKW2QgbJRuo9dz8Nb9y9CMaydE+ZA4ODG5k+lKXSlzOyOK9EpN629ULorNCFKkMSpMd2CFfS6+lI7nErSG+9JB6g7gKHx21pYd2F631xelaGtm4MbdxwUupP7CI+a+cL1K5ducR3sTPM2+ZcWAi+GpTv5D33aeiWZLcUMhP2YC+3v7t9xuTtuNa/1X83opzOx/suD2v6nrWnL+Gd7Z6ypeNiYQr7mMrTRd2SIdHku0K0yw4ZEyQ2UN+8pqPstbaGkrdKQQpXb2g9dbGR8kWcfsO328rMjab0ckvjqRr4u5QyxnaxVReQdtosa+maopyzJyqXIpyq1R0xlIK1QpSVBjsc+gOq6ubbgehNNmzpX7Llx1oTPe+yWNvyFah+p8uGhplnCV9cbcqWb5IeOrq4WWMDPp/3IoDSlNtV+gFIjvfce2AlxssKLEkBJ3aUFjq0DrR3mHBxXA6b2/wB59ZPHu6p6R8nyMznilyOx/wAscBY3z9jOWl+18iQESTBKwt+mT2z9vMp8joNnor6FtL6DfbcdCNYLcuqNTpsuxKzccJEitXGEaAaAaAaAaAaAaAaAaAaAaAaAaAaAh3z3r91UHiPnlNizm6bedwW9Motr1F0f24sqtp/F/cK2Uk7MofU5uD07d/XVso9Sp4mS1eVuSk+Wv3GI9gSFSsT4epmFoEmPJbsltARVIylqVOrLzqWZL7rgCty6tZShIJISEgdPSZt2Y2oLmeV7zuc8rNk5apcC4jDnhrwVnSQ1m3m/iNio5noblHfslmNVpiH6VRacTKZjT40ZSWXStfeChwOEJPQpUNhp3+j1FJLgzr+243sfGcZSqm6/BEXM6ox7fOSslTMZ0mo21Z9Ybabs2NUWj74Zixgw+60iWpam0LWlawhZ7u09QOgHnnuzcyrfa16VnSa6mpeFEeT94X59E7lnzX5nLcVuTGKLRaA5U47EmWsRoFVkKLUKKlaxH995QAUltoklXb12B1A/t+3XIydjrfbcq8SP2C+52oq69WWC3Rxx4+3rxjsWqRbvoM69JMgUqk53hhMZdWqaJj8ZyMl19biyytxtSQkqP8vcNt99ex2ZpXG6cD114lm1gKHU2q1KR6+xcEOZVjXlLp1wM1NNHhymR7q2m6cVsBLCVgFBUtS0LO53331Ad6779FjNqPVKSdFwPRP22+0OT3LvfqwcbdixJSuSlyadVGlV+rhXl4M33G0KqXBWaqzd06YusVYlNAqUlkBbTDTJYAAXsAofzHp1HrqA9rc/JlalGarXX4Htv75uw9lwc7HycG5BS6KSinq/P8iU0l5qmUGVSqgxHrMaZBejzW3Ed0J1lTKorodbPqgJ3Ckgjcb7fPXqsrMZKjPgrFzJ2JqcHRp1+4h14F+Uda4yc782eNG8623VMW5ZTNu/jhPC+5EWpQ2C9IiJcXuVGVBaIUCo/wByKSNy4TrlXB27rXI+gY5f1mDC5xlzM0cEEbjWYjjXQDQDQDQDQDQDQDQDQDQDQDQDQDQEROcaKw3xoynUKHRP8iqFJpcuQmme2l1Ab+3Ww48pJ3JDLbinQAN906ugqs1Nwr6EqcaMwt7Co9zREwJFsrjR6lHjS351BklwzXEreRIZLIJOy21oBSUq6D0Px1P9KlGvgeVX7sY6vSRkp8OMrO0PGt33rlTNv4mXkOXTKS0qU8mpV1dQDAjtyN3i6EMIQ7tuU9o7dyQPXVcFOSJ3Z8xu3Lqno1wIEci8S3zjCVPtu4aPCvm6aRPTKsS5ojjyI8ukzHypEkhvq2pKUlK21KUkqG+5BGvNvdfIyrnbc7ePGs5twS+Oif5HDd2Yc8fFcIPq6joCZfdzU636wxdC2GHach9VKbQ9s0zEebLiG3XUNlKlkA+u3cD8Ncz+37ddwhtcsXJt9Dg+Pj/oQeyXKRUbi1OX4dyzZ17+Pm8MEXlLiW/mHC9WVcWCIC0+zOqTVVqBdmRQgfzOo9136u7uCSjr9BOvbODb8T1eW42pYumjiqo+6l0Sh1O1Y1XuNpL1coSEy4j8wPyFmdLQUpcCwr61hZH1EkD11B934cPoZSceqXS6fGmh2HsPv+Vjdx2rXq+nYuzi7q5SakqN6rRc1zOOUem3Q89GblUuPcFXtqWmRBKJLiBBQ6r3k+97YBQoJ6dhUUq+Py1xHZG2bjg3056xmvhRH13+5zurtDuDb8n6X045GE4w4Vdxy5x1XTTz6jdr3vqrRKZNn1tyPDQ4w9KpjPv/ANhiMttRSh15pBBKtlepHdvtr1/1q6H5wdNJpPVFH2VaXeOM794w8usYU9tGRuOV80etTaMAsT5dHfrLMlbJSk7qbBQU9qVH6FrHpvrRz7Sa00oek9m7hRyt10pQ/SkpFSh1enQqpT3kyYNSZakQpCCClbL7aXUKBHqClQIOo6h1SetDc9ULhoBoBoBoBoBoBoBoBoBoBoBoBoD0SY7Uph1h9pLzTqVJcaWkKQpKklJSoK3BBB2IOiKNVKtL/wDEzgC4LydvOwKvVMTrku/cTLTpyIsqhqf7OxS0R5aStrv2HclLvb/yhO51t28po53c+3LOQm+DOEjxv39TKnVVUS/Lfl0p32RTH34cyPL7Ugd4eDYfSfT6e1W2qvJIG32jdhwkfFdPjlyLNi1B+HeNKqcx9pqOlL8ypMufboPVsPKZcCEfAJCeg6J21fHJt1+aNUuHx8SlztO/P9Uq/YdbVbxd5erFJltpui06VNfWt5xCTUX0THChKe19JipQEHt9EgbHrrHbvWoW3FRo261Ma7LlWra+46voPhvzBArEO4WsnW/SUvutSKtaB+/kQ230x0srLLqI6VbL7QSCOh9Dq5ZS8DYn2pcaaToSOpvjmzDTpdSkf5dajzTwa+0UBU0OntHaoOExj0I9O0/x1ddy1ODTRfY7ayLV71ISo6UPTcPjlyQYNdlU6s0ObNntKU5HRLmRnpagN/Z91cfsSF+m56Aemx662Z7pWlFSioan9mzSlJSfXN1k/FrgcVtnxh5Fu+G+zf8AcNExsw+pbrrVOQqtS33/AG0IQHm3Ex46WiU7qSlRO/UddaqyqPgbuL2rKUfmf4G64r8NFlW9c8S6cg5QVc9L7kP1HG0KlsNUd+U3HLKV+7KU472FQQ4Udv8AMnodW3srq5E1gbFGxJNPVMuatWipt226BQUOKdTRYUWIl1f86hGYSyCr9SE9dalSdS+apyHVC4aAaAaAaAaAaAaAaAaAaAaAaAaAaAH00B4dp1dUt+Ydv8NKish2nSo+Ydv8NKish2nSo+YduqVK/Ma9vXSoqzy1QqNANANANANANANANANAf//Z"

/***/ }),

/***/ 178:
/*!****************************************************!*\
  !*** D:/特惠采购/Supplier-wares/static/image/logo.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUUxRTI4RDlGQkRFMTFFQTlCMkJCQjZDOTU0RDQ4NUUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUUxRTI4REFGQkRFMTFFQTlCMkJCQjZDOTU0RDQ4NUUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxRTFFMjhEN0ZCREUxMUVBOUIyQkJCNkM5NTRENDg1RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxRTFFMjhEOEZCREUxMUVBOUIyQkJCNkM5NTRENDg1RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiSP1noAAGirSURBVHja7L0HnFzV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"

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

/***/ 203:
/*!******************************************************!*\
  !*** D:/特惠采购/Supplier-wares/static/image/banner.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/image/banner.jpg";

/***/ }),

/***/ 211:
/*!******************************************************!*\
  !*** D:/特惠采购/Supplier-wares/static/image/active.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqsAAAByCAYAAAB0tZg/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzMzMDU5MzVFMTIxMTFFQTgyRThDRTVFMzBFODFBNTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzMzMDU5MzZFMTIxMTFFQTgyRThDRTVFMzBFODFBNTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3MzMwNTkzM0UxMjExMUVBODJFOENFNUUzMEU4MUE1MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3MzMwNTkzNEUxMjExMUVBODJFOENFNUUzMEU4MUE1MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkkFPZQAAGqeSURBVHja7J0HfBzl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"

/***/ }),

/***/ 226:
/*!***************************************************!*\
  !*** D:/特惠采购/Supplier-wares/static/image/pro.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABaAAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMxNTVEOTE0RTM2NzExRUFBQkNDOTVENzEzOTMwQTI0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjMxNTVEOTE1RTM2NzExRUFBQkNDOTVENzEzOTMwQTI0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzE1NUQ5MTJFMzY3MTFFQUFCQ0M5NUQ3MTM5MzBBMjQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzE1NUQ5MTNFMzY3MTFFQUFCQ0M5NUQ3MTM5MzBBMjQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAgEBAQICAgEB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"

/***/ }),

/***/ 234:
/*!************************************************************!*\
  !*** D:/特惠采购/Supplier-wares/components/uni-popup/popup.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _message = _interopRequireDefault(__webpack_require__(/*! ./message.js */ 235));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
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

/***/ 235:
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

/***/ 295:
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

/***/ 4:
/*!*****************************************!*\
  !*** D:/特惠采购/Supplier-wares/pages.json ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 487:
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

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map