import { Component, OnInit } from '@angular/core';

import { SubscriptionService } from 'src/app/services/subscription.service';

import { Subscription } from 'src/app/models/subscription';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private subscription:Subscription=new Subscription();

  constructor(private _subscriptionService:SubscriptionService) { }

  ngOnInit() {
  }

  userSubscription(){
    console.log(this.subscription);
      this._subscriptionService.post(this.subscription)
      .subscribe(data => {
        console.log(data);  
     },
      error => {
        
      });
       
  }

}
