import { Component, OnInit } from '@angular/core';
import { Comments } from 'src/app/models/commentsModel';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  comments: Comments[] = [];

  constructor(private commentService: CommentsService) {}

  getComments() {
    this.commentService.getComment().subscribe((res) => {
      this.comments = res
    },(error)=>{
      console.log(error)
    })
  }

   addComment(comment:Comments){
      this.commentService.addComments(comment).subscribe(()=>{
        this.comments.splice(0,0,comment)
      })
   }

   deleteComment(comment:Comments){
     this.commentService.deleteComment(comment.id).subscribe(()=>{
       let index=this.commentService.url.indexOf('')
       this.comments.splice(index,1)
     })

   }

  ngOnInit(): void {
    this.getComments()
  }
}
