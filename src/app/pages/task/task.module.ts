import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { CRUDTableModule } from '../../_metronic/shared/crud-table';
import { ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { ShareModule } from 'ngx-sharebuttons';
import { SharedAppModule } from '@shared/shared.module';
import { ShareArticleComponent } from './share-article/share-article.component';
import { JoinGroupComponent } from './join-group/join-group.component';
import { TranslationModule } from '../../modules/i18n/translation.module';

@NgModule({
  declarations: [TaskComponent, ShareArticleComponent, JoinGroupComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    CRUDTableModule,
    ReactiveFormsModule,
    InlineSVGModule,
    ShareModule,
    SharedAppModule,
    TranslationModule
  ]
})
export class TaskModule { }
