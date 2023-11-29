import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseAddService } from 'src/app/shared/services/course.add.service';
@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss'],
})
export class CourseAddComponent implements OnInit {
  courseAddForm: FormGroup;

  constructor(private fb: FormBuilder, private courseService: CourseAddService) {
    this.courseAddForm = this.fb.group({
      courseName: ['', Validators.required],
      duration: ['', Validators.required],
      credit: ['', Validators.required],
    });
  }
  ngOnInit(): void {}

  onSubmit() {
    const course:any = {
      name : this.courseAddForm.value.courseName,
      duration: this.courseAddForm.value.duration,
      credit: this.courseAddForm.value.credit
    }

    this.courseService.setCourseFormData(course);
    this.courseAddForm.reset();

  } 
}
