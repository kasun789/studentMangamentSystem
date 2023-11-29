import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseAddService {
  private formData ?: any = [];

  constructor() { }

  setCourseFormData(data:any){
    this.formData.push(data);
  }

  getCourseFormData(){
    return this.formData;
  }
}
