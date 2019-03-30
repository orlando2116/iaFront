export interface IService {
    get?(parameter?: any,parameter2?:any): any;
    post?(parameter?: any): any;
    put?(parameter?: any): any;
    delete?(parameter?: any): any;
  }
  