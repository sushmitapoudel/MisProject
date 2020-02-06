import { TeacherModel } from '../teacher/teacher.model';
import { SubjectModel } from '../subject/subject.model';

export class QuestionModel{
    public id:String;
    public subject:SubjectModel;
    public teacher:TeacherModel;
    public deadLine:String;
    public name:String;
} 