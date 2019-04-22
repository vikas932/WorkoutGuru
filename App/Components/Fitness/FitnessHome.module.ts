import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from '@angular/http';
import { FitnessHomeComponent } from "./FitnessHome.component";

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [FitnessHomeComponent],
    bootstrap: [FitnessHomeComponent]
})
export class fitnessHomeModule {
}