import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackCreateComponent } from './feedback/feedback-create/feedback-create.component';
import { FeedbackListComponent } from './feedback/feedback-list/feedback-list.component';

const routes: Routes = [
  { path: '', component: FeedbackCreateComponent },
  { path: 'list', component: FeedbackListComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRoutingModule = RouterModule.forRoot(routes);