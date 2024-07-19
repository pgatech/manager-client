import { AppServiceInterface } from "./app.service.interface";

export class MainService implements AppServiceInterface{
    getAppName(): string {
        return 'Main Services';
    }
    getAppVersion(): string {
        return '2.0.0';
    }
    getAppDescription(): string {
        return 'This is Main Services';
    }

}