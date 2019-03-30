import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterModule } from './modules/register/register.module';
import { HeaderModule } from './modules/header/header.module';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

/*shared*/
import { OpcionesHttp } from './services/shared/opciones-http';
import { NgFlashMessagesModule } from 'ng-flash-messages';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgFlashMessagesModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,HttpModule,
    RegisterModule,
    HeaderModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: 'IOpcionesHttp', useClass: OpcionesHttp }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
