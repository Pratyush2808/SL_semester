import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
@Component({
  selector: 'app-feedback-create',
  templateUrl: './feedback-create.component.html',
  styleUrls: ['./feedback-create.component.css']
})
export class FeedbackCreateComponent implements OnInit {
  feedback: string;
  qid: string;
  mmarks: string;
  question1: string;
  q1op1: string;
  q1op2: string;
  q1op3: string;
  q1op4: string;
  q1cop: string;

  question2: string;
  q2op1: string;
  q2op2: string;
  q2op3: string;
  q2op4: string;
  q2cop: string;
  constructor(private feedbackService: FeedbackService) { }
  ngOnInit(): void {
  }
  onSubmit() {
    this.feedbackService.submit(this.feedback, this.qid, this.mmarks, this.question1, this.q1op1, this.q1op2, this.q1op3, this.q1op4, this.q1cop, this.question2, this.q2op1, this.q2op2, this.q2op3, this.q2op4, this.q2cop);
    this.feedback = '';
  }

}
