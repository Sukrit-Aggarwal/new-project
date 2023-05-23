import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-ipadinst',
  templateUrl: './ipadinst.component.html',
  styleUrls: ['./ipadinst.component.scss']
})
export class IpadinstComponent {
  subscription = new Subscription();
  ipadd:any;

  url7 = 'http://127.0.0.1:5000/fulllist/ipaddress_instance';

  constructor(private service:PostService) {}

  ngOnInit() {
    this.getCompList(this.url7)
  }

  public getCompList(url7:any){
    this.subscription.add(
      this.service.getPosts(url7)
      .subscribe(res => {
        console.log('--------');
        this.ipadd = res["ipaddress_instance"];
        //console.log(this.comps)
        //console.log(this.posts);

      },)
    );
  }

}
