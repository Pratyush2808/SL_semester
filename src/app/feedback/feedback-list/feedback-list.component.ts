import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {
  feedbackList = [];
  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.feedbackService.getFeedback();
    this.feedbackService.getFeedbackUpdateListener().subscribe(data => {
      this.feedbackList = data;
    })
  }
  onDelete(id) {
    this.feedbackService.delete(id);
  }
}
