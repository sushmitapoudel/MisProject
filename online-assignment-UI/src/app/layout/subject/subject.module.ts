import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { ViewSubjectComponent } from './view-subject/view-subject.component';
import { SubjectSerivce } from './subject.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [AddSubjectComponent, ViewSubjectComponent],
  imports: [
    CommonModule,
    SubjectRoutingModule,
    HttpModule,
    FormsModule,
    NgxDatatableModule
  ],
  providers: [SubjectSerivce]
})
export class SubjectModule { }
