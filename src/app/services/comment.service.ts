import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { CommentModel } from '../model/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  [x: string]: any;

  constructor(private HttpClient : HttpClient) {}

  public getComment() : Observable <CommentModel[]> {
    return this.HttpClient.get<CommentModel[]>("https://leotimsapp.azurewebsites.net/comment");
  }

  public createComment(idPost: any): Observable <CommentModel>{
    return this.HttpClient.get<CommentModel>('https://leotimsapp.azurewebsites.net/comment');

  }
 }

