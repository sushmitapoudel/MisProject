import { QuestionModule } from '../question/question.module';
import { QuestionModel } from '../question/question.model';
import { StudentModel } from '../student/student.model';
import { Identifiers } from '@angular/compiler';

export class AssignmentModel{
    public id: string;
    public value: string;
    public question: QuestionModel;
    public  student: StudentModel;
}