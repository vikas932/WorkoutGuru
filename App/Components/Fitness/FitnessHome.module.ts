import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from '@angular/http';
import { FitnessHomeComponent } from "./FitnessHome.component";
import { Routes, RouterModule } from '@angular/router';
import { WorkoutListComponent } from '../NavPages/WorkoutList/WorkoutList.component';

const appliRoutes: Routes = [
    { path: 'home', component: FitnessHomeComponent },
    { path: 'WorkoutList', component: WorkoutListComponent }
]

@NgModule({
    imports: [BrowserModule, HttpModule, RouterModule.forRoot(appliRoutes)],
        declarations: [FitnessHomeComponent, WorkoutListComponent],
    bootstrap: [FitnessHomeComponent]
})
export class fitnessHomeModule {
}