import { PhotoFrameComponent } from './photo-frame.component';
import { LikeWidgetModule } from './../../components/like-widget/like-widget.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [PhotoFrameComponent],
  imports: [
    CommonModule,
    LikeWidgetModule
  ],
  exports: [PhotoFrameComponent]
})
export class PhotoFrameModule { }
