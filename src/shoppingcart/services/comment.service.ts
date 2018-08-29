import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductComment } from '../../models/comments';

const COMMENTS_API = 'http://localhost:3000/comments';

@Injectable()
export class CommentsService {
    constructor(private httpClient: HttpClient) { }

    getComments(): Observable<ProductComment[]> {
        return this.httpClient
            .get<ProductComment[]>(COMMENTS_API)
            .pipe(
                catchError((error: any) => Observable.throw(error.json()))
            );
    }

    addComment(comment: ProductComment): Observable<ProductComment> {
        return this.httpClient
            .post<ProductComment>(COMMENTS_API, comment)
            .pipe(
                catchError((error: any) => Observable.throw(error.json()))
            );
    }

}