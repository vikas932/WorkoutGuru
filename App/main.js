"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const app_module_1 = require("./app.module");
const FitnessHome_module_1 = require("./Components/Fitness/FitnessHome.module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(FitnessHome_module_1.fitnessHomeModule);
//# sourceMappingURL=main.js.map