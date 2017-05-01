"use strict";
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
var core_1 = require("@angular/core");
var flight_service_1 = require("./services/flight.service");
var app_service_1 = require("./services/app.service");
var plan_service_1 = require("./services/plan.service");
var destination_service_1 = require("./services/destination.service");
var AppComponent = (function () {
    function AppComponent(_flightService, _planService, _destinationService) {
        this._flightService = _flightService;
        this._planService = _planService;
        this._destinationService = _destinationService;
        this.name = 'John';
        this._flightService.getFlight()
            .subscribe(function (flight) {
            console.log(flight);
        });
        this._planService.getPlan()
            .subscribe(function (plan) { return console.log(plan); });
        this._destinationService.getDestination()
            .subscribe(function (destination) { return console.log(destination); });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n        <div class=\"container\">\n            <nav class=\"navbar navbar-dark bg-inverse\">\n                <ul class=\"nav navpills\" routerLinkActive=\"active\">\n                    <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"dashboard\">Home</a></li>\n                    <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"user\">My Profile</a></li>\n                    <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"planlist\">Explore</a></li>\n                    <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"map\">Map</a></li>\n                </ul>\n            </nav>\n            <router-outlet> </router-outlet>\n        </div>\n    ",
        providers: [flight_service_1.FlightService,
            plan_service_1.PlanService,
            destination_service_1.DestinationService,
            app_service_1.AppService]
    }),
    __metadata("design:paramtypes", [flight_service_1.FlightService,
        plan_service_1.PlanService,
        destination_service_1.DestinationService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map