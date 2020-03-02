/* tslint:disable */
import { NgModule } from '@angular/core';
import { AdministrationApiConfiguration } from './administration-api-configuration';

import { AddressService } from './services/address.service';
import { ContactService } from './services/contact.service';
import { FleetService } from './services/fleet.service';
import { PlantService } from './services/plant.service';
import { LocationService } from './services/location.service';
import { PortalService } from './services/portal.service';
import { UserService } from './services/user.service';
import { EasyVerificationService } from './services/easy-verification.service';

/**
 * Provider for all AdministrationApi services, plus AdministrationApiConfiguration
 */
@NgModule({
  providers: [
    AdministrationApiConfiguration,
    AddressService,
    ContactService,
    FleetService,
    PlantService,
    LocationService,
    PortalService,
    UserService,
    EasyVerificationService
  ],
})
export class AdministrationApiModule { }
