import { Injectable } from '@angular/core';
import { Observable } from 'rxjs' ;
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  public getPosts(url:any) : Observable<any>{
    
    console.log('in service')
    console.log(this.http.get(url))
    return this.http.get(url);
  }
}
