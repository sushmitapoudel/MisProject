import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SubjectSerivce{
    subjectUrl ="http://localhost:8080/subjects";
  constructor(private http: Http) { }

  getSubjects(grade, faculty) {
    return this.http.get(this.subjectUrl +"/grade/" + grade + "?faculty=" + faculty);
  }

  addSubject(subject) {
    return this.http.post(this.subjectUrl +"/add", subject );
  }

  getAll() {
    return this.http.get(this.subjectUrl +"/list");
  }

  delete(id) {
    return this.http.delete(this.subjectUrl +"/delete/"+id);
  }
}
