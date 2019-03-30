import { Injectable} from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { IOpcionesHttp } from '../../interfaces/iopciones-http';


@Injectable()
export class OpcionesHttp implements IOpcionesHttp {


  constructor() {      
   }

  getOptions() {
    return new RequestOptions({
      headers: new Headers({     
        'Content-Type': 'application/json'    
      })
    });
  }

}
