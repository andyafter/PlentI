'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var core_1 = require("@angular/core");
var app_service_1 = require("./app.service");
var PlanService = (function () {
    function PlanService(_http, _appService) {
        this._http = _http;
        this._appService = _appService;
    }
    PlanService.prototype.getPlan = function () {
        return this._http.get(this._appService.getURL('/plan'))
            .map(function (response) { return response.json(); });
    };
    PlanService.prototype.createPlan = function (post) {
        return this._http.post(this._appService.getURL('/plan'), JSON.stringify(post))
            .map(function (response) { return response.json(); });
    };
    return PlanService;
}());
PlanService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, app_service_1.AppService])
], PlanService);
exports.PlanService = PlanService;
//# sourceMappingURL=plan.service.js.map