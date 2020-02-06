import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class DashboardService {
  token: string;

  constructor(private http: Http) {
  }

  getStudentCount() {
    return this.http.get("http://localhost:8080/students/count" );
  }
  getTeacherCount() {
    return this.http.get("http://localhost:8080/teachers/count" );
  }
  getAssignmentt() {
    return this.http.get("http://localhost:8080/answers/count" );
  }

}