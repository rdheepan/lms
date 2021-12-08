import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabListComponent } from './lab-list/lab-list.component';
import { RouterModule, Routes } from '@angular/router';
import { LabDetailsComponent } from './lab-details/lab-details.component';
import { PageHeaderComponent } from './page-header/page-header.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'labs',
  },
  {
    path: 'labs',
    component: LabListComponent,
  },
  {
    path: 'lab-details/:id',
    component: LabDetailsComponent,
  },
];

@NgModule({
  declarations: [LabListComponent, LabDetailsComponent, PageHeaderComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LabsModule {}
