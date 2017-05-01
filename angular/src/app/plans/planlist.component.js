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
var core_1 = require("@angular/core");
var plan_service_1 = require("../services/plan.service");
var PlanListComponent = (function () {
    function PlanListComponent(_planService) {
        this._planService = _planService;
        // here choose the top 10 plans
        this.plans = ["Vancouver", "Shanghai", "San Francisco"];
    }
    PlanListComponent.prototype.refreshPlans = function () {
        this._planService.getPlan()
            .subscribe(function (plan) {
            console.log('here');
            console.log('again');
        });
    };
    PlanListComponent.prototype.viewPlan = function (plan) {
        console.log(plan);
    };
    return PlanListComponent;
}());
PlanListComponent = __decorate([
    core_1.Component({
        selector: 'plan-list',
        template: "\n        <div class='list-group'>\n            <button *ngFor='let plan of plans  let i = index' \n                (click)='viewPlan(plan)'\n                class='list-group-item'>\n                <span class='label label-default label-pill pull-right'>  </span>\n                {{i+1}} - {{plan}}\n            </button>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [plan_service_1.PlanService])
], PlanListComponent);
exports.PlanListComponent = PlanListComponent;
//# sourceMappingURL=planlist.component.js.map