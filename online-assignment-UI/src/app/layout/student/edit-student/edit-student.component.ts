import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { StudentModel } from '../student.model';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {

  private student: StudentModel;
  faculty =["Science", "Management"];
  errors:String = new String(" ");
  grades = ["11", "12"];

  constructor(     private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.studentService.getById(params.id).subscribe(data => {
          this.student = JSON.parse(
              JSON.parse(JSON.stringify(data))._body
          );
      });

  });
  }

  updateStudent(){
    this.studentService.saveTeacher(this.student).subscribe(
      data =>{
        this.router.navigate(['/student/list']);
      },
      error =>{

      }
    );
  }
}
