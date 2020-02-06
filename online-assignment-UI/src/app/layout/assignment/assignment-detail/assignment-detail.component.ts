import { Component, OnInit } from '@angular/core';
import { AssignmentModel } from '../assignment.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentService } from '../assignment.service';
import { QuestionModel } from '../../question/question.model';
import { StudentModel } from '../../student/student.model';
import { SubjectModel } from '../../subject/subject.model';
import { UserModel } from 'src/app/shared/model/user.model';

@Component({
    selector: 'app-assignment-detail',
    templateUrl: './assignment-detail.component.html',
    styleUrls: ['./assignment-detail.component.scss']
})
export class AssignmentDetailComponent implements OnInit {
    assignment: AssignmentModel = new AssignmentModel();
    student = false;
    id: string;

    constructor(
        private route: ActivatedRoute,
        private assignmentService: AssignmentService,
        private router: Router
    ) {
        this.assignment.question = new QuestionModel();
        this.assignment.student = new StudentModel();
        this.assignment.question.subject = new SubjectModel();
        this.assignment.student.user = new UserModel();
    }

    ngOnInit() {
        const isStudent = localStorage.getItem('Role');
        if (isStudent === 'Student') {
            this.student = true;
        }

        this.route.params.subscribe(params => {
            this.assignmentService.getById(params.id).subscribe(data => {
                this.assignment = JSON.parse(
                    JSON.parse(JSON.stringify(data))._body
                );
            });
            this.id = params.id;

        });
    }
}
