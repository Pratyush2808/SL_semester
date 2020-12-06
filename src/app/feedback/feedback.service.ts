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
  submit(feedback: string) {
    const feedbackItem = {
      feedback: feedback
    }
    this.http.post<any>("http://localhost:3000/api/feedback", feedbackItem)
      .subscribe(data => {
        this.feedback.push(data);
        this.feedbackUpdtaed.next([...this.feedback])
        console.log(data);
      })
  }
  getFeedback() {
    this.http.get<any>("http://localhost:3000/api/feedback/").subscribe(data => {
      this.feedback = data;
      this.feedbackUpdtaed.next([...this.feedback]);
    })
  }
  getFeedbackUpdateListener(): any {
    return this.feedbackUpdtaed.asObservable();
  }
  delete(id) {
    this.http.delete('http://localhost:3000/api/feedback/'+ id).subscribe(data => {
      const updatedFeedback = this.feedback.filter(feedbackItem => feedbackItem._id !== id);
      this.feedback = updatedFeedback;
      this.feedbackUpdtaed.next([...this.feedback]);
    })
  }
}
