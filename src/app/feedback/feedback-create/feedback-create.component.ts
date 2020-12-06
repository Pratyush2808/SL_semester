import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
@Component({
  selector: 'app-feedback-create',
  templateUrl: './feedback-create.component.html',
  styleUrls: ['./feedback-create.component.css']
})
export class FeedbackCreateComponent implements OnInit {
  feedback: string;
  constructor(private feedbackService: FeedbackService) { }
  ngOnInit(): void {
  }
  onSubmit() {
    this.feedbackService.submit(this.feedback);
    this.feedback = '';
  }
}
