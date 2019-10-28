"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const http_1 = require("@angular/http");
const FitnessHome_component_1 = require("./FitnessHome.component");
const router_1 = require("@angular/router");
const WorkoutList_component_1 = require("../NavPages/WorkoutList/WorkoutList.component");
const appliRoutes = [
    { path: 'home', component: FitnessHome_component_1.FitnessHomeComponent },
    { path: 'WorkoutList', component: WorkoutList_component_1.WorkoutListComponent }
];
let fitnessHomeModule = class fitnessHomeModule {
};
fitnessHomeModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, router_1.RouterModule.forRoot(appliRoutes)],
        declarations: [FitnessHome_component_1.FitnessHomeComponent, WorkoutList_component_1.WorkoutListComponent],
        bootstrap: [FitnessHome_component_1.FitnessHomeComponent]
    })
], fitnessHomeModule);
exports.fitnessHomeModule = fitnessHomeModule;
//# sourceMappingURL=FitnessHome.module.js.map