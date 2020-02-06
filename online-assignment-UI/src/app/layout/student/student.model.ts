import { UserModel } from 'src/app/shared/model/user.model';

export class StudentModel{
    public id: string;
   public user:UserModel;
   public faculty:String;
    public roll:String;
    public grade: string;
} 