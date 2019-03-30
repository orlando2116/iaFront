import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';


//interfaces
import { IService } from '../interfaces/iservice';
import { IOpcionesHttp } from '../interfaces/iopciones-http';

//models
import { Subscription } from '../models/subscription';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private _url = environment.apiUrl ;

  constructor(@Inject('IOpcionesHttp') private _opcionesHttp: IOpcionesHttp,
    private _http: Http) { }

  post(subscription:Subscription){
    return this._http
    .post(`${this._url}landing/subscriptions`,subscription,this._opcionesHttp.getOptions()).pipe(
      map(res => {
        return { ok: res.ok, code: res.status, message: res.json() };
      }))    
  }
}
