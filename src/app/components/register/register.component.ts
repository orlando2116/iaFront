import { Component, OnInit } from '@angular/core';

import { SubscriptionService } from 'src/app/services/subscription.service';
import { FlashMessageService } from '../../services/shared/flash-message.service';

import { Subscription } from 'src/app/models/subscription';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private subscription:Subscription=new Subscription();

  constructor(private _subscriptionService:SubscriptionService,
    private _flashMessageService: FlashMessageService) { }

  ngOnInit() {
  }

  userSubscription(){
      this._subscriptionService.post(this.subscription)
      .subscribe(data => {
        console.log(data);
        this._flashMessageService.mostrarMensaje(`Usuario ${data.message.subscription.name} registrado con éxito.`,'success');
      },
      error => {
        if(error.status===400){
          this._flashMessageService.mostrarMensaje(`ya existe usuario registrado con este email`,'danger');
          return;
        }
        this._flashMessageService.mostrarMensaje(`ha ocurrido un error`,'danger');

       
      });       
  }

  validateFields(){
    if(this.subscription.email &&
       this.subscription.name &&
        this.subscription.phone &&
         this.subscription.rut){
      return;
    }
    return true;
  }

}
