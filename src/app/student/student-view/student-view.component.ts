import { Component , OnInit} from '@angular/core';
import { StudentAddService } from 'src/app/shared/services/student.add.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent implements OnInit {
  
  studentData?:any;
  constructor(private studentAddService : StudentAddService) {}

  ngOnInit(): void {
    this.studentData = this.studentAddService.getStudentFormData();
}
}
