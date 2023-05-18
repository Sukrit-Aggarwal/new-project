import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  subscription = new Subscription();
  scopes:any;
  comps:any;
  
  url1 = 'http://127.0.0.1:5000/fulllist/scope';
  url2 = 'http://127.0.0.1:5000/fulllist/component';
  constructor(private service:PostService) {}

  scp:any
  cmp:any

  compCall1(event:any)
  {
    this.scp = event.value;
    console.log(this.scp);
    this.url2 = this.url2 + "?scope=" + this.scp;
    console.log(this.url2)
    this.getCompList(this.url2)
    this.url2 = 'http://127.0.0.1:5000/fulllist/component'
  }
  compCall2(event:any)
  {
    this.cmp = event.value;
    console.log(this.cmp);
  }

  onClick(event:any){
    console.log('-----')
    console.log(this.scp)
    console.log(this.cmp)
  }



  ngOnInit() {
      this.getScopeList(this.url1);
      this.getCompList(this.url2)
  }
    public getScopeList(url1:any){
      this.subscription.add(
        this.service.getPosts(url1)
        .subscribe(res => {
          console.log('--------');
          this.scopes = res["scope"];
          //console.log(this.posts);
        },)
      );
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