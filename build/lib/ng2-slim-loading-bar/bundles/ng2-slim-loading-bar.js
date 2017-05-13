System.registerDynamic("src/slim-loading-bar.component", ["@angular/core", "@angular/common", "./slim-loading-bar.service", "./slim-loading-bar.utils"], true, function ($__require, exports, module) {
    // Copyright (C) 2016 Sergey Akopkokhyants
    // This project is licensed under the terms of the MIT license.
    // https://github.com/akserg/ng2-slim-loading-bar
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var common_1 = $__require("@angular/common");
    var slim_loading_bar_service_1 = $__require("./slim-loading-bar.service");
    var slim_loading_bar_utils_1 = $__require("./slim-loading-bar.utils");
    /**
     * A Slim Loading Bar component shows message loading progress bar on the top of web page or parent component.
     */
    var SlimLoadingBarComponent = function () {
        function SlimLoadingBarComponent(service) {
            this.service = service;
            this._progress = '0%';
            this.color = 'firebrick';
            this.height = '2px';
            this.show = true;
        }
        Object.defineProperty(SlimLoadingBarComponent.prototype, "progress", {
            get: function () {
                return this._progress;
            },
            set: function (value) {
                if (slim_loading_bar_utils_1.isPresent(value)) {
                    this._progress = value + '%';
                }
            },
            enumerable: true,
            configurable: true
        });
        SlimLoadingBarComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.service.observable.subscribe(function (event) {
                if (event.type === slim_loading_bar_service_1.SlimLoadingBarEventType.PROGRESS) {
                    _this.progress = event.value;
                } else if (event.type === slim_loading_bar_service_1.SlimLoadingBarEventType.COLOR) {
                    _this.color = event.value;
                } else if (event.type === slim_loading_bar_service_1.SlimLoadingBarEventType.HEIGHT) {
                    _this.height = event.value;
                } else if (event.type === slim_loading_bar_service_1.SlimLoadingBarEventType.VISIBLE) {
                    _this.show = event.value;
                }
            });
        };
        __decorate([core_1.Input(), __metadata('design:type', String), __metadata('design:paramtypes', [String])], SlimLoadingBarComponent.prototype, "progress", null);
        __decorate([core_1.Input(), __metadata('design:type', String)], SlimLoadingBarComponent.prototype, "color", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], SlimLoadingBarComponent.prototype, "height", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], SlimLoadingBarComponent.prototype, "show", void 0);
        SlimLoadingBarComponent = __decorate([core_1.Component({
            selector: 'ng2-slim-loading-bar',
            directives: [common_1.CORE_DIRECTIVES],
            template: "\n<div class=\"slim-loading-bar\">\n    <div class=\"slim-loading-bar-progress\" [style.width]=\"progress\" [style.backgroundColor]=\"color\" [style.color]=\"color\"\n        [style.height]=\"height\" [style.opacity]=\"show ? '1' : '0'\"></div>\n</div>"
        }), __metadata('design:paramtypes', [slim_loading_bar_service_1.SlimLoadingBarService])], SlimLoadingBarComponent);
        return SlimLoadingBarComponent;
    }();
    exports.SlimLoadingBarComponent = SlimLoadingBarComponent;
    

    return module.exports;
});
System.registerDynamic("src/slim-loading-bar.utils", [], true, function ($__require, exports, module) {
  "use strict";
  /**
   * Check and return true if an object not undefined or null
   */

  var define,
      global = this || self,
      GLOBAL = global;
  function isPresent(obj) {
    return obj !== undefined && obj !== null;
  }
  exports.isPresent = isPresent;
  

  return module.exports;
});
System.registerDynamic("src/slim-loading-bar.service", ["@angular/core", "rxjs/Observable", "./slim-loading-bar.utils"], true, function ($__require, exports, module) {
    // Copyright (C) 2016 Sergey Akopkokhyants
    // This project is licensed under the terms of the MIT license.
    // https://github.com/akserg/ng2-slim-loading-bar
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var Observable_1 = $__require("rxjs/Observable");
    var slim_loading_bar_utils_1 = $__require("./slim-loading-bar.utils");
    (function (SlimLoadingBarEventType) {
        SlimLoadingBarEventType[SlimLoadingBarEventType["PROGRESS"] = 0] = "PROGRESS";
        SlimLoadingBarEventType[SlimLoadingBarEventType["HEIGHT"] = 1] = "HEIGHT";
        SlimLoadingBarEventType[SlimLoadingBarEventType["COLOR"] = 2] = "COLOR";
        SlimLoadingBarEventType[SlimLoadingBarEventType["VISIBLE"] = 3] = "VISIBLE";
    })(exports.SlimLoadingBarEventType || (exports.SlimLoadingBarEventType = {}));
    var SlimLoadingBarEventType = exports.SlimLoadingBarEventType;
    var SlimLoadingBarEvent = function () {
        function SlimLoadingBarEvent(type, value) {
            this.type = type;
            this.value = value;
        }
        return SlimLoadingBarEvent;
    }();
    exports.SlimLoadingBarEvent = SlimLoadingBarEvent;
    /**
     * SlimLoadingBar service helps manage Slim Loading bar on the top of screen or parent component
     */
    var SlimLoadingBarService = function () {
        function SlimLoadingBarService() {
            var _this = this;
            this._progress = 0;
            this._height = '2px';
            this._color = 'firebrick';
            this._visible = true;
            this._intervalCounterId = 0;
            this.interval = 500; // in milliseconds
            this.observable = new Observable_1.Observable(function (subscriber) {
                _this.subscriber = subscriber;
            });
        }
        Object.defineProperty(SlimLoadingBarService.prototype, "progress", {
            get: function () {
                return this._progress;
            },
            set: function (value) {
                if (slim_loading_bar_utils_1.isPresent(value)) {
                    if (value > 0) {
                        this.visible = true;
                    }
                    this._progress = value;
                    this.emitEvent(new SlimLoadingBarEvent(SlimLoadingBarEventType.PROGRESS, this._progress));
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SlimLoadingBarService.prototype, "height", {
            get: function () {
                return this._height;
            },
            set: function (value) {
                if (slim_loading_bar_utils_1.isPresent(value)) {
                    this._height = value;
                    this.emitEvent(new SlimLoadingBarEvent(SlimLoadingBarEventType.HEIGHT, this._height));
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SlimLoadingBarService.prototype, "color", {
            get: function () {
                return this._color;
            },
            set: function (value) {
                if (slim_loading_bar_utils_1.isPresent(value)) {
                    this._color = value;
                    this.emitEvent(new SlimLoadingBarEvent(SlimLoadingBarEventType.COLOR, this._color));
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SlimLoadingBarService.prototype, "visible", {
            get: function () {
                return this._visible;
            },
            set: function (value) {
                if (slim_loading_bar_utils_1.isPresent(value)) {
                    this._visible = value;
                    this.emitEvent(new SlimLoadingBarEvent(SlimLoadingBarEventType.VISIBLE, this._visible));
                }
            },
            enumerable: true,
            configurable: true
        });
        SlimLoadingBarService.prototype.emitEvent = function (event) {
            if (this.subscriber) {
                // Push up a new event
                this.subscriber.next(event);
            }
        };
        SlimLoadingBarService.prototype.start = function (onCompleted) {
            var _this = this;
            if (onCompleted === void 0) {
                onCompleted = null;
            }
            // Stop current timer
            this.stop();
            // Make it visible for sure
            this.visible = true;
            // Run the timer with milliseconds iterval
            this._intervalCounterId = setInterval(function () {
                // Increment the progress and update view component
                _this.progress++;
                // If the progress is 100% - call complete
                if (_this.progress === 100) {
                    _this.complete();
                }
            }, this.interval);
        };
        SlimLoadingBarService.prototype.stop = function () {
            if (this._intervalCounterId) {
                clearInterval(this._intervalCounterId);
                this._intervalCounterId = null;
            }
        };
        SlimLoadingBarService.prototype.reset = function () {
            this.stop();
            this.progress = 0;
        };
        SlimLoadingBarService.prototype.complete = function () {
            var _this = this;
            this.progress = 100;
            this.stop();
            setTimeout(function () {
                // Hide it away
                _this.visible = false;
                setTimeout(function () {
                    // Drop to 0
                    _this.progress = 0;
                }, 250);
            }, 250);
        };
        SlimLoadingBarService = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [])], SlimLoadingBarService);
        return SlimLoadingBarService;
    }();
    exports.SlimLoadingBarService = SlimLoadingBarService;
    

    return module.exports;
});
System.registerDynamic('index', ['./src/slim-loading-bar.component', './src/slim-loading-bar.service'], true, function ($__require, exports, module) {
    // Copyright (C) 2016 Sergey Akopkokhyants
    // This project is licensed under the terms of the MIT license.
    // https://github.com/akserg/ng2-slim-loading-bar
    'use strict';

    var define,
        global = this || self,
        GLOBAL = global;
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    var slim_loading_bar_component_1 = $__require('./src/slim-loading-bar.component');
    var slim_loading_bar_service_1 = $__require('./src/slim-loading-bar.service');
    __export($__require('./src/slim-loading-bar.component'));
    __export($__require('./src/slim-loading-bar.service'));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        providers: [slim_loading_bar_service_1.SlimLoadingBarService],
        directives: [slim_loading_bar_component_1.SlimLoadingBarComponent]
    };
    

    return module.exports;
});