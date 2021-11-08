import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notice } from '../model/notice.model';

@Injectable({
  providedIn: 'root'
})
export class UpdatePartiallyService {

  constructor(private _http:HttpClient) { }

  public updatePartially(id:number,notice:Notice):Observable<any>{
    return this._http.patch<Notice[]>(`${"http://localhost:8080/notices"}/${id}`,notice)    
  }
}
