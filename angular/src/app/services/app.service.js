'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppService = (function () {
    function AppService() {
        this._url = 'http://localhost:5000';
        this._key = 'na253944576987953962978845952389';
        this._skyscannerapi = 'http://partners.api.skyscanner.net/apiservices/browseroutes/v1.0/GB/GBP/en-GB/US/FR/2017-11/2017-12?apiKey=';
    }
    AppService.prototype.getURL = function (url) {
        return this._url + url;
    };
    AppService.prototype.getSkyscannerKey = function () {
        return this._key;
    };
    AppService.prototype.getSkyscannerAPI = function () {
        return this._skyscannerapi;
    };
    return AppService;
}());
AppService = __decorate([
    core_1.Injectable()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map