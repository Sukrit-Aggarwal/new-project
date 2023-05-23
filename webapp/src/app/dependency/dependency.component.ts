import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-dependency',
  templateUrl: './dependency.component.html',
  styleUrls: ['./dependency.component.scss']
})
export class DependencyComponent {
  subscription = new Subscription();
  deps:any;

  url4 = 'http://127.0.0.1:5000/fulllist/dependency';

  constructor(private service:PostService) {}

  ngOnInit() {
    this.getCompList(this.url4)
  }

  public getCompList(url4:any){
    this.subscription.add(
      this.service.getPosts(url4)
      .subscribe(res => {
        console.log('--------');
        this.deps = res["dependency"];
        //console.log(this.comps)
        //console.log(this.posts);

      },)
    );
  }

}
