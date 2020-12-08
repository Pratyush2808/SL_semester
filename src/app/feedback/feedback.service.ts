import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  feedback = [];
  feedbackUpdtaed = new Subject();
  constructor(private http: HttpClient) { }
  submit(qname: string, qid: string, mmarks: string, question1:string, q1op1:string,q1op2:string,q1op3:string,q1op4:string,q1cop:string,question2:string,q2op1:string,q2op2:string,q2op3:string,q2op4:string,q2cop:string) {
    const feedbackItem = {
      qname: qname,
      qid: qid,
      mmarks: mmarks,
      question1: question1,
      q1op1: q1op1,
      q1op2: q1op2,
      q1op3: q1op3,
      q1op4: q1op4,
      q1cop: q1cop,
      question2: question2,
      q2op1: q2op1,
      q2op2: q2op2,
      q2op3: q2op3,
      q2op4: q2op4,
      q2cop: q2cop
    }
    this.http.post<any>("http://localhost:4200/api/feedback", feedbackItem)
      .subscribe(data => {
        this.feedback.push(data);
        this.feedbackUpdtaed.next([...this.feedback])
        console.log(data);
      })
  }
  getFeedback() {
    this.http.get<any>("http://localhost:4200/api/feedback/").subscribe(data => {
      this.feedback = data;
      this.feedbackUpdtaed.next([...this.feedback]);
    })
  }
  getFeedbackUpdateListener(): any {
    return this.feedbackUpdtaed.asObservable();
  }
  delete(id) {
    this.http.delete('http://localhost:4200/api/feedback/'+ id).subscribe(data => {
      const updatedFeedback = this.feedback.filter(feedbackItem => feedbackItem._id !== id);
      this.feedback = updatedFeedback;
      this.feedbackUpdtaed.next([...this.feedback]);
    })
  }
}
