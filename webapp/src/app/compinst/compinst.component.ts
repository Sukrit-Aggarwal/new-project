import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-compinst',
  templateUrl: './compinst.component.html',
  styleUrls: ['./compinst.component.scss']
})
export class CompinstComponent {
  subscription = new Subscription();
  compinst:any;

  url3 = 'http://127.0.0.1:5000/fulllist/component_instance';

  constructor(private service:PostService) {}

  ngOnInit() {
    this.getCompList(this.url3)
  }

  public getCompList(url3:any){
    this.subscription.add(
      this.service.getPosts(url3)
      .subscribe(res => {
        console.log('--------');
        this.compinst = res["component_instance"];
        //console.log(this.comps)
        //console.log(this.posts);

      },)
    );
  }

}
