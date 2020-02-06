import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { StudentModel } from './student.model';

@Injectable()
export class StudentService {  
     studentUrl : string ="http://localhost:8080/students";
  constructor(private http: Http) { }
  getAll() {
    return this.http.get(this.studentUrl + "/list");
  }

  saveTeacher(studentModel: StudentModel) {
    return this.http.post(this.studentUrl +"/save",studentModel);
  }
 
  getById(id){
    return this.http.get(this.studentUrl +"/" +id);
  }
}