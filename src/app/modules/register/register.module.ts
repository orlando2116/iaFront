import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from '../../components/register/register.component';
import { MaterialModule } from '../shared/material.module';

//services
import { SubscriptionService } from 'src/app/services/subscription.service';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    FormsModule,
    MaterialModule,
    CommonModule,
    RegisterRoutingModule
  ],
  providers:[
    SubscriptionService
  ],
  exports:[RegisterComponent]
})
export class RegisterModule { }
