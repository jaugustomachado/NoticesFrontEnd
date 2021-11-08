import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private _http:HttpClient) { }

  public delete(id:number):Observable<any>{
    return  this._http.delete(`${"http://localhost:8080/notices"}/${id}`)
  }
  
}
