import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/user';
import { Sale } from '../models/sale';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  ENDPOINT = environment.urlServer;

  constructor(private http: HttpClient) { }

  public getUsers():Observable<any>{
    return this.http.get<any>(this.ENDPOINT + 'd5ddf1ff-a0e2-4a7e-bbcc-e832bef6a503')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  public getSales():Observable<any>{
    return this.http.get<any>(this.ENDPOINT + '15517ca5-7e07-4ebc-bf63-5b033ec4e16a')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
