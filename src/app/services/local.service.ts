import { Injectable } from "@angular/core";
import { AppServiceInterface } from "./app.service.interface";

@Injectable()
export class LocalService implements AppServiceInterface{
    getAppName(): string {
        return 'Manager Local';
    }
    getAppVersion(): string {
        return '1.0.0';
    }
    getAppDescription(): string {
        return 'This is Local Version 1';
    }
    
}