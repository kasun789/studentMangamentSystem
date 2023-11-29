import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Student } from "../../shared/models/student";
import { StudentAddService } from 'src/app/shared/services/student.add.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss'],
})

export class StudentAddComponent implements OnInit{
  studentAddForm : FormGroup;
  studentName = new FormControl('');
  course = new FormControl('');
  grade = new FormControl('');

  constructor(private fb: FormBuilder, private studentAddService : StudentAddService) {
    this.studentAddForm = this.fb.group({
      studentName :['', Validators.required],
      course :['',Validators.required],
      grade : ['',Validators.required]
    })
  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    
    const student :any = {
      name : this.studentAddForm.value.studentName,
      course : this.studentAddForm.value.course,
      grade : this.studentAddForm.value.grade
    }
    this.studentAddService.setStudentFormData(student);
    this.studentAddForm.reset();
  }
}
