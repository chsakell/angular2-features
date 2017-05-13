// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-slim-loading-bar
'use strict';
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var slim_loading_bar_component_1 = require('./src/slim-loading-bar.component');
var slim_loading_bar_service_1 = require('./src/slim-loading-bar.service');
__export(require('./src/slim-loading-bar.component'));
__export(require('./src/slim-loading-bar.service'));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    providers: [slim_loading_bar_service_1.SlimLoadingBarService],
    directives: [slim_loading_bar_component_1.SlimLoadingBarComponent]
};
//# sourceMappingURL=index.js.map