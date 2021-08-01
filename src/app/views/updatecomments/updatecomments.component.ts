import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comments } from 'src/app/models/commentsModel';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-updatecomments',
  templateUrl: './updatecomments.component.html',
  styleUrls: ['./updatecomments.component.css']
})
export class UpdatecommentsComponent implements OnInit {

  id:string=this.route.snapshot.params.id
  comment:Comments={}
  constructor(private commentServices:CommentsService,private route:ActivatedRoute) { }

  updateComments(comment:Comments){
    this.commentServices.updateComments(this.id,comment).subscribe(()=>{})
  }

  getSingleComment(){
    this.commentServices.getSingleComment(this.id).subscribe((res)=>{
      this.comment=res
    })
  }

  ngOnInit(): void {
    this.getSingleComment()
  }

}
