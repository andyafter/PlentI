'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./shared/dashboard.component");
var plan_component_1 = require("./plans/plan.component");
var planlist_component_1 = require("./plans/planlist.component");
var profile_component_1 = require("./user/profile.component");
var map_component_1 = require("./shared/map.component");
exports.routerConfig = router_1.RouterModule.forRoot([
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'user',
        component: profile_component_1.UserProfileComponent
    },
    {
        path: 'plan',
        component: plan_component_1.PlanComponent
    },
    {
        path: 'planlist',
        component: planlist_component_1.PlanListComponent
    },
    {
        path: 'plan',
        component: plan_component_1.PlanComponent
    },
    {
        path: 'map',
        component: map_component_1.MapComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
]);
//# sourceMappingURL=app.config.js.map