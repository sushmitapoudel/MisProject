import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from '../teacher.service';
import { TeacherModel } from '../teacher.model';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.scss']
})
export class EditTeacherComponent implements OnInit {

  public teacher : TeacherModel;
  errors ="";
  constructor(     private route: ActivatedRoute,
    private teacherService: TeacherService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.teacherService.getById(params.id).subscribe(data => {
          this.teacher = JSON.parse(
              JSON.parse(JSON.stringify(data))._body
          );
      });

  });
  }

  editTeacher(){
    this.teacherService.saveTeacher(this.teacher).subscribe(
      data =>{
        this.router.navigate(['/teacher/list']);
      },
      error =>{

      }
    );
  }

}
