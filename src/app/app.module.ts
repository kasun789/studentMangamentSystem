import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentViewComponent } from './student/student-view/student-view.component';
import {FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { CourceComponent } from './cource/cource.component';
import { CourseViewComponent } from './cource/course-view/course-view.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentAddComponent,
    StudentViewComponent,
    NavBarComponent,
    CourceComponent,
    CourseViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
