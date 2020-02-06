import { Component, OnInit } from '@angular/core';
import { TeacherModel } from '../teacher.model';
import { UserModel } from 'src/app/shared/model/user.model';
import { TeacherService } from '../teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent implements OnInit {

  teacher:TeacherModel;
  errors:String;
  constructor(private teacherService : TeacherService, private router : Router) { 
    this.teacher = new TeacherModel();
    this.teacher.user = new UserModel();
    this.teacher.user.role ='Teacher';
    this.errors= new String();
  }

  ngOnInit() {
  }

  addTeacher(){
    this.teacherService.saveTeacher(this.teacher).subscribe(
      data=>{
        this.router.navigate(['/teacher/list']);
      }
    )
  }

}
