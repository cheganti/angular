import { Component } from '@angular/core';
import { Observable, Subscription, filter, interval, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  intervalSub!: Subscription;
  ngOnInit() {
    // this.intervalSub = interval(1000).subscribe((count) => {
    //   // console.log(count)
    // })
    let customObservable = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count > 3) {
          observer.error("count is greater than 3");

        }
        if (count > 2) {
          observer.complete();
        }
        count++
      }, 1000)
    })
    this.intervalSub = customObservable.pipe(map((data: number) => {
      return 'count is ' + (data + 1)
    })).subscribe((data: any) => {
      console.log(data)
    }, (error: any) => console.log(error), () => console.log("complete"))
  }
  ngOnDestroy() {
    this.intervalSub.unsubscribe();
  }
}
