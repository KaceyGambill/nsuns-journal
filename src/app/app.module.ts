import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatRadioModule,
  MatCardModule,
  MatExpansionModule,
  MatCheckboxModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeekViewComponent } from './week-view/week-view.component';
import { DayViewComponent } from './day-view/day-view.component';
import { WorkoutViewComponent } from './workout-view/workout-view.component';
import { LiftViewComponent } from './workout-view/lift-view/lift-view.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { WorkoutSelectionComponent } from './workout-selection/workout-selection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WeekViewComponent,
    DayViewComponent,
    WorkoutViewComponent,
    LiftViewComponent,
    WelcomeScreenComponent,
    WorkoutSelectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatRadioModule,
    MatCardModule,
    MatExpansionModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
