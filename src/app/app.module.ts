import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IAppServices } from './services/app.service.interface';
import { MainService } from './services/main.service';
import { LocalService } from './services/local.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: IAppServices,
      useClass: LocalService,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
