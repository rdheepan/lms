import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TopnavbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [TopnavbarComponent],
})
export class FrameModule {}
