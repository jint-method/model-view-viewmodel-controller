(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),o=t(2),u=t(15),d=t(16);new(function(){function e(){var e=this;this.handlePageLoad=function(){e.reinit()},this._deviceManager=null,this.init()}return e.prototype.init=function(){new i.Env,new o.default({debug:i.Env.isDebug}),this._deviceManager=new u.default(i.Env.isDebug,!0),new d.ModuleManager,document.addEventListener("pjax:complete",this.handlePageLoad)},e.prototype.reinit=function(){null!==this._deviceManager&&this._deviceManager.reinit(),d.ModuleManager.wrangleModules()},e}())},16:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(17),o=t(0),u=function(){function e(){e.initModules()}return e.wrangleModules=function(){this.initModules(),this.removeModules()},e.getModuleNames=function(e){var n=e.trim().split(/\s+/gi);return 1===n.length&&""===n[0]&&(n=[]),n},e.initModules=function(){var n=this,t=Array.from(document.body.querySelectorAll("[data-module]"));t.length&&t.forEach(function(t){if(!t.dataset.uuid){var u=e.getModuleNames(t.dataset.module),d=i();u.length&&u.forEach(function(e){if(void 0!==modules[e]){var i=new modules[e].prototype.constructor(t,d,n);n._modules.push(i),i.init()}else void 0===modules[e]&&o.Env.isDebug&&console.error("Module "+e+" is undefined")})}})},e.removeModules=function(){},e._modules=[],e}();n.ModuleManager=u}},[[1,0,4,5,1]]]);