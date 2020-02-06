import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

@Injectable()
export class AssignmentService{
    assignmentUrl = "http://localhost:8080/answers"

    constructor(private http:Http){}

    submitAssignment(assignment){
        return this.http.post(this.assignmentUrl + "/save", assignment);
    }
    
    getByTeacherId(id){
        return this.http.get(this.assignmentUrl + "/teacher/"+id);
    }
    
    getByStudentId(id){
        return this.http.get(this.assignmentUrl + "/student/"+id);
    }
    delete(id){
        return this.http.delete(this.assignmentUrl + "/delete/"+id);
    }

    getById(id){
        return this.http.get(this.assignmentUrl + "/"+id);
    }

}