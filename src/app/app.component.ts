import { Component, Inject, OnInit } from '@angular/core';
import { AppServiceInterface, IAppServices } from './services/app.service.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'manager-client';

  constructor(
    @Inject(IAppServices)
    private appService: AppServiceInterface) { }
  ngOnInit(): void {
    console.log('App name:', this.appService.getAppName());
    console.log('App version:', this.appService.getAppVersion());
    console.log('App description:', this.appService.getAppDescription());
  }
}
