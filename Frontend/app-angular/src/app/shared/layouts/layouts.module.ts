import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPhotoModule } from './user-photo/user-photo.module';
import { TableModule } from './table/table.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserPhotoModule,
    TableModule
  ],
  exports: [
    UserPhotoModule,
    TableModule
  ]
})
export class LayoutsModule { }
