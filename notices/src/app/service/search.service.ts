import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Notice } from '../model/notice.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private _http:HttpClient) { }

  public search(title:Text):Observable<any>{
    return this._http.get<Notice[]>(`${"http://localhost:8080/notices/?title="}${title}`)
       
  }

}
