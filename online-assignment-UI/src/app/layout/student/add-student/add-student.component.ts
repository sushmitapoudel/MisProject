import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../student.model';
import { UserModel } from 'src/app/shared/model/user.model';
import {  Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  student: StudentModel;
  faculty =["Science", "Management"];
  errors:String = new String(" ");
  grades = ["11", "12"];
  constructor(private router : Router, private studnetService: StudentService) {

   this.student = new StudentModel();
   this.student.user = new UserModel();
   this.student.user.role ='Student';
   }

  ngOnInit() {
   
  }

  addStudent(){
    this.studnetService.saveTeacher(this.student).subscribe(
      data =>{
        this.router.navigate(['/student/list']);
      },
      error =>{

      }
    );
  }
}
