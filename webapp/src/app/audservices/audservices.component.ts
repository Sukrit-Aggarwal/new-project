import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-audservices',
  templateUrl: './audservices.component.html',
  styleUrls: ['./audservices.component.scss']
})
export class AudservicesComponent {
  subscription = new Subscription();
  serv:any;

  url6 = 'http://127.0.0.1:5000/fulllist/service';

  constructor(private service:PostService) {}

  ngOnInit() {
    this.getCompList(this.url6)
  }

  public getCompList(url6:any){
    this.subscription.add(
      this.service.getPosts(url6)
      .subscribe(res => {
        console.log('--------');
        this.serv = res["service"];
        //console.log(this.comps)
        //console.log(this.posts);

      },)
    );
  }

}
