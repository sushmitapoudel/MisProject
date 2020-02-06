import { AssignmentModel } from '../assignment/assignment.model';

export class FeedbackModel{
    public marks: string;
    public answer: AssignmentModel;
    public comment: string;
}