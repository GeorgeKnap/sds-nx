import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApiModule } from '@sds/api';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
    CommonModule,
    ApiModule
  ],
  exports: [
    CommonModule,
    ApiModule,
    TestComponent
  ],
  declarations: [TestComponent]
})
export class SharedModule {}
