"use strict";
var browser_1 = require('./utils/facade/browser');
(function (Ng2BootstrapTheme) {
    Ng2BootstrapTheme[Ng2BootstrapTheme["BS3"] = 1] = "BS3";
    Ng2BootstrapTheme[Ng2BootstrapTheme["BS4"] = 2] = "BS4";
})(exports.Ng2BootstrapTheme || (exports.Ng2BootstrapTheme = {}));
var Ng2BootstrapTheme = exports.Ng2BootstrapTheme;
var Ng2BootstrapConfig = (function () {
    function Ng2BootstrapConfig() {
    }
    Object.defineProperty(Ng2BootstrapConfig, "theme", {
        get: function () {
            // hack as for now
            if (browser_1.window.__theme === 'bs4') {
                return Ng2BootstrapTheme.BS4;
            }
            return (this._theme || Ng2BootstrapTheme.BS3);
        },
        set: function (v) {
            this._theme = v;
        },
        enumerable: true,
        configurable: true
    });
    return Ng2BootstrapConfig;
}());
exports.Ng2BootstrapConfig = Ng2BootstrapConfig;
