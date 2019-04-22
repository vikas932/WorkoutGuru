import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { fitnessHomeModule } from "./Components/Fitness/FitnessHome.module";

platformBrowserDynamic().bootstrapModule(AppModule); 
platformBrowserDynamic().bootstrapModule(fitnessHomeModule);