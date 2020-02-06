import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-assignment',
  templateUrl: './view-assignment.component.html',
  styleUrls: ['./view-assignment.component.scss']
})
export class ViewAssignmentComponent implements OnInit {

  student = false;
  constructor() { }

  ngOnInit() {
    const  isStudent = localStorage.getItem('Role');
    if ( isStudent == "Student") {
      this.student = true;
    }
  }

}
