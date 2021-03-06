import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RemoteServiceProvider {
getApiUrl : string = "https://kazatomprom-backend.herokuapp.com/blocks/1/notes";


constructor(public http: Http) {
  console.log('Hello RemoteServiceProvider Provider');
}
getNotes() {

return this.http.get(this.getApiUrl)
    .do((res : Response ) => console.log(res.json()))
    .map((res => res.json())
  )}

}
