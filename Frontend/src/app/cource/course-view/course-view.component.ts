import { Component, OnInit } from '@angular/core';
import { CourseAddService } from 'src/app/shared/services/course.add.service';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.scss']
})
export class CourseViewComponent implements OnInit {
  courseFormData?:any;

  constructor(private courseService:CourseAddService) {
    
  }

  ngOnInit(): void {
      this.courseFormData = this.courseService.getCourseFormData();
  }
}
