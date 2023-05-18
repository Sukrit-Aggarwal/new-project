import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs'


@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.scss']
})
export class CompComponent {
  subscription = new Subscription();
  comps:any;

  url2 = 'http://127.0.0.1:5000/fulllist/component';

  constructor(private service:PostService) {}

  ngOnInit() {
    this.getCompList(this.url2)
  }

  public getCompList(url2:any){
    this.subscription.add(
      this.service.getPosts(url2)
      .subscribe(res => {
        console.log('--------');
        this.comps = res["component"];
        //console.log(this.comps)
        //console.log(this.posts);

      },)
    );
  }
}
