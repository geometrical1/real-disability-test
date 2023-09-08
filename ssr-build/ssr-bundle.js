module.exports =
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "qVkA");
/******/ })
/************************************************************************/
/******/ ({

/***/ "HteQ":
/***/ (function(module, exports) {

module.exports = require("preact");

/***/ }),

/***/ "Y3FI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribers", function() { return subscribers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUrl", function() { return getCurrentUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "route", function() { return route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exec", function() { return exec; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);

var EMPTY$1 = {};
function assign(obj, props) {
  // eslint-disable-next-line guard-for-in
  for (var i in props) {
    obj[i] = props[i];
  }
  return obj;
}
function exec(url, route, opts) {
  var reg = /(?:\?([^#]*))?(#.*)?$/,
    c = url.match(reg),
    matches = {},
    ret;
  if (c && c[1]) {
    var p = c[1].split('&');
    for (var i = 0; i < p.length; i++) {
      var r = p[i].split('=');
      matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
    }
  }
  url = segmentize(url.replace(reg, ''));
  route = segmentize(route || '');
  var max = Math.max(url.length, route.length);
  for (var i$1 = 0; i$1 < max; i$1++) {
    if (route[i$1] && route[i$1].charAt(0) === ':') {
      var param = route[i$1].replace(/(^:|[+*?]+$)/g, ''),
        flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
        plus = ~flags.indexOf('+'),
        star = ~flags.indexOf('*'),
        val = url[i$1] || '';
      if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
        ret = false;
        break;
      }
      matches[param] = decodeURIComponent(val);
      if (plus || star) {
        matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
        break;
      }
    } else if (route[i$1] !== url[i$1]) {
      ret = false;
      break;
    }
  }
  if (opts.default !== true && ret === false) {
    return false;
  }
  return matches;
}
function pathRankSort(a, b) {
  return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
}

// filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.
function prepareVNodeForRanking(vnode, index) {
  vnode.index = index;
  vnode.rank = rankChild(vnode);
  return vnode.props;
}
function segmentize(url) {
  return url.replace(/(^\/+|\/+$)/g, '').split('/');
}
function rankSegment(segment) {
  return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}
function rank(path) {
  return segmentize(path).map(rankSegment).join('');
}
function rankChild(vnode) {
  return vnode.props.default ? 0 : rank(vnode.props.path);
}
var customHistory = null;
var ROUTERS = [];
var subscribers = [];
var EMPTY = {};
function setUrl(url, type) {
  if (type === void 0) type = 'push';
  if (customHistory && customHistory[type]) {
    customHistory[type](url);
  } else if (typeof history !== 'undefined' && history[type + 'State']) {
    history[type + 'State'](null, null, url);
  }
}
function getCurrentUrl() {
  var url;
  if (customHistory && customHistory.location) {
    url = customHistory.location;
  } else if (customHistory && customHistory.getCurrentLocation) {
    url = customHistory.getCurrentLocation();
  } else {
    url = typeof location !== 'undefined' ? location : EMPTY;
  }
  return "" + (url.pathname || '') + (url.search || '');
}
function route(url, replace) {
  if (replace === void 0) replace = false;
  if (typeof url !== 'string' && url.url) {
    replace = url.replace;
    url = url.url;
  }

  // only push URL into history if we can handle it
  if (canRoute(url)) {
    setUrl(url, replace ? 'replace' : 'push');
  }
  return routeTo(url);
}

/** Check if the given URL can be handled by any router instances. */
function canRoute(url) {
  for (var i = ROUTERS.length; i--;) {
    if (ROUTERS[i].canRoute(url)) {
      return true;
    }
  }
  return false;
}

/** Tell all router instances to handle the given URL.  */
function routeTo(url) {
  var didRoute = false;
  for (var i = 0; i < ROUTERS.length; i++) {
    if (ROUTERS[i].routeTo(url) === true) {
      didRoute = true;
    }
  }
  for (var i$1 = subscribers.length; i$1--;) {
    subscribers[i$1](url);
  }
  return didRoute;
}
function routeFromLink(node) {
  // only valid elements
  if (!node || !node.getAttribute) {
    return;
  }
  var href = node.getAttribute('href'),
    target = node.getAttribute('target');

  // ignore links with targets and non-path URLs
  if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
    return;
  }

  // attempt to route, if no match simply cede control to browser
  return route(href);
}
function handleLinkClick(e) {
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }
  routeFromLink(e.currentTarget || e.target || this);
  return prevent(e);
}
function prevent(e) {
  if (e) {
    if (e.stopImmediatePropagation) {
      e.stopImmediatePropagation();
    }
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    e.preventDefault();
  }
  return false;
}
function delegateLinkHandler(e) {
  // ignore events the browser takes care of already:
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }
  var t = e.target;
  do {
    if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href')) {
      if (t.hasAttribute('native')) {
        return;
      }
      // if link is handled by the router, prevent browser defaults
      if (routeFromLink(t)) {
        return prevent(e);
      }
    }
  } while (t = t.parentNode);
}
var eventListenersInitialized = false;
function initEventListeners() {
  if (eventListenersInitialized) {
    return;
  }
  if (typeof addEventListener === 'function') {
    if (!customHistory) {
      addEventListener('popstate', function () {
        routeTo(getCurrentUrl());
      });
    }
    addEventListener('click', delegateLinkHandler);
  }
  eventListenersInitialized = true;
}
var Router = function (Component$$1) {
  function Router(props) {
    Component$$1.call(this, props);
    if (props.history) {
      customHistory = props.history;
    }
    this.state = {
      url: props.url || getCurrentUrl()
    };
    initEventListeners();
  }
  if (Component$$1) Router.__proto__ = Component$$1;
  Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
  Router.prototype.constructor = Router;
  Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (props.static !== true) {
      return true;
    }
    return props.url !== this.props.url || props.onChange !== this.props.onChange;
  };

  /** Check if the given URL can be matched against any children */
  Router.prototype.canRoute = function canRoute(url) {
    var children = Object(preact__WEBPACK_IMPORTED_MODULE_0__["toChildArray"])(this.props.children);
    return this.getMatchingChildren(children, url, false).length > 0;
  };

  /** Re-render children with a new URL to match against. */
  Router.prototype.routeTo = function routeTo(url) {
    this.setState({
      url: url
    });
    var didRoute = this.canRoute(url);

    // trigger a manual re-route if we're not in the middle of an update:
    if (!this.updating) {
      this.forceUpdate();
    }
    return didRoute;
  };
  Router.prototype.componentWillMount = function componentWillMount() {
    ROUTERS.push(this);
    this.updating = true;
  };
  Router.prototype.componentDidMount = function componentDidMount() {
    var this$1 = this;
    if (customHistory) {
      this.unlisten = customHistory.listen(function (location) {
        this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
      });
    }
    this.updating = false;
  };
  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    if (typeof this.unlisten === 'function') {
      this.unlisten();
    }
    ROUTERS.splice(ROUTERS.indexOf(this), 1);
  };
  Router.prototype.componentWillUpdate = function componentWillUpdate() {
    this.updating = true;
  };
  Router.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updating = false;
  };
  Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
    return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
      var matches = exec(url, vnode.props.path, vnode.props);
      if (matches) {
        if (invoke !== false) {
          var newProps = {
            url: url,
            matches: matches
          };
          assign(newProps, matches);
          delete newProps.ref;
          delete newProps.key;
          return Object(preact__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(vnode, newProps);
        }
        return vnode;
      }
    }).filter(Boolean);
  };
  Router.prototype.render = function render(ref, ref$1) {
    var children = ref.children;
    var onChange = ref.onChange;
    var url = ref$1.url;
    var active = this.getMatchingChildren(Object(preact__WEBPACK_IMPORTED_MODULE_0__["toChildArray"])(children), url, true);
    var current = active[0] || null;
    var previous = this.previousUrl;
    if (url !== previous) {
      this.previousUrl = url;
      if (typeof onChange === 'function') {
        onChange({
          router: this,
          url: url,
          previous: previous,
          active: active,
          current: current
        });
      }
    }
    return current;
  };
  return Router;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);
var Link = function Link(props) {
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["createElement"])('a', assign({
    onClick: handleLinkClick
  }, props));
};
var Route = function Route(props) {
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["createElement"])(props.component, props);
};
Router.subscribers = subscribers;
Router.getCurrentUrl = getCurrentUrl;
Router.route = route;
Router.Router = Router;
Router.Route = Route;
Router.Link = Link;
Router.exec = exec;

/* harmony default export */ __webpack_exports__["default"] = (Router);

/***/ }),

/***/ "ox/y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = exports.Match = undefined;
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _preact = __webpack_require__("HteQ");
var _preactRouter = __webpack_require__("Y3FI");
function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var Match = exports.Match = function (_Component) {
  _inherits(Match, _Component);
  function Match() {
    var _temp, _this, _ret;
    _classCallCheck(this, Match);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.update = function (url) {
      _this.nextUrl = url;
      _this.setState({});
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  Match.prototype.componentDidMount = function componentDidMount() {
    _preactRouter.subscribers.push(this.update);
  };
  Match.prototype.componentWillUnmount = function componentWillUnmount() {
    _preactRouter.subscribers.splice(_preactRouter.subscribers.indexOf(this.update) >>> 0, 1);
  };
  Match.prototype.render = function render(props) {
    var url = this.nextUrl || (0, _preactRouter.getCurrentUrl)(),
      path = url.replace(/\?.+$/, '');
    this.nextUrl = null;
    return props.children({
      url: url,
      path: path,
      matches: (0, _preactRouter.exec)(path, props.path, {}) !== false
    });
  };
  return Match;
}(_preact.Component);
var Link = function Link(_ref) {
  var activeClassName = _ref.activeClassName,
    path = _ref.path,
    props = _objectWithoutProperties(_ref, ['activeClassName', 'path']);
  return (0, _preact.h)(Match, {
    path: path || props.href
  }, function (_ref2) {
    var matches = _ref2.matches;
    return (0, _preact.h)(_preactRouter.Link, _extends({}, props, {
      'class': [props.class || props.className, matches && activeClassName].filter(Boolean).join(' ')
    }));
  });
};
exports.Link = Link;
exports.default = Match;
Match.Link = Link;

/***/ }),

/***/ "qVkA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./style/index.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: external "preact"
var external_preact_ = __webpack_require__("HteQ");

// EXTERNAL MODULE: ../node_modules/preact-router/dist/preact-router.es.js
var preact_router_es = __webpack_require__("Y3FI");

// EXTERNAL MODULE: ../node_modules/preact-router/match.js
var match = __webpack_require__("ox/y");

// CONCATENATED MODULE: ./components/header/style.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var style = ({"header":"header__OVZyn","logo":"logo__jPF5-","active":"active__r+Z6z"});
// CONCATENATED MODULE: ./components/header/index.tsx



var header_Header = function Header() {
  return Object(external_preact_["h"])("header", {
    class: style.header
  }, Object(external_preact_["h"])("nav", null, Object(external_preact_["h"])(match["Link"], {
    activeClassName: style.active,
    href: "/"
  }, "home"), Object(external_preact_["h"])(match["Link"], {
    activeClassName: style.active,
    href: "/test/"
  }, "tests")));
};
/* harmony default export */ var header = (header_Header);
// CONCATENATED MODULE: ./routes/home/style.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var home_style = ({"home":"home__uRcqa","resource":"resource__reFLt"});
// CONCATENATED MODULE: ./routes/home/index.tsx


var home_Home = function Home() {
  return Object(external_preact_["h"])("div", {
    class: home_style.home
  }, Object(external_preact_["h"])("h1", null, "Get started and take a disability test"), Object(external_preact_["h"])("section", null, Object(external_preact_["h"])(home_Resource, {
    title: "autism test",
    description: "This test checks if you have autism",
    link: "/test/autism"
  }), Object(external_preact_["h"])(home_Resource, {
    title: "adhd test",
    description: "This test checks if you have adhd",
    link: "/test/adhd"
  }), Object(external_preact_["h"])(home_Resource, {
    title: "dyslexia test",
    description: "this test checks if you have dyslexia",
    link: "/test/dyslexia"
  })));
};
var home_Resource = function Resource(props) {
  return Object(external_preact_["h"])("a", {
    href: props.link,
    class: home_style.resource
  }, Object(external_preact_["h"])("h2", null, props.title), Object(external_preact_["h"])("p", null, props.description));
};
/* harmony default export */ var home = (home_Home);
// CONCATENATED MODULE: ./routes/disabilitytest/style.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var disabilitytest_style = ({"home":"home__zuMEz","resource":"resource__ABPoQ"});
// CONCATENATED MODULE: ./routes/disabilitytest/index.tsx


var testUrls = [{
  name: "autism",
  url: "autism",
  description: "Checks if you have autism."
}, {
  name: "adhd",
  url: "adhd",
  description: "Checks if you have adhd."
}, {
  name: "dyslexia",
  url: "dyslexia",
  description: "Checks if you dyslexia"
}];
var disabilitytest_TestsComponents = function TestsComponents() {
  var elements = [];
  for (var _i = 0, _testUrls = testUrls; _i < _testUrls.length; _i++) {
    var test = _testUrls[_i];
    elements.push(Object(external_preact_["h"])(disabilitytest_Resource, {
      title: test.name,
      description: test.description,
      link: "/test/".concat(test.url)
    }));
    elements.push(Object(external_preact_["h"])("br", null));
  }
  return Object(external_preact_["h"])("div", {
    id: "tests",
    class: disabilitytest_style.home
  }, Object(external_preact_["h"])("h1", null, "Select a test"), Object(external_preact_["h"])("section", null, elements));
};
var disabilitytest_Resource = function Resource(props) {
  return Object(external_preact_["h"])("a", {
    href: props.link,
    class: disabilitytest_style.resource
  }, Object(external_preact_["h"])("h2", null, props.title), Object(external_preact_["h"])("p", null, props.description));
};
/* harmony default export */ var disabilitytest = (disabilitytest_TestsComponents);
// CONCATENATED MODULE: ../node_modules/preact/hooks/dist/hooks.module.js

var hooks_module_t,
  hooks_module_r,
  hooks_module_u,
  hooks_module_i,
  hooks_module_o = 0,
  f = [],
  c = [],
  e = external_preact_["options"].__b,
  a = external_preact_["options"].__r,
  v = external_preact_["options"].diffed,
  l = external_preact_["options"].__c,
  m = external_preact_["options"].unmount;
function d(t, u) {
  external_preact_["options"].__h && external_preact_["options"].__h(hooks_module_r, t, hooks_module_o || u), hooks_module_o = 0;
  var i = hooks_module_r.__H || (hooks_module_r.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({
    __V: c
  }), i.__[t];
}
function h(n) {
  return hooks_module_o = 1, s(B, n);
}
function s(n, u, i) {
  var o = d(hooks_module_t++, 2);
  if (o.t = n, !o.__c && (o.__ = [i ? i(u) : B(void 0, u), function (n) {
    var t = o.__N ? o.__N[0] : o.__[0],
      r = o.t(t, n);
    t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
  }], o.__c = hooks_module_r, !hooks_module_r.u)) {
    var f = function f(n, t, r) {
      if (!o.__c.__H) return !0;
      var u = o.__c.__H.__.filter(function (n) {
        return n.__c;
      });
      if (u.every(function (n) {
        return !n.__N;
      })) return !c || c.call(this, n, t, r);
      var i = !1;
      return u.forEach(function (n) {
        if (n.__N) {
          var t = n.__[0];
          n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
        }
      }), !(!i && o.__c.props === n) && (!c || c.call(this, n, t, r));
    };
    hooks_module_r.u = !0;
    var c = hooks_module_r.shouldComponentUpdate,
      e = hooks_module_r.componentWillUpdate;
    hooks_module_r.componentWillUpdate = function (n, t, r) {
      if (this.__e) {
        var u = c;
        c = void 0, f(n, t, r), c = u;
      }
      e && e.call(this, n, t, r);
    }, hooks_module_r.shouldComponentUpdate = f;
  }
  return o.__N || o.__;
}
function p(u, i) {
  var o = d(hooks_module_t++, 3);
  !external_preact_["options"].__s && z(o.__H, i) && (o.__ = u, o.i = i, hooks_module_r.__H.__h.push(o));
}
function y(u, i) {
  var o = d(hooks_module_t++, 4);
  !external_preact_["options"].__s && z(o.__H, i) && (o.__ = u, o.i = i, hooks_module_r.__h.push(o));
}
function _(n) {
  return hooks_module_o = 5, F(function () {
    return {
      current: n
    };
  }, []);
}
function A(n, t, r) {
  hooks_module_o = 6, y(function () {
    return "function" == typeof n ? (n(t()), function () {
      return n(null);
    }) : n ? (n.current = t(), function () {
      return n.current = null;
    }) : void 0;
  }, null == r ? r : r.concat(n));
}
function F(n, r) {
  var u = d(hooks_module_t++, 7);
  return z(u.__H, r) ? (u.__V = n(), u.i = r, u.__h = n, u.__V) : u.__;
}
function T(n, t) {
  return hooks_module_o = 8, F(function () {
    return n;
  }, t);
}
function q(n) {
  var u = hooks_module_r.context[n.__c],
    i = d(hooks_module_t++, 9);
  return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(hooks_module_r)), u.props.value) : n.__;
}
function x(t, r) {
  external_preact_["options"].useDebugValue && external_preact_["options"].useDebugValue(r ? r(t) : t);
}
function P(n) {
  var u = d(hooks_module_t++, 10),
    i = h();
  return u.__ = n, hooks_module_r.componentDidCatch || (hooks_module_r.componentDidCatch = function (n, t) {
    u.__ && u.__(n, t), i[1](n);
  }), [i[0], function () {
    i[1](void 0);
  }];
}
function V() {
  var n = d(hooks_module_t++, 11);
  if (!n.__) {
    for (var u = hooks_module_r.__v; null !== u && !u.__m && null !== u.__;) u = u.__;
    var i = u.__m || (u.__m = [0, 0]);
    n.__ = "P" + i[0] + "-" + i[1]++;
  }
  return n.__;
}
function b() {
  for (var t; t = f.shift();) if (t.__P && t.__H) try {
    t.__H.__h.forEach(k), t.__H.__h.forEach(w), t.__H.__h = [];
  } catch (r) {
    t.__H.__h = [], external_preact_["options"].__e(r, t.__v);
  }
}
external_preact_["options"].__b = function (n) {
  hooks_module_r = null, e && e(n);
}, external_preact_["options"].__r = function (n) {
  a && a(n), hooks_module_t = 0;
  var i = (hooks_module_r = n.__c).__H;
  i && (hooks_module_u === hooks_module_r ? (i.__h = [], hooks_module_r.__h = [], i.__.forEach(function (n) {
    n.__N && (n.__ = n.__N), n.__V = c, n.__N = n.i = void 0;
  })) : (i.__h.forEach(k), i.__h.forEach(w), i.__h = [], hooks_module_t = 0)), hooks_module_u = hooks_module_r;
}, external_preact_["options"].diffed = function (t) {
  v && v(t);
  var o = t.__c;
  o && o.__H && (o.__H.__h.length && (1 !== f.push(o) && hooks_module_i === external_preact_["options"].requestAnimationFrame || ((hooks_module_i = external_preact_["options"].requestAnimationFrame) || j)(b)), o.__H.__.forEach(function (n) {
    n.i && (n.__H = n.i), n.__V !== c && (n.__ = n.__V), n.i = void 0, n.__V = c;
  })), hooks_module_u = hooks_module_r = null;
}, external_preact_["options"].__c = function (t, r) {
  r.some(function (t) {
    try {
      t.__h.forEach(k), t.__h = t.__h.filter(function (n) {
        return !n.__ || w(n);
      });
    } catch (u) {
      r.some(function (n) {
        n.__h && (n.__h = []);
      }), r = [], external_preact_["options"].__e(u, t.__v);
    }
  }), l && l(t, r);
}, external_preact_["options"].unmount = function (t) {
  m && m(t);
  var r,
    u = t.__c;
  u && u.__H && (u.__H.__.forEach(function (n) {
    try {
      k(n);
    } catch (n) {
      r = n;
    }
  }), u.__H = void 0, r && external_preact_["options"].__e(r, u.__v));
};
var g = "function" == typeof requestAnimationFrame;
function j(n) {
  var t,
    r = function r() {
      clearTimeout(u), g && cancelAnimationFrame(t), setTimeout(n);
    },
    u = setTimeout(r, 100);
  g && (t = requestAnimationFrame(r));
}
function k(n) {
  var t = hooks_module_r,
    u = n.__c;
  "function" == typeof u && (n.__c = void 0, u()), hooks_module_r = t;
}
function w(n) {
  var t = hooks_module_r;
  n.__c = n.__(), hooks_module_r = t;
}
function z(n, t) {
  return !n || n.length !== t.length || t.some(function (t, r) {
    return t !== n[r];
  });
}
function B(n, t) {
  return "function" == typeof t ? t(n) : t;
}

// CONCATENATED MODULE: ./routes/disabilitytest/tests/style.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var tests_style = ({"bigButton":"bigButton__yoy3E","greenButton":"greenButton__PuDku","redButton":"redButton__SYgcr"});
// CONCATENATED MODULE: ./routes/disabilitytest/tests/autism.tsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var autism_Autism = function Autism() {
  var _useState = h(false),
    _useState2 = _slicedToArray(_useState, 2),
    started = _useState2[0],
    changeStart = _useState2[1];
  var _useState3 = h(0),
    _useState4 = _slicedToArray(_useState3, 2),
    yesOrNo = _useState4[0],
    testResultChange = _useState4[1];
  return Object(external_preact_["h"])("div", {
    id: "parentDiv"
  }, Object(external_preact_["h"])("div", {
    id: "test",
    style: started ? "display: none" : "text-align: center"
  }, Object(external_preact_["h"])("h1", null, "Click below to get started"), Object(external_preact_["h"])("button", {
    id: "start",
    class: tests_style.bigButton,
    onClick: function onClick() {
      return changeStart(true);
    }
  }, "Start")), Object(external_preact_["h"])("div", {
    id: "the-test",
    style: started && yesOrNo === 0 ? "text-align: center" : "display: none"
  }, Object(external_preact_["h"])("h1", null, "Are you autistic"), Object(external_preact_["h"])("button", {
    id: "yes",
    class: "".concat(tests_style.bigButton, " ").concat(tests_style.greenButton),
    onClick: function onClick() {
      return testResultChange(1);
    }
  }, "Yes"), Object(external_preact_["h"])("a", null, "  "), Object(external_preact_["h"])("button", {
    id: "no",
    class: "".concat(tests_style.bigButton, " ").concat(tests_style.redButton),
    onClick: function onClick() {
      return testResultChange(2);
    }
  }, "No"), Object(external_preact_["h"])("h3", null, "Question 1 out of 30")), Object(external_preact_["h"])("div", {
    id: "results",
    style: yesOrNo !== 0 ? "text-align: center" : "display: none"
  }, Object(external_preact_["h"])("h2", null, "Our results indicate that:"), Object(external_preact_["h"])("h1", {
    style: yesOrNo !== 1 ? "color: green" : "color: red"
  }, yesOrNo !== 1 ? "You arent autistic" : "You are autistic")));
};
/* harmony default export */ var autism = (autism_Autism);
// CONCATENATED MODULE: ./routes/disabilitytest/tests/adhd.tsx
function adhd_slicedToArray(arr, i) { return adhd_arrayWithHoles(arr) || adhd_iterableToArrayLimit(arr, i) || adhd_unsupportedIterableToArray(arr, i) || adhd_nonIterableRest(); }
function adhd_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function adhd_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return adhd_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return adhd_arrayLikeToArray(o, minLen); }
function adhd_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function adhd_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function adhd_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var adhd_ADHD = function ADHD() {
  var _useState = h(false),
    _useState2 = adhd_slicedToArray(_useState, 2),
    started = _useState2[0],
    changeStart = _useState2[1];
  var _useState3 = h(0),
    _useState4 = adhd_slicedToArray(_useState3, 2),
    yesOrNo = _useState4[0],
    testResultChange = _useState4[1];
  return Object(external_preact_["h"])("div", {
    id: "parentDiv"
  }, Object(external_preact_["h"])("div", {
    id: "test",
    style: started ? "display: none" : "text-align: center"
  }, Object(external_preact_["h"])("h1", null, "Click below to get started"), Object(external_preact_["h"])("button", {
    id: "start",
    class: tests_style.bigButton,
    onClick: function onClick() {
      return changeStart(true);
    }
  }, "Start")), Object(external_preact_["h"])("div", {
    id: "the-test",
    style: started && yesOrNo === 0 ? "text-align: center" : "display: none"
  }, Object(external_preact_["h"])("h1", null, "Do you have ADHD"), Object(external_preact_["h"])("button", {
    id: "yes",
    class: "".concat(tests_style.bigButton, " ").concat(tests_style.greenButton),
    onClick: function onClick() {
      return testResultChange(1);
    }
  }, "Yes"), Object(external_preact_["h"])("a", null, "  "), Object(external_preact_["h"])("button", {
    id: "no",
    class: "".concat(tests_style.bigButton, " ").concat(tests_style.redButton),
    onClick: function onClick() {
      return testResultChange(2);
    }
  }, "No"), Object(external_preact_["h"])("h3", null, "Question 1 out of 20")), Object(external_preact_["h"])("div", {
    id: "results",
    style: yesOrNo !== 0 ? "text-align: center" : "display: none"
  }, Object(external_preact_["h"])("h2", null, "Our results indicate that:"), Object(external_preact_["h"])("h1", {
    style: yesOrNo !== 1 ? "color: green" : "color: red"
  }, yesOrNo !== 1 ? "You don't have ADHD" : "You have ADHD")));
};
/* harmony default export */ var adhd = (adhd_ADHD);
// CONCATENATED MODULE: ./routes/disabilitytest/tests/dyslexia.tsx
function dyslexia_slicedToArray(arr, i) { return dyslexia_arrayWithHoles(arr) || dyslexia_iterableToArrayLimit(arr, i) || dyslexia_unsupportedIterableToArray(arr, i) || dyslexia_nonIterableRest(); }
function dyslexia_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function dyslexia_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return dyslexia_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dyslexia_arrayLikeToArray(o, minLen); }
function dyslexia_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function dyslexia_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function dyslexia_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var dyslexia_Dyslexic = function Dyslexic() {
  var _useState = h(false),
    _useState2 = dyslexia_slicedToArray(_useState, 2),
    started = _useState2[0],
    changeStart = _useState2[1];
  var _useState3 = h(0),
    _useState4 = dyslexia_slicedToArray(_useState3, 2),
    yesOrNo = _useState4[0],
    testResultChange = _useState4[1];
  return Object(external_preact_["h"])("div", {
    id: "parentDiv"
  }, Object(external_preact_["h"])("div", {
    id: "test",
    style: started ? "display: none" : "text-align: center"
  }, Object(external_preact_["h"])("h1", null, "Click below to get started"), Object(external_preact_["h"])("button", {
    id: "start",
    class: tests_style.bigButton,
    onClick: function onClick() {
      return changeStart(true);
    }
  }, "Start")), Object(external_preact_["h"])("div", {
    id: "the-test",
    style: started && yesOrNo === 0 ? "text-align: center" : "display: none"
  }, Object(external_preact_["h"])("h1", null, "Are you dyslexic"), Object(external_preact_["h"])("button", {
    id: "yes",
    class: "".concat(tests_style.bigButton, " ").concat(tests_style.greenButton),
    onClick: function onClick() {
      return testResultChange(1);
    }
  }, "Yes"), Object(external_preact_["h"])("a", null, "  "), Object(external_preact_["h"])("button", {
    id: "no",
    class: "".concat(tests_style.bigButton, " ").concat(tests_style.redButton),
    onClick: function onClick() {
      return testResultChange(2);
    }
  }, "No"), Object(external_preact_["h"])("h3", null, "Question 1 out of 30")), Object(external_preact_["h"])("div", {
    id: "results",
    style: yesOrNo !== 0 ? "text-align: center" : "display: none"
  }, Object(external_preact_["h"])("h2", null, "Our results indicate that:"), Object(external_preact_["h"])("h1", {
    style: yesOrNo !== 1 ? "color: green" : "color: red"
  }, yesOrNo !== 1 ? "You arent dyslexic" : "You are dyslexic")));
};
/* harmony default export */ var dyslexia = (dyslexia_Dyslexic);
// CONCATENATED MODULE: ./routes/disabilitytest/tests/index.tsx




var tests_test = function test(_ref) {
  var test = _ref.test;
  var toReturn = Object(external_preact_["h"])("h1", null, "Test not found");
  switch (test) {
    case "autism":
      toReturn = Object(external_preact_["h"])(autism, null);
      break;
    case "adhd":
      toReturn = Object(external_preact_["h"])(adhd, null);
      break;
    case "dyslexia":
      toReturn = Object(external_preact_["h"])(dyslexia, null);
      break;
  }
  return toReturn;
};
/* harmony default export */ var tests = (tests_test);
// CONCATENATED MODULE: ./components/app.tsx




// Code-splitting is automated for `routes` directory



var app_App = function App() {
  return Object(external_preact_["h"])("div", {
    id: "app"
  }, Object(external_preact_["h"])(header, null), Object(external_preact_["h"])("main", null, Object(external_preact_["h"])(preact_router_es["Router"], null, Object(external_preact_["h"])(preact_router_es["Route"], {
    path: "/real-disability-test/",
    component: home
  }), Object(external_preact_["h"])(preact_router_es["Route"], {
    path: "/real-disability-test/test/",
    component: disabilitytest
  }), Object(external_preact_["h"])(preact_router_es["Route"], {
    path: "/real-disability-test/test/:test",
    component: tests
  }))));
};
/* harmony default export */ var app = (app_App);
// CONCATENATED MODULE: ./index.ts


/* harmony default export */ var index = __webpack_exports__["default"] = (app);

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map