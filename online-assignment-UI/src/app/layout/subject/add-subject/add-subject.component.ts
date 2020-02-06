import { Component, OnInit } from '@angular/core';
import { SubjectModel } from '../subject.model';
import { SubjectSerivce } from '../subject.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss']
})
export class AddSubjectComponent implements OnInit {

  subject: SubjectModel= new SubjectModel();
  grades = ["11", "12"];
  faculty = ["Science", "Management"];
  
  constructor(private subService: SubjectSerivce, private router: Router) { }

  ngOnInit() {
  }

  addSubject(){
    this.subService.addSubject(this.subject).subscribe(
      data =>{
          this.router.navigateByUrl("/subject/list");
      }, error => {

      }
    );
  }

}
