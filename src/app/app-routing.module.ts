import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './views/comments/comments.component';
import { FormComponent } from './views/form/form.component';
import { UpdatecommentsComponent } from './views/updatecomments/updatecomments.component';

const routes: Routes = [
  {path:'',component:FormComponent},
  {path:'comments',component:CommentsComponent},
  {path:'comments/:id',component:UpdatecommentsComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
