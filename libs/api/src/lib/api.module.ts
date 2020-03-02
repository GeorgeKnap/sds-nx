import { NgModule } from '@angular/core';
import { AdministrationApiModule } from './administration/administration-api.module';

@NgModule({
  declarations: [],
  imports: [
    AdministrationApiModule
  ],
  exports: [
    AdministrationApiModule
  ]
})
export class ApiModule {}
