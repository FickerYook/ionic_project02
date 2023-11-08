import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { News } from '../../model/news';

@Injectable()
export class NewsServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NewsServiceProvider Provider');
  }

  getNews(): Observable<News[]> {
    return this.http.get<any>('https://newsapi.org/v2/top-headlines?country=us&apiKey=d79d231c146f45678984c437e9e5121a')
      .pipe(
        map((res: any) => res.articles as News[]),
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<any> {
    return Observable.throw(error.message || 'เกิดข้อผิดพลาดจาก Server');
  }
}




// private handleError(error: any){
//   return Observable.throw(error.json().errorMessage || 'เกิดข้อผิดพลาดจาก Server');
// }