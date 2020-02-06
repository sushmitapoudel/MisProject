
import { Http } from '@angular/http';
import { QuestionModule } from './question.module';
import { QuestionModel } from './question.model';
import { Injectable } from '@angular/core';

@Injectable()
export class QuestionService{
    questionUrl : string ="http://localhost:8080/questions";
  constructor(private http: Http) { }

  getByTeacherId(id) {
    return this.http.get(this.questionUrl + "/list?id="+id);
  }

  addQuestion(question: QuestionModel) { 
    return this.http.post(this.questionUrl +"/save",question);
  }

  getByGradeAndSubject(grade, subject) {
    return this.http.get(this.questionUrl + "/grade/" + grade + "/subject/"+subject );
  }

  getByGradeAndFaculty(grade, faculty) {
    return this.http.get(this.questionUrl + "/grade/" + grade + "/faculty/"+ faculty );
  }

  getAll() {
    return this.http.get(this.questionUrl + "/all");
  }
}