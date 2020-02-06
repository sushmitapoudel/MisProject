import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { TeacherModel } from './teacher.model';

@Injectable()
export class TeacherService {  
     teacherUrl : string ="http://localhost:8080/teachers";
  constructor(private http: Http) { }
  getAll() {
    return this.http.get(this.teacherUrl + "/list");
  }

  saveTeacher(teacherModel: TeacherModel) {
    return this.http.post(this.teacherUrl +"/save",teacherModel);
  }
 
  getById(id){
    return this.http.get(this.teacherUrl +"/" +id);
  }
}