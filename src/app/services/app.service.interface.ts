export interface AppServiceInterface{
    getAppName(): string;
    getAppVersion(): string;
    getAppDescription(): string;
}

export const IAppServices = Symbol('AppServicesInterface');

