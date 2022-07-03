import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocaleDatePipe } from './locale-date.pipe';
import { LocaleDateTimePipe } from './locale-date-time.pipe';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    LocaleDatePipe,
    LocaleDateTimePipe
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    LocaleDatePipe,
    LocaleDateTimePipe,
    MatDialogModule
  ]
})
export class SharedModule { }
