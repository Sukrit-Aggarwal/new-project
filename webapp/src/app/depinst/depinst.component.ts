import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-depinst',
  templateUrl: './depinst.component.html',
  styleUrls: ['./depinst.component.scss']
})
export class DepinstComponent {
  subscription = new Subscription();
  depinst:any;

  url5 = 'http://127.0.0.1:5000/fulllist/dependency_instance';

  constructor(private service:PostService) {}

  ngOnInit() {
    this.getCompList(this.url5)
  }

  public getCompList(url5:any){
    this.subscription.add(
      this.service.getPosts(url5)
      .subscribe(res => {
        console.log('--------');
        this.depinst = res["dependency_instance"];
        //console.log(this.comps)
        //console.log(this.posts);

      },)
    );
  }

}
