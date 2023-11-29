import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentAddService {
  private formData: any = [];
  constructor() { }

  setStudentFormData(data : any){
    this.formData.push(data);    
  }

  getStudentFormData(){    
    return this.formData;
  }
}
