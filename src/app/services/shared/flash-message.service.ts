import { Injectable } from '@angular/core';

import { NgFlashMessageService } from 'ng-flash-messages';

@Injectable()
export class FlashMessageService {

  constructor( 
    private ngFlashMessageService: NgFlashMessageService) { }  

  mostrarMensaje(mensaje:string, tipo:string){
    this.ngFlashMessageService.showFlashMessage({
        messages: [mensaje], 
        dismissible: true, 
        timeout: 2000,
        type: tipo
      });
  }

}