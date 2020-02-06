import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class FeedbackSerivce{
    subjectUrl ="http://localhost:8080/feedback";
  constructor(private http: Http) { }

  addFeedback(feedback) {
    return this.http.post(this.subjectUrl +"/save", feedback );
  }

  getByAnswerId(id) {
    return this.http.get(this.subjectUrl +"/answer/"+id);
  }
}
