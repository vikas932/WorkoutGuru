import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { FitnessHomeComponent } from './Components/Fitness/FitnessHome.component';
import { WorkoutListComponent } from './Components/NavPages/WorkoutList/WorkoutList.component';
import { APP_BASE_HREF } from '@angular/common';

const appRoutes: Routes = [
    { path: 'home', component: FitnessHomeComponent },
    { path: 'WorkoutList', component: WorkoutListComponent}
]
@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, FitnessHomeComponent, WorkoutListComponent],
    bootstrap: [AppComponent]
    //providers: [{ provide: APP_BASE_HREF, useValue: 'home' }]
})
export class AppModule { }