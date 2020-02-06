import { Component, OnInit, AfterViewInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DashboardService } from './dashboard.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    public totalTeacher: string;
    public totalStudent: string;
    public totalAssignment: string;
    constructor(private dashboardService : DashboardService) {
        this.getUserCount();
        this.getproductCount();
        this. getOrderCount();
        this.sliders.push(
            {
                imagePath: 'assets/images/2.PNG',
                label: '',
                text: ''
            },
            {
                imagePath: 'assets/images/3.jpg',
                label: '',
                text: ''
            },
                    );
    }

  ngOnInit() {
   
  }

  public closeAlert(alert: any) {
      const index: number = this.alerts.indexOf(alert);
      this.alerts.splice(index, 1);
  }

  getUserCount(){
      this.dashboardService.getAssignmentt().subscribe(data => {
          this.totalAssignment = JSON.parse(JSON.parse(JSON.stringify(data))._body);
          console.log(this.totalAssignment);
      },
          error => {

          });
  }
  getproductCount(){
      this.dashboardService.getStudentCount().subscribe(data => {
          this.totalStudent = JSON.parse(JSON.parse(JSON.stringify(data))._body);
      },
          error => {

          });
  }
  getOrderCount(){
      this.dashboardService.getTeacherCount().subscribe(data => {
          this.totalTeacher = JSON.parse(JSON.parse(JSON.stringify(data))._body);
      },
          error => {

          });
  }

}
