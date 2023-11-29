import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentComponent } from './student/student.component';
import { CourceComponent } from './cource/cource.component';

const routes: Routes = [
  {
    path :'',
    component : StudentComponent
  },
  {
    path : 'cource',
    component : CourceComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
