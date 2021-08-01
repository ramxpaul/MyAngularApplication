import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comments } from '../models/commentsModel';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  url='https://jsonplaceholder.typicode.com/comments/'

  constructor(private http:HttpClient) { }

  getComment(){
    return this.http.get<Comments []>(this.url)
  }

  addComments(comment:Comments){
    return this.http.post(this.url,comment)

  }

  updateComments(id:any,comment:Comments){
    return this.http.patch(this.url+id,comment)
  }

  getSingleComment(id:string){
    return this.http.get<Comments>(this.url+id)
  }

  deleteComment(id:any){
    return this.http.delete(this.url+id)
  }

}
