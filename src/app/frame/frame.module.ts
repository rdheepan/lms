import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TopnavbarComponent, PageHeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [TopnavbarComponent, PageHeaderComponent],
})
export class FrameModule {}
